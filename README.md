thumbNail JS Plugin
==============================

##Demo
https://yben56.github.io/thumbNail/

##Dependencies
jquery-3.1.1
bootstrap-3.3.7

##Usage
Create a div and wrap ```<div class='thumb'><a style='background-image:...' /></div>``` insdie it.

```html
<script src="js/thumbNail.js"></script>
<link type="text/css" rel="stylesheet" href="css/thumbNail.css"  />

<div id="thumb" class="thumb">
	<a style="background-image: url('imgs/1.jpg')"></a>
	<a style="background-image: url('imgs/2.jpg')"></a>
	<a style="background-image: url('imgs/3.jpg')"></a>
</div>
```

```javascript
$(document).ready(function(){
	$('#thumb').thumbNail({column:5});
});
```

##License
This work is licensed under a [MIT License](http://opensource.org/licenses/MIT).

##Author
This Javascript plugin was written by Benjamin Wong benjamin-w@hotmail.com
