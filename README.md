# jquery.shuffleMAF #

This is shuffle script based on jquery library

## How To Use ##

### HTML structure ###

<div class="shuffleMAF">
  <ul class="shuffle-nav">
    <li class="shuffle-active">all</li>
    <li data-filter="cat-1">category 1</li>
    <li data-filter="cat-2">category 2</li>
    <li data-filter="cat-3">category 3</li>
  </ul>
  <div class="row shuffle-content">
    <div class="cat-1">
			// your content
    </div>
  </div>
</div>

### javaScript structure ###

shuffleMAF({
	effect: fade // any effect from list [ default is **fade** ] <type=string> ,
	time: 700 // action time in millisecond [ default is **700** ] <type=number>
});

## List of Effects ##

- fade
- opacity