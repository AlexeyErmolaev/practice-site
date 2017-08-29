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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var carousel_component_1 = require('./carousel/carousel.component');
var navbar_component_1 = require('./navbar/navbar.component');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var contacts_component_1 = require('./contacts/contacts.component');
var footer_component_1 = require('./footer/footer.component');
var section1_component_1 = require('./sections/carSection/section1.component');
var section_component_1 = require('./sections/motorcycleSection/section.component');
var section_component_2 = require('./sections/truckSection/section.component');
var section_component_3 = require('./sections/alltervehSection/section.component');
var section_component_4 = require('./sections/yachtSection/section.component');
var transportSections_1 = require('./sections/transportSections');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [
                app_component_1.AppComponent,
                carousel_component_1.CarouselComponent,
                navbar_component_1.NavbarComponent,
                sidebar_component_1.SidebarComponent,
                contacts_component_1.ContactsComponent,
                footer_component_1.FooterComponent,
                section1_component_1.Section1Component,
                section_component_1.Section2Component,
                section_component_2.Section3Component,
                section_component_3.Section4Component,
                section_component_4.Section5Component,
                transportSections_1.TransportSection
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map