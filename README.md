# Tour of Heroes 
An Angular app that helps a staffing agency manage its stable of heroes.

Demo: https://syedaman.github.io/tour-of-heroes/

## Accomplishments
* Tour of Heroes uses the double curly braces of interpolation (a kind of one-way data binding) to display the application title and properties of a Hero object.
* Wrote a multi-line template using ES2015’s template strings to make our template readable.
* Can both display and change the hero’s name after adding a two-way data binding to the <input> element using the built-in ngModel directive.
* The ngModel directive also propagates changes to every other binding of the hero.name.
* Tour of Heroes now displays a list of selectable heroes
* Added the ability to select a hero and show the hero’s details
* Learned how to use the built-in directives ngIf and ngFor in a component’s template
* Created a reusable component
* Learned how to make a component accept input
* Learned to declare the application directives we need in an Angular module. We list the directives in the NgModule decorator's declarations array.
* Learned to bind a parent component to a child component.
* We created a service class that can be shared by many components.
* We used the ngOnInit Lifecycle Hook to get our heroes when our AppComponent activates.
* We defined our HeroService as a provider for our AppComponent.
* We created mock hero data and imported them into our service.
* We designed our service to return a Promise and our component to get our data from the Promise.

## Angular CLI

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.15.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
