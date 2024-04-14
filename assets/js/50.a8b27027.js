(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{336:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"setstate-和-usestate-是-react-中用于管理组件状态的两种不同方式。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setstate-和-usestate-是-react-中用于管理组件状态的两种不同方式。"}},[t._v("#")]),t._v(" setState 和 useState 是 React 中用于管理组件状态的两种不同方式。")]),t._v(" "),s("h3",{attrs:{id:"setstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setstate"}},[t._v("#")]),t._v(" setState")]),t._v(" "),s("p",[t._v("setState是异步的，这意味着当调用 setState 时，React 不会立即更新组件的状态。相反，它会将状态更新请求放入一个队列中，并在稍后的时间点批量处理这些更新。")]),t._v(" "),s("p",[t._v("这种异步行为有助于提高性能，因为 React 可以批量处理多个状态更新，并在单个渲染周期内进行有效的更新。但是，由于 setState 是异步的，这意味着在调用 setState 后立即访问更新后的状态可能不会得到预期的结果。")]),t._v(" "),s("p",[t._v("如果需要在 setState 完成并且状态已经更新后执行某些操作，可以使用 setState 的回调函数：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新状态 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在状态更新完成后执行的操作")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"usestate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usestate"}},[t._v("#")]),t._v(" useState")]),t._v(" "),s("p",[t._v("useState是同步的，当调用 useState 来更新状态时，React 会立即更新组件的状态，并在"),s("code",[t._v("同一渲染周期")]),t._v("内应用这些更改。与 setState 不同，useState 不会将状态更新放入队列中等待批量处理。在调用 useState 后，可以立即访问更新后的状态，并且不需要担心异步更新带来的延迟。")]),t._v(" "),s("h2",{attrs:{id:"区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),s("p",[s("code",[t._v("setState")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("类组件：setState 是类组件中的方法，用于更新组件的状态。")]),t._v(" "),s("li",[t._v("异步更新：setState 是异步更新状态的，React 会将多个 setState 调用合并成一个更新来提高性能。")]),t._v(" "),s("li",[t._v("函数式更新：setState 可以接受一个函数作为参数，在函数中对前一个状态进行更新，而不是直接传递一个新的状态值。")]),t._v(" "),s("li",[t._v("合并更新：setState 会将更新合并成一个单一更新，而不是立即应用更新。这意味着 React 会将更新推迟到合适的时机，并且可能会在多次更新之后才进行渲染。")])]),t._v(" "),s("p",[s("code",[t._v("useState")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("函数式组件：useState 是函数式组件中的 Hook，用于在函数组件中使用状态。")]),t._v(" "),s("li",[t._v("同步更新：useState 返回一个状态值和一个更新状态的函数，这个更新函数可以立即更新状态，并触发重新渲染。")]),t._v(" "),s("li",[t._v("独立状态：每次调用 useState 都会创建一个独立的状态，与其他状态之间没有关联，因此可以在一个函数组件中多次使用 useState 来管理多个状态。")]),t._v(" "),s("li",[t._v("不会合并更新：每次调用状态更新函数，都会立即应用更新并触发重新渲染，而不会合并更新或延迟渲染。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);