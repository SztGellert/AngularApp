import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language = '';
  listOfLanguages: string[] = ["English", "Spanish", "German"]
  title = 'test-app';
  memberName = "Gellert";
  addLanguage() {
    console.log("addlanguage")
    this.listOfLanguages.push(this.language)
    console.log(this.listOfLanguages)
  }
}
