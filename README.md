freshy-chrome-extension
=======================

The chrome extension for freshy.  More info to come. 

What does this do?
------------------
This tool is made to work with [freshy-server](https://github.com/lchi/freshy-server), and is a tool to help with web development.  

TLDR; Point this to a web page w/ the server installed and it reloads the page everytime you change something.

For more info please check the [freshy-server](https://github.com/lchi/freshy-server) project.

Installation (for development/testing purposes)
-----------------------------------------------
From the Chrome web store:

https://chrome.google.com/webstore/detail/ljmjeebjaedanhojdahmpeajdakmkafg?hl=en-US&gl=US

Or, if you want the very latest work, you need to clone this project:

	$ git clone git@github.com:/lchi/freshy-chrome-extension

Afterwards, you need to install it in Chrome by navigating your browser to: chrome://settings/extensions and doing the following:

1.  Check the 'Developer Mode' box in the top right corner.
2.  Click the 'Load unpacked extension...' button in the top left corner.
3.  Select the freshy-chrome-extension directory where you cloned the source.
4.  (Optional) Click on the extension and 'Reload' if you need to update.

You'll need to use https://github.com/lchi/freshy-server in conjunction with this extension.

Usage
-----
After installation, you can use this extension by typing 'freshy' in the omnibox (aka the address bar) and pressing tab.  Once this is done the address bar takes up to two arguments:

1.  URL of the page you want to test/debug.
2.  (Optional) Location of the freshy-server (defaults to ws://localhost:4444).  NOTE: DO NOT INCLUDE THE 'ws://' PREFIX - it is done already by the js.

The connection is maintained until the tab is closed, which means you can navigate to any webpage in the same tab and still have it refresh.

Example usage (opening the content at localhost:80 and telling the tab to refresh on fs events):

freshy <tab> localhost

Thanks to [Tom Ballinger](https://github.com/thomasballinger), you can now specify ignore patterns for filesystem changes.  All filesystem change events that are registered on a file with a filename matching any ignore pattern will not cause a page refresh.  This is useful when you don't want your page to refresh because a change in a vim swap file or other temporary file that gets updated very frequently.  The patterns follow unix style glob syntax conventions, and glob support was added by using incorporating the [minimatch](https://github.com/isaacs/minimatch) project.  By default there are no ignore patterns set, but patterns like `*.swp` and `*.git` might be useful.  You set ignore patterns in the extension's options page, which you can reach by going to Wrench Menu -> Preferences -> Extensions -> Options (under Freshy).  It'll even tell you if the pattern is correct or not =D.

Contributing
------------
Contributions to this software are greatly appreciated.  If you have an interest in contributing to either this project or the server side project, shoot me an email at chi dot lucas at gmail dot com.

Credit
------
Idea for this project was taken from Slushbox, a project by John J. Workman.  See the project at [slushbox](https://github.com/workmajj/slushbox).

Icon credit Pawel Kadysz, taken from http://freebiesbooth.com/hand-drawn-web-icons.  View his profile [here](http://graphicriver.net/user/pawelkadysz?ref=pawelkadysz&ref=pawelkadysz&clickthrough_id=45838430&redirect_back=true).

License (MIT)
-------------
Copyright (c) 2012 Lucas Chi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
