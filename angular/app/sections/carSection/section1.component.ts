import { Component } from '@angular/core';

const sections = [
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

	const row2=[
		{
			title: 'Lexus GS300, 2007',
  			desc: '110 000 км, 3.0 литра (248 л.с.), автомат, задний, бензин',
 			cost: '699 999 руб.',
  			img: 'img/car/Lexus GS300, 2007.jpg'
		},
		{
			title: 'LADA (ВАЗ) 2105, 1997',
  			desc: '66 500 км, 1.5 MT (75 л.с.), седан, задний, бензин',
 			cost: '98 000 руб.',
  			img: 'img/car/LADA (ВАЗ) 2105, 1997.jpg'
		},
		{
			title: 'Peugeot 308, 2008',
  			desc: '1.6 л (120 л.с.), бензин, автомат, передний, 105 тыс. км',
 			cost: '300 000руб.',
  			img: 'img/car/peugeot 308, 2008.jpg'
		},
		{
			title: 'Chevrolet Lanos, 2008',
  			desc: '1.5 л (86 л.с.), бензин, механика, передний, 94 тыс. км',
 			cost: '150 000 руб.',
  			img: 'img/car/Chevrolet Lanos, 2008.jpg'
		},

		{
			title: 'Land Rover Range Rover Sport, 2015',
  			desc: '3.0 л (249 л.с.), дизель, автомат, 4WD, 82 тыс. км',
 			cost: '3 260 000 руб.',
  			img: 'img/car/Land Rover Range Rover Sport, 2015.jpg'
		},
		{
			title: 'Opel Astra, 2013',
  			desc: '66 500 км, 1.5 MT (75 л.с.), седан, задний, бензин',
 			cost: '98 000 руб.',
  			img: 'img/car/Opel Astra, 2013.jpg'
		},
		{
			title: 'Peugeot 308, 2010',
  			desc: '1.6 л (120 л.с.), бензин, автомат, передний, 105 тыс. км',
 			cost: '300 000руб.',
  			img: 'img/car/Peugeot 308, 2010.jpg'
		},
		{
			title: 'Volkswagen Touareg, 2004',
  			desc: '1.5 л (86 л.с.), бензин, механика, передний, 94 тыс. км',
 			cost: '150 000 руб.',
  			img: 'img/car/Volkswagen Touareg, 2004.jpg'
		},

		{
			title: 'Dodge Grand Caravan, 2003',
  			desc: '1.6 л (120 л.с.), бензин, автомат, передний, 105 тыс. км',
 			cost: '3 260 000 руб.',
  			img: 'img/car/Dodge Grand Caravan, 2003.jpg'
		},
		{
			title: 'Лада 2113, 2012',
  			desc: '66 500 км, 1.5 MT (75 л.с.), седан, задний, бензин',
 			cost: '98 000 руб.',
  			img: 'img/car/Лада 2113, 2012.jpg'
		},
		{
			title: 'Quicksilver 340 Sport',
  			desc: '1.6 л (120 л.с.), бензин, автомат, передний, 105 тыс. км',
 			cost: '300 000руб.',
  			img: 'img/Quicksilver 340 Sport + tohatsu M 15D2.jpg'
		},
		{
			title: 'Гидроцикл yamaha VX 700',
  			desc: '1.5 л (86 л.с.), бензин, механика, передний, 94 тыс. км',
 			cost: '150 000 руб.',
  			img: 'img/Гидроцикл yamaha VX 700.jpg'
		},
	];

@Component({
	moduleId: module.id,
	selector: 'content',
	templateUrl: 'section1.component.html',
	styleUrls: ['section1.component.css']
})

export class Section1Component {

	sections = sections;
	row2=row2;

	
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