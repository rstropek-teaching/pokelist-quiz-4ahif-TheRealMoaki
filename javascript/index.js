var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
$(document).ready(function () {
    getPokemons();
    $('.previous').click(function () {
        previousButton();
    });
    $('.next').click(function () {
        nextButton();
    });
});
var offset = 0;
function getPokemons() {
    (function () {
        return __awaiter(this, void 0, void 0, function () {
            var pokemons, html, counter, _i, _a, pokemon, _b, _c, pokemon, pokeDetails, html_1, _d, _e, ability;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, $.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + offset)];
                    case 1:
                        pokemons = _f.sent();
                        html = '';
                        counter = 0;
                        for (_i = 0, _a = pokemons.results; _i < _a.length; _i++) {
                            pokemon = _a[_i];
                            html +=
                                '<div class="panel panel-default">' +
                                    '<div class="panel-heading">' +
                                    '<h4 class="panel-title">' +
                                    '<a data-toggle="collapse" data-parent="#accordion" href="#collapse' + counter + '">' +
                                    '<button type="button" class="btn btn-default" onclick="myFunction()">' +
                                    ("" + pokemon.name) +
                                    '</button>' +
                                    '</a>' +
                                    '</h4>' +
                                    '</div>' +
                                    '<div id="collapse' + counter + '" class="panel-collapse collapse">' +
                                    '<div class="panel-body" id="body' + counter + '">' +
                                    'Loading details...' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>';
                            counter++;
                        }
                        $('#accordion')[0].innerHTML = html;
                        counter = 0;
                        _b = 0, _c = pokemons.results;
                        _f.label = 2;
                    case 2:
                        if (!(_b < _c.length)) return [3 /*break*/, 5];
                        pokemon = _c[_b];
                        return [4 /*yield*/, $.get(pokemon.url)];
                    case 3:
                        pokeDetails = _f.sent();
                        html_1 = '';
                        html_1 += "Name: " + pokeDetails.name + "<br>";
                        html_1 += "Weight: " + pokeDetails.weight + "<br>";
                        html_1 += "<img src=\"" + pokeDetails.sprites.front_default + "\"/><br>";
                        html_1 += "Abilities:<br><ul>";
                        for (_d = 0, _e = pokeDetails.abilities; _d < _e.length; _d++) {
                            ability = _e[_d];
                            html_1 += "<li> " + ability.ability.name + " </li>";
                        }
                        html_1 += "</ul>";
                        $('#body' + counter)[0].innerHTML = html_1;
                        counter++;
                        _f.label = 4;
                    case 4:
                        _b++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    })();
}
function previousButton() {
    if (offset >= 20) {
        offset -= 20;
    }
    getPokemons();
}
function nextButton() {
    offset += 20;
    getPokemons();
}
