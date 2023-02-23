(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{370:function(v,a,t){"use strict";t.r(a);var _=t(14),r=Object(_.a)({},(function(){var v=this,a=v._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"线程和进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程和进程"}},[v._v("#")]),v._v(" 线程和进程")]),v._v(" "),a("p",[a("code",[v._v("一个进程")]),v._v("就是一个程序的运行实例。启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程，我们把这样的一个运行环境叫进程。\n"),a("code",[v._v("线程")]),v._v("不能单独存在，它是由进程来启动和管理的。")]),v._v(" "),a("h3",{attrs:{id:"进程和线程之间的关系有以下-4-个特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程之间的关系有以下-4-个特点"}},[v._v("#")]),v._v(" 进程和线程之间的关系有以下 4 个特点：")]),v._v(" "),a("ol",[a("li",[v._v("进程中的任意一线程执行出错，都会导致整个进程的崩溃。")]),v._v(" "),a("li",[v._v("线程之间共享进程中的数据")]),v._v(" "),a("li",[v._v("当一个进程关闭之后，操作系统会回收进程所占用的内存。")]),v._v(" "),a("li",[v._v("进程之间的内容相互隔离。")])]),v._v(" "),a("hr"),v._v(" "),a("h2",{attrs:{id:"单进程浏览器时代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单进程浏览器时代"}},[v._v("#")]),v._v(" 单进程浏览器时代")]),v._v(" "),a("p",[v._v("单进程浏览器指所有模块都运行在同一个进程里面，包含了"),a("code",[v._v("网络")]),v._v("，"),a("code",[v._v("插件")]),v._v("，"),a("code",[v._v("javascript运行环境")]),v._v("，"),a("code",[v._v("渲染引擎")]),v._v("，"),a("code",[v._v("页面")]),v._v("等")]),v._v(" "),a("h4",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),a("ul",[a("li",[v._v("不稳定性")]),v._v(" "),a("li",[v._v("不流畅")]),v._v(" "),a("li",[v._v("不安全")])]),v._v(" "),a("p",[v._v("单进程意味着一个浏览器在打开多个网页的时候，一个页面或者插件卡了整个浏览器就崩溃了。同时javascript运行在环境中，会阻塞网页的渲染，造成网页相应不流畅的问题。")]),v._v(" "),a("h2",{attrs:{id:"多进程浏览器时代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多进程浏览器时代"}},[v._v("#")]),v._v(" 多进程浏览器时代")]),v._v(" "),a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/4/1731a0e8b5d3ce19~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp"}}),v._v(" "),a("ul",[a("li",[v._v("浏览器进程：主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。")]),v._v(" "),a("li",[v._v("渲染进程：核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。")]),v._v(" "),a("li",[v._v("GPU 进程：其实，Chrome 刚开始发布的时候是没有 GPU 进程的。而 GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程。")]),v._v(" "),a("li",[v._v("网络进程：主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。")]),v._v(" "),a("li",[v._v("插件进程：主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。")])]),v._v(" "),a("h3",{attrs:{id:"多进程模式的弊端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多进程模式的弊端"}},[v._v("#")]),v._v(" 多进程模式的弊端")]),v._v(" "),a("ul",[a("li",[v._v("更高的资源占用：因为每个进程都会包含公共基础结构的副本（如 JavaScript 运行环境），这就意味着浏览器会消耗更多的内存资源。")]),v._v(" "),a("li",[v._v("更复杂的体系架构：浏览器各模块之间耦合性高、扩展性差等问题，会导致现在的架构已经很难适应新的需求了")])]),v._v(" "),a("h3",{attrs:{id:"一些理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些理解"}},[v._v("#")]),v._v(" 一些理解")]),v._v(" "),a("p",[v._v("即使是多进程架构，也会碰到一个页面挂了整个浏览器崩溃的情况，原因是，当"),a("code",[v._v("多页签符合同一个站点时，浏览器会将这几个页面分配同一个渲染进程")]),v._v("，所以一个崩溃全部都会崩溃。我在浏览b站或者直播平台时，喜欢同时打开好几个页签挨个挨个的看，当一个页签还未完全加载时，就打开了新的，你会发现之前的页签并不会开始播放视频内容，也就是并没有声音出来，现在想来也是这个原因，因为多个页签共享同一个渲染进程，其他页签总会被当前访问的页签所阻塞。")])])}),[],!1,null,null,null);a.default=r.exports}}]);