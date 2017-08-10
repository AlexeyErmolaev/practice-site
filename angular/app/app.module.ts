import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CarouselComponent} from './carousel/carousel.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContactsComponent} from './contacts/contacts.component';
import {FooterComponent} from './footer/footer.component';
import {Content1Component} from './content1/content1.component';
import {Content2Component} from './content2/content2.component';
import {Content3Component} from './content3/content3.component';
import {Content4Component} from './content4/content4.component';
import {Content5Component} from './content5/content5.component';

@NgModule({ 
	imports: [BrowserModule, FormsModule],
	declarations: [
		AppComponent, 
		CarouselComponent, 
		NavbarComponent, 
		SidebarComponent, 
		ContactsComponent, 
		FooterComponent, 
		Content1Component,
		Content2Component,
		Content3Component,
		Content4Component,
		Content5Component
	],
	bootstrap: [AppComponent]
})
export class AppModule{
	
}