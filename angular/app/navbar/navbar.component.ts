import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'navbar',
	templateUrl: 'navbar.component.html',
	styleUrls: ['navbar.component.css']
})

export class NavbarComponent {
	message: string;

	onKeyup(data: any){
		this.message = data;
		console.log(data);
	}
	clicked(event: any) {
    event.preventDefault();
  }
}