import { Component } from '@angular/core';

import '../theme/fonts.css';
import '../theme/global.scss';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<my-heroes></my-heroes>
	`
})

export class AppComponent {
	title = 'Tour of Heroes';
}
