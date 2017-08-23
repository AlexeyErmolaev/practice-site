import { Component } from '@angular/core';

const sections=[
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

@Component({
	moduleId: module.id,
	selector: 'content5',
	templateUrl: 'section.component.html',
	styleUrls: ['section.component.css']
})

export class Section5Component {
	sections=sections;

	show1:boolean=true;
	show2:boolean=true;
	show3:boolean=true;
	show4:boolean=true;
	count=0;
	toggle(){
		this.count++;
		switch(this.count){
			case 1: this.show1=!this.show1;
			break;
			case 2: this.show2=!this.show2;
			break;
			case 3: this.show3=!this.show3;
			break;
			case 4: this.show4=!this.show4;
			break;
		}
        
  }
}