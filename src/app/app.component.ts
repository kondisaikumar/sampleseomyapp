import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private meta: Meta, private titleService: Title) {
      this.titleService.setTitle('Test Page');

      this.meta.addTags([
        {
          name: 'author', content: 'kondisai.com'
        },
        {
          name: 'keywords', content: 'sunila tutorial, angular seo'
        },
        {
          name: 'description', content: 'This is my great description.'
        },
        {
          name: 'robots', content: 'index, follow'
        }
      ]);}
	title = 'sample';
}
