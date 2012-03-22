var open_sockets = [];

chrome.omnibox.onInputEntered.addListener(function(input) {
    var splitInput = input.split(" ");
    var wsURI = 'ws://localhost:4444';
    var addr = "";
    if(splitInput.length == 1) {
	      addr = input;
        if(addr.match(/^\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}/g)){
          addr = "http://" + addr
        }
    } else if(splitInput.length == 2){
        addr = splitInput[0];
        wsURI = "ws://" + splitInput[1];
    }

    if(addr == 'localhost') addr = 'localhost:80';

    var ws = new WebSocket(wsURI);

    chrome.tabs.update(null,{
        active: true,
	url: addr
    }, function(tab) {
        open_sockets[tab.id] = ws;
        ws.tab_id = tab.id;
    });

    ws.onmessage = function(event) {
        console.log(event.data);
	try {
	    chrome.tabs.reload(ws.tab_id);
        } catch (err) {
            console.log(err);
        }
    }

});

chrome.tabs.onRemoved.addListener(function(id, info) {
    if(open_sockets[id] != null){
        open_sockets[id].close();
        delete open_sockets[id];
    }
});
