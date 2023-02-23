(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{309:function(t,a,v){"use strict";v.r(a);var _=v(14),e=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"压缩原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩原理"}},[t._v("#")]),t._v(" 压缩原理")]),t._v(" "),a("h2",{attrs:{id:"压缩核心之deflate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩核心之deflate"}},[t._v("#")]),t._v(" 压缩核心之Deflate")]),t._v(" "),a("p",[t._v("gzip的核心是 "),a("code",[t._v("deflate")]),t._v("，deflate是一个同时使用 "),a("code",[t._v("LZ77")]),t._v(" 与 "),a("code",[t._v("Huffman Coding")]),t._v("的算法")]),t._v(" "),a("h3",{attrs:{id:"lz77"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lz77"}},[t._v("#")]),t._v(" LZ77")]),t._v(" "),a("p",[t._v("LZ77的核心思路是如果一个串中有两个重复的串，"),a("strong",[t._v("那么只需要知道第一个串的内容和后面串相对于第一个串起位置的距离 + 串的长度")])]),t._v(" "),a("p",[t._v("比如：ABCDEFGABCDEFH → ABCDEFG(7, 6)H。7指的是往前第 7 个数开始，6指的是重复串的长度，ABCDEFG(7, 6)H完全可以表示前面的串，并且是没有二义性的。")]),t._v(" "),a("p",[t._v("LZ77用 "),a("code",[t._v("滑动窗口")]),t._v(" 实现的算法。")]),t._v(" "),a("p",[t._v("gzip 并不是万能的，它的原理是在一个文本文件中找一些重复出现的字符串、临时替换它们，从而使整个文件变小，所以对于图片等会处理不了。")]),t._v(" "),a("p",[t._v("核心算法是哈夫曼算法和LZ77")]),t._v(" "),a("h2",{attrs:{id:"为什么在本地进行gzip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么在本地进行gzip"}},[t._v("#")]),t._v(" 为什么在本地进行gzip")]),t._v(" "),a("p",[t._v("服务器压缩也需要时间开销和 CPU 开销，所以有时候可以用 Webpack 来进行 gzip 压缩，从而为服务器分压。")]),t._v(" "),a("p",[t._v("服务器查找到有与源文件同名的.gz文件就会直接读取，不会主动压缩，降低cpu负载，优化了服务器性能")]),t._v(" "),a("h2",{attrs:{id:"是否所有文件都需要开启-gzip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否所有文件都需要开启-gzip"}},[t._v("#")]),t._v(" 是否所有文件都需要开启 gzip")]),t._v(" "),a("p",[t._v("如果压缩文件太小，那不使用；但是如果具有一定规模的项目文件，比如10K以上，可以开启 gzip。")]),t._v(" "),a("p",[t._v("媒体文件无需开启: 图片、音乐、视频大多数已经压缩过了。一般只需要压缩html, css, javascript")])])}),[],!1,null,null,null);a.default=e.exports}}]);