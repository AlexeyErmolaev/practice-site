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
var nameSection = ['Легковые', 'Мотоциклы', 'Квадроциклы', 'Грузовые', 'Водная техника'];
var sections = [
    {
        title: 'Lexus GS300, 2007',
        desc: '110 000 км, 3.0 литра (248 л.с.), автомат, задний, бензин',
        cost: '699 999 руб.',
        img: 'img/all-terrain-vehicle/all-terrain-vehicle1.jpg'
    },
    {
        title: 'LADA (ВАЗ) 2105, 1997',
        desc: '66 500 км, 1.5 MT (75 л.с.), седан, задний, бензин',
        cost: '98 000 руб.',
        img: 'img/all-terrain-vehicle/all-terrain-vehicle1.jpg'
    },
    {
        title: 'Peugeot 308, 2008',
        desc: '1.6 л (120 л.с.), бензин, автомат, передний, 105 тыс. км',
        cost: '300 000руб.',
        img: 'img/all-terrain-vehicle/all-terrain-vehicle1.jpg'
    },
    {
        title: 'Chevrolet Lanos, 2008',
        desc: '1.5 л (86 л.с.), бензин, механика, передний, 94 тыс. км',
        cost: '150 000 руб.',
        img: 'img/all-terrain-vehicle/all-terrain-vehicle1.jpg'
    },
    {
        title: 'Lexus GS300, 2007',
        desc: '110 000 км, 3.0 литра (248 л.с.), автомат, задний, бензин',
        cost: '699 999 руб.',
        img: 'img/all-terrain-vehicle/all-terrain-vehicle1.jpg'
    },
    {
        title: 'LADA (ВАЗ) 2105, 1997',
        desc: '66 500 км, 1.5 MT (75 л.с.), седан, задний, бензин',
        cost: '98 000 руб.',
        img: 'img/all-terrain-vehicle/all-terrain-vehicle1.jpg'
    },
    {
        title: 'Peugeot 308, 2008',
        desc: '1.6 л (120 л.с.), бензин, автомат, передний, 105 тыс. км',
        cost: '300 000руб.',
        img: 'img/all-terrain-vehicle/all-terrain-vehicle1.jpg'
    },
    {
        title: 'Chevrolet Lanos, 2008',
        desc: '1.5 л (86 л.с.), бензин, механика, передний, 94 тыс. км',
        cost: '150 000 руб.',
        img: 'img/all-terrain-vehicle/all-terrain-vehicle1.jpg'
    },
    {
        title: 'Lexus GS300, 2007',
        desc: '110 000 км, 3.0 литра (248 л.с.), автомат, задний, бензин',
        cost: '699 999 руб.',
        img: 'img/all-terrain-vehicle/all-terrain-vehicle1.jpg'
    },
    {
        title: 'LADA (ВАЗ) 2105, 1997',
        desc: '66 500 км, 1.5 MT (75 л.с.), седан, задний, бензин',
        cost: '98 000 руб.',
        img: 'img/all-terrain-vehicle/all-terrain-vehicle1.jpg'
    },
    {
        title: 'Peugeot 308, 2008',
        desc: '1.6 л (120 л.с.), бензин, автомат, передний, 105 тыс. км',
        cost: '300 000руб.',
        img: 'img/all-terrain-vehicle/all-terrain-vehicle1.jpg'
    },
    {
        title: 'Chevrolet Lanos, 2008',
        desc: '1.5 л (86 л.с.), бензин, механика, передний, 94 тыс. км',
        cost: '150 000 руб.',
        img: 'img/all-terrain-vehicle/all-terrain-vehicle1.jpg'
    },
    {
        title: 'Honda Civic, 2008',
        desc: '129 000 км, 1.8 AT (140 л.с.), седан, передний, бензин',
        cost: '699 000 руб.',
        img: 'img/car/car2.jpg'
    },
    {
        title: 'Honda Civic, 2008',
        desc: '129 000 км, 1.8 AT (140 л.с.), седан, передний, бензин',
        cost: '420 000 руб.',
        img: 'img/car/civic.jpg'
    },
    {
        title: 'Honda CR-V, 2013',
        desc: '44 200 км, 2.0 MT (150 л.с.), универсал, полный, бензин',
        cost: '1 140 000 руб.',
        img: 'img/car/cr-v.jpg'
    },
    {
        title: 'Honda Pilot, 2009',
        desc: '179 000 км, 3.5 AT (257 л.с.), внедорожник, полный, бензин',
        cost: '837 000 руб.',
        img: 'img/car/pilot.jpg'
    },
    {
        title: 'Honda Pilot, 2009',
        desc: '129 000 км, 1.8 AT (140 л.с.), седан, передний, бензин',
        cost: '699 000 руб.',
        img: 'img/car/car2.jpg'
    },
    {
        title: 'Honda Civic, 2008',
        desc: '129 000 км, 1.8 AT (140 л.с.), седан, передний, бензин',
        cost: '420 000 руб.',
        img: 'img/car/civic.jpg'
    },
    {
        title: 'Honda CR-V, 2013',
        desc: '44 200 км, 2.0 MT (150 л.с.), универсал, полный, бензин',
        cost: '1 140 000 руб.',
        img: 'img/car/cr-v.jpg'
    },
    {
        title: 'Honda Pilot, 2009',
        desc: '179 000 км, 3.5 AT (257 л.с.), внедорожник, полный, бензин',
        cost: '837 000 руб.',
        img: 'img/car/pilot.jpg'
    },
    {
        title: 'Honda Pilot, 2009',
        desc: '179 000 км, 3.5 AT (257 л.с.), внедорожник, полный, бензин',
        cost: '699 000 руб.',
        img: 'img/car/car2.jpg'
    },
    {
        title: 'Honda Civic, 2008',
        desc: '129 000 км, 1.8 AT (140 л.с.), седан, передний, бензин',
        cost: '420 000 руб.',
        img: 'img/car/civic.jpg'
    },
    {
        title: 'Honda CR-V, 2013',
        desc: '44 200 км, 2.0 MT (150 л.с.), универсал, полный, бензин',
        cost: '1 140 000 руб.',
        img: 'img/car/cr-v.jpg'
    },
    {
        title: 'Honda Pilot, 2009',
        desc: '179 000 км, 3.5 AT (257 л.с.), внедорожник, полный, бензин',
        cost: '837 000 руб.',
        img: 'img/car/pilot.jpg'
    }
];
var TransportSection = (function () {
    function TransportSection() {
        this.sections = sections;
        this.show1 = true;
        this.show2 = true;
        this.show3 = true;
        this.show4 = true;
        this.count = 0;
    }
    TransportSection.prototype.toggle = function () {
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