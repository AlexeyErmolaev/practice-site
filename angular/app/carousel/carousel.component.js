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
var items = [
    {
        img: 'img/car/civic2.jpg'
    },
    {
        img: 'img/car/bug.jpg'
    },
    {
        img: 'img/motorcycle/bike10.jpg'
    },
    {
        img: 'img/car/7.jpg'
    },
    {
        img: 'img/yacht1.jpg'
    },
    {
        img: 'img/car/5.jpg'
    },
    {
        img: 'img/truck/truck5.jpg'
    },
    {
        img: 'img/car/7.jpg'
    },
    {
        img: 'img/car/4.jpg'
    },
    {
        img: 'img/car/6.jpg'
    },
];
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.items = items;
    }
    CarouselComponent.prototype.toggle = function () {
        [
            core_1.trigger('flyInOut', [
                core_1.transition('void => *', [
                    core_1.style({ transform: 'translateX(-100%)' }),
                    core_1.animate(2000)
                ]),
                core_1.transition('* => void', [
                    core_1.animate(2000, core_1.style({ transform: 'translateX(100%)' }))
                ])
            ])
        ];
    };
    CarouselComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'carousel',
            templateUrl: 'carousel.component.html',
            styleUrls: ['carousel.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map