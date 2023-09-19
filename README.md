![many-snapscroll-logo](https://user-images.githubusercontent.com/32004044/212228058-c5a9156f-7b8c-4982-a18c-d91ee50d0403.png)

## NO DEPENDENCY OF ANY JS

Hello, I'm maker of snapscroll, javascript scroll snap library, provides snapping slightly smooth action and can be use in ALL THE BROWSER.
It's simple to use. Please read below the Documentation as small guides.

runtime sample http://www.plusuniv.com

### PUG File example is prepared now.
In example PUG file, integrated with Vue.js 2

### [HOW TO] Just put the snapped.js file in your project and get it like CDN developement.
Press init code on DOMContentLoaded Event or after scope.
```
snapped.init()
```

Or explicitly pass CSS Selector String Array param like this for example, if tag structure is below.

![snapped](https://user-images.githubusercontent.com/32004044/190890916-9e145f4c-a8e3-40ac-9676-c20b37207377.svg)

```
snapped.init(['#content1', '#content2', '#content3'])
```
locate parameter from first content tagname.
```
snapped.init(['#content2', '#content3'])
```
Or locate string array parameter from second content tagname that can be middle of HTML tags but height 100% recommended.

NOTE: window.onscroll Event will be added. And can use like
```
snapped.onscroll = function() {
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

# License
many-snapscroll is under MIT License.

MIT License

Copyright (c) 2023 Many Stallings Company
