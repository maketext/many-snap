# many-snap

runtime sample (not code supported) ~~> http://www.plusuniv.com

vanilla JS snap scroll action implemented.


### PUG File example is prepared now.
In example PUG file, integrated with Vue.js 2

### [HOW TO] Just put the many-snap.js file in your project and get it like CDN developement.
Press init code on DOMContentLoaded Event or after scope.
```
manysnap.init()
```

Or explicitly pass CSS Selector String Array param like this.
```
manysnap.init(['#content1', '#content2', '#content3'])
```
Must do param from first content tag that can be middle of HTML tags but height 100% recommended.

NOTE: window.onscroll Event will be overrided. and still use like
```
manysnap.onscroll = function() {
...
}
```


and at all BROWSER with Chrome will be work properly.

I want to modify and complete this with us. Feel free to connect maketext@manystallings.com

Thank you.

![Snap](https://user-images.githubusercontent.com/32004044/179393556-d3b6a917-d8a0-4ff2-840f-3c10cf3f38ac.gif)


Scroll with snap for web based pure JavaScript library.

Can be used with Vue.js or React etc...

Features
- under development processing
- can deploy as CDN

