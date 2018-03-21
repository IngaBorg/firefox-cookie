if (window.location.href.search(/\/\/liveless\.test\/test\.php/)) {
    var sending = browser.runtime.sendMessage({
        greeting: "please give me cookie"
    });

    sending.then(
        function(message) {
            var sCookie = '';

            for(id in message) {
                sCookie += message[id].name + '=' + message[id].value + '; ';
            }
            document.getElementById("cookie").innerHTML = sCookie;
        },
        function(error) {
            console.log(error);
        });
}