import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: '../views/app.component.html',
    styleUrls: ['../styles/app.component.css']
})

export class AppComponent {
    name = 'Angular';
    title = 'Tour of Heroes';
}