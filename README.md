# ngSelectBox - An Advanced AngularJS directive for drop-down list

## Features

* Users can select the group option header which is the main feature of ngSelectBox
* Dynamic coloring of options, option header.
* Options for Adding images for options and option header.
* Works in all modern browsers (IE9+, Chrome, Firefox, Safari etc.)

##How do I add this to my project?

You can download the unminified version manually from CDN
```
<script type="text/javascript" src="https://cdn.rawgit.com/nidhishkrishnan/in-select/master/in-select.js"></script>
```
Adding `inSelect` Dependency to your app
```
// Add inSelect as a dependency to your app
angular.module('your-app', ['inSelect']);
```
Use the below syntax in your templates:
```
<in-select ng-model="yourModal" select-list="selectList"></in-select>
```
    
## Compared to classic group related drop-down list

* Classic group related drop-down list uses `<optgroup>` for showing up the group header, but the main issue is that users can't select 
  those header label at any cost ([Demo](https://jsfiddle.net/gm23gwq5/embedded/result/))
  
  <iframe width="100%" height="300" src="//jsfiddle.net/gvbodbb9/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Working Demo

Try out the demo :
[Demo](https://jsfiddle.net/a1jffmyt/)  


