$(document).ready(function(){    
    getPokemons();
    
    $('.previous').click(function() {
        previousButton();
    });

    $('.next').click(function() {
        nextButton();
    }); 
});

let offset = 0;

function getPokemons(){
    (async function (){
        const pokemons = await $.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + offset);                                
        let html = '';
        let counter = 0;

        for(const pokemon of pokemons.results){                                                             
            html += 
            '<div class="panel panel-default">' +
                '<div class="panel-heading">' +
                    '<h4 class="panel-title">' +
                        '<a data-toggle="collapse" data-parent="#accordion" href="#collapse' + counter + '">' + 
                            '<button type="button" class="btn btn-default" onclick="myFunction()">' +
                                `${pokemon.name}` +
                            '</button>' + 
                        '</a>' +
                    '</h4>' +
                '</div>' +
                '<div id="collapse' + counter + '" class="panel-collapse collapse">' + 
                    '<div class="panel-body" id="body'+ counter +'">' +                                               
                        'Loading details...' +
                    '</div>' +
                '</div>' +
            '</div>';            
            counter++;
        }               
        $('#accordion')[0].innerHTML = html;
        counter = 0; 

        for(const pokemon of pokemons.results){                                     
            const pokeDetails = await $.get(pokemon.url);

            let html = '';
            html += `Name: ${pokeDetails.name}<br>`;
            html += `Weight: ${pokeDetails.weight}<br>`;
            html += `<img src="${pokeDetails.sprites.front_default}"/><br>`        
            html += `Abilities:<br><ul>`;
            for(const ability of pokeDetails.abilities){
                html += `<li> ${ability.ability.name} </li>`;
            }
            html += `</ul>`
            $('#body'+counter)[0].innerHTML = html;
            counter++;                        
        }                       
    })();
}

function previousButton(){    
    if (offset >= 20){
        offset -= 20;
    }
    getPokemons();
}

function nextButton(){
    offset += 20;
    getPokemons();
}
