(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{358:function(e,t,o){"use strict";o.r(t);var u=o(14),s=Object(u.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("code",[e._v("useState")]),e._v(": 用于定义组件的 State，对标到类组件中this.state的功能")]),e._v(" "),t("p",[t("code",[e._v("useEffect")]),e._v("：通过依赖触发的钩子函数，常用于模拟类组件中的componentDidMount，componentDidUpdate，componentWillUnmount方法")]),e._v(" "),t("p",[t("code",[e._v("其它内置钩子")]),e._v(":useContext: 获取 context 对象")]),e._v(" "),t("p",[t("code",[e._v("useReducer")]),e._v(": 类似于 Redux 思想的实现，但其并不足以替代 Redux，可以理解成一个组件内部的 redux，并不是持久化存储，会随着组件被销毁而销毁；属于组件内部，各个组件是相互隔离的，单纯用它并无法共享数据；配合useContext的全局性，可以完成一个轻量级的 Redux")]),e._v(" "),t("p",[t("code",[e._v("useCallback")]),e._v(": 缓存回调函数，避免传入的回调每次都是新的函数实例而导致依赖组件重新渲染，具有性能优化的效果；")]),e._v(" "),t("p",[t("code",[e._v("useMemo")]),e._v(": 用于缓存传入的 props，避免依赖的组件每次都重新渲染；")]),e._v(" "),t("blockquote",[t("p",[e._v("useMemo 与 useCallback 的区别")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("useCallback")]),e._v(" 是缓存了函数自身，而 "),t("code",[e._v("useMemo")]),e._v("是缓存了函数的返回值。")])])]),e._v(" "),t("p",[t("code",[e._v("useRef")]),e._v(": 获取组件的真实节点；")]),e._v(" "),t("p",[t("code",[e._v("useLayoutEffect")]),e._v("：DOM更新同步钩子。用法与useEffect类似，只是区别于执行时间点的不同。useEffect属于异步执行，并不会等待 DOM 真正渲染后执行，而useLayoutEffect则会真正渲染后才触发；可以获取更新后的 state；")]),e._v(" "),t("p",[t("code",[e._v("自定义钩子(useXxxxx)")]),e._v(": 基于 Hooks 可以引用其它 Hooks 这个特性，我们可以编写自定义钩子。")])])}),[],!1,null,null,null);t.default=s.exports}}]);