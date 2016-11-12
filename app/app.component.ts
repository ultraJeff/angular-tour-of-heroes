import { Component } from '@angular/core';

import '../theme/fonts.css';
import '../theme/global.scss';

// The AppComponent is now attached to a router and displaying routed views.
// For this reason and to distinguish it from other kinds of components, we call this type of component a Router Component.

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<!-- routerLink is preferred way to navigate with router -->
			<!-- we define a routing instruction with a one-time binding to our route path -->
			<a routerLink="/dashboard">Dashboard</a>
			<a routerLink="/heroes">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`
})

export class AppComponent {
	title = 'Tour of Heroes';
}
