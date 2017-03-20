$(function () {
    $.getJSON("json/images.json?id=1",function(data){

        var tableObj = $(".gridtable");
        var tableHead = '    <tr> '+
            ' <th>名称</th><th>描述</th>'+
            '<th>操作</th>'+
            '</tr>';
        var body = "";
        $(data.data).each(
            function(index,obj){
                tableObj.text("");
                body += '<tr>'+
                    '<td >' +
                    obj.name             +
                    '</td>'+
                    '<td >'+
                    obj.description   +
                    '</td>'+
                    '<td><a  id="ddd" href="#openModal" onclick="javaScript:modalEvent(this)" attr="'+
                    obj.addr +
                    '" >进入</a>'+
                    '</td>'+
                    '</tr>' ;
            }
        );
        tableObj.append(tableHead+body);
    })

    userMessage();


});


function userMessage() {

    var user = {
        "name":null,
        "secret":null
    };

    $.ajaxSettings.async = false;
    $.getJSON("json/user.json?id=2",function(data){
        user.name = data["name"];
        user.secret=data["secret"];
        localStorage.setItem("user",JSON.stringify(user));
        }
        );
}

function modalEvent(obj) {

    var href = $(obj).attr("attr");

    if(href.indexOf('?') != -1){
        var add = href.substr(href.indexOf('?')+1,href.length);
        if( add.indexOf("personal=")>=0 ){

            var params =prompt("请输入密码","")

            var user = JSON.parse(localStorage.getItem("user"));

            if(user == null){
                userMessage();
                user = JSON.parse(localStorage.getItem("user"));
            }

            var SHA256 =  new Hashes.SHA256;
            // var pass = hex_sha1(params+user.name);
            if( SHA256.hex(params+user.name) === user.secret ){
                //打开新窗口
                window.open(href);
            }
            return
        }
    }
    location.href = href;

}