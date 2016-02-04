System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1, http_2, http_3;
    var FlightService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
                http_3 = http_2_1;
            }],
        execute: function() {
            FlightService = (function () {
                function FlightService(http) {
                    this.http = http;
                    this._flightUrl = 'http://minesnantes-flights-api.herokuapp.com/flights';
                }
                FlightService.prototype.getFlights = function (airport_departure, airport_arrival, date) {
                    var params = new http_3.URLSearchParams();
                    params.set('date', date);
                    params.set('airport_departure', airport_departure);
                    params.set('airport_arrival', airport_arrival);
                    var options = new http_2.RequestOptions({
                        search: params
                    });
                    return this.http.get(this._flightUrl, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.logAndPassOn);
                };
                FlightService.prototype.logAndPassOn = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Rx_1.Observable.throw(error);
                };
                FlightService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FlightService);
                return FlightService;
            })();
            exports_1("FlightService", FlightService);
        }
    }
});
//# sourceMappingURL=flightService.js.map