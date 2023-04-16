//从react 的包当中引入了React。只要你要写React.js组件就必须引入React, 因为react里有一种语法叫JSX(js+xml,)，稍后会讲到JSX，要写JSX，就必须引入React
import React from 'react'
//ReactDOM可以帮助我们把React组件渲染到页面上去，没有其它的作用了。它是从react-dom中引入的，而不是从react引入。
import ReactDOM from 'react-dom'
// ReactDOM里有一个render方法，功能就是把组件渲染并且构造DOM树，然后插入到页面上某个特定的元素上
// 例如把123456渲染到root节点上:ReactDOM.render("123456", document.getElementById('root'))，呈现效果：<div id="root">123456</div>
// ReactDOM.render(<div>123456</div>, document.getElementById('root'))  呈现效果：<div id="root"><div>123456</div></div>


ReactDOM.render(
// 这里就比较奇怪了，它并不是一个字符串，看起来像是纯 HTML 代码写在 JavaScript 代码里面。语法错误吗？这并不是合法的 JavaScript 代码, “在 JavaScript 写的标签的”语法叫 JSXJavaScriptXML。
<h1>欢迎进入React的世界</h1>,
// 渲染到哪里
    document.getElementById('root')
)

