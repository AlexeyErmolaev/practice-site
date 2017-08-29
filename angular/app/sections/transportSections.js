"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_1 = require('../shared/data');
var data_2 = require('../shared/data');
var data_3 = require('../shared/data');
var data_4 = require('../shared/data');
var data_5 = require('../shared/data');
var data_6 = require('../shared/data');
var data_7 = require('../shared/data');
var TransportSection = (function () {
    function TransportSection() {
        this.sections = [data_1.sections, data_2.carSections, data_3.row2, data_4.motoSections, data_5.truckSections, data_6.yachtSections];
        this.names = data_7.names;
    }
    TransportSection = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'transportSections',
            templateUrl: 'transportSections.html',
            styleUrls: ['transportSections.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TransportSection);
    return TransportSection;
}());
exports.TransportSection = TransportSection;
//# sourceMappingURL=transportSections.js.map