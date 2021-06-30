(function ($) {
	var myflow = $.myflow;

	var organ, role;

	$.extend(true, myflow.editors, {
		inputEditor: function () {
			var _props, _k, _div, _src, _r;
			this.init = function (props, k, div, src, r) {
				_props = props; _k = k; _div = div; _src = src; _r = r;

				$('<input style=""/>').val(props[_k].value).change(function () {
					props[_k].value = $(this).val();
				}).appendTo('#' + _div);

				//attendTactics容器根据attendType值做相应的改变
				if (_div == "pattendTactics") {
					var asele = $('#pattendType select');
					if (asele) {
						if (asele.val() == 4) {
							//内部用户
							// if (_props != null && _props.attendTactics != null) {
							// 	props.attendTactics.editor = function () { return new myflow.editors.selectEditor(extUserUrl); }
							// 	if ($('#pattendTactics') != null) {
							// 		$('#pattendTactics').html("");
							// 	}
							// 	_props.attendTactics.editor().init(props, "attendTactics", "pattendTactics", _src, _r);
							// }

						} else if (asele.val() == 2) {
							//外部用户
							if (_props != null && _props.attendTactics != null) {
								props.attendTactics.editor = function () { return new myflow.editors.selectEditor(userUrl); }
								if ($('#pattendTactics') != null) {
									$('#pattendTactics').html("");
								}
								_props.attendTactics.editor().init(props, "attendTactics", "pattendTactics", _src, _r);
							}
						}else if(asele.val() == 6){
							//角色
							if (_props != null && _props.attendTactics != null) {
								props.attendTactics.editor = function () { return new myflow.editors.selectEditor(roleUrl); }
								if ($('#pattendTactics') != null) {
									$('#pattendTactics').html("");
								}
								_props.attendTactics.editor().init(props, "attendTactics", "pattendTactics", _src, _r);
							}

						} else {

							// if (_props != null && _props.attendTactics != null) {
							// 	props.attendTactics.editor = function () { return new myflow.editors.inputEditor(); }
							// 	if ($('#pattendTactics') != null) {
							// 		$('#pattendTactics').html("");
							// 	}
							// 	_props.attendTactics.editor().init(props, "attendTactics", "pattendTactics", _src, _r);
							// }
						}
					}
				}

				$('#' + _div).data('editor', this);
			}
			this.destroy = function () {
				$('#' + _div + ' input').each(function () {
					_props[_k].value = $(this).val();
				});
			}
		},
		selectEditor: function (arg, multiple) {
			var _props, _k, _div, _src, _r;
			var _multiple = "";
			var _height = "";
			if (typeof (multiple) != "undefined") {
				_multiple = " multiple=\"multiple\" ";
				_height = "height:50px";
			}
			this.init = function (props, k, div, src, r) {
				_props = props; _k = k; _div = div; _src = src; _r = r;

				var sle = $('<select ' + _multiple + ' style="' + _height + '"/>').val(props[_k].value).change(function () {
					props[_k].value = $(this).val();
				}).appendTo('#' + _div);

				//根据执行者联动
				if (_div != null && _div != "undefined") {
					if (_div == "pattendType") {
						var asele = $('#pattendType select');
						asele.change(function () {

							if ($('#pattendTactics') != null && $('#pattendTactics') != "undefined") {
								if (asele.val() == 4) {
									//内部用户
									if (_props != null && _props.attendTactics != null) {
										props.attendTactics.editor = function () { return new myflow.editors.selectEditor(innerUserUrl); }
										if ($('#pattendTactics') != null) {
											$('#pattendTactics').html("");
										}
										_props.attendTactics.editor().init(props, "attendTactics", "pattendTactics", _src, _r);
									}

								} else if (asele.val() == 2 ) {
									//外部用户
									if (_props != null && _props.attendTactics != null) {
										props.attendTactics.editor = function () { return new myflow.editors.selectEditor(userUrl); }
										if ($('#pattendTactics') != null) {
											$('#pattendTactics').html("");
										}
										_props.attendTactics.editor().init(props, "attendTactics", "pattendTactics", _src, _r);
									}
								} else if( asele.val() == 1){
									//流程变量
									if (_props != null && _props.attendTactics != null) {
										props.attendTactics.editor = function () { return new myflow.editors.inputEditor(); }
										if ($('#pattendTactics') != null) {
											$('#pattendTactics').html("");
										}
										//_props.attendTactics.value = '';
										_props.attendTactics.editor().init(props, "attendTactics", "pattendTactics", _src, _r);
									}
								}else {
									//缺省
									if (_props != null && _props.attendTactics != null) {
										props.attendTactics.editor = function () { return new myflow.editors.inputEditor(); }
										if ($('#pattendTactics') != null) {
											$('#pattendTactics').html("");
										}
										_props.attendTactics.value = '';
										_props.attendTactics.editor().init(props, "attendTactics", "pattendTactics", _src, _r);
									}
								}
							}
						});
					}
				}

				//			if(_div != null && _div != "undefined"){
				//				//console.log(_div);
				//				if(_div == "puserId"){
				//					//绑定organ role联动事件
				//					var usele = $('#puserId select');
				//					var osele = $('#porganId select')
				//				    var rsele = $('#proleId select');
				//					osele.change(function(){
				//						usele.val(0);
				//						usele.empty();
				//						if(organ != null && organ != "undefined"){
				//							for(var i = 0 ; i < organ.length ; i++){
				//								if(osele.val() == organ[i].value){
				//									if(organ[i].list != null){
				//										for(var j = 0 ; j < organ[i].list.length ; j++){
				//											usele.append('<option value="'+organ[i].list[j].value+'">'+organ[i].list[j].name+'</option>');
				//										}
				//									}
				//									break;
				//								}
				//							}
				//						}
				//					});
				//
				//					rsele.change(function(){
				//						usele.val(0);
				//						usele.empty();
				//						if(role != null && role != "undefined"){
				//							for(var i = 0 ; i < role.length ; i++){
				//								if(rsele.val() == role[i].value){
				//									if(role[i].list != null){
				//										for(var j = 0 ; j < role[i].list.length ; j++){
				//											usele.append('<option value="'+role[i].list[j].value+'">'+role[i].list[j].name+'</option>');
				//										}
				//									}
				//									break;
				//								}
				//							}
				//						}
				//					});
				//				}
				//			}

				if (typeof arg === 'string') {
					$.ajax({
						type: "GET",
						url: arg,
						beforeSend:function(request){
							request.setRequestHeader("Auth-User-Token",token);
							},
						success: function (data) {
							if (typeof data == 'string') {
								data = eval('(' + data + ')');
							}

							var opts = data;
							// console.log(opts);
							//					  if(_div == "porganId"){
							//						  organ = data;
							//					  }else if (_div == "proleId"){
							//						  role = data;
							//					  }else{
							//
							//					  }


							if (opts && opts.length) {
								for (var idx = 0; idx < opts.length; idx++) {
									sle.append('<option value="' + opts[idx].value + '">' + opts[idx].name + '</option>');
								}
								sle.val(_props[_k].value);
							}
							sle.trigger("change");
						},
						error: function () {
							console.log(arguments[1]);
						}

					});
				} else {
					for (var idx = 0; idx < arg.length; idx++) {
						sle.append('<option value="' + arg[idx].value + '">' + arg[idx].name + '</option>');
					}
					sle.val(_props[_k].value);
				}

				$('#' + _div).data('editor', this);
			};
			this.destroy = function () {
				$('#' + _div + ' input').each(function () {
					_props[_k].value = $(this).val();
				});
			};
		}
	});

})(jQuery);
