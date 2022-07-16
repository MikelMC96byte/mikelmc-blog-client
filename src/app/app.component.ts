import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title : String = 'MikelMC Blog';

  constructor(private _titleService: Title) {
    this._titleService.setTitle($localize `${this.title}`);
  }
}
