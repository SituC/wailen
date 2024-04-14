(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{362:function(v,e,_){"use strict";_.r(e);var o=_(14),t=Object(o.a)({},(function(){var v=this,e=v._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("CSRF（Cross-site request forgery）攻击，也叫假冒跨站请求攻击，是一种网络安全攻击方式。攻击者利用受害者已登录的状态，以受害者的名义发送恶意请求给目标网站，从而进行非法操作或者窃取用户信息。")]),v._v(" "),e("p",[v._v("攻击步骤一般如下：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("用户在浏览器中登录了一个网站，并获得了该站点的Cookie，存储在本地。")])]),v._v(" "),e("li",[e("p",[v._v("用户在没有退出该网站的情况下，访问攻击者精心制作的恶意网站。")])]),v._v(" "),e("li",[e("p",[v._v("恶意网站中的JavaScript代码会向原网站发起一个HTTP请求，由于该请求携带了用户的Cookie，所以请求被原网站认为是合法的，于是攻击就成功了。")])])]),v._v(" "),e("p",[v._v("CSRF攻击通常需要满足以下条件：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("受害者已登录了目标网站，并且该网站在登录状态下没有采取任何防护措施。")])]),v._v(" "),e("li",[e("p",[v._v("攻击者可以诱导受害者访问恶意网站。")])]),v._v(" "),e("li",[e("p",[v._v("目标网站允许攻击者构造指定的HTTP请求。")])])]),v._v(" "),e("p",[v._v("为了防范CSRF攻击，可以采取以下措施：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("防止网站的Cookie被盗取：可以使用HttpOnly属性限制JavaScript访问Cookie，同时使用Secure属性可以限制Cookie只能通过HTTPS传输。")])]),v._v(" "),e("li",[e("p",[v._v("验证请求来源：可以在请求中加入token，每次请求时验证token的合法性，从而防止攻击者伪造请求。")])]),v._v(" "),e("li",[e("p",[v._v("在HTTP请求头中添加Referer字段：可以根据Referer字段判断请求来源是否合法。")])]),v._v(" "),e("li",[e("p",[v._v("针对表单提交进行限制：可以在表单中添加隐藏字段或者验证码等机制，从而保证只有真正的用户才能提交表单。")])])]),v._v(" "),e("p",[v._v("总的来说，为了防范CSRF攻击，需要从多个方面入手，包括前端和后端，以及一些安全机制的使用。同时，开发人员在编写代码的时候，也需要遵守安全编码规范，避免出现安全漏洞。")])])}),[],!1,null,null,null);e.default=t.exports}}]);