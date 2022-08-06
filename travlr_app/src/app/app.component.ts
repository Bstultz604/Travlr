import { Component } from '@angular/core';

//Generates object-like relation
//Component has reference variables used to connect the seperate elemnts of the components whole
//These include:
/*
 * Selector: acts as a reference varible for the component
 * templateUrl: references the html file on how the component is to be rendered and structured on the page
 * styleUrls: references the css file that styles the component to be rendered 
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Exports class for use other parts of application 
export class AppComponent {
}
