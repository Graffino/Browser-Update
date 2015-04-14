# Browser Update

This is a little javascript that detects the user's browser and shows a warning message if the browser is too old.

If the user clicks the notification bar he is redirected to Google's "<a href="http://whatbrowser.org">WhatBrowser</a>" Page (no ads).

This is based on the <a href="http://www.browser-update.org">www.browser-update.org</a> script. See LICENSE file for more information.

### Installation via Bower
You can install it via Bower with: `bower install browser-update`

### The following browsers will be notified by default:
1. IE <= 9
2. Firefox <= 34
3. Opera <= 12
4. Safari <= 6.2
5. Netscape Navigator <= 12
6. Chrome - Automatic

### The following OSes and browsers will not be notified since there is no up to date version of browser
1. Windows NT 4.0, 5.0
3. Windows 98
4. OSX 10.2, 10.3, 10.4, 10.5
5. Firefox ESR
6. Opera 12 on Linux


### The following options can be passed to the script:
``` javascript
var $buoop = {
var $buoop = {}; 

    vs: {i:6,f:2,o:9.63,s:2,c:10}, 	// browser versions to notify
    reminder: 24,                   // after how many hours should the message reappear
                                    // 0 = show all the time
    reminderClosed: 150             // if the user closes message it reappears after x hours
    onshow: function(infos){},      // callback function after the bar has appeared
    onclick: function(infos){},     // callback function if bar was clicked
    onclose: function(infos){},     //

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
    background: #FDF2AB no-repeat 1em 0.55em url(warning.png);

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    border-bottom: 1px solid #A29330;

    color:#000;
    font-family: Arial, Helvetica, sans-serif; 
    font-size: 12px;
    text-align: left;

    cursor: pointer;
}
.buorg div {
    padding: 5px 36px 5px 40px;
}
.buorg a {
    color:#E25600;
}
#buorgclose {
    position: absolute;
    right: .5em;
    top: .2em;

    padding: 0;
    height: 20px;
    width: 12px;

    font-size: 14px;
    font-weight: bold;
}
```