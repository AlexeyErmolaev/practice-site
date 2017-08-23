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
var sections = [
    {
        title: 'Lexus GS300, 2007',
        desc: '110 000 км, 3.0 литра (248 л.с.), автомат, задний, бензин',
        cost: '699 999 руб.',
        img: 'img/truck/truck1.jpg'
    },
    {
        title: 'LADA (ВАЗ) 2105, 1997',
        desc: '66 500 км, 1.5 MT (75 л.с.), седан, задний, бензин',
        cost: '98 000 руб.',
        img: 'img/truck/truck6.jpg'
    },
    {
        title: 'Peugeot 308, 2008',
        desc: '1.6 л (120 л.с.), бензин, автомат, передний, 105 тыс. км',
        cost: '300 000руб.',
        img: 'img/truck/truck3.jpg'
    },
    {
        title: 'Chevrolet Lanos, 2008',
        desc: '1.5 л (86 л.с.), бензин, механика, передний, 94 тыс. км',
        cost: '150 000 руб.',
        img: 'img/truck/truck4.jpg'
    },
    {
        title: 'Lexus GS300, 2007',
        desc: '110 000 км, 3.0 литра (248 л.с.), автомат, задний, бензин',
        cost: '699 999 руб.',
        img: 'img/truck/truck5.jpg'
    },
    {
        title: 'LADA (ВАЗ) 2105, 1997',
        desc: '66 500 км, 1.5 MT (75 л.с.), седан, задний, бензин',
        cost: '98 000 руб.',
        img: 'img/truck/truck6.jpg'
    },
    {
        title: 'Peugeot 308, 2008',
        desc: '1.6 л (120 л.с.), бензин, автомат, передний, 105 тыс. км',
        cost: '300 000руб.',
        img: 'img/truck/truck7.jpg'
    },
    {
        title: 'Chevrolet Lanos, 2008',
        desc: '1.5 л (86 л.с.), бензин, механика, передний, 94 тыс. км',
        cost: '150 000 руб.',
        img: 'img/truck/truck8.jpg'
    },
    {
        title: 'Lexus GS300, 2007',
        desc: '110 000 км, 3.0 литра (248 л.с.), автомат, задний, бензин',
        cost: '699 999 руб.',
        img: 'img/truck/truck9.jpg'
    },
    {
        title: 'LADA (ВАЗ) 2105, 1997',
        desc: '66 500 км, 1.5 MT (75 л.с.), седан, задний, бензин',
        cost: '98 000 руб.',
        img: 'img/truck/truck10.jpg'
    },
    {
        title: 'Peugeot 308, 2008',
        desc: '1.6 л (120 л.с.), бензин, автомат, передний, 105 тыс. км',
        cost: '300 000руб.',
        img: 'img/truck/truck1.jpg'
    },
    {
        title: 'Chevrolet Lanos, 2008',
        desc: '1.5 л (86 л.с.), бензин, механика, передний, 94 тыс. км',
        cost: '150 000 руб.',
        img: 'img/truck/truck5.jpg'
    },
];
var Section3Component = (function () {
    function Section3Component() {
        this.sections = sections;
        this.show1 = true;
        this.show2 = true;
        this.show3 = true;
        this.show4 = true;
        this.count = 0;
    }
    Section3Component.prototype.toggle = function () {
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
    Section3Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'content3',
            templateUrl: 'section.component.html',
            styleUrls: ['section.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Section3Component);
    return Section3Component;
}());
exports.Section3Component = Section3Component;
//# sourceMappingURL=section.component.js.map