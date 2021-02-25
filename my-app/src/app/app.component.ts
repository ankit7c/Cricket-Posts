import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language = 'Telugu';
  listOfLanguages: string[] = ['Hindi','Marathi'];
  

addLanguage()
{
  this.listOfLanguages.push(this.language);
}

}









