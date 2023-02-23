(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{319:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"函数式编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程"}},[t._v("#")]),t._v(" 函数式编程")]),t._v(" "),s("p",[t._v("个人理解的函数式编程是函数或属性可以作为另外函数的返回值，并在其他函数中使用，可以一个函数一个函数互相调用，形成的蜘蛛网似的结构。"),s("strong",[t._v("函数式编程旨在尽可能地提高代码的无状态性和不变形")])]),t._v(" "),s("ul",[s("li",[t._v("面向对象编程（OO）通过封装变化使得代码更易理解")]),t._v(" "),s("li",[t._v("函数式编程（FP）通过最小化变化使得代码更易理解")])]),t._v(" "),s("p",[t._v("当我们考虑应用设计时，问问自己是否遵从了以下的设计原则")]),t._v(" "),s("ul",[s("li",[t._v("可拓展性：我是否需要不断的重构代码来支持额外的功能")]),t._v(" "),s("li",[t._v("易模块化：如果我更改了一个文件，另一个文件会不会受到影响")]),t._v(" "),s("li",[t._v("可重用性：是否有很多重复的代码？")]),t._v(" "),s("li",[t._v("可测性：给这些函数添加单元测试是否让我纠结？")]),t._v(" "),s("li",[t._v("易推理性：我写的代码是否非结构化严重并难以推理？")])]),t._v(" "),s("p",[t._v("函数式编程所基于的一些基本概念：")]),t._v(" "),s("ul",[s("li",[t._v("声明式编程")]),t._v(" "),s("li",[t._v("纯函数")]),t._v(" "),s("li",[t._v("引用透明")]),t._v(" "),s("li",[t._v("不可变性")])]),t._v(" "),s("h2",{attrs:{id:"纯函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纯函数"}},[t._v("#")]),t._v(" 纯函数")]),t._v(" "),s("p",[t._v("函数式编程基于一个前提，即使用"),s("code",[t._v("纯函数")]),t._v("构建具有不变性的程序。纯函数具有以下性质：")]),t._v(" "),s("ul",[s("li",[t._v("仅取决于提供的输入，而不依赖与任何在函数求职期间或调用间隔可能变化的隐藏状态和外部状态")]),t._v(" "),s("li",[t._v("不会造成超出其作用域的变化，例如修改全局对象或引用传递的参数")])]),t._v(" "),s("p",[t._v("任何不符合上述条件的函数都是"),s("code",[t._v("不纯的")]),t._v("，比如")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" counter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("counter\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("因为其读取并修改了一个外部变量，即函数作用与外的counter。一般来讲，函数在读取或写入外部资源时都会产生副作用。以下操作都有可能造成副作用")]),t._v(" "),s("ul",[s("li",[t._v("改变一个全局的变量、属性或数据结构")]),t._v(" "),s("li",[t._v("改变一个函数参数的原始值")]),t._v(" "),s("li",[t._v("处理用户输入")]),t._v(" "),s("li",[t._v("抛出一个异常，除非它又被当前函数捕获了")]),t._v(" "),s("li",[t._v("屏幕打印或记录日志")]),t._v(" "),s("li",[t._v("查询HTML文档、浏览器的cookie或访问数据库")])]),t._v(" "),s("p",[t._v("一段有副作用的函数，也是我们经常写的一段函数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showStudent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ssn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" student "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ssn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("student "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("#{elementId}")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssn"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(", ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstname"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(", ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Student not found!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showStudent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'888-88-888'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("分析代码，这个函数会有一些副作用暴露到其作用域外：")]),t._v(" "),s("ul",[s("li",[t._v("该函数为访问数据，与一个外部变量（db）进行了交互，因为该函数签名中并没有声明该参数。在任何一个时间点，这个引用可能为null，或在调用间隔改变，从而导致完全不同的结果并破坏了程序的完整性。"),s("strong",[t._v("因为不确定外部环境对db做了什么修改，可能会直接修改"),s("code",[t._v("db.get = null")]),t._v("，从而造成函数内部出现异常。")])]),t._v(" "),s("li",[t._v("全局变量 elementId可能随时改变，难以控制。"),s("code",[t._v("还是对全局变量引用时的副作用")])]),t._v(" "),s("li",[t._v("HTML元素被直接修改了。HTML文档（DOM）本身是一个可变的，共享的全局资源。"),s("code",[t._v("还是对全局变量引用时的副作用，但是哪怕抽离成单独的函数体，这个也是一个不可避免的副作用，不过我们本质是尽可能减少函数的副作用，而不是没有副作用")])]),t._v(" "),s("li",[t._v("如果没有找到学生，该函数会抛出一个异常，这将导致整个程序的栈回退并突然结束。"),s("code",[t._v("所以应该将有异常处理的逻辑单独抽离为一个函数体，不让其影响函数体内其他逻辑的运行")])])]),t._v(" "),s("p",[t._v("我们通过函数柯里化修改函数")]),t._v(" "),s("ul",[s("li",[t._v("通过抽离函数，将一个函数改变成多个具有单一职责的短函数。")]),t._v(" "),s("li",[t._v("通过显式地将完成功能所需的依赖都定义为函数参数来减少副作用的数量\n比如以下代码，使用"),s("code",[t._v("curry函数")]),t._v("减少"),s("code",[t._v("find")]),t._v("和"),s("code",[t._v("append函数")]),t._v("的参数，使其成为可以与run组合的一元函数")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" find "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Object not found!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("csv")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("student")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssn"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(", ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstname"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(", ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" append "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("elementId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elementId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" info\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数柯里化，通过减少这些函数的长度，将showStudent编写为这些小涵书的组合")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" showStudent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#student-info'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  csv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showStudent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'888-88-888'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这样的代码修改带来的优势：")]),t._v(" "),s("ul",[s("li",[t._v("灵活了很多，因为现在有三个可以被重用的组件。")]),t._v(" "),s("li",[t._v("这种细粒度函数的重用是提供工作效率的一种手段，因为你可以大大减少需要主动维护的代码量。")]),t._v(" "),s("li",[t._v("声明式的代码风格提供了程序需要执行的那些高阶步骤的一个清晰视图，增强了代码可读性")]),t._v(" "),s("li",[t._v("更重要的是，与HTML对象的交互被移动到一个单独的函数中，将纯函数从不纯的行为中分离出来。柯里化以及如何管理纯与不纯的代码将在后续进一步解释。")])]),t._v(" "),s("p",[t._v("但是这个程序仍然有一些问题需要解决，但减少副作用能够在修改外部条件时使程序不那么脆弱。如果仔细看一下"),s("code",[t._v("find函数")]),t._v("，就会发现它有一个可以产生异常的检查null值的分支，我们需要明白，"),s("code",[t._v("确保一个函数有相同返回值是一个优点，它是的函数的结果是一致的和可预测的")]),t._v("这是纯函数的一个特质，叫"),s("code",[t._v("函数透明")])])])}),[],!1,null,null,null);s.default=e.exports}}]);