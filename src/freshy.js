var open_sockets = [];

if (localStorage.ignoreText === undefined || localStorage.globStrings === undefined){
    localStorage.ignoreText === '';
    localStorage.globStrings = JSON.stringify([]);
}

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
        data = JSON.parse(event.data);
        var modified_file = data.obj;
        var globStrings = JSON.parse(localStorage.globStrings);
        console.log('modified file: '+modified_file);
        for (var i = 0; i < globStrings.length; i++){
            if (globStrings[i].length > 1 && globStrings[i][0] == '#'){continue;}
            var isMatch = minimatch(modified_file, globStrings[i], {matchBase:true});
            if (isMatch){
                console.log('modified file matches glob expression:');
                console.log(modified_file);
                console.log(globStrings[i]);
                return;
            }
        }
        try {
            console.log('reloading tab');
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
