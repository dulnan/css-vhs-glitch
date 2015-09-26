# CSS3 VHS Glitch Effect
**[The Demo](http://dulnan.net/vhs)**
Only works with Chrome. Oh and you need a fast machine.
Using CSS filters and animations, no JavaScript.

## why
¯\\\_(ツ)_/¯ 

## How does it work?
The main thing is dividing the image into 200 lines. This is achieved by having 200 elements with the image as the background placed above each other and then clipping each with `clip-path` to only show a line, basically.
These elements are then animated to move back and forth, with each having a slight delay. Pair this with a custom timing function with cubic-bezier to get only a small portion of the lines moving at a given time.

This is then blurred and placed on top of the original image.

The rest is basically just simple keyframe animations that move the image slightly and apply various filters. Especially `hue-rotate` and `grayscale` are useful here.

## How to compile
Install all the dependencies with `npm install` and then compile using `gulp`.

## Files and folders
The *demo* folder contains the minified css file and *vhs.html* where the stylesheet is embedded.
