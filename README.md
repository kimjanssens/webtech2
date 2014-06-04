webtech2
========
This is a repository of [Kim Janssens](http://www.kimjanssens.be) for the course Webtech 2 from [Interactive Multimedia Design](http://www.weareimd.be/)  at the [Thomas More](http://www.thomasmore.be/) college in Mechelen. Here you will find all the projects of this years course.

- [GIT to work](#les1)
- [CSS animations & transitions](#les2)
- [Advanced JS](#les3)
- [Prototype app](#les4)
- [Terrapke (Prototype app)](#les5)
- [Node JS](#les6)
- [SASS](#les7)
- [GULP JS](#les8)

<a name="les1">
## GIT to work
GitHub is a web-based hosting service for software development projects that use the Git revision control system. GitHub offers both paid plans for private repositories, and free accounts for open source projects.

#### Assignment
<dl>
	<dd>
		We had to make a group and create a simple html/css page with a cooking recipe. We each had to do something in the proces and contribute it to a repository on Github.
	</dd>
</dl>

[Link to project](https://github.com/AxelVerstappen/recipewebsite)

#### Notes
Function | GIT command | Description
--- | --- | ---
Status | git status | Show what files are ready to be committed or what changes are pending.
Clone | git clone example-url.git |Copy a repository to your local development system, usually done when setting up a project.
Add | git add README.md | First you have to add the files that need to be updated
Commit | git commit -m "text doc updated" | Next you can commit the added files with a message
Pull | git pull alias branch | Pulling will fetch+merge latest changes from a repository.
Push | git push | Push your commits to the repository at alias origin and to the branch master
Removing | git rm -r filename | Romoving a file will delete the selected file from your repository
Branching | - git checkout -b branchname | Is used to work on your current project without compromising your old version.
	
An overview of all the steps you need when branching
- git pull
- git checkout -b branchname
- git checkout branchname
- git add
- git commit -m "commit info"
- git checkout master
- git merge branchname
- git push

If you want to contribute to a project you can't just let anyone commit changes. By forking you offer a contribution to someones project.
- Fork
- git fetch upstream
- git merge upstream/master

* * *

<a name="les2">
## CSS animations & transitions
#### Assignment
<dl>
	<dd>
		After our workshop it was time for a practical approach. We were shows 2 web pages with animations and transitions and had to make them as close as possible to the original.
	</dd>
</dl>

[Link to project](https://github.com/kimjanssens/webtech2/tree/master/animations)

#### Notes
###### 2D transforms
With CSS3 transform, we can move, scale, turn, spin, and stretch elements. A transformation is an effect that lets an element change shape, size and position.
- translate()
- rotate()
- scale()
- skew()
- matrix()

###### 3D transforms
CSS3 allows you to format your elements using 3D transforms.
- rotateX()
- rotateY()

###### animations
An animation lets an element gradually change from one style to another. You can change as many properties you want, as many times you want.

You can specify when the change will happen in percent, or you can use the keywords "from" and "to" (which represents 0% and 100%).
0% represents the start of the animation, 100% is when the animation is complete.

###### transitions
CSS3 transitions are effects that let an element gradually change from one style to another.
To do this, you must specify two things:
- the CSS property you want to add an effect to
- the duration of the effect

#### Related articles
- http://www.sitepoint.com/advanced-css3-2d-and-3d-transform-techniques/
- http://learn.shayhowe.com/advanced-html-css/css-transforms/
- http://learn.shayhowe.com/advanced-html-css/transitions-animations/
- http://css3.bradshawenterprises.com/transitions/
- http://www.kirupa.com/html5/css3_animations_vs_transitions.htm
- http://uxrave.com/

* * *

<a name="les3">
## Advanced JS
Here I got a better view of how jQuery works. I made a dateplanner by creating an own framwork with advanced javascript concepts.

* * *

<a name="les4">
## Prototype App
This is a weather app I created with the API from forecast.io. Functions I used to make this project:

- forecast API
- localStarage
- AJAX
- HTML5 geolocation
- JSONP

* * *

<a name="les5">
## Terrapke
Here I took what I learned from the prototype app and animations and used it to make an app for [WeAreIMD](http://www.weareimd.be/). The goal is to invite people to come grab a drink when the weather is nice.

* * *

<a name="les6">
## Node.js
Getting to know it...

* * *

<a name="les7">
## SASS
Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

#### Notes
######Installation
First I had to download Ruby, I did this [here](http://www.rubyinstaller.org/). After installing it I opened the command prompt and installed ruby like so "gem install sass".

######Setup
Now I create a SCSS file instead of the normal CSS file, after that I go to my command prompt and make sure I am in my css map where my stylesheet is and say "sass --watch style.scss:style.css".

######Methods
########Variables
Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable.
'''CSS
	$font-stack:    Helvetica, sans-serif;
	$primary-color: #333;

	body {
  		font: 100% $font-stack;
  		color: $primary-color;
  	}
'''

########Nesting
When you write HTML you've probably noticed that it has a fairly clear nested, visual hierarchy. CSS, on the other hand, isn't. Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.
'''CSS
	nav {
  		ul {
    		margin: 0;
    		padding: 0;
    		list-style: none;
    		li { 
    			display: inline-block; 
    		}
  		}
	}
'''

########Import
CSS has an import option that lets you split your CSS into smaller, more maintainable portions. The only drawback is that each time you use @import in CSS it creates another HTTP request. Sass builds on top of the current CSS @import but instead of requiring an HTTP request, Sass will take the file that you want to import and combine it with the file you're importing into so you can serve a single CSS file to the web browser.
'''CSS
	// _reset.scss

	html,
	body,
	ul,
	ol {
   		margin: 0;
  		padding: 0;
	}
'''
'''CSS
	/* style.scss */

	@import 'reset';

	body {
  		font-size: 100% Helvetica, sans-serif;
  		background-color: #efefef;
	}
'''

########Mixins
Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes. Here's an example for border-radius.
'''CSS
	@mixin border-radius($radius) {
  		-webkit-border-radius: $radius;
     	-moz-border-radius: $radius;
      	-ms-border-radius: $radius;
        border-radius: $radius;
	}

	.box { 
		@include border-radius(10px);
	}
'''

########Extend/Inheritance
This is one of the most useful features of Sass. Using @extend lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY. In our example we're going to create a simple series of messaging for errors, warnings and successes.
'''CSS
	.message {
  		border: 1px solid #ccc;
  		padding: 10px;
  		color: #333;
	}

	.success {
  		@extend .message;
  		border-color: green;
	}
'''

########Operators
Doing math in your CSS is very helpful. Sass has a handful of standard math operators like +, -, *, /, and %. In our example we're going to do some simple math to calculate widths for an aside & article.
'''CSS
	article {
  		float: left;
  		width: 600px / 960px * 100%;
	}
'''

#### Related articles
- http://www.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/
- http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/
- http://alistapart.com/article/getting-started-with-sass