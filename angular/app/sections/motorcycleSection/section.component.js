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
var data_1 = require('../../shared/data');
var Section2Component = (function () {
    function Section2Component() {
        this.sections = data_1.motoSections;
        this.show1 = true;
        this.show2 = true;
        this.show3 = true;
        this.show4 = true;
        this.count = 0;
    }
    Section2Component.prototype.toggle = function () {
        this.count++;
        switch (this.count) {
            case 1:
                this.show1 = !this.show1;
                break;
            case 2:
                this.show2 = !this.show2;
                break;
            case 3:
                this.show3 = !this.show3;
                break;
            case 4:
                this.show4 = !this.show4;
                break;
        }
    };
    Section2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'content2',
            templateUrl: 'section.component.html',
            styleUrls: ['section.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Section2Component);
    return Section2Component;
}());
exports.Section2Component = Section2Component;
//# sourceMappingURL=section.component.js.map