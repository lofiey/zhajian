﻿
        // 反调试函数,参数：开关，执行代码
        function endebug(off, code) {
            if (!off) {
                !function (e) {
                    function n(e) {
                        function n() {
                            return u
                        }
                        function o() {
                            window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized ? t("on") : (a = "off", console.log(d), console.clear(), t(a))
                        }
                        function t(e) {
                            u !== e && (u = e, "function" == typeof c.onchange && c.onchange(e))
                        }
                        function r() {
                            l || (l = !0, window.removeEventListener("resize", o), clearInterval(f))
                        }
                        "function" == typeof e && (e = {
                            onchange: e
                        });
                        var i = (e = e || {}).delay || 500,
                            c = {};
                        c.onchange = e.onchange;
                        var a, d = new Image;
                        d.__defineGetter__("id", function () {
                            a = "on"
                        });
                        var u = "unknown";
                        c.getStatus = n;
                        var f = setInterval(o, i);
                        window.addEventListener("resize", o);
                        var l;
                        return c.free = r, c
                    }
                    var o = o || {};
                    o.create = n, "function" == typeof define ? (define.amd || define.cmd) && define(function () {
                        return o
                    }) : "undefined" != typeof module && module.exports ? module.exports = o : window.jdetects = o
                }(), jdetects.create(function (e) {
                    var a = 0;
                    var n = setInterval(function () {
                        if ("on" == e) {
                            setTimeout(function () {
                                if (a == 0) {
                                    a = 1;
                                    setTimeout(code);
                                }
                            }, 200)
                        }
                    }, 100)
                })
            }
        }

        endebug(false, function () {
            // 非法调试执行的代码(不要使用控制台输出的提醒)
            
            document.write('<div style="text-align:center;color:red">森木志提醒您：检测到非法调试,请关闭后刷新重试</div>');
        });


