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

#License
many-snap is under MIT License.

MIT License

Copyright (c) 2022 Many Stallings Company

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
