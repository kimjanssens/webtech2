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

<a name="les2">
## CSS animations & transitions
#### Assignment
<dl>
	<dd>
		After our workshop it was time for a practical approach. We were shows 2 web pages with animations and transitions and had to make them as close as possible to the original.
	</dd>
</dl>
#### Notes
###### 2D transforms ######: With CSS3 transform, we can move, scale, turn, spin, and stretch elements. A transformation is an effect that lets an element change shape, size and position.
- translate()
- rotate()
- scale()
- skew()
- matrix()

###### 3D transforms ######: CSS3 allows you to format your elements using 3D transforms.
- rotateX()
- rotateY()

###### animations ######: An animation lets an element gradually change from one style to another. You can change as many properties you want, as many times you want.
You can specify when the change will happen in percent, or you can use the keywords "from" and "to" (which represents 0% and 100%).
0% represents the start of the animation, 100% is when the animation is complete.

###### transitions ######: CSS3 transitions are effects that let an element gradually change from one style to another.
To do this, you must specify two things:
- the CSS property you want to add an effect to
- the duration of the effect

## Advanced JS
Here I got a better view of how jQuery works. I made a dateplanner by creating an own framwork with advanced javascript concepts.

## Prototype App
This is a weather app I created with the API from forecast.io. Functions I used to make this project:

- forecast API
- localStarage
- AJAX
- HTML5 geolocation
- JSONP

## Terrapke
Here I took what I learned from the prototype app and animations and used it to make an app for [WeAreIMD](http://www.weareimd.be/). The goal is to invite people to come grab a drink when the weather is nice.

## Node.js
Getting to know it...