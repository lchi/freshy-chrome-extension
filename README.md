freshy-chrome-extension
=======================

The chrome extension for freshy.  More info to come. 

What does this do?
------------------
Too lazy to press ctrl-r to reload your website?  Let this tool do it for you.  

After starting the server (which allows you to select directories to 'watch'), you can use this extension to load a webpage and have it reload every time a 'watched' directory has some change (creations, modifications, deletions).  No need to wear out ctrl and r keys anymore.

Installation (for development/testing purposes)
-----------------------------------------------
**Use this only for development/testing.  Stable releases will be found in the App Store (when I get to it..).

First you need to clone this project (until I get this into the Chrome App store):

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

Credit
------
Idea for this project was taken from Slushbox, a project by John J. Workman.  See the project at https://github.com/workmajj/slushbox

License (MIT)
-------------
Copyright (c) 2012 Lucas Chi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.