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
        img: 'img/yacht1.jpg'
    },
    {
        title: 'LADA (ВАЗ) 2105, 1997',
        desc: '66 500 км, 1.5 MT (75 л.с.), седан, задний, бензин',
        cost: '98 000 руб.',
        img: 'img/yacht2.jpg'
    },
    {
        title: 'Peugeot 308, 2008',
        desc: '1.6 л (120 л.с.), бензин, автомат, передний, 105 тыс. км',
        cost: '300 000руб.',
        img: 'img/yacht3.jpg'
    },
    {
        title: 'Chevrolet Lanos, 2008',
        desc: '1.5 л (86 л.с.), бензин, механика, передний, 94 тыс. км',
        cost: '150 000 руб.',
        img: 'img/yacht4.jpg'
    },
    {
        title: 'Lexus GS300, 2007',
        desc: '110 000 км, 3.0 литра (248 л.с.), автомат, задний, бензин',
        cost: '699 999 руб.',
        img: 'img/yacht5.jpg'
    },
    {
        title: 'LADA (ВАЗ) 2105, 1997',
        desc: '66 500 км, 1.5 MT (75 л.с.), седан, задний, бензин',
        cost: '98 000 руб.',
        img: 'img/yacht6.jpg'
    },
    {
        title: 'Peugeot 308, 2008',
        desc: '1.6 л (120 л.с.), бензин, автомат, передний, 105 тыс. км',
        cost: '300 000руб.',
        img: 'img/yacht7.jpg'
    },
    {
        title: 'Chevrolet Lanos, 2008',
        desc: '1.5 л (86 л.с.), бензин, механика, передний, 94 тыс. км',
        cost: '150 000 руб.',
        img: 'img/yacht8.jpg'
    },
    {
        title: 'Dodge Grand Caravan, 2003',
        desc: '3.8 л (218 л.с.), бензин, 185 тыс. км',
        cost: '380 000 руб.',
        img: 'img/yacht9.jpg'
    },
    {
        title: 'Лада 2113, 2012',
        desc: '1.6 л (82 л.с.), бензин, механика, передний, 101 тыс. км',
        cost: '167 000 руб.',
        img: 'img/yacht10.jpg'
    },
    {
        title: 'Quicksilver 340 Sport + tohatsu M 15D21',
        desc: '2008 год, длина 3,40 м., 15,00 л.с., бензин.',
        cost: '90 000 руб.',
        img: 'img/yacht2.jpg'
    },
    {
        title: 'Гидроцикл yamaha VX 700',
        desc: 'Гидроцикл yamaha VX 700',
        cost: '285 000 руб.',
        img: 'img/yacht3.jpg'
    },
];
var Section5Component = (function () {
    function Section5Component() {
        this.sections = sections;
        this.show1 = true;
        this.show2 = true;
        this.show3 = true;
        this.show4 = true;
        this.count = 0;
    }
    Section5Component.prototype.toggle = function () {
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
    Section5Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'content5',
            templateUrl: 'section.component.html',
            styleUrls: ['section.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Section5Component);
    return Section5Component;
}());
exports.Section5Component = Section5Component;
//# sourceMappingURL=section.component.js.map