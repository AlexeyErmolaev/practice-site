import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CarouselComponent} from './carousel/carousel.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContactsComponent} from './contacts/contacts.component';
import {FooterComponent} from './footer/footer.component';
import {Section1Component} from './sections/carSection/section1.component';
import {Section2Component} from './sections/motorcycleSection/section.component';
import {Section3Component} from './sections/truckSection/section.component';
import {Section4Component} from './sections/alltervehSection/section.component';
import {Section5Component} from './sections/yachtSection/section.component';

@NgModule({ 
	imports: [BrowserModule, FormsModule],
	declarations: [
		AppComponent, 
		CarouselComponent, 
		NavbarComponent, 
		SidebarComponent, 
		ContactsComponent, 
		FooterComponent, 
		Section1Component,
		Section2Component,
		Section3Component,
		Section4Component,
		Section5Component
	],
	bootstrap: [AppComponent]
})
export class AppModule{
	
}