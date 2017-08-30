import {Component, trigger, animate, transition, style} from '@angular/core';

const items=[
	{
		img:'img/car/civic2.jpg'
	},
	{
		img:'img/car/bug.jpg'
	},
	{
		img:'img/motorcycle/bike10.jpg'
	},
	{
		img:'img/car/7.jpg'
	},
	{
		img:'img/yacht1.jpg'
	},
	{
		img:'img/car/5.jpg'
	},
	{
		img:'img/truck/truck5.jpg'
	},
	{
		img:'img/car/7.jpg'
	},
	{
		img:'img/car/4.jpg'
	},
	{
		img:'img/car/6.jpg'
	},
];
@Component({
	moduleId: module.id,
	selector: 'carousel',
	templateUrl: 'carousel.component.html',
	styleUrls: ['carousel.component.css']
})

export class CarouselComponent {
	items=items;
	toggle(){ [
    	trigger('flyInOut', [
        	transition('void => *', [
        		style({transform: 'translateX(-100%)'}),
        		animate(2000)
        	]),
        	transition('* => void', [
        		animate(2000, style({transform: 'translateX(100%)'}))
      		])
    	])
	]}
}