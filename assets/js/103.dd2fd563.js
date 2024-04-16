(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{396:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dns解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns解析"}},[t._v("#")]),t._v(" DNS解析")]),t._v(" "),a("p",[t._v("域名从右向左分为顶级域名、二级域名、三级域名依次类推")]),t._v(" "),a("p",[t._v("输入url过后，先查找浏览器是否有dns缓存，没找到再查找host文件是否有记录。没找到再去本地的dns服务器查找是否有缓存。然后再去计算机上配置的dns服务器上是否有缓存，还是没有就去查找根dns服务器，全球13台，固定ip地址，然后判断.com域名是哪个服务器管理。找到过后就返回ip。")]),t._v(" "),a("p",[t._v("浏览器 -> 系统 -> 路由器 -> ISP（互联网服务提供商，也就是域名系统）")]),t._v(" "),a("p",[t._v("前端dns优化")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x-dns-prefetch-control"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://bdimg.share.baidu.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h1",{attrs:{id:"拿到ip过后就进行tpc解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拿到ip过后就进行tpc解析"}},[t._v("#")]),t._v(" 拿到ip过后就进行TPC解析")]),t._v(" "),a("p",[t._v("首先建立三次握手")]),t._v(" "),a("p",[t._v("为什么是三次握手：第一次握手，主机A发送SYN=1的TCP包给服务器，并且随机产生一个作为确认号。主机B收到SYN码过后，确认主机A的发送能力正常。第二次握手，主机B收到请求后，向A发送确认号（主机A的seq+1），syn=1 ，seq = 随机数的TCP包。第三次握手，主机A收到后检车确认号是否正确，可以确定主机B发送能力和接受能力正常，但是目前不清楚主机A的接受能力是否正常，因为主机B不知道第二次握手是否成功，所以才有了第三次握手。也就是主机A会再次发送确认号（主机B的seq+1），ack=1，主机B收到后检查是否正确则建立成功。")]),t._v(" "),a("h1",{attrs:{id:"发送http请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送http请求"}},[t._v("#")]),t._v(" 发送HTTP请求")]),t._v(" "),a("p",[t._v("握手完毕过后，客户端发起html资源请求，服务器判断请求头中的资源过期时间，答复客户端是从本地缓存取资源还是服务器返回最新的资源。缓存方式通过判断cache-control如果是no-cache就是协商缓存。如果没有no-cache则会取expires的命中强缓存，来对比是否过期。\n协商缓存：if-none-match 搭配 etag。 if-modifed-since搭配 last-modified。命中协商缓存。请求返回304。如果不一致有改动，则返回新的过期时间或etag，并返回200.\n什么是from disk cache和from memory cache：强缓存触发，也就是硬盘加载还是从内存加载。先查找内存，再查找硬盘，如果都没有则进行网络请求之后再缓存到硬盘和内存。")]),t._v(" "),a("h1",{attrs:{id:"服务器处理请求并返回http报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器处理请求并返回http报文"}},[t._v("#")]),t._v(" 服务器处理请求并返回HTTP报文")]),t._v(" "),a("h1",{attrs:{id:"浏览器解析渲染页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器解析渲染页面"}},[t._v("#")]),t._v(" 浏览器解析渲染页面")]),t._v(" "),a("ol",[a("li",[t._v("构建dom树，从上到下解析html文档生成dom节点树")]),t._v(" "),a("li",[t._v("加载解析样式生成css树")]),t._v(" "),a("li",[t._v("加载并执行js")]),t._v(" "),a("li",[t._v("构建渲染树，render tree，根据dom树和css树，生成渲染树")]),t._v(" "),a("li",[t._v("渲染树，按顺序展示在屏幕上的一系列带有字体，颜色，尺寸等属性的矩形")]),t._v(" "),a("li",[t._v("布局layout：根据渲染树将节点树的每一个节点布局到屏幕上的正确位置")]),t._v(" "),a("li",[t._v("绘制：遍历渲染树绘制所有节点，为每一个节点适应对应的样式\n连接结束。")])]),t._v(" "),a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/4/1731a0797ee78e56~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp"}}),t._v(" "),a("ul",[a("li",[t._v("构建请求")]),t._v(" "),a("li",[t._v("查找缓存")]),t._v(" "),a("li",[t._v("准备 IP 和端口")]),t._v(" "),a("li",[t._v("等待 TCP 队列")]),t._v(" "),a("li",[t._v("建立 TCP 连接")]),t._v(" "),a("li",[t._v("发起 HTTP 请求")]),t._v(" "),a("li",[t._v("服务器处理请求")]),t._v(" "),a("li",[t._v("服务器返回请求和断开连接")])])])}),[],!1,null,null,null);a.default=e.exports}}]);