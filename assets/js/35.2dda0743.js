(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{321:function(t,s,a){"use strict";a.r(s);var n=a(14),p=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("JavaScript中的上下文(Context)和this都是用来描述代码执行环境的概念。")]),t._v(" "),s("p",[t._v("上下文(Context)通常是指当前代码块的作用域，它会影响变量的访问和函数的调用。JavaScript中有"),s("code",[t._v("全局上下文")]),t._v("和"),s("code",[t._v("函数上下文")]),t._v("两种。")]),t._v(" "),s("p",[t._v("全局上下文是整个JavaScript程序的最外层上下文，它在"),s("code",[t._v("脚本开始执行时被创建，直到脚本结束才被销毁")]),t._v("。全局上下文中定义的变量和函数可以在整个程序中被访问。")]),t._v(" "),s("p",[t._v("函数上下文是"),s("code",[t._v("函数执行时")]),t._v("创建的上下文，它定义了函数内部的变量和函数，以及函数的执行环境。在函数上下文中，this引用的是函数的调用者。")]),t._v(" "),s("p",[t._v("this是JavaScript中的一个关键字，"),s("code",[t._v("它指向当前函数执行时的上下文对象")]),t._v("。this的值是在函数调用时确定的，它可以是任何值，包括全局对象、当前对象或任何其他对象。")]),t._v(" "),s("p",[t._v("在全局上下文中，this指向全局对象(window)。")]),t._v(" "),s("p",[t._v("在函数上下文中，this的值取决于函数的调用方式。如果函数是作为对象的方法调用，this会指向调用该方法的对象。如果函数是普通函数调用，this会指向全局对象(window)。")]),t._v(" "),s("p",[t._v("如果函数使用了ES6的箭头函数语法，this的值会继承外层函数的上下文。")]),t._v(" "),s("p",[t._v("总之，JavaScript中的上下文和this是非常重要的概念，它们可以影响变量的作用域和函数的执行结果。了解它们的概念和使用方式，可以更好地理解JavaScript的执行机制。")]),t._v(" "),s("p",[t._v("在箭头函数中，this的值是在函数定义时确定的，而不是在函数调用时确定的。箭头函数的this总是指向其外层作用域中的this值，而不是指向函数自身的this值。")]),t._v(" "),s("p",[t._v("具体来说，当使用箭头函数时，箭头函数内部的this值将继承外层作用域中的this值，而不会被自动绑定到新的值。这意味着如果箭头函数在对象方法中被使用，this将指向该方法所在的对象，而不是箭头函数本身。")]),t._v(" "),s("p",[t._v("下面是一个例子，展示了箭头函数的this指向：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sayHi")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi, "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sayHiArrow")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi, "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Hi, Tom"')]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHiArrow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Hi, undefined"')]),t._v("\n")])])]),s("p",[t._v("在上面的例子中，obj.sayHi()使用了普通函数语法，其中的this指向了obj对象，输出了正确的结果。而obj.sayHiArrow()使用了箭头函数语法，其中的this指向了外层作用域中的this值（在浏览器中通常是window对象），输出了undefined。")]),t._v(" "),s("p",[t._v("需要注意的是，由于箭头函数的this值是在函数定义时确定的，因此无法通过call、apply、bind等方法来改变箭头函数中的this值。如果需要动态改变this值，仍需使用普通函数语法。")])])}),[],!1,null,null,null);s.default=p.exports}}]);