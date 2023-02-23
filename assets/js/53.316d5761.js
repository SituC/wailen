(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{341:function(t,e,s){"use strict";s.r(e);var i=s(14),u=Object(i.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("在 Vue2 中，Vue 不会对数组的下标进行响应式监听的原因主要是出于性能考虑。")]),this._v(" "),t("p",[this._v("当一个数组被监听时，Vue会将数组中每个元素都转换成响应式对象，并且通过拦截数组变异方法来实现对数组的监听。然而，由于JavaScript语言的限制，Vue 无法通过拦截数组下标的方式来监听数组中每个元素的变化，因为JavaScript的数组变异方法并不会触发对象属性的 setter。")]),this._v(" "),t("p",[this._v("如果 Vue 对数组的每个下标都进行监听，这会导致性能问题，因为当数组中的元素发生变化时，Vue 需要对所有相关的依赖进行更新。而对于大型数组来说，这个过程非常耗费性能，因此Vue选择不对数组的下标进行监听，从而避免这种性能问题。")]),this._v(" "),t("p",[this._v("在 Vue3 中，Vue 引入了 Reactive API，可以通过 Reactive API 来创建一个响应式的数组，其中对于数组的每个元素都会进行监听，但这需要开发者自行使用 Reactive API 进行处理。")])])}),[],!1,null,null,null);e.default=u.exports}}]);