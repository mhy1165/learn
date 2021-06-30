//接口配置 add by cj
//QQ:519330235
var rootUrl = getRootPath_web();
var webUrl = "http://127.0.0.1:9090";
var url =  rootUrl + "/gui/data/"; //根目录
//var roleUrl = url + "role.json"; //角色用户数据接口
var roleUrl = webUrl + "/wf/gui/role/all";
var organUrl = webUrl + "/wf/gui/organ/all"; //部门用户数据接口
//var userUrl = url + "select.json";
var userUrl = webUrl + "/wf/gui/user/all"; //外部用户数据接口
var innerUserUrl = webUrl + "/wf/gui/user/inner"; //内部用户接口
var flowUrl = url + "flow.json";
//var flowUrl = getRootPath_web() + "/GUIAction_test.action"; //工作流初始化数据入口
//var saveUrl = url + "result.json"; //保存数据接口
var saveUrl = webUrl + "/wf/gui/save";
//var delUrl = url + "result.json"; //删除节点提交接口
var delUrl = webUrl + "/wf/gui/rect/delete";
var delPathUrl = webUrl + "/wf/gui/path/delete";
//var conditionUrl = url + "condition.json"; //流转条件数据接口
var conditionUrl = webUrl + "/wf/gui/condition/all";
var typeUrl = url + "type.json"; //执行者类型
var jumpUrl = url + "jump.json";//跳过策略
var finishUrl = url + "finish.json"; //完成策略
var preprocessUrl = url + "preprocess.json"; //前置策略

var taskUrl = webUrl + "/wf/gui/task/all";//意见配置任务列表
var codeUrl = webUrl + "/wf/gui/code/all";//子流程code选择列表

function getRootPath_web() {
    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
    var curWwwPath = window.document.location.href;
    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8083
    var localhostPaht = curWwwPath.substring(0, pos);
    //获取带"/"的项目名，如：/uimcardprj
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    return (localhostPaht + projectName);
}


function getRootPath(){
    var curWwwPath = window.document.location.href;
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    var localhostPaht = curWwwPath.substring(0, pos);
    return localhostPaht;
}

function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
