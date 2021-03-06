import { Component } from '@angular/core';

import {carSections} from '../../shared/data';
import {row2} from '../../shared/data';


@Component({
	moduleId: module.id,
	selector: 'content',
	templateUrl: 'section1.component.html',
	styleUrls: ['section1.component.css']
})

export class Section1Component {

	sections = carSections;
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