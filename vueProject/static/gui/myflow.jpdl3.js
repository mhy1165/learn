(function($){
var myflow = $.myflow;

$.extend(true,myflow.config.rect,{
	attr : {
	r : 8,
	fill : '#F6F7FF',
	stroke : '#03689A',
	"stroke-width" : 2
}
});

$.extend(true,myflow.config.props.props,{
	name : {name:'name', label:'名称', value:'新建', editor:function(){return new myflow.editors.inputEditor();}},
	key : {name:'key', label:'标识(id)', value:'', editor:function(){return new myflow.editors.inputEditor();}},
	desc : {name:'desc', label:'描述', value:'', editor:function(){return new myflow.editors.inputEditor();}}
});


//获取部门用户组，权限用户组


$.extend(true,myflow.config.tools.states,{
	start : {
				showType: 'image',
				type : 'start',
				name : {text:'<<start>>'},
				text : {text:'开始'},
				img : {src : 'img/48/start_event_empty.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'开始'},
					temp1: {name:'temp1', label : '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor(eval("[{name:'aaa',value:1},{name:'bbb',value:2}]"));}},
					taskCode:{name:'taskCode', label : '任务代码', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					status:{name:'status', label : '任务状态', value:'', editor: function(){return new myflow.editors.inputEditor();}}
				}},
			end : {showType: 'image',type : 'end',
				name : {text:'<<end>>'},
				text : {text:'结束'},
				img : {src : 'img/48/end_event_terminate.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'结束'},
					temp1: {name:'temp1', label : '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}},
					taskCode:{name:'taskCode', label : '任务代码', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					status:{name:'status', label : '任务状态', value:'', editor: function(){return new myflow.editors.inputEditor();}}
				}},
			'end-cancel' : {showType: 'image',type : 'end-cancel',
				name : {text:'<<end-cancel>>'},
				text : {text:'取消'},
				img : {src : 'img/48/end_event_cancel.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'取消'},
					temp1: {name:'temp1', label : '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}
				}},
			'end-error' : {showType: 'image',type : 'end-error',
				name : {text:'<<end-error>>'},
				text : {text:'错误'},
				img : {src : 'img/48/end_event_error.png',width : 48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'错误'},
					temp1: {name:'temp1', label : '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}
				}},
			state : {showType: 'text',type : 'state',
				name : {text:'<<state>>'},
				text : {text:'状态'},
				img : {src : 'img/48/task_empty.png',width : 48, height:48},
				props : {
					text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'状态'},
					temp1: {name:'temp1', label : '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}},
					taskCode:{name:'taskCode', label : '任务代码', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					status:{name:'status', label : '任务状态', value:'', editor: function(){return new myflow.editors.inputEditor();}}
				}},
			fork : {showType: 'image',type : 'fork',
				name : {text:'<<fork>>'},
				text : {text:'分支'},
				img : {src : 'img/48/gateway_parallel.png',width :48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'分支'},
					temp1: {name:'temp1', label: '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor('select.json');}}
				}},
			join : {showType: 'image',type : 'join',
				name : {text:'<<join>>'},
				text : {text:'合并'},
				img : {src : 'img/48/gateway_parallel.png',width :48, height:48},
				attr : {width:50 ,heigth:50 },
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'合并'},
					temp1: {name:'temp1', label: '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor('select.json');}}
				}},
			task : {showType: 'text',type : 'task',
				name : {text:'<<task>>'},
				text : {text:'任务'},
				img : {src : 'img/48/task_empty.png',width :48, height:48},
				props : {
					text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'任务'},
					assignee: {name:'assignee', label: '用户', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					form: {name:'form', label : 'action', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					desc: {name:'desc', label : '描述', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					
					taskCode:{name:'taskCode', label : '任务代码', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					status:{name:'status', label : '任务状态', value:'', editor: function(){return new myflow.editors.inputEditor();}},
					attendType:{name:'attendType', label : '执行者', value:5, editor: function(){return new myflow.editors.selectEditor([
						{
							"name": "角色",
							"value": 1
						},
						{
							"name": "用户",
							"value": 2
						},
						{
							"name": "流程启动者",
							"value": 3
						},
						{
							"name": "任务执行者",
							"value": 4
						},
						{
							"name": "SQL语句",
							"value": 5
						},	
						{
							"name": "HQL语句",
							"value": 6
						}		
					]);}},
					attendTactics: {name:'attendTactics', label : 'SQL', value:'', editor: function(){return new myflow.editors.inputEditor();}}
//					organId: {name:'organId', label : '部门', value:'', editor: function(){return new myflow.editors.selectEditor(organUrl);}},
//					roleId: {name:'roleId', label : '角色', value:'', editor: function(){return new myflow.editors.selectEditor(roleUrl);}},
//					userId: {name:'userId', label : '用户', value:'', editor: function(){return new myflow.editors.selectEditor(userUrl);}}
//					
				}}
});
})(jQuery);