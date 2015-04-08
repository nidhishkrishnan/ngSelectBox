# ngSelectBox - An Advanced AngularJS directive for drop-down list

## Features

* Users can select the group option header which is the main feature of ngSelectBox
* Dynamic coloring of options, option header.
* Options for Adding images for options and option header.
* Works in all modern browsers (IE9+, Chrome, Firefox, Safari etc.)

## Requirements

AngularJS v1.2.0+

##How do I add this to my project?

You can download the minified and unminified version manually from CDN
```
<script type="text/javascript" src="https://cdn.rawgit.com/nidhishkrishnan/ngSelectBox/master/ngSelectBox.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/nidhishkrishnan/ngSelectBox/master/ngSelectBox.js"></script>
```
Adding `ngSelectBox` Dependency to your app
```
// Add ngSelectBox as a dependency to your app
angular.module('your-app', ['ngSelectBox']);
```
Use the below syntax in your templates:
```
    <ng-select-box ng-model="livingBeing" width="150px">
      <ng-option label="- - Select your choice - -" value="?" selected="true"></ng-option>
      <ng-optgroup label="{{categories.type}}" value="{{categories}}" ng-repeat="categories in zoo">
        <ng-option label="{{livingBeing.name}}" value="{{livingBeing}}" image="{{livingBeing.img}}" ng-repeat="livingBeing in categories.list"></ng-option>
      </ng-optgroup>
    </ng-select-box>
```
    
## Compared to classic group related drop-down list

* Classic group related drop-down list uses `<optgroup>` for showing up the group header, but the main issue is that users can't select those group header label at any cost, cannot style the text color or add images to options ([Demo](https://jsfiddle.net/gm23gwq5/embedded/result/))

## Attributes

#### label 
* Accepts String value, eg. "Select any Option"
* For displaying the text for option and option-group
* Applicable for ```<ng-option>``` and ```<ng-optgroup>```
* Example: For optgroup ```<ng-optgroup label="- - Select your choice - -">``` and for
 option ```<ng-option label="Cat">```

#### value 
* Accepts String value, eg. "cat"
* For assigning value for option and option-group
* Applicable for ```<ng-option>``` and ```<ng-optgroup>```
* Example: For optgroup ```<ng-optgroup value="0" ...``` and for
 option ```<ng-option value="cat" ...```

#### width (optional)
* Accepts String value, eg. 150px
* For increasing the width of the select box
* Applicable for ```<ng-select-box>``` only
* Example: ```<ng-select-box width="150px"...```

#### selected (optional) 
* Accepts bollean value, eg. true or false
* For selecting a particular option or option-group
* Applicable for ```<ng-option>``` and ```<ng-optgroup>```
* Example: For optgroup ```<ng-optgroup selected="true" ...``` and for
 option ```<ng-option selected="true" ...```

#### image (optional) 
* Accepts String value, eg. "cat.png"
* For adding images for a particular option or option-group
* Applicable for ```<ng-option>``` and ```<ng-optgroup>```
* Example: For optgroup ```<ng-optgroup image="cat.png" ...``` and for
 option ```<ng-option image="cat.png" ...```

#### text-color (optional) 
* Accepts String value, eg. "red"
* For applying colors for a particular option text or option-group text
* Applicable for ```<ng-option>``` and ```<ng-optgroup>```
* Example: For optgroup ```<ng-optgroup text-color="red" ...``` and for
 option ```<ng-option text-color="red" ...```

## Working Demo

Try out the demo :
[Demo](http://plnkr.co/edit/YhTXImXdERoVk0Yr8E0z?p=preview)  


