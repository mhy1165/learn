(function($) {
  var myflow = $.myflow
  var wid = getQueryVariable('id')
  $.extend(true, myflow.config.rect, {
    attr: {
      r: 6,
      fill: '#F8f8f9',
      stroke: '#5cadff',
      'stroke-width': 2

    }
  })

  $.extend(true, myflow.config.props.props, {
    name: {
      name: 'name', label: '名称', value: '新建', editor: function() {
        return new myflow.editors.inputEditor()
      }
    },
    key: {
      name: 'key', label: '标识(id)', value: '', editor: function() {
        return new myflow.editors.inputEditor()
      }
    },
    desc: {
      name: 'desc', label: '描述', value: '', editor: function() {
        return new myflow.editors.inputEditor()
      }
    }
  })

//获取部门用户组，权限用户组

  $.extend(true, myflow.config.tools.states, {

    start: {
      showType: 'image',
      type: 'start',
      name: { text: '<<start>>' },
      text: { text: '开始' },
      img: { src: 'img/48/start.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '显示', value: '', editor: function() {
            return new myflow.editors.textEditor()
          }, value: '开始'
        },
        taskCode: {
          name: 'taskCode', label: '任务代码', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        status: {
          name: 'status', label: '任务状态', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        }
      }
    },

    end: {
      showType: 'image',
      type: 'end',
      name: { text: '<<end>>' },
      text: { text: '结束' },
      img: { src: 'img/48/end1.png', width: 48, height: 48 },
      attr: { width: 50, heigth: 50 },
      props: {
        text: {
          name: 'text', label: '显示', value: '', editor: function() {
            return new myflow.editors.textEditor()
          }, value: '结束'
        },
        taskCode: {
          name: 'taskCode', label: '任务代码', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        status: {
          name: 'status', label: '任务状态', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        }
      }
    },
    /*	'end-cancel' : {showType: 'image',type : 'end-cancel',
        name : {text:'<<end-cancel>>'},
        text : {text:'取消'},
        img : {src : 'img/48/end_event_cancel.png',width : 48, height:48},
        attr : {width:50 ,heigth:50 },
        props : {
          text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'取消'},
          temp1: {name:'temp1', label : '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
          temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}
        }},*/
    /*	'end-error' : {showType: 'image',type : 'end-error',
        name : {text:'<<end-error>>'},
        text : {text:'错误'},
        img : {src : 'img/48/end_event_error.png',width : 48, height:48},
        attr : {width:50 ,heigth:50 },
        props : {
          text: {name:'text',label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'错误'},
          temp1: {name:'temp1', label : '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
          temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor([{name:'aaa',value:1},{name:'bbb',value:2}]);}}
        }},*/
    state: {
      showType: 'image&text',
      type: 'state',
      name: { text: '<<state>>' },
      text: { text: '状态' },
      img: { src: 'img/16/auto.png', width: 32, height: 32 },
      props: {
        text: {
          name: 'text', label: '显示', value: '', editor: function() {
            return new myflow.editors.textEditor()
          }, value: '状态'
        },
        taskCode: {
          name: 'taskCode', label: '任务代码', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        status: {
          name: 'status', label: '任务状态', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        polymerizationType: {
          name: 'polymerizationType', label: '聚合类型', value: 'XOR', editor: function() {
            return new myflow.editors.selectEditor([{ name: 'XOR', value: 'XOR' }, { name: 'AND', value: 'AND' }])
          }
        },
        finishType: {
          name: 'finishType', label: '完成策略', value: '1', editor: function() {
            return new myflow.editors.selectEditor(finishUrl)
          }
        },
        preInterface: {
          name: 'preInterface', label: '前置策略', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        postInterface: {
          name: 'postInterface', label: '后置策略', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        }
      }
    },
    /*	fork : {
        showType: 'image',
        type : 'fork',
        name : {text:'<<fork>>'},
        text : {text:'分支'},
        img : {src : 'img/48/gateway_parallel.png',width :48, height:48},
        attr : {width:50 ,heigth:50 },
        props : {
          text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'分支'},
          temp1: {name:'temp1', label: '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
          temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor('select.json');}}
        }},*/
    /*	join : {
        showType: 'image',
        type : 'join',
        name : {text:'<<join>>'},
        text : {text:'合并'},
        img : {src : 'img/48/gateway_parallel.png',width :48, height:48},
        attr : {width:50 ,heigth:50 },
        props : {
          text: {name:'text', label: '显示', value:'', editor: function(){return new myflow.editors.textEditor();}, value:'合并'},
          temp1: {name:'temp1', label: '文本', value:'', editor: function(){return new myflow.editors.inputEditor();}},
          temp2: {name:'temp2', label : '选择', value:'', editor: function(){return new myflow.editors.selectEditor('select.json');}}
        }},*/
    task: {
      showType: 'image&text',
      type: 'task',
      name: { text: '<<task>>' },
      text: { text: '任务' },
      img: { src: 'img/16/com.png', width: 32, height: 32 },
      props: {
        text: {
          name: 'text', label: '显示', value: '', editor: function() {
            return new myflow.editors.textEditor()
          }, value: '任务'
        },
        assignee: {
          name: 'assignee', label: '用户', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        form: {
          name: 'form', label: 'action', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        desc: {
          name: 'desc', label: '描述', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },

        taskCode: {
          name: 'taskCode', label: '任务代码', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        status: {
          name: 'status', label: '任务状态', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        polymerizationType: {
          name: 'polymerizationType', label: '聚合类型', value: 'XOR', editor: function() {
            return new myflow.editors.selectEditor([{ name: 'XOR', value: 'XOR' }, { name: 'AND', value: 'AND' }])
          }
        },
        finishType: {
          name: 'finishType', label: '完成策略', value: '1', editor: function() {
            return new myflow.editors.selectEditor(finishUrl)
          }
        },
        jumpWithSame: {
          name: 'jumpWithSame', label: '跳过策略', value: '0', editor: function() {
            return new myflow.editors.selectEditor(jumpUrl)
          }
        },

        attendType: {
          name: 'attendType', label: '执行者', value: 3, editor: function() {
            return new myflow.editors.selectEditor(typeUrl)
          }
        },
        attendTactics: {
          name: 'attendTactics', label: '执行者策略', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },

        isMessage: {
          name: 'isMessage', label: '发送消息', value: '1', editor: function() {
            return new myflow.editors.selectEditor([{ name: '是', value: '1' }, { name: '否', value: '0' }])
          }
        },
        msgType: {
          name: 'msgType', label: '消息类型', value: '0', editor: function() {
            return new myflow.editors.selectEditor([{ name: '系统消息', value: '0' }, { name: '短信', value: '1' }, { name: '公众号', value : '2'}], 'm')
          }
        },
        isReturn: {
          name: 'isReturn', label: '回退策略', value: '1', editor: function() {
            return new myflow.editors.selectEditor([{ name: '是', value: '1' }, { name: '否', value: '0' }])
          }
        },
        addSign: {
          name: 'addSign', label: '加签策略', value: '0', editor: function() {
            return new myflow.editors.selectEditor([{ name: '是', value: '1' }, { name: '否', value: '0' }])
          }
        },
        isCc: {
          name: 'isCc', label: '抄送策略', value: '0', editor: function() {
            return new myflow.editors.selectEditor([{ name: '是', value: '1' }, { name: '否', value: '0' }])
          }
        },
        ccTool: {
          name: 'ccTool', label: '抄送工具', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        isManual: {
          name: 'isManual', label: '手动策略', value: '1', editor: function() {
            return new myflow.editors.selectEditor([{ name: '是', value: '1' }, { name: '否', value: '0' }])
          }
        },
        isWarn: {
          name: 'isWarn', label: '超时预警', value: '0', editor: function() {
            return new myflow.editors.selectEditor([{ name: '是', value: '1' }, { name: '否', value: '0' }])
          }
        },
        isOpinion: {
          name: 'isOpinion', label: '意见策略', value: '1', editor: function() {
            return new myflow.editors.selectEditor([{ name: '是', value: '1' }, { name: '否', value: '0' }])
          }
        },
        
        opinionNameTemplate: {
          name: 'opinionNameTemplate', label: '意见名称', value: '审批意见', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },

        showOpinionTaskTemplateIds: {
          name: 'showOpinionTaskTemplateIds',
          label: '显示意见列表',
          value: '',
          editor: function() {
            return new myflow.editors.selectEditor(taskUrl + '/' + wid, 'm')
          }
        },
        preInterface: {
          name: 'preInterface', label: '前置策略', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        postInterface: {
          name: 'postInterface', label: '后置策略', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        workingTime: {
          name: 'workingTime', label: '完成时间（天）', value: '10', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        orderNum: {
          name: 'orderNum', label: '序号', value: '0', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        isSync: {
          name: 'isSync', label: '同步策略', value: '0', editor: function() {
            return new myflow.editors.selectEditor([{ name: '是', value: '1' }, { name: '否', value: '0' }])
          }
        },
        syncInterface: {
          name: 'syncInterface', label: '同步接口', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        fileAccess: {
          name: 'fileAccess', label: '文件权限', value: '2', editor: function() {
            return new myflow.editors.selectEditor([{ name: 'read', value: '0' }, { name: 'print', value: '1' }, { name: 'edit', value : '2'}], 'm')
          }
        }

      }
    },

    sub: {
      showType: 'image&text',
      type: 'sub',
      name: { text: '<<sub>>' },
      text: { text: '子流程' },
      img: { src: 'img/16/xuan.png', width: 32, height: 32 },
      props: {
        text: {
          name: 'text', label: '显示', value: '', editor: function() {
            return new myflow.editors.textEditor()
          }, value: '子流程'
        },
        taskCode: {
          name: 'taskCode', label: '任务代码', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        status: {
          name: 'status', label: '任务状态', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        subWorkflowCode: {
          name: 'subWorkflowCode', label: '启动流程Code', value: '', editor: function() {
            return new myflow.editors.selectEditor(codeUrl)
          }
        },

        attendType: {
          name: 'attendType', label: '执行者', value: 5, editor: function() {
            return new myflow.editors.selectEditor(typeUrl)
          }
        },
        attendTactics: {
          name: 'attendTactics', label: 'SQL', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        polymerizationType: {
          name: 'polymerizationType', label: '聚合类型', value: 'XOR', editor: function() {
            return new myflow.editors.selectEditor([{ name: 'XOR', value: 'XOR' }, { name: 'AND', value: 'AND' }])
          }
        },
        finishType: {
          name: 'finishType', label: '完成策略', value: '1', editor: function() {
            return new myflow.editors.selectEditor(finishUrl)
          }
        },
        preInterface: {
          name: 'preInterface', label: '前置策略', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        postInterface: {
          name: 'postInterface', label: '后置策略', value: '', editor: function() {
            return new myflow.editors.inputEditor()
          }
        },
        orderNum: {
          name: 'orderNum', label: '序号', value: '0', editor: function() {
            return new myflow.editors.inputEditor()
          }
        }

      }
    }

  })
})(jQuery)
