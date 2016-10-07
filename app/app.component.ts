import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<header>
		<nav class="navbar navbar-inverse">
			<div class="navbar-header">
				<a href="/" class="navbar-brand">My Angular 2 App!!</a>
			</div>
		</nav>
	</header>
	<main>
	<div class="row">
		<div class="col-sm-4">
		<div *ngIf="users">
			<ul class="list-group users-list">
				<!-- new syntax for a structural directive is a star (*ngIf=""),
				new syntax for an event is parentheses (click)="selectUser(user)"
				note: the click event is just a default Bootstrap event (i think)-->
				<li class="list-group-item" *ngFor="let user of users" (click)="selectUser(user)">
					{{user.name}} ({{user.username}})
				</li>
			</ul>
		</div>
		</div>
		<div class="col-sm-8">
			<div class="jumbotron">
				<h1>Welcome to Our App!</h1>
				<p>{{message}}</p>
			</div>
		</div>
	</div>
	</main>
	<footer class="text-center">
		Copyright &copy; 2016
	</footer>
	`,
	styles: [`
		.jumbotron { box-shadow: 0 2px 0 rgba(0,0,0,.2); }
	`]
})

export class AppComponent{
	// This is basically the controller for the above templaate
	message =  'hello!';
	users = [
		{id: 28, name: 'Rawley', username: 'gorillawit'},
		{id: 26, name: 'Nick', username: 'whatnicktweets'},
		{id: 30, name: 'Ozzie', username: 'hollylawly'},
	];
	activeUser;

	selectUser(user) {
		this.activeUser = user;
		console.log(this.activeUser)
	}
}
