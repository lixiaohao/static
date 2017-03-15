$(function () {
    getAllResources();
});
function getAllResources(o){
    $.getJSON("../json/images.json?id=1",function(data){
        var tableObj = $(".gridtable");
        var tableHead = '    <tr> '+
            ' <th>名称</th><th>描述</th>'+
            '<th>操作</th>'+
            '</tr>';
        var body = "";
        $(data).each(
            function(index,obj){
                tableObj.text("");
                body += '<tr>'+
                    '<td >' +
                    obj.name             +
                    '</td>'+
                    '<td >'+
                    obj.description   +
                    '</td>'+
                    '<td><a  href="#openModal" onclick="javaScript:modalEvent(this)" attr="'+
                    obj.addr +
                    '" >进入</a>'+
                    '</td>'+
                    '</tr>' ;

            }
        );
        tableObj.append(tableHead+body);
    })
}

function modalEvent(obj) {
    var href = $(obj).attr("attr");

    if(href.indexOf('?') != -1){
        var add = href.substr(href.indexOf('?')+1,href.length);
        if( add.indexOf("personal=")>=0 ){
            var params =prompt("请输入密码","")
            if( params == '1234567' ){
                location.href = href;
            }else{
                return
            }
        }
    }

    location.href = href;

}