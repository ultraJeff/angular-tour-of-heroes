# Angular Tour of Heroes
> Last Update: November 12, 2016

##Intro
This repo is based on the official Angular 2 tutorial _Tour of Heroes_. You can find the version I used (Typescript) [here](https://angular.io/docs/ts/latest/tutorial/). It'll take you a while to go from start to finish, but it's a really good tutorial.

###Changes from the Official _Tour of Heroes_ app
I have made significant changes through the addition of:
- Webpack
- SASS
- tslint
- autoprefixer (via postcss)
- Ionicons
- Awesome Typescript Loader (Webpack)
- Angular 2 Template Loader (Webpack)

I have removed the following:
- System JS
- Mocha, Jasmine, PhantomJS (sorry if you're offended!)
- tsc (standalone Typescript compiler)

*I experimented with `jspm` but found it in direct competition with `npm`. Additionally, Angular 2 and SASS have better support in NPM than they do in JSPM!*

###TODO:
- Remove lite-server and browsersync (competing with webpack and webpack-dev-server)
- Add [Mock API](http://www.mockapi.io/) integration
- Copy this over to Five Field Checkout!
- Remove concurrently (npm)
- Add package.json script to automatically run `npm install`
- Add scss-lint info to Webpack dev server builds
- Discuss `config/helpers.js` more in the README
- Explain Webpack flow in the README
- Testing suite? :/
- Talk about Rx/JS

---

##Deep Dive
Probably poorly written and confusing. Shoot me an issue if you have questions!

###Development tips:

####Typescript
Typescript really isn't too bad. It's a lot like C# in its syntax, but ultimately, it's more or less just a combination of ES6/7 syntax such as
- `import` / `export` statements
- [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) (technically ES7)

and type declarations common in BE languages. Type declarations might look like this:
>>>
{
	id: number,
	asl: [number, string, string], //tuple (ad-hoc class)
	notSure: any,
	likesCats: boolean,
	favoriteFoods: string[] //array of strings
}
>>>

####Webpack
This section is a work in progress... in the mean time, check out [Angular's Webpack Introduction Tutorial](https://angular.io/docs/ts/latest/guide/webpack.html). Their Webpack code base and this one's are very similar!

####Linters
> Install sass-lint and ts-lint plugins for Sublime Text 3, Atom, or your code editor of choice! Both linters are installed via `npm install` and while you will see updates in the console, getting live updates as you code is invaluable!

- sass-lint is a pure Node.js linter. No need to worry about installing Ruby.
- `.sass-lint.yml` is the rules configuration file for sass-lint. [Check out their GitHub](https://github.com/sasstools/sass-lint) for more info on how to customize the rules beyond what I've chosen.
- `tslint.json` is the rules configuration file for tslint. [Check out their GitHub](https://github.com/palantir/tslint) for more info on how to customize the rules beyond what I've chosen.

---

###Start here!
> `npm install`

###To run dev server:
> `npm start` and then navigate to http://localhost:8080

###To build to production:
> `npm run build`

This will create a `dist` folder that contains the minified, uglified, ultra-slick final product. If you want to quickly view this final product, download the [WebSocket server](https://www.npmjs.com/package/ws) via NPM with

> `npm install ws -g`

then run

> `cd dist && ws`

and open [http://127.0.0.1:8000](http://127.0.0.1:8000). Voila!

---

####Performance Note
While the minified `dist` app is roughly ~9MB, the data loaded on page load is only ~1.6KB!

####Pitfall Notes!
- DON'T IMPORT SCSS OR CSS INTO THE OPPOSITE FILE TYPE!
	- e.g. `@import` of CSS Webfonts need to be in a `.css` file.
	- If you try to import them into a `.scss` file, Webpack will throw a difficult to troubleshoot error!
- I don't recommend messing around with Angular component `styleUrls` metadata. Thus far with Webpack, it's been iffy at best. Just `@import` any new SASS files into `theme/global.scss`
