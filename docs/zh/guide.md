---
    sidebar : auto
---

## EmrEditor简介 <Badge text="beta" type="warn"/> <Badge text="1.6.6"/> <Badge text="默认主题"/>
EmrEditor是一款基于UeEditor开发的所见即所得web版病历编辑器，具有轻量、可定制、遵循国家电子病历功能等特点，支持续打、病历痕迹保留、自定义纸质、全结构化等。

## 开始使用

1.1 下载编辑器 

可到QQ群里面下载开发包（Q群：**186671615**）

2.1 创建DEMO文件

解压下载的文件，将下载的文件拷贝到demo工程下，创建emrdemo.html文件： 

**步骤一：必须引入相关js与css文件** 

如图：

``` js
  <script src="statics/emr/third-party/jquery-1.10.2.min.js"></script>
  <script src="statics/emr/emreditor.config.js"></script>
  <script src="statics/emr/emreditor.all.min.js"></script>
  <script src="statics/emr/lang/zh-cn/zh-cn.js"></script>
  <script src="statics/emr/toolbar.config.js"></script>
```


**步骤二：增加toolbar工具栏的代码实现**


``` html
<script type="text/javascript" charset="utf-8" src="emreditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="third-party/jquery-1.10.2.min.js"></script>
<script type="text/javascript" charset="utf-8" src="emreditor.all.min.js?v=2.0"></script>
<body>  
    <div class="bs">       
        <div class="bs-header"></div>      
        <div id="toolbar" class="toolbar"></div>      
        <div class="bs-editor">         
          <div class="bs-editor-header"> </div>     
              <div class="bs-editor-content">              
                 <script type="text/plain" id="myEditor">
                 </script>      
              </div>      
          <div class="bs-editor-footer"></div>     
        </div>  
     </div>
</body>
```
初始化编辑器
``` js
    $(function () {
        WO.render('toolbar', 'myEditor');
      });
    或者vue中
    WO.render("toolbarid", "editorid", "emr/");
```
这时整个编辑器加载完成。


1.2 配置结构化（在公共数据保存或某些数据回传时特别有用处）

首先进行配置文件(**emreditor.config.js**)的代码配置：
``` js
window.StructJsonConfig = [
    //n:id l:{1-文本 2-下拉 3-日期 4章节}
    { n: 'xm', l: 1, t: '姓名' },
    { n: 'xb', l: 2, t: '性别' },
    { n: 'csny', l: 3, t: '出生年月' },
    { n: 'nl', l: 1, t: '年龄' },
    { n: 'zy', l: 2, t: '职 业' },
    { n: 'gzdw', l: 2, t: '工作单位' },
    { n: 'kb', l: 1, t: '科别' },
    { n: 'bq', l: 1, t: '病区' },
    { n: 'ch', l: 1, t: '床号' },
    { n: 'zyh', l: 1, t: '住院号' },
    { n: 'gsz', l: 1, t: '供史者' },
    { n: 'hy', l: 2, t: '婚   姻' },
    { n: 'csd', l: 1, t: '出生地' },
    { n: 'mz', l: 2, t: '民    族' },
    { n: 'ryrq', l: 3, t: '入院日期' },
    { n: 'jlrq', l: 3, t: '记录日期' },
    { n: 'gms', l: 4, t: '过敏史章节' },
    { n: 'zs', l: 4, t: '主诉章节' },
    { n: 'xbs', l: 4, t: '现病史章节' },
    { n: 'jws', l: 4, t: '既往史章节' },
    { n: 'tgjc', l: 4, t: '体格检查章节' },
    { n: 'sysjc', l: 4, t: '实验室检验章节' },
    { n: 'zdjg', l: 4, t: '诊断结果' },
    { n: 'bzyjms', l: 4, t: '辩证依据描述' },
    { n: 'fzzf', l: 4, t: '治则治法' }
];
```
在保存时调用命令editor.execCommand('createstruct')获取病历文档中结构化信息，示例如下：

``` js
0: {name: "XM", value: "李庚坤", g: undefined}
1: {name: "XB", value: "男", g: undefined}
2: {name: "CSNY", value: "2019/09/03 hh:00:00", g: undefined}
3: {name: "MZ", value: "请编辑", g: undefined}
4: {name: "ZY", value: "请发编辑", g: undefined}
5: {name: "HY", value: "请编辑", g: undefined}
6: {name: "GZDW", value: "请编辑", g: undefined}
7: {name: "JLRQ", value: "2019/09/03 hh:00:00", g: undefined}
8: {name: "KB", value: "计划免疫科", g: undefined}
9: {name: "ZS", value: "请编辑", g: true}
10: {name: "XBS", value: "请编辑", g: true}
11: {name: "JWS", value: "显示名", g: true}
12: {name: "TGJC", value: "显示名", g: true}
13: {name: "SYSJC", value: "显示名", g: true}
14: {name: "ZDJG", value: "显示名", g: true}
15: {name: "XM", value: "显示名", g: undefined}

```


1.3 配置工具栏

开发包里面toolbar.config.js可配置自定义工具栏，配置回调事件，工具栏中的功能位置与数量自定义调整，也可重写工具栏中的功能，如vue中重写【保存】功能，代码如下：
``` js
    var my = this;
    //初始化UE保存
    UE.plugins["savecontent"] = function() {
      var me = this;
      me.commands["savecontent"] = {
        execCommand: function(cmdName) {
          var html = me.getContent();
          my.$emit("savechange", html);
        }
      };
    };
``` 
::: tip
工具栏中的输入域html对外开放，用户可以设置相关配置与重写，具体的输入域页面在# emr/dialogs/editattr中
:::
1.4 配置文件

针对编辑器，可以在这里配置整个编辑器的特性， * 所有被注释的配置项均为UEditor默认值，主要有两种修改方案

::: tip
一种是取消此处注释，然后修改成对应参数，另一种是在实例化编辑器时传入对应参数。
:::
####当升级编辑器时，可直接使用旧版配置文件替换新版配置文件,不用担心旧版配置文件中因缺少新功能所需的参数而导致脚本报错。
在配置文件中有相关的详细说明，这里就不是一一列举，例举出几个代表性的配置：
``` js
    editorModel: 'design'  
    说明：四种设计模式：design设计模式/view预览模式/edit编辑模式/mark留痕迹模式
    imageUrl:图片保存请求接口
    savexmlUrl:xml保存请求接口
    downloadxmlUrl:下载xml请求接口
    loadxmlUrl:加载xml请求接口
    initialFrameWidth:初始化文档宽度
    initialFrameHeight:初始化文档高度
    paste:默认false. 初始化编辑内部是否可以从外部粘贴内容
```



## 常见操作
### 初始化文档

在病历模板加载时，我们需要对模板进行初始化并在编辑器中显示，这时需要用到setContent命令，将原有的保存的html模板加载到编辑器显示，例：
``` js
       this.editor.setContent(content);
       this.editor.fireEvent('ready');
```
::: danger
注意：第二个命令为文档进行事件注册，不然加载html后，文档中的事件全部失效
::: 
### 数据源配置

数据源配置在电子病历开发中占据重要的位置，需要对各类型输入域进行赋值处理
场景一：打开电子病历，检索所有相关数据源，加载模板后，进行数据源的绑定

#### step1：
为输入域的【输入域标识】设置数据源的字段名称，如“病人姓名”（如果输入域标识只读，只需要修改相关的html，将readonly属性去除）
####step2：
加载模板时，执行命令this.editor.execCommand("databinds", data)，其中的data为json格式的数据,例：
``` js
    {
	    病人姓名: "李四", 
	    病人性别: "男", 
	    接诊医生名称: "张三"
    }
```
将获取的数据源绑定在模板中。

场景二：加载模板后，获取病历文档中需要绑定数据源的控件并返回给后台，后台接口接受后获取并返回
####step1:
设置输入域中的表、字段、关联表，比如民族，表就是这个字段从哪个表取数据，关联表就是这个字段有没有关联的字典。
在加载病历时调用WO.editor.execCommand("pagebindfiled")命令，得出相关绑定信息给后台，例：
``` js
    0: {ID: "1567650839608", TableName: "view", Field: "name", GLT: "undefined"}
    1: {ID: "1567650869061", TableName: "view", Field: "sex", GLT: "dict"}
```
####step2：

后台处理后，得出相关数据，执行命令
``` js
this.editor.execCommand("databinds", data)
```
### 视图切换

2.3.1  切换编辑器文档的模式，当然文档模式包含源码模式、留痕模式、设计模式、编辑模式、预览模式、严格模式。设计模式执行命令如下：
```js
	this.editor.options.editorModel = "designmodel";
```
源码模式（source）：查看编辑器文档的html代码
留痕模式（markmodel）：显示编辑器的痕迹信息
设计模式（designmodel）：能够对输入域进行设计
编辑模式（editmodel）：只能编辑文档文本与输入域，不能对输入域进行设计
预览模式（viewmodel ）：去除相关输入域格式，展示信息
严格模式（Strict）：只能编辑输入域 信息，其他都不能修改，包括文本

2.3.2 获取当前编辑器文档的模式
``` js 
	return  this.editor.options.editorModel
```
### 自定义按钮命令

场景一：所有toolbar上的按钮都可以重写命令，如当前demo中的【保存】按钮，目前点击后调用配置文件中的url进行保存处理，用户可对保存按钮进行重写事件，只需在初始化toolbar前，对保存按钮注册命令，例：
``` js
    var my = this
    UE.plugins["savecontent"] = function() {
      var me = this;
      me.commands["savecontent"] = {
        execCommand: function(cmdName) {
          var html = me.getContent();
          my.$emit("savechange", html);
        }
      };
    };
```
场景二：增加toolbar中的按钮，并增加命令，比如增加conlose.log("addtest")的命令，先在toolbar.config.js中配置增加按钮，根据id注册命令，例：
``` js
    UE.plugins["temp"] = function() {
      var me = this;
      me.commands["temp"] = {
        execCommand: function(cmdName) {
          conlose.log("addtest")
        }
      };
    };
```
### 打印相关（相关命令见下文）

2.5.1 正常打印：直接打印文档，所见所得

::: danger
如果当前编辑模式输入域有边框，会打印出来
:::

2.5.2 预览打印：弹出预览窗口，显示打印

2.5.3 须打：目前采用遮盖打印

2.5.4 网格线：在需要使用网格线的初始化，点击【工具】-【打印设置】-【开始标记】，然后点击【网格线】

### 痕迹保留（待定）

### 结构化（待定）

### 保存文档

保存文档目前可使用getContent()命令获取html，然后保存到后台，如果html过来，建议以文件格式保存。保存后台的请求地址可在emreditor.config.js中的配置。
::: tip
其他相关保存xml、pdf皆采用后台处理的方式。
:::

### 页眉页脚（不同页眉？？）

#### 页眉
 点击【插入页眉】，进行页眉编辑，一个文档中不能重复插入页眉。在已经存在页眉的情况下，可点击【编辑页眉】进行页眉编辑。
#### 页脚
页码目前提供 1、1-n  、1/n 、第n页 四种方式

### 表格

表格中相关的常规操作
::: tip
针对很多要求的边框不可见，可通过右击->表格属性->设置表格边框
:::
### 页面布局

提供页边距、页面方向、页面大小、页行高的设置，目标页边距跟页面大小提供固定的几种格式

### 相关后端的要求

相关请求的配置在配置文件emreditor.config.js中，含有serverUrl、imageUrl、savexmlUrl、downloadxmlUrl、loadxmlUrl等，当然也可自定义其他去配置。

::: danger
图片、二维码等就需要imageUrl后端进行处理，否则图片无法上传
::: 
## 相关输入域属性
相关输入域的页面在emr->dialogs->editattr中，可进行自主编辑，增加相关属性。




