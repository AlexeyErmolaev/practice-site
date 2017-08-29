import {Component} from '@angular/core';

import {sections} from '../shared/data';
import {carSections} from '../shared/data';
import {row2} from '../shared/data';
import {motoSections} from '../shared/data';
import {truckSections} from '../shared/data';
import {yachtSections} from '../shared/data';
import{names} from '../shared/data';
import{toggle} from '../shared/toggle';

@Component({
	moduleId: module.id,
	selector: 'transportSections',
	templateUrl: 'transportSections.html',
	styleUrls: ['transportSections.css']
})
export class TransportSection {
		sections=[sections, carSections, row2, motoSections, truckSections, yachtSections];
		names=names;
		

	
}