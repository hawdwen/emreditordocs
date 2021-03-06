---
    sidebar : auto
---

# 命令列表
## COMMAND通用方法
| 序号 | 方法                                 | 描述                                                                                                                                                                                                   |
|------|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1    | **execCommand(String cmd, params…)** | *执行命令的通用接口，该方法的第一个参数是需要执行的命令。剩下的可选的参数根据每个命令的不同而有一些差异， 具体请参照相应的命令详情。*|                                                                 |
| 2    | queryCommandState(String cmd)        | *查询给定命令在当前选区内的状态。通用的返回状态有：</br>“1”=>代表当前命令在当前选区内已执行</br>“0”=>代表当前命令在当前选区内未执行， 但处于可用状态</br>“-1”=>代表当前命令在当前选区内处于不可用状态* |
| 3    | queryCommandValue()                  | *查询给定命令在当前选区内的值， 默认返回undefined。根据命令的不同其返回值也会不同。*                                                                                                                   |
::: tip
*以上列表中的方法对于每一个命令都是适用的。区别在于，对于不同的命令，其需要的参数可能会不同*
:::
## COMMAND列表

<style>
table th:nth-of-type(2) {
	width: 300px;
}
</style>
### 回收箱
| 序号 | 描述                 | 命令 |
|------|----------------------|-----:|
| 1    | 撤销上一次执行的命令 | undo |
| 2    | 重做上一次执行的命令 | redo |
### 字体
| 序号 | 描述       |          命令 |
|------|------------|--------------:|
| 1    | 字体       |    fontfamily |
| 2    | 清除格式   |  removeformat |
| 3    | 自动格式化 |   autotypeset |
| 4    | 格式刷     |   formatmatch |
| 5    | 字体大小   |      fontsize |
| 6    | 增大字体   |   touppercase |
| 7    | 减小字体   |   tolowercase |
| 8    | 上标       |   superscript |
| 9    | 下标       |     subscript |
| 10   | 加粗       |          bold |
| 11   | 斜体       |        italic |
| 12   | 下划线     |     underline |
| 13   | 删除线     | strikethrough |
| 14   | 文字颜色   |     forecolor |
| 15   | 背景颜色   |     backcolor |
### 段落
| 序号 | 描述     |                命令 |
|------|----------|--------------------:|
| 1    | 向左对其 |        justify-left |
| 2    | 向右对其 |       justify-right |
| 3    | 居中对其 |      justify-center |
| 4    | 两端对其 |     justify-justify |
| 5    | 引用     |          blockquote |
| 6    | 增加缩进 |              indent |
| 7    | 减少缩进 |              indent |
| 8    | 编号一   |   insertorderedlist |
| 9    | 编号二   | insertunorderedlist |
| 10   | 段前距   |      rowspacing-top |
| 11   | 段后距   |   rowspacing-bottom |
| 12   | 行高     |          lineheight |
### 页
| 序号 | 描述   |      命令 |
|------|--------|----------:|
| 1    | 分页符 | pagebreak |
### 链接
| 序号 | 描述 |   命令 |
|------|------|-------:|
| 1    | 增加 |   link |
| 2    | 取消 | unlink |
### 影像
| 序号 | 描述 |        命令 |
|------|------|------------:|
| 1    | 图片 | insertimage |
| 2    | 视频 | insertvideo |
| 3    | 单图 | insertimage |
### 代码
| 序号 | 描述 |       命令 |
|------|------|-----------:|
| 1    | 代码 | insertcode |

### 视图
| 序号 | 描述     |        命令 |
|------|----------|------------:|
| 1    | 源码模式 |      source |
| 2    | 设计模式 | designmodel |
| 3    | 留痕模式 |   markmodel |
| 4    | 编辑模式 |   editmodel |
| 5    | 预览模式 |   viewmodel |
| 6    | 预览文档 |     preview |
