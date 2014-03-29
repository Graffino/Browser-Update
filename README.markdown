# Browser Update

This is a little javascript that detects the user's browser and shows a warning message if the browser is too old.

If the user clicks the notification bar he is redirected to Google's "<a href="http://whatbrowser.org">WhatBrowser</a>" Page (no ads).

This is based on the <a href="http://www.browser-update.org">www.browser-update.org</a> script. See LICENSE file for more information.

### Installation via Bower
You can install it via Bower with: `bower install browser-update`

### The following browsers will be notified by default:
1. IE <= 8
2. Firefox <= 16
3. Opera <= 12
4. Safari <= 5
5. Netscape Navigator <= 12
6. Chrome <= 23


### The following options can be passed to the script:
``` javascript
var $buoop = {
    vs: {i:6,f:2,o:9.63,s:2,c:10},  // browser versions to notify
    reminder: 24,                   // atfer how many hours should the message reappear
                                    // 0 = show all the time
    onshow: function(infos){},      // callback function after the bar has appeared
    onclick: function(infos){},      // callback function if bar was clicked

    l: false,                       // set a language for the message, e.g. "en"
                                    // overrides the default detection
    test: false,                    // true = always show the bar (for testing)
    text: "",                       // custom notification html text
    text_xx: "",                    // custom notification text for language "xx"
                                    // e.g. text_de for german and text_it for italian
    newwindow: true                 // open link in new window/tab
};
```
### You can overwrite the default CSS
``` css
.buorg {
    position:absolute;
    width:100%;
    top:0px;
    left:0px;
    border-bottom:1px solid #A29330;
    background:#FDF2AB no-repeat 1em 0.55em url(warning.png);\
    text-align:left;
    cursor:pointer;
    font-family: Arial,Helvetica,sans-serif; color:#000;
    font-size: 12px;
}
.buorg div {
    padding:5px 36px 5px 40px;
}
.buorg a {
    color:#E25600;
}
#buorgclose {
    position: absolute;
    right: .5em;
    top:.2em;
    height: 20px;
    width: 12px;
    font-weight: bold;
    font-size:14px;
    padding:0;
}
```