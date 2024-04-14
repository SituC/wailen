(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{410:function(t,v,e){"use strict";e.r(v);var _=e(14),a=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),v("p",[t._v("三大特性：头部压缩、Server Push、多路复用")]),t._v(" "),v("h2",{attrs:{id:"二进制分帧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二进制分帧"}},[t._v("#")]),t._v(" 二进制分帧")]),t._v(" "),v("p",[t._v("二进制分帧就是将一条连接上所有传输的信息，分割为更小的信息和帧，并对他们采用二进制格式编码，首部信息放在Headers帧中，主体信息被封装在Data帧中。")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("为什么Http2.0可以对所有的内容进行二进制转换？\n因为二进制分帧层在应用层和传输层之间的中间层，所有信息都会经过，进而可以转换。")])]),t._v(" "),v("li",[v("p",[t._v("为什么要用二进制？\n因为效率更高，计算机更青睐二进制数")])])]),t._v(" "),v("h2",{attrs:{id:"多路复用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多路复用"}},[t._v("#")]),t._v(" 多路复用")]),t._v(" "),v("p",[t._v("多路复用技术就是可以并发发送请求，而且无需等待相应返回的一种技术，消除了不必要的延迟，减少了页面加载时间。")]),t._v(" "),v("p",[t._v("多路复用为了解决http1.1的两个问题："),v("code",[t._v("串行的文件传输")]),t._v("，"),v("code",[t._v("连接数过多")])]),t._v(" "),v("ul",[v("li",[t._v("解决第一个问题：在"),v("code",[t._v("http1.1")]),t._v("的协议中，我们传输的"),v("code",[t._v("request")]),t._v("和"),v("code",[t._v("response")]),t._v("都是基于文本的，这样就会引发一个问题："),v("code",[t._v("所有的数据必须按顺序传输")]),t._v("，比如传输："),v("code",[t._v("hello world")]),t._v("，只能从"),v("code",[t._v("h")]),t._v("到"),v("code",[t._v("d")]),t._v("一个一个的传输，不能并行传输，因为接收端并不知道这些字符的顺序，所以并行传输在Http1.1中无法实现\n"),v("p",[v("img",{attrs:{src:"https://image-static.segmentfault.com/290/582/290582306-59b7a2f997310_fix732"}})])])]),t._v(" "),v("p",[t._v("Http2引入的二进制数据帧和流的概念后，其中"),v("code",[t._v("帧")]),t._v("对数据进行"),v("code",[t._v("顺序标识")]),t._v("，如下图所示，这样浏览器收到数据后，就可以按照序列对数据进行合并，而不会出现合并后数据错乱的情况。同样是因为有了序列，服务器就可以并行的传输数据，这就是"),v("code",[t._v("流")]),t._v("所做的事情。\n")]),v("p",[v("img",{attrs:{src:"https://image-static.segmentfault.com/136/273/1362734992-59b7a50b08bf4_fix732"}})]),v("p"),t._v(" "),v("ul",[v("li",[t._v("解决第二个问题："),v("code",[t._v("http2")]),t._v("对同一域名下所有的请求都是基于"),v("code",[t._v("流")]),t._v("，也就是说统一域名不管访问多少文件，也只"),v("code",[t._v("建立一路连接")]),t._v("。同样Apache的最大连接数为300，因为有了这个特性，最大的并发就可以提升到300，比原来50提升了6倍（浏览器最大请求连接数为6）。")])]),t._v(" "),v("h2",{attrs:{id:"首部压缩"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#首部压缩"}},[t._v("#")]),t._v(" 首部压缩")]),t._v(" "),v("p",[t._v("在第一次请求之后，大部分的字段可以复用的。而且随着页面越来越复杂，同一个页面发出的请求会越来越多，如果首部不压缩的话，会造成很大的流量开销。")]),t._v(" "),v("ol",[v("li",[t._v("首部压缩原理：\n浏览器和服务器会维护相同的静态表和动态表，以及内置一个霍夫曼编码表。静态表存储的是常见的一些头部，和一些常见的头部键值对。动态表开始是空的，如果头部命中静态表中的名称，那么就会将这份键值对存入动态表中，之后的请求首部命中了该键值对，则只需要一个字节就能表示。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7350aee2aa34d5d9e19d79d04c5d703~tplv-k3u1fbpfcp-watermark.awebp?"}})]),t._v(" "),v("h2",{attrs:{id:"服务器推送-server-push"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务器推送-server-push"}},[t._v("#")]),t._v(" 服务器推送 Server Push")]),t._v(" "),v("p",[t._v("当推送资源时，我们能获得与内联相同的性能提升，同时保持资源的外链形式，从而有独立的缓存策略。")])])}),[],!1,null,null,null);v.default=a.exports}}]);