function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
  }

function addSingleItem(item){
    const completiondiv = $('.completion');

    const new_div = $(`<div class='content'> <h4>Message</h4> </div><div class='content'> ${escapeHtml(item.message)}  </div> <div class='content'> <h4>Response</h4> </div> <div class='content'> ${escapeHtml(item.response)}  </div> <hr/>`);


    completiondiv.append(new_div);
}

function addItems(allItems){
    allItems.forEach(item => addSingleItem(item));
}


$(document).ready(function(){ 
    var url = window.location.href;
    const params = new URLSearchParams(url.split('?')[1]);
    if(params.get('info')){
        addItems(JSON.parse(params.get('info')));
        console.log(JSON.parse(params.get('info')));
    }
        console.log(JSON.parse(params.get('info')));
});

