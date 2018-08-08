var Zepto = function () {
    function t(t) {
        return null == t ? String(t) : G[z.call(t)] || "object"
    }

    function e(e) {
        return "function" == t(e)
    }

    function i(t) {
        return null != t && t == t.window
    }

    function r(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }

    function s(e) {
        return "object" == t(e)
    }

    function n(t) {
        return s(t) && !i(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function o(t) {
        return "number" == typeof t.length
    }

    function a(t) {
        return C.call(t, function (t) {
            return null != t
        })
    }

    function h(t) {
        return t.length > 0 ? T.fn.concat.apply([], t) : t
    }

    function l(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function c(t) {
        return t in O ? O[t] : O[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function u(t, e) {
        return "number" != typeof e || I[l(t)] ? e : e + "px"
    }

    function d(t) {
        var e, i;
        return M[t] || (e = R.createElement(t), R.body.appendChild(e), i = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == i && (i = "block"), M[t] = i), M[t]
    }

    function p(t) {
        return "children" in t ? A.call(t.children) : T.map(t.childNodes, function (t) {
            if (1 == t.nodeType)return t
        })
    }

    function f(t, e, i) {
        for (w in e)i && (n(e[w]) || J(e[w])) ? (n(e[w]) && !n(t[w]) && (t[w] = {}), J(e[w]) && !J(t[w]) && (t[w] = []), f(t[w], e[w], i)) : e[w] !== b && (t[w] = e[w])
    }

    function g(t, e) {
        return null == e ? T(t) : T(t).filter(e)
    }

    function m(t, i, r, s) {
        return e(i) ? i.call(t, r, s) : i
    }

    function v(t, e, i) {
        null == i ? t.removeAttribute(e) : t.setAttribute(e, i)
    }

    function _(t, e) {
        var i = t.className || "", r = i && i.baseVal !== b;
        return e === b ? r ? i.baseVal : i : void(r ? i.baseVal = e : t.className = e)
    }

    function y(t) {
        try {
            return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? T.parseJSON(t) : t) : t
        } catch (e) {
            return t
        }
    }

    function x(t, e) {
        e(t);
        for (var i = 0, r = t.childNodes.length; i < r; i++)x(t.childNodes[i], e)
    }

    var b, w, T, L, S, E, P = [], A = P.slice, C = P.filter, R = window.document, M = {}, O = {}, I = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, B = /^\s*<(\w+|!)[^>]*>/, D = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, W = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, N = /^(?:body|html)$/i, j = /([A-Z])/g, F = ["val", "css", "html", "text", "data", "width", "height", "offset"], k = ["after", "prepend", "before", "append"], U = R.createElement("table"), V = R.createElement("tr"), H = {
        tr: R.createElement("tbody"),
        tbody: U,
        thead: U,
        tfoot: U,
        td: V,
        th: V,
        "*": R.createElement("div")
    }, X = /complete|loaded|interactive/, Y = /^[\w-]*$/, G = {}, z = G.toString, q = {}, $ = R.createElement("div"), Q = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    }, J = Array.isArray || function (t) {
            return t instanceof Array
        };
    return q.matches = function (t, e) {
        if (!e || !t || 1 !== t.nodeType)return !1;
        var i = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (i)return i.call(t, e);
        var r, s = t.parentNode, n = !s;
        return n && (s = $).appendChild(t), r = ~q.qsa(s, e).indexOf(t), n && $.removeChild(t), r
    }, S = function (t) {
        return t.replace(/-+(.)?/g, function (t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, E = function (t) {
        return C.call(t, function (e, i) {
            return t.indexOf(e) == i
        })
    }, q.fragment = function (t, e, i) {
        var r, s, o;
        return D.test(t) && (r = T(R.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(W, "<$1></$2>")), e === b && (e = B.test(t) && RegExp.$1), e in H || (e = "*"), o = H[e], o.innerHTML = "" + t, r = T.each(A.call(o.childNodes), function () {
            o.removeChild(this)
        })), n(i) && (s = T(r), T.each(i, function (t, e) {
            F.indexOf(t) > -1 ? s[t](e) : s.attr(t, e)
        })), r
    }, q.Z = function (t, e) {
        return t = t || [], t.__proto__ = T.fn, t.selector = e || "", t
    }, q.isZ = function (t) {
        return t instanceof q.Z
    }, q.init = function (t, i) {
        var r;
        if (!t)return q.Z();
        if ("string" == typeof t)if (t = t.trim(), "<" == t[0] && B.test(t))r = q.fragment(t, RegExp.$1, i), t = null; else {
            if (i !== b)return T(i).find(t);
            r = q.qsa(R, t)
        } else {
            if (e(t))return T(R).ready(t);
            if (q.isZ(t))return t;
            if (J(t))r = a(t); else if (s(t))r = [t], t = null; else if (B.test(t))r = q.fragment(t.trim(), RegExp.$1, i), t = null; else {
                if (i !== b)return T(i).find(t);
                r = q.qsa(R, t)
            }
        }
        return q.Z(r, t)
    }, T = function (t, e) {
        return q.init(t, e)
    }, T.extend = function (t) {
        var e, i = A.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = i.shift()), i.forEach(function (i) {
            f(t, i, e)
        }), t
    }, q.qsa = function (t, e) {
        var i, s = "#" == e[0], n = !s && "." == e[0], o = s || n ? e.slice(1) : e, a = Y.test(o);
        return r(t) && a && s ? (i = t.getElementById(o)) ? [i] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : A.call(a && !s ? n ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, T.contains = R.documentElement.contains ? function (t, e) {
        return t !== e && t.contains(e)
    } : function (t, e) {
        for (; e && (e = e.parentNode);)if (e === t)return !0;
        return !1
    }, T.type = t, T.isFunction = e, T.isWindow = i, T.isArray = J, T.isPlainObject = n, T.isEmptyObject = function (t) {
        var e;
        for (e in t)return !1;
        return !0
    }, T.inArray = function (t, e, i) {
        return P.indexOf.call(e, t, i)
    }, T.camelCase = S, T.trim = function (t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }, T.uuid = 0, T.support = {}, T.expr = {}, T.map = function (t, e) {
        var i, r, s, n = [];
        if (o(t))for (r = 0; r < t.length; r++)i = e(t[r], r), null != i && n.push(i); else for (s in t)i = e(t[s], s), null != i && n.push(i);
        return h(n)
    }, T.each = function (t, e) {
        var i, r;
        if (o(t)) {
            for (i = 0; i < t.length; i++)if (e.call(t[i], i, t[i]) === !1)return t
        } else for (r in t)if (e.call(t[r], r, t[r]) === !1)return t;
        return t
    }, T.grep = function (t, e) {
        return C.call(t, e)
    }, window.JSON && (T.parseJSON = JSON.parse), T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        G["[object " + e + "]"] = e.toLowerCase()
    }), T.fn = {
        forEach: P.forEach,
        reduce: P.reduce,
        push: P.push,
        sort: P.sort,
        indexOf: P.indexOf,
        concat: P.concat,
        map: function (t) {
            return T(T.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function () {
            return T(A.apply(this, arguments))
        },
        ready: function (t) {
            return X.test(R.readyState) && R.body ? t(T) : R.addEventListener("DOMContentLoaded", function () {
                t(T)
            }, !1), this
        },
        get: function (t) {
            return t === b ? A.call(this) : this[t >= 0 ? t : t + this.length]
        },
        toArray: function () {
            return this.get()
        },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function (t) {
            return P.every.call(this, function (e, i) {
                return t.call(e, i, e) !== !1
            }), this
        },
        filter: function (t) {
            return e(t) ? this.not(this.not(t)) : T(C.call(this, function (e) {
                return q.matches(e, t)
            }))
        },
        add: function (t, e) {
            return T(E(this.concat(T(t, e))))
        },
        is: function (t) {
            return this.length > 0 && q.matches(this[0], t)
        },
        not: function (t) {
            var i = [];
            if (e(t) && t.call !== b)this.each(function (e) {
                t.call(this, e) || i.push(this)
            }); else {
                var r = "string" == typeof t ? this.filter(t) : o(t) && e(t.item) ? A.call(t) : T(t);
                this.forEach(function (t) {
                    r.indexOf(t) < 0 && i.push(t)
                })
            }
            return T(i)
        },
        has: function (t) {
            return this.filter(function () {
                return s(t) ? T.contains(this, t) : T(this).find(t).size()
            })
        },
        eq: function (t) {
            return t === -1 ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function () {
            var t = this[0];
            return t && !s(t) ? t : T(t)
        },
        last: function () {
            var t = this[this.length - 1];
            return t && !s(t) ? t : T(t)
        },
        find: function (t) {
            var e, i = this;
            return e = t ? "object" == typeof t ? T(t).filter(function () {
                var t = this;
                return P.some.call(i, function (e) {
                    return T.contains(e, t)
                })
            }) : 1 == this.length ? T(q.qsa(this[0], t)) : this.map(function () {
                return q.qsa(this, t)
            }) : T()
        },
        closest: function (t, e) {
            var i = this[0], s = !1;
            for ("object" == typeof t && (s = T(t)); i && !(s ? s.indexOf(i) >= 0 : q.matches(i, t));)i = i !== e && !r(i) && i.parentNode;
            return T(i)
        },
        parents: function (t) {
            for (var e = [], i = this; i.length > 0;)i = T.map(i, function (t) {
                if ((t = t.parentNode) && !r(t) && e.indexOf(t) < 0)return e.push(t), t
            });
            return g(e, t)
        },
        parent: function (t) {
            return g(E(this.pluck("parentNode")), t)
        },
        children: function (t) {
            return g(this.map(function () {
                return p(this)
            }), t)
        },
        contents: function () {
            return this.map(function () {
                return A.call(this.childNodes)
            })
        },
        siblings: function (t) {
            return g(this.map(function (t, e) {
                return C.call(p(e.parentNode), function (t) {
                    return t !== e
                })
            }), t)
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        },
        pluck: function (t) {
            return T.map(this, function (e) {
                return e[t]
            })
        },
        show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = d(this.nodeName))
            })
        },
        replaceWith: function (t) {
            return this.before(t).remove()
        },
        wrap: function (t) {
            var i = e(t);
            if (this[0] && !i)var r = T(t).get(0), s = r.parentNode || this.length > 1;
            return this.each(function (e) {
                T(this).wrapAll(i ? t.call(this, e) : s ? r.cloneNode(!0) : r)
            })
        },
        wrapAll: function (t) {
            if (this[0]) {
                T(this[0]).before(t = T(t));
                for (var e; (e = t.children()).length;)t = e.first();
                T(t).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            var i = e(t);
            return this.each(function (e) {
                var r = T(this), s = r.contents(), n = i ? t.call(this, e) : t;
                s.length ? s.wrapAll(n) : r.append(n)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                T(this).replaceWith(T(this).children())
            }), this
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function (t) {
            return this.each(function () {
                var e = T(this);
                (t === b ? "none" == e.css("display") : t) ? e.show() : e.hide()
            })
        },
        prev: function (t) {
            return T(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function (t) {
            return T(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var i = this.innerHTML;
                T(this).empty().append(m(this, t, e, i))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var i = m(this, t, e, this.textContent);
                this.textContent = null == i ? "" : "" + i
            }) : 0 in this ? this[0].textContent : null
        },
        attr: function (t, e) {
            var i;
            return "string" != typeof t || 1 in arguments ? this.each(function (i) {
                if (1 === this.nodeType)if (s(t))for (w in t)v(this, w, t[w]); else v(this, t, m(this, e, i, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(i = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : i : b
        },
        removeAttr: function (t) {
            return this.each(function () {
                1 === this.nodeType && t.split(" ").forEach(function (t) {
                    v(this, t)
                }, this)
            })
        },
        prop: function (t, e) {
            return t = Q[t] || t, 1 in arguments ? this.each(function (i) {
                this[t] = m(this, e, i, this[t])
            }) : this[0] && this[0][t]
        },
        data: function (t, e) {
            var i = "data-" + t.replace(j, "-$1").toLowerCase(), r = 1 in arguments ? this.attr(i, e) : this.attr(i);
            return null !== r ? y(r) : b
        },
        val: function (t) {
            return 0 in arguments ? this.each(function (e) {
                this.value = m(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? T(this[0]).find("option").filter(function () {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function (t) {
            if (t)return this.each(function (e) {
                var i = T(this), r = m(this, t, e, i.offset()), s = i.offsetParent().offset(), n = {
                    top: r.top - s.top,
                    left: r.left - s.left
                };
                "static" == i.css("position") && (n.position = "relative"), i.css(n)
            });
            if (!this.length)return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function (e, i) {
            if (arguments.length < 2) {
                var r, s = this[0];
                if (!s)return;
                if (r = getComputedStyle(s, ""), "string" == typeof e)return s.style[S(e)] || r.getPropertyValue(e);
                if (J(e)) {
                    var n = {};
                    return T.each(e, function (t, e) {
                        n[e] = s.style[S(e)] || r.getPropertyValue(e)
                    }), n
                }
            }
            var o = "";
            if ("string" == t(e))i || 0 === i ? o = l(e) + ":" + u(e, i) : this.each(function () {
                this.style.removeProperty(l(e))
            }); else for (w in e)e[w] || 0 === e[w] ? o += l(w) + ":" + u(w, e[w]) + ";" : this.each(function () {
                this.style.removeProperty(l(w))
            });
            return this.each(function () {
                this.style.cssText += ";" + o
            })
        },
        index: function (t) {
            return t ? this.indexOf(T(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function (t) {
            return !!t && P.some.call(this, function (t) {
                    return this.test(_(t))
                }, c(t))
        },
        addClass: function (t) {
            return t ? this.each(function (e) {
                if ("className" in this) {
                    L = [];
                    var i = _(this), r = m(this, t, e, i);
                    r.split(/\s+/g).forEach(function (t) {
                        T(this).hasClass(t) || L.push(t)
                    }, this), L.length && _(this, i + (i ? " " : "") + L.join(" "))
                }
            }) : this
        },
        removeClass: function (t) {
            return this.each(function (e) {
                if ("className" in this) {
                    if (t === b)return _(this, "");
                    L = _(this), m(this, t, e, L).split(/\s+/g).forEach(function (t) {
                        L = L.replace(c(t), " ")
                    }), _(this, L.trim())
                }
            })
        },
        toggleClass: function (t, e) {
            return t ? this.each(function (i) {
                var r = T(this), s = m(this, t, i, _(this));
                s.split(/\s+/g).forEach(function (t) {
                    (e === b ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
                })
            }) : this
        },
        scrollTop: function (t) {
            if (this.length) {
                var e = "scrollTop" in this[0];
                return t === b ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
                    this.scrollTop = t
                } : function () {
                    this.scrollTo(this.scrollX, t)
                })
            }
        },
        scrollLeft: function (t) {
            if (this.length) {
                var e = "scrollLeft" in this[0];
                return t === b ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
                    this.scrollLeft = t
                } : function () {
                    this.scrollTo(t, this.scrollY)
                })
            }
        },
        position: function () {
            if (this.length) {
                var t = this[0], e = this.offsetParent(), i = this.offset(), r = N.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : e.offset();
                return i.top -= parseFloat(T(t).css("margin-top")) || 0, i.left -= parseFloat(T(t).css("margin-left")) || 0, r.top += parseFloat(T(e[0]).css("border-top-width")) || 0, r.left += parseFloat(T(e[0]).css("border-left-width")) || 0, {
                    top: i.top - r.top,
                    left: i.left - r.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || R.body; t && !N.test(t.nodeName) && "static" == T(t).css("position");)t = t.offsetParent;
                return t
            })
        }
    }, T.fn.detach = T.fn.remove, ["width", "height"].forEach(function (t) {
        var e = t.replace(/./, function (t) {
            return t[0].toUpperCase()
        });
        T.fn[t] = function (s) {
            var n, o = this[0];
            return s === b ? i(o) ? o["inner" + e] : r(o) ? o.documentElement["scroll" + e] : (n = this.offset()) && n[t] : this.each(function (e) {
                o = T(this), o.css(t, m(this, s, e, o[t]()))
            })
        }
    }), k.forEach(function (e, i) {
        var r = i % 2;
        T.fn[e] = function () {
            var e, s, n = T.map(arguments, function (i) {
                return e = t(i), "object" == e || "array" == e || null == i ? i : q.fragment(i)
            }), o = this.length > 1;
            return n.length < 1 ? this : this.each(function (t, e) {
                s = r ? e : e.parentNode, e = 0 == i ? e.nextSibling : 1 == i ? e.firstChild : 2 == i ? e : null;
                var a = T.contains(R.documentElement, s);
                n.forEach(function (t) {
                    if (o)t = t.cloneNode(!0); else if (!s)return T(t).remove();
                    s.insertBefore(t, e), a && x(t, function (t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }, T.fn[r ? e + "To" : "insert" + (i ? "Before" : "After")] = function (t) {
            return T(t)[e](this), this
        }
    }), q.Z.prototype = T.fn, q.uniq = E, q.deserializeValue = y, T.zepto = q, T
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (t) {
    function e(t) {
        return t._zid || (t._zid = d++)
    }

    function i(t, i, n, o) {
        if (i = r(i), i.ns)var a = s(i.ns);
        return (m[e(t)] || []).filter(function (t) {
            return t && (!i.e || t.e == i.e) && (!i.ns || a.test(t.ns)) && (!n || e(t.fn) === e(n)) && (!o || t.sel == o)
        })
    }

    function r(t) {
        var e = ("" + t).split(".");
        return {e: e[0], ns: e.slice(1).sort().join(" ")}
    }

    function s(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }

    function n(t, e) {
        return t.del && !_ && t.e in y || !!e
    }

    function o(t) {
        return x[t] || _ && y[t] || t
    }

    function a(i, s, a, h, c, d, p) {
        var f = e(i), g = m[f] || (m[f] = []);
        s.split(/\s/).forEach(function (e) {
            if ("ready" == e)return t(document).ready(a);
            var s = r(e);
            s.fn = a, s.sel = c, s.e in x && (a = function (e) {
                var i = e.relatedTarget;
                if (!i || i !== this && !t.contains(this, i))return s.fn.apply(this, arguments)
            }), s.del = d;
            var f = d || a;
            s.proxy = function (t) {
                if (t = l(t), !t.isImmediatePropagationStopped()) {
                    t.data = h;
                    var e = f.apply(i, t._args == u ? [t] : [t].concat(t._args));
                    return e === !1 && (t.preventDefault(), t.stopPropagation()), e
                }
            }, s.i = g.length, g.push(s), "addEventListener" in i && i.addEventListener(o(s.e), s.proxy, n(s, p))
        })
    }

    function h(t, r, s, a, h) {
        var l = e(t);
        (r || "").split(/\s/).forEach(function (e) {
            i(t, e, s, a).forEach(function (e) {
                delete m[l][e.i], "removeEventListener" in t && t.removeEventListener(o(e.e), e.proxy, n(e, h))
            })
        })
    }

    function l(e, i) {
        return !i && e.isDefaultPrevented || (i || (i = e), t.each(L, function (t, r) {
            var s = i[t];
            e[t] = function () {
                return this[r] = b, s && s.apply(i, arguments)
            }, e[r] = w
        }), (i.defaultPrevented !== u ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = b)), e
    }

    function c(t) {
        var e, i = {originalEvent: t};
        for (e in t)T.test(e) || t[e] === u || (i[e] = t[e]);
        return l(i, t)
    }

    var u, d = 1, p = Array.prototype.slice, f = t.isFunction, g = function (t) {
        return "string" == typeof t
    }, m = {}, v = {}, _ = "onfocusin" in window, y = {
        focus: "focusin",
        blur: "focusout"
    }, x = {mouseenter: "mouseover", mouseleave: "mouseout"};
    v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
        add: a,
        remove: h
    }, t.proxy = function (i, r) {
        var s = 2 in arguments && p.call(arguments, 2);
        if (f(i)) {
            var n = function () {
                return i.apply(r, s ? s.concat(p.call(arguments)) : arguments)
            };
            return n._zid = e(i), n
        }
        if (g(r))return s ? (s.unshift(i[r], i), t.proxy.apply(null, s)) : t.proxy(i[r], i);
        throw new TypeError("expected function")
    }, t.fn.bind = function (t, e, i) {
        return this.on(t, e, i)
    }, t.fn.unbind = function (t, e) {
        return this.off(t, e)
    }, t.fn.one = function (t, e, i, r) {
        return this.on(t, e, i, r, 1)
    };
    var b = function () {
        return !0
    }, w = function () {
        return !1
    }, T = /^([A-Z]|returnValue$|layer[XY]$)/, L = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function (t, e, i) {
        return this.on(e, t, i)
    }, t.fn.undelegate = function (t, e, i) {
        return this.off(e, t, i)
    }, t.fn.live = function (e, i) {
        return t(document.body).delegate(this.selector, e, i), this
    }, t.fn.die = function (e, i) {
        return t(document.body).undelegate(this.selector, e, i), this
    }, t.fn.on = function (e, i, r, s, n) {
        var o, l, d = this;
        return e && !g(e) ? (t.each(e, function (t, e) {
            d.on(t, i, r, e, n)
        }), d) : (g(i) || f(s) || s === !1 || (s = r, r = i, i = u), (f(r) || r === !1) && (s = r, r = u), s === !1 && (s = w), d.each(function (u, d) {
            n && (o = function (t) {
                return h(d, t.type, s), s.apply(this, arguments)
            }), i && (l = function (e) {
                var r, n = t(e.target).closest(i, d).get(0);
                if (n && n !== d)return r = t.extend(c(e), {
                    currentTarget: n,
                    liveFired: d
                }), (o || s).apply(n, [r].concat(p.call(arguments, 1)))
            }), a(d, e, s, r, i, l || o)
        }))
    }, t.fn.off = function (e, i, r) {
        var s = this;
        return e && !g(e) ? (t.each(e, function (t, e) {
            s.off(t, i, e)
        }), s) : (g(i) || f(r) || r === !1 || (r = i, i = u), r === !1 && (r = w), s.each(function () {
            h(this, e, r, i)
        }))
    }, t.fn.trigger = function (e, i) {
        return e = g(e) || t.isPlainObject(e) ? t.Event(e) : l(e), e._args = i, this.each(function () {
            e.type in y && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, i)
        })
    }, t.fn.triggerHandler = function (e, r) {
        var s, n;
        return this.each(function (o, a) {
            s = c(g(e) ? t.Event(e) : e), s._args = r, s.target = a, t.each(i(a, e.type || e), function (t, e) {
                if (n = e.proxy(s), s.isImmediatePropagationStopped())return !1
            })
        }), n
    }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
        t.fn[e] = function (t) {
            return 0 in arguments ? this.bind(e, t) : this.trigger(e)
        }
    }), t.Event = function (t, e) {
        g(t) || (e = t, t = e.type);
        var i = document.createEvent(v[t] || "Events"), r = !0;
        if (e)for (var s in e)"bubbles" == s ? r = !!e[s] : i[s] = e[s];
        return i.initEvent(t, r, !0), l(i)
    }
}(Zepto), function (t) {
    function e(e, i, r) {
        var s = t.Event(i);
        return t(e).trigger(s, r), !s.isDefaultPrevented()
    }

    function i(t, i, r, s) {
        if (t.global)return e(i || _, r, s)
    }

    function r(e) {
        e.global && 0 === t.active++ && i(e, null, "ajaxStart")
    }

    function s(e) {
        e.global && !--t.active && i(e, null, "ajaxStop")
    }

    function n(t, e) {
        var r = e.context;
        return e.beforeSend.call(r, t, e) !== !1 && i(e, r, "ajaxBeforeSend", [t, e]) !== !1 && void i(e, r, "ajaxSend", [t, e])
    }

    function o(t, e, r, s) {
        var n = r.context, o = "success";
        r.success.call(n, t, o, e), s && s.resolveWith(n, [t, o, e]), i(r, n, "ajaxSuccess", [e, r, t]), h(o, e, r)
    }

    function a(t, e, r, s, n) {
        var o = s.context;
        s.error.call(o, r, e, t), n && n.rejectWith(o, [r, e, t]), i(s, o, "ajaxError", [r, s, t || e]), h(e, r, s)
    }

    function h(t, e, r) {
        var n = r.context;
        r.complete.call(n, e, t), i(r, n, "ajaxComplete", [e, r]), s(r)
    }

    function l() {
    }

    function c(t) {
        return t && (t = t.split(";", 2)[0]), t && (t == T ? "html" : t == w ? "json" : x.test(t) ? "script" : b.test(t) && "xml") || "text"
    }

    function u(t, e) {
        return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
    }

    function d(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = u(e.url, e.data), e.data = void 0)
    }

    function p(e, i, r, s) {
        return t.isFunction(i) && (s = r, r = i, i = void 0), t.isFunction(r) || (s = r, r = void 0), {
            url: e,
            data: i,
            success: r,
            dataType: s
        }
    }

    function f(e, i, r, s) {
        var n, o = t.isArray(i), a = t.isPlainObject(i);
        t.each(i, function (i, h) {
            n = t.type(h), s && (i = r ? s : s + "[" + (a || "object" == n || "array" == n ? i : "") + "]"), !s && o ? e.add(h.name, h.value) : "array" == n || !r && "object" == n ? f(e, h, r, i) : e.add(i, h)
        })
    }

    var g, m, v = 0, _ = window.document, y = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, x = /^(?:text|application)\/javascript/i, b = /^(?:text|application)\/xml/i, w = "application/json", T = "text/html", L = /^\s*$/, S = _.createElement("a");
    S.href = window.location.href, t.active = 0, t.ajaxJSONP = function (e, i) {
        if (!("type" in e))return t.ajax(e);
        var r, s, h = e.jsonpCallback, l = (t.isFunction(h) ? h() : h) || "jsonp" + ++v, c = _.createElement("script"), u = window[l], d = function (e) {
            t(c).triggerHandler("error", e || "abort")
        }, p = {abort: d};
        return i && i.promise(p), t(c).on("load error", function (n, h) {
            clearTimeout(s), t(c).off().remove(), "error" != n.type && r ? o(r[0], p, e, i) : a(null, h || "error", p, e, i), window[l] = u, r && t.isFunction(u) && u(r[0]), u = r = void 0
        }), n(p, e) === !1 ? (d("abort"), p) : (window[l] = function () {
            r = arguments
        }, c.src = e.url.replace(/\?(.+)=\?/, "?$1=" + l), _.head.appendChild(c), e.timeout > 0 && (s = setTimeout(function () {
            d("timeout")
        }, e.timeout)), p)
    }, t.ajaxSettings = {
        type: "GET",
        beforeSend: l,
        success: l,
        error: l,
        complete: l,
        context: null,
        global: !0,
        xhr: function () {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: w,
            xml: "application/xml, text/xml",
            html: T,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    }, t.ajax = function (e) {
        var i, s = t.extend({}, e || {}), h = t.Deferred && t.Deferred();
        for (g in t.ajaxSettings)void 0 === s[g] && (s[g] = t.ajaxSettings[g]);
        r(s), s.crossDomain || (i = _.createElement("a"), i.href = s.url, i.href = i.href, s.crossDomain = S.protocol + "//" + S.host != i.protocol + "//" + i.host), s.url || (s.url = window.location.toString()), d(s);
        var p = s.dataType, f = /\?.+=\?/.test(s.url);
        if (f && (p = "jsonp"), s.cache !== !1 && (e && e.cache === !0 || "script" != p && "jsonp" != p) || (s.url = u(s.url, "_=" + Date.now())), "jsonp" == p)return f || (s.url = u(s.url, s.jsonp ? s.jsonp + "=?" : s.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(s, h);
        var v, y = s.accepts[p], x = {}, b = function (t, e) {
            x[t.toLowerCase()] = [t, e]
        }, w = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : window.location.protocol, T = s.xhr(), E = T.setRequestHeader;
        if (h && h.promise(T), s.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", y || "*/*"), (y = s.mimeType || y) && (y.indexOf(",") > -1 && (y = y.split(",", 2)[0]), T.overrideMimeType && T.overrideMimeType(y)), (s.contentType || s.contentType !== !1 && s.data && "GET" != s.type.toUpperCase()) && b("Content-Type", s.contentType || "application/x-www-form-urlencoded"), s.headers)for (m in s.headers)b(m, s.headers[m]);
        if (T.setRequestHeader = b, T.onreadystatechange = function () {
                if (4 == T.readyState) {
                    T.onreadystatechange = l, clearTimeout(v);
                    var e, i = !1;
                    if (T.status >= 200 && T.status < 300 || 304 == T.status || 0 == T.status && "file:" == w) {
                        p = p || c(s.mimeType || T.getResponseHeader("content-type")), e = T.responseText;
                        try {
                            "script" == p ? (0, eval)(e) : "xml" == p ? e = T.responseXML : "json" == p && (e = L.test(e) ? null : t.parseJSON(e))
                        } catch (r) {
                            i = r
                        }
                        i ? a(i, "parsererror", T, s, h) : o(e, T, s, h)
                    } else a(T.statusText || null, T.status ? "error" : "abort", T, s, h)
                }
            }, n(T, s) === !1)return T.abort(), a(null, "abort", T, s, h), T;
        if (s.xhrFields)for (m in s.xhrFields)T[m] = s.xhrFields[m];
        var P = !("async" in s) || s.async;
        T.open(s.type, s.url, P, s.username, s.password);
        for (m in x)E.apply(T, x[m]);
        return s.timeout > 0 && (v = setTimeout(function () {
            T.onreadystatechange = l, T.abort(), a(null, "timeout", T, s, h)
        }, s.timeout)), T.send(s.data ? s.data : null), T
    }, t.get = function () {
        return t.ajax(p.apply(null, arguments))
    }, t.post = function () {
        var e = p.apply(null, arguments);
        return e.type = "POST", t.ajax(e)
    }, t.getJSON = function () {
        var e = p.apply(null, arguments);
        return e.dataType = "json", t.ajax(e)
    }, t.fn.load = function (e, i, r) {
        if (!this.length)return this;
        var s, n = this, o = e.split(/\s/), a = p(e, i, r), h = a.success;
        return o.length > 1 && (a.url = o[0], s = o[1]), a.success = function (e) {
            n.html(s ? t("<div>").html(e.replace(y, "")).find(s) : e), h && h.apply(n, arguments)
        }, t.ajax(a), this
    };
    var E = encodeURIComponent;
    t.param = function (e, i) {
        var r = [];
        return r.add = function (e, i) {
            t.isFunction(i) && (i = i()), null == i && (i = ""), this.push(E(e) + "=" + E(i))
        }, f(r, e, i), r.join("&").replace(/%20/g, "+")
    }
}(Zepto), function (t) {
    t.fn.serializeArray = function () {
        var e, i, r = [], s = function (t) {
            return t.forEach ? t.forEach(s) : void r.push({name: e, value: t})
        };
        return this[0] && t.each(this[0].elements, function (r, n) {
            i = n.type, e = n.name, e && "fieldset" != n.nodeName.toLowerCase() && !n.disabled && "submit" != i && "reset" != i && "button" != i && "file" != i && ("radio" != i && "checkbox" != i || n.checked) && s(t(n).val())
        }), r
    }, t.fn.serialize = function () {
        var t = [];
        return this.serializeArray().forEach(function (e) {
            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
        }), t.join("&")
    }, t.fn.submit = function (e) {
        if (0 in arguments)this.bind("submit", e); else if (this.length) {
            var i = t.Event("submit");
            this.eq(0).trigger(i), i.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
}(Zepto), function (t) {
    "__proto__" in {} || t.extend(t.zepto, {
        Z: function (e, i) {
            return e = e || [], t.extend(e, t.fn), e.selector = i || "", e.__Z = !0, e
        }, isZ: function (e) {
            return "array" === t.type(e) && "__Z" in e
        }
    });
    try {
        getComputedStyle(void 0)
    } catch (e) {
        var i = getComputedStyle;
        window.getComputedStyle = function (t) {
            try {
                return i(t)
            } catch (e) {
                return null
            }
        }
    }
}(Zepto);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var r = function (t) {
            var e, i = [], r = t.length;
            for (e = 0; e !== r; i.push(t[e++]));
            return i
        }, s = function (t, e, i) {
            var r, s, n = t.cycle;
            for (r in n)s = n[r], t[r] = "function" == typeof s ? s.call(e[i], i) : s[i % s.length];
            delete t.cycle
        }, n = function (t, e, r) {
            i.call(this, t, e, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = n.prototype.render
        }, o = 1e-10, a = i._internals, h = a.isSelector, l = a.isArray, c = n.prototype = i.to({}, .1, {}), u = [];
        n.version = "1.18.5", c.constructor = n, c.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, c.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, c.updateTo = function (t, e) {
            var r, s = this.ratio, n = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (r in t)this.vars[r] = t[r];
            if (this._initted || n)if (e)this._initted = !1, n && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var o = this._totalTime;
                this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
            } else if (this._initted = !1, this._init(), this._time > 0 || n)for (var a, h = 1 / (1 - s), l = this._firstPT; l;)a = l.s + l.c, l.c *= h, l.s = a - l.c, l = l._next;
            return this
        }, c.render = function (t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var r, s, n, h, l, c, u, d, p = this._dirty ? this.totalDuration() : this._totalDuration, f = this._time, g = this._totalTime, m = this._cycle, v = this._duration, _ = this._rawPrevTime;
            if (t >= p - 1e-7 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (_ < 0 || t <= 0 && t >= -1e-7 || _ === o && "isPause" !== this.data) && _ !== t && (i = !0, _ > o && (s = "onReverseComplete")), this._rawPrevTime = d = !e || t || _ === t ? t : o)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === v && _ > 0) && (s = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), this._rawPrevTime = d = !e || t || _ === t ? t : o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType ? (l = this._time / v, c = this._easeType, u = this._easePower, (1 === c || 3 === c && l >= .5) && (l = 1 - l), 3 === c && (l *= 2), 1 === u ? l *= l : 2 === u ? l *= l * l : 3 === u ? l *= l * l * l : 4 === u && (l *= l * l * l * l), 1 === c ? this.ratio = 1 - l : 2 === c ? this.ratio = l : this._time / v < .5 ? this.ratio = l / 2 : this.ratio = 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), f === this._time && !i && m === this._cycle)return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc)return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = f, this._totalTime = g, this._rawPrevTime = _, this._cycle = m, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                this._time && !r ? this.ratio = this._ease.getRatio(this._time / v) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== v || e || this._callback("onStart"))), n = this._firstPT; n;)n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
            this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== g || s) && this._callback("onUpdate")), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === v && this._rawPrevTime === o && d !== o && (this._rawPrevTime = 0)))
        }, n.to = function (t, e, i) {
            return new n(t, e, i)
        }, n.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i)
        }, n.fromTo = function (t, e, i, r) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new n(t, e, r)
        }, n.staggerTo = n.allTo = function (t, e, o, a, c, d, p) {
            a = a || 0;
            var f, g, m, v, _ = 0, y = [], x = function () {
                o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(p || o.callbackScope || this, d || u)
            }, b = o.cycle, w = o.startAt && o.startAt.cycle;
            for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), h(t) && (t = r(t))), t = t || [], a < 0 && (t = r(t), t.reverse(), a *= -1), f = t.length - 1, m = 0; m <= f; m++) {
                g = {};
                for (v in o)g[v] = o[v];
                if (b && (s(g, t, m), null != g.duration && (e = g.duration, delete g.duration)), w) {
                    w = g.startAt = {};
                    for (v in o.startAt)w[v] = o.startAt[v];
                    s(g.startAt, t, m)
                }
                g.delay = _ + (g.delay || 0), m === f && c && (g.onComplete = x), y[m] = new n(t[m], e, g), _ += a
            }
            return y
        }, n.staggerFrom = n.allFrom = function (t, e, i, r, s, o, a) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, r, s, o, a)
        }, n.staggerFromTo = n.allFromTo = function (t, e, i, r, s, o, a, h) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, n.staggerTo(t, e, r, s, o, a, h)
        }, n.delayedCall = function (t, e, i, r, s) {
            return new n(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: r,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }, n.set = function (t, e) {
            return new n(t, 0, e)
        }, n.isTweening = function (t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var d = function (t, e) {
            for (var r = [], s = 0, n = t._first; n;)n instanceof i ? r[s++] = n : (e && (r[s++] = n), r = r.concat(d(n, e)), s = r.length), n = n._next;
            return r
        }, p = n.getAllTweens = function (e) {
            return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e))
        };
        n.killAll = function (t, i, r, s) {
            null == i && (i = !0), null == r && (r = !0);
            var n, o, a, h = p(0 != s), l = h.length, c = i && r && s;
            for (a = 0; a < l; a++)o = h[a], (c || o instanceof e || (n = o.target === o.vars.onComplete) && r || i && !n) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1));
        }, n.killChildTweensOf = function (t, e) {
            if (null != t) {
                var s, o, c, u, d, p = a.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), h(t) && (t = r(t)), l(t))for (u = t.length; --u > -1;)n.killChildTweensOf(t[u], e); else {
                    s = [];
                    for (c in p)for (o = p[c].target.parentNode; o;)o === t && (s = s.concat(p[c].tweens)), o = o.parentNode;
                    for (d = s.length, u = 0; u < d; u++)e && s[u].totalTime(s[u].totalDuration()), s[u]._enabled(!1, !1)
                }
            }
        };
        var f = function (t, i, r, s) {
            i = i !== !1, r = r !== !1, s = s !== !1;
            for (var n, o, a = p(s), h = i && r && s, l = a.length; --l > -1;)o = a[l], (h || o instanceof e || (n = o.target === o.vars.onComplete) && r || i && !n) && o.paused(t)
        };
        return n.pauseAll = function (t, e, i) {
            f(!0, t, e, i)
        }, n.resumeAll = function (t, e, i) {
            f(!1, t, e, i)
        }, n.globalTimeScale = function (e) {
            var r = t._rootTimeline, s = i.ticker.time;
            return arguments.length ? (e = e || o, r._startTime = s - (s - r._startTime) * r._timeScale / e, r = t._rootFramesTimeline, s = i.ticker.frame, r._startTime = s - (s - r._startTime) * r._timeScale / e, r._timeScale = t._rootTimeline._timeScale = e, e) : r._timeScale
        }, c.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, c.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, c.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, c.duration = function (e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, c.totalDuration = function (t) {
            return arguments.length ? this._repeat === -1 ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, c.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, c.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, c.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, n
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var r = function (t) {
            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var i, r, s = this.vars;
            for (r in s)i = s[r], h(i) && i.join("").indexOf("{self}") !== -1 && (s[r] = this._swapSelfInParams(i));
            h(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
        }, s = 1e-10, n = i._internals, o = r._internals = {}, a = n.isSelector, h = n.isArray, l = n.lazyTweens, c = n.lazyRender, u = _gsScope._gsDefine.globals, d = function (t) {
            var e, i = {};
            for (e in t)i[e] = t[e];
            return i
        }, p = function (t, e, i) {
            var r, s, n = t.cycle;
            for (r in n)s = n[r], t[r] = "function" == typeof s ? s.call(e[i], i) : s[i % s.length];
            delete t.cycle
        }, f = o.pauseCallback = function () {
        }, g = function (t) {
            var e, i = [], r = t.length;
            for (e = 0; e !== r; i.push(t[e++]));
            return i
        }, m = r.prototype = new e;
        return r.version = "1.18.5", m.constructor = r, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function (t, e, r, s) {
            var n = r.repeat && u.TweenMax || i;
            return e ? this.add(new n(t, e, r), s) : this.set(t, r, s)
        }, m.from = function (t, e, r, s) {
            return this.add((r.repeat && u.TweenMax || i).from(t, e, r), s)
        }, m.fromTo = function (t, e, r, s, n) {
            var o = s.repeat && u.TweenMax || i;
            return e ? this.add(o.fromTo(t, e, r, s), n) : this.set(t, s, n)
        }, m.staggerTo = function (t, e, s, n, o, h, l, c) {
            var u, f, m = new r({
                onComplete: h,
                onCompleteParams: l,
                callbackScope: c,
                smoothChildTiming: this.smoothChildTiming
            }), v = s.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = g(t)), n = n || 0, n < 0 && (t = g(t), t.reverse(), n *= -1), f = 0; f < t.length; f++)u = d(s), u.startAt && (u.startAt = d(u.startAt), u.startAt.cycle && p(u.startAt, t, f)), v && (p(u, t, f), null != u.duration && (e = u.duration, delete u.duration)), m.to(t[f], e, u, f * n);
            return this.add(m, o)
        }, m.staggerFrom = function (t, e, i, r, s, n, o, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, r, s, n, o, a)
        }, m.staggerFromTo = function (t, e, i, r, s, n, o, a, h) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, r, s, n, o, a, h)
        }, m.call = function (t, e, r, s) {
            return this.add(i.delayedCall(0, t, e, r), s)
        }, m.set = function (t, e, r) {
            return r = this._parseTimeOrLabel(r, 0, !0), null == e.immediateRender && (e.immediateRender = r === this._time && !this._paused), this.add(new i(t, 0, e), r)
        }, r.exportRoot = function (t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var s, n, o = new r(t), a = o._timeline;
            for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, s = a._first; s;)n = s._next, e && s instanceof i && s.target === s.vars.onComplete || o.add(s, s._startTime - s._delay), s = n;
            return a.add(o, 0), o
        }, m.add = function (s, n, o, a) {
            var l, c, u, d, p, f;
            if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, s)), !(s instanceof t)) {
                if (s instanceof Array || s && s.push && h(s)) {
                    for (o = o || "normal", a = a || 0, l = n, c = s.length, u = 0; u < c; u++)h(d = s[u]) && (d = new r({tweens: d})), this.add(d, l), "string" != typeof d && "function" != typeof d && ("sequence" === o ? l = d._startTime + d.totalDuration() / d._timeScale : "start" === o && (d._startTime -= d.delay())), l += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof s)return this.addLabel(s, n);
                if ("function" != typeof s)throw"Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                s = i.delayedCall(0, s)
            }
            if (e.prototype.add.call(this, s, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())for (p = this, f = p.rawTime() > s._startTime; p._timeline;)f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
            return this
        }, m.remove = function (e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
            }
            if (e instanceof Array || e && e.push && h(e)) {
                for (var r = e.length; --r > -1;)this.remove(e[r]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, m._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var r = this._last;
            return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, m.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, m.insert = m.insertMultiple = function (t, e, i, r) {
            return this.add(t, e || 0, i, r)
        }, m.appendMultiple = function (t, e, i, r) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r)
        }, m.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, m.addPause = function (t, e, r, s) {
            var n = i.delayedCall(0, f, r, s || this);
            return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t)
        }, m.removeLabel = function (t) {
            return delete this._labels[t], this
        }, m.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, m._parseTimeOrLabel = function (e, i, r, s) {
            var n;
            if (s instanceof t && s.timeline === this)this.remove(s); else if (s && (s instanceof Array || s.push && h(s)))for (n = s.length; --n > -1;)s[n] instanceof t && s[n].timeline === this && this.remove(s[n]);
            if ("string" == typeof i)return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, r);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e])null == e && (e = this.duration()); else {
                if (n = e.indexOf("="), n === -1)return null == this._labels[e] ? r ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, r) : this.duration()
            }
            return Number(e) + i
        }, m.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, m.stop = function () {
            return this.paused(!0)
        }, m.gotoAndPlay = function (t, e) {
            return this.play(t, e)
        }, m.gotoAndStop = function (t, e) {
            return this.pause(t, e)
        }, m.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var r, n, o, a, h, u, d, p = this._dirty ? this.totalDuration() : this._totalDuration, f = this._time, g = this._startTime, m = this._timeScale, v = this._paused;
            if (t >= p - 1e-7)this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, a = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > s && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = p + 1e-4; else if (t < 1e-7)if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = "onReverseComplete", n = this._reversed), t < 0)this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t; else {
                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && n)for (r = this._first; r && 0 === r._startTime;)r._duration || (n = !1), r = r._next;
                t = 0, this._initted || (h = !0)
            } else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (t >= f)for (r = this._first; r && r._startTime <= t && !u;)r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (u = r), r = r._next; else for (r = this._last; r && r._startTime >= t && !u;)r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (u = r), r = r._prev;
                    u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== f && this._first || i || h || u) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), d = this._time, d >= f)for (r = this._first; r && (o = r._next, d === this._time && (!this._paused || v));)(r._active || r._startTime <= d && !r._paused && !r._gc) && (u === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = o; else for (r = this._last; r && (o = r._prev, d === this._time && (!this._paused || v));) {
                    if (r._active || r._startTime <= f && !r._paused && !r._gc) {
                        if (u === r) {
                            for (u = r._prev; u && u.endTime() > this._time;)u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                            u = null, this.pause()
                        }
                        r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                    }
                    r = o
                }
                this._onUpdate && (e || (l.length && c(), this._callback("onUpdate"))), a && (this._gc || g !== this._startTime && m === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (n && (l.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
            }
        }, m._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof r && t._hasPausedChild())return !0;
                t = t._next
            }
            return !1
        }, m.getChildren = function (t, e, r, s) {
            s = s || -9999999999;
            for (var n = [], o = this._first, a = 0; o;)o._startTime < s || (o instanceof i ? e !== !1 && (n[a++] = o) : (r !== !1 && (n[a++] = o), t !== !1 && (n = n.concat(o.getChildren(!0, e, r)), a = n.length))), o = o._next;
            return n
        }, m.getTweensOf = function (t, e) {
            var r, s, n = this._gc, o = [], a = 0;
            for (n && this._enabled(!0, !0), r = i.getTweensOf(t), s = r.length; --s > -1;)(r[s].timeline === this || e && this._contains(r[s])) && (o[a++] = r[s]);
            return n && this._enabled(!1, !0), o
        }, m.recent = function () {
            return this._recent
        }, m._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this)return !0;
                e = e.timeline
            }
            return !1
        }, m.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var r, s = this._first, n = this._labels; s;)s._startTime >= i && (s._startTime += t), s = s._next;
            if (e)for (r in n)n[r] >= i && (n[r] += t);
            return this._uncache(!0)
        }, m._kill = function (t, e) {
            if (!t && !e)return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, s = !1; --r > -1;)i[r]._kill(t, e) && (s = !0);
            return s
        }, m.clear = function (t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;)e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, m.invalidate = function () {
            for (var e = this._first; e;)e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, m._enabled = function (t, i) {
            if (t === this._gc)for (var r = this._first; r;)r._enabled(t, !0), r = r._next;
            return e.prototype._enabled.call(this, t, i)
        }, m.totalTime = function (e, i, r) {
            this._forcingPlayhead = !0;
            var s = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, s
        }, m.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, m.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, r = 0, s = this._last, n = 999999999999; s;)e = s._prev, s._dirty && s.totalDuration(), s._startTime > n && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : n = s._startTime, s._startTime < 0 && !s._paused && (r -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), this.shiftChildren(-s._startTime, !1, -9999999999), n = 0), i = s._startTime + s._totalDuration / s._timeScale, i > r && (r = i), s = e;
                    this._duration = this._totalDuration = r, this._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        }, m.paused = function (e) {
            if (!e)for (var i = this._first, r = this._time; i;)i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }, m.usesFrames = function () {
            for (var e = this._timeline; e._timeline;)e = e._timeline;
            return e === t._rootFramesTimeline
        }, m.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, r
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
        var r = function (e) {
            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, s = 1e-10, n = e._internals, o = n.lazyTweens, a = n.lazyRender, h = new i(null, null, 1, 0), l = r.prototype = new t;
        return l.constructor = r, l.kill()._gc = !1, r.version = "1.18.5", l.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, l.addCallback = function (t, i, r, s) {
            return this.add(e.delayedCall(0, t, r, s), i)
        }, l.removeCallback = function (t, e) {
            if (t)if (null == e)this._kill(null, t); else for (var i = this.getTweensOf(t, !1), r = i.length, s = this._parseTimeOrLabel(e); --r > -1;)i[r]._startTime === s && i[r]._enabled(!1, !1);
            return this
        }, l.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }, l.tweenTo = function (t, i) {
            i = i || {};
            var r, s, n, o = {ease: h, useFrames: this.usesFrames(), immediateRender: !1};
            for (s in i)o[s] = i[s];
            return o.time = this._parseTimeOrLabel(t), r = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, n = new e(this, r, o), o.onStart = function () {
                n.target.paused(!0), n.vars.time !== n.target.time() && r === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), i.onStart && n._callback("onStart")
            }, n
        }, l.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            }, i.immediateRender = i.immediateRender !== !1;
            var r = this.tweenTo(e, i);
            return r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001)
        }, l.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var r, n, h, l, c, u, d, p, f = this._dirty ? this.totalDuration() : this._totalDuration, g = this._duration, m = this._time, v = this._totalTime, _ = this._startTime, y = this._timeScale, x = this._rawPrevTime, b = this._paused, w = this._cycle;
            if (t >= f - 1e-7)this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, l = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || x < 0 || x === s) && x !== t && this._first && (c = !0, x > s && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = g, t = g + 1e-4); else if (t < 1e-7)if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === g && x !== s && (x > 0 || t < 0 && x >= 0) && !this._locked) && (l = "onReverseComplete", n = this._reversed), t < 0)this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = n = !0, l = "onReverseComplete") : x >= 0 && this._first && (c = !0), this._rawPrevTime = t; else {
                if (this._rawPrevTime = g || !e || t || this._rawPrevTime === t ? t : s, 0 === t && n)for (r = this._first; r && 0 === r._startTime;)r._duration || (n = !1), r = r._next;
                t = 0, this._initted || (c = !0)
            } else if (0 === g && x < 0 && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = g + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && v <= t && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? (this._time = g, t = g + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                if (t = this._time, t >= m)for (r = this._first; r && r._startTime <= t && !d;)r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (d = r), r = r._next; else for (r = this._last; r && r._startTime >= t && !d;)r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (d = r), r = r._prev;
                d && (this._time = t = d._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== w && !this._locked) {
                var T = this._yoyo && 0 !== (1 & w), L = T === (this._yoyo && 0 !== (1 & this._cycle)), S = this._totalTime, E = this._cycle, P = this._rawPrevTime, A = this._time;
                if (this._totalTime = w * g, this._cycle < w ? T = !T : this._totalTime += g, this._time = m, this._rawPrevTime = 0 === g ? x - 1e-4 : x, this._cycle = w, this._locked = !0, m = T ? 0 : g, this.render(m, e, 0 === g), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), m !== this._time)return;
                if (L && (m = T ? g + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !b)return;
                this._time = A, this._totalTime = S, this._cycle = E, this._rawPrevTime = P
            }
            if (!(this._time !== m && this._first || i || c || d))return void(v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), p = this._time, p >= m)for (r = this._first; r && (h = r._next, p === this._time && (!this._paused || b));)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (d === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = h; else for (r = this._last; r && (h = r._prev, p === this._time && (!this._paused || b));) {
                if (r._active || r._startTime <= m && !r._paused && !r._gc) {
                    if (d === r) {
                        for (d = r._prev; d && d.endTime() > this._time;)d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i), d = d._prev;
                        d = null, this.pause()
                    }
                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                }
                r = h
            }
            this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), l && (this._locked || this._gc || _ !== this._startTime && y === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (n && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
        }, l.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var r, s, n = [], o = this.getChildren(t, e, i), a = 0, h = o.length;
            for (r = 0; r < h; r++)s = o[r], s.isActive() && (n[a++] = s);
            return n
        }, l.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), r = i.length;
            for (e = 0; e < r; e++)if (i[e].time > t)return i[e].name;
            return null
        }, l.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;)if (e[i].time < t)return e[i].name;
            return null
        }, l.getLabelsArray = function () {
            var t, e = [], i = 0;
            for (t in this._labels)e[i++] = {time: this._labels[t], name: t};
            return e.sort(function (t, e) {
                return t.time - e.time
            }), e
        }, l.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, l.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, l.totalDuration = function (e) {
            return arguments.length ? this._repeat !== -1 && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, l.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, l.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, l.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, l.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, l.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, r
    }, !0), function () {
        var t = 180 / Math.PI, e = [], i = [], r = [], s = {}, n = _gsScope._gsDefine.globals, o = function (t, e, i, r) {
            i === r && (i = r - (r - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = r, this.da = r - t, this.ca = i - t, this.ba = e - t
        }, a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", h = function (t, e, i, r) {
            var s = {a: t}, n = {}, o = {}, a = {c: r}, h = (t + e) / 2, l = (e + i) / 2, c = (i + r) / 2, u = (h + l) / 2, d = (l + c) / 2, p = (d - u) / 8;
            return s.b = h + (t - h) / 4, n.b = u + p, s.c = n.a = (s.b + n.b) / 2, n.c = o.a = (u + d) / 2, o.b = d - p, a.b = c + (r - c) / 4, o.c = a.a = (o.b + a.b) / 2, [s, n, o, a]
        }, l = function (t, s, n, o, a) {
            var l, c, u, d, p, f, g, m, v, _, y, x, b, w = t.length - 1, T = 0, L = t[0].a;
            for (l = 0; l < w; l++)p = t[T], c = p.a, u = p.d, d = t[T + 1].d, a ? (y = e[l], x = i[l], b = (x + y) * s * .25 / (o ? .5 : r[l] || .5), f = u - (u - c) * (o ? .5 * s : 0 !== y ? b / y : 0), g = u + (d - u) * (o ? .5 * s : 0 !== x ? b / x : 0), m = u - (f + ((g - f) * (3 * y / (y + x) + .5) / 4 || 0))) : (f = u - (u - c) * s * .5, g = u + (d - u) * s * .5, m = u - (f + g) / 2), f += m, g += m, p.c = v = f, 0 !== l ? p.b = L : p.b = L = p.a + .6 * (p.c - p.a), p.da = u - c, p.ca = v - c, p.ba = L - c, n ? (_ = h(c, L, v, u), t.splice(T, 1, _[0], _[1], _[2], _[3]), T += 4) : T++, L = g;
            p = t[T], p.b = L, p.c = L + .4 * (p.d - L), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = L - p.a, n && (_ = h(p.a, L, p.c, p.d), t.splice(T, 1, _[0], _[1], _[2], _[3]))
        }, c = function (t, r, s, n) {
            var a, h, l, c, u, d, p = [];
            if (n)for (t = [n].concat(t), h = t.length; --h > -1;)"string" == typeof(d = t[h][r]) && "=" === d.charAt(1) && (t[h][r] = n[r] + Number(d.charAt(0) + d.substr(2)));
            if (a = t.length - 2, a < 0)return p[0] = new o(t[0][r], 0, 0, t[a < -1 ? 0 : 1][r]), p;
            for (h = 0; h < a; h++)l = t[h][r], c = t[h + 1][r], p[h] = new o(l, 0, 0, c), s && (u = t[h + 2][r], e[h] = (e[h] || 0) + (c - l) * (c - l), i[h] = (i[h] || 0) + (u - c) * (u - c));
            return p[h] = new o(t[h][r], 0, 0, t[h + 1][r]), p
        }, u = function (t, n, o, h, u, d) {
            var p, f, g, m, v, _, y, x, b = {}, w = [], T = d || t[0];
            u = "string" == typeof u ? "," + u + "," : a, null == n && (n = 1);
            for (f in t[0])w.push(f);
            if (t.length > 1) {
                for (x = t[t.length - 1], y = !0, p = w.length; --p > -1;)if (f = w[p], Math.abs(T[f] - x[f]) > .05) {
                    y = !1;
                    break
                }
                y && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
            }
            for (e.length = i.length = r.length = 0, p = w.length; --p > -1;)f = w[p], s[f] = u.indexOf("," + f + ",") !== -1, b[f] = c(t, f, s[f], d);
            for (p = e.length; --p > -1;)e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
            if (!h) {
                for (p = w.length; --p > -1;)if (s[f])for (g = b[w[p]], _ = g.length - 1, m = 0; m < _; m++)v = g[m + 1].da / i[m] + g[m].da / e[m] || 0, r[m] = (r[m] || 0) + v * v;
                for (p = r.length; --p > -1;)r[p] = Math.sqrt(r[p])
            }
            for (p = w.length, m = o ? 4 : 1; --p > -1;)f = w[p], g = b[f], l(g, n, o, h, s[f]), y && (g.splice(0, m), g.splice(g.length - m, m));
            return b
        }, d = function (t, e, i) {
            e = e || "soft";
            var r, s, n, a, h, l, c, u, d, p, f, g = {}, m = "cubic" === e ? 3 : 2, v = "soft" === e, _ = [];
            if (v && i && (t = [i].concat(t)), null == t || t.length < m + 1)throw"invalid Bezier data";
            for (d in t[0])_.push(d);
            for (l = _.length; --l > -1;) {
                for (d = _[l], g[d] = h = [], p = 0, u = t.length, c = 0; c < u; c++)r = null == i ? t[c][d] : "string" == typeof(f = t[c][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && c > 1 && c < u - 1 && (h[p++] = (r + h[p - 2]) / 2), h[p++] = r;
                for (u = p - m + 1, p = 0, c = 0; c < u; c += m)r = h[c], s = h[c + 1], n = h[c + 2], a = 2 === m ? 0 : h[c + 3], h[p++] = f = 3 === m ? new o(r, s, n, a) : new o(r, (2 * s + r) / 3, (2 * s + n) / 3, n);
                h.length = p
            }
            return g
        }, p = function (t, e, i) {
            for (var r, s, n, o, a, h, l, c, u, d, p, f = 1 / i, g = t.length; --g > -1;)for (d = t[g], n = d.a, o = d.d - n, a = d.c - n, h = d.b - n, r = s = 0, c = 1; c <= i; c++)l = f * c, u = 1 - l, r = s - (s = (l * l * o + 3 * u * (l * a + u * h)) * l), p = g * i + c - 1, e[p] = (e[p] || 0) + r * r
        }, f = function (t, e) {
            e = e >> 0 || 6;
            var i, r, s, n, o = [], a = [], h = 0, l = 0, c = e - 1, u = [], d = [];
            for (i in t)p(t[i], o, e);
            for (s = o.length, r = 0; r < s; r++)h += Math.sqrt(o[r]), n = r % e, d[n] = h, n === c && (l += h, n = r / e >> 0, u[n] = d, a[n] = l, h = 0, d = []);
            return {length: l, lengths: a, segments: u}
        }, g = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.6",
            API: 2,
            global: !0,
            init: function (t, e, i) {
                this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var r, s, n, o, a, h = e.values || [], l = {}, c = h[0], p = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]] : null;
                for (r in c)this._props.push(r);
                for (n = this._props.length; --n > -1;)r = this._props[n], this._overwriteProps.push(r), s = this._func[r] = "function" == typeof t[r], l[r] = s ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), a || l[r] !== h[0][r] && (a = l);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : d(h, e.type, l), this._segCount = this._beziers[r].length, this._timeRes) {
                    var g = f(this._beziers, this._timeRes);
                    this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (p = this._autoRotate)for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), n = p.length; --n > -1;) {
                    for (o = 0; o < 3; o++)r = p[n][o], this._func[r] = "function" == typeof t[r] && t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)];
                    r = p[n][2], this._initialRotations[n] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0
                }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function (e) {
                var i, r, s, n, o, a, h, l, c, u, d = this._segCount, p = this._func, f = this._target, g = e !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths, u = this._curSeg, e *= this._length, s = this._li, e > this._l2 && s < d - 1) {
                        for (l = d - 1; s < l && (this._l2 = c[++s]) <= e;);
                        this._l1 = c[s - 1], this._li = s, this._curSeg = u = this._segments[s], this._s2 = u[this._s1 = this._si = 0]
                    } else if (e < this._l1 && s > 0) {
                        for (; s > 0 && (this._l1 = c[--s]) >= e;);
                        0 === s && e < this._l1 ? this._l1 = 0 : s++, this._l2 = c[s], this._li = s, this._curSeg = u = this._segments[s], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                    }
                    if (i = s, e -= this._l1, s = this._si, e > this._s2 && s < u.length - 1) {
                        for (l = u.length - 1; s < l && (this._s2 = u[++s]) <= e;);
                        this._s1 = u[s - 1], this._si = s
                    } else if (e < this._s1 && s > 0) {
                        for (; s > 0 && (this._s1 = u[--s]) >= e;);
                        0 === s && e < this._s1 ? this._s1 = 0 : s++, this._s2 = u[s], this._si = s
                    }
                    a = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else i = e < 0 ? 0 : e >= 1 ? d - 1 : d * e >> 0, a = (e - i * (1 / d)) * d;
                for (r = 1 - a, s = this._props.length; --s > -1;)n = this._props[s], o = this._beziers[n][i], h = (a * a * o.da + 3 * r * (a * o.ca + r * o.ba)) * a + o.a, this._round[n] && (h = Math.round(h)), p[n] ? f[n](h) : f[n] = h;
                if (this._autoRotate) {
                    var m, v, _, y, x, b, w, T = this._autoRotate;
                    for (s = T.length; --s > -1;)n = T[s][2], b = T[s][3] || 0, w = T[s][4] === !0 ? 1 : t, o = this._beziers[T[s][0]], m = this._beziers[T[s][1]], o && m && (o = o[i], m = m[i], v = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, v += (y - v) * a, y += (o.c + (o.d - o.c) * a - y) * a, _ = m.a + (m.b - m.a) * a, x = m.b + (m.c - m.b) * a, _ += (x - _) * a, x += (m.c + (m.d - m.c) * a - x) * a, h = g ? Math.atan2(x - _, y - v) * w + b : this._initialRotations[s], p[n] ? f[n](h) : f[n] = h)
                }
            }
        }), m = g.prototype;
        g.bezierThrough = u, g.cubicToQuadratic = h, g._autoCSS = !0, g.quadraticToCubic = function (t, e, i) {
            return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, g._cssRegister = function () {
            var t = n.CSSPlugin;
            if (t) {
                var e = t._internals, i = e._parseToProxy, r = e._setPluginRatio, s = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function (t, e, n, o, a, h) {
                        e instanceof Array && (e = {values: e}), h = new g;
                        var l, c, u, d = e.values, p = d.length - 1, f = [], m = {};
                        if (p < 0)return a;
                        for (l = 0; l <= p; l++)u = i(t, d[l], o, a, h, p !== l), f[l] = u.end;
                        for (c in e)m[c] = e[c];
                        return m.values = f, a = new s(t, "bezier", 0, 0, u.pt, 2), a.data = u, a.plugin = h, a.setRatio = r, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (l = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [["left", "top", "rotation", l, !1]] : null != u.end.x && [["x", "y", "rotation", l, !1]]), m.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0), h._onInitTween(u.proxy, m, o._tween), a
                    }
                })
            }
        }, m._roundProps = function (t, e) {
            for (var i = this._overwriteProps, r = i.length; --r > -1;)(t[i[r]] || t.bezier || t.bezierThrough) && (this._round[i[r]] = e)
        }, m._kill = function (t) {
            var e, i, r = this._props;
            for (e in this._beziers)if (e in t)for (delete this._beziers[e], delete this._func[e], i = r.length; --i > -1;)r[i] === e && r.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
        var i, r, s, n, o = function () {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
        }, a = _gsScope._gsDefine.globals, h = {}, l = o.prototype = new t("css");
        l.constructor = o, o.version = "1.18.5", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, l = "px", o.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l,
            lineHeight: ""
        };
        var c, u, d, p, f, g, m = /(?:\-|\.|\b)(\d|\.|e\-)+/g, v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, x = /(?:\d|\-|\+|=|#|\.)*/g, b = /opacity *= *([^)]*)/i, w = /opacity:([^;]*)/i, T = /alpha\(opacity *=.+?\)/i, L = /^(rgb|hsl)/, S = /([A-Z])/g, E = /-([a-z])/gi, P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, A = function (t, e) {
            return e.toUpperCase()
        }, C = /(?:Left|Right|Width)/i, R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, O = /,(?=[^\)]*(?:\(|$))/gi, I = /[\s,\(]/i, B = Math.PI / 180, D = 180 / Math.PI, W = {}, N = document, j = function (t) {
            return N.createElementNS ? N.createElementNS("http://www.w3.org/1999/xhtml", t) : N.createElement(t)
        }, F = j("div"), k = j("img"), U = o._internals = {_specialProps: h}, V = navigator.userAgent, H = function () {
            var t = V.indexOf("Android"), e = j("a");
            return d = V.indexOf("Safari") !== -1 && V.indexOf("Chrome") === -1 && (t === -1 || Number(V.substr(t + 8, 1)) > 3), f = d && Number(V.substr(V.indexOf("Version/") + 8, 1)) < 6, p = V.indexOf("Firefox") !== -1, (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (g = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
        }(), X = function (t) {
            return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, Y = function (t) {
            window.console && console.log(t)
        }, G = "", z = "", q = function (t, e) {
            e = e || F;
            var i, r, s = e.style;
            if (void 0 !== s[t])return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + t];);
            return r >= 0 ? (z = 3 === r ? "ms" : i[r], G = "-" + z.toLowerCase() + "-", z + t) : null
        }, $ = N.defaultView ? N.defaultView.getComputedStyle : function () {
        }, Q = o.getStyle = function (t, e, i, r, s) {
            var n;
            return H || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || $(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : X(t)
        }, J = U.convertToPixels = function (t, i, r, s, n) {
            if ("px" === s || !s)return r;
            if ("auto" === s || !r)return 0;
            var a, h, l, c = C.test(i), u = t, d = F.style, p = r < 0, f = 1 === r;
            if (p && (r = -r), f && (r *= 100), "%" === s && i.indexOf("border") !== -1)a = r / 100 * (c ? t.clientWidth : t.clientHeight); else {
                if (d.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== s && u.appendChild && "v" !== s.charAt(0) && "rem" !== s)d[c ? "borderLeftWidth" : "borderTopWidth"] = r + s; else {
                    if (u = t.parentNode || N.body, h = u._gsCache, l = e.ticker.frame, h && c && h.time === l)return h.width * r / 100;
                    d[c ? "width" : "height"] = r + s
                }
                u.appendChild(F), a = parseFloat(F[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(F), c && "%" === s && o.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = a / r * 100), 0 !== a || n || (a = J(t, i, r, s, !0))
            }
            return f && (a /= 100), p ? -a : a
        }, Z = U.calculateOffset = function (t, e, i) {
            if ("absolute" !== Q(t, "position", i))return 0;
            var r = "left" === e ? "Left" : "Top", s = Q(t, "margin" + r, i);
            return t["offset" + r] - (J(t, e, parseFloat(s), s.replace(x, "")) || 0)
        }, K = function (t, e) {
            var i, r, s, n = {};
            if (e = e || $(t, null))if (i = e.length)for (; --i > -1;)s = e[i], s.indexOf("-transform") !== -1 && Et !== s || (n[s.replace(E, A)] = e.getPropertyValue(s)); else for (i in e)i.indexOf("Transform") !== -1 && St !== i || (n[i] = e[i]); else if (e = t.currentStyle || t.style)for (i in e)"string" == typeof i && void 0 === n[i] && (n[i.replace(E, A)] = e[i]);
            return H || (n.opacity = X(t)), r = Ft(t, e, !1), n.rotation = r.rotation, n.skewX = r.skewX, n.scaleX = r.scaleX, n.scaleY = r.scaleY, n.x = r.x, n.y = r.y, At && (n.z = r.z, n.rotationX = r.rotationX, n.rotationY = r.rotationY, n.scaleZ = r.scaleZ), n.filters && delete n.filters, n
        }, tt = function (t, e, i, r, s) {
            var n, o, a, h = {}, l = t.style;
            for (o in i)"cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (n = i[o]) || s && s[o]) && o.indexOf("Origin") === -1 && ("number" != typeof n && "string" != typeof n || (h[o] = "auto" !== n || "left" !== o && "top" !== o ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[o] || "" === e[o].replace(y, "") ? n : 0 : Z(t, o), void 0 !== l[o] && (a = new gt(l, o, l[o], a))));
            if (r)for (o in r)"className" !== o && (h[o] = r[o]);
            return {difs: h, firstMPT: a}
        }, et = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, it = ["marginLeft", "marginRight", "marginTop", "marginBottom"], rt = function (t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase())return (i || $(t))[e] || 0;
            if (t.getBBox && Wt(t))return t.getBBox()[e] || 0;
            var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), s = et[e], n = s.length;
            for (i = i || $(t, null); --n > -1;)r -= parseFloat(Q(t, "padding" + s[n], i, !0)) || 0, r -= parseFloat(Q(t, "border" + s[n] + "Width", i, !0)) || 0;
            return r
        }, st = function (t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)return t + " ";
            null != t && "" !== t || (t = "0 0");
            var i, r = t.split(" "), s = t.indexOf("left") !== -1 ? "0%" : t.indexOf("right") !== -1 ? "100%" : r[0], n = t.indexOf("top") !== -1 ? "0%" : t.indexOf("bottom") !== -1 ? "100%" : r[1];
            if (r.length > 3 && !e) {
                for (r = t.split(", ").join(",").split(","), t = [], i = 0; i < r.length; i++)t.push(st(r[i]));
                return t.join(",")
            }
            return null == n ? n = "center" === s ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === s || isNaN(parseFloat(s)) && (s + "").indexOf("=") === -1) && (s = "50%"), t = s + " " + n + (r.length > 2 ? " " + r[2] : ""), e && (e.oxp = s.indexOf("%") !== -1, e.oyp = n.indexOf("%") !== -1, e.oxr = "=" === s.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(n.replace(y, "")), e.v = t), e || t
        }, nt = function (t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
        }, ot = function (t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
        }, at = function (t, e, i, r) {
            var s, n, o, a, h, l = 1e-6;
            return null == t ? a = e : "number" == typeof t ? a = t : (s = 360, n = t.split("_"), h = "=" === t.charAt(1), o = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (t.indexOf("rad") === -1 ? 1 : D) - (h ? 0 : e), n.length && (r && (r[i] = e + o), t.indexOf("short") !== -1 && (o %= s, o !== o % (s / 2) && (o = o < 0 ? o + s : o - s)), t.indexOf("_cw") !== -1 && o < 0 ? o = (o + 9999999999 * s) % s - (o / s | 0) * s : t.indexOf("ccw") !== -1 && o > 0 && (o = (o - 9999999999 * s) % s - (o / s | 0) * s)), a = e + o), a < l && a > -l && (a = 0), a
        }, ht = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, lt = function (t, e, i) {
            return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        }, ct = o.parseColor = function (t, e) {
            var i, r, s, n, o, a, h, l, c, u, d;
            if (t)if ("number" == typeof t)i = [t >> 16, t >> 8 & 255, 255 & t]; else {
                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ht[t])i = ht[t]; else if ("#" === t.charAt(0))4 === t.length && (r = t.charAt(1), s = t.charAt(2), n = t.charAt(3), t = "#" + r + r + s + s + n + n), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t]; else if ("hsl" === t.substr(0, 3))if (i = d = t.match(m), e) {
                    if (t.indexOf("=") !== -1)return t.match(v)
                } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, h = Number(i[2]) / 100, s = h <= .5 ? h * (a + 1) : h + a - h * a, r = 2 * h - s, i.length > 3 && (i[3] = Number(t[3])), i[0] = lt(o + 1 / 3, r, s), i[1] = lt(o, r, s), i[2] = lt(o - 1 / 3, r, s); else i = t.match(m) || ht.transparent;
                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
            } else i = ht.black;
            return e && !d && (r = i[0] / 255, s = i[1] / 255, n = i[2] / 255, l = Math.max(r, s, n), c = Math.min(r, s, n), h = (l + c) / 2, l === c ? o = a = 0 : (u = l - c, a = h > .5 ? u / (2 - l - c) : u / (l + c), o = l === r ? (s - n) / u + (s < n ? 6 : 0) : l === s ? (n - r) / u + 2 : (r - s) / u + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * h + .5 | 0), i
        }, ut = function (t, e) {
            var i, r, s, n = t.match(dt) || [], o = 0, a = n.length ? "" : t;
            for (i = 0; i < n.length; i++)r = n[i], s = t.substr(o, t.indexOf(r, o) - o), o += s.length + r.length, r = ct(r, e), 3 === r.length && r.push(1), a += s + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
            return a + t.substr(o)
        }, dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (l in ht)dt += "|" + l + "\\b";
        dt = new RegExp(dt + ")", "gi"), o.colorStringFilter = function (t) {
            var e, i = t[0] + t[1];
            dt.test(i) && (e = i.indexOf("hsl(") !== -1 || i.indexOf("hsla(") !== -1, t[0] = ut(t[0], e), t[1] = ut(t[1], e)), dt.lastIndex = 0
        }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
        var pt = function (t, e, i, r) {
            if (null == t)return function (t) {
                return t
            };
            var s, n = e ? (t.match(dt) || [""])[0] : "", o = t.split(n).join("").match(_) || [], a = t.substr(0, t.indexOf(o[0])), h = ")" === t.charAt(t.length - 1) ? ")" : "", l = t.indexOf(" ") !== -1 ? " " : ",", c = o.length, u = c > 0 ? o[0].replace(m, "") : "";
            return c ? s = e ? function (t) {
                var e, d, p, f;
                if ("number" == typeof t)t += u; else if (r && O.test(t)) {
                    for (f = t.replace(O, "|").split("|"), p = 0; p < f.length; p++)f[p] = s(f[p]);
                    return f.join(",")
                }
                if (e = (t.match(dt) || [n])[0], d = t.split(e).join("").match(_) || [], p = d.length, c > p--)for (; ++p < c;)d[p] = i ? d[(p - 1) / 2 | 0] : o[p];
                return a + d.join(l) + l + e + h + (t.indexOf("inset") !== -1 ? " inset" : "")
            } : function (t) {
                var e, n, d;
                if ("number" == typeof t)t += u; else if (r && O.test(t)) {
                    for (n = t.replace(O, "|").split("|"), d = 0; d < n.length; d++)n[d] = s(n[d]);
                    return n.join(",")
                }
                if (e = t.match(_) || [], d = e.length, c > d--)for (; ++d < c;)e[d] = i ? e[(d - 1) / 2 | 0] : o[d];
                return a + e.join(l) + h
            } : function (t) {
                return t
            }
        }, ft = function (t) {
            return t = t.split(","), function (e, i, r, s, n, o, a) {
                var h, l = (i + "").split(" ");
                for (a = {}, h = 0; h < 4; h++)a[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                return s.parse(e, a, n, o)
            }
        }, gt = (U._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (var e, i, r, s, n, o = this.data, a = o.proxy, h = o.firstMPT, l = 1e-6; h;)e = a[h.v], h.r ? e = Math.round(e) : e < l && e > -l && (e = 0), h.t[h.p] = e, h = h._next;
            if (o.autoRotate && (o.autoRotate.rotation = a.rotation), 1 === t || 0 === t)for (h = o.firstMPT, n = 1 === t ? "e" : "b"; h;) {
                if (i = h.t, i.type) {
                    if (1 === i.type) {
                        for (s = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++)s += i["xn" + r] + i["xs" + (r + 1)];
                        i[n] = s
                    }
                } else i[n] = i.s + i.xs0;
                h = h._next
            }
        }, function (t, e, i, r, s) {
            this.t = t, this.p = e, this.v = i, this.r = s, r && (r._prev = this, this._next = r)
        }), mt = (U._parseToProxy = function (t, e, i, r, s, n) {
            var o, a, h, l, c, u = r, d = {}, p = {}, f = i._transform, g = W;
            for (i._transform = null, W = e, r = c = i.parse(t, e, r, s), W = g, n && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); r && r !== u;) {
                if (r.type <= 1 && (a = r.p, p[a] = r.s + r.c, d[a] = r.s, n || (l = new gt(r, "s", a, l, r.r), r.c = 0), 1 === r.type))for (o = r.l; --o > 0;)h = "xn" + o, a = r.p + "_" + h, p[a] = r.data[h], d[a] = r[h], n || (l = new gt(r, h, a, l, r.rxp[h]));
                r = r._next
            }
            return {proxy: d, end: p, firstMPT: l, pt: c}
        }, U.CSSPropTween = function (t, e, r, s, o, a, h, l, c, u, d) {
            this.t = t, this.p = e, this.s = r, this.c = s, this.n = h || e, t instanceof mt || n.push(this.n), this.r = l, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? r : u, this.e = void 0 === d ? r + s : d, o && (this._next = o, o._prev = this)
        }), vt = function (t, e, i, r, s, n) {
            var o = new mt(t, e, i, r - i, s, (-1), n);
            return o.b = i, o.e = o.xs0 = r, o
        }, _t = o.parseComplex = function (t, e, i, r, s, n, a, h, l, u) {
            i = i || n || "", a = new mt(t, e, 0, 0, a, u ? 2 : 1, null, (!1), h, i, r), r += "", s && dt.test(r + i) && (r = [i, r], o.colorStringFilter(r), i = r[0], r = r[1]);
            var d, p, f, g, _, y, x, b, w, T, L, S, E, P = i.split(", ").join(",").split(" "), A = r.split(", ").join(",").split(" "), C = P.length, R = c !== !1;
            for (r.indexOf(",") === -1 && i.indexOf(",") === -1 || (P = P.join(" ").replace(O, ", ").split(" "), A = A.join(" ").replace(O, ", ").split(" "), C = P.length), C !== A.length && (P = (n || "").split(" "), C = P.length), a.plugin = l, a.setRatio = u, dt.lastIndex = 0, d = 0; d < C; d++)if (g = P[d], _ = A[d], b = parseFloat(g), b || 0 === b)a.appendXtra("", b, nt(_, b), _.replace(v, ""), R && _.indexOf("px") !== -1, !0); else if (s && dt.test(g))S = _.indexOf(")") + 1, S = ")" + (S ? _.substr(S) : ""), E = _.indexOf("hsl") !== -1 && H, g = ct(g, E), _ = ct(_, E), w = g.length + _.length > 6, w && !H && 0 === _[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(A[d]).join("transparent")) : (H || (w = !1), E ? a.appendXtra(w ? "hsla(" : "hsl(", g[0], nt(_[0], g[0]), ",", !1, !0).appendXtra("", g[1], nt(_[1], g[1]), "%,", !1).appendXtra("", g[2], nt(_[2], g[2]), w ? "%," : "%" + S, !1) : a.appendXtra(w ? "rgba(" : "rgb(", g[0], _[0] - g[0], ",", !0, !0).appendXtra("", g[1], _[1] - g[1], ",", !0).appendXtra("", g[2], _[2] - g[2], w ? "," : S, !0), w && (g = g.length < 4 ? 1 : g[3], a.appendXtra("", g, (_.length < 4 ? 1 : _[3]) - g, S, !1))), dt.lastIndex = 0; else if (y = g.match(m)) {
                if (x = _.match(v), !x || x.length !== y.length)return a;
                for (f = 0, p = 0; p < y.length; p++)L = y[p], T = g.indexOf(L, f), a.appendXtra(g.substr(f, T - f), Number(L), nt(x[p], L), "", R && "px" === g.substr(T + L.length, 2), 0 === p), f = T + L.length;
                a["xs" + a.l] += g.substr(f)
            } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + _ : _;
            if (r.indexOf("=") !== -1 && a.data) {
                for (S = a.xs0 + a.data.s, d = 1; d < a.l; d++)S += a["xs" + d] + a.data["xn" + d];
                a.e = S + a["xs" + d]
            }
            return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
        }, yt = 9;
        for (l = mt.prototype, l.l = l.pr = 0; --yt > 0;)l["xn" + yt] = 0, l["xs" + yt] = "";
        l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function (t, e, i, r, s, n) {
            var o = this, a = o.l;
            return o["xs" + a] += n && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = r || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = s, o["xn" + a] = e, o.plugin || (o.xfirst = new mt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, s, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {s: e + i}, o.rxp = {}, o.s = e, o.c = i, o.r = s, o)) : (o["xs" + a] += e + (r || ""), o)
        };
        var xt = function (t, e) {
            e = e || {}, this.p = e.prefix ? q(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || pt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, bt = U._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var r, s, n = t.split(","), o = e.defaultValue;
            for (i = i || [o], r = 0; r < n.length; r++)e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || o, s = new xt(n[r], e)
        }, wt = function (t) {
            if (!h[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                bt(t, {
                    parser: function (t, i, r, s, n, o, l) {
                        var c = a.com.greensock.plugins[e];
                        return c ? (c._cssRegister(), h[r].parse(t, i, r, s, n, o, l)) : (Y("Error: " + e + " js file not loaded."), n)
                    }
                })
            }
        };
        l = xt.prototype, l.parseComplex = function (t, e, i, r, s, n) {
            var o, a, h, l, c, u, d = this.keyword;
            if (this.multi && (O.test(i) || O.test(e) ? (a = e.replace(O, "|").split("|"), h = i.replace(O, "|").split("|")) : d && (a = [e], h = [i])), h) {
                for (l = h.length > a.length ? h.length : a.length, o = 0; o < l; o++)e = a[o] = a[o] || this.dflt, i = h[o] = h[o] || this.dflt, d && (c = e.indexOf(d), u = i.indexOf(d), c !== u && (u === -1 ? a[o] = a[o].split(d).join("") : c === -1 && (a[o] += " " + d)));
                e = a.join(", "), i = h.join(", ")
            }
            return _t(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n)
        }, l.parse = function (t, e, i, r, n, o, a) {
            return this.parseComplex(t.style, this.format(Q(t, this.p, s, !1, this.dflt)), this.format(e), n, o)
        }, o.registerSpecialProp = function (t, e, i) {
            bt(t, {
                parser: function (t, r, s, n, o, a, h) {
                    var l = new mt(t, s, 0, 0, o, 2, s, (!1), i);
                    return l.plugin = a, l.setRatio = e(t, r, n._tween, s), l
                }, priority: i
            })
        }, o.useSVGTransformAttr = d || p;
        var Tt, Lt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), St = q("transform"), Et = G + "transform", Pt = q("transformOrigin"), At = null !== q("perspective"), Ct = U.Transform = function () {
            this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(o.defaultForce3D === !1 || !At) && (o.defaultForce3D || "auto")
        }, Rt = window.SVGElement, Mt = function (t, e, i) {
            var r, s = N.createElementNS("http://www.w3.org/2000/svg", t), n = /([a-z])([A-Z])/g;
            for (r in i)s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
            return e.appendChild(s), s
        }, Ot = N.documentElement, It = function () {
            var t, e, i, r = g || /Android/i.test(V) && !window.chrome;
            return N.createElementNS && !r && (t = Mt("svg", Ot), e = Mt("rect", t, {
                width: 100,
                height: 50,
                x: 100
            }), i = e.getBoundingClientRect().width, e.style[Pt] = "50% 50%", e.style[St] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(p && At), Ot.removeChild(t)), r
        }(), Bt = function (t, e, i, r, s, n) {
            var a, h, l, c, u, d, p, f, g, m, v, _, y, x, b = t._gsTransform, w = jt(t, !0);
            b && (y = b.xOrigin, x = b.yOrigin), (!r || (a = r.split(" ")).length < 2) && (p = t.getBBox(), e = st(e).split(" "), a = [(e[0].indexOf("%") !== -1 ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (e[1].indexOf("%") !== -1 ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = c = parseFloat(a[0]), i.yOrigin = u = parseFloat(a[1]), r && w !== Nt && (d = w[0], p = w[1], f = w[2], g = w[3], m = w[4], v = w[5], _ = d * g - p * f, h = c * (g / _) + u * (-f / _) + (f * v - g * m) / _, l = c * (-p / _) + u * (d / _) - (d * v - p * m) / _, c = i.xOrigin = a[0] = h, u = i.yOrigin = a[1] = l), b && (n && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), s || s !== !1 && o.defaultSmoothOrigin !== !1 ? (h = c - y, l = u - x, b.xOffset += h * w[0] + l * w[2] - h, b.yOffset += h * w[1] + l * w[3] - l) : b.xOffset = b.yOffset = 0), n || t.setAttribute("data-svg-origin", a.join(" "))
        }, Dt = function (t) {
            try {
                return t.getBBox()
            } catch (t) {
            }
        }, Wt = function (t) {
            return !!(Rt && t.getBBox && t.getCTM && Dt(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
        }, Nt = [1, 0, 0, 1, 0, 0], jt = function (t, e) {
            var i, r, s, n, o, a, h = t._gsTransform || new Ct, l = 1e5, c = t.style;
            if (St ? r = Q(t, Et, null, !0) : t.currentStyle && (r = t.currentStyle.filter.match(R), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, i && St && ((a = "none" === $(t).display) || !t.parentNode) && (a && (n = c.display, c.display = "block"), t.parentNode || (o = 1, Ot.appendChild(t)), r = Q(t, Et, null, !0), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, n ? c.display = n : a && Ht(c, "display"), o && Ot.removeChild(t)), (h.svg || t.getBBox && Wt(t)) && (i && (c[St] + "").indexOf("matrix") !== -1 && (r = c[St], i = 0), s = t.getAttribute("transform"), i && s && (s.indexOf("matrix") !== -1 ? (r = s, i = 0) : s.indexOf("translate") !== -1 && (r = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i)return Nt;
            for (s = (r || "").match(m) || [], yt = s.length; --yt > -1;)n = Number(s[yt]), s[yt] = (o = n - (n |= 0)) ? (o * l + (o < 0 ? -.5 : .5) | 0) / l + n : n;
            return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
        }, Ft = U.getTransform = function (t, i, r, s) {
            if (t._gsTransform && r && !s)return t._gsTransform;
            var n, a, h, l, c, u, d = r ? t._gsTransform || new Ct : new Ct, p = d.scaleX < 0, f = 2e-5, g = 1e5, m = At ? parseFloat(Q(t, Pt, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0, v = parseFloat(o.defaultTransformPerspective) || 0;
            if (d.svg = !(!t.getBBox || !Wt(t)), d.svg && (Bt(t, Q(t, Pt, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), Tt = o.useSVGTransformAttr || It), n = jt(t), n !== Nt) {
                if (16 === n.length) {
                    var _, y, x, b, w, T = n[0], L = n[1], S = n[2], E = n[3], P = n[4], A = n[5], C = n[6], R = n[7], M = n[8], O = n[9], I = n[10], B = n[12], W = n[13], N = n[14], j = n[11], F = Math.atan2(C, I);
                    d.zOrigin && (N = -d.zOrigin, B = M * N - n[12], W = O * N - n[13], N = I * N + d.zOrigin - n[14]), d.rotationX = F * D, F && (b = Math.cos(-F), w = Math.sin(-F), _ = P * b + M * w, y = A * b + O * w, x = C * b + I * w, M = P * -w + M * b, O = A * -w + O * b, I = C * -w + I * b, j = R * -w + j * b, P = _, A = y, C = x), F = Math.atan2(-S, I), d.rotationY = F * D, F && (b = Math.cos(-F), w = Math.sin(-F), _ = T * b - M * w, y = L * b - O * w, x = S * b - I * w, O = L * w + O * b, I = S * w + I * b, j = E * w + j * b, T = _, L = y, S = x), F = Math.atan2(L, T), d.rotation = F * D, F && (b = Math.cos(-F), w = Math.sin(-F), T = T * b + P * w, y = L * b + A * w, A = L * -w + A * b, C = S * -w + C * b, L = y), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), d.scaleX = (Math.sqrt(T * T + L * L) * g + .5 | 0) / g, d.scaleY = (Math.sqrt(A * A + O * O) * g + .5 | 0) / g, d.scaleZ = (Math.sqrt(C * C + I * I) * g + .5 | 0) / g, d.rotationX || d.rotationY ? d.skewX = 0 : (d.skewX = P || A ? Math.atan2(P, A) * D + d.rotation : d.skewX || 0, Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (p ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180))), d.perspective = j ? 1 / (j < 0 ? -j : j) : 0, d.x = B, d.y = W, d.z = N, d.svg && (d.x -= d.xOrigin - (d.xOrigin * T - d.yOrigin * P), d.y -= d.yOrigin - (d.yOrigin * L - d.xOrigin * A))
                } else if (!At || s || !n.length || d.x !== n[4] || d.y !== n[5] || !d.rotationX && !d.rotationY) {
                    var k = n.length >= 6, U = k ? n[0] : 1, V = n[1] || 0, H = n[2] || 0, X = k ? n[3] : 1;
                    d.x = n[4] || 0, d.y = n[5] || 0, h = Math.sqrt(U * U + V * V), l = Math.sqrt(X * X + H * H), c = U || V ? Math.atan2(V, U) * D : d.rotation || 0, u = H || X ? Math.atan2(H, X) * D + c : d.skewX || 0, Math.abs(u) > 90 && Math.abs(u) < 270 && (p ? (h *= -1, u += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (l *= -1, u += u <= 0 ? 180 : -180)), d.scaleX = h, d.scaleY = l, d.rotation = c, d.skewX = u, At && (d.rotationX = d.rotationY = d.z = 0, d.perspective = v, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * U + d.yOrigin * H), d.y -= d.yOrigin - (d.xOrigin * V + d.yOrigin * X))
                }
                d.zOrigin = m;
                for (a in d)d[a] < f && d[a] > -f && (d[a] = 0)
            }
            return r && (t._gsTransform = d, d.svg && (Tt && t.style[St] ? e.delayedCall(.001, function () {
                Ht(t.style, St)
            }) : !Tt && t.getAttribute("transform") && e.delayedCall(.001, function () {
                t.removeAttribute("transform")
            }))), d
        }, kt = function (t) {
            var e, i, r = this.data, s = -r.rotation * B, n = s + r.skewX * B, o = 1e5, a = (Math.cos(s) * r.scaleX * o | 0) / o, h = (Math.sin(s) * r.scaleX * o | 0) / o, l = (Math.sin(n) * -r.scaleY * o | 0) / o, c = (Math.cos(n) * r.scaleY * o | 0) / o, u = this.t.style, d = this.t.currentStyle;
            if (d) {
                i = h, h = -l, l = -i, e = d.filter, u.filter = "";
                var p, f, m = this.t.offsetWidth, v = this.t.offsetHeight, _ = "absolute" !== d.position, y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + h + ", M21=" + l + ", M22=" + c, w = r.x + m * r.xPercent / 100, T = r.y + v * r.yPercent / 100;
                if (null != r.ox && (p = (r.oxp ? m * r.ox * .01 : r.ox) - m / 2, f = (r.oyp ? v * r.oy * .01 : r.oy) - v / 2, w += p - (p * a + f * h), T += f - (p * l + f * c)), _ ? (p = m / 2, f = v / 2, y += ", Dx=" + (p - (p * a + f * h) + w) + ", Dy=" + (f - (p * l + f * c) + T) + ")") : y += ", sizingMethod='auto expand')", e.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? u.filter = e.replace(M, y) : u.filter = y + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === h && 0 === l && 1 === c && (_ && y.indexOf("Dx=0, Dy=0") === -1 || b.test(e) && 100 !== parseFloat(RegExp.$1) || e.indexOf(e.indexOf("Alpha")) === -1 && u.removeAttribute("filter")), !_) {
                    var L, S, E, P = g < 8 ? 1 : -1;
                    for (p = r.ieOffsetX || 0, f = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (h < 0 ? -h : h) * v)) / 2 + w), r.ieOffsetY = Math.round((v - ((c < 0 ? -c : c) * v + (l < 0 ? -l : l) * m)) / 2 + T), yt = 0; yt < 4; yt++)S = it[yt], L = d[S], i = L.indexOf("px") !== -1 ? parseFloat(L) : J(this.t, S, parseFloat(L), L.replace(x, "")) || 0, E = i !== r[S] ? yt < 2 ? -r.ieOffsetX : -r.ieOffsetY : yt < 2 ? p - r.ieOffsetX : f - r.ieOffsetY, u[S] = (r[S] = Math.round(i - E * (0 === yt || 2 === yt ? 1 : P))) + "px"
                }
            }
        }, Ut = U.set3DTransformRatio = U.setTransformRatio = function (t) {
            var e, i, r, s, n, o, a, h, l, c, u, d, f, g, m, v, _, y, x, b, w, T, L, S = this.data, E = this.t.style, P = S.rotation, A = S.rotationX, C = S.rotationY, R = S.scaleX, M = S.scaleY, O = S.scaleZ, I = S.x, D = S.y, W = S.z, N = S.svg, j = S.perspective, F = S.force3D;
            if (((1 === t || 0 === t) && "auto" === F && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !F) && !W && !j && !C && !A && 1 === O || Tt && N || !At)return void(P || S.skewX || N ? (P *= B, T = S.skewX * B, L = 1e5, e = Math.cos(P) * R, s = Math.sin(P) * R, i = Math.sin(P - T) * -M, n = Math.cos(P - T) * M, T && "simple" === S.skewType && (_ = Math.tan(T), _ = Math.sqrt(1 + _ * _), i *= _, n *= _, S.skewY && (e *= _, s *= _)), N && (I += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, D += S.yOrigin - (S.xOrigin * s + S.yOrigin * n) + S.yOffset, Tt && (S.xPercent || S.yPercent) && (g = this.t.getBBox(), I += .01 * S.xPercent * g.width, D += .01 * S.yPercent * g.height), g = 1e-6, I < g && I > -g && (I = 0), D < g && D > -g && (D = 0)), x = (e * L | 0) / L + "," + (s * L | 0) / L + "," + (i * L | 0) / L + "," + (n * L | 0) / L + "," + I + "," + D + ")", N && Tt ? this.t.setAttribute("transform", "matrix(" + x) : E[St] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : E[St] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + M + "," + I + "," + D + ")");
            if (p && (g = 1e-4, R < g && R > -g && (R = O = 2e-5), M < g && M > -g && (M = O = 2e-5), !j || S.z || S.rotationX || S.rotationY || (j = 0)), P || S.skewX)P *= B, m = e = Math.cos(P), v = s = Math.sin(P), S.skewX && (P -= S.skewX * B, m = Math.cos(P), v = Math.sin(P), "simple" === S.skewType && (_ = Math.tan(S.skewX * B), _ = Math.sqrt(1 + _ * _), m *= _, v *= _, S.skewY && (e *= _, s *= _))), i = -v, n = m; else {
                if (!(C || A || 1 !== O || j || N))return void(E[St] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + D + "px," + W + "px)" + (1 !== R || 1 !== M ? " scale(" + R + "," + M + ")" : ""));
                e = n = 1, i = s = 0
            }
            l = 1, r = o = a = h = c = u = 0, d = j ? -1 / j : 0, f = S.zOrigin, g = 1e-6, b = ",", w = "0", P = C * B, P && (m = Math.cos(P), v = Math.sin(P), a = -v, c = d * -v, r = e * v, o = s * v, l = m, d *= m, e *= m, s *= m), P = A * B, P && (m = Math.cos(P), v = Math.sin(P), _ = i * m + r * v, y = n * m + o * v, h = l * v, u = d * v, r = i * -v + r * m, o = n * -v + o * m, l *= m, d *= m, i = _, n = y), 1 !== O && (r *= O, o *= O, l *= O, d *= O), 1 !== M && (i *= M, n *= M, h *= M, u *= M), 1 !== R && (e *= R, s *= R, a *= R, c *= R), (f || N) && (f && (I += r * -f, D += o * -f, W += l * -f + f), N && (I += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, D += S.yOrigin - (S.xOrigin * s + S.yOrigin * n) + S.yOffset), I < g && I > -g && (I = w), D < g && D > -g && (D = w), W < g && W > -g && (W = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (e < g && e > -g ? w : e) + b + (s < g && s > -g ? w : s) + b + (a < g && a > -g ? w : a), x += b + (c < g && c > -g ? w : c) + b + (i < g && i > -g ? w : i) + b + (n < g && n > -g ? w : n), A || C || 1 !== O ? (x += b + (h < g && h > -g ? w : h) + b + (u < g && u > -g ? w : u) + b + (r < g && r > -g ? w : r), x += b + (o < g && o > -g ? w : o) + b + (l < g && l > -g ? w : l) + b + (d < g && d > -g ? w : d) + b) : x += ",0,0,0,0,1,0,", x += I + b + D + b + W + b + (j ? 1 + -W / j : 1) + ")", E[St] = x
        };
        l = Ct.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (t, e, i, r, n, a, h) {
                if (r._lastParsedTransform === h)return n;
                r._lastParsedTransform = h;
                var l, c, u, d, p, f, g, m, v, _ = t._gsTransform, y = t.style, x = 1e-6, b = Lt.length, w = h, T = {}, L = "transformOrigin", S = Ft(t, s, !0, h.parseTransform);
                if (r._transform = S, "string" == typeof w.transform && St)c = F.style, c[St] = w.transform, c.display = "block", c.position = "absolute", N.body.appendChild(F), l = Ft(F, null, !1), S.svg && (g = S.xOrigin, m = S.yOrigin, l.x -= S.xOffset, l.y -= S.yOffset, (w.transformOrigin || w.svgOrigin) && (u = {}, Bt(t, st(w.transformOrigin), u, w.svgOrigin, w.smoothOrigin, !0), g = u.xOrigin, m = u.yOrigin, l.x -= u.xOffset - S.xOffset, l.y -= u.yOffset - S.yOffset), (g || m) && (v = jt(F, !0), l.x -= g - (g * v[0] + m * v[2]), l.y -= m - (g * v[1] + m * v[3]))), N.body.removeChild(F), l.perspective || (l.perspective = S.perspective), null != w.xPercent && (l.xPercent = ot(w.xPercent, S.xPercent)), null != w.yPercent && (l.yPercent = ot(w.yPercent, S.yPercent)); else if ("object" == typeof w) {
                    if (l = {
                            scaleX: ot(null != w.scaleX ? w.scaleX : w.scale, S.scaleX),
                            scaleY: ot(null != w.scaleY ? w.scaleY : w.scale, S.scaleY),
                            scaleZ: ot(w.scaleZ, S.scaleZ),
                            x: ot(w.x, S.x),
                            y: ot(w.y, S.y),
                            z: ot(w.z, S.z),
                            xPercent: ot(w.xPercent, S.xPercent),
                            yPercent: ot(w.yPercent, S.yPercent),
                            perspective: ot(w.transformPerspective, S.perspective)
                        }, f = w.directionalRotation, null != f)if ("object" == typeof f)for (c in f)w[c] = f[c]; else w.rotation = f;
                    "string" == typeof w.x && w.x.indexOf("%") !== -1 && (l.x = 0, l.xPercent = ot(w.x, S.xPercent)), "string" == typeof w.y && w.y.indexOf("%") !== -1 && (l.y = 0, l.yPercent = ot(w.y, S.yPercent)), l.rotation = at("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : S.rotation - S.skewY, S.rotation - S.skewY, "rotation", T), At && (l.rotationX = at("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", T), l.rotationY = at("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : S.rotationY || 0, S.rotationY, "rotationY", T)), l.skewX = at(w.skewX, S.skewX - S.skewY), (l.skewY = at(w.skewY, S.skewY)) && (l.skewX += l.skewY, l.rotation += l.skewY)
                }
                for (At && null != w.force3D && (S.force3D = w.force3D, p = !0), S.skewType = w.skewType || S.skewType || o.defaultSkewType, d = S.force3D || S.z || S.rotationX || S.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, d || null == w.scale || (l.scaleZ = 1); --b > -1;)i = Lt[b], u = l[i] - S[i], (u > x || u < -x || null != w[i] || null != W[i]) && (p = !0, n = new mt(S, i, S[i], u, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = a, r._overwriteProps.push(n.n));
                return u = w.transformOrigin, S.svg && (u || w.svgOrigin) && (g = S.xOffset, m = S.yOffset, Bt(t, st(u), l, w.svgOrigin, w.smoothOrigin), n = vt(S, "xOrigin", (_ ? S : l).xOrigin, l.xOrigin, n, L), n = vt(S, "yOrigin", (_ ? S : l).yOrigin, l.yOrigin, n, L), g === S.xOffset && m === S.yOffset || (n = vt(S, "xOffset", _ ? g : S.xOffset, S.xOffset, n, L), n = vt(S, "yOffset", _ ? m : S.yOffset, S.yOffset, n, L)), u = Tt ? null : "0px 0px"), (u || At && d && S.zOrigin) && (St ? (p = !0, i = Pt, u = (u || Q(t, i, s, !1, "50% 50%")) + "", n = new mt(y, i, 0, 0, n, (-1), L), n.b = y[i], n.plugin = a, At ? (c = S.zOrigin, u = u.split(" "), S.zOrigin = (u.length > 2 && (0 === c || "0px" !== u[2]) ? parseFloat(u[2]) : c) || 0, n.xs0 = n.e = u[0] + " " + (u[1] || "50%") + " 0px", n = new mt(S, "zOrigin", 0, 0, n, (-1), n.n), n.b = c, n.xs0 = n.e = S.zOrigin) : n.xs0 = n.e = u) : st(u + "", S)), p && (r._transformType = S.svg && Tt || !d && 3 !== this._transformType ? 2 : 3), n
            }, prefix: !0
        }), bt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), bt("borderRadius", {
            defaultValue: "0px", parser: function (t, e, i, n, o, a) {
                e = this.format(e);
                var h, l, c, u, d, p, f, g, m, v, _, y, x, b, w, T, L = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], S = t.style;
                for (m = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), h = e.split(" "), l = 0; l < L.length; l++)this.p.indexOf("border") && (L[l] = q(L[l])), d = u = Q(t, L[l], s, !1, "0px"), d.indexOf(" ") !== -1 && (u = d.split(" "), d = u[0], u = u[1]), p = c = h[l], f = parseFloat(d), y = d.substr((f + "").length), x = "=" === p.charAt(1), x ? (g = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), g *= parseFloat(p), _ = p.substr((g + "").length - (g < 0 ? 1 : 0)) || "") : (g = parseFloat(p), _ = p.substr((g + "").length)), "" === _ && (_ = r[i] || y), _ !== y && (b = J(t, "borderLeft", f, y), w = J(t, "borderTop", f, y), "%" === _ ? (d = b / m * 100 + "%", u = w / v * 100 + "%") : "em" === _ ? (T = J(t, "borderLeft", 1, "em"), d = b / T + "em", u = w / T + "em") : (d = b + "px", u = w + "px"), x && (p = parseFloat(d) + g + _, c = parseFloat(u) + g + _)), o = _t(S, L[l], d + " " + u, p + " " + c, !1, "0px", o);
                return o
            }, prefix: !0, formatter: pt("0px 0px 0px 0px", !1, !0)
        }), bt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, r, n, o) {
                return _t(t.style, i, this.format(Q(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", n)
            },
            prefix: !0,
            formatter: pt("0px 0px", !1, !0)
        }), bt("backgroundPosition", {
            defaultValue: "0 0", parser: function (t, e, i, r, n, o) {
                var a, h, l, c, u, d, p = "background-position", f = s || $(t, null), m = this.format((f ? g ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), v = this.format(e);
                if (m.indexOf("%") !== -1 != (v.indexOf("%") !== -1) && v.split(",").length < 2 && (d = Q(t, "backgroundImage").replace(P, ""), d && "none" !== d)) {
                    for (a = m.split(" "), h = v.split(" "), k.setAttribute("src", d), l = 2; --l > -1;)m = a[l], c = m.indexOf("%") !== -1, c !== (h[l].indexOf("%") !== -1) && (u = 0 === l ? t.offsetWidth - k.width : t.offsetHeight - k.height, a[l] = c ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                    m = a.join(" ")
                }
                return this.parseComplex(t.style, m, v, n, o)
            }, formatter: st
        }), bt("backgroundSize", {defaultValue: "0 0", formatter: st}), bt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), bt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), bt("transformStyle", {prefix: !0}), bt("backfaceVisibility", {prefix: !0}), bt("userSelect", {prefix: !0}), bt("margin", {parser: ft("marginTop,marginRight,marginBottom,marginLeft")}), bt("padding", {parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft")}), bt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, r, n, o) {
                var a, h, l;
                return g < 9 ? (h = t.currentStyle, l = g < 8 ? " " : ",", a = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (a = this.format(Q(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, n, o)
            }
        }), bt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), bt("autoRound,strictUnits", {
            parser: function (t, e, i, r, s) {
                return s
            }
        }), bt("border", {
            defaultValue: "0px solid #000", parser: function (t, e, i, r, n, o) {
                var a = Q(t, "borderTopWidth", s, !1, "0px"), h = this.format(e).split(" "), l = h[0].replace(x, "");
                return "px" !== l && (a = parseFloat(a) / J(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(a + " " + Q(t, "borderTopStyle", s, !1, "solid") + " " + Q(t, "borderTopColor", s, !1, "#000")), h.join(" "), n, o)
            }, color: !0, formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]
            }
        }), bt("borderWidth", {parser: ft("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), bt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, r, s, n) {
                var o = t.style, a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                return new mt(o, a, 0, 0, s, (-1), i, (!1), 0, o[a], e)
            }
        });
        var Vt = function (t) {
            var e, i = this.t, r = i.filter || Q(this.data, "filter") || "", s = this.s + this.c * t | 0;
            100 === s && (r.indexOf("atrix(") === -1 && r.indexOf("radient(") === -1 && r.indexOf("oader(") === -1 ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = r.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), r.indexOf("pacity") === -1 ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(b, "opacity=" + s))
        };
        bt("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (t, e, i, r, n, o) {
                var a = parseFloat(Q(t, "opacity", s, !1, "1")), h = t.style, l = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), l && 1 === a && "hidden" === Q(t, "visibility", s) && 0 !== e && (a = 0), H ? n = new mt(h, "opacity", a, e - a, n) : (n = new mt(h, "opacity", 100 * a, 100 * (e - a), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = o, n.setRatio = Vt), l && (n = new mt(h, "visibility", 0, 0, n, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n
            }
        });
        var Ht = function (t, e) {
            e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
        }, Xt = function (t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e;)e.v ? i[e.p] = e.v : Ht(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        bt("className", {
            parser: function (t, e, r, n, o, a, h) {
                var l, c, u, d, p, f = t.getAttribute("class") || "", g = t.style.cssText;
                if (o = n._classNamePT = new mt(t, r, 0, 0, o, 2), o.setRatio = Xt, o.pr = -11, i = !0, o.b = f, c = K(t, s), u = t._gsClassPT) {
                    for (d = {}, p = u.data; p;)d[p.p] = 1, p = p._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), l = tt(t, c, K(t), h, d), t.setAttribute("class", f), o.data = l.firstMPT, t.style.cssText = g, o = o.xfirst = n.parse(t, l.difs, o, a)
            }
        });
        var Yt = function (t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, r, s, n, o = this.t.style, a = h.transform.parse;
                if ("all" === this.e)o.cssText = "", s = !0; else for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;)i = e[r], h[i] && (h[i].parse === a ? s = !0 : i = "transformOrigin" === i ? Pt : h[i].p), Ht(o, i);
                s && (Ht(o, St), n = this.t._gsTransform, n && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (bt("clearProps", {
            parser: function (t, e, r, s, n) {
                return n = new mt(t, r, 0, 0, n, 2), n.setRatio = Yt, n.e = e, n.pr = -10, n.data = s._tween, i = !0, n
            }
        }), l = "bezier,throwProps,physicsProps,physics2D".split(","), yt = l.length; yt--;)wt(l[yt]);
        l = o.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function (t, e, a) {
            if (!t.nodeType)return !1;
            this._target = t,
                this._tween = a, this._vars = e, c = e.autoRound, i = !1, r = e.suffixMap || o.suffixMap, s = $(t, ""), n = this._overwriteProps;
            var l, p, g, m, v, _, y, x, b, T = t.style;
            if (u && "" === T.zIndex && (l = Q(t, "zIndex", s), "auto" !== l && "" !== l || this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (m = T.cssText, l = K(t, s), T.cssText = m + ";" + e, l = tt(t, l, K(t)).difs, !H && w.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, T.cssText = m), e.className ? this._firstPT = p = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = p = this.parse(t, e, null), this._transformType) {
                for (b = 3 === this._transformType, St ? d && (u = !0, "" === T.zIndex && (y = Q(t, "zIndex", s), "auto" !== y && "" !== y || this._addLazySet(T, "zIndex", 0)), f && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : T.zoom = 1, g = p; g && g._next;)g = g._next;
                x = new mt(t, "transform", 0, 0, null, 2), this._linkCSSP(x, null, g), x.setRatio = St ? Ut : kt, x.data = this._transform || Ft(t, s, !0), x.tween = a, x.pr = -1, n.pop()
            }
            if (i) {
                for (; p;) {
                    for (_ = p._next, g = m; g && g.pr > p.pr;)g = g._next;
                    (p._prev = g ? g._prev : v) ? p._prev._next = p : m = p, (p._next = g) ? g._prev = p : v = p, p = _
                }
                this._firstPT = m
            }
            return !0
        }, l.parse = function (t, e, i, n) {
            var o, a, l, u, d, p, f, g, m, v, _ = t.style;
            for (o in e)p = e[o], a = h[o], a ? i = a.parse(t, p, o, this, i, n, e) : (d = Q(t, o, s) + "", m = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || o.indexOf("Color") !== -1 || m && L.test(p) ? (m || (p = ct(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = _t(_, o, d, p, !0, "transparent", i, 0, n)) : m && I.test(p) ? i = _t(_, o, d, p, !0, null, i, 0, n) : (l = parseFloat(d), f = l || 0 === l ? d.substr((l + "").length) : "", "" !== d && "auto" !== d || ("width" === o || "height" === o ? (l = rt(t, o, s), f = "px") : "left" === o || "top" === o ? (l = Z(t, o, s), f = "px") : (l = "opacity" !== o ? 0 : 1, f = "")), v = m && "=" === p.charAt(1), v ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), g = p.replace(x, "")) : (u = parseFloat(p), g = m ? p.replace(x, "") : ""), "" === g && (g = o in r ? r[o] : f), p = u || 0 === u ? (v ? u + l : u) + g : e[o], f !== g && "" !== g && (u || 0 === u) && l && (l = J(t, o, l, f), "%" === g ? (l /= J(t, o, 100, "%") / 100, e.strictUnits !== !0 && (d = l + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? l /= J(t, o, 1, g) : "px" !== g && (u = J(t, o, u, g), g = "px"), v && (u || 0 === u) && (p = u + l + g)), v && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== _[o] && (p || p + "" != "NaN" && null != p) ? (i = new mt(_, o, u || l || 0, 0, i, (-1), o, (!1), 0, d, p), i.xs0 = "none" !== p || "display" !== o && o.indexOf("Style") === -1 ? p : d) : Y("invalid " + o + " tween value: " + e[o]) : (i = new mt(_, o, l, u - l, i, 0, o, c !== !1 && ("px" === g || "zIndex" === o), 0, d, p), i.xs0 = g))), n && i && !i.plugin && (i.plugin = n);
            return i
        }, l.setRatio = function (t) {
            var e, i, r, s = this._firstPT, n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)for (; s;) {
                if (e = s.c * t + s.s, s.r ? e = Math.round(e) : e < n && e > -n && (e = 0), s.type)if (1 === s.type)if (r = s.l, 2 === r)s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2; else if (3 === r)s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3; else if (4 === r)s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4; else if (5 === r)s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5; else {
                    for (i = s.xs0 + e + s.xs1, r = 1; r < s.l; r++)i += s["xn" + r] + s["xs" + (r + 1)];
                    s.t[s.p] = i
                } else s.type === -1 ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t); else s.t[s.p] = e + s.xs0;
                s = s._next
            } else for (; s;)2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next; else for (; s;) {
                if (2 !== s.type)if (s.r && s.type !== -1)if (e = Math.round(s.s + s.c), s.type) {
                    if (1 === s.type) {
                        for (r = s.l, i = s.xs0 + e + s.xs1, r = 1; r < s.l; r++)i += s["xn" + r] + s["xs" + (r + 1)];
                        s.t[s.p] = i
                    }
                } else s.t[s.p] = e + s.xs0; else s.t[s.p] = s.e; else s.setRatio(t);
                s = s._next
            }
        }, l._enableTransforms = function (t) {
            this._transform = this._transform || Ft(this._target, s, !0), this._transformType = this._transform.svg && Tt || !t && 3 !== this._transformType ? 2 : 3
        };
        var Gt = function (t) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        l._addLazySet = function (t, e, i) {
            var r = this._firstPT = new mt(t, e, 0, 0, this._firstPT, 2);
            r.e = i, r.setRatio = Gt, r.data = this
        }, l._linkCSSP = function (t, e, i, r) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, l._kill = function (e) {
            var i, r, s, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (r in e)n[r] = e[r];
                n.opacity = 1, n.autoAlpha && (n.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
        };
        var zt = function (t, e, i) {
            var r, s, n, o;
            if (t.slice)for (s = t.length; --s > -1;)zt(t[s], e, i); else for (r = t.childNodes, s = r.length; --s > -1;)n = r[s], o = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== o && 9 !== o && 11 !== o || !n.childNodes.length || zt(n, e, i)
        };
        return o.cascadeTo = function (t, i, r) {
            var s, n, o, a, h = e.to(t, i, r), l = [h], c = [], u = [], d = [], p = e._internals.reservedProps;
            for (t = h._targets || h.target, zt(t, c, d), h.render(i, !0, !0), zt(t, u), h.render(0, !0, !0), h._enabled(!0), s = d.length; --s > -1;)if (n = tt(d[s], c[s], u[s]), n.firstMPT) {
                n = n.difs;
                for (o in r)p[o] && (n[o] = r[o]);
                a = {};
                for (o in n)a[o] = c[s][o];
                l.push(e.fromTo(d[s], i, a, n))
            }
            return l
        }, t.activate([o]), o
    }, !0), function () {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.5",
            priority: -1,
            API: 2,
            init: function (t, e, i) {
                return this._tween = i, !0
            }
        }), e = function (t) {
            for (; t;)t.f || t.blob || (t.r = 1), t = t._next
        }, i = t.prototype;
        i._onInitAllProps = function () {
            for (var t, i, r, s = this._tween, n = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), o = n.length, a = {}, h = s._propLookup.roundProps; --o > -1;)a[n[o]] = 1;
            for (o = n.length; --o > -1;)for (t = n[o], i = s._firstPT; i;)r = i._next, i.pg ? i.t._roundProps(a, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), r && (r._prev = i._prev), i._prev ? i._prev._next = r : s._firstPT === i && (s._firstPT = r), i._next = i._prev = null, s._propLookup[t] = h)), i = r;
            return !1
        }, i._add = function (t, e, i, r) {
            this._addTween(t, e, i, i + r, e, !0), this._overwriteProps.push(e)
        }
    }(), function () {
        _gsScope._gsDefine.plugin({
            propName: "attr", API: 2, version: "0.5.0", init: function (t, e, i) {
                var r;
                if ("function" != typeof t.setAttribute)return !1;
                for (r in e)this._addTween(t, "setAttribute", t.getAttribute(r) + "", e[r] + "", r, !1, r), this._overwriteProps.push(r);
                return !0
            }
        })
    }(), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function (t, e, i) {
            "object" != typeof e && (e = {rotation: e}), this.finals = {};
            var r, s, n, o, a, h, l = e.useRadians === !0 ? 2 * Math.PI : 360, c = 1e-6;
            for (r in e)"useRadians" !== r && (h = (e[r] + "").split("_"), s = h[0], n = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), o = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? n + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = o - n, h.length && (s = h.join("_"), s.indexOf("short") !== -1 && (a %= l, a !== a % (l / 2) && (a = a < 0 ? a + l : a - l)), s.indexOf("_cw") !== -1 && a < 0 ? a = (a + 9999999999 * l) % l - (a / l | 0) * l : s.indexOf("ccw") !== -1 && a > 0 && (a = (a - 9999999999 * l) % l - (a / l | 0) * l)), (a > c || a < -c) && (this._addTween(t, r, n, n + a, r), this._overwriteProps.push(r)));
            return !0
        },
        set: function (t) {
            var e;
            if (1 !== t)this._super.setRatio.call(this, t); else for (e = this._firstPT; e;)e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var e, i, r, s = _gsScope.GreenSockGlobals || _gsScope, n = s.com.greensock, o = 2 * Math.PI, a = Math.PI / 2, h = n._class, l = function (e, i) {
            var r = h("easing." + e, function () {
            }, !0), s = r.prototype = new t;
            return s.constructor = r, s.getRatio = i, r
        }, c = t.register || function () {
            }, u = function (t, e, i, r, s) {
            var n = h("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new r}, !0);
            return c(n, t), n
        }, d = function (t, e, i) {
            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        }, p = function (e, i) {
            var r = h("easing." + e, function (t) {
                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
            }, !0), s = r.prototype = new t;
            return s.constructor = r, s.getRatio = i, s.config = function (t) {
                return new r(t)
            }, r
        }, f = u("Back", p("BackOut", function (t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), p("BackIn", function (t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), p("BackInOut", function (t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), g = h("easing.SlowMo", function (t, e, i) {
            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
        }, !0), m = g.prototype = new t;
        return m.constructor = g, m.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, g.ease = new g(.7, .7), m.config = g.config = function (t, e, i) {
            return new g(t, e, i)
        }, e = h("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function (t) {
            return t < 0 ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, m.config = e.config = function (t) {
            return new e(t)
        }, i = h("easing.RoughEase", function (e) {
            e = e || {};
            for (var i, r, s, n, o, a, h = e.taper || "none", l = [], c = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;)i = f ? Math.random() : 1 / u * p, r = m ? m.getRatio(i) : i, "none" === h ? s = v : "out" === h ? (n = 1 - i, s = n * n * v) : "in" === h ? s = i * i * v : i < .5 ? (n = 2 * i, s = n * n * .5 * v) : (n = 2 * (1 - i), s = n * n * .5 * v), f ? r += Math.random() * s - .5 * s : p % 2 ? r += .5 * s : r -= .5 * s, g && (r > 1 ? r = 1 : r < 0 && (r = 0)), l[c++] = {
                x: i,
                y: r
            };
            for (l.sort(function (t, e) {
                return t.x - e.x
            }), a = new d(1, 1, null), p = u; --p > -1;)o = l[p], a = new d(o.x, o.y, a);
            this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
        }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;)e = e.next;
                e = e.prev
            } else for (; e.prev && t <= e.t;)e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, m.config = function (t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", l("BounceOut", function (t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function (t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function (t) {
            var e = t < .5;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", l("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), r = function (e, i, r) {
            var s = h("easing." + e, function (t, e) {
                this._p1 = t >= 1 ? t : 1, this._p2 = (e || r) / (t < 1 ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
            }, !0), n = s.prototype = new t;
            return n.constructor = s, n.getRatio = i, n.config = function (t, e) {
                return new s(t, e)
            }, s
        }, u("Elastic", r("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), r("ElasticIn", function (t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        }, .3), r("ElasticInOut", function (t) {
            return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)), u("Expo", l("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function (t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", l("SineOut", function (t) {
            return Math.sin(t * a)
        }), l("SineIn", function (t) {
            return -Math.cos(t * a) + 1
        }), l("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), h("easing.EaseLookup", {
            find: function (e) {
                return t.map[e]
            }
        }, !0), c(s.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
    "use strict";
    var i = {}, r = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!r.TweenLite) {
        var s, n, o, a, h, l = function (t) {
            var e, i = t.split("."), s = r;
            for (e = 0; e < i.length; e++)s[i[e]] = s = s[i[e]] || {};
            return s
        }, c = l("com.greensock"), u = 1e-10, d = function (t) {
            var e, i = [], r = t.length;
            for (e = 0; e !== r; i.push(t[e++]));
            return i
        }, p = function () {
        }, f = function () {
            var t = Object.prototype.toString, e = t.call([]);
            return function (i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), g = {}, m = function (s, n, o, a) {
            this.sc = g[s] ? g[s].sc : [], g[s] = this, this.gsClass = null, this.func = o;
            var h = [];
            this.check = function (c) {
                for (var u, d, p, f, v, _ = n.length, y = _; --_ > -1;)(u = g[n[_]] || new m(n[_], [])).gsClass ? (h[_] = u.gsClass, y--) : c && u.sc.push(this);
                if (0 === y && o) {
                    if (d = ("com.greensock." + s).split("."), p = d.pop(), f = l(d.join("."))[p] = this.gsClass = o.apply(o, h), a)if (r[p] = f, v = "undefined" != typeof module && module.exports, !v && "function" == typeof define && define.amd)define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function () {
                        return f
                    }); else if (v)if (s === e) {
                        module.exports = i[e] = f;
                        for (_ in i)f[_] = i[_]
                    } else i[e] && (i[e][p] = f);
                    for (_ = 0; _ < this.sc.length; _++)this.sc[_].check()
                }
            }, this.check(!0)
        }, v = t._gsDefine = function (t, e, i, r) {
            return new m(t, e, i, r)
        }, _ = c._class = function (t, e, i) {
            return e = e || function () {
                }, v(t, [], function () {
                return e
            }, i), e
        };
        v.globals = r;
        var y = [0, 0, 1, 1], x = [], b = _("easing.Ease", function (t, e, i, r) {
            this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? y.concat(e) : y
        }, !0), w = b.map = {}, T = b.register = function (t, e, i, r) {
            for (var s, n, o, a, h = e.split(","), l = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --l > -1;)for (n = h[l], s = r ? _("easing." + n, null, !0) : c.easing[n] || {}, o = u.length; --o > -1;)a = u[o], w[n + "." + a] = w[a + n] = s[a] = t.getRatio ? t : t[a] || new t
        };
        for (o = b.prototype, o._calcEnd = !1, o.getRatio = function (t) {
            if (this._func)return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type, i = this._power, r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
            return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
        }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = s.length; --n > -1;)o = s[n] + ",Power" + n, T(new b(null, null, 1, n), o, "easeOut", !0), T(new b(null, null, 2, n), o, "easeIn" + (0 === n ? ",easeNone" : "")), T(new b(null, null, 3, n), o, "easeInOut");
        w.linear = c.easing.Linear.easeIn, w.swing = c.easing.Quad.easeInOut;
        var L = _("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        o = L.prototype, o.addEventListener = function (t, e, i, r, s) {
            s = s || 0;
            var n, o, l = this._listeners[t], c = 0;
            for (this !== a || h || a.wake(), null == l && (this._listeners[t] = l = []), o = l.length; --o > -1;)n = l[o], n.c === e && n.s === i ? l.splice(o, 1) : 0 === c && n.pr < s && (c = o + 1);
            l.splice(c, 0, {c: e, s: i, up: r, pr: s})
        }, o.removeEventListener = function (t, e) {
            var i, r = this._listeners[t];
            if (r)for (i = r.length; --i > -1;)if (r[i].c === e)return void r.splice(i, 1)
        }, o.dispatchEvent = function (t) {
            var e, i, r, s = this._listeners[t];
            if (s)for (e = s.length, i = this._eventTarget; --e > -1;)r = s[e], r && (r.up ? r.c.call(r.s || i, {
                type: t,
                target: i
            }) : r.c.call(r.s || i))
        };
        var S = t.requestAnimationFrame, E = t.cancelAnimationFrame, P = Date.now || function () {
                return (new Date).getTime()
            }, A = P();
        for (s = ["ms", "moz", "webkit", "o"], n = s.length; --n > -1 && !S;)S = t[s[n] + "RequestAnimationFrame"], E = t[s[n] + "CancelAnimationFrame"] || t[s[n] + "CancelRequestAnimationFrame"];
        _("Ticker", function (t, e) {
            var i, r, s, n, o, l = this, c = P(), d = !(e === !1 || !S) && "auto", f = 500, g = 33, m = "tick", v = function (t) {
                var e, a, h = P() - A;
                h > f && (c += h - g), A += h, l.time = (A - c) / 1e3, e = l.time - o, (!i || e > 0 || t === !0) && (l.frame++, o += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (s = r(v)), a && l.dispatchEvent(m)
            };
            L.call(l), l.time = l.frame = 0, l.tick = function () {
                v(!0)
            }, l.lagSmoothing = function (t, e) {
                f = t || 1 / u, g = Math.min(e, f, 0)
            }, l.sleep = function () {
                null != s && (d && E ? E(s) : clearTimeout(s), r = p, s = null, l === a && (h = !1))
            }, l.wake = function (t) {
                null !== s ? l.sleep() : t ? c += -A + (A = P()) : l.frame > 10 && (A = P() - f + 5), r = 0 === i ? p : d && S ? S : function (t) {
                    return setTimeout(t, 1e3 * (o - l.time) + 1 | 0)
                }, l === a && (h = !0), v(2)
            }, l.fps = function (t) {
                return arguments.length ? (i = t, n = 1 / (i || 60), o = this.time + n, void l.wake()) : i
            }, l.useRAF = function (t) {
                return arguments.length ? (l.sleep(), d = t, void l.fps(i)) : d
            }, l.fps(t), setTimeout(function () {
                "auto" === d && l.frame < 5 && "hidden" !== document.visibilityState && l.useRAF(!1)
            }, 1500)
        }), o = c.Ticker.prototype = new c.events.EventDispatcher, o.constructor = c.Ticker;
        var C = _("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, q) {
                h || a.wake();
                var i = this.vars.useFrames ? z : q;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        a = C.ticker = new c.Ticker, o = C.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
        var R = function () {
            h && P() - A > 2e3 && a.wake(), setTimeout(R, 2e3)
        };
        R(), o.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, o.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, o.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, o.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, o.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, o.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, o.render = function (t, e, i) {
        }, o.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
        }, o.isActive = function () {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
        }, o._enabled = function (t, e) {
            return h || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, o._kill = function (t, e) {
            return this._enabled(!1, !1)
        }, o.kill = function (t, e) {
            return this._kill(t, e), this
        }, o._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;)e._dirty = !0, e = e.timeline;
            return this
        }, o._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
            return i
        }, o._callback = function (t) {
            var e = this.vars;
            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || x)
        }, o.eventCallback = function (t, e, i, r) {
            if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length)return s[t];
                null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = f(i) && i.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(i) : i, s[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, o.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, o.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, o.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, o.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, o.totalTime = function (t, e, i) {
            if (h || a.wake(), !arguments.length)return this._totalTime;
            if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var r = this._totalDuration, s = this._timeline;
                    if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? r - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)for (; s._timeline;)s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (D.length && Q(), this.render(t, e, !1), D.length && Q())
            }
            return this
        }, o.progress = o.totalProgress = function (t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }, o.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, o.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, o.timeScale = function (t) {
            if (!arguments.length)return this._timeScale;
            if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, o.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, o.paused = function (t) {
            if (!arguments.length)return this._paused;
            var e, i, r = this._timeline;
            return t != this._paused && r && (h || t || a.wake(), e = r.rawTime(), i = e - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };
        var M = _("core.SimpleTimeline", function (t) {
            C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        o = M.prototype = new C, o.constructor = M, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function (t, e, i, r) {
            var s, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren)for (n = t._startTime; s && s._startTime > n;)s = s._prev;
            return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this
        }, o._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, o.render = function (t, e, i) {
            var r, s = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; s;)r = s._next, (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = r
        }, o.rawTime = function () {
            return h || a.wake(), this._totalTime
        };
        var O = _("TweenLite", function (e, i, r) {
            if (C.call(this, i, r), this.render = O.prototype.render, null == e)throw"Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : O.selector(e) || e;
            var s, n, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), h = this.vars.overwrite;
            if (this._overwrite = h = null == h ? G[O.defaultOverwrite] : "number" == typeof h ? h >> 0 : G[h], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])for (this._targets = o = d(e), this._propLookup = [], this._siblings = [], s = 0; s < o.length; s++)n = o[s], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (o.splice(s--, 1), this._targets = o = o.concat(d(n))) : (this._siblings[s] = J(n, this, !1), 1 === h && this._siblings[s].length > 1 && K(n, this, null, 1, this._siblings[s])) : (n = o[s--] = O.selector(n), "string" == typeof n && o.splice(s + 1, 1)) : o.splice(s--, 1); else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === h && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(Math.min(0, -this._delay)))
        }, !0), I = function (e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }, B = function (t, e) {
            var i, r = {};
            for (i in t)Y[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!V[i] || V[i] && V[i]._autoCSS) || (r[i] = t[i], delete t[i]);
            t.css = r
        };
        o = O.prototype = new C, o.constructor = O, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, O.version = "1.18.5", O.defaultEase = o._ease = new b(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = a, O.autoSleep = 120, O.lagSmoothing = function (t, e) {
            a.lagSmoothing(t, e)
        }, O.selector = t.$ || t.jQuery || function (e) {
                var i = t.$ || t.jQuery;
                return i ? (O.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
        var D = [], W = {}, N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, j = function (t) {
            for (var e, i = this._firstPT, r = 1e-6; i;)e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : e < r && e > -r && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
        }, F = function (t, e, i, r) {
            var s, n, o, a, h, l, c, u = [t, e], d = 0, p = "", f = 0;
            for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, s = t.match(N) || [], n = e.match(N) || [], r && (r._next = null, r.blob = 1, u._firstPT = r), h = n.length, a = 0; a < h; a++)c = n[a], l = e.substr(d, e.indexOf(c, d) - d), p += l || !a ? l : ",", d += l.length, f ? f = (f + 1) % 5 : "rgba(" === l.substr(-5) && (f = 1), c === s[a] || s.length <= a ? p += c : (p && (u.push(p), p = ""), o = parseFloat(s[a]), u.push(o), u._firstPT = {
                _next: u._firstPT,
                t: u,
                p: u.length - 1,
                s: o,
                c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                f: 0,
                r: f && f < 4
            }), d += c.length;
            return p += e.substr(d), p && u.push(p), u.setRatio = j, u
        }, k = function (t, e, i, r, s, n, o, a) {
            var h, l, c = "get" === i ? t[e] : i, u = typeof t[e], d = "string" == typeof r && "=" === r.charAt(1), p = {
                t: t,
                p: e,
                s: c,
                f: "function" === u,
                pg: 0,
                n: s || e,
                r: n,
                pr: 0,
                c: d ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - c || 0
            };
            if ("number" !== u && ("function" === u && "get" === i && (l = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p.s = c = o ? t[l](o) : t[l]()), "string" == typeof c && (o || isNaN(c)) ? (p.fp = o, h = F(c, r, a || O.defaultStringFilter, p), p = {
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: s || e,
                    pr: 0
                }) : d || (p.s = parseFloat(c), p.c = parseFloat(r) - p.s || 0)), p.c)return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p
        }, U = O._internals = {
            isArray: f,
            isSelector: I,
            lazyTweens: D,
            blobDif: F
        }, V = O._plugins = {}, H = U.tweenLookup = {}, X = 0, Y = U.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1
        }, G = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }, z = C._rootFramesTimeline = new M, q = C._rootTimeline = new M, $ = 30, Q = U.lazyRender = function () {
            var t, e = D.length;
            for (W = {}; --e > -1;)t = D[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            D.length = 0
        };
        q._startTime = a.time, z._startTime = a.frame, q._active = z._active = !0, setTimeout(Q, 1), C._updateRoot = O.render = function () {
            var t, e, i;
            if (D.length && Q(), q.render((a.time - q._startTime) * q._timeScale, !1, !1), z.render((a.frame - z._startTime) * z._timeScale, !1, !1), D.length && Q(), a.frame >= $) {
                $ = a.frame + (parseInt(O.autoSleep, 10) || 120);
                for (i in H) {
                    for (e = H[i].tweens, t = e.length; --t > -1;)e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete H[i]
                }
                if (i = q._first, (!i || i._paused) && O.autoSleep && !z._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;)i = i._next;
                    i || a.sleep()
                }
            }
        }, a.addEventListener("tick", C._updateRoot);
        var J = function (t, e, i) {
            var r, s, n = t._gsTweenID;
            if (H[n || (t._gsTweenID = n = "t" + X++)] || (H[n] = {
                    target: t,
                    tweens: []
                }), e && (r = H[n].tweens, r[s = r.length] = e, i))for (; --s > -1;)r[s] === e && r.splice(s, 1);
            return H[n].tweens
        }, Z = function (t, e, i, r) {
            var s, n, o = t.vars.onOverwrite;
            return o && (s = o(t, e, i, r)), o = O.onOverwrite, o && (n = o(t, e, i, r)), s !== !1 && n !== !1
        }, K = function (t, e, i, r, s) {
            var n, o, a, h;
            if (1 === r || r >= 4) {
                for (h = s.length, n = 0; n < h; n++)if ((a = s[n]) !== e)a._gc || a._kill(null, t, e) && (o = !0); else if (5 === r)break;
                return o
            }
            var l, c = e._startTime + u, d = [], p = 0, f = 0 === e._duration;
            for (n = s.length; --n > -1;)(a = s[n]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (l = l || tt(e, 0, f), 0 === tt(a, l, f) && (d[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((f || !a._initted) && c - a._startTime <= 2e-10 || (d[p++] = a)));
            for (n = p; --n > -1;)if (a = d[n], 2 === r && a._kill(i, t, e) && (o = !0), 2 !== r || !a._firstPT && a._initted) {
                if (2 !== r && !Z(a, e))continue;
                a._enabled(!1, !1) && (o = !0)
            }
            return o
        }, tt = function (t, e, i) {
            for (var r = t._timeline, s = r._timeScale, n = t._startTime; r._timeline;) {
                if (n += r._startTime, s *= r._timeScale, r._paused)return -100;
                r = r._timeline
            }
            return n /= s, n > e ? n - e : i && n === e || !t._initted && n - e < 2 * u ? u : (n += t.totalDuration() / t._timeScale / s) > e + u ? 0 : n - e - u
        };
        o._init = function () {
            var t, e, i, r, s, n = this.vars, o = this._overwrittenProps, a = this._duration, h = !!n.immediateRender, l = n.ease;
            if (n.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
                for (r in n.startAt)s[r] = n.startAt[r];
                if (s.overwrite = !1, s.immediateRender = !0, s.lazy = h && n.lazy !== !1, s.startAt = s.delay = null, this._startAt = O.to(this.target, 0, s), h)if (this._time > 0)this._startAt = null; else if (0 !== a)return
            } else if (n.runBackwards && 0 !== a)if (this._startAt)this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                0 !== this._time && (h = !1), i = {};
                for (r in n)Y[r] && "autoCSS" !== r || (i[r] = n[r]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && n.lazy !== !1, i.immediateRender = h, this._startAt = O.to(this.target, 0, i), h) {
                    if (0 === this._time)return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = l = l ? l instanceof b ? l : "function" == typeof l ? new b(l, n.easeParams) : w[l] || O.defaultEase : O.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)for (t = this._targets.length; --t > -1;)this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (e && O._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)for (i = this._firstPT; i;)i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = n.onUpdate, this._initted = !0
        }, o._initProps = function (e, i, r, s) {
            var n, o, a, h, l, c;
            if (null == e)return !1;
            W[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && V.css && this.vars.autoCSS !== !1 && B(this.vars, e);
            for (n in this.vars)if (c = this.vars[n], Y[n])c && (c instanceof Array || c.push && f(c)) && c.join("").indexOf("{self}") !== -1 && (this.vars[n] = c = this._swapSelfInParams(c, this)); else if (V[n] && (h = new V[n])._onInitTween(e, this.vars[n], this)) {
                for (this._firstPT = l = {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: n,
                    pg: 1,
                    pr: h._priority
                }, o = h._overwriteProps.length; --o > -1;)i[h._overwriteProps[o]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (a = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), l._next && (l._next._prev = l)
            } else i[n] = k.call(this, e, n, "get", c, n, 0, null, this.vars.stringFilter);
            return s && this._kill(s, e) ? this._initProps(e, i, r, s) : this._overwrite > 1 && this._firstPT && r.length > 1 && K(e, this, i, this._overwrite, r) ? (this._kill(i, e), this._initProps(e, i, r, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (W[e._gsTweenID] = !0), a)
        }, o.render = function (t, e, i) {
            var r, s, n, o, a = this._time, h = this._duration, l = this._rawPrevTime;
            if (t >= h - 1e-7)this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (l < 0 || t <= 0 && t >= -1e-7 || l === u && "isPause" !== this.data) && l !== t && (i = !0, l > u && (s = "onReverseComplete")), this._rawPrevTime = o = !e || t || l === t ? t : u); else if (t < 1e-7)this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === h && l > 0) && (s = "onReverseComplete",
                r = this._reversed), t < 0 && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || l === t ? t : u)), this._initted || (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                var c = t / h, d = this._easeType, p = this._easePower;
                (1 === d || 3 === d && c >= .5) && (c = 1 - c), 3 === d && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), 1 === d ? this.ratio = 1 - c : 2 === d ? this.ratio = c : t / h < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2
            } else this.ratio = this._ease.getRatio(t / h);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = this._totalTime = a, this._rawPrevTime = l, D.push(this), void(this._lazy = [t, e]);
                    this._time && !r ? this.ratio = this._ease.getRatio(this._time / h) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== h || e || this._callback("onStart"))), n = this._firstPT; n;)n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                this._onUpdate && (t < 0 && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || r || i) && this._callback("onUpdate")), s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === h && this._rawPrevTime === u && o !== u && (this._rawPrevTime = 0)))
            }
        }, o._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target))return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
            var r, s, n, o, a, h, l, c, u, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((f(e) || I(e)) && "number" != typeof e[0])for (r = e.length; --r > -1;)this._kill(t, e[r], i) && (h = !0); else {
                if (this._targets) {
                    for (r = this._targets.length; --r > -1;)if (e === this._targets[r]) {
                        a = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
                        break
                    }
                } else {
                    if (e !== this.target)return !1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (l = t || a, c = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill), i && (O.onOverwrite || this.vars.onOverwrite)) {
                        for (n in l)a[n] && (u || (u = []), u.push(n));
                        if ((u || !t) && !Z(this, i, e, u))return !1
                    }
                    for (n in l)(o = a[n]) && (d && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, h = !0), o.pg && o.t._kill(l) && (h = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[n]), c && (s[n] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return h
        }, o.invalidate = function () {
            return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(Math.min(0, -this._delay))), this
        }, o._enabled = function (t, e) {
            if (h || a.wake(), t && this._gc) {
                var i, r = this._targets;
                if (r)for (i = r.length; --i > -1;)this._siblings[i] = J(r[i], this, !0); else this._siblings = J(this.target, this, !0)
            }
            return C.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && O._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, O.to = function (t, e, i) {
            return new O(t, e, i)
        }, O.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new O(t, e, i)
        }, O.fromTo = function (t, e, i, r) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new O(t, e, r)
        }, O.delayedCall = function (t, e, i, r, s) {
            return new O(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: r,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: s,
                overwrite: 0
            })
        }, O.set = function (t, e) {
            return new O(t, 0, e)
        }, O.getTweensOf = function (t, e) {
            if (null == t)return [];
            t = "string" != typeof t ? t : O.selector(t) || t;
            var i, r, s, n;
            if ((f(t) || I(t)) && "number" != typeof t[0]) {
                for (i = t.length, r = []; --i > -1;)r = r.concat(O.getTweensOf(t[i], e));
                for (i = r.length; --i > -1;)for (n = r[i], s = i; --s > -1;)n === r[s] && r.splice(i, 1)
            } else for (r = J(t).concat(), i = r.length; --i > -1;)(r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
            return r
        }, O.killTweensOf = O.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var r = O.getTweensOf(t, e), s = r.length; --s > -1;)r[s]._kill(i, t)
        };
        var et = _("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = et.prototype
        }, !0);
        if (o = et.prototype, et.version = "1.18.0", et.API = 2, o._firstPT = null, o._addTween = k, o.setRatio = j, o._kill = function (t) {
                var e, i = this._overwriteProps, r = this._firstPT;
                if (null != t[this._propName])this._overwriteProps = []; else for (e = i.length; --e > -1;)null != t[i[e]] && i.splice(e, 1);
                for (; r;)null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                return !1
            }, o._roundProps = function (t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, O._onPluginEvent = function (t, e) {
                var i, r, s, n, o, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (o = a._next, r = s; r && r.pr > a.pr;)r = r._next;
                        (a._prev = r ? r._prev : n) ? a._prev._next = a : s = a, (a._next = r) ? r._prev = a : n = a, a = o
                    }
                    a = e._firstPT = s
                }
                for (; a;)a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                return i
            }, et.activate = function (t) {
                for (var e = t.length; --e > -1;)t[e].API === et.API && (V[(new t[e])._propName] = t[e]);
                return !0
            }, v.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API))throw"illegal plugin definition.";
                var e, i = t.propName, r = t.priority || 0, s = t.overwriteProps, n = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                }, o = _("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                    et.call(this, i, r), this._overwriteProps = s || []
                }, t.global === !0), a = o.prototype = new et(i);
                a.constructor = o, o.API = t.API;
                for (e in n)"function" == typeof t[e] && (a[n[e]] = t[e]);
                return o.version = t.version, et.activate([o]), o
            }, s = t._gsQueue) {
            for (n = 0; n < s.length; n++)s[n]();
            for (o in g)g[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
        }
        h = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var t = document.documentElement, e = window, i = function (i, r) {
        var s = "x" === r ? "Width" : "Height", n = "scroll" + s, o = "client" + s, a = document.body;
        return i === e || i === t || i === a ? Math.max(t[n], a[n]) - (e["inner" + s] || t[o] || a[o]) : i[n] - i["offset" + s]
    }, r = _gsScope._gsDefine.plugin({
        propName: "scrollTo", API: 2, version: "1.7.6", init: function (t, r, s) {
            return this._wdw = t === e, this._target = t, this._tween = s, "object" != typeof r && (r = {y: r}), this.vars = r, this._autoKill = r.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != r.x ? (this._addTween(this, "x", this.x, "max" === r.x ? i(t, "x") : r.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != r.y ? (this._addTween(this, "y", this.y, "max" === r.y ? i(t, "y") : r.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
        }, set: function (t) {
            this._super.setRatio.call(this, t);
            var r = this._wdw || !this.skipX ? this.getX() : this.xPrev, s = this._wdw || !this.skipY ? this.getY() : this.yPrev, n = s - this.yPrev, o = r - this.xPrev;
            this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (o > 7 || o < -7) && r < i(this._target, "x") && (this.skipX = !0), !this.skipY && (n > 7 || n < -7) && s < i(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? r : this.x, this.skipY ? s : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
        }
    }), s = r.prototype;
    r.max = i, s.getX = function () {
        return this._wdw ? null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, s.getY = function () {
        return this._wdw ? null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, s._kill = function (t) {
        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t) {
    function e(t, e, i, r, s) {
        this._listener = e, this._isOnce = i, this.context = r, this._signal = t, this._priority = s || 0
    }

    function i(t, e) {
        if ("function" != typeof t)throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", e))
    }

    function r() {
        this._bindings = [], this._prevParams = null;
        var t = this;
        this.dispatch = function () {
            r.prototype.dispatch.apply(t, arguments)
        }
    }

    e.prototype = {
        active: !0, params: null, execute: function (t) {
            var e, i;
            return this.active && this._listener && (i = this.params ? this.params.concat(t) : t, e = this._listener.apply(this.context, i), this._isOnce && this.detach()), e
        }, detach: function () {
            return this.isBound() ? this._signal.remove(this._listener, this.context) : null
        }, isBound: function () {
            return !!this._signal && !!this._listener
        }, isOnce: function () {
            return this._isOnce
        }, getListener: function () {
            return this._listener
        }, getSignal: function () {
            return this._signal
        }, _destroy: function () {
            delete this._signal, delete this._listener, delete this.context
        }, toString: function () {
            return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
        }
    }, r.prototype = {
        VERSION: "1.0.0",
        memorize: !1,
        _shouldPropagate: !0,
        active: !0,
        _registerListener: function (t, i, r, s) {
            var n, o = this._indexOfListener(t, r);
            if (o !== -1) {
                if (n = this._bindings[o], n.isOnce() !== i)throw new Error("You cannot add" + (i ? "" : "Once") + "() then add" + (i ? "Once" : "") + "() the same listener without removing the relationship first.")
            } else n = new e(this, t, i, r, s), this._addBinding(n);
            return this.memorize && this._prevParams && n.execute(this._prevParams), n
        },
        _addBinding: function (t) {
            var e = this._bindings.length;
            do--e; while (this._bindings[e] && t._priority <= this._bindings[e]._priority);
            this._bindings.splice(e + 1, 0, t)
        },
        _indexOfListener: function (t, e) {
            for (var i, r = this._bindings.length; r--;)if (i = this._bindings[r], i._listener === t && i.context === e)return r;
            return -1
        },
        has: function (t, e) {
            return this._indexOfListener(t, e) !== -1
        },
        add: function (t, e, r) {
            return i(t, "add"), this._registerListener(t, !1, e, r)
        },
        addOnce: function (t, e, r) {
            return i(t, "addOnce"), this._registerListener(t, !0, e, r)
        },
        remove: function (t, e) {
            i(t, "remove");
            var r = this._indexOfListener(t, e);
            return r !== -1 && (this._bindings[r]._destroy(), this._bindings.splice(r, 1)), t
        },
        removeAll: function () {
            for (var t = this._bindings.length; t--;)this._bindings[t]._destroy();
            this._bindings.length = 0
        },
        getNumListeners: function () {
            return this._bindings.length
        },
        halt: function () {
            this._shouldPropagate = !1
        },
        dispatch: function (t) {
            if (this.active) {
                var e, i = Array.prototype.slice.call(arguments), r = this._bindings.length;
                if (this.memorize && (this._prevParams = i), r) {
                    e = this._bindings.slice(), this._shouldPropagate = !0;
                    do r--; while (e[r] && this._shouldPropagate && e[r].execute(i) !== !1)
                }
            }
        },
        forget: function () {
            this._prevParams = null
        },
        dispose: function () {
            this.removeAll(), delete this._bindings, delete this._prevParams
        },
        toString: function () {
            return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
        }
    };
    var s = r;
    s.Signal = r, "function" == typeof define && define.amd ? define(function () {
        return s
    }) : "undefined" != typeof module && module.exports ? module.exports = s : t.signals = s
}(this), this.createjs = this.createjs || {}, function () {
    "use strict";
    var t = createjs.PreloadJS = createjs.PreloadJS || {};
    t.version = "0.6.2", t.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
}(), this.createjs = this.createjs || {}, createjs.extend = function (t, e) {
    "use strict";
    function i() {
        this.constructor = t
    }

    return i.prototype = e.prototype, t.prototype = new i
}, this.createjs = this.createjs || {}, createjs.promote = function (t, e) {
    "use strict";
    var i = t.prototype, r = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
    if (r) {
        i[(e += "_") + "constructor"] = r.constructor;
        for (var s in r)i.hasOwnProperty(s) && "function" == typeof r[s] && (i[e + s] = r[s])
    }
    return t
}, this.createjs = this.createjs || {}, function () {
    "use strict";
    createjs.proxy = function (t, e) {
        var i = Array.prototype.slice.call(arguments, 2);
        return function () {
            return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(i))
        }
    }
}(), this.createjs = this.createjs || {}, createjs.indexOf = function (t, e) {
    "use strict";
    for (var i = 0, r = t.length; i < r; i++)if (e === t[i])return i;
    return -1
}, this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e, i) {
        this.type = t, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!e, this.cancelable = !!i, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
    }

    var e = t.prototype;
    e.preventDefault = function () {
        this.defaultPrevented = this.cancelable && !0
    }, e.stopPropagation = function () {
        this.propagationStopped = !0
    }, e.stopImmediatePropagation = function () {
        this.immediatePropagationStopped = this.propagationStopped = !0
    }, e.remove = function () {
        this.removed = !0
    }, e.clone = function () {
        return new t(this.type, this.bubbles, this.cancelable)
    }, e.set = function (t) {
        for (var e in t)this[e] = t[e];
        return this
    }, e.toString = function () {
        return "[Event (type=" + this.type + ")]"
    }, createjs.Event = t
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e, i) {
        this.Event_constructor("error"), this.title = t, this.message = e, this.data = i
    }

    var e = createjs.extend(t, createjs.Event);
    e.clone = function () {
        return new createjs.ErrorEvent(this.title, this.message, this.data)
    }, createjs.ErrorEvent = createjs.promote(t, "Event")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t() {
        this._listeners = null, this._captureListeners = null
    }

    var e = t.prototype;
    t.initialize = function (t) {
        t.addEventListener = e.addEventListener, t.on = e.on, t.removeEventListener = t.off = e.removeEventListener, t.removeAllEventListeners = e.removeAllEventListeners, t.hasEventListener = e.hasEventListener, t.dispatchEvent = e.dispatchEvent, t._dispatchEvent = e._dispatchEvent, t.willTrigger = e.willTrigger
    }, e.addEventListener = function (t, e, i) {
        var r;
        r = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
        var s = r[t];
        return s && this.removeEventListener(t, e, i), s = r[t], s ? s.push(e) : r[t] = [e], e
    }, e.on = function (t, e, i, r, s, n) {
        return e.handleEvent && (i = i || e, e = e.handleEvent), i = i || this, this.addEventListener(t, function (t) {
            e.call(i, t, s), r && t.remove()
        }, n)
    }, e.removeEventListener = function (t, e, i) {
        var r = i ? this._captureListeners : this._listeners;
        if (r) {
            var s = r[t];
            if (s)for (var n = 0, o = s.length; n < o; n++)if (s[n] == e) {
                1 == o ? delete r[t] : s.splice(n, 1);
                break
            }
        }
    }, e.off = e.removeEventListener, e.removeAllEventListeners = function (t) {
        t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
    }, e.dispatchEvent = function (t, e, i) {
        if ("string" == typeof t) {
            var r = this._listeners;
            if (!(e || r && r[t]))return !0;
            t = new createjs.Event(t, e, i)
        } else t.target && t.clone && (t = t.clone());
        try {
            t.target = this
        } catch (s) {
        }
        if (t.bubbles && this.parent) {
            for (var n = this, o = [n]; n.parent;)o.push(n = n.parent);
            var a, h = o.length;
            for (a = h - 1; a >= 0 && !t.propagationStopped; a--)o[a]._dispatchEvent(t, 1 + (0 == a));
            for (a = 1; a < h && !t.propagationStopped; a++)o[a]._dispatchEvent(t, 3)
        } else this._dispatchEvent(t, 2);
        return !t.defaultPrevented
    }, e.hasEventListener = function (t) {
        var e = this._listeners, i = this._captureListeners;
        return !!(e && e[t] || i && i[t])
    }, e.willTrigger = function (t) {
        for (var e = this; e;) {
            if (e.hasEventListener(t))return !0;
            e = e.parent
        }
        return !1
    }, e.toString = function () {
        return "[EventDispatcher]"
    }, e._dispatchEvent = function (t, e) {
        var i, r = 1 == e ? this._captureListeners : this._listeners;
        if (t && r) {
            var s = r[t.type];
            if (!s || !(i = s.length))return;
            try {
                t.currentTarget = this
            } catch (n) {
            }
            try {
                t.eventPhase = e
            } catch (n) {
            }
            t.removed = !1, s = s.slice();
            for (var o = 0; o < i && !t.immediatePropagationStopped; o++) {
                var a = s[o];
                a.handleEvent ? a.handleEvent(t) : a(t), t.removed && (this.off(t.type, a, 1 == e), t.removed = !1)
            }
        }
    }, createjs.EventDispatcher = t
}(), this.createjs = this.createjs || {}, function (t) {
    "use strict";
    function e(t, e) {
        this.Event_constructor("progress"), this.loaded = t, this.total = null == e ? 1 : e, this.progress = 0 == e ? 0 : this.loaded / this.total
    }

    var i = createjs.extend(e, createjs.Event);
    i.clone = function () {
        return new createjs.ProgressEvent(this.loaded, this.total)
    }, createjs.ProgressEvent = createjs.promote(e, "Event")
}(window), function () {
    function t(e, r) {
        function n(t) {
            if (n[t] !== m)return n[t];
            var e;
            if ("bug-string-char-index" == t)e = "a" != "a"[0]; else if ("json" == t)e = n("json-stringify") && n("json-parse"); else {
                var i, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                if ("json-stringify" == t) {
                    var h = r.stringify, c = "function" == typeof h && y;
                    if (c) {
                        (i = function () {
                            return 1
                        }).toJSON = i;
                        try {
                            c = "0" === h(0) && "0" === h(new o) && '""' == h(new a) && h(_) === m && h(m) === m && h() === m && "1" === h(i) && "[1]" == h([i]) && "[null]" == h([m]) && "null" == h(null) && "[null,null,null]" == h([m, _, null]) && h({a: [i, !0, !1, null, "\0\b\n\f\r\t"]}) == s && "1" === h(null, i) && "[\n 1,\n 2\n]" == h([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == h(new l((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == h(new l(864e13)) && '"-000001-01-01T00:00:00.000Z"' == h(new l((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == h(new l((-1)))
                        } catch (u) {
                            c = !1
                        }
                    }
                    e = c
                }
                if ("json-parse" == t) {
                    var d = r.parse;
                    if ("function" == typeof d)try {
                        if (0 === d("0") && !d(!1)) {
                            i = d(s);
                            var p = 5 == i.a.length && 1 === i.a[0];
                            if (p) {
                                try {
                                    p = !d('"\t"')
                                } catch (u) {
                                }
                                if (p)try {
                                    p = 1 !== d("01")
                                } catch (u) {
                                }
                                if (p)try {
                                    p = 1 !== d("1.")
                                } catch (u) {
                                }
                            }
                        }
                    } catch (u) {
                        p = !1
                    }
                    e = p
                }
            }
            return n[t] = !!e
        }

        e || (e = s.Object()), r || (r = s.Object());
        var o = e.Number || s.Number, a = e.String || s.String, h = e.Object || s.Object, l = e.Date || s.Date, c = e.SyntaxError || s.SyntaxError, u = e.TypeError || s.TypeError, d = e.Math || s.Math, p = e.JSON || s.JSON;
        "object" == typeof p && p && (r.stringify = p.stringify, r.parse = p.parse);
        var f, g, m, v = h.prototype, _ = v.toString, y = new l((-0xc782b5b800cec));
        try {
            y = y.getUTCFullYear() == -109252 && 0 === y.getUTCMonth() && 1 === y.getUTCDate() && 10 == y.getUTCHours() && 37 == y.getUTCMinutes() && 6 == y.getUTCSeconds() && 708 == y.getUTCMilliseconds()
        } catch (x) {
        }
        if (!n("json")) {
            var b = "[object Function]", w = "[object Date]", T = "[object Number]", L = "[object String]", S = "[object Array]", E = "[object Boolean]", P = n("bug-string-char-index");
            if (!y)var A = d.floor, C = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], R = function (t, e) {
                return C[e] + 365 * (t - 1970) + A((t - 1969 + (e = +(e > 1))) / 4) - A((t - 1901 + e) / 100) + A((t - 1601 + e) / 400)
            };
            if ((f = v.hasOwnProperty) || (f = function (t) {
                    var e, i = {};
                    return (i.__proto__ = null, i.__proto__ = {toString: 1}, i).toString != _ ? f = function (t) {
                        var e = this.__proto__, i = t in (this.__proto__ = null, this);
                        return this.__proto__ = e, i
                    } : (e = i.constructor, f = function (t) {
                        var i = (this.constructor || e).prototype;
                        return t in this && !(t in i && this[t] === i[t])
                    }), i = null, f.call(this, t)
                }), g = function (t, e) {
                    var r, s, n, o = 0;
                    (r = function () {
                        this.valueOf = 0
                    }).prototype.valueOf = 0, s = new r;
                    for (n in s)f.call(s, n) && o++;
                    return r = s = null, o ? g = 2 == o ? function (t, e) {
                        var i, r = {}, s = _.call(t) == b;
                        for (i in t)s && "prototype" == i || f.call(r, i) || !(r[i] = 1) || !f.call(t, i) || e(i)
                    } : function (t, e) {
                        var i, r, s = _.call(t) == b;
                        for (i in t)s && "prototype" == i || !f.call(t, i) || (r = "constructor" === i) || e(i);
                        (r || f.call(t, i = "constructor")) && e(i)
                    } : (s = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], g = function (t, e) {
                        var r, n, o = _.call(t) == b, a = !o && "function" != typeof t.constructor && i[typeof t.hasOwnProperty] && t.hasOwnProperty || f;
                        for (r in t)o && "prototype" == r || !a.call(t, r) || e(r);
                        for (n = s.length; r = s[--n]; a.call(t, r) && e(r));
                    }), g(t, e)
                }, !n("json-stringify")) {
                var M = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                }, O = "000000", I = function (t, e) {
                    return (O + (e || 0)).slice(-t)
                }, B = "\\u00", D = function (t) {
                    for (var e = '"', i = 0, r = t.length, s = !P || r > 10, n = s && (P ? t.split("") : t); i < r; i++) {
                        var o = t.charCodeAt(i);
                        switch (o) {
                            case 8:
                            case 9:
                            case 10:
                            case 12:
                            case 13:
                            case 34:
                            case 92:
                                e += M[o];
                                break;
                            default:
                                if (o < 32) {
                                    e += B + I(2, o.toString(16));
                                    break
                                }
                                e += s ? n[i] : t.charAt(i)
                        }
                    }
                    return e + '"'
                }, W = function (t, e, i, r, s, n, o) {
                    var a, h, l, c, d, p, v, y, x, b, P, C, M, O, B, N;
                    try {
                        a = e[t]
                    } catch (j) {
                    }
                    if ("object" == typeof a && a)if (h = _.call(a), h != w || f.call(a, "toJSON"))"function" == typeof a.toJSON && (h != T && h != L && h != S || f.call(a, "toJSON")) && (a = a.toJSON(t)); else if (a > -1 / 0 && a < 1 / 0) {
                        if (R) {
                            for (d = A(a / 864e5), l = A(d / 365.2425) + 1970 - 1; R(l + 1, 0) <= d; l++);
                            for (c = A((d - R(l, 0)) / 30.42); R(l, c + 1) <= d; c++);
                            d = 1 + d - R(l, c), p = (a % 864e5 + 864e5) % 864e5, v = A(p / 36e5) % 24, y = A(p / 6e4) % 60, x = A(p / 1e3) % 60, b = p % 1e3
                        } else l = a.getUTCFullYear(), c = a.getUTCMonth(), d = a.getUTCDate(), v = a.getUTCHours(), y = a.getUTCMinutes(), x = a.getUTCSeconds(), b = a.getUTCMilliseconds();
                        a = (l <= 0 || l >= 1e4 ? (l < 0 ? "-" : "+") + I(6, l < 0 ? -l : l) : I(4, l)) + "-" + I(2, c + 1) + "-" + I(2, d) + "T" + I(2, v) + ":" + I(2, y) + ":" + I(2, x) + "." + I(3, b) + "Z"
                    } else a = null;
                    if (i && (a = i.call(e, t, a)), null === a)return "null";
                    if (h = _.call(a), h == E)return "" + a;
                    if (h == T)return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                    if (h == L)return D("" + a);
                    if ("object" == typeof a) {
                        for (O = o.length; O--;)if (o[O] === a)throw u();
                        if (o.push(a), P = [], B = n, n += s, h == S) {
                            for (M = 0, O = a.length; M < O; M++)C = W(M, a, i, r, s, n, o), P.push(C === m ? "null" : C);
                            N = P.length ? s ? "[\n" + n + P.join(",\n" + n) + "\n" + B + "]" : "[" + P.join(",") + "]" : "[]"
                        } else g(r || a, function (t) {
                            var e = W(t, a, i, r, s, n, o);
                            e !== m && P.push(D(t) + ":" + (s ? " " : "") + e)
                        }), N = P.length ? s ? "{\n" + n + P.join(",\n" + n) + "\n" + B + "}" : "{" + P.join(",") + "}" : "{}";
                        return o.pop(), N
                    }
                };
                r.stringify = function (t, e, r) {
                    var s, n, o, a;
                    if (i[typeof e] && e)if ((a = _.call(e)) == b)n = e; else if (a == S) {
                        o = {};
                        for (var h, l = 0, c = e.length; l < c; h = e[l++], a = _.call(h), (a == L || a == T) && (o[h] = 1));
                    }
                    if (r)if ((a = _.call(r)) == T) {
                        if ((r -= r % 1) > 0)for (s = "", r > 10 && (r = 10); s.length < r; s += " ");
                    } else a == L && (s = r.length <= 10 ? r : r.slice(0, 10));
                    return W("", (h = {}, h[""] = t, h), n, o, s, "", [])
                }
            }
            if (!n("json-parse")) {
                var N, j, F = a.fromCharCode, k = {
                    92: "\\",
                    34: '"',
                    47: "/",
                    98: "\b",
                    116: "\t",
                    110: "\n",
                    102: "\f",
                    114: "\r"
                }, U = function () {
                    throw N = j = null, c()
                }, V = function () {
                    for (var t, e, i, r, s, n = j, o = n.length; N < o;)switch (s = n.charCodeAt(N)) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            N++;
                            break;
                        case 123:
                        case 125:
                        case 91:
                        case 93:
                        case 58:
                        case 44:
                            return t = P ? n.charAt(N) : n[N], N++, t;
                        case 34:
                            for (t = "@", N++; N < o;)if (s = n.charCodeAt(N), s < 32)U(); else if (92 == s)switch (s = n.charCodeAt(++N)) {
                                case 92:
                                case 34:
                                case 47:
                                case 98:
                                case 116:
                                case 110:
                                case 102:
                                case 114:
                                    t += k[s], N++;
                                    break;
                                case 117:
                                    for (e = ++N, i = N + 4; N < i; N++)s = n.charCodeAt(N), s >= 48 && s <= 57 || s >= 97 && s <= 102 || s >= 65 && s <= 70 || U();
                                    t += F("0x" + n.slice(e, N));
                                    break;
                                default:
                                    U()
                            } else {
                                if (34 == s)break;
                                for (s = n.charCodeAt(N), e = N; s >= 32 && 92 != s && 34 != s;)s = n.charCodeAt(++N);
                                t += n.slice(e, N)
                            }
                            if (34 == n.charCodeAt(N))return N++, t;
                            U();
                        default:
                            if (e = N, 45 == s && (r = !0, s = n.charCodeAt(++N)), s >= 48 && s <= 57) {
                                for (48 == s && (s = n.charCodeAt(N + 1), s >= 48 && s <= 57) && U(), r = !1; N < o && (s = n.charCodeAt(N), s >= 48 && s <= 57); N++);
                                if (46 == n.charCodeAt(N)) {
                                    for (i = ++N; i < o && (s = n.charCodeAt(i), s >= 48 && s <= 57); i++);
                                    i == N && U(), N = i
                                }
                                if (s = n.charCodeAt(N), 101 == s || 69 == s) {
                                    for (s = n.charCodeAt(++N), 43 != s && 45 != s || N++, i = N; i < o && (s = n.charCodeAt(i), s >= 48 && s <= 57); i++);
                                    i == N && U(), N = i
                                }
                                return +n.slice(e, N)
                            }
                            if (r && U(), "true" == n.slice(N, N + 4))return N += 4, !0;
                            if ("false" == n.slice(N, N + 5))return N += 5, !1;
                            if ("null" == n.slice(N, N + 4))return N += 4, null;
                            U()
                    }
                    return "$"
                }, H = function (t) {
                    var e, i;
                    if ("$" == t && U(), "string" == typeof t) {
                        if ("@" == (P ? t.charAt(0) : t[0]))return t.slice(1);
                        if ("[" == t) {
                            for (e = []; t = V(), "]" != t; i || (i = !0))i && ("," == t ? (t = V(), "]" == t && U()) : U()), "," == t && U(), e.push(H(t));
                            return e
                        }
                        if ("{" == t) {
                            for (e = {}; t = V(), "}" != t; i || (i = !0))i && ("," == t ? (t = V(), "}" == t && U()) : U()), "," != t && "string" == typeof t && "@" == (P ? t.charAt(0) : t[0]) && ":" == V() || U(), e[t.slice(1)] = H(V());
                            return e
                        }
                        U()
                    }
                    return t
                }, X = function (t, e, i) {
                    var r = Y(t, e, i);
                    r === m ? delete t[e] : t[e] = r
                }, Y = function (t, e, i) {
                    var r, s = t[e];
                    if ("object" == typeof s && s)if (_.call(s) == S)for (r = s.length; r--;)X(s, r, i); else g(s, function (t) {
                        X(s, t, i)
                    });
                    return i.call(t, e, s)
                };
                r.parse = function (t, e) {
                    var i, r;
                    return N = 0, j = "" + t, i = H(V()), "$" != V() && U(), N = j = null, e && _.call(e) == b ? Y((r = {}, r[""] = i, r), "", e) : i
                }
            }
        }
        return r.runInContext = t, r
    }

    var e = "function" == typeof define && define.amd, i = {
        "function": !0,
        object: !0
    }, r = i[typeof exports] && exports && !exports.nodeType && exports, s = i[typeof window] && window || this, n = r && i[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    if (!n || n.global !== n && n.window !== n && n.self !== n || (s = n), r && !e)t(s, r); else {
        var o = s.JSON, a = s.JSON3, h = !1, l = t(s, s.JSON3 = {
            noConflict: function () {
                return h || (h = !0, s.JSON = o, s.JSON3 = a, o = a = null), l
            }
        });
        s.JSON = {parse: l.parse, stringify: l.stringify}
    }
    e && define(function () {
        return l
    })
}.call(this), function () {
    var t = {};
    t.appendToHead = function (e) {
        t.getHead().appendChild(e)
    }, t.getHead = function () {
        return document.head || document.getElementsByTagName("head")[0]
    }, t.getBody = function () {
        return document.body || document.getElementsByTagName("body")[0]
    }, createjs.DomUtils = t
}(), function () {
    var t = {};
    t.parseXML = function (t, e) {
        var i = null;
        try {
            if (window.DOMParser) {
                var r = new DOMParser;
                i = r.parseFromString(t, e)
            }
        } catch (s) {
        }
        if (!i)try {
            i = new ActiveXObject("Microsoft.XMLDOM"), i.async = !1, i.loadXML(t)
        } catch (s) {
            i = null
        }
        return i
    }, t.parseJSON = function (t) {
        if (null == t)return null;
        try {
            return JSON.parse(t)
        } catch (e) {
            throw e
        }
    }, createjs.DataUtils = t
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t() {
        this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.LoadItem.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = i.LOAD_TIMEOUT_DEFAULT
    }

    var e = t.prototype = {}, i = t;
    i.LOAD_TIMEOUT_DEFAULT = 8e3, i.create = function (e) {
        if ("string" == typeof e) {
            var r = new t;
            return r.src = e, r
        }
        if (e instanceof i)return e;
        if (e instanceof Object && e.src)return null == e.loadTimeout && (e.loadTimeout = i.LOAD_TIMEOUT_DEFAULT), e;
        throw new Error("Type not recognized.")
    }, e.set = function (t) {
        for (var e in t)this[e] = t[e];
        return this
    }, createjs.LoadItem = i
}(), function () {
    var t = {};
    t.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, t.RELATIVE_PATT = /^[.\/]*?\//i, t.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i, t.parseURI = function (e) {
        var i = {absolute: !1, relative: !1};
        if (null == e)return i;
        var r = e.indexOf("?");
        r > -1 && (e = e.substr(0, r));
        var s;
        return t.ABSOLUTE_PATT.test(e) ? i.absolute = !0 : t.RELATIVE_PATT.test(e) && (i.relative = !0), (s = e.match(t.EXTENSION_PATT)) && (i.extension = s[1].toLowerCase()), i
    }, t.formatQueryString = function (t, e) {
        if (null == t)throw new Error("You must specify data.");
        var i = [];
        for (var r in t)i.push(r + "=" + escape(t[r]));
        return e && (i = i.concat(e)), i.join("&")
    }, t.buildPath = function (t, e) {
        if (null == e)return t;
        var i = [], r = t.indexOf("?");
        if (r != -1) {
            var s = t.slice(r + 1);
            i = i.concat(s.split("&"))
        }
        return r != -1 ? t.slice(0, r) + "?" + this.formatQueryString(e, i) : t + "?" + this.formatQueryString(e, i)
    }, t.isCrossDomain = function (t) {
        var e = document.createElement("a");
        e.href = t.src;
        var i = document.createElement("a");
        i.href = location.href;
        var r = "" != e.hostname && (e.port != i.port || e.protocol != i.protocol || e.hostname != i.hostname);
        return r
    }, t.isLocal = function (t) {
        var e = document.createElement("a");
        return e.href = t.src, "" == e.hostname && "file:" == e.protocol
    }, t.isBinary = function (t) {
        switch (t) {
            case createjs.AbstractLoader.IMAGE:
            case createjs.AbstractLoader.BINARY:
                return !0;
            default:
                return !1
        }
    }, t.isImageTag = function (t) {
        return t instanceof HTMLImageElement
    }, t.isAudioTag = function (t) {
        return !!window.HTMLAudioElement && t instanceof HTMLAudioElement
    }, t.isVideoTag = function (t) {
        return !!window.HTMLVideoElement && t instanceof HTMLVideoElement
    }, t.isText = function (t) {
        switch (t) {
            case createjs.AbstractLoader.TEXT:
            case createjs.AbstractLoader.JSON:
            case createjs.AbstractLoader.MANIFEST:
            case createjs.AbstractLoader.XML:
            case createjs.AbstractLoader.CSS:
            case createjs.AbstractLoader.SVG:
            case createjs.AbstractLoader.JAVASCRIPT:
            case createjs.AbstractLoader.SPRITESHEET:
                return !0;
            default:
                return !1
        }
    }, t.getTypeByExtension = function (t) {
        if (null == t)return createjs.AbstractLoader.TEXT;
        switch (t.toLowerCase()) {
            case"jpeg":
            case"jpg":
            case"gif":
            case"png":
            case"webp":
            case"bmp":
                return createjs.AbstractLoader.IMAGE;
            case"ogg":
            case"mp3":
            case"webm":
                return createjs.AbstractLoader.SOUND;
            case"mp4":
            case"webm":
            case"ts":
                return createjs.AbstractLoader.VIDEO;
            case"json":
                return createjs.AbstractLoader.JSON;
            case"xml":
                return createjs.AbstractLoader.XML;
            case"css":
                return createjs.AbstractLoader.CSS;
            case"js":
                return createjs.AbstractLoader.JAVASCRIPT;
            case"svg":
                return createjs.AbstractLoader.SVG;
            default:
                return createjs.AbstractLoader.TEXT
        }
    }, createjs.RequestUtils = t
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e, i) {
        this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = i, this.resultFormatter = null, t ? this._item = createjs.LoadItem.create(t) : this._item = null, this._preferXHR = e, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null
    }

    var e = createjs.extend(t, createjs.EventDispatcher), i = t;
    i.POST = "POST", i.GET = "GET", i.BINARY = "binary", i.CSS = "css", i.IMAGE = "image", i.JAVASCRIPT = "javascript", i.JSON = "json", i.JSONP = "jsonp", i.MANIFEST = "manifest", i.SOUND = "sound", i.VIDEO = "video", i.SPRITESHEET = "spritesheet", i.SVG = "svg", i.TEXT = "text", i.XML = "xml", e.getItem = function () {
        return this._item
    }, e.getResult = function (t) {
        return t ? this._rawResult : this._result
    }, e.getTag = function () {
        return this._tag
    }, e.setTag = function (t) {
        this._tag = t
    }, e.load = function () {
        this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
        var t = new createjs.Event("initialize");
        t.loader = this._request, this.dispatchEvent(t), this._request.load()
    }, e.cancel = function () {
        this.canceled = !0, this.destroy()
    }, e.destroy = function () {
        this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners()
    }, e.getLoadedItems = function () {
        return this._loadedItems
    }, e._createRequest = function () {
        this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
    }, e._createTag = function (t) {
        return null
    }, e._sendLoadStart = function () {
        this._isCanceled() || this.dispatchEvent("loadstart")
    }, e._sendProgress = function (t) {
        if (!this._isCanceled()) {
            var e = null;
            "number" == typeof t ? (this.progress = t, e = new createjs.ProgressEvent(this.progress)) : (e = t, this.progress = t.loaded / t.total, e.progress = this.progress, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(e)
        }
    }, e._sendComplete = function () {
        if (!this._isCanceled()) {
            this.loaded = !0;
            var t = new createjs.Event("complete");
            t.rawResult = this._rawResult, null != this._result && (t.result = this._result), this.dispatchEvent(t)
        }
    }, e._sendError = function (t) {
        !this._isCanceled() && this.hasEventListener("error") && (null == t && (t = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(t))
    }, e._isCanceled = function () {
        return !(null != window.createjs && !this.canceled)
    }, e.resultFormatter = null, e.handleEvent = function (t) {
        switch (t.type) {
            case"complete":
                this._rawResult = t.target._response;
                var e = this.resultFormatter && this.resultFormatter(this);
                e instanceof Function ? e.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = e || this._rawResult, this._sendComplete());
                break;
            case"progress":
                this._sendProgress(t);
                break;
            case"error":
                this._sendError(t);
                break;
            case"loadstart":
                this._sendLoadStart();
                break;
            case"abort":
            case"timeout":
                this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + t.type.toUpperCase() + "_ERROR"))
        }
    }, e._resultFormatSuccess = function (t) {
        this._result = t, this._sendComplete()
    }, e._resultFormatFailed = function (t) {
        this._sendError(t)
    }, e.buildPath = function (t, e) {
        return createjs.RequestUtils.buildPath(t, e)
    }, e.toString = function () {
        return "[PreloadJS AbstractLoader]"
    }, createjs.AbstractLoader = createjs.promote(t, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e, i) {
        this.AbstractLoader_constructor(t, e, i),
            this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this)
    }

    var e = createjs.extend(t, createjs.AbstractLoader);
    e.load = function () {
        this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load()
    }, e._createTag = function () {
    }, e._createRequest = function () {
        this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
    }, e._updateXHR = function (t) {
        t.loader.setResponseType && t.loader.setResponseType("blob")
    }, e._formatResult = function (t) {
        if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
            var e = window.URL || window.webkitURL, i = t.getResult(!0);
            t.getTag().src = e.createObjectURL(i)
        }
        return t.getTag()
    }, createjs.AbstractMediaLoader = createjs.promote(t, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    var t = function (t) {
        this._item = t
    }, e = createjs.extend(t, createjs.EventDispatcher);
    e.load = function () {
    }, e.destroy = function () {
    }, e.cancel = function () {
    }, createjs.AbstractRequest = createjs.promote(t, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e, i) {
        this.AbstractRequest_constructor(t), this._tag = e, this._tagSrcAttribute = i, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1, this._startTagVisibility = null
    }

    var e = createjs.extend(t, createjs.AbstractRequest);
    e.load = function () {
        this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);
        var t = new createjs.Event("initialize");
        t.loader = this._tag, this.dispatchEvent(t), this._hideTag(), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, null == this._tag.parentNode && (window.document.body.appendChild(this._tag), this._addedToDOM = !0)
    }, e.destroy = function () {
        this._clean(), this._tag = null, this.AbstractRequest_destroy()
    }, e._handleReadyStateChange = function () {
        clearTimeout(this._loadTimeout);
        var t = this._tag;
        "loaded" != t.readyState && "complete" != t.readyState || this._handleTagComplete()
    }, e._handleError = function () {
        this._clean(), this.dispatchEvent("error")
    }, e._handleTagComplete = function () {
        this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this._showTag(), this.dispatchEvent("complete")
    }, e._handleTimeout = function () {
        this._clean(), this.dispatchEvent(new createjs.Event("timeout"))
    }, e._clean = function () {
        this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout)
    }, e._hideTag = function () {
        this._startTagVisibility = this._tag.style.visibility, this._tag.style.visibility = "hidden"
    }, e._showTag = function () {
        this._tag.style.visibility = this._startTagVisibility
    }, e._handleStalled = function () {
    }, createjs.TagRequest = createjs.promote(t, "AbstractRequest")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e, i) {
        this.AbstractRequest_constructor(t), this._tag = e, this._tagSrcAttribute = i, this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
    }

    var e = createjs.extend(t, createjs.TagRequest);
    e.load = function () {
        var t = createjs.proxy(this._handleStalled, this);
        this._stalledCallback = t;
        var e = createjs.proxy(this._handleProgress, this);
        this._handleProgress = e, this._tag.addEventListener("stalled", t), this._tag.addEventListener("progress", e), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load()
    }, e._handleReadyStateChange = function () {
        clearTimeout(this._loadTimeout);
        var t = this._tag;
        "loaded" != t.readyState && "complete" != t.readyState || this._handleTagComplete()
    }, e._handleStalled = function () {
    }, e._handleProgress = function (t) {
        if (t && !(t.loaded > 0 && 0 == t.total)) {
            var e = new createjs.ProgressEvent(t.loaded, t.total);
            this.dispatchEvent(e)
        }
    }, e._clean = function () {
        this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean()
    }, createjs.MediaTagRequest = createjs.promote(t, "TagRequest")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t) {
        this.AbstractRequest_constructor(t), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), !this._createXHR(t)
    }

    var e = createjs.extend(t, createjs.AbstractRequest);
    t.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], e.getResult = function (t) {
        return t && this._rawResponse ? this._rawResponse : this._response
    }, e.cancel = function () {
        this.canceled = !0, this._clean(), this._request.abort()
    }, e.load = function () {
        if (null == this._request)return void this._handleError();
        null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
        try {
            this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send()
        } catch (t) {
            this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, t))
        }
    }, e.setResponseType = function (t) {
        "blob" === t && (t = window.URL ? "blob" : "arraybuffer", this._responseType = t), this._request.responseType = t
    }, e.getAllResponseHeaders = function () {
        return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
    }, e.getResponseHeader = function (t) {
        return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(t) : null
    }, e._handleProgress = function (t) {
        if (t && !(t.loaded > 0 && 0 == t.total)) {
            var e = new createjs.ProgressEvent(t.loaded, t.total);
            this.dispatchEvent(e)
        }
    }, e._handleLoadStart = function (t) {
        clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart")
    }, e._handleAbort = function (t) {
        this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, t))
    }, e._handleError = function (t) {
        this._clean(), this.dispatchEvent(new createjs.ErrorEvent(t.message))
    }, e._handleReadyStateChange = function (t) {
        4 == this._request.readyState && this._handleLoad()
    }, e._handleLoad = function (t) {
        if (!this.loaded) {
            this.loaded = !0;
            var e = this._checkError();
            if (e)return void this._handleError(e);
            if (this._response = this._getResponse(), "arraybuffer" === this._responseType)try {
                this._response = new Blob([this._response])
            } catch (i) {
                if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === i.name && window.BlobBuilder) {
                    var r = new BlobBuilder;
                    r.append(this._response), this._response = r.getBlob()
                }
            }
            this._clean(), this.dispatchEvent(new createjs.Event("complete"))
        }
    }, e._handleTimeout = function (t) {
        this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, t))
    }, e._checkError = function () {
        var t = parseInt(this._request.status);
        switch (t) {
            case 404:
            case 0:
                return new Error(t)
        }
        return null
    }, e._getResponse = function () {
        if (null != this._response)return this._response;
        if (null != this._request.response)return this._request.response;
        try {
            if (null != this._request.responseText)return this._request.responseText
        } catch (t) {
        }
        try {
            if (null != this._request.responseXML)return this._request.responseXML
        } catch (t) {
        }
        return null
    }, e._createXHR = function (t) {
        var e = createjs.RequestUtils.isCrossDomain(t), i = {}, r = null;
        if (window.XMLHttpRequest)r = new XMLHttpRequest, e && void 0 === r.withCredentials && window.XDomainRequest && (r = new XDomainRequest); else {
            for (var n = 0, o = s.ACTIVEX_VERSIONS.length; n < o; n++) {
                var a = s.ACTIVEX_VERSIONS[n];
                try {
                    r = new ActiveXObject(a);
                    break
                } catch (h) {
                }
            }
            if (null == r)return !1
        }
        null == t.mimeType && createjs.RequestUtils.isText(t.type) && (t.mimeType = "text/plain; charset=utf-8"), t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), this._xhrLevel = "string" == typeof r.responseType ? 2 : 1;
        var l = null;
        if (l = t.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(t.src, t.values) : t.src, r.open(t.method || createjs.AbstractLoader.GET, l, !0), e && r instanceof XMLHttpRequest && 1 == this._xhrLevel && (i.Origin = location.origin), t.values && t.method == createjs.AbstractLoader.POST && (i["Content-Type"] = "application/x-www-form-urlencoded"), e || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), t.headers)for (var c in t.headers)i[c] = t.headers[c];
        for (c in i)r.setRequestHeader(c, i[c]);
        return r instanceof XMLHttpRequest && void 0 !== t.withCredentials && (r.withCredentials = t.withCredentials), this._request = r, !0
    }, e._clean = function () {
        clearTimeout(this._loadTimeout), null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null)
    }, e.toString = function () {
        return "[PreloadJS XHRRequest]"
    }, createjs.XHRRequest = createjs.promote(t, "AbstractRequest")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e, i) {
        this.AbstractLoader_constructor(), this._plugins = [], this._typeCallbacks = {}, this._extensionCallbacks = {}, this.next = null, this.maintainScriptOrder = !0, this.stopOnError = !1, this._maxConnections = 1, this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader], this._defaultLoaderLength = this._availableLoaders.length, this.init(t, e, i)
    }

    var e = createjs.extend(t, createjs.AbstractLoader), i = t;
    e.init = function (t, e, i) {
        this.useXHR = !0, this.preferXHR = !0, this._preferXHR = !0, this.setPreferXHR(t), this._paused = !1, this._basePath = e, this._crossOrigin = i, this._loadStartWasDispatched = !1, this._currentlyLoadingScript = null, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._numItems = 0, this._numItemsLoaded = 0, this._scriptOrder = [], this._loadedScripts = [], this._lastProgress = NaN
    }, i.loadTimeout = 8e3, i.LOAD_TIMEOUT = 0, i.BINARY = createjs.AbstractLoader.BINARY, i.CSS = createjs.AbstractLoader.CSS, i.IMAGE = createjs.AbstractLoader.IMAGE, i.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT, i.JSON = createjs.AbstractLoader.JSON, i.JSONP = createjs.AbstractLoader.JSONP, i.MANIFEST = createjs.AbstractLoader.MANIFEST, i.SOUND = createjs.AbstractLoader.SOUND, i.VIDEO = createjs.AbstractLoader.VIDEO, i.SVG = createjs.AbstractLoader.SVG, i.TEXT = createjs.AbstractLoader.TEXT, i.XML = createjs.AbstractLoader.XML, i.POST = createjs.AbstractLoader.POST, i.GET = createjs.AbstractLoader.GET, e.registerLoader = function (t) {
        if (!t || !t.canLoadItem)throw new Error("loader is of an incorrect type.");
        if (this._availableLoaders.indexOf(t) != -1)throw new Error("loader already exists.");
        this._availableLoaders.unshift(t)
    }, e.unregisterLoader = function (t) {
        var e = this._availableLoaders.indexOf(t);
        e != -1 && e < this._defaultLoaderLength - 1 && this._availableLoaders.splice(e, 1)
    }, e.setUseXHR = function (t) {
        return this.setPreferXHR(t)
    }, e.setPreferXHR = function (t) {
        return this.preferXHR = 0 != t && null != window.XMLHttpRequest, this.preferXHR
    }, e.removeAll = function () {
        this.remove()
    }, e.remove = function (t) {
        var e = null;
        if (t && !Array.isArray(t))e = [t]; else if (t)e = t; else if (arguments.length > 0)return;
        var i = !1;
        if (e) {
            for (; e.length;) {
                var r = e.pop(), s = this.getResult(r);
                for (n = this._loadQueue.length - 1; n >= 0; n--)if (o = this._loadQueue[n].getItem(), o.id == r || o.src == r) {
                    this._loadQueue.splice(n, 1)[0].cancel();
                    break
                }
                for (n = this._loadQueueBackup.length - 1; n >= 0; n--)if (o = this._loadQueueBackup[n].getItem(), o.id == r || o.src == r) {
                    this._loadQueueBackup.splice(n, 1)[0].cancel();
                    break
                }
                if (s)this._disposeItem(this.getItem(r)); else for (var n = this._currentLoads.length - 1; n >= 0; n--) {
                    var o = this._currentLoads[n].getItem();
                    if (o.id == r || o.src == r) {
                        this._currentLoads.splice(n, 1)[0].cancel(), i = !0;
                        break
                    }
                }
            }
            i && this._loadNext()
        } else {
            this.close();
            for (var a in this._loadItemsById)this._disposeItem(this._loadItemsById[a]);
            this.init(this.preferXHR, this._basePath)
        }
    }, e.reset = function () {
        this.close();
        for (var t in this._loadItemsById)this._disposeItem(this._loadItemsById[t]);
        for (var e = [], i = 0, r = this._loadQueueBackup.length; i < r; i++)e.push(this._loadQueueBackup[i].getItem());
        this.loadManifest(e, !1)
    }, e.installPlugin = function (t) {
        if (null != t && null != t.getPreloadHandlers) {
            this._plugins.push(t);
            var e = t.getPreloadHandlers();
            if (e.scope = t, null != e.types)for (var i = 0, r = e.types.length; i < r; i++)this._typeCallbacks[e.types[i]] = e;
            if (null != e.extensions)for (i = 0, r = e.extensions.length; i < r; i++)this._extensionCallbacks[e.extensions[i]] = e
        }
    }, e.setMaxConnections = function (t) {
        this._maxConnections = t, !this._paused && this._loadQueue.length > 0 && this._loadNext()
    }, e.loadFile = function (t, e, i) {
        if (null == t) {
            var r = new createjs.ErrorEvent("PRELOAD_NO_FILE");
            return void this._sendError(r)
        }
        this._addItem(t, null, i), e !== !1 ? this.setPaused(!1) : this.setPaused(!0)
    }, e.loadManifest = function (t, e, r) {
        var s = null, n = null;
        if (Array.isArray(t)) {
            if (0 == t.length) {
                var o = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
                return void this._sendError(o)
            }
            s = t
        } else if ("string" == typeof t)s = [{src: t, type: i.MANIFEST}]; else {
            if ("object" != typeof t) {
                var o = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
                return void this._sendError(o)
            }
            if (void 0 !== t.src) {
                if (null == t.type)t.type = i.MANIFEST; else if (t.type != i.MANIFEST) {
                    var o = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
                    this._sendError(o)
                }
                s = [t]
            } else void 0 !== t.manifest && (s = t.manifest, n = t.path)
        }
        for (var a = 0, h = s.length; a < h; a++)this._addItem(s[a], n, r);
        e !== !1 ? this.setPaused(!1) : this.setPaused(!0)
    }, e.load = function () {
        this.setPaused(!1)
    }, e.getItem = function (t) {
        return this._loadItemsById[t] || this._loadItemsBySrc[t]
    }, e.getResult = function (t, e) {
        var i = this._loadItemsById[t] || this._loadItemsBySrc[t];
        if (null == i)return null;
        var r = i.id;
        return e && this._loadedRawResults[r] ? this._loadedRawResults[r] : this._loadedResults[r]
    }, e.getItems = function (t) {
        var e = [];
        for (var i in this._loadItemsById) {
            var r = this._loadItemsById[i], s = this.getResult(i);
            t === !0 && null == s || e.push({item: r, result: s, rawResult: this.getResult(i, !0)})
        }
        return e
    }, e.setPaused = function (t) {
        this._paused = t, this._paused || this._loadNext()
    }, e.close = function () {
        for (; this._currentLoads.length;)this._currentLoads.pop().cancel();
        this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1, this._itemCount = 0, this._lastProgress = NaN
    }, e._addItem = function (t, e, i) {
        var r = this._createLoadItem(t, e, i);
        if (null != r) {
            var s = this._createLoader(r);
            null != s && ("plugins" in s && (s.plugins = this._plugins), r._loader = s, this._loadQueue.push(s), this._loadQueueBackup.push(s), this._numItems++, this._updateProgress(), (this.maintainScriptOrder && r.type == createjs.LoadQueue.JAVASCRIPT || r.maintainOrder === !0) && (this._scriptOrder.push(r), this._loadedScripts.push(null)))
        }
    }, e._createLoadItem = function (t, e, i) {
        var r = createjs.LoadItem.create(t);
        if (null == r)return null;
        var s = "", n = i || this._basePath;
        if (r.src instanceof Object) {
            if (!r.type)return null;
            if (e) {
                s = e;
                var o = createjs.RequestUtils.parseURI(e);
                null == n || o.absolute || o.relative || (s = n + s)
            } else null != n && (s = n)
        } else {
            var a = createjs.RequestUtils.parseURI(r.src);
            a.extension && (r.ext = a.extension), null == r.type && (r.type = createjs.RequestUtils.getTypeByExtension(r.ext));
            var h = r.src;
            if (!a.absolute && !a.relative)if (e) {
                s = e;
                var o = createjs.RequestUtils.parseURI(e);
                h = e + h, null == n || o.absolute || o.relative || (s = n + s)
            } else null != n && (s = n);
            r.src = s + r.src
        }
        r.path = s, void 0 !== r.id && null !== r.id && "" !== r.id || (r.id = h);
        var l = this._typeCallbacks[r.type] || this._extensionCallbacks[r.ext];
        if (l) {
            var c = l.callback.call(l.scope, r, this);
            if (c === !1)return null;
            c === !0 || null != c && (r._loader = c), a = createjs.RequestUtils.parseURI(r.src), null != a.extension && (r.ext = a.extension)
        }
        return this._loadItemsById[r.id] = r, this._loadItemsBySrc[r.src] = r, null == r.crossOrigin && (r.crossOrigin = this._crossOrigin), r
    }, e._createLoader = function (t) {
        if (null != t._loader)return t._loader;
        for (var e = this.preferXHR, i = 0; i < this._availableLoaders.length; i++) {
            var r = this._availableLoaders[i];
            if (r && r.canLoadItem(t))return new r(t, e)
        }
        return null
    }, e._loadNext = function () {
        if (!this._paused) {
            this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
            for (var t = 0; t < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); t++) {
                var e = this._loadQueue[t];
                this._canStartLoad(e) && (this._loadQueue.splice(t, 1), t--, this._loadItem(e))
            }
        }
    }, e._loadItem = function (t) {
        t.on("fileload", this._handleFileLoad, this), t.on("progress", this._handleProgress, this), t.on("complete", this._handleFileComplete, this), t.on("error", this._handleError, this), t.on("fileerror", this._handleFileError, this), this._currentLoads.push(t), this._sendFileStart(t.getItem()), t.load()
    }, e._handleFileLoad = function (t) {
        t.target = null, this.dispatchEvent(t)
    }, e._handleFileError = function (t) {
        var e = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, t.item);
        this._sendError(e)
    }, e._handleError = function (t) {
        var e = t.target;
        this._numItemsLoaded++, this._finishOrderedItem(e, !0), this._updateProgress();
        var i = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, e.getItem());
        this._sendError(i), this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(e), this._cleanLoadItem(e), this._loadNext())
    }, e._handleFileComplete = function (t) {
        var e = t.target, i = e.getItem(), r = e.getResult();
        this._loadedResults[i.id] = r;
        var s = e.getResult(!0);
        null != s && s !== r && (this._loadedRawResults[i.id] = s), this._saveLoadedItems(e), this._removeLoadItem(e), this._finishOrderedItem(e) || this._processFinishedLoad(i, e), this._cleanLoadItem(e)
    }, e._saveLoadedItems = function (t) {
        var e = t.getLoadedItems();
        if (null !== e)for (var i = 0; i < e.length; i++) {
            var r = e[i].item;
            this._loadItemsBySrc[r.src] = r, this._loadItemsById[r.id] = r, this._loadedResults[r.id] = e[i].result, this._loadedRawResults[r.id] = e[i].rawResult
        }
    }, e._finishOrderedItem = function (t, e) {
        var i = t.getItem();
        if (this.maintainScriptOrder && i.type == createjs.LoadQueue.JAVASCRIPT || i.maintainOrder) {
            t instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
            var r = createjs.indexOf(this._scriptOrder, i);
            return r != -1 && (this._loadedScripts[r] = e === !0 || i, this._checkScriptLoadOrder(), !0)
        }
        return !1
    }, e._checkScriptLoadOrder = function () {
        for (var t = this._loadedScripts.length, e = 0; e < t; e++) {
            var i = this._loadedScripts[e];
            if (null === i)break;
            if (i !== !0) {
                var r = this._loadedResults[i.id];
                i.type == createjs.LoadQueue.JAVASCRIPT && createjs.DomUtils.appendToHead(r);
                var s = i._loader;
                this._processFinishedLoad(i, s), this._loadedScripts[e] = !0
            }
        }
    }, e._processFinishedLoad = function (t, e) {
        if (this._numItemsLoaded++, !this.maintainScriptOrder && t.type == createjs.LoadQueue.JAVASCRIPT) {
            var i = e.getTag();
            createjs.DomUtils.appendToHead(i)
        }
        this._updateProgress(), this._sendFileComplete(t, e), this._loadNext()
    }, e._canStartLoad = function (t) {
        if (!this.maintainScriptOrder || t.preferXHR)return !0;
        var e = t.getItem();
        if (e.type != createjs.LoadQueue.JAVASCRIPT)return !0;
        if (this._currentlyLoadingScript)return !1;
        for (var i = this._scriptOrder.indexOf(e), r = 0; r < i;) {
            var s = this._loadedScripts[r];
            if (null == s)return !1;
            r++
        }
        return this._currentlyLoadingScript = !0, !0
    }, e._removeLoadItem = function (t) {
        for (var e = this._currentLoads.length, i = 0; i < e; i++)if (this._currentLoads[i] == t) {
            this._currentLoads.splice(i, 1);
            break
        }
    }, e._cleanLoadItem = function (t) {
        var e = t.getItem();
        e && delete e._loader
    }, e._handleProgress = function (t) {
        var e = t.target;
        this._sendFileProgress(e.getItem(), e.progress), this._updateProgress()
    }, e._updateProgress = function () {
        var t = this._numItemsLoaded / this._numItems, e = this._numItems - this._numItemsLoaded;
        if (e > 0) {
            for (var i = 0, r = 0, s = this._currentLoads.length; r < s; r++)i += this._currentLoads[r].progress;
            t += i / e * (e / this._numItems)
        }
        this._lastProgress != t && (this._sendProgress(t), this._lastProgress = t)
    }, e._disposeItem = function (t) {
        delete this._loadedResults[t.id], delete this._loadedRawResults[t.id], delete this._loadItemsById[t.id], delete this._loadItemsBySrc[t.src]
    }, e._sendFileProgress = function (t, e) {
        if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
            var i = new createjs.Event("fileprogress");
            i.progress = e, i.loaded = e, i.total = 1, i.item = t, this.dispatchEvent(i)
        }
    }, e._sendFileComplete = function (t, e) {
        if (!this._isCanceled() && !this._paused) {
            var i = new createjs.Event("fileload");
            i.loader = e, i.item = t, i.result = this._loadedResults[t.id], i.rawResult = this._loadedRawResults[t.id], t.completeHandler && t.completeHandler(i), this.hasEventListener("fileload") && this.dispatchEvent(i)
        }
    }, e._sendFileStart = function (t) {
        var e = new createjs.Event("filestart");
        e.item = t, this.hasEventListener("filestart") && this.dispatchEvent(e)
    }, e.toString = function () {
        return "[PreloadJS LoadQueue]"
    }, createjs.LoadQueue = createjs.promote(t, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t) {
        this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.TEXT)
    }

    var e = (createjs.extend(t, createjs.AbstractLoader), t);
    e.canLoadItem = function (t) {
        return t.type == createjs.AbstractLoader.TEXT
    }, createjs.TextLoader = createjs.promote(t, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t) {
        this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.BINARY), this.on("initialize", this._updateXHR, this)
    }

    var e = createjs.extend(t, createjs.AbstractLoader), i = t;
    i.canLoadItem = function (t) {
        return t.type == createjs.AbstractLoader.BINARY
    }, e._updateXHR = function (t) {
        t.loader.setResponseType("arraybuffer")
    }, createjs.BinaryLoader = createjs.promote(t, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e) {
        this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.CSS), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "href", e ? this._tag = document.createElement("style") : this._tag = document.createElement("link"), this._tag.rel = "stylesheet", this._tag.type = "text/css"
    }

    var e = createjs.extend(t, createjs.AbstractLoader), i = t;
    i.canLoadItem = function (t) {
        return t.type == createjs.AbstractLoader.CSS
    }, e._formatResult = function (t) {
        if (this._preferXHR) {
            var e = t.getTag();
            if (e.styleSheet)e.styleSheet.cssText = t.getResult(!0); else {
                var i = document.createTextNode(t.getResult(!0));
                e.appendChild(i)
            }
        } else e = this._tag;
        return createjs.DomUtils.appendToHead(e), e
    }, createjs.CSSLoader = createjs.promote(t, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e) {
        this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.IMAGE), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", createjs.RequestUtils.isImageTag(t) ? this._tag = t : createjs.RequestUtils.isImageTag(t.src) ? this._tag = t.src : createjs.RequestUtils.isImageTag(t.tag) && (this._tag = t.tag), null != this._tag ? this._preferXHR = !1 : this._tag = document.createElement("img"), this.on("initialize", this._updateXHR, this)
    }

    var e = createjs.extend(t, createjs.AbstractLoader), i = t;
    i.canLoadItem = function (t) {
        return t.type == createjs.AbstractLoader.IMAGE
    }, e.load = function () {
        if ("" != this._tag.src && this._tag.complete)return void this._sendComplete();
        var t = this._item.crossOrigin;
        1 == t && (t = "Anonymous"), null == t || createjs.RequestUtils.isLocal(this._item.src) || (this._tag.crossOrigin = t), this.AbstractLoader_load()
    }, e._updateXHR = function (t) {
        t.loader.mimeType = "text/plain; charset=x-user-defined-binary", t.loader.setResponseType && t.loader.setResponseType("blob")
    }, e._formatResult = function (t) {
        return this._formatImage
    }, e._formatImage = function (t, e) {
        var i = this._tag, r = window.URL || window.webkitURL;
        if (this._preferXHR)if (r) {
            var s = r.createObjectURL(this.getResult(!0));
            i.src = s, i.addEventListener("load", this._cleanUpURL, !1), i.addEventListener("error", this._cleanUpURL, !1)
        } else i.src = this._item.src; else;
        i.complete ? t(i) : (i.onload = createjs.proxy(function () {
            t(this._tag)
        }, this), i.onerror = createjs.proxy(function () {
            e(_this._tag)
        }, this))
    }, e._cleanUpURL = function (t) {
        var e = window.URL || window.webkitURL;
        e.revokeObjectURL(t.target.src)
    }, createjs.ImageLoader = createjs.promote(t, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e) {
        this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.JAVASCRIPT), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.setTag(document.createElement("script"))
    }

    var e = createjs.extend(t, createjs.AbstractLoader), i = t;
    i.canLoadItem = function (t) {
        return t.type == createjs.AbstractLoader.JAVASCRIPT
    }, e._formatResult = function (t) {
        var e = t.getTag();
        return this._preferXHR && (e.text = t.getResult(!0)), e
    }, createjs.JavaScriptLoader = createjs.promote(t, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t) {
        this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.JSON), this.resultFormatter = this._formatResult
    }

    var e = createjs.extend(t, createjs.AbstractLoader), i = t;
    i.canLoadItem = function (t) {
        return t.type == createjs.AbstractLoader.JSON
    }, e._formatResult = function (t) {
        var e = null;
        try {
            e = createjs.DataUtils.parseJSON(t.getResult(!0))
        } catch (i) {
            var r = new createjs.ErrorEvent("JSON_FORMAT", null, i);
            return this._sendError(r), i
        }
        return e
    }, createjs.JSONLoader = createjs.promote(t, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t) {
        this.AbstractLoader_constructor(t, !1, createjs.AbstractLoader.JSONP), this.setTag(document.createElement("script")), this.getTag().type = "text/javascript"
    }

    var e = createjs.extend(t, createjs.AbstractLoader), i = t;
    i.canLoadItem = function (t) {
        return t.type == createjs.AbstractLoader.JSONP
    }, e.cancel = function () {
        this.AbstractLoader_cancel(), this._dispose()
    }, e.load = function () {
        if (null == this._item.callback)throw new Error("callback is required for loading JSONP requests.");
        if (null != window[this._item.callback])throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
        window[this._item.callback] = createjs.proxy(this._handleLoad, this), window.document.body.appendChild(this._tag), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag.src = this._item.src
    }, e._handleLoad = function (t) {
        this._result = this._rawResult = t, this._sendComplete(), this._dispose()
    }, e._handleTimeout = function () {
        this._dispose(), this.dispatchEvent(new createjs.ErrorEvent("timeout"))
    }, e._dispose = function () {
        window.document.body.removeChild(this._tag), delete window[this._item.callback], clearTimeout(this._loadTimeout)
    }, createjs.JSONPLoader = createjs.promote(t, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t) {
        this.AbstractLoader_constructor(t, null, createjs.AbstractLoader.MANIFEST), this.plugins = null, this._manifestQueue = null
    }

    var e = createjs.extend(t, createjs.AbstractLoader), i = t;
    i.MANIFEST_PROGRESS = .25, i.canLoadItem = function (t) {
        return t.type == createjs.AbstractLoader.MANIFEST
    }, e.load = function () {
        this.AbstractLoader_load()
    }, e._createRequest = function () {
        var t = this._item.callback;
        null != t ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
    }, e.handleEvent = function (t) {
        switch (t.type) {
            case"complete":
                return this._rawResult = t.target.getResult(!0), this._result = t.target.getResult(), this._sendProgress(i.MANIFEST_PROGRESS), void this._loadManifest(this._result);
            case"progress":
                return t.loaded *= i.MANIFEST_PROGRESS, this.progress = t.loaded / t.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(t)
        }
        this.AbstractLoader_handleEvent(t)
    }, e.destroy = function () {
        this.AbstractLoader_destroy(), this._manifestQueue.close()
    }, e._loadManifest = function (t) {
        if (t && t.manifest) {
            var e = this._manifestQueue = new createjs.LoadQueue;
            e.on("fileload", this._handleManifestFileLoad, this), e.on("progress", this._handleManifestProgress, this), e.on("complete", this._handleManifestComplete, this, !0), e.on("error", this._handleManifestError, this, !0);
            for (var i = 0, r = this.plugins.length; i < r; i++)e.installPlugin(this.plugins[i]);
            e.loadManifest(t)
        } else this._sendComplete()
    }, e._handleManifestFileLoad = function (t) {
        t.target = null, this.dispatchEvent(t)
    }, e._handleManifestComplete = function (t) {
        this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
    }, e._handleManifestProgress = function (t) {
        this.progress = t.progress * (1 - i.MANIFEST_PROGRESS) + i.MANIFEST_PROGRESS, this._sendProgress(this.progress)
    }, e._handleManifestError = function (t) {
        var e = new createjs.Event("fileerror");
        e.item = t.data, this.dispatchEvent(e)
    }, createjs.ManifestLoader = createjs.promote(t, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e) {
        this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.SOUND), createjs.RequestUtils.isAudioTag(t) ? this._tag = t : createjs.RequestUtils.isAudioTag(t.src) ? this._tag = t : createjs.RequestUtils.isAudioTag(t.tag) && (this._tag = createjs.RequestUtils.isAudioTag(t) ? t : t.src), null != this._tag && (this._preferXHR = !1)
    }

    var e = createjs.extend(t, createjs.AbstractMediaLoader), i = t;
    i.canLoadItem = function (t) {
        return t.type == createjs.AbstractLoader.SOUND
    }, e._createTag = function (t) {
        var e = document.createElement("audio");
        return e.autoplay = !1, e.preload = "none", e.src = t, e
    }, createjs.SoundLoader = createjs.promote(t, "AbstractMediaLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e) {
        this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.VIDEO), createjs.RequestUtils.isVideoTag(t) || createjs.RequestUtils.isVideoTag(t.src) ? (this.setTag(createjs.RequestUtils.isVideoTag(t) ? t : t.src), this._preferXHR = !1) : this.setTag(this._createTag())
    }

    var e = createjs.extend(t, createjs.AbstractMediaLoader), i = t;
    e._createTag = function () {
        return document.createElement("video")
    }, i.canLoadItem = function (t) {
        return t.type == createjs.AbstractLoader.VIDEO
    }, createjs.VideoLoader = createjs.promote(t, "AbstractMediaLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e) {
        this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.SPRITESHEET), this._manifestQueue = null
    }

    var e = createjs.extend(t, createjs.AbstractLoader), i = t;
    i.SPRITESHEET_PROGRESS = .25, i.canLoadItem = function (t) {
        return t.type == createjs.AbstractLoader.SPRITESHEET
    }, e.destroy = function () {
        this.AbstractLoader_destroy,
            this._manifestQueue.close()
    }, e._createRequest = function () {
        var t = this._item.callback;
        null != t ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
    }, e.handleEvent = function (t) {
        switch (t.type) {
            case"complete":
                return this._rawResult = t.target.getResult(!0), this._result = t.target.getResult(), this._sendProgress(i.SPRITESHEET_PROGRESS), void this._loadManifest(this._result);
            case"progress":
                return t.loaded *= i.SPRITESHEET_PROGRESS, this.progress = t.loaded / t.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(t)
        }
        this.AbstractLoader_handleEvent(t)
    }, e._loadManifest = function (t) {
        if (t && t.images) {
            var e = this._manifestQueue = new createjs.LoadQueue(this._preferXHR, this._item.path, this._item.crossOrigin);
            e.on("complete", this._handleManifestComplete, this, !0), e.on("fileload", this._handleManifestFileLoad, this), e.on("progress", this._handleManifestProgress, this), e.on("error", this._handleManifestError, this, !0), e.loadManifest(t.images)
        }
    }, e._handleManifestFileLoad = function (t) {
        var e = t.result;
        if (null != e) {
            var i = this.getResult().images, r = i.indexOf(t.item.src);
            i[r] = e
        }
    }, e._handleManifestComplete = function (t) {
        this._result = new createjs.SpriteSheet(this._result), this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
    }, e._handleManifestProgress = function (t) {
        this.progress = t.progress * (1 - i.SPRITESHEET_PROGRESS) + i.SPRITESHEET_PROGRESS, this._sendProgress(this.progress)
    }, e._handleManifestError = function (t) {
        var e = new createjs.Event("fileerror");
        e.item = t.data, this.dispatchEvent(e)
    }, createjs.SpriteSheetLoader = createjs.promote(t, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t, e) {
        this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.SVG), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "data", e ? this.setTag(document.createElement("svg")) : (this.setTag(document.createElement("object")), this.getTag().type = "image/svg+xml")
    }

    var e = createjs.extend(t, createjs.AbstractLoader), i = t;
    i.canLoadItem = function (t) {
        return t.type == createjs.AbstractLoader.SVG
    }, e._formatResult = function (t) {
        var e = createjs.DataUtils.parseXML(t.getResult(!0), "text/xml"), i = t.getTag();
        return !this._preferXHR && document.body.contains(i) && document.body.removeChild(i), null != e.documentElement ? (i.appendChild(e.documentElement), i.style.visibility = "visible", i) : e
    }, createjs.SVGLoader = createjs.promote(t, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
    "use strict";
    function t(t) {
        this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.XML), this.resultFormatter = this._formatResult
    }

    var e = createjs.extend(t, createjs.AbstractLoader), i = t;
    i.canLoadItem = function (t) {
        return t.type == createjs.AbstractLoader.XML
    }, e._formatResult = function (t) {
        return createjs.DataUtils.parseXML(t.getResult(!0), "text/xml")
    }, createjs.XMLLoader = createjs.promote(t, "AbstractLoader")
}(), function (t) {
    if ("object" == typeof exports && "undefined" != typeof module)module.exports = t(); else if ("function" == typeof define && define.amd)define([], t); else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.PIXI = t()
    }
}(function () {
    var t;
    return function e(t, i, r) {
        function s(o, a) {
            if (!i[o]) {
                if (!t[o]) {
                    var h = "function" == typeof require && require;
                    if (!a && h)return h(o, !0);
                    if (n)return n(o, !0);
                    var l = new Error("Cannot find module '" + o + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var c = i[o] = {exports: {}};
                t[o][0].call(c.exports, function (e) {
                    var i = t[o][1][e];
                    return s(i ? i : e)
                }, c, c.exports, e, t, i, r)
            }
            return i[o].exports
        }

        for (var n = "function" == typeof require && require, o = 0; o < r.length; o++)s(r[o]);
        return s
    }({
        1: [function (t, e, i) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function s(t, e, i, r) {
                (0, o["default"])(e)(t, (0, h["default"])(i), r)
            }

            Object.defineProperty(i, "__esModule", {value: !0}), i["default"] = s;
            var n = t("./internal/eachOfLimit"), o = r(n), a = t("./internal/withoutIndex"), h = r(a);
            e.exports = i["default"]
        }, {"./internal/eachOfLimit": 5, "./internal/withoutIndex": 12}],
        2: [function (t, e, i) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            Object.defineProperty(i, "__esModule", {value: !0});
            var s = t("./eachLimit"), n = r(s), o = t("./internal/doLimit"), a = r(o);
            i["default"] = (0, a["default"])(n["default"], 1), e.exports = i["default"]
        }, {"./eachLimit": 1, "./internal/doLimit": 4}],
        3: [function (t, e, i) {
            "use strict";
            function r() {
                this.head = this.tail = null, this.length = 0
            }

            function s(t, e) {
                t.length = 1, t.head = t.tail = e
            }

            Object.defineProperty(i, "__esModule", {value: !0}), i["default"] = r, r.prototype.removeLink = function (t) {
                return t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev, t.prev = t.next = null, this.length -= 1, t
            }, r.prototype.empty = r, r.prototype.insertAfter = function (t, e) {
                e.prev = t, e.next = t.next, t.next ? t.next.prev = e : this.tail = e, t.next = e, this.length += 1
            }, r.prototype.insertBefore = function (t, e) {
                e.prev = t.prev, e.next = t, t.prev ? t.prev.next = e : this.head = e, t.prev = e, this.length += 1
            }, r.prototype.unshift = function (t) {
                this.head ? this.insertBefore(this.head, t) : s(this, t)
            }, r.prototype.push = function (t) {
                this.tail ? this.insertAfter(this.tail, t) : s(this, t)
            }, r.prototype.shift = function () {
                return this.head && this.removeLink(this.head)
            }, r.prototype.pop = function () {
                return this.tail && this.removeLink(this.tail)
            }, e.exports = i["default"]
        }, {}],
        4: [function (t, e, i) {
            "use strict";
            function r(t, e) {
                return function (i, r, s) {
                    return t(i, e, r, s)
                }
            }

            Object.defineProperty(i, "__esModule", {value: !0}), i["default"] = r, e.exports = i["default"]
        }, {}],
        5: [function (t, e, i) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function s(t) {
                return function (e, i, r) {
                    function s(t) {
                        if (u -= 1, t)l = !0, r(t); else {
                            if (l && u <= 0)return r(null);
                            n()
                        }
                    }

                    function n() {
                        for (; u < t && !l;) {
                            var e = a();
                            if (null === e)return l = !0, void(u <= 0 && r(null));
                            u += 1, i(e.value, e.key, (0, d["default"])(s))
                        }
                    }

                    if (r = (0, h["default"])(r || o["default"]), t <= 0 || !e)return r(null);
                    var a = (0, c["default"])(e), l = !1, u = 0;
                    n()
                }
            }

            Object.defineProperty(i, "__esModule", {value: !0}), i["default"] = s;
            var n = t("lodash/noop"), o = r(n), a = t("./once"), h = r(a), l = t("./iterator"), c = r(l), u = t("./onlyOnce"), d = r(u);
            e.exports = i["default"]
        }, {"./iterator": 7, "./once": 8, "./onlyOnce": 9, "lodash/noop": 38}],
        6: [function (t, e, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {value: !0}), i["default"] = function (t) {
                return r && t[r] && t[r]()
            };
            var r = "function" == typeof Symbol && Symbol.iterator;
            e.exports = i["default"]
        }, {}],
        7: [function (t, e, i) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function s(t) {
                var e = -1, i = t.length;
                return function () {
                    return ++e < i ? {value: t[e], key: e} : null
                }
            }

            function n(t) {
                var e = -1;
                return function () {
                    var i = t.next();
                    return i.done ? null : (e++, {value: i.value, key: e})
                }
            }

            function o(t) {
                var e = (0, p["default"])(t), i = -1, r = e.length;
                return function () {
                    var s = e[++i];
                    return i < r ? {value: t[s], key: s} : null
                }
            }

            function a(t) {
                if ((0, l["default"])(t))return s(t);
                var e = (0, u["default"])(t);
                return e ? n(e) : o(t)
            }

            Object.defineProperty(i, "__esModule", {value: !0}), i["default"] = a;
            var h = t("lodash/isArrayLike"), l = r(h), c = t("./getIterator"), u = r(c), d = t("lodash/keys"), p = r(d);
            e.exports = i["default"]
        }, {"./getIterator": 6, "lodash/isArrayLike": 30, "lodash/keys": 37}],
        8: [function (t, e, i) {
            "use strict";
            function r(t) {
                return function () {
                    if (null !== t) {
                        var e = t;
                        t = null, e.apply(this, arguments)
                    }
                }
            }

            Object.defineProperty(i, "__esModule", {value: !0}), i["default"] = r, e.exports = i["default"]
        }, {}],
        9: [function (t, e, i) {
            "use strict";
            function r(t) {
                return function () {
                    if (null === t)throw new Error("Callback was already called.");
                    var e = t;
                    t = null, e.apply(this, arguments)
                }
            }

            Object.defineProperty(i, "__esModule", {value: !0}), i["default"] = r, e.exports = i["default"]
        }, {}],
        10: [function (t, e, i) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function s(t, e, i) {
                function r(t, e, i) {
                    if (null != i && "function" != typeof i)throw new Error("task callback must be a function");
                    return l.started = !0, (0, h["default"])(t) || (t = [t]), 0 === t.length && l.idle() ? (0, m["default"])(function () {
                        l.drain()
                    }) : ((0, o["default"])(t, function (t) {
                        var r = {data: t, callback: i || c["default"]};
                        e ? l._tasks.unshift(r) : l._tasks.push(r)
                    }), void(0, m["default"])(l.process))
                }

                function s(t) {
                    return (0, d["default"])(function (e) {
                        n -= 1, (0, o["default"])(t, function (t) {
                            (0, o["default"])(a, function (e, i) {
                                if (e === t)return a.splice(i, 1), !1
                            }), t.callback.apply(t, e), null != e[0] && l.error(e[0], t.data)
                        }), n <= l.concurrency - l.buffer && l.unsaturated(), l.idle() && l.drain(), l.process()
                    })
                }

                if (null == e)e = 1; else if (0 === e)throw new Error("Concurrency must not be zero");
                var n = 0, a = [], l = {
                    _tasks: new _["default"],
                    concurrency: e,
                    payload: i,
                    saturated: c["default"],
                    unsaturated: c["default"],
                    buffer: e / 4,
                    empty: c["default"],
                    drain: c["default"],
                    error: c["default"],
                    started: !1,
                    paused: !1,
                    push: function (t, e) {
                        r(t, !1, e)
                    },
                    kill: function () {
                        l.drain = c["default"], l._tasks.empty()
                    },
                    unshift: function (t, e) {
                        r(t, !0, e)
                    },
                    process: function () {
                        for (; !l.paused && n < l.concurrency && l._tasks.length;) {
                            var e = [], i = [], r = l._tasks.length;
                            l.payload && (r = Math.min(r, l.payload));
                            for (var o = 0; o < r; o++) {
                                var h = l._tasks.shift();
                                e.push(h), i.push(h.data)
                            }
                            0 === l._tasks.length && l.empty(), n += 1, a.push(e[0]), n === l.concurrency && l.saturated();
                            var c = (0, f["default"])(s(e));
                            t(i, c)
                        }
                    },
                    length: function () {
                        return l._tasks.length
                    },
                    running: function () {
                        return n
                    },
                    workersList: function () {
                        return a
                    },
                    idle: function () {
                        return l._tasks.length + n === 0
                    },
                    pause: function () {
                        l.paused = !0
                    },
                    resume: function () {
                        if (l.paused !== !1) {
                            l.paused = !1;
                            for (var t = Math.min(l.concurrency, l._tasks.length), e = 1; e <= t; e++)(0, m["default"])(l.process)
                        }
                    }
                };
                return l
            }

            Object.defineProperty(i, "__esModule", {value: !0}), i["default"] = s;
            var n = t("lodash/_arrayEach"), o = r(n), a = t("lodash/isArray"), h = r(a), l = t("lodash/noop"), c = r(l), u = t("lodash/rest"), d = r(u), p = t("./onlyOnce"), f = r(p), g = t("./setImmediate"), m = r(g), v = t("./DoublyLinkedList"), _ = r(v);
            e.exports = i["default"]
        }, {
            "./DoublyLinkedList": 3,
            "./onlyOnce": 9,
            "./setImmediate": 11,
            "lodash/_arrayEach": 19,
            "lodash/isArray": 29,
            "lodash/noop": 38,
            "lodash/rest": 39
        }],
        11: [function (t, e, i) {
            (function (e) {
                "use strict";
                function r(t) {
                    return t && t.__esModule ? t : {"default": t}
                }

                function s(t) {
                    setTimeout(t, 0)
                }

                function n(t) {
                    return (0, h["default"])(function (e, i) {
                        t(function () {
                            e.apply(null, i)
                        })
                    })
                }

                Object.defineProperty(i, "__esModule", {value: !0}), i.hasNextTick = i.hasSetImmediate = void 0, i.fallback = s, i.wrap = n;
                var o, a = t("lodash/rest"), h = r(a), l = i.hasSetImmediate = "function" == typeof setImmediate && setImmediate, c = i.hasNextTick = "object" == typeof e && "function" == typeof e.nextTick;
                o = l ? setImmediate : c ? e.nextTick : s, i["default"] = n(o)
            }).call(this, t("_process"))
        }, {_process: 61, "lodash/rest": 39}],
        12: [function (t, e, i) {
            "use strict";
            function r(t) {
                return function (e, i, r) {
                    return t(e, r)
                }
            }

            Object.defineProperty(i, "__esModule", {value: !0}), i["default"] = r, e.exports = i["default"]
        }, {}],
        13: [function (t, e, i) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            Object.defineProperty(i, "__esModule", {value: !0}), i["default"] = function (t, e) {
                return (0, n["default"])(function (e, i) {
                    t(e[0], i)
                }, e, 1)
            };
            var s = t("./internal/queue"), n = r(s);
            e.exports = i["default"]
        }, {"./internal/queue": 10}],
        14: [function (t, e, i) {
            "use strict";
            "use restrict";
            function r(t) {
                var e = 32;
                return t &= -t, t && e--, 65535 & t && (e -= 16), 16711935 & t && (e -= 8), 252645135 & t && (e -= 4), 858993459 & t && (e -= 2), 1431655765 & t && (e -= 1), e
            }

            var s = 32;
            i.INT_BITS = s, i.INT_MAX = 2147483647, i.INT_MIN = -1 << s - 1, i.sign = function (t) {
                return (t > 0) - (t < 0)
            }, i.abs = function (t) {
                var e = t >> s - 1;
                return (t ^ e) - e
            }, i.min = function (t, e) {
                return e ^ (t ^ e) & -(t < e)
            }, i.max = function (t, e) {
                return t ^ (t ^ e) & -(t < e)
            }, i.isPow2 = function (t) {
                return !(t & t - 1 || !t)
            }, i.log2 = function (t) {
                var e, i;
                return e = (t > 65535) << 4, t >>>= e, i = (t > 255) << 3, t >>>= i, e |= i, i = (t > 15) << 2, t >>>= i, e |= i, i = (t > 3) << 1, t >>>= i, e |= i, e | t >> 1
            }, i.log10 = function (t) {
                return t >= 1e9 ? 9 : t >= 1e8 ? 8 : t >= 1e7 ? 7 : t >= 1e6 ? 6 : t >= 1e5 ? 5 : t >= 1e4 ? 4 : t >= 1e3 ? 3 : t >= 100 ? 2 : t >= 10 ? 1 : 0
            }, i.popCount = function (t) {
                return t -= t >>> 1 & 1431655765, t = (858993459 & t) + (t >>> 2 & 858993459), 16843009 * (t + (t >>> 4) & 252645135) >>> 24
            }, i.countTrailingZeros = r, i.nextPow2 = function (t) {
                return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t + 1
            }, i.prevPow2 = function (t) {
                return t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t - (t >>> 1)
            }, i.parity = function (t) {
                return t ^= t >>> 16, t ^= t >>> 8, t ^= t >>> 4, t &= 15, 27030 >>> t & 1
            };
            var n = new Array(256);
            !function (t) {
                for (var e = 0; e < 256; ++e) {
                    var i = e, r = e, s = 7;
                    for (i >>>= 1; i; i >>>= 1)r <<= 1, r |= 1 & i, --s;
                    t[e] = r << s & 255
                }
            }(n), i.reverse = function (t) {
                return n[255 & t] << 24 | n[t >>> 8 & 255] << 16 | n[t >>> 16 & 255] << 8 | n[t >>> 24 & 255]
            }, i.interleave2 = function (t, e) {
                return t &= 65535, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e &= 65535, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
            }, i.deinterleave2 = function (t, e) {
                return t = t >>> e & 1431655765, t = 858993459 & (t | t >>> 1), t = 252645135 & (t | t >>> 2), t = 16711935 & (t | t >>> 4), t = 65535 & (t | t >>> 16), t << 16 >> 16
            }, i.interleave3 = function (t, e, i) {
                return t &= 1023, t = 4278190335 & (t | t << 16), t = 251719695 & (t | t << 8), t = 3272356035 & (t | t << 4), t = 1227133513 & (t | t << 2), e &= 1023, e = 4278190335 & (e | e << 16), e = 251719695 & (e | e << 8), e = 3272356035 & (e | e << 4), e = 1227133513 & (e | e << 2), t |= e << 1, i &= 1023, i = 4278190335 & (i | i << 16), i = 251719695 & (i | i << 8), i = 3272356035 & (i | i << 4), i = 1227133513 & (i | i << 2), t | i << 2
            }, i.deinterleave3 = function (t, e) {
                return t = t >>> e & 1227133513, t = 3272356035 & (t | t >>> 2), t = 251719695 & (t | t >>> 4), t = 4278190335 & (t | t >>> 8), t = 1023 & (t | t >>> 16), t << 22 >> 22
            }, i.nextCombination = function (t) {
                var e = t | t - 1;
                return e + 1 | (~e & -~e) - 1 >>> r(t) + 1
            }
        }, {}],
        15: [function (t, e, i) {
            "use strict";
            function r(t, e, i) {
                i = i || 2;
                var r = e && e.length, n = r ? e[0] * i : t.length, a = s(t, 0, n, i, !0), h = [];
                if (!a)return h;
                var l, c, d, p, f, g, m;
                if (r && (a = u(t, e, a, i)), t.length > 80 * i) {
                    l = d = t[0], c = p = t[1];
                    for (var v = i; v < n; v += i)f = t[v], g = t[v + 1], f < l && (l = f), g < c && (c = g), f > d && (d = f), g > p && (p = g);
                    m = Math.max(d - l, p - c)
                }
                return o(a, h, i, l, c, m), h
            }

            function s(t, e, i, r, s) {
                var n, o;
                if (s === M(t, e, i, r) > 0)for (n = e; n < i; n += r)o = A(n, t[n], t[n + 1], o); else for (n = i - r; n >= e; n -= r)o = A(n, t[n], t[n + 1], o);
                return o && w(o, o.next) && (C(o), o = o.next), o
            }

            function n(t, e) {
                if (!t)return t;
                e || (e = t);
                var i, r = t;
                do if (i = !1, r.steiner || !w(r, r.next) && 0 !== b(r.prev, r, r.next))r = r.next; else {
                    if (C(r), r = e = r.prev, r === r.next)return null;
                    i = !0
                } while (i || r !== e);
                return e
            }

            function o(t, e, i, r, s, u, d) {
                if (t) {
                    !d && u && g(t, r, s, u);
                    for (var p, f, m = t; t.prev !== t.next;)if (p = t.prev, f = t.next, u ? h(t, r, s, u) : a(t))e.push(p.i / i), e.push(t.i / i), e.push(f.i / i), C(t), t = f.next, m = f.next; else if (t = f, t === m) {
                        d ? 1 === d ? (t = l(t, e, i), o(t, e, i, r, s, u, 2)) : 2 === d && c(t, e, i, r, s, u) : o(n(t), e, i, r, s, u, 1);
                        break
                    }
                }
            }

            function a(t) {
                var e = t.prev, i = t, r = t.next;
                if (b(e, i, r) >= 0)return !1;
                for (var s = t.next.next; s !== t.prev;) {
                    if (y(e.x, e.y, i.x, i.y, r.x, r.y, s.x, s.y) && b(s.prev, s, s.next) >= 0)return !1;
                    s = s.next
                }
                return !0
            }

            function h(t, e, i, r) {
                var s = t.prev, n = t, o = t.next;
                if (b(s, n, o) >= 0)return !1;
                for (var a = s.x < n.x ? s.x < o.x ? s.x : o.x : n.x < o.x ? n.x : o.x, h = s.y < n.y ? s.y < o.y ? s.y : o.y : n.y < o.y ? n.y : o.y, l = s.x > n.x ? s.x > o.x ? s.x : o.x : n.x > o.x ? n.x : o.x, c = s.y > n.y ? s.y > o.y ? s.y : o.y : n.y > o.y ? n.y : o.y, u = v(a, h, e, i, r), d = v(l, c, e, i, r), p = t.nextZ; p && p.z <= d;) {
                    if (p !== t.prev && p !== t.next && y(s.x, s.y, n.x, n.y, o.x, o.y, p.x, p.y) && b(p.prev, p, p.next) >= 0)return !1;
                    p = p.nextZ
                }
                for (p = t.prevZ; p && p.z >= u;) {
                    if (p !== t.prev && p !== t.next && y(s.x, s.y, n.x, n.y, o.x, o.y, p.x, p.y) && b(p.prev, p, p.next) >= 0)return !1;
                    p = p.prevZ
                }
                return !0
            }

            function l(t, e, i) {
                var r = t;
                do {
                    var s = r.prev, n = r.next.next;
                    !w(s, n) && T(s, r, r.next, n) && S(s, n) && S(n, s) && (e.push(s.i / i), e.push(r.i / i), e.push(n.i / i), C(r), C(r.next), r = t = n), r = r.next
                } while (r !== t);
                return r
            }

            function c(t, e, i, r, s, a) {
                var h = t;
                do {
                    for (var l = h.next.next; l !== h.prev;) {
                        if (h.i !== l.i && x(h, l)) {
                            var c = P(h, l);
                            return h = n(h, h.next), c = n(c, c.next), o(h, e, i, r, s, a), void o(c, e, i, r, s, a)
                        }
                        l = l.next
                    }
                    h = h.next
                } while (h !== t)
            }

            function u(t, e, i, r) {
                var o, a, h, l, c, u = [];
                for (o = 0, a = e.length; o < a; o++)h = e[o] * r, l = o < a - 1 ? e[o + 1] * r : t.length, c = s(t, h, l, r, !1), c === c.next && (c.steiner = !0), u.push(_(c));
                for (u.sort(d), o = 0; o < u.length; o++)p(u[o], i), i = n(i, i.next);
                return i
            }

            function d(t, e) {
                return t.x - e.x
            }

            function p(t, e) {
                if (e = f(t, e)) {
                    var i = P(e, t);
                    n(i, i.next)
                }
            }

            function f(t, e) {
                var i, r = e, s = t.x, n = t.y, o = -(1 / 0);
                do {
                    if (n <= r.y && n >= r.next.y) {
                        var a = r.x + (n - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                        if (a <= s && a > o) {
                            if (o = a, a === s) {
                                if (n === r.y)return r;
                                if (n === r.next.y)return r.next
                            }
                            i = r.x < r.next.x ? r : r.next
                        }
                    }
                    r = r.next
                } while (r !== e);
                if (!i)return null;
                if (s === o)return i.prev;
                var h, l = i, c = i.x, u = i.y, d = 1 / 0;
                for (r = i.next; r !== l;)s >= r.x && r.x >= c && y(n < u ? s : o, n, c, u, n < u ? o : s, n, r.x, r.y) && (h = Math.abs(n - r.y) / (s - r.x), (h < d || h === d && r.x > i.x) && S(r, t) && (i = r, d = h)), r = r.next;
                return i
            }

            function g(t, e, i, r) {
                var s = t;
                do null === s.z && (s.z = v(s.x, s.y, e, i, r)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next; while (s !== t);
                s.prevZ.nextZ = null, s.prevZ = null, m(s)
            }

            function m(t) {
                var e, i, r, s, n, o, a, h, l = 1;
                do {
                    for (i = t, t = null, n = null, o = 0; i;) {
                        for (o++, r = i, a = 0, e = 0; e < l && (a++, r = r.nextZ, r); e++);
                        for (h = l; a > 0 || h > 0 && r;)0 === a ? (s = r, r = r.nextZ, h--) : 0 !== h && r ? i.z <= r.z ? (s = i, i = i.nextZ, a--) : (s = r, r = r.nextZ, h--) : (s = i, i = i.nextZ, a--), n ? n.nextZ = s : t = s, s.prevZ = n, n = s;
                        i = r
                    }
                    n.nextZ = null, l *= 2
                } while (o > 1);
                return t
            }

            function v(t, e, i, r, s) {
                return t = 32767 * (t - i) / s, e = 32767 * (e - r) / s, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
            }

            function _(t) {
                var e = t, i = t;
                do e.x < i.x && (i = e), e = e.next; while (e !== t);
                return i
            }

            function y(t, e, i, r, s, n, o, a) {
                return (s - o) * (e - a) - (t - o) * (n - a) >= 0 && (t - o) * (r - a) - (i - o) * (e - a) >= 0 && (i - o) * (n - a) - (s - o) * (r - a) >= 0
            }

            function x(t, e) {
                return t.next.i !== e.i && t.prev.i !== e.i && !L(t, e) && S(t, e) && S(e, t) && E(t, e)
            }

            function b(t, e, i) {
                return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
            }

            function w(t, e) {
                return t.x === e.x && t.y === e.y
            }

            function T(t, e, i, r) {
                return !!(w(t, e) && w(i, r) || w(t, r) && w(i, e)) || b(t, e, i) > 0 != b(t, e, r) > 0 && b(i, r, t) > 0 != b(i, r, e) > 0
            }

            function L(t, e) {
                var i = t;
                do {
                    if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && T(i, i.next, t, e))return !0;
                    i = i.next
                } while (i !== t);
                return !1
            }

            function S(t, e) {
                return b(t.prev, t, t.next) < 0 ? b(t, e, t.next) >= 0 && b(t, t.prev, e) >= 0 : b(t, e, t.prev) < 0 || b(t, t.next, e) < 0
            }

            function E(t, e) {
                var i = t, r = !1, s = (t.x + e.x) / 2, n = (t.y + e.y) / 2;
                do i.y > n != i.next.y > n && s < (i.next.x - i.x) * (n - i.y) / (i.next.y - i.y) + i.x && (r = !r), i = i.next; while (i !== t);
                return r
            }

            function P(t, e) {
                var i = new R(t.i, t.x, t.y), r = new R(e.i, e.x, e.y), s = t.next, n = e.prev;
                return t.next = e, e.prev = t, i.next = s, s.prev = i, r.next = i, i.prev = r, n.next = r, r.prev = n, r
            }

            function A(t, e, i, r) {
                var s = new R(t, e, i);
                return r ? (s.next = r.next, s.prev = r, r.next.prev = s, r.next = s) : (s.prev = s, s.next = s), s
            }

            function C(t) {
                t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
            }

            function R(t, e, i) {
                this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
            }

            function M(t, e, i, r) {
                for (var s = 0, n = e, o = i - r; n < i; n += r)s += (t[o] - t[n]) * (t[n + 1] + t[o + 1]), o = n;
                return s
            }

            e.exports = r, r.deviation = function (t, e, i, r) {
                var s = e && e.length, n = s ? e[0] * i : t.length, o = Math.abs(M(t, 0, n, i));
                if (s)for (var a = 0, h = e.length; a < h; a++) {
                    var l = e[a] * i, c = a < h - 1 ? e[a + 1] * i : t.length;
                    o -= Math.abs(M(t, l, c, i))
                }
                var u = 0;
                for (a = 0; a < r.length; a += 3) {
                    var d = r[a] * i, p = r[a + 1] * i, f = r[a + 2] * i;
                    u += Math.abs((t[d] - t[f]) * (t[p + 1] - t[d + 1]) - (t[d] - t[p]) * (t[f + 1] - t[d + 1]))
                }
                return 0 === o && 0 === u ? 0 : Math.abs((u - o) / o)
            }, r.flatten = function (t) {
                for (var e = t[0][0].length, i = {
                    vertices: [],
                    holes: [],
                    dimensions: e
                }, r = 0, s = 0; s < t.length; s++) {
                    for (var n = 0; n < t[s].length; n++)for (var o = 0; o < e; o++)i.vertices.push(t[s][n][o]);
                    s > 0 && (r += t[s - 1].length, i.holes.push(r))
                }
                return i
            }
        }, {}],
        16: [function (t, e, i) {
            "use strict";
            function r(t, e, i) {
                this.fn = t, this.context = e, this.once = i || !1
            }

            function s() {
            }

            var n = Object.prototype.hasOwnProperty, o = "function" != typeof Object.create && "~";
            s.prototype._events = void 0, s.prototype.eventNames = function () {
                var t, e = this._events, i = [];
                if (!e)return i;
                for (t in e)n.call(e, t) && i.push(o ? t.slice(1) : t);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
            }, s.prototype.listeners = function (t, e) {
                var i = o ? o + t : t, r = this._events && this._events[i];
                if (e)return !!r;
                if (!r)return [];
                if (r.fn)return [r.fn];
                for (var s = 0, n = r.length, a = new Array(n); s < n; s++)a[s] = r[s].fn;
                return a
            }, s.prototype.emit = function (t, e, i, r, s, n) {
                var a = o ? o + t : t;
                if (!this._events || !this._events[a])return !1;
                var h, l, c = this._events[a], u = arguments.length;
                if ("function" == typeof c.fn) {
                    switch (c.once && this.removeListener(t, c.fn, void 0, !0), u) {
                        case 1:
                            return c.fn.call(c.context), !0;
                        case 2:
                            return c.fn.call(c.context, e), !0;
                        case 3:
                            return c.fn.call(c.context, e, i), !0;
                        case 4:
                            return c.fn.call(c.context, e, i, r), !0;
                        case 5:
                            return c.fn.call(c.context, e, i, r, s), !0;
                        case 6:
                            return c.fn.call(c.context, e, i, r, s, n), !0
                    }
                    for (l = 1, h = new Array(u - 1); l < u; l++)h[l - 1] = arguments[l];
                    c.fn.apply(c.context, h)
                } else {
                    var d, p = c.length;
                    for (l = 0; l < p; l++)switch (c[l].once && this.removeListener(t, c[l].fn, void 0, !0), u) {
                        case 1:
                            c[l].fn.call(c[l].context);
                            break;
                        case 2:
                            c[l].fn.call(c[l].context, e);
                            break;
                        case 3:
                            c[l].fn.call(c[l].context, e, i);
                            break;
                        default:
                            if (!h)for (d = 1, h = new Array(u - 1); d < u; d++)h[d - 1] = arguments[d];
                            c[l].fn.apply(c[l].context, h)
                    }
                }
                return !0
            }, s.prototype.on = function (t, e, i) {
                var s = new r(e, i || this), n = o ? o + t : t;
                return this._events || (this._events = o ? {} : Object.create(null)), this._events[n] ? this._events[n].fn ? this._events[n] = [this._events[n], s] : this._events[n].push(s) : this._events[n] = s, this
            }, s.prototype.once = function (t, e, i) {
                var s = new r(e, i || this, (!0)), n = o ? o + t : t;
                return this._events || (this._events = o ? {} : Object.create(null)), this._events[n] ? this._events[n].fn ? this._events[n] = [this._events[n], s] : this._events[n].push(s) : this._events[n] = s, this
            }, s.prototype.removeListener = function (t, e, i, r) {
                var s = o ? o + t : t;
                if (!this._events || !this._events[s])return this;
                var n = this._events[s], a = [];
                if (e)if (n.fn)(n.fn !== e || r && !n.once || i && n.context !== i) && a.push(n); else for (var h = 0, l = n.length; h < l; h++)(n[h].fn !== e || r && !n[h].once || i && n[h].context !== i) && a.push(n[h]);
                return a.length ? this._events[s] = 1 === a.length ? a[0] : a : delete this._events[s], this
            }, s.prototype.removeAllListeners = function (t) {
                return this._events ? (t ? delete this._events[o ? o + t : t] : this._events = o ? {} : Object.create(null), this) : this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prototype.setMaxListeners = function () {
                return this
            }, s.prefixed = o, "undefined" != typeof e && (e.exports = s)
        }, {}],
        17: [function (e, i, r) {
            !function (e) {
                var r = /iPhone/i, s = /iPod/i, n = /iPad/i, o = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, a = /Android/i, h = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i, l = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i, c = /IEMobile/i, u = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, d = /BlackBerry/i, p = /BB10/i, f = /Opera Mini/i, g = /(CriOS|Chrome)(?=.*\bMobile\b)/i, m = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, v = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), _ = function (t, e) {
                    return t.test(e)
                }, y = function (t) {
                    var e = t || navigator.userAgent, i = e.split("[FBAN");
                    if ("undefined" != typeof i[1] && (e = i[0]), i = e.split("Twitter"), "undefined" != typeof i[1] && (e = i[0]), this.apple = {
                            phone: _(r, e),
                            ipod: _(s, e),
                            tablet: !_(r, e) && _(n, e),
                            device: _(r, e) || _(s, e) || _(n, e)
                        }, this.amazon = {
                            phone: _(h, e),
                            tablet: !_(h, e) && _(l, e),
                            device: _(h, e) || _(l, e)
                        }, this.android = {
                            phone: _(h, e) || _(o, e),
                            tablet: !_(h, e) && !_(o, e) && (_(l, e) || _(a, e)),
                            device: _(h, e) || _(l, e) || _(o, e) || _(a, e)
                        }, this.windows = {
                            phone: _(c, e),
                            tablet: _(u, e),
                            device: _(c, e) || _(u, e)
                        }, this.other = {
                            blackberry: _(d, e),
                            blackberry10: _(p, e),
                            opera: _(f, e),
                            firefox: _(m, e),
                            chrome: _(g, e),
                            device: _(d, e) || _(p, e) || _(f, e) || _(m, e) || _(g, e)
                        }, this.seven_inch = _(v, e), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window)return this
                }, x = function () {
                    var t = new y;
                    return t.Class = y, t
                };
                "undefined" != typeof i && i.exports && "undefined" == typeof window ? i.exports = y : "undefined" != typeof i && i.exports && "undefined" != typeof window ? i.exports = x() : "function" == typeof t && t.amd ? t("isMobile", [], e.isMobile = x()) : e.isMobile = x()
            }(this)
        }, {}],
        18: [function (t, e, i) {
            function r(t, e, i) {
                switch (i.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, i[0]);
                    case 2:
                        return t.call(e, i[0], i[1]);
                    case 3:
                        return t.call(e, i[0], i[1], i[2])
                }
                return t.apply(e, i)
            }

            e.exports = r
        }, {}],
        19: [function (t, e, i) {
            function r(t, e) {
                for (var i = -1, r = t ? t.length : 0; ++i < r && e(t[i], i, t) !== !1;);
                return t
            }

            e.exports = r
        }, {}],
        20: [function (t, e, i) {
            function r(t, e) {
                var i = o(t) || n(t) ? s(t.length, String) : [], r = i.length, h = !!r;
                for (var c in t)!e && !l.call(t, c) || h && ("length" == c || a(c, r)) || i.push(c);
                return i
            }

            var s = t("./_baseTimes"), n = t("./isArguments"), o = t("./isArray"), a = t("./_isIndex"), h = Object.prototype, l = h.hasOwnProperty;
            e.exports = r
        }, {"./_baseTimes": 23, "./_isIndex": 24, "./isArguments": 28, "./isArray": 29}],
        21: [function (t, e, i) {
            function r(t) {
                if (!s(t))return n(t);
                var e = [];
                for (var i in Object(t))a.call(t, i) && "constructor" != i && e.push(i);
                return e
            }

            var s = t("./_isPrototype"), n = t("./_nativeKeys"), o = Object.prototype, a = o.hasOwnProperty;
            e.exports = r
        }, {"./_isPrototype": 25, "./_nativeKeys": 26}],
        22: [function (t, e, i) {
            function r(t, e) {
                return e = n(void 0 === e ? t.length - 1 : e, 0), function () {
                    for (var i = arguments, r = -1, o = n(i.length - e, 0), a = Array(o); ++r < o;)a[r] = i[e + r];
                    r = -1;
                    for (var h = Array(e + 1); ++r < e;)h[r] = i[r];
                    return h[e] = a, s(t, this, h)
                }
            }

            var s = t("./_apply"), n = Math.max;
            e.exports = r
        }, {"./_apply": 18}],
        23: [function (t, e, i) {
            function r(t, e) {
                for (var i = -1, r = Array(t); ++i < t;)r[i] = e(i);
                return r
            }

            e.exports = r
        }, {}],
        24: [function (t, e, i) {
            function r(t, e) {
                return e = null == e ? s : e, !!e && ("number" == typeof t || n.test(t)) && t > -1 && t % 1 == 0 && t < e
            }

            var s = 9007199254740991, n = /^(?:0|[1-9]\d*)$/;
            e.exports = r
        }, {}],
        25: [function (t, e, i) {
            function r(t) {
                var e = t && t.constructor, i = "function" == typeof e && e.prototype || s;
                return t === i
            }

            var s = Object.prototype;
            e.exports = r
        }, {}],
        26: [function (t, e, i) {
            var r = t("./_overArg"), s = r(Object.keys, Object);
            e.exports = s
        }, {"./_overArg": 27}],
        27: [function (t, e, i) {
            function r(t, e) {
                return function (i) {
                    return t(e(i))
                }
            }

            e.exports = r
        }, {}],
        28: [function (t, e, i) {
            function r(t) {
                return s(t) && a.call(t, "callee") && (!l.call(t, "callee") || h.call(t) == n)
            }

            var s = t("./isArrayLikeObject"), n = "[object Arguments]", o = Object.prototype, a = o.hasOwnProperty, h = o.toString, l = o.propertyIsEnumerable;
            e.exports = r
        }, {"./isArrayLikeObject": 31}],
        29: [function (t, e, i) {
            var r = Array.isArray;
            e.exports = r
        }, {}],
        30: [function (t, e, i) {
            function r(t) {
                return null != t && n(t.length) && !s(t)
            }

            var s = t("./isFunction"), n = t("./isLength");
            e.exports = r
        }, {"./isFunction": 32, "./isLength": 33}],
        31: [function (t, e, i) {
            function r(t) {
                return n(t) && s(t)
            }

            var s = t("./isArrayLike"), n = t("./isObjectLike");
            e.exports = r
        }, {"./isArrayLike": 30, "./isObjectLike": 35}],
        32: [function (t, e, i) {
            function r(t) {
                var e = s(t) ? h.call(t) : "";
                return e == n || e == o
            }

            var s = t("./isObject"), n = "[object Function]", o = "[object GeneratorFunction]", a = Object.prototype, h = a.toString;
            e.exports = r
        }, {"./isObject": 34}],
        33: [function (t, e, i) {
            function r(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= s
            }

            var s = 9007199254740991;
            e.exports = r
        }, {}],
        34: [function (t, e, i) {
            function r(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            e.exports = r
        }, {}],
        35: [function (t, e, i) {
            function r(t) {
                return !!t && "object" == typeof t
            }

            e.exports = r
        }, {}],
        36: [function (t, e, i) {
            function r(t) {
                return "symbol" == typeof t || s(t) && a.call(t) == n
            }

            var s = t("./isObjectLike"), n = "[object Symbol]", o = Object.prototype, a = o.toString;
            e.exports = r
        }, {"./isObjectLike": 35}],
        37: [function (t, e, i) {
            function r(t) {
                return o(t) ? s(t) : n(t)
            }

            var s = t("./_arrayLikeKeys"), n = t("./_baseKeys"), o = t("./isArrayLike");
            e.exports = r
        }, {"./_arrayLikeKeys": 20, "./_baseKeys": 21, "./isArrayLike": 30}],
        38: [function (t, e, i) {
            function r() {
            }

            e.exports = r
        }, {}],
        39: [function (t, e, i) {
            function r(t, e) {
                if ("function" != typeof t)throw new TypeError(o);
                return e = void 0 === e ? e : n(e), s(t, e)
            }

            var s = t("./_baseRest"), n = t("./toInteger"), o = "Expected a function";
            e.exports = r
        }, {"./_baseRest": 22, "./toInteger": 41}],
        40: [function (t, e, i) {
            function r(t) {
                if (!t)return 0 === t ? t : 0;
                if (t = s(t), t === n || t === -n) {
                    var e = t < 0 ? -1 : 1;
                    return e * o
                }
                return t === t ? t : 0
            }

            var s = t("./toNumber"), n = 1 / 0, o = 1.7976931348623157e308;
            e.exports = r
        }, {"./toNumber": 42}],
        41: [function (t, e, i) {
            function r(t) {
                var e = s(t), i = e % 1;
                return e === e ? i ? e - i : e : 0
            }

            var s = t("./toFinite");
            e.exports = r
        }, {"./toFinite": 40}],
        42: [function (t, e, i) {
            function r(t) {
                if ("number" == typeof t)return t;
                if (n(t))return o;
                if (s(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = s(e) ? e + "" : e
                }
                if ("string" != typeof t)return 0 === t ? t : +t;
                t = t.replace(a, "");
                var i = l.test(t);
                return i || c.test(t) ? u(t.slice(2), i ? 2 : 8) : h.test(t) ? o : +t
            }

            var s = t("./isObject"), n = t("./isSymbol"), o = NaN, a = /^\s+|\s+$/g, h = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, c = /^0o[0-7]+$/i, u = parseInt;
            e.exports = r
        }, {"./isObject": 34, "./isSymbol": 36}],
        43: [function (t, e, i) {
            "use strict";
            function r(t) {
                if (null === t || void 0 === t)throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }

            function s() {
                try {
                    if (!Object.assign)return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0])return !1;
                    for (var e = {}, i = 0; i < 10; i++)e["_" + String.fromCharCode(i)] = i;
                    var r = Object.getOwnPropertyNames(e).map(function (t) {
                        return e[t]
                    });
                    if ("0123456789" !== r.join(""))return !1;
                    var s = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                        s[t] = t
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
                } catch (n) {
                    return !1
                }
            }

            var n = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
            e.exports = s() ? Object.assign : function (t, e) {
                for (var i, s, a = r(t), h = 1; h < arguments.length; h++) {
                    i = Object(arguments[h]);
                    for (var l in i)n.call(i, l) && (a[l] = i[l]);
                    if (Object.getOwnPropertySymbols) {
                        s = Object.getOwnPropertySymbols(i);
                        for (var c = 0; c < s.length; c++)o.call(i, s[c]) && (a[s[c]] = i[s[c]])
                    }
                }
                return a
            }
        }, {}],
        44: [function (t, e, i) {
            (function (t) {
                function e(t, e) {
                    for (var i = 0, r = t.length - 1; r >= 0; r--) {
                        var s = t[r];
                        "." === s ? t.splice(r, 1) : ".." === s ? (t.splice(r, 1), i++) : i && (t.splice(r, 1), i--)
                    }
                    if (e)for (; i--; i)t.unshift("..");
                    return t
                }

                function r(t, e) {
                    if (t.filter)return t.filter(e);
                    for (var i = [], r = 0; r < t.length; r++)e(t[r], r, t) && i.push(t[r]);
                    return i
                }

                var s = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, n = function (t) {
                    return s.exec(t).slice(1)
                };
                i.resolve = function () {
                    for (var i = "", s = !1, n = arguments.length - 1; n >= -1 && !s; n--) {
                        var o = n >= 0 ? arguments[n] : t.cwd();
                        if ("string" != typeof o)throw new TypeError("Arguments to path.resolve must be strings");
                        o && (i = o + "/" + i, s = "/" === o.charAt(0))
                    }
                    return i = e(r(i.split("/"), function (t) {
                        return !!t
                    }), !s).join("/"), (s ? "/" : "") + i || "."
                }, i.normalize = function (t) {
                    var s = i.isAbsolute(t), n = "/" === o(t, -1);
                    return t = e(r(t.split("/"), function (t) {
                        return !!t
                    }), !s).join("/"), t || s || (t = "."), t && n && (t += "/"), (s ? "/" : "") + t
                }, i.isAbsolute = function (t) {
                    return "/" === t.charAt(0)
                }, i.join = function () {
                    var t = Array.prototype.slice.call(arguments, 0);
                    return i.normalize(r(t, function (t, e) {
                        if ("string" != typeof t)throw new TypeError("Arguments to path.join must be strings");
                        return t
                    }).join("/"))
                }, i.relative = function (t, e) {
                    function r(t) {
                        for (var e = 0; e < t.length && "" === t[e]; e++);
                        for (var i = t.length - 1; i >= 0 && "" === t[i]; i--);
                        return e > i ? [] : t.slice(e, i - e + 1)
                    }

                    t = i.resolve(t).substr(1), e = i.resolve(e).substr(1);
                    for (var s = r(t.split("/")), n = r(e.split("/")), o = Math.min(s.length, n.length), a = o, h = 0; h < o; h++)if (s[h] !== n[h]) {
                        a = h;
                        break
                    }
                    for (var l = [], h = a; h < s.length; h++)l.push("..");
                    return l = l.concat(n.slice(a)), l.join("/")
                }, i.sep = "/", i.delimiter = ":", i.dirname = function (t) {
                    var e = n(t), i = e[0], r = e[1];
                    return i || r ? (r && (r = r.substr(0, r.length - 1)), i + r) : "."
                }, i.basename = function (t, e) {
                    var i = n(t)[2];
                    return e && i.substr(-1 * e.length) === e && (i = i.substr(0, i.length - e.length)), i
                }, i.extname = function (t) {
                    return n(t)[3]
                };
                var o = "b" === "ab".substr(-1) ? function (t, e, i) {
                    return t.substr(e, i)
                } : function (t, e, i) {
                    return e < 0 && (e = t.length + e), t.substr(e, i)
                }
            }).call(this, t("_process"))
        }, {_process: 61}],
        45: [function (t, e, i) {
            var r = new ArrayBuffer(0), s = function (t, e, i, s) {
                this.gl = t, this.buffer = t.createBuffer(), this.type = e || t.ARRAY_BUFFER, this.drawType = s || t.STATIC_DRAW, this.data = r, i && this.upload(i)
            };
            s.prototype.upload = function (t, e, i) {
                i || this.bind();
                var r = this.gl;
                t = t || this.data, e = e || 0, this.data.byteLength >= t.byteLength ? r.bufferSubData(this.type, e, t) : r.bufferData(this.type, t, this.drawType), this.data = t
            }, s.prototype.bind = function () {
                var t = this.gl;
                t.bindBuffer(this.type, this.buffer)
            }, s.createVertexBuffer = function (t, e, i) {
                return new s(t, t.ARRAY_BUFFER, e, i)
            }, s.createIndexBuffer = function (t, e, i) {
                return new s(t, t.ELEMENT_ARRAY_BUFFER, e, i)
            }, s.create = function (t, e, i, r) {
                return new s(t, e, r)
            }, s.prototype.destroy = function () {
                this.gl.deleteBuffer(this.buffer)
            }, e.exports = s
        }, {}],
        46: [function (t, e, i) {
            var r = t("./GLTexture"), s = function (t, e, i) {
                this.gl = t, this.framebuffer = t.createFramebuffer(), this.stencil = null, this.texture = null, this.width = e || 100, this.height = i || 100
            };
            s.prototype.enableTexture = function (t) {
                var e = this.gl;
                this.texture = t || new r(e), this.texture.bind(), this.bind(), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.texture, 0);
            }, s.prototype.enableStencil = function () {
                if (!this.stencil) {
                    var t = this.gl;
                    this.stencil = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.stencil), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencil), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.width, this.height)
                }
            }, s.prototype.clear = function (t, e, i, r) {
                this.bind();
                var s = this.gl;
                s.clearColor(t, e, i, r), s.clear(s.COLOR_BUFFER_BIT)
            }, s.prototype.bind = function () {
                var t = this.gl;
                this.texture && this.texture.unbind(), t.bindFramebuffer(t.FRAMEBUFFER, this.framebuffer)
            }, s.prototype.unbind = function () {
                var t = this.gl;
                t.bindFramebuffer(t.FRAMEBUFFER, null)
            }, s.prototype.resize = function (t, e) {
                var i = this.gl;
                this.width = t, this.height = e, this.texture && this.texture.uploadData(null, t, e), this.stencil && (i.bindRenderbuffer(i.RENDERBUFFER, this.stencil), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t, e))
            }, s.prototype.destroy = function () {
                var t = this.gl;
                this.texture && this.texture.destroy(), t.deleteFramebuffer(this.framebuffer), this.gl = null, this.stencil = null, this.texture = null
            }, s.createRGBA = function (t, e, i) {
                var n = r.fromData(t, null, e, i);
                n.enableNearestScaling(), n.enableWrapClamp();
                var o = new s(t, e, i);
                return o.enableTexture(n), o.unbind(), o
            }, s.createFloat32 = function (t, e, i, n) {
                var o = new r.fromData(t, n, e, i);
                o.enableNearestScaling(), o.enableWrapClamp();
                var a = new s(t, e, i);
                return a.enableTexture(o), a.unbind(), a
            }, e.exports = s
        }, {"./GLTexture": 48}],
        47: [function (t, e, i) {
            var r = t("./shader/compileProgram"), s = t("./shader/extractAttributes"), n = t("./shader/extractUniforms"), o = t("./shader/generateUniformAccessObject"), a = function (t, e, i) {
                this.gl = t, this.program = r(t, e, i), this.attributes = s(t, this.program);
                var a = n(t, this.program);
                this.uniforms = o(t, a)
            };
            a.prototype.bind = function () {
                this.gl.useProgram(this.program)
            }, a.prototype.destroy = function () {
            }, e.exports = a
        }, {
            "./shader/compileProgram": 53,
            "./shader/extractAttributes": 55,
            "./shader/extractUniforms": 56,
            "./shader/generateUniformAccessObject": 57
        }],
        48: [function (t, e, i) {
            var r = function (t, e, i, r, s) {
                this.gl = t, this.texture = t.createTexture(), this.mipmap = !1, this.premultiplyAlpha = !1, this.width = e || 0, this.height = i || 0, this.format = r || t.RGBA, this.type = s || t.UNSIGNED_BYTE
            };
            r.prototype.upload = function (t) {
                this.bind();
                var e = this.gl;
                this.width = t.videoWidth || t.width, this.height = t.videoHeight || t.height, e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), e.texImage2D(e.TEXTURE_2D, 0, this.format, this.format, this.type, t)
            };
            var s = !1;
            r.prototype.uploadData = function (t, e, i) {
                this.bind();
                var r = this.gl;
                if (this.width = e || this.width, this.height = i || this.height, t instanceof Float32Array) {
                    if (!s) {
                        var n = r.getExtension("OES_texture_float");
                        if (!n)throw new Error("floating point textures not available");
                        s = !0
                    }
                    this.type = r.FLOAT
                } else this.type = r.UNSIGNED_BYTE;
                r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), r.texImage2D(r.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, this.type, t || null)
            }, r.prototype.bind = function (t) {
                var e = this.gl;
                void 0 !== t && e.activeTexture(e.TEXTURE0 + t), e.bindTexture(e.TEXTURE_2D, this.texture)
            }, r.prototype.unbind = function () {
                var t = this.gl;
                t.bindTexture(t.TEXTURE_2D, null)
            }, r.prototype.minFilter = function (t) {
                var e = this.gl;
                this.bind(), this.mipmap ? e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR : e.NEAREST)
            }, r.prototype.magFilter = function (t) {
                var e = this.gl;
                this.bind(), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t ? e.LINEAR : e.NEAREST)
            }, r.prototype.enableMipmap = function () {
                var t = this.gl;
                this.bind(), this.mipmap = !0, t.generateMipmap(t.TEXTURE_2D)
            }, r.prototype.enableLinearScaling = function () {
                this.minFilter(!0), this.magFilter(!0)
            }, r.prototype.enableNearestScaling = function () {
                this.minFilter(!1), this.magFilter(!1)
            }, r.prototype.enableWrapClamp = function () {
                var t = this.gl;
                this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
            }, r.prototype.enableWrapRepeat = function () {
                var t = this.gl;
                this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)
            }, r.prototype.enableWrapMirrorRepeat = function () {
                var t = this.gl;
                this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.MIRRORED_REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.MIRRORED_REPEAT)
            }, r.prototype.destroy = function () {
                var t = this.gl;
                t.deleteTexture(this.texture)
            }, r.fromSource = function (t, e, i) {
                var s = new r(t);
                return s.premultiplyAlpha = i || !1, s.upload(e), s
            }, r.fromData = function (t, e, i, s) {
                var n = new r(t);
                return n.uploadData(e, i, s), n
            }, e.exports = r
        }, {}],
        49: [function (t, e, i) {
            function r(t, e) {
                if (this.nativeVaoExtension = null, r.FORCE_NATIVE || (this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")), this.nativeState = e, this.nativeVaoExtension) {
                    this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
                    var i = t.getParameter(t.MAX_VERTEX_ATTRIBS);
                    this.nativeState = {tempAttribState: new Array(i), attribState: new Array(i)}
                }
                this.gl = t, this.attributes = [], this.indexBuffer = null, this.dirty = !1
            }

            var s = t("./setVertexAttribArrays");
            r.prototype.constructor = r, e.exports = r, r.FORCE_NATIVE = !1, r.prototype.bind = function () {
                return this.nativeVao ? (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.dirty && (this.dirty = !1, this.activate())) : this.activate(), this
            }, r.prototype.unbind = function () {
                return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(null), this
            }, r.prototype.activate = function () {
                for (var t = this.gl, e = null, i = 0; i < this.attributes.length; i++) {
                    var r = this.attributes[i];
                    e !== r.buffer && (r.buffer.bind(), e = r.buffer), t.vertexAttribPointer(r.attribute.location, r.attribute.size, r.type || t.FLOAT, r.normalized || !1, r.stride || 0, r.start || 0)
                }
                return s(t, this.attributes, this.nativeState), this.indexBuffer.bind(), this
            }, r.prototype.addAttribute = function (t, e, i, r, s, n) {
                return this.attributes.push({
                    buffer: t,
                    attribute: e,
                    location: e.location,
                    type: i || this.gl.FLOAT,
                    normalized: r || !1,
                    stride: s || 0,
                    start: n || 0
                }), this.dirty = !0, this
            }, r.prototype.addIndex = function (t) {
                return this.indexBuffer = t, this.dirty = !0, this
            }, r.prototype.clear = function () {
                return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.attributes.length = 0, this.indexBuffer = null, this
            }, r.prototype.draw = function (t, e, i) {
                var r = this.gl;
                return r.drawElements(t, e, r.UNSIGNED_SHORT, i || 0), this
            }, r.prototype.destroy = function () {
                this.gl = null, this.indexBuffer = null, this.attributes = null, this.nativeState = null, this.nativeVao && this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao), this.nativeVaoExtension = null, this.nativeVao = null
            }
        }, {"./setVertexAttribArrays": 52}],
        50: [function (t, e, i) {
            var r = function (t, e) {
                var i = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
                if (!i)throw new Error("This browser does not support webGL. Try using the canvas renderer");
                return i
            };
            e.exports = r
        }, {}],
        51: [function (t, e, i) {
            var r = {
                createContext: t("./createContext"),
                setVertexAttribArrays: t("./setVertexAttribArrays"),
                GLBuffer: t("./GLBuffer"),
                GLFramebuffer: t("./GLFramebuffer"),
                GLShader: t("./GLShader"),
                GLTexture: t("./GLTexture"),
                VertexArrayObject: t("./VertexArrayObject"),
                shader: t("./shader")
            };
            "undefined" != typeof e && e.exports && (e.exports = r), "undefined" != typeof window && (window.pixi = {gl: r})
        }, {
            "./GLBuffer": 45,
            "./GLFramebuffer": 46,
            "./GLShader": 47,
            "./GLTexture": 48,
            "./VertexArrayObject": 49,
            "./createContext": 50,
            "./setVertexAttribArrays": 52,
            "./shader": 58
        }],
        52: [function (t, e, i) {
            var r = function (t, e, i) {
                var r;
                if (i) {
                    var s = i.tempAttribState, n = i.attribState;
                    for (r = 0; r < s.length; r++)s[r] = !1;
                    for (r = 0; r < e.length; r++)s[e[r].attribute.location] = !0;
                    for (r = 0; r < n.length; r++)n[r] !== s[r] && (n[r] = s[r], i.attribState[r] ? t.enableVertexAttribArray(r) : t.disableVertexAttribArray(r))
                } else for (r = 0; r < e.length; r++) {
                    var o = e[r];
                    t.enableVertexAttribArray(o.attribute.location)
                }
            };
            e.exports = r
        }, {}],
        53: [function (t, e, i) {
            var r = function (t, e, i) {
                var r = s(t, t.VERTEX_SHADER, e), n = s(t, t.FRAGMENT_SHADER, i), o = t.createProgram();
                return t.attachShader(o, r), t.attachShader(o, n), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(o, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(o) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(o)), t.deleteProgram(o), o = null), t.deleteShader(r), t.deleteShader(n), o
            }, s = function (t, e, i) {
                var r = t.createShader(e);
                return t.shaderSource(r, i), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS) ? r : (console.log(t.getShaderInfoLog(r)), null)
            };
            e.exports = r
        }, {}],
        54: [function (t, e, i) {
            var r = function (t, e) {
                switch (t) {
                    case"float":
                        return 0;
                    case"vec2":
                        return new Float32Array(2 * e);
                    case"vec3":
                        return new Float32Array(3 * e);
                    case"vec4":
                        return new Float32Array(4 * e);
                    case"int":
                    case"sampler2D":
                        return 0;
                    case"ivec2":
                        return new Int32Array(2 * e);
                    case"ivec3":
                        return new Int32Array(3 * e);
                    case"ivec4":
                        return new Int32Array(4 * e);
                    case"bool":
                        return !1;
                    case"bvec2":
                        return s(2 * e);
                    case"bvec3":
                        return s(3 * e);
                    case"bvec4":
                        return s(4 * e);
                    case"mat2":
                        return new Float32Array([1, 0, 0, 1]);
                    case"mat3":
                        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                    case"mat4":
                        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            }, s = function (t) {
                for (var e = new Array(t), i = 0; i < e.length; i++)e[i] = !1;
                return e
            };
            e.exports = r
        }, {}],
        55: [function (t, e, i) {
            var r = t("./mapType"), s = t("./mapSize"), n = function (t, e) {
                for (var i = {}, n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), a = 0; a < n; a++) {
                    var h = t.getActiveAttrib(e, a), l = r(t, h.type);
                    i[h.name] = {type: l, size: s(l), location: t.getAttribLocation(e, h.name), pointer: o}
                }
                return i
            }, o = function (t, e, i, r) {
                gl.vertexAttribPointer(this.location, this.size, t || gl.FLOAT, e || !1, i || 0, r || 0)
            };
            e.exports = n
        }, {"./mapSize": 59, "./mapType": 60}],
        56: [function (t, e, i) {
            var r = t("./mapType"), s = t("./defaultValue"), n = function (t, e) {
                for (var i = {}, n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), o = 0; o < n; o++) {
                    var a = t.getActiveUniform(e, o), h = a.name.replace(/\[.*?\]/, ""), l = r(t, a.type);
                    i[h] = {type: l, size: a.size, location: t.getUniformLocation(e, h), value: s(l, a.size)}
                }
                return i
            };
            e.exports = n
        }, {"./defaultValue": 54, "./mapType": 60}],
        57: [function (t, e, i) {
            var r = function (t, e) {
                var i = {data: {}};
                i.gl = t;
                for (var r = Object.keys(e), a = 0; a < r.length; a++) {
                    var h = r[a], l = h.split("."), c = l[l.length - 1], u = o(l, i), d = e[h];
                    u.data[c] = d, u.gl = t, Object.defineProperty(u, c, {get: s(c), set: n(c, d)})
                }
                return i
            }, s = function (t) {
                var e = a.replace("%%", t);
                return new Function(e)
            }, n = function (t, e) {
                var i, r = h.replace(/%%/g, t);
                return i = 1 === e.size ? l[e.type] : c[e.type], i && (r += "\nthis.gl." + i + ";"), new Function("value", r)
            }, o = function (t, e) {
                for (var i = e, r = 0; r < t.length - 1; r++) {
                    var s = i[t[r]] || {data: {}};
                    i[t[r]] = s, i = s
                }
                return i
            }, a = ["return this.data.%%.value;"].join("\n"), h = ["this.data.%%.value = value;", "var location = this.data.%%.location;"].join("\n"), l = {
                "float": "uniform1f(location, value)",
                vec2: "uniform2f(location, value[0], value[1])",
                vec3: "uniform3f(location, value[0], value[1], value[2])",
                vec4: "uniform4f(location, value[0], value[1], value[2], value[3])",
                "int": "uniform1i(location, value)",
                ivec2: "uniform2i(location, value[0], value[1])",
                ivec3: "uniform3i(location, value[0], value[1], value[2])",
                ivec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                bool: "uniform1i(location, value)",
                bvec2: "uniform2i(location, value[0], value[1])",
                bvec3: "uniform3i(location, value[0], value[1], value[2])",
                bvec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                mat2: "uniformMatrix2fv(location, false, value)",
                mat3: "uniformMatrix3fv(location, false, value)",
                mat4: "uniformMatrix4fv(location, false, value)",
                sampler2D: "uniform1i(location, value)"
            }, c = {
                "float": "uniform1fv(location, value)",
                vec2: "uniform2fv(location, value)",
                vec3: "uniform3fv(location, value)",
                vec4: "uniform4fv(location, value)",
                "int": "uniform1iv(location, value)",
                ivec2: "uniform2iv(location, value)",
                ivec3: "uniform3iv(location, value)",
                ivec4: "uniform4iv(location, value)",
                bool: "uniform1iv(location, value)",
                bvec2: "uniform2iv(location, value)",
                bvec3: "uniform3iv(location, value)",
                bvec4: "uniform4iv(location, value)",
                sampler2D: "uniform1iv(location, value)"
            };
            e.exports = r
        }, {}],
        58: [function (t, e, i) {
            e.exports = {
                compileProgram: t("./compileProgram"),
                defaultValue: t("./defaultValue"),
                extractAttributes: t("./extractAttributes"),
                extractUniforms: t("./extractUniforms"),
                generateUniformAccessObject: t("./generateUniformAccessObject"),
                mapSize: t("./mapSize"),
                mapType: t("./mapType")
            }
        }, {
            "./compileProgram": 53,
            "./defaultValue": 54,
            "./extractAttributes": 55,
            "./extractUniforms": 56,
            "./generateUniformAccessObject": 57,
            "./mapSize": 59,
            "./mapType": 60
        }],
        59: [function (t, e, i) {
            var r = function (t) {
                return s[t]
            }, s = {
                "float": 1,
                vec2: 2,
                vec3: 3,
                vec4: 4,
                "int": 1,
                ivec2: 2,
                ivec3: 3,
                ivec4: 4,
                bool: 1,
                bvec2: 2,
                bvec3: 3,
                bvec4: 4,
                mat2: 4,
                mat3: 9,
                mat4: 16,
                sampler2D: 1
            };
            e.exports = r
        }, {}],
        60: [function (t, e, i) {
            var r = function (t, e) {
                if (!s) {
                    var i = Object.keys(n);
                    s = {};
                    for (var r = 0; r < i.length; ++r) {
                        var o = i[r];
                        s[t[o]] = n[o]
                    }
                }
                return s[e]
            }, s = null, n = {
                FLOAT: "float",
                FLOAT_VEC2: "vec2",
                FLOAT_VEC3: "vec3",
                FLOAT_VEC4: "vec4",
                INT: "int",
                INT_VEC2: "ivec2",
                INT_VEC3: "ivec3",
                INT_VEC4: "ivec4",
                BOOL: "bool",
                BOOL_VEC2: "bvec2",
                BOOL_VEC3: "bvec3",
                BOOL_VEC4: "bvec4",
                FLOAT_MAT2: "mat2",
                FLOAT_MAT3: "mat3",
                FLOAT_MAT4: "mat4",
                SAMPLER_2D: "sampler2D"
            };
            e.exports = r
        }, {}],
        61: [function (t, e, i) {
            function r() {
                throw new Error("setTimeout has not been defined")
            }

            function s() {
                throw new Error("clearTimeout has not been defined")
            }

            function n(t) {
                if (u === setTimeout)return setTimeout(t, 0);
                if ((u === r || !u) && setTimeout)return u = setTimeout, setTimeout(t, 0);
                try {
                    return u(t, 0)
                } catch (e) {
                    try {
                        return u.call(null, t, 0)
                    } catch (e) {
                        return u.call(this, t, 0)
                    }
                }
            }

            function o(t) {
                if (d === clearTimeout)return clearTimeout(t);
                if ((d === s || !d) && clearTimeout)return d = clearTimeout, clearTimeout(t);
                try {
                    return d(t)
                } catch (e) {
                    try {
                        return d.call(null, t)
                    } catch (e) {
                        return d.call(this, t)
                    }
                }
            }

            function a() {
                m && f && (m = !1, f.length ? g = f.concat(g) : v = -1, g.length && h())
            }

            function h() {
                if (!m) {
                    var t = n(a);
                    m = !0;
                    for (var e = g.length; e;) {
                        for (f = g, g = []; ++v < e;)f && f[v].run();
                        v = -1, e = g.length
                    }
                    f = null, m = !1, o(t)
                }
            }

            function l(t, e) {
                this.fun = t, this.array = e
            }

            function c() {
            }

            var u, d, p = e.exports = {};
            !function () {
                try {
                    u = "function" == typeof setTimeout ? setTimeout : r
                } catch (t) {
                    u = r
                }
                try {
                    d = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (t) {
                    d = s
                }
            }();
            var f, g = [], m = !1, v = -1;
            p.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)for (var i = 1; i < arguments.length; i++)e[i - 1] = arguments[i];
                g.push(new l(t, e)), 1 !== g.length || m || n(h)
            }, l.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, p.cwd = function () {
                return "/"
            }, p.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, p.umask = function () {
                return 0
            }
        }, {}],
        62: [function (e, i, r) {
            (function (e) {
                !function (s) {
                    function n(t) {
                        throw new RangeError(B[t])
                    }

                    function o(t, e) {
                        for (var i = t.length, r = []; i--;)r[i] = e(t[i]);
                        return r
                    }

                    function a(t, e) {
                        var i = t.split("@"), r = "";
                        i.length > 1 && (r = i[0] + "@", t = i[1]), t = t.replace(I, ".");
                        var s = t.split("."), n = o(s, e).join(".");
                        return r + n
                    }

                    function h(t) {
                        for (var e, i, r = [], s = 0, n = t.length; s < n;)e = t.charCodeAt(s++), e >= 55296 && e <= 56319 && s < n ? (i = t.charCodeAt(s++), 56320 == (64512 & i) ? r.push(((1023 & e) << 10) + (1023 & i) + 65536) : (r.push(e), s--)) : r.push(e);
                        return r
                    }

                    function l(t) {
                        return o(t, function (t) {
                            var e = "";
                            return t > 65535 && (t -= 65536, e += N(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += N(t)
                        }).join("")
                    }

                    function c(t) {
                        return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : T
                    }

                    function u(t, e) {
                        return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                    }

                    function d(t, e, i) {
                        var r = 0;
                        for (t = i ? W(t / P) : t >> 1, t += W(t / e); t > D * S >> 1; r += T)t = W(t / D);
                        return W(r + (D + 1) * t / (t + E))
                    }

                    function p(t) {
                        var e, i, r, s, o, a, h, u, p, f, g = [], m = t.length, v = 0, _ = C, y = A;
                        for (i = t.lastIndexOf(R), i < 0 && (i = 0), r = 0; r < i; ++r)t.charCodeAt(r) >= 128 && n("not-basic"), g.push(t.charCodeAt(r));
                        for (s = i > 0 ? i + 1 : 0; s < m;) {
                            for (o = v, a = 1, h = T; s >= m && n("invalid-input"), u = c(t.charCodeAt(s++)), (u >= T || u > W((w - v) / a)) && n("overflow"), v += u * a, p = h <= y ? L : h >= y + S ? S : h - y, !(u < p); h += T)f = T - p, a > W(w / f) && n("overflow"), a *= f;
                            e = g.length + 1, y = d(v - o, e, 0 == o), W(v / e) > w - _ && n("overflow"), _ += W(v / e), v %= e, g.splice(v++, 0, _)
                        }
                        return l(g)
                    }

                    function f(t) {
                        var e, i, r, s, o, a, l, c, p, f, g, m, v, _, y, x = [];
                        for (t = h(t), m = t.length, e = C, i = 0, o = A, a = 0; a < m; ++a)g = t[a], g < 128 && x.push(N(g));
                        for (r = s = x.length, s && x.push(R); r < m;) {
                            for (l = w, a = 0; a < m; ++a)g = t[a], g >= e && g < l && (l = g);
                            for (v = r + 1, l - e > W((w - i) / v) && n("overflow"), i += (l - e) * v, e = l, a = 0; a < m; ++a)if (g = t[a], g < e && ++i > w && n("overflow"), g == e) {
                                for (c = i, p = T; f = p <= o ? L : p >= o + S ? S : p - o, !(c < f); p += T)y = c - f, _ = T - f, x.push(N(u(f + y % _, 0))), c = W(y / _);
                                x.push(N(u(c, 0))), o = d(i, v, r == s), i = 0, ++r
                            }
                            ++i, ++e
                        }
                        return x.join("")
                    }

                    function g(t) {
                        return a(t, function (t) {
                            return M.test(t) ? p(t.slice(4).toLowerCase()) : t
                        })
                    }

                    function m(t) {
                        return a(t, function (t) {
                            return O.test(t) ? "xn--" + f(t) : t
                        })
                    }

                    var v = "object" == typeof r && r && !r.nodeType && r, _ = "object" == typeof i && i && !i.nodeType && i, y = "object" == typeof e && e;
                    y.global !== y && y.window !== y && y.self !== y || (s = y);
                    var x, b, w = 2147483647, T = 36, L = 1, S = 26, E = 38, P = 700, A = 72, C = 128, R = "-", M = /^xn--/, O = /[^\x20-\x7E]/, I = /[\x2E\u3002\uFF0E\uFF61]/g, B = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    }, D = T - L, W = Math.floor, N = String.fromCharCode;
                    if (x = {
                            version: "1.4.1",
                            ucs2: {decode: h, encode: l},
                            decode: p,
                            encode: f,
                            toASCII: m,
                            toUnicode: g
                        }, "function" == typeof t && "object" == typeof t.amd && t.amd)t("punycode", function () {
                        return x
                    }); else if (v && _)if (i.exports == v)_.exports = x; else for (b in x)x.hasOwnProperty(b) && (v[b] = x[b]); else s.punycode = x
                }(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        63: [function (t, e, i) {
            "use strict";
            function r(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            e.exports = function (t, e, i, n) {
                e = e || "&", i = i || "=";
                var o = {};
                if ("string" != typeof t || 0 === t.length)return o;
                var a = /\+/g;
                t = t.split(e);
                var h = 1e3;
                n && "number" == typeof n.maxKeys && (h = n.maxKeys);
                var l = t.length;
                h > 0 && l > h && (l = h);
                for (var c = 0; c < l; ++c) {
                    var u, d, p, f, g = t[c].replace(a, "%20"), m = g.indexOf(i);
                    m >= 0 ? (u = g.substr(0, m), d = g.substr(m + 1)) : (u = g, d = ""), p = decodeURIComponent(u), f = decodeURIComponent(d), r(o, p) ? s(o[p]) ? o[p].push(f) : o[p] = [o[p], f] : o[p] = f
                }
                return o
            };
            var s = Array.isArray || function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }
        }, {}],
        64: [function (t, e, i) {
            "use strict";
            function r(t, e) {
                if (t.map)return t.map(e);
                for (var i = [], r = 0; r < t.length; r++)i.push(e(t[r], r));
                return i
            }

            var s = function (t) {
                switch (typeof t) {
                    case"string":
                        return t;
                    case"boolean":
                        return t ? "true" : "false";
                    case"number":
                        return isFinite(t) ? t : "";
                    default:
                        return ""
                }
            };
            e.exports = function (t, e, i, a) {
                return e = e || "&", i = i || "=", null === t && (t = void 0), "object" == typeof t ? r(o(t), function (o) {
                    var a = encodeURIComponent(s(o)) + i;
                    return n(t[o]) ? r(t[o], function (t) {
                        return a + encodeURIComponent(s(t))
                    }).join(e) : a + encodeURIComponent(s(t[o]))
                }).join(e) : a ? encodeURIComponent(s(a)) + i + encodeURIComponent(s(t)) : ""
            };
            var n = Array.isArray || function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }, o = Object.keys || function (t) {
                    var e = [];
                    for (var i in t)Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
                    return e
                }
        }, {}],
        65: [function (t, e, i) {
            "use strict";
            i.decode = i.parse = t("./decode"), i.encode = i.stringify = t("./encode")
        }, {"./decode": 63, "./encode": 64}],
        66: [function (t, e, i) {
            "use strict";
            function r(t, e) {
                h.call(this), e = e || l, this.baseUrl = t || "", this.progress = 0, this.loading = !1, this._progressChunk = 0, this._beforeMiddleware = [], this._afterMiddleware = [], this._boundLoadResource = this._loadResource.bind(this), this._buffer = [], this._numToLoad = 0, this._queue = s(this._boundLoadResource, e), this.resources = {}
            }

            var s = t("async/queue"), n = t("async/eachSeries"), o = t("url"), a = t("./Resource"), h = t("eventemitter3"), l = 10, c = 100;
            r.prototype = Object.create(h.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.add = r.prototype.enqueue = function (t, e, i, r) {
                if (Array.isArray(t)) {
                    for (var s = 0; s < t.length; ++s)this.add(t[s]);
                    return this
                }
                if ("object" == typeof t && (r = e || t.callback || t.onComplete, i = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (r = i, i = e, e = t), "string" != typeof e)throw new Error("No url passed to add resource to loader.");
                if ("function" == typeof i && (r = i, i = null), this.resources[t])throw new Error('Resource with name "' + t + '" already exists.');
                return e = this._prepareUrl(e), this.resources[t] = new a(t, e, i), "function" == typeof r && this.resources[t].once("afterMiddleware", r), this._numToLoad++, this._queue.started ? (this._queue.push(this.resources[t]), this._progressChunk = (c - this.progress) / (this._queue.length() + this._queue.running())) : (this._buffer.push(this.resources[t]), this._progressChunk = c / this._buffer.length), this
            }, r.prototype.before = r.prototype.pre = function (t) {
                return this._beforeMiddleware.push(t), this
            }, r.prototype.after = r.prototype.use = function (t) {
                return this._afterMiddleware.push(t), this
            }, r.prototype.reset = function () {
                this.progress = 0, this.loading = !1, this._progressChunk = 0, this._buffer.length = 0, this._numToLoad = 0, this._queue.kill(), this._queue.started = !1;
                for (var t in this.resources) {
                    var e = this.resources[t];
                    e.off("complete", this._onLoad, this), e.isLoading && e.abort()
                }
                return this.resources = {}, this
            }, r.prototype.load = function (t) {
                if ("function" == typeof t && this.once("complete", t), this._queue.started)return this;
                this.emit("start", this), this.loading = !0;
                for (var e = 0; e < this._buffer.length; ++e)this._queue.push(this._buffer[e]);
                return this._buffer.length = 0, this
            }, r.prototype._prepareUrl = function (t) {
                var e = o.parse(t);
                return e.protocol || !e.pathname || 0 === e.pathname.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t
            }, r.prototype._loadResource = function (t, e) {
                var i = this;
                t._dequeue = e, n(this._beforeMiddleware, function (e, r) {
                    e.call(i, t, function () {
                        r(t.isComplete ? {} : null)
                    })
                }, function () {
                    t.isComplete ? i._onLoad(t) : (t.once("complete", i._onLoad, i), t.load())
                })
            }, r.prototype._onComplete = function () {
                this.loading = !1, this.emit("complete", this, this.resources)
            }, r.prototype._onLoad = function (t) {
                var e = this;
                n(this._afterMiddleware, function (i, r) {
                    i.call(e, t, r)
                }, function () {
                    t.emit("afterMiddleware", t), e._numToLoad--, e.progress += e._progressChunk, e.emit("progress", e, t), t.error ? e.emit("error", t.error, e, t) : e.emit("load", e, t), 0 === e._numToLoad && (e.progress = 100, e._onComplete())
                }), t._dequeue()
            }, r.LOAD_TYPE = a.LOAD_TYPE, r.XHR_RESPONSE_TYPE = a.XHR_RESPONSE_TYPE
        }, {"./Resource": 67, "async/eachSeries": 2, "async/queue": 13, eventemitter3: 16, url: 72}],
        67: [function (t, e, i) {
            "use strict";
            function r(t, e, i) {
                if (o.call(this), i = i || {}, "string" != typeof t || "string" != typeof e)throw new Error("Both name and url are required for constructing a resource.");
                this.name = t, this.url = e, this.isDataUrl = 0 === this.url.indexOf("data:"), this.data = null, this.crossOrigin = i.crossOrigin === !0 ? "anonymous" : i.crossOrigin, this.loadType = i.loadType || this._determineLoadType(), this.xhrType = i.xhrType, this.metadata = i.metadata || {}, this.error = null, this.xhr = null, this.isJson = !1, this.isXml = !1, this.isImage = !1, this.isAudio = !1, this.isVideo = !1, this.isComplete = !1, this.isLoading = !1, this._dequeue = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this)
            }

            function s(t) {
                return t.toString().replace("object ", "")
            }

            function n(t, e, i) {
                e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = i)
            }

            var o = t("eventemitter3"), a = t("url"), h = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest), l = null, c = 0, u = 200, d = 204;
            r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.complete = function () {
                if (this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.isComplete)throw new Error("Complete called again for an already completed resource.");
                this.isComplete = !0, this.isLoading = !1, this.emit("complete", this)
            }, r.prototype.abort = function (t) {
                if (!this.error) {
                    if (this.error = new Error(t), this.xhr)this.xhr.abort(); else if (this.xdr)this.xdr.abort(); else if (this.data)if ("undefined" != typeof this.data.src)this.data.src = ""; else for (; this.data.firstChild;)this.data.removeChild(this.data.firstChild);
                    this.complete()
                }
            }, r.prototype.load = function (t) {
                if (!this.isLoading)if (this.isComplete) {
                    if (t) {
                        var e = this;
                        setTimeout(function () {
                            t(e)
                        }, 1)
                    }
                } else switch (t && this.once("complete", t), this.isLoading = !0, this.emit("start", this), this.crossOrigin !== !1 && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                    case r.LOAD_TYPE.IMAGE:
                        this._loadElement("image");
                        break;
                    case r.LOAD_TYPE.AUDIO:
                        this._loadSourceElement("audio");
                        break;
                    case r.LOAD_TYPE.VIDEO:
                        this._loadSourceElement("video");
                        break;
                    case r.LOAD_TYPE.XHR:
                    default:
                        h && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                }
            }, r.prototype._loadElement = function (t) {
                this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && "undefined" != typeof window.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url);
                var e = "is" + t[0].toUpperCase() + t.substring(1);
                this[e] === !1 && (this[e] = !0), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1)
            }, r.prototype._loadSourceElement = function (t) {
                if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && "undefined" != typeof window.Audio ? this.data = new Audio : this.data = document.createElement(t), null === this.data)return void this.abort("Unsupported element " + t);
                if (!this.metadata.skipSource)if (navigator.isCocoonJS)this.data.src = Array.isArray(this.url) ? this.url[0] : this.url; else if (Array.isArray(this.url))for (var e = 0; e < this.url.length; ++e)this.data.appendChild(this._createSource(t, this.url[e])); else this.data.appendChild(this._createSource(t, this.url));
                this["is" + t[0].toUpperCase() + t.substring(1)] = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load()
            }, r.prototype._loadXhr = function () {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new XMLHttpRequest;
                t.open("GET", this.url, !0), this.xhrType === r.XHR_RESPONSE_TYPE.JSON || this.xhrType === r.XHR_RESPONSE_TYPE.DOCUMENT ? t.responseType = r.XHR_RESPONSE_TYPE.TEXT : t.responseType = this.xhrType, t.addEventListener("error", this._boundXhrOnError, !1), t.addEventListener("abort", this._boundXhrOnAbort, !1), t.addEventListener("progress", this._boundOnProgress, !1), t.addEventListener("load", this._boundXhrOnLoad, !1), t.send()
            }, r.prototype._loadXdr = function () {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new XDomainRequest;
                t.timeout = 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXdrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function () {
                    t.send()
                }, 0)
            }, r.prototype._createSource = function (t, e, i) {
                i || (i = t + "/" + e.substr(e.lastIndexOf(".") + 1));
                var r = document.createElement("source");
                return r.src = e, r.type = i, r
            }, r.prototype._onError = function (t) {
                this.abort("Failed to load element using " + t.target.nodeName)
            }, r.prototype._onProgress = function (t) {
                t && t.lengthComputable && this.emit("progress", this, t.loaded / t.total)
            }, r.prototype._xhrOnError = function () {
                var t = this.xhr;
                this.abort(s(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
            }, r.prototype._xhrOnAbort = function () {
                this.abort(s(this.xhr) + " Request was aborted by the user.")
            }, r.prototype._xdrOnTimeout = function () {
                this.abort(s(this.xhr) + " Request timed out.")
            }, r.prototype._xhrOnLoad = function () {
                var t = this.xhr, e = "undefined" == typeof t.status ? t.status : u;
                if (!(e === u || e === d || e === c && t.responseText.length > 0))return void this.abort("[" + t.status + "]" + t.statusText + ":" + t.responseURL);
                if (this.xhrType === r.XHR_RESPONSE_TYPE.TEXT)this.data = t.responseText; else if (this.xhrType === r.XHR_RESPONSE_TYPE.JSON)try {
                    this.data = JSON.parse(t.responseText), this.isJson = !0
                } catch (i) {
                    return void this.abort("Error trying to parse loaded json:", i)
                } else if (this.xhrType === r.XHR_RESPONSE_TYPE.DOCUMENT)try {
                    if (window.DOMParser) {
                        var s = new DOMParser;
                        this.data = s.parseFromString(t.responseText, "text/xml")
                    } else {
                        var n = document.createElement("div");
                        n.innerHTML = t.responseText, this.data = n
                    }
                    this.isXml = !0
                } catch (i) {
                    return void this.abort("Error trying to parse loaded xml:", i)
                } else this.data = t.response || t.responseText;
                this.complete()
            }, r.prototype._determineCrossOrigin = function (t, e) {
                if (0 === t.indexOf("data:"))return "";
                e = e || window.location, l || (l = document.createElement("a")), l.href = t, t = a.parse(l.href);
                var i = !t.port && "" === e.port || t.port === e.port;
                return t.hostname === e.hostname && i && t.protocol === e.protocol ? "" : "anonymous"
            }, r.prototype._determineXhrType = function () {
                return r._xhrTypeMap[this._getExtension()] || r.XHR_RESPONSE_TYPE.TEXT
            }, r.prototype._determineLoadType = function () {
                return r._loadTypeMap[this._getExtension()] || r.LOAD_TYPE.XHR
            }, r.prototype._getExtension = function () {
                var t = this.url, e = "";
                if (this.isDataUrl) {
                    var i = t.indexOf("/");
                    e = t.substring(i + 1, t.indexOf(";", i))
                } else {
                    var r = t.indexOf("?");
                    r !== -1 && (t = t.substring(0, r)), e = t.substring(t.lastIndexOf(".") + 1)
                }
                return e.toLowerCase()
            }, r.prototype._getMimeFromXhrType = function (t) {
                switch (t) {
                    case r.XHR_RESPONSE_TYPE.BUFFER:
                        return "application/octet-binary";
                    case r.XHR_RESPONSE_TYPE.BLOB:
                        return "application/blob";
                    case r.XHR_RESPONSE_TYPE.DOCUMENT:
                        return "application/xml";
                    case r.XHR_RESPONSE_TYPE.JSON:
                        return "application/json";
                    case r.XHR_RESPONSE_TYPE.DEFAULT:
                    case r.XHR_RESPONSE_TYPE.TEXT:
                    default:
                        return "text/plain"
                }
            }, r.LOAD_TYPE = {XHR: 1, IMAGE: 2, AUDIO: 3, VIDEO: 4}, r.XHR_RESPONSE_TYPE = {
                DEFAULT: "text",
                BUFFER: "arraybuffer",
                BLOB: "blob",
                DOCUMENT: "document",
                JSON: "json",
                TEXT: "text"
            }, r._loadTypeMap = {
                gif: r.LOAD_TYPE.IMAGE,
                png: r.LOAD_TYPE.IMAGE,
                bmp: r.LOAD_TYPE.IMAGE,
                jpg: r.LOAD_TYPE.IMAGE,
                jpeg: r.LOAD_TYPE.IMAGE,
                tif: r.LOAD_TYPE.IMAGE,
                tiff: r.LOAD_TYPE.IMAGE,
                webp: r.LOAD_TYPE.IMAGE,
                tga: r.LOAD_TYPE.IMAGE,
                "svg+xml": r.LOAD_TYPE.IMAGE
            }, r._xhrTypeMap = {
                xhtml: r.XHR_RESPONSE_TYPE.DOCUMENT,
                html: r.XHR_RESPONSE_TYPE.DOCUMENT,
                htm: r.XHR_RESPONSE_TYPE.DOCUMENT,
                xml: r.XHR_RESPONSE_TYPE.DOCUMENT,
                tmx: r.XHR_RESPONSE_TYPE.DOCUMENT,
                tsx: r.XHR_RESPONSE_TYPE.DOCUMENT,
                svg: r.XHR_RESPONSE_TYPE.DOCUMENT,
                gif: r.XHR_RESPONSE_TYPE.BLOB,
                png: r.XHR_RESPONSE_TYPE.BLOB,
                bmp: r.XHR_RESPONSE_TYPE.BLOB,
                jpg: r.XHR_RESPONSE_TYPE.BLOB,
                jpeg: r.XHR_RESPONSE_TYPE.BLOB,
                tif: r.XHR_RESPONSE_TYPE.BLOB,
                tiff: r.XHR_RESPONSE_TYPE.BLOB,
                webp: r.XHR_RESPONSE_TYPE.BLOB,
                tga: r.XHR_RESPONSE_TYPE.BLOB,
                json: r.XHR_RESPONSE_TYPE.JSON,
                text: r.XHR_RESPONSE_TYPE.TEXT,
                txt: r.XHR_RESPONSE_TYPE.TEXT
            }, r.setExtensionLoadType = function (t, e) {
                n(r._loadTypeMap, t, e)
            }, r.setExtensionXhrType = function (t, e) {
                n(r._xhrTypeMap, t, e)
            }
        }, {eventemitter3: 16, url: 72}],
        68: [function (t, e, i) {
            "use strict";
            e.exports = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encodeBinary: function (t) {
                    for (var e, i = "", r = new Array(4), s = 0, n = 0, o = 0; s < t.length;) {
                        for (e = new Array(3), n = 0; n < e.length; n++)s < t.length ? e[n] = 255 & t.charCodeAt(s++) : e[n] = 0;
                        switch (r[0] = e[0] >> 2, r[1] = (3 & e[0]) << 4 | e[1] >> 4, r[2] = (15 & e[1]) << 2 | e[2] >> 6, r[3] = 63 & e[2], o = s - (t.length - 1)) {
                            case 2:
                                r[3] = 64, r[2] = 64;
                                break;
                            case 1:
                                r[3] = 64
                        }
                        for (n = 0; n < r.length; n++)i += this._keyStr.charAt(r[n]);
                    }
                    return i
                }
            }
        }, {}],
        69: [function (t, e, i) {
            "use strict";
            e.exports = t("./Loader"), e.exports.Resource = t("./Resource"), e.exports.middleware = {
                caching: {memory: t("./middlewares/caching/memory")},
                parsing: {blob: t("./middlewares/parsing/blob")}
            }
        }, {"./Loader": 66, "./Resource": 67, "./middlewares/caching/memory": 70, "./middlewares/parsing/blob": 71}],
        70: [function (t, e, i) {
            "use strict";
            var r = {};
            e.exports = function () {
                return function (t, e) {
                    r[t.url] ? (t.data = r[t.url], t.complete()) : t.once("complete", function () {
                        r[this.url] = this.data
                    }), e()
                }
            }
        }, {}],
        71: [function (t, e, i) {
            "use strict";
            var r = t("../../Resource"), s = t("../../b64"), n = window.URL || window.webkitURL;
            e.exports = function () {
                return function (t, e) {
                    if (!t.data)return void e();
                    if (t.xhr && t.xhrType === r.XHR_RESPONSE_TYPE.BLOB)if (window.Blob && "string" != typeof t.data) {
                        if (0 === t.data.type.indexOf("image")) {
                            var i = n.createObjectURL(t.data);
                            return t.blob = t.data, t.data = new Image, t.data.src = i, t.isImage = !0, void(t.data.onload = function () {
                                n.revokeObjectURL(i), t.data.onload = null, e()
                            })
                        }
                    } else {
                        var o = t.xhr.getResponseHeader("content-type");
                        if (o && 0 === o.indexOf("image"))return t.data = new Image, t.data.src = "data:" + o + ";base64," + s.encodeBinary(t.xhr.responseText), t.isImage = !0, void(t.data.onload = function () {
                            t.data.onload = null, e()
                        })
                    }
                    e()
                }
            }
        }, {"../../Resource": 67, "../../b64": 68}],
        72: [function (t, e, i) {
            "use strict";
            function r() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }

            function s(t, e, i) {
                if (t && l.isObject(t) && t instanceof r)return t;
                var s = new r;
                return s.parse(t, e, i), s
            }

            function n(t) {
                return l.isString(t) && (t = s(t)), t instanceof r ? t.format() : r.prototype.format.call(t)
            }

            function o(t, e) {
                return s(t, !1, !0).resolve(e)
            }

            function a(t, e) {
                return t ? s(t, !1, !0).resolveObject(e) : e
            }

            var h = t("punycode"), l = t("./util");
            i.parse = s, i.resolve = o, i.resolveObject = a, i.format = n, i.Url = r;
            var c = /^([a-z0-9.+-]+:)/i, u = /:[0-9]*$/, d = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, p = ["<", ">", '"', "`", " ", "\r", "\n", "\t"], f = ["{", "}", "|", "\\", "^", "`"].concat(p), g = ["'"].concat(f), m = ["%", "/", "?", ";", "#"].concat(g), v = ["/", "?", "#"], _ = 255, y = /^[+a-z0-9A-Z_-]{0,63}$/, x = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, b = {
                javascript: !0,
                "javascript:": !0
            }, w = {javascript: !0, "javascript:": !0}, T = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            }, L = t("querystring");
            r.prototype.parse = function (t, e, i) {
                if (!l.isString(t))throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var r = t.indexOf("?"), s = r !== -1 && r < t.indexOf("#") ? "?" : "#", n = t.split(s), o = /\\/g;
                n[0] = n[0].replace(o, "/"), t = n.join(s);
                var a = t;
                if (a = a.trim(), !i && 1 === t.split("#").length) {
                    var u = d.exec(a);
                    if (u)return this.path = a, this.href = a, this.pathname = u[1], u[2] ? (this.search = u[2], e ? this.query = L.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : e && (this.search = "", this.query = {}), this
                }
                var p = c.exec(a);
                if (p) {
                    p = p[0];
                    var f = p.toLowerCase();
                    this.protocol = f, a = a.substr(p.length)
                }
                if (i || p || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var S = "//" === a.substr(0, 2);
                    !S || p && w[p] || (a = a.substr(2), this.slashes = !0)
                }
                if (!w[p] && (S || p && !T[p])) {
                    for (var E = -1, P = 0; P < v.length; P++) {
                        var A = a.indexOf(v[P]);
                        A !== -1 && (E === -1 || A < E) && (E = A)
                    }
                    var C, R;
                    R = E === -1 ? a.lastIndexOf("@") : a.lastIndexOf("@", E), R !== -1 && (C = a.slice(0, R), a = a.slice(R + 1), this.auth = decodeURIComponent(C)), E = -1;
                    for (var P = 0; P < m.length; P++) {
                        var A = a.indexOf(m[P]);
                        A !== -1 && (E === -1 || A < E) && (E = A)
                    }
                    E === -1 && (E = a.length), this.host = a.slice(0, E), a = a.slice(E), this.parseHost(), this.hostname = this.hostname || "";
                    var M = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!M)for (var O = this.hostname.split(/\./), P = 0, I = O.length; P < I; P++) {
                        var B = O[P];
                        if (B && !B.match(y)) {
                            for (var D = "", W = 0, N = B.length; W < N; W++)D += B.charCodeAt(W) > 127 ? "x" : B[W];
                            if (!D.match(y)) {
                                var j = O.slice(0, P), F = O.slice(P + 1), k = B.match(x);
                                k && (j.push(k[1]), F.unshift(k[2])), F.length && (a = "/" + F.join(".") + a), this.hostname = j.join(".");
                                break
                            }
                        }
                    }
                    this.hostname.length > _ ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), M || (this.hostname = h.toASCII(this.hostname));
                    var U = this.port ? ":" + this.port : "", V = this.hostname || "";
                    this.host = V + U, this.href += this.host, M && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== a[0] && (a = "/" + a))
                }
                if (!b[f])for (var P = 0, I = g.length; P < I; P++) {
                    var H = g[P];
                    if (a.indexOf(H) !== -1) {
                        var X = encodeURIComponent(H);
                        X === H && (X = escape(H)), a = a.split(H).join(X)
                    }
                }
                var Y = a.indexOf("#");
                Y !== -1 && (this.hash = a.substr(Y), a = a.slice(0, Y));
                var G = a.indexOf("?");
                if (G !== -1 ? (this.search = a.substr(G), this.query = a.substr(G + 1), e && (this.query = L.parse(this.query)), a = a.slice(0, G)) : e && (this.search = "", this.query = {}), a && (this.pathname = a), T[f] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    var U = this.pathname || "", z = this.search || "";
                    this.path = U + z
                }
                return this.href = this.format(), this
            }, r.prototype.format = function () {
                var t = this.auth || "";
                t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
                var e = this.protocol || "", i = this.pathname || "", r = this.hash || "", s = !1, n = "";
                this.host ? s = t + this.host : this.hostname && (s = t + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (s += ":" + this.port)), this.query && l.isObject(this.query) && Object.keys(this.query).length && (n = L.stringify(this.query));
                var o = this.search || n && "?" + n || "";
                return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || T[e]) && s !== !1 ? (s = "//" + (s || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : s || (s = ""), r && "#" !== r.charAt(0) && (r = "#" + r), o && "?" !== o.charAt(0) && (o = "?" + o), i = i.replace(/[?#]/g, function (t) {
                    return encodeURIComponent(t)
                }), o = o.replace("#", "%23"), e + s + i + o + r
            }, r.prototype.resolve = function (t) {
                return this.resolveObject(s(t, !1, !0)).format()
            }, r.prototype.resolveObject = function (t) {
                if (l.isString(t)) {
                    var e = new r;
                    e.parse(t, !1, !0), t = e
                }
                for (var i = new r, s = Object.keys(this), n = 0; n < s.length; n++) {
                    var o = s[n];
                    i[o] = this[o]
                }
                if (i.hash = t.hash, "" === t.href)return i.href = i.format(), i;
                if (t.slashes && !t.protocol) {
                    for (var a = Object.keys(t), h = 0; h < a.length; h++) {
                        var c = a[h];
                        "protocol" !== c && (i[c] = t[c])
                    }
                    return T[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"), i.href = i.format(), i
                }
                if (t.protocol && t.protocol !== i.protocol) {
                    if (!T[t.protocol]) {
                        for (var u = Object.keys(t), d = 0; d < u.length; d++) {
                            var p = u[d];
                            i[p] = t[p]
                        }
                        return i.href = i.format(), i
                    }
                    if (i.protocol = t.protocol, t.host || w[t.protocol])i.pathname = t.pathname; else {
                        for (var f = (t.pathname || "").split("/"); f.length && !(t.host = f.shift()););
                        t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), i.pathname = f.join("/")
                    }
                    if (i.search = t.search, i.query = t.query, i.host = t.host || "", i.auth = t.auth, i.hostname = t.hostname || t.host, i.port = t.port, i.pathname || i.search) {
                        var g = i.pathname || "", m = i.search || "";
                        i.path = g + m
                    }
                    return i.slashes = i.slashes || t.slashes, i.href = i.format(), i
                }
                var v = i.pathname && "/" === i.pathname.charAt(0), _ = t.host || t.pathname && "/" === t.pathname.charAt(0), y = _ || v || i.host && t.pathname, x = y, b = i.pathname && i.pathname.split("/") || [], f = t.pathname && t.pathname.split("/") || [], L = i.protocol && !T[i.protocol];
                if (L && (i.hostname = "", i.port = null, i.host && ("" === b[0] ? b[0] = i.host : b.unshift(i.host)), i.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === f[0] ? f[0] = t.host : f.unshift(t.host)), t.host = null), y = y && ("" === f[0] || "" === b[0])), _)i.host = t.host || "" === t.host ? t.host : i.host, i.hostname = t.hostname || "" === t.hostname ? t.hostname : i.hostname, i.search = t.search, i.query = t.query, b = f; else if (f.length)b || (b = []), b.pop(), b = b.concat(f), i.search = t.search, i.query = t.query; else if (!l.isNullOrUndefined(t.search)) {
                    if (L) {
                        i.hostname = i.host = b.shift();
                        var S = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@");
                        S && (i.auth = S.shift(), i.host = i.hostname = S.shift())
                    }
                    return i.search = t.search, i.query = t.query, l.isNull(i.pathname) && l.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i
                }
                if (!b.length)return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
                for (var E = b.slice(-1)[0], P = (i.host || t.host || b.length > 1) && ("." === E || ".." === E) || "" === E, A = 0, C = b.length; C >= 0; C--)E = b[C], "." === E ? b.splice(C, 1) : ".." === E ? (b.splice(C, 1), A++) : A && (b.splice(C, 1), A--);
                if (!y && !x)for (; A--; A)b.unshift("..");
                !y || "" === b[0] || b[0] && "/" === b[0].charAt(0) || b.unshift(""), P && "/" !== b.join("/").substr(-1) && b.push("");
                var R = "" === b[0] || b[0] && "/" === b[0].charAt(0);
                if (L) {
                    i.hostname = i.host = R ? "" : b.length ? b.shift() : "";
                    var S = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@");
                    S && (i.auth = S.shift(), i.host = i.hostname = S.shift())
                }
                return y = y || i.host && b.length, y && !R && b.unshift(""), b.length ? i.pathname = b.join("/") : (i.pathname = null, i.path = null), l.isNull(i.pathname) && l.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = t.auth || i.auth, i.slashes = i.slashes || t.slashes, i.href = i.format(), i
            }, r.prototype.parseHost = function () {
                var t = this.host, e = u.exec(t);
                e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
            }
        }, {"./util": 73, punycode: 62, querystring: 65}],
        73: [function (t, e, i) {
            "use strict";
            e.exports = {
                isString: function (t) {
                    return "string" == typeof t
                }, isObject: function (t) {
                    return "object" == typeof t && null !== t
                }, isNull: function (t) {
                    return null === t
                }, isNullOrUndefined: function (t) {
                    return null == t
                }
            }
        }, {}],
        74: [function (t, e, i) {
            function r(t) {
                (n.tablet || n.phone) && this.createTouchHook();
                var e = document.createElement("div");
                e.style.width = "100px", e.style.height = "100px", e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.zIndex = 2, this.div = e, this.pool = [], this.renderId = 0, this.debug = !1, this.renderer = t, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessabillity = !1, window.addEventListener("keydown", this._onKeyDown, !1)
            }

            var s = t("../core"), n = t("ismobilejs");
            Object.assign(s.DisplayObject.prototype, t("./accessibleTarget")), r.prototype.constructor = r, e.exports = r, r.prototype.createTouchHook = function () {
                var t = document.createElement("button");
                t.style.width = "1px", t.style.height = "1px", t.style.position = "absolute", t.style.top = "-1000px", t.style.left = "-1000px", t.style.zIndex = 2, t.style.backgroundColor = "#FF0000", t.title = "HOOK DIV", t.addEventListener("focus", function () {
                    this.isMobileAccessabillity = !0, this.activate(), document.body.removeChild(t)
                }.bind(this)), document.body.appendChild(t)
            }, r.prototype.activate = function () {
                this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
            }, r.prototype.deactivate = function () {
                this.isActive && !this.isMobileAccessabillity && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div))
            }, r.prototype.updateAccessibleObjects = function (t) {
                if (t.visible) {
                    t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
                    for (var e = t.children, i = e.length - 1; i >= 0; i--)this.updateAccessibleObjects(e[i])
                }
            }, r.prototype.update = function () {
                if (this.renderer.renderingToScreen) {
                    this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                    var t = this.renderer.view.getBoundingClientRect(), e = t.width / this.renderer.width, i = t.height / this.renderer.height, r = this.div;
                    r.style.left = t.left + "px", r.style.top = t.top + "px", r.style.width = this.renderer.width + "px", r.style.height = this.renderer.height + "px";
                    for (var n = 0; n < this.children.length; n++) {
                        var o = this.children[n];
                        if (o.renderId !== this.renderId)o._accessibleActive = !1, s.utils.removeItems(this.children, n, 1), this.div.removeChild(o._accessibleDiv), this.pool.push(o._accessibleDiv), o._accessibleDiv = null, n--, 0 === this.children.length && this.deactivate(); else {
                            r = o._accessibleDiv;
                            var a = o.hitArea, h = o.worldTransform;
                            o.hitArea ? (r.style.left = (h.tx + a.x * h.a) * e + "px", r.style.top = (h.ty + a.y * h.d) * i + "px", r.style.width = a.width * h.a * e + "px", r.style.height = a.height * h.d * i + "px") : (a = o.getBounds(), this.capHitArea(a), r.style.left = a.x * e + "px", r.style.top = a.y * i + "px", r.style.width = a.width * e + "px", r.style.height = a.height * i + "px")
                        }
                    }
                    this.renderId++
                }
            }, r.prototype.capHitArea = function (t) {
                t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.renderer.width && (t.width = this.renderer.width - t.x), t.y + t.height > this.renderer.height && (t.height = this.renderer.height - t.y)
            }, r.prototype.addChild = function (t) {
                var e = this.pool.pop();
                e || (e = document.createElement("button"), e.style.width = "100px", e.style.height = "100px", e.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = 2, e.style.borderStyle = "none", e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleTitle || t.accessibleHint || (e.title = "displayObject " + this.tabIndex), t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex
            }, r.prototype._onClick = function (t) {
                var e = this.renderer.plugins.interaction;
                e.dispatchEvent(t.target.displayObject, "click", e.eventData)
            }, r.prototype._onFocus = function (t) {
                var e = this.renderer.plugins.interaction;
                e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData)
            }, r.prototype._onFocusOut = function (t) {
                var e = this.renderer.plugins.interaction;
                e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData)
            }, r.prototype._onKeyDown = function (t) {
                9 === t.keyCode && this.activate()
            }, r.prototype._onMouseMove = function () {
                this.deactivate()
            }, r.prototype.destroy = function () {
                this.div = null;
                for (var t = 0; t < this.children.length; t++)this.children[t].div = null;
                window.document.removeEventListener("mousemove", this._onMouseMove), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
            }, s.WebGLRenderer.registerPlugin("accessibility", r), s.CanvasRenderer.registerPlugin("accessibility", r)
        }, {"../core": 97, "./accessibleTarget": 75, ismobilejs: 17}],
        75: [function (t, e, i) {
            var r = {
                accessible: !1,
                accessibleTitle: null,
                accessibleHint: null,
                tabIndex: 0,
                _accessibleActive: !1,
                _accessibleDiv: !1
            };
            e.exports = r
        }, {}],
        76: [function (t, e, i) {
            e.exports = {accessibleTarget: t("./accessibleTarget"), AccessibilityManager: t("./AccessibilityManager")}
        }, {"./AccessibilityManager": 74, "./accessibleTarget": 75}],
        77: [function (t, e, i) {
            function r(t) {
                if (t instanceof Array) {
                    if ("precision" !== t[0].substring(0, 9)) {
                        var e = t.slice(0);
                        return e.unshift("precision " + n.PRECISION.DEFAULT + " float;"), e
                    }
                } else if ("precision" !== t.substring(0, 9))return "precision " + n.PRECISION.DEFAULT + " float;\n" + t;
                return t
            }

            var s = t("pixi-gl-core").GLShader, n = t("./const"), o = function (t, e, i) {
                s.call(this, t, r(e), r(i))
            };
            o.prototype = Object.create(s.prototype), o.prototype.constructor = o, e.exports = o
        }, {"./const": 78, "pixi-gl-core": 51}],
        78: [function (t, e, i) {
            var r = {
                VERSION: "4.0.1",
                PI_2: 2 * Math.PI,
                RAD_TO_DEG: 180 / Math.PI,
                DEG_TO_RAD: Math.PI / 180,
                TARGET_FPMS: .06,
                RENDERER_TYPE: {UNKNOWN: 0, WEBGL: 1, CANVAS: 2},
                BLEND_MODES: {
                    NORMAL: 0,
                    ADD: 1,
                    MULTIPLY: 2,
                    SCREEN: 3,
                    OVERLAY: 4,
                    DARKEN: 5,
                    LIGHTEN: 6,
                    COLOR_DODGE: 7,
                    COLOR_BURN: 8,
                    HARD_LIGHT: 9,
                    SOFT_LIGHT: 10,
                    DIFFERENCE: 11,
                    EXCLUSION: 12,
                    HUE: 13,
                    SATURATION: 14,
                    COLOR: 15,
                    LUMINOSITY: 16
                },
                DRAW_MODES: {
                    POINTS: 0,
                    LINES: 1,
                    LINE_LOOP: 2,
                    LINE_STRIP: 3,
                    TRIANGLES: 4,
                    TRIANGLE_STRIP: 5,
                    TRIANGLE_FAN: 6
                },
                SCALE_MODES: {DEFAULT: 0, LINEAR: 0, NEAREST: 1},
                WRAP_MODES: {DEFAULT: 0, CLAMP: 0, REPEAT: 1, MIRRORED_REPEAT: 2},
                GC_MODES: {DEFAULT: 0, AUTO: 0, MANUAL: 1},
                MIPMAP_TEXTURES: !0,
                RETINA_PREFIX: /@(.+)x/,
                RESOLUTION: 1,
                FILTER_RESOLUTION: 1,
                DEFAULT_RENDER_OPTIONS: {
                    view: null,
                    resolution: 1,
                    antialias: !1,
                    forceFXAA: !1,
                    autoResize: !1,
                    transparent: !1,
                    backgroundColor: 0,
                    clearBeforeRender: !0,
                    preserveDrawingBuffer: !1,
                    roundPixels: !1
                },
                SHAPES: {POLY: 0, RECT: 1, CIRC: 2, ELIP: 3, RREC: 4},
                PRECISION: {DEFAULT: "mediump", LOW: "lowp", MEDIUM: "mediump", HIGH: "highp"},
                TRANSFORM_MODE: {DEFAULT: 0, STATIC: 0, DYNAMIC: 1},
                TEXT_GRADIENT: {LINEAR_VERTICAL: 0, LINEAR_HORIZONTAL: 1},
                SPRITE_BATCH_SIZE: 4096,
                SPRITE_MAX_TEXTURES: t("./utils/maxRecommendedTextures")(32)
            };
            e.exports = r
        }, {"./utils/maxRecommendedTextures": 152}],
        79: [function (t, e, i) {
            function r() {
                this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -(1 / 0), this.maxY = -(1 / 0), this.rect = null
            }

            var s = t("../math"), n = s.Rectangle;
            r.prototype.constructor = r, e.exports = r, r.prototype.isEmpty = function () {
                return this.minX > this.maxX || this.minY > this.maxY
            }, r.prototype.clear = function () {
                this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -(1 / 0), this.maxY = -(1 / 0)
            }, r.prototype.getRectangle = function (t) {
                return this.minX > this.maxX || this.minY > this.maxY ? n.EMPTY : (t = t || new n(0, 0, 1, 1), t.x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
            }, r.prototype.addPoint = function (t) {
                this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
            }, r.prototype.addQuad = function (t) {
                var e = this.minX, i = this.minY, r = this.maxX, s = this.maxY, n = t[0], o = t[1];
                e = n < e ? n : e, i = o < i ? o : i, r = n > r ? n : r, s = o > s ? o : s, n = t[2], o = t[3], e = n < e ? n : e, i = o < i ? o : i, r = n > r ? n : r, s = o > s ? o : s, n = t[4], o = t[5], e = n < e ? n : e, i = o < i ? o : i, r = n > r ? n : r, s = o > s ? o : s, n = t[6], o = t[7], e = n < e ? n : e, i = o < i ? o : i, r = n > r ? n : r, s = o > s ? o : s, this.minX = e, this.minY = i, this.maxX = r, this.maxY = s
            }, r.prototype.addFrame = function (t, e, i, r, s) {
                var n = t.worldTransform, o = n.a, a = n.b, h = n.c, l = n.d, c = n.tx, u = n.ty, d = this.minX, p = this.minY, f = this.maxX, g = this.maxY, m = o * e + h * i + c, v = a * e + l * i + u;
                d = m < d ? m : d, p = v < p ? v : p, f = m > f ? m : f, g = v > g ? v : g, m = o * r + h * i + c, v = a * r + l * i + u, d = m < d ? m : d, p = v < p ? v : p, f = m > f ? m : f, g = v > g ? v : g, m = o * e + h * s + c, v = a * e + l * s + u, d = m < d ? m : d, p = v < p ? v : p, f = m > f ? m : f, g = v > g ? v : g, m = o * r + h * s + c, v = a * r + l * s + u, d = m < d ? m : d, p = v < p ? v : p, f = m > f ? m : f, g = v > g ? v : g, this.minX = d, this.minY = p, this.maxX = f, this.maxY = g
            }, r.prototype.addVertices = function (t, e, i, r) {
                for (var s = t.worldTransform, n = s.a, o = s.b, a = s.c, h = s.d, l = s.tx, c = s.ty, u = this.minX, d = this.minY, p = this.maxX, f = this.maxY, g = i; g < r; g += 2) {
                    var m = e[g], v = e[g + 1], _ = n * m + a * v + l, y = h * v + o * m + c;
                    u = _ < u ? _ : u, d = y < d ? y : d, p = _ > p ? _ : p, f = y > f ? y : f
                }
                this.minX = u, this.minY = d, this.maxX = p, this.maxY = f
            }, r.prototype.addBounds = function (t) {
                var e = this.minX, i = this.minY, r = this.maxX, s = this.maxY;
                this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < i ? t.minY : i, this.maxX = t.maxX > r ? t.maxX : r, this.maxY = t.maxY > s ? t.maxY : s
            }
        }, {"../math": 102}],
        80: [function (t, e, i) {
            function r() {
                n.call(this), this.children = []
            }

            var s = t("../utils"), n = t("./DisplayObject");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                width: {
                    get: function () {
                        return this.scale.x * this.getLocalBounds().width
                    }, set: function (t) {
                        var e = this.getLocalBounds().width;
                        0 !== e ? this.scale.x = t / e : this.scale.x = 1, this._width = t
                    }
                }, height: {
                    get: function () {
                        return this.scale.y * this.getLocalBounds().height
                    }, set: function (t) {
                        var e = this.getLocalBounds().height;
                        0 !== e ? this.scale.y = t / e : this.scale.y = 1, this._height = t
                    }
                }
            }), r.prototype.onChildrenChange = function () {
            }, r.prototype.addChild = function (t) {
                var e = arguments.length;
                if (e > 1)for (var i = 0; i < e; i++)this.addChild(arguments[i]); else t.parent && t.parent.removeChild(t), t.parent = this, this.transform._parentID = -1, this.children.push(t), this.onChildrenChange(this.children.length - 1), t.emit("added", this);
                return t
            }, r.prototype.addChildAt = function (t, e) {
                if (e >= 0 && e <= this.children.length)return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), this.onChildrenChange(e), t.emit("added", this), t;
                throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
            }, r.prototype.swapChildren = function (t, e) {
                if (t !== e) {
                    var i = this.getChildIndex(t), r = this.getChildIndex(e);
                    if (i < 0 || r < 0)throw new Error("swapChildren: Both the supplied DisplayObjects must be children of the caller.");
                    this.children[i] = e, this.children[r] = t, this.onChildrenChange(i < r ? i : r)
                }
            }, r.prototype.getChildIndex = function (t) {
                var e = this.children.indexOf(t);
                if (e === -1)throw new Error("The supplied DisplayObject must be a child of the caller");
                return e
            }, r.prototype.setChildIndex = function (t, e) {
                if (e < 0 || e >= this.children.length)throw new Error("The supplied index is out of bounds");
                var i = this.getChildIndex(t);
                s.removeItems(this.children, i, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
            }, r.prototype.getChildAt = function (t) {
                if (t < 0 || t >= this.children.length)throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject is not a child of the caller");
                return this.children[t]
            }, r.prototype.removeChild = function (t) {
                var e = arguments.length;
                if (e > 1)for (var i = 0; i < e; i++)this.removeChild(arguments[i]); else {
                    var r = this.children.indexOf(t);
                    if (r === -1)return;
                    t.parent = null, s.removeItems(this.children, r, 1), this.onChildrenChange(r), t.emit("removed", this)
                }
                return t
            }, r.prototype.removeChildAt = function (t) {
                var e = this.getChildAt(t);
                return e.parent = null, s.removeItems(this.children, t, 1), this.onChildrenChange(t), e.emit("removed", this), e
            }, r.prototype.removeChildren = function (t, e) {
                var i, r, s = t || 0, n = "number" == typeof e ? e : this.children.length, o = n - s;
                if (o > 0 && o <= n) {
                    for (i = this.children.splice(s, o), r = 0; r < i.length; ++r)i[r].parent = null;
                    for (this.onChildrenChange(t), r = 0; r < i.length; ++r)i[r].emit("removed", this);
                    return i
                }
                if (0 === o && 0 === this.children.length)return [];
                throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
            }, r.prototype.updateTransform = function () {
                if (this._boundsID++, this.visible) {
                    this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
                    for (var t = 0, e = this.children.length; t < e; ++t)this.children[t].updateTransform()
                }
            }, r.prototype.containerUpdateTransform = r.prototype.updateTransform, r.prototype.calculateBounds = function () {
                if (this._bounds.clear(), this.visible) {
                    this._calculateBounds();
                    for (var t = 0; t < this.children.length; t++) {
                        var e = this.children[t];
                        e.calculateBounds(), this._bounds.addBounds(e._bounds)
                    }
                    this._boundsID = this._lastBoundsID
                }
            }, r.prototype._calculateBounds = function () {
            }, r.prototype.renderWebGL = function (t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.renderable)if (this._mask || this._filters)this.renderAdvancedWebGL(t); else {
                    this._renderWebGL(t);
                    for (var e = 0, i = this.children.length; e < i; ++e)this.children[e].renderWebGL(t)
                }
            }, r.prototype.renderAdvancedWebGL = function (t) {
                t.currentRenderer.flush();
                var e, i, r = this._filters, s = this._mask;
                if (r) {
                    for (this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0, e = 0; e < r.length; e++)r[e].enabled && this._enabledFilters.push(r[e]);
                    this._enabledFilters.length && t.filterManager.pushFilter(this, this._enabledFilters)
                }
                for (s && t.maskManager.pushMask(this, this._mask), t.currentRenderer.start(), this._renderWebGL(t), e = 0, i = this.children.length; e < i; e++)this.children[e].renderWebGL(t);
                t.currentRenderer.flush(), s && t.maskManager.popMask(this, this._mask), r && this._enabledFilters && this._enabledFilters.length && t.filterManager.popFilter(), t.currentRenderer.start()
            }, r.prototype._renderWebGL = function (t) {
            }, r.prototype._renderCanvas = function (t) {
            }, r.prototype.renderCanvas = function (t) {
                if (this.visible && !(this.alpha <= 0) && this.renderable) {
                    this._mask && t.maskManager.pushMask(this._mask), this._renderCanvas(t);
                    for (var e = 0, i = this.children.length; e < i; ++e)this.children[e].renderCanvas(t);
                    this._mask && t.maskManager.popMask(t)
                }
            }, r.prototype.destroy = function (t) {
                n.prototype.destroy.call(this);
                var e = "boolean" == typeof t ? t : t && t.children, i = this.children;
                if (this.children = null, e)for (var r = i.length - 1; r >= 0; r--) {
                    var s = i[r];
                    s.parent = null, s.destroy(t)
                }
            }
        }, {"../utils": 151, "./DisplayObject": 81}],
        81: [function (t, e, i) {
            function r() {
                s.call(this);
                var t = n.TRANSFORM_MODE.DEFAULT === n.TRANSFORM_MODE.STATIC ? o : a;
                this.transform = new t, this.alpha = 1, this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, this.filterArea = null, this._filters = null, this._enabledFilters = null, this._bounds = new h, this._boundsID = 0, this._lastBoundsID = -1, this._boundsRect = null, this._localBoundsRect = null, this._mask = null
            }

            var s = t("eventemitter3"), n = t("../const"), o = t("./TransformStatic"), a = t("./Transform"), h = t("./Bounds"), l = t("../math"), c = new r;
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                x: {
                    get: function () {
                        return this.position.x
                    }, set: function (t) {
                        this.transform.position.x = t
                    }
                }, y: {
                    get: function () {
                        return this.position.y
                    }, set: function (t) {
                        this.transform.position.y = t
                    }
                }, worldTransform: {
                    get: function () {
                        return this.transform.worldTransform
                    }
                }, localTransform: {
                    get: function () {
                        return this.transform.localTransform
                    }
                }, position: {
                    get: function () {
                        return this.transform.position
                    }, set: function (t) {
                        this.transform.position.copy(t)
                    }
                }, scale: {
                    get: function () {
                        return this.transform.scale
                    }, set: function (t) {
                        this.transform.scale.copy(t)
                    }
                }, pivot: {
                    get: function () {
                        return this.transform.pivot
                    }, set: function (t) {
                        this.transform.pivot.copy(t)
                    }
                }, skew: {
                    get: function () {
                        return this.transform.skew
                    }, set: function (t) {
                        this.transform.skew.copy(t)
                    }
                }, rotation: {
                    get: function () {
                        return this.transform.rotation
                    }, set: function (t) {
                        this.transform.rotation = t
                    }
                }, worldVisible: {
                    get: function () {
                        var t = this;
                        do {
                            if (!t.visible)return !1;
                            t = t.parent
                        } while (t);
                        return !0
                    }
                }, mask: {
                    get: function () {
                        return this._mask
                    }, set: function (t) {
                        this._mask && (this._mask.renderable = !0), this._mask = t, this._mask && (this._mask.renderable = !1)
                    }
                }, filters: {
                    get: function () {
                        return this._filters && this._filters.slice()
                    }, set: function (t) {
                        this._filters = t && t.slice()
                    }
                }
            }), r.prototype.updateTransform = function () {
                this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._bounds.updateID++
            }, r.prototype.displayObjectUpdateTransform = r.prototype.updateTransform, r.prototype._recursivePostUpdateTransform = function () {
                this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(c.transform)
            }, r.prototype.getBounds = function (t, e) {
                return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = c, this.parent.transform._worldID++, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), e || (this._boundsRect || (this._boundsRect = new l.Rectangle), e = this._boundsRect), this._bounds.getRectangle(e)
            }, r.prototype.getLocalBounds = function (t) {
                var e = this.transform, i = this.parent;
                this.parent = null, this.transform = c.transform, t || (this._localBoundsRect || (this._localBoundsRect = new l.Rectangle), t = this._localBoundsRect);
                var r = this.getBounds(!1, t);
                return this.parent = i, this.transform = e, r
            }, r.prototype.toGlobal = function (t, e, i) {
                return i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = c, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
            }, r.prototype.toLocal = function (t, e, i, r) {
                return e && (t = e.toGlobal(t, i, r)), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = c, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, i)
            }, r.prototype.renderWebGL = function (t) {
            }, r.prototype.renderCanvas = function (t) {
            }, r.prototype.setParent = function (t) {
                if (!t || !t.addChild)throw new Error("setParent: Argument must be a Container");
                return t.addChild(this), t
            }, r.prototype.setTransform = function (t, e, i, r, s, n, o, a, h) {
                return this.position.x = t || 0, this.position.y = e || 0, this.scale.x = i ? i : 1, this.scale.y = r ? r : 1, this.rotation = s || 0, this.skew.x = n || 0, this.skew.y = o || 0, this.pivot.x = a || 0, this.pivot.y = h || 0, this
            }, r.prototype.destroy = function () {
                this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filterArea = null, this.interactive = !1, this.interactiveChildren = !1
            }
        }, {
            "../const": 78,
            "../math": 102,
            "./Bounds": 79,
            "./Transform": 82,
            "./TransformStatic": 84,
            eventemitter3: 16
        }],
        82: [function (t, e, i) {
            function r() {
                n.call(this), this.position = new s.Point(0, 0), this.scale = new s.Point(1, 1), this.skew = new s.ObservablePoint(this.updateSkew, this, 0, 0), this.pivot = new s.Point(0, 0), this._rotation = 0, this._sr = Math.sin(0), this._cr = Math.cos(0), this._cy = Math.cos(0), this._sy = Math.sin(0), this._nsx = Math.sin(0), this._cx = Math.cos(0)
            }

            var s = t("../math"), n = t("./TransformBase");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.prototype.updateSkew = function () {
                this._cy = Math.cos(this.skew.y), this._sy = Math.sin(this.skew.y), this._nsx = Math.sin(this.skew.x), this._cx = Math.cos(this.skew.x)
            }, r.prototype.updateLocalTransform = function () {
                var t, e, i, r, s = this.localTransform;
                t = this._cr * this.scale.x, e = this._sr * this.scale.x, i = -this._sr * this.scale.y, r = this._cr * this.scale.y, s.a = this._cy * t + this._sy * i, s.b = this._cy * e + this._sy * r, s.c = this._nsx * t + this._cx * i, s.d = this._nsx * e + this._cx * r
            }, r.prototype.updateTransform = function (t) {
                var e, i, r, s, n = t.worldTransform, o = this.worldTransform, a = this.localTransform;
                e = this._cr * this.scale.x, i = this._sr * this.scale.x, r = -this._sr * this.scale.y, s = this._cr * this.scale.y, a.a = this._cy * e + this._sy * r, a.b = this._cy * i + this._sy * s, a.c = this._nsx * e + this._cx * r, a.d = this._nsx * i + this._cx * s, a.tx = this.position.x - (this.pivot.x * a.a + this.pivot.y * a.c), a.ty = this.position.y - (this.pivot.x * a.b + this.pivot.y * a.d), o.a = a.a * n.a + a.b * n.c, o.b = a.a * n.b + a.b * n.d, o.c = a.c * n.a + a.d * n.c, o.d = a.c * n.b + a.d * n.d, o.tx = a.tx * n.a + a.ty * n.c + n.tx, o.ty = a.tx * n.b + a.ty * n.d + n.ty, this._worldID++
            }, r.prototype.setFromMatrix = function (t) {
                t.decompose(this)
            }, Object.defineProperties(r.prototype, {
                rotation: {
                    get: function () {
                        return this._rotation
                    }, set: function (t) {
                        this._rotation = t, this._sr = Math.sin(t), this._cr = Math.cos(t)
                    }
                }
            }), e.exports = r
        }, {"../math": 102, "./TransformBase": 83}],
        83: [function (t, e, i) {
            function r() {
                this.worldTransform = new s.Matrix, this.localTransform = new s.Matrix, this._worldID = 0
            }

            var s = t("../math");
            r.prototype.constructor = r, r.prototype.updateLocalTransform = function () {
            }, r.prototype.updateTransform = function (t) {
                var e = t.worldTransform, i = this.worldTransform, r = this.localTransform;
                i.a = r.a * e.a + r.b * e.c, i.b = r.a * e.b + r.b * e.d, i.c = r.c * e.a + r.d * e.c, i.d = r.c * e.b + r.d * e.d, i.tx = r.tx * e.a + r.ty * e.c + e.tx, i.ty = r.tx * e.b + r.ty * e.d + e.ty, this._worldID++
            }, r.prototype.updateWorldTransform = r.prototype.updateTransform, r.IDENTITY = new r, e.exports = r
        }, {"../math": 102}],
        84: [function (t, e, i) {
            function r() {
                n.call(this), this.position = new s.ObservablePoint(this.onChange, this, 0, 0), this.scale = new s.ObservablePoint(this.onChange, this, 1, 1), this.pivot = new s.ObservablePoint(this.onChange, this, 0, 0), this.skew = new s.ObservablePoint(this.updateSkew, this, 0, 0), this._rotation = 0, this._sr = Math.sin(0), this._cr = Math.cos(0), this._cy = Math.cos(0), this._sy = Math.sin(0), this._nsx = Math.sin(0), this._cx = Math.cos(0), this._localID = 0, this._currentLocalID = 0
            }

            var s = t("../math"), n = t("./TransformBase");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, r.prototype.onChange = function () {
                this._localID++
            }, r.prototype.updateSkew = function () {
                this._cy = Math.cos(this.skew._y), this._sy = Math.sin(this.skew._y), this._nsx = Math.sin(this.skew._x), this._cx = Math.cos(this.skew._x), this._localID++
            }, r.prototype.updateLocalTransform = function () {
                var t = this.localTransform;
                if (this._localID !== this._currentLocalID) {
                    var e, i, r, s;
                    e = this._cr * this.scale._x, i = this._sr * this.scale._x, r = -this._sr * this.scale._y, s = this._cr * this.scale._y, t.a = this._cy * e + this._sy * r, t.b = this._cy * i + this._sy * s, t.c = this._nsx * e + this._cx * r, t.d = this._nsx * i + this._cx * s, t.tx = this.position._x - (this.pivot._x * t.a + this.pivot._y * t.c), t.ty = this.position._y - (this.pivot._x * t.b + this.pivot._y * t.d), this._currentLocalID = this._localID, this._parentID = -1
                }
            }, r.prototype.updateTransform = function (t) {
                var e = t.worldTransform, i = this.worldTransform, r = this.localTransform;
                if (this._localID !== this._currentLocalID) {
                    var s, n, o, a;
                    s = this._cr * this.scale._x, n = this._sr * this.scale._x, o = -this._sr * this.scale._y, a = this._cr * this.scale._y, r.a = this._cy * s + this._sy * o, r.b = this._cy * n + this._sy * a, r.c = this._nsx * s + this._cx * o, r.d = this._nsx * n + this._cx * a, r.tx = this.position._x - (this.pivot._x * r.a + this.pivot._y * r.c), r.ty = this.position._y - (this.pivot._x * r.b + this.pivot._y * r.d), this._currentLocalID = this._localID, this._parentID = -1
                }
                this._parentID !== t._worldID && (i.a = r.a * e.a + r.b * e.c, i.b = r.a * e.b + r.b * e.d, i.c = r.c * e.a + r.d * e.c, i.d = r.c * e.b + r.d * e.d, i.tx = r.tx * e.a + r.ty * e.c + e.tx, i.ty = r.tx * e.b + r.ty * e.d + e.ty, this._parentID = t._worldID, this._worldID++)
            }, r.prototype.setFromMatrix = function (t) {
                t.decompose(this), this._localID++;
            }, Object.defineProperties(r.prototype, {
                rotation: {
                    get: function () {
                        return this._rotation
                    }, set: function (t) {
                        this._rotation = t, this._sr = Math.sin(t), this._cr = Math.cos(t), this._localID++
                    }
                }
            }), e.exports = r
        }, {"../math": 102, "./TransformBase": 83}],
        85: [function (t, e, i) {
            function r() {
                n.call(this), this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = 0, this.graphicsData = [], this.tint = 16777215, this._prevTint = 16777215, this.blendMode = u.BLEND_MODES.NORMAL, this.currentPath = null, this._webGL = {}, this.isMask = !1, this.boundsPadding = 0, this._localBounds = new p, this.dirty = 0, this.fastRectDirty = -1, this.clearDirty = 0, this.boundsDirty = -1, this.cachedSpriteDirty = !1, this._spriteRect = null, this._fastRect = !1
            }

            var s, n = t("../display/Container"), o = t("../textures/RenderTexture"), a = t("../textures/Texture"), h = t("./GraphicsData"), l = t("../sprites/Sprite"), c = t("../math"), u = t("../const"), d = t("../utils"), p = t("../display/Bounds"), f = t("./utils/bezierCurveTo"), g = t("../renderers/canvas/CanvasRenderer"), m = new c.Matrix, v = new c.Point, _ = new Float32Array(4), y = new Float32Array(4);
            r._SPRITE_TEXTURE = null, r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.clone = function () {
                var t = new r;
                t.renderable = this.renderable, t.fillAlpha = this.fillAlpha, t.lineWidth = this.lineWidth, t.lineColor = this.lineColor, t.tint = this.tint, t.blendMode = this.blendMode, t.isMask = this.isMask, t.boundsPadding = this.boundsPadding, t.dirty = 0, t.cachedSpriteDirty = this.cachedSpriteDirty;
                for (var e = 0; e < this.graphicsData.length; ++e)t.graphicsData.push(this.graphicsData[e].clone());
                return t.currentPath = t.graphicsData[t.graphicsData.length - 1], t.updateLocalBounds(), t
            }, r.prototype.lineStyle = function (t, e, i) {
                if (this.lineWidth = t || 0, this.lineColor = e || 0, this.lineAlpha = void 0 === i ? 1 : i, this.currentPath)if (this.currentPath.shape.points.length) {
                    var r = new c.Polygon(this.currentPath.shape.points.slice(-2));
                    r.closed = !1, this.drawShape(r)
                } else this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha;
                return this
            }, r.prototype.moveTo = function (t, e) {
                var i = new c.Polygon([t, e]);
                return i.closed = !1, this.drawShape(i), this
            }, r.prototype.lineTo = function (t, e) {
                return this.currentPath.shape.points.push(t, e), this.dirty++, this
            }, r.prototype.quadraticCurveTo = function (t, e, i, r) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                var s, n, o = 20, a = this.currentPath.shape.points;
                0 === a.length && this.moveTo(0, 0);
                for (var h = a[a.length - 2], l = a[a.length - 1], c = 0, u = 1; u <= o; ++u)c = u / o, s = h + (t - h) * c, n = l + (e - l) * c, a.push(s + (t + (i - t) * c - s) * c, n + (e + (r - e) * c - n) * c);
                return this.dirty++, this
            }, r.prototype.bezierCurveTo = function (t, e, i, r, s, n) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                var o = this.currentPath.shape.points, a = o[o.length - 2], h = o[o.length - 1];
                return o.length -= 2, f(a, h, t, e, i, r, s, n, o), this.dirty++, this
            }, r.prototype.arcTo = function (t, e, i, r, s) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
                var n = this.currentPath.shape.points, o = n[n.length - 2], a = n[n.length - 1], h = a - e, l = o - t, c = r - e, u = i - t, d = Math.abs(h * u - l * c);
                if (d < 1e-8 || 0 === s)n[n.length - 2] === t && n[n.length - 1] === e || n.push(t, e); else {
                    var p = h * h + l * l, f = c * c + u * u, g = h * c + l * u, m = s * Math.sqrt(p) / d, v = s * Math.sqrt(f) / d, _ = m * g / p, y = v * g / f, x = m * u + v * l, b = m * c + v * h, w = l * (v + _), T = h * (v + _), L = u * (m + y), S = c * (m + y), E = Math.atan2(T - b, w - x), P = Math.atan2(S - b, L - x);
                    this.arc(x + t, b + e, s, E, P, l * c > u * h)
                }
                return this.dirty++, this
            }, r.prototype.arc = function (t, e, i, r, s, n) {
                if (n = n || !1, r === s)return this;
                !n && s <= r ? s += 2 * Math.PI : n && r <= s && (r += 2 * Math.PI);
                var o = n ? (r - s) * -1 : s - r, a = 40 * Math.ceil(Math.abs(o) / (2 * Math.PI));
                if (0 === o)return this;
                var h = t + Math.cos(r) * i, l = e + Math.sin(r) * i;
                this.currentPath ? this.currentPath.shape.points.push(h, l) : this.moveTo(h, l);
                for (var c = this.currentPath.shape.points, u = o / (2 * a), d = 2 * u, p = Math.cos(u), f = Math.sin(u), g = a - 1, m = g % 1 / g, v = 0; v <= g; v++) {
                    var _ = v + m * v, y = u + r + d * _, x = Math.cos(y), b = -Math.sin(y);
                    c.push((p * x + f * b) * i + t, (p * -b + f * x) * i + e)
                }
                return this.dirty++, this
            }, r.prototype.beginFill = function (t, e) {
                return this.filling = !0, this.fillColor = t || 0, this.fillAlpha = void 0 === e ? 1 : e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
            }, r.prototype.endFill = function () {
                return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
            }, r.prototype.drawRect = function (t, e, i, r) {
                return this.drawShape(new c.Rectangle(t, e, i, r)), this
            }, r.prototype.drawRoundedRect = function (t, e, i, r, s) {
                return this.drawShape(new c.RoundedRectangle(t, e, i, r, s)), this
            }, r.prototype.drawCircle = function (t, e, i) {
                return this.drawShape(new c.Circle(t, e, i)), this
            }, r.prototype.drawEllipse = function (t, e, i, r) {
                return this.drawShape(new c.Ellipse(t, e, i, r)), this
            }, r.prototype.drawPolygon = function (t) {
                var e = t, i = !0;
                if (e instanceof c.Polygon && (i = e.closed, e = e.points), !Array.isArray(e)) {
                    e = new Array(arguments.length);
                    for (var r = 0; r < e.length; ++r)e[r] = arguments[r]
                }
                var s = new c.Polygon(e);
                return s.closed = i, this.drawShape(s), this
            }, r.prototype.clear = function () {
                return this.lineWidth = 0, this.filling = !1, this.dirty++, this.clearDirty++, this.graphicsData = [], this
            }, r.prototype.isFastRect = function () {
                return 1 === this.graphicsData.length && this.graphicsData[0].shape.type === u.SHAPES.RECT && !this.graphicsData[0].lineWidth
            }, r.prototype._renderWebGL = function (t) {
                this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty, this._fastRect = this.isFastRect()), this._fastRect ? this._renderSpriteRect(t) : (t.setObjectRenderer(t.plugins.graphics), t.plugins.graphics.render(this))
            }, r.prototype._renderSpriteRect = function (t) {
                var e = this.graphicsData[0].shape;
                if (!this._spriteRect) {
                    if (!r._SPRITE_TEXTURE) {
                        r._SPRITE_TEXTURE = o.create(10, 10);
                        var i = t._activeRenderTarget;
                        t.bindRenderTexture(r._SPRITE_TEXTURE), t.clear([1, 1, 1, 1]), t.bindRenderTarget(i)
                    }
                    this._spriteRect = new l(r._SPRITE_TEXTURE)
                }
                if (16777215 === this.tint)this._spriteRect.tint = this.graphicsData[0].fillColor; else {
                    var s = _, n = y;
                    d.hex2rgb(this.graphicsData[0].fillColor, s), d.hex2rgb(this.tint, n), s[0] *= n[0], s[1] *= n[1], s[2] *= n[2], this._spriteRect.tint = d.rgb2hex(s)
                }
                this._spriteRect.alpha = this.graphicsData[0].fillAlpha, this._spriteRect.worldAlpha = this.worldAlpha * this._spriteRect.alpha, r._SPRITE_TEXTURE._frame.width = e.width, r._SPRITE_TEXTURE._frame.height = e.height, this._spriteRect.transform.worldTransform = this.transform.worldTransform, this._spriteRect.anchor.set(-e.x / e.width, -e.y / e.height), this._spriteRect.onAnchorUpdate(), this._spriteRect._renderWebGL(t)
            }, r.prototype._renderCanvas = function (t) {
                this.isMask !== !0 && t.plugins.graphics.render(this)
            }, r.prototype._calculateBounds = function () {
                if (this.renderable) {
                    this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.updateLocalBounds(), this.dirty++, this.cachedSpriteDirty = !0);
                    var t = this._localBounds;
                    this._bounds.addFrame(this.transform, t.minX, t.minY, t.maxX, t.maxY)
                }
            }, r.prototype.containsPoint = function (t) {
                this.worldTransform.applyInverse(t, v);
                for (var e = this.graphicsData, i = 0; i < e.length; i++) {
                    var r = e[i];
                    if (r.fill && r.shape && r.shape.contains(v.x, v.y))return !0
                }
                return !1
            }, r.prototype.updateLocalBounds = function () {
                var t = 1 / 0, e = -(1 / 0), i = 1 / 0, r = -(1 / 0);
                if (this.graphicsData.length)for (var s, n, o, a, h, l, c = 0; c < this.graphicsData.length; c++) {
                    var d = this.graphicsData[c], p = d.type, f = d.lineWidth;
                    if (s = d.shape, p === u.SHAPES.RECT || p === u.SHAPES.RREC)o = s.x - f / 2, a = s.y - f / 2, h = s.width + f, l = s.height + f, t = o < t ? o : t, e = o + h > e ? o + h : e, i = a < i ? a : i, r = a + l > r ? a + l : r; else if (p === u.SHAPES.CIRC)o = s.x, a = s.y, h = s.radius + f / 2, l = s.radius + f / 2, t = o - h < t ? o - h : t, e = o + h > e ? o + h : e, i = a - l < i ? a - l : i, r = a + l > r ? a + l : r; else if (p === u.SHAPES.ELIP)o = s.x, a = s.y, h = s.width + f / 2, l = s.height + f / 2, t = o - h < t ? o - h : t, e = o + h > e ? o + h : e, i = a - l < i ? a - l : i, r = a + l > r ? a + l : r; else {
                        n = s.points;
                        for (var g = 0; g < n.length; g += 2)o = n[g], a = n[g + 1], t = o - f < t ? o - f : t, e = o + f > e ? o + f : e, i = a - f < i ? a - f : i, r = a + f > r ? a + f : r
                    }
                } else t = 0, e = 0, i = 0, r = 0;
                var m = this.boundsPadding;
                this._localBounds.minX = t - m, this._localBounds.maxX = e + 2 * m, this._localBounds.minY = i - m, this._localBounds.maxY = r + 2 * m
            }, r.prototype.drawShape = function (t) {
                this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
                var e = new h(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, t);
                return this.graphicsData.push(e), e.type === u.SHAPES.POLY && (e.shape.closed = e.shape.closed || this.filling, this.currentPath = e), this.dirty++, e
            }, r.prototype.generateCanvasTexture = function (t, e) {
                e = e || 1;
                var i = this.getLocalBounds(), r = new o.create(i.width * e, i.height * e);
                s || (s = new g), m.tx = -i.x, m.ty = -i.y, s.render(this, r, !1, m);
                var n = a.fromCanvas(r.baseTexture._canvasRenderTarget.canvas, t);
                return n.baseTexture.resolution = e, n
            }, r.prototype.closePath = function () {
                var t = this.currentPath;
                return t && t.shape && t.shape.close(), this
            }, r.prototype.addHole = function () {
                var t = this.graphicsData.pop();
                return this.currentPath = this.graphicsData[this.graphicsData.length - 1], this.currentPath.addHole(t.shape), this.currentPath = null, this
            }, r.prototype.destroy = function () {
                n.prototype.destroy.apply(this, arguments);
                for (var t = 0; t < this.graphicsData.length; ++t)this.graphicsData[t].destroy();
                for (var e in this._webgl)for (var i = 0; i < this._webgl[e].data.length; ++i)this._webgl[e].data[i].destroy();
                this._spriteRect && this._spriteRect.destroy(), this.graphicsData = null, this.currentPath = null, this._webgl = null, this._localBounds = null
            }
        }, {
            "../const": 78,
            "../display/Bounds": 79,
            "../display/Container": 80,
            "../math": 102,
            "../renderers/canvas/CanvasRenderer": 109,
            "../sprites/Sprite": 133,
            "../textures/RenderTexture": 143,
            "../textures/Texture": 144,
            "../utils": 151,
            "./GraphicsData": 86,
            "./utils/bezierCurveTo": 88
        }],
        86: [function (t, e, i) {
            function r(t, e, i, r, s, n, o) {
                this.lineWidth = t, this.lineColor = e, this.lineAlpha = i, this._lineTint = e, this.fillColor = r, this.fillAlpha = s, this._fillTint = r, this.fill = n, this.holes = [], this.shape = o, this.type = o.type
            }

            r.prototype.constructor = r, e.exports = r, r.prototype.clone = function () {
                return new r(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape)
            }, r.prototype.addHole = function (t) {
                this.holes.push(t)
            }, r.prototype.destroy = function () {
                this.shape = null, this.holes = null
            }
        }, {}],
        87: [function (t, e, i) {
            function r(t) {
                this.renderer = t
            }

            var s = t("../../renderers/canvas/CanvasRenderer"), n = t("../../const");
            r.prototype.constructor = r, e.exports = r, s.registerPlugin("graphics", r), r.prototype.render = function (t) {
                var e = this.renderer, i = e.context, r = t.worldAlpha, s = t.transform.worldTransform, o = e.resolution;
                this._prevTint !== this.tint && (this.dirty = !0), i.setTransform(s.a * o, s.b * o, s.c * o, s.d * o, s.tx * o, s.ty * o), t.dirty && (this.updateGraphicsTint(t), t.dirty = !1), e.setBlendMode(t.blendMode);
                for (var a = 0; a < t.graphicsData.length; a++) {
                    var h = t.graphicsData[a], l = h.shape, c = h._fillTint, u = h._lineTint;
                    if (i.lineWidth = h.lineWidth, h.type === n.SHAPES.POLY) {
                        i.beginPath(), this.renderPolygon(l.points, l.closed, i);
                        for (var d = 0; d < h.holes.length; d++) {
                            var p = h.holes[d];
                            this.renderPolygon(p.points, !0, i)
                        }
                        h.fill && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.stroke())
                    } else if (h.type === n.SHAPES.RECT)(h.fillColor || 0 === h.fillColor) && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fillRect(l.x, l.y, l.width, l.height)), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.strokeRect(l.x, l.y, l.width, l.height)); else if (h.type === n.SHAPES.CIRC)i.beginPath(), i.arc(l.x, l.y, l.radius, 0, 2 * Math.PI), i.closePath(), h.fill && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.stroke()); else if (h.type === n.SHAPES.ELIP) {
                        var f = 2 * l.width, g = 2 * l.height, m = l.x - f / 2, v = l.y - g / 2;
                        i.beginPath();
                        var _ = .5522848, y = f / 2 * _, x = g / 2 * _, b = m + f, w = v + g, T = m + f / 2, L = v + g / 2;
                        i.moveTo(m, L), i.bezierCurveTo(m, L - x, T - y, v, T, v), i.bezierCurveTo(T + y, v, b, L - x, b, L), i.bezierCurveTo(b, L + x, T + y, w, T, w), i.bezierCurveTo(T - y, w, m, L + x, m, L), i.closePath(), h.fill && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.stroke())
                    } else if (h.type === n.SHAPES.RREC) {
                        var S = l.x, E = l.y, P = l.width, A = l.height, C = l.radius, R = Math.min(P, A) / 2 | 0;
                        C = C > R ? R : C, i.beginPath(), i.moveTo(S, E + C), i.lineTo(S, E + A - C), i.quadraticCurveTo(S, E + A, S + C, E + A), i.lineTo(S + P - C, E + A), i.quadraticCurveTo(S + P, E + A, S + P, E + A - C), i.lineTo(S + P, E + C), i.quadraticCurveTo(S + P, E, S + P - C, E), i.lineTo(S + C, E), i.quadraticCurveTo(S, E, S, E + C), i.closePath(), (h.fillColor || 0 === h.fillColor) && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), i.stroke())
                    }
                }
            }, r.prototype.updateGraphicsTint = function (t) {
                t._prevTint = t.tint;
                for (var e = (t.tint >> 16 & 255) / 255, i = (t.tint >> 8 & 255) / 255, r = (255 & t.tint) / 255, s = 0; s < t.graphicsData.length; s++) {
                    var n = t.graphicsData[s], o = 0 | n.fillColor, a = 0 | n.lineColor;
                    n._fillTint = ((o >> 16 & 255) / 255 * e * 255 << 16) + ((o >> 8 & 255) / 255 * i * 255 << 8) + (255 & o) / 255 * r * 255, n._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * i * 255 << 8) + (255 & a) / 255 * r * 255
                }
            }, r.prototype.renderPolygon = function (t, e, i) {
                i.moveTo(t[0], t[1]);
                for (var r = 1; r < t.length / 2; r++)i.lineTo(t[2 * r], t[2 * r + 1]);
                e && i.closePath()
            }, r.prototype.destroy = function () {
                this.renderer = null
            }
        }, {"../../const": 78, "../../renderers/canvas/CanvasRenderer": 109}],
        88: [function (t, e, i) {
            var r = function (t, e, i, r, s, n, o, a, h) {
                h = h || [];
                var l, c, u, d, p, f = 20;
                h.push(t, e);
                for (var g = 0, m = 1; m <= f; ++m)g = m / f, l = 1 - g, c = l * l, u = c * l, d = g * g, p = d * g, h.push(u * t + 3 * c * g * i + 3 * l * d * s + p * o, u * e + 3 * c * g * r + 3 * l * d * n + p * a);
                return h
            };
            e.exports = r
        }, {}],
        89: [function (t, e, i) {
            function r(t) {
                o.call(this, t), this.graphicsDataPool = [], this.primitiveShader = null, this.gl = t.gl, this.CONTEXT_UID = 0
            }

            var s = t("../../utils"), n = t("../../const"), o = t("../../renderers/webgl/utils/ObjectRenderer"), a = t("../../renderers/webgl/WebGLRenderer"), h = t("./WebGLGraphicsData"), l = t("./shaders/PrimitiveShader"), c = t("./utils/buildPoly"), u = t("./utils/buildRectangle"), d = t("./utils/buildRoundedRectangle"), p = t("./utils/buildCircle");
            r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, a.registerPlugin("graphics", r), r.prototype.onContextChange = function () {
                this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.primitiveShader = new l(this.gl)
            }, r.prototype.destroy = function () {
                o.prototype.destroy.call(this);
                for (var t = 0; t < this.graphicsDataPool.length; ++t)this.graphicsDataPool[t].destroy();
                this.graphicsDataPool = null
            }, r.prototype.render = function (t) {
                var e, i = this.renderer, r = i.gl, n = t._webGL[this.CONTEXT_UID];
                n && t.dirty === n.dirty || (this.updateGraphics(t), n = t._webGL[this.CONTEXT_UID]);
                var o = this.primitiveShader;
                i.bindShader(o), i.state.setBlendMode(t.blendMode);
                for (var a = 0, h = n.data.length; a < h; a++) {
                    e = n.data[a];
                    var l = e.shader;
                    i.bindShader(l), l.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), l.uniforms.tint = s.hex2rgb(t.tint), l.uniforms.alpha = t.worldAlpha, e.vao.bind().draw(r.TRIANGLE_STRIP, e.indices.length).unbind()
                }
            }, r.prototype.updateGraphics = function (t) {
                var e = this.renderer.gl, i = t._webGL[this.CONTEXT_UID];
                i || (i = t._webGL[this.CONTEXT_UID] = {
                    lastIndex: 0,
                    data: [],
                    gl: e,
                    clearDirty: -1,
                    dirty: -1
                }), i.dirty = t.dirty;
                var r;
                if (t.clearDirty !== i.clearDirty) {
                    for (i.clearDirty = t.clearDirty, r = 0; r < i.data.length; r++) {
                        var s = i.data[r];
                        this.graphicsDataPool.push(s)
                    }
                    i.data = [], i.lastIndex = 0
                }
                var o;
                for (r = i.lastIndex; r < t.graphicsData.length; r++) {
                    var a = t.graphicsData[r];
                    o = this.getWebGLData(i, 0), a.type === n.SHAPES.POLY && c(a, o), a.type === n.SHAPES.RECT ? u(a, o) : a.type === n.SHAPES.CIRC || a.type === n.SHAPES.ELIP ? p(a, o) : a.type === n.SHAPES.RREC && d(a, o), i.lastIndex++
                }
                for (r = 0; r < i.data.length; r++)o = i.data[r], o.dirty && o.upload()
            }, r.prototype.getWebGLData = function (t, e) {
                var i = t.data[t.data.length - 1];
                return (!i || i.points.length > 32e4) && (i = this.graphicsDataPool.pop() || new h(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState), i.reset(e), t.data.push(i)), i.dirty = !0, i
            }
        }, {
            "../../const": 78,
            "../../renderers/webgl/WebGLRenderer": 116,
            "../../renderers/webgl/utils/ObjectRenderer": 126,
            "../../utils": 151,
            "./WebGLGraphicsData": 90,
            "./shaders/PrimitiveShader": 91,
            "./utils/buildCircle": 92,
            "./utils/buildPoly": 94,
            "./utils/buildRectangle": 95,
            "./utils/buildRoundedRectangle": 96
        }],
        90: [function (t, e, i) {
            function r(t, e, i) {
                this.gl = t, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = s.GLBuffer.createVertexBuffer(t), this.indexBuffer = s.GLBuffer.createIndexBuffer(t), this.dirty = !0, this.glPoints = null, this.glIndices = null, this.shader = e, this.vao = new s.VertexArrayObject(t, i).addIndex(this.indexBuffer).addAttribute(this.buffer, e.attributes.aVertexPosition, t.FLOAT, !1, 24, 0).addAttribute(this.buffer, e.attributes.aColor, t.FLOAT, !1, 24, 8)
            }

            var s = t("pixi-gl-core");
            r.prototype.constructor = r, e.exports = r, r.prototype.reset = function () {
                this.points.length = 0, this.indices.length = 0
            }, r.prototype.upload = function () {
                this.glPoints = new Float32Array(this.points), this.buffer.upload(this.glPoints), this.glIndices = new Uint16Array(this.indices), this.indexBuffer.upload(this.glIndices), this.dirty = !1
            }, r.prototype.destroy = function () {
                this.color = null, this.points = null, this.indices = null, this.vao.destroy(), this.buffer.destroy(), this.indexBuffer.destroy(), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null
            }
        }, {"pixi-gl-core": 51}],
        91: [function (t, e, i) {
            function r(t) {
                s.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"))
            }

            var s = t("../../../Shader");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r
        }, {"../../../Shader": 77}],
        92: [function (t, e, i) {
            var r = t("./buildLine"), s = t("../../../const"), n = t("../../../utils"), o = function (t, e) {
                var i, o, a = t.shape, h = a.x, l = a.y;
                t.type === s.SHAPES.CIRC ? (i = a.radius, o = a.radius) : (i = a.width, o = a.height);
                var c = Math.floor(30 * Math.sqrt(a.radius)) || Math.floor(15 * Math.sqrt(a.width + a.height)), u = 2 * Math.PI / c, d = 0;
                if (t.fill) {
                    var p = n.hex2rgb(t.fillColor), f = t.fillAlpha, g = p[0] * f, m = p[1] * f, v = p[2] * f, _ = e.points, y = e.indices, x = _.length / 6;
                    for (y.push(x), d = 0; d < c + 1; d++)_.push(h, l, g, m, v, f), _.push(h + Math.sin(u * d) * i, l + Math.cos(u * d) * o, g, m, v, f), y.push(x++, x++);
                    y.push(x - 1)
                }
                if (t.lineWidth) {
                    var b = t.points;
                    for (t.points = [], d = 0; d < c + 1; d++)t.points.push(h + Math.sin(u * d) * i, l + Math.cos(u * d) * o);
                    r(t, e), t.points = b
                }
            };
            e.exports = o
        }, {"../../../const": 78, "../../../utils": 151, "./buildLine": 93}],
        93: [function (t, e, i) {
            var r = t("../../../math"), s = t("../../../utils"), n = function (t, e) {
                var i = 0, n = t.points;
                if (0 !== n.length) {
                    var o = new r.Point(n[0], n[1]), a = new r.Point(n[n.length - 2], n[n.length - 1]);
                    if (o.x === a.x && o.y === a.y) {
                        n = n.slice(), n.pop(), n.pop(), a = new r.Point(n[n.length - 2], n[n.length - 1]);
                        var h = a.x + .5 * (o.x - a.x), l = a.y + .5 * (o.y - a.y);
                        n.unshift(h, l), n.push(h, l)
                    }
                    var c, u, d, p, f, g, m, v, _, y, x, b, w, T, L, S, E, P, A, C, R, M, O, I = e.points, B = e.indices, D = n.length / 2, W = n.length, N = I.length / 6, j = t.lineWidth / 2, F = s.hex2rgb(t.lineColor), k = t.lineAlpha, U = F[0] * k, V = F[1] * k, H = F[2] * k;
                    for (d = n[0], p = n[1], f = n[2], g = n[3], _ = -(p - g), y = d - f, O = Math.sqrt(_ * _ + y * y), _ /= O, y /= O, _ *= j, y *= j, I.push(d - _, p - y, U, V, H, k), I.push(d + _, p + y, U, V, H, k), i = 1; i < D - 1; i++)d = n[2 * (i - 1)], p = n[2 * (i - 1) + 1], f = n[2 * i], g = n[2 * i + 1], m = n[2 * (i + 1)], v = n[2 * (i + 1) + 1], _ = -(p - g), y = d - f, O = Math.sqrt(_ * _ + y * y), _ /= O, y /= O, _ *= j, y *= j, x = -(g - v), b = f - m, O = Math.sqrt(x * x + b * b), x /= O, b /= O, x *= j, b *= j, L = -y + p - (-y + g), S = -_ + f - (-_ + d), E = (-_ + d) * (-y + g) - (-_ + f) * (-y + p), P = -b + v - (-b + g), A = -x + f - (-x + m), C = (-x + m) * (-b + g) - (-x + f) * (-b + v), R = L * A - P * S, Math.abs(R) < .1 ? (R += 10.1, I.push(f - _, g - y, U, V, H, k), I.push(f + _, g + y, U, V, H, k)) : (c = (S * C - A * E) / R, u = (P * E - L * C) / R, M = (c - f) * (c - f) + (u - g) * (u - g), M > 19600 ? (w = _ - x, T = y - b, O = Math.sqrt(w * w + T * T), w /= O, T /= O, w *= j, T *= j, I.push(f - w, g - T), I.push(U, V, H, k), I.push(f + w, g + T), I.push(U, V, H, k), I.push(f - w, g - T), I.push(U, V, H, k), W++) : (I.push(c, u), I.push(U, V, H, k), I.push(f - (c - f), g - (u - g)), I.push(U, V, H, k)));
                    for (d = n[2 * (D - 2)], p = n[2 * (D - 2) + 1], f = n[2 * (D - 1)], g = n[2 * (D - 1) + 1], _ = -(p - g), y = d - f, O = Math.sqrt(_ * _ + y * y), _ /= O, y /= O, _ *= j, y *= j, I.push(f - _, g - y), I.push(U, V, H, k), I.push(f + _, g + y), I.push(U, V, H, k), B.push(N), i = 0; i < W; i++)B.push(N++);
                    B.push(N - 1)
                }
            };
            e.exports = n
        }, {"../../../math": 102, "../../../utils": 151}],
        94: [function (t, e, i) {
            var r = t("./buildLine"), s = t("../../../utils"), n = t("earcut"), o = function (t, e) {
                t.points = t.shape.points.slice();
                var i = t.points;
                if (t.fill && i.length >= 6) {
                    for (var o = [], a = t.holes, h = 0; h < a.length; h++) {
                        var l = a[h];
                        o.push(i.length / 2), i = i.concat(l.points)
                    }
                    var c = e.points, u = e.indices, d = i.length / 2, p = s.hex2rgb(t.fillColor), f = t.fillAlpha, g = p[0] * f, m = p[1] * f, v = p[2] * f, _ = n(i, o, 2);
                    if (!_)return;
                    var y = c.length / 6;
                    for (h = 0; h < _.length; h += 3)u.push(_[h] + y), u.push(_[h] + y), u.push(_[h + 1] + y), u.push(_[h + 2] + y), u.push(_[h + 2] + y);
                    for (h = 0; h < d; h++)c.push(i[2 * h], i[2 * h + 1], g, m, v, f)
                }
                t.lineWidth > 0 && r(t, e)
            };
            e.exports = o
        }, {"../../../utils": 151, "./buildLine": 93, earcut: 15}],
        95: [function (t, e, i) {
            var r = t("./buildLine"), s = t("../../../utils"), n = function (t, e) {
                var i = t.shape, n = i.x, o = i.y, a = i.width, h = i.height;
                if (t.fill) {
                    var l = s.hex2rgb(t.fillColor), c = t.fillAlpha, u = l[0] * c, d = l[1] * c, p = l[2] * c, f = e.points, g = e.indices, m = f.length / 6;
                    f.push(n, o), f.push(u, d, p, c), f.push(n + a, o), f.push(u, d, p, c), f.push(n, o + h), f.push(u, d, p, c), f.push(n + a, o + h), f.push(u, d, p, c), g.push(m, m, m + 1, m + 2, m + 3, m + 3)
                }
                if (t.lineWidth) {
                    var v = t.points;
                    t.points = [n, o, n + a, o, n + a, o + h, n, o + h, n, o], r(t, e), t.points = v
                }
            };
            e.exports = n
        }, {"../../../utils": 151, "./buildLine": 93}],
        96: [function (t, e, i) {
            var r = t("earcut"), s = t("./buildLine"), n = t("../../../utils"), o = function (t, e) {
                var i = t.shape, o = i.x, h = i.y, l = i.width, c = i.height, u = i.radius, d = [];
                if (d.push(o, h + u), a(o, h + c - u, o, h + c, o + u, h + c, d), a(o + l - u, h + c, o + l, h + c, o + l, h + c - u, d), a(o + l, h + u, o + l, h, o + l - u, h, d), a(o + u, h, o, h, o, h + u + 1e-10, d), t.fill) {
                    var p = n.hex2rgb(t.fillColor), f = t.fillAlpha, g = p[0] * f, m = p[1] * f, v = p[2] * f, _ = e.points, y = e.indices, x = _.length / 6, b = r(d, null, 2), w = 0;
                    for (w = 0; w < b.length; w += 3)y.push(b[w] + x), y.push(b[w] + x), y.push(b[w + 1] + x), y.push(b[w + 2] + x), y.push(b[w + 2] + x);
                    for (w = 0; w < d.length; w++)_.push(d[w], d[++w], g, m, v, f)
                }
                if (t.lineWidth) {
                    var T = t.points;
                    t.points = d, s(t, e), t.points = T
                }
            }, a = function (t, e, i, r, s, n, o) {
                function a(t, e, i) {
                    var r = e - t;
                    return t + r * i
                }

                for (var h, l, c, u, d, p, f = 20, g = o || [], m = 0, v = 0; v <= f; v++)m = v / f, h = a(t, i, m), l = a(e, r, m), c = a(i, s, m), u = a(r, n, m), d = a(h, c, m), p = a(l, u, m), g.push(d, p);
                return g
            };
            e.exports = o
        }, {"../../../utils": 151, "./buildLine": 93, earcut: 15}],
        97: [function (t, e, i) {
            var r = e.exports = Object.assign(t("./const"), t("./math"), {
                utils: t("./utils"),
                ticker: t("./ticker"),
                DisplayObject: t("./display/DisplayObject"),
                Container: t("./display/Container"),
                Transform: t("./display/Transform"),
                TransformStatic: t("./display/TransformStatic"),
                TransformBase: t("./display/TransformBase"),
                Sprite: t("./sprites/Sprite"),
                CanvasSpriteRenderer: t("./sprites/canvas/CanvasSpriteRenderer"),
                CanvasTinter: t("./sprites/canvas/CanvasTinter"),
                SpriteRenderer: t("./sprites/webgl/SpriteRenderer"),
                Text: t("./text/Text"),
                TextStyle: t("./text/TextStyle"),
                Graphics: t("./graphics/Graphics"),
                GraphicsData: t("./graphics/GraphicsData"),
                GraphicsRenderer: t("./graphics/webgl/GraphicsRenderer"),
                CanvasGraphicsRenderer: t("./graphics/canvas/CanvasGraphicsRenderer"),
                Texture: t("./textures/Texture"),
                BaseTexture: t("./textures/BaseTexture"),
                RenderTexture: t("./textures/RenderTexture"),
                BaseRenderTexture: t("./textures/BaseRenderTexture"),
                VideoBaseTexture: t("./textures/VideoBaseTexture"),
                TextureUvs: t("./textures/TextureUvs"),
                CanvasRenderer: t("./renderers/canvas/CanvasRenderer"),
                CanvasRenderTarget: t("./renderers/canvas/utils/CanvasRenderTarget"),
                Shader: t("./Shader"),
                WebGLRenderer: t("./renderers/webgl/WebGLRenderer"),
                WebGLManager: t("./renderers/webgl/managers/WebGLManager"),
                ObjectRenderer: t("./renderers/webgl/utils/ObjectRenderer"),
                RenderTarget: t("./renderers/webgl/utils/RenderTarget"),
                Quad: t("./renderers/webgl/utils/Quad"),
                SpriteMaskFilter: t("./renderers/webgl/filters/spriteMask/SpriteMaskFilter"),
                Filter: t("./renderers/webgl/filters/Filter"),
                glCore: t("pixi-gl-core"),
                autoDetectRenderer: function (t, e, i, s) {
                    return t = t || 800, e = e || 600, !s && r.utils.isWebGLSupported() ? new r.WebGLRenderer(t, e, i) : new r.CanvasRenderer(t, e, i)
                }
            })
        }, {
            "./Shader": 77,
            "./const": 78,
            "./display/Container": 80,
            "./display/DisplayObject": 81,
            "./display/Transform": 82,
            "./display/TransformBase": 83,
            "./display/TransformStatic": 84,
            "./graphics/Graphics": 85,
            "./graphics/GraphicsData": 86,
            "./graphics/canvas/CanvasGraphicsRenderer": 87,
            "./graphics/webgl/GraphicsRenderer": 89,
            "./math": 102,
            "./renderers/canvas/CanvasRenderer": 109,
            "./renderers/canvas/utils/CanvasRenderTarget": 111,
            "./renderers/webgl/WebGLRenderer": 116,
            "./renderers/webgl/filters/Filter": 118,
            "./renderers/webgl/filters/spriteMask/SpriteMaskFilter": 121,
            "./renderers/webgl/managers/WebGLManager": 125,
            "./renderers/webgl/utils/ObjectRenderer": 126,
            "./renderers/webgl/utils/Quad": 127,
            "./renderers/webgl/utils/RenderTarget": 128,
            "./sprites/Sprite": 133,
            "./sprites/canvas/CanvasSpriteRenderer": 134,
            "./sprites/canvas/CanvasTinter": 135,
            "./sprites/webgl/SpriteRenderer": 137,
            "./text/Text": 139,
            "./text/TextStyle": 140,
            "./textures/BaseRenderTexture": 141,
            "./textures/BaseTexture": 142,
            "./textures/RenderTexture": 143,
            "./textures/Texture": 144,
            "./textures/TextureUvs": 145,
            "./textures/VideoBaseTexture": 146,
            "./ticker": 148,
            "./utils": 151,
            "pixi-gl-core": 51
        }],
        98: [function (t, e, i) {
            function r(t) {
                return t < 0 ? -1 : t > 0 ? 1 : 0
            }

            function s() {
                for (var t = 0; t < 16; t++) {
                    var e = [];
                    u.push(e);
                    for (var i = 0; i < 16; i++)for (var s = r(n[t] * n[i] + a[t] * o[i]), d = r(o[t] * n[i] + h[t] * o[i]), p = r(n[t] * a[i] + a[t] * h[i]), f = r(o[t] * a[i] + h[t] * h[i]), g = 0; g < 16; g++)if (n[g] === s && o[g] === d && a[g] === p && h[g] === f) {
                        e.push(g);
                        break
                    }
                }
                for (t = 0; t < 16; t++) {
                    var m = new c;
                    m.set(n[t], o[t], a[t], h[t], 0, 0), l.push(m)
                }
            }

            var n = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1], o = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1], a = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1], h = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], l = [], c = t("./Matrix"), u = [];
            s();
            var d = {
                E: 0,
                SE: 1,
                S: 2,
                SW: 3,
                W: 4,
                NW: 5,
                N: 6,
                NE: 7,
                MIRROR_VERTICAL: 8,
                MIRROR_HORIZONTAL: 12,
                uX: function (t) {
                    return n[t]
                },
                uY: function (t) {
                    return o[t]
                },
                vX: function (t) {
                    return a[t]
                },
                vY: function (t) {
                    return h[t]
                },
                inv: function (t) {
                    return 8 & t ? 15 & t : 7 & -t
                },
                add: function (t, e) {
                    return u[t][e]
                },
                sub: function (t, e) {
                    return u[t][d.inv(e)]
                },
                rotate180: function (t) {
                    return 4 ^ t
                },
                isSwapWidthHeight: function (t) {
                    return 2 === (3 & t)
                },
                byDirection: function (t, e) {
                    return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? d.S : d.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? d.E : d.W : e > 0 ? t > 0 ? d.SE : d.SW : t > 0 ? d.NE : d.NW
                },
                matrixAppendRotationInv: function (t, e, i, r) {
                    var s = l[d.inv(e)];
                    i = i || 0, r = r || 0, s.tx = i, s.ty = r, t.append(s)
                }
            };
            e.exports = d
        }, {"./Matrix": 99}],
        99: [function (t, e, i) {
            function r() {
                this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this.array = null
            }

            var s = t("./Point");
            r.prototype.constructor = r, e.exports = r, r.prototype.fromArray = function (t) {
                this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
            }, r.prototype.set = function (t, e, i, r, s, n) {
                return this.a = t, this.b = e, this.c = i, this.d = r, this.tx = s, this.ty = n, this
            }, r.prototype.toArray = function (t, e) {
                this.array || (this.array = new Float32Array(9));
                var i = e || this.array;
                return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i
            }, r.prototype.apply = function (t, e) {
                e = e || new s;
                var i = t.x, r = t.y;
                return e.x = this.a * i + this.c * r + this.tx, e.y = this.b * i + this.d * r + this.ty, e
            }, r.prototype.applyInverse = function (t, e) {
                e = e || new s;
                var i = 1 / (this.a * this.d + this.c * -this.b), r = t.x, n = t.y;
                return e.x = this.d * i * r + -this.c * i * n + (this.ty * this.c - this.tx * this.d) * i, e.y = this.a * i * n + -this.b * i * r + (-this.ty * this.a + this.tx * this.b) * i, e
            }, r.prototype.translate = function (t, e) {
                return this.tx += t, this.ty += e, this
            }, r.prototype.scale = function (t, e) {
                return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
            }, r.prototype.rotate = function (t) {
                var e = Math.cos(t), i = Math.sin(t), r = this.a, s = this.c, n = this.tx;
                return this.a = r * e - this.b * i, this.b = r * i + this.b * e, this.c = s * e - this.d * i, this.d = s * i + this.d * e, this.tx = n * e - this.ty * i, this.ty = n * i + this.ty * e, this
            }, r.prototype.append = function (t) {
                var e = this.a, i = this.b, r = this.c, s = this.d;
                return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * s, this.c = t.c * e + t.d * r, this.d = t.c * i + t.d * s, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * s + this.ty, this
            }, r.prototype.setTransform = function (t, e, i, r, s, n, o, a, h) {
                var l, c, u, d, p, f, g, m, v, _;
                return p = Math.sin(o), f = Math.cos(o), g = Math.cos(h), m = Math.sin(h), v = -Math.sin(a), _ = Math.cos(a), l = f * s, c = p * s, u = -p * n, d = f * n, this.a = g * l + m * u, this.b = g * c + m * d, this.c = v * l + _ * u, this.d = v * c + _ * d, this.tx = t + (i * l + r * u), this.ty = e + (i * c + r * d), this
            }, r.prototype.prepend = function (t) {
                var e = this.tx;
                if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                    var i = this.a, r = this.c;
                    this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d
                }
                return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
            }, r.prototype.decompose = function (t) {
                var e = this.a, i = this.b, r = this.c, s = this.d, n = Math.atan2(-r, s), o = Math.atan2(i, e), a = Math.abs(1 - n / o);
                return a < 1e-5 ? (t.rotation = o, e < 0 && s >= 0 && (t.rotation += t.rotation <= 0 ? Math.PI : -Math.PI), t.skew.x = t.skew.y = 0) : (t.skew.x = n, t.skew.y = o), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(r * r + s * s), t.position.x = this.tx, t.position.y = this.ty, t
            }, r.prototype.invert = function () {
                var t = this.a, e = this.b, i = this.c, r = this.d, s = this.tx, n = t * r - e * i;
                return this.a = r / n, this.b = -e / n, this.c = -i / n, this.d = t / n, this.tx = (i * this.ty - r * s) / n, this.ty = -(t * this.ty - e * s) / n, this
            }, r.prototype.identity = function () {
                return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
            }, r.prototype.clone = function () {
                var t = new r;
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
            }, r.prototype.copy = function (t) {
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
            }, r.IDENTITY = new r, r.TEMP_MATRIX = new r
        }, {"./Point": 101}],
        100: [function (t, e, i) {
            function r(t, e, i, r) {
                this._x = i || 0, this._y = r || 0, this.cb = t, this.scope = e
            }

            r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                x: {
                    get: function () {
                        return this._x
                    }, set: function (t) {
                        this._x !== t && (this._x = t, this.cb.call(this.scope))
                    }
                }, y: {
                    get: function () {
                        return this._y
                    }, set: function (t) {
                        this._y !== t && (this._y = t, this.cb.call(this.scope))
                    }
                }
            }), r.prototype.set = function (t, e) {
                var i = t || 0, r = e || (0 !== e ? i : 0);
                this._x === i && this._y === r || (this._x = i, this._y = r, this.cb.call(this.scope))
            }, r.prototype.copy = function (t) {
                this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope))
            }
        }, {}],
        101: [function (t, e, i) {
            function r(t, e) {
                this.x = t || 0, this.y = e || 0
            }

            r.prototype.constructor = r, e.exports = r, r.prototype.clone = function () {
                return new r(this.x, this.y)
            }, r.prototype.copy = function (t) {
                this.set(t.x, t.y)
            }, r.prototype.equals = function (t) {
                return t.x === this.x && t.y === this.y
            }, r.prototype.set = function (t, e) {
                this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
            }
        }, {}],
        102: [function (t, e, i) {
            e.exports = {
                Point: t("./Point"),
                ObservablePoint: t("./ObservablePoint"),
                Matrix: t("./Matrix"),
                GroupD8: t("./GroupD8"),
                Circle: t("./shapes/Circle"),
                Ellipse: t("./shapes/Ellipse"),
                Polygon: t("./shapes/Polygon"),
                Rectangle: t("./shapes/Rectangle"),
                RoundedRectangle: t("./shapes/RoundedRectangle")
            }
        }, {
            "./GroupD8": 98,
            "./Matrix": 99,
            "./ObservablePoint": 100,
            "./Point": 101,
            "./shapes/Circle": 103,
            "./shapes/Ellipse": 104,
            "./shapes/Polygon": 105,
            "./shapes/Rectangle": 106,
            "./shapes/RoundedRectangle": 107
        }],
        103: [function (t, e, i) {
            function r(t, e, i) {
                this.x = t || 0, this.y = e || 0, this.radius = i || 0, this.type = n.SHAPES.CIRC
            }

            var s = t("./Rectangle"), n = t("../../const");
            r.prototype.constructor = r, e.exports = r, r.prototype.clone = function () {
                return new r(this.x, this.y, this.radius)
            }, r.prototype.contains = function (t, e) {
                if (this.radius <= 0)return !1;
                var i = this.x - t, r = this.y - e, s = this.radius * this.radius;
                return i *= i, r *= r, i + r <= s
            }, r.prototype.getBounds = function () {
                return new s(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
            }
        }, {"../../const": 78, "./Rectangle": 106}],
        104: [function (t, e, i) {
            function r(t, e, i, r) {
                this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0, this.type = n.SHAPES.ELIP
            }

            var s = t("./Rectangle"), n = t("../../const");
            r.prototype.constructor = r, e.exports = r, r.prototype.clone = function () {
                return new r(this.x, this.y, this.width, this.height)
            }, r.prototype.contains = function (t, e) {
                if (this.width <= 0 || this.height <= 0)return !1;
                var i = (t - this.x) / this.width, r = (e - this.y) / this.height;
                return i *= i, r *= r, i + r <= 1
            }, r.prototype.getBounds = function () {
                return new s(this.x - this.width, this.y - this.height, this.width, this.height)
            }
        }, {"../../const": 78, "./Rectangle": 106}],
        105: [function (t, e, i) {
            function r(t) {
                var e = t;
                if (!Array.isArray(e)) {
                    e = new Array(arguments.length);
                    for (var i = 0; i < e.length; ++i)e[i] = arguments[i]
                }
                if (e[0] instanceof s) {
                    for (var r = [], o = 0, a = e.length; o < a; o++)r.push(e[o].x, e[o].y);
                    e = r
                }
                this.closed = !0, this.points = e, this.type = n.SHAPES.POLY
            }

            var s = t("../Point"), n = t("../../const");
            r.prototype.constructor = r, e.exports = r, r.prototype.clone = function () {
                return new r(this.points.slice())
            }, r.prototype.close = function () {
                var t = this.points;
                t[0] === t[t.length - 2] && t[1] === t[t.length - 1] || t.push(t[0], t[1])
            }, r.prototype.contains = function (t, e) {
                for (var i = !1, r = this.points.length / 2, s = 0, n = r - 1; s < r; n = s++) {
                    var o = this.points[2 * s], a = this.points[2 * s + 1], h = this.points[2 * n], l = this.points[2 * n + 1], c = a > e != l > e && t < (h - o) * (e - a) / (l - a) + o;
                    c && (i = !i)
                }
                return i
            }
        }, {"../../const": 78, "../Point": 101}],
        106: [function (t, e, i) {
            function r(t, e, i, r) {
                this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0, this.type = s.SHAPES.RECT
            }

            var s = t("../../const");
            r.prototype.constructor = r, e.exports = r, r.EMPTY = new r(0, 0, 0, 0), r.prototype.clone = function () {
                return new r(this.x, this.y, this.width, this.height)
            }, r.prototype.copy = function (t) {
                return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
            }, r.prototype.contains = function (t, e) {
                return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height)
            }, r.prototype.pad = function (t, e) {
                t = t || 0, e = e || (0 !== e ? t : 0), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
            }, r.prototype.fit = function (t) {
                this.x < t.x && (this.width += this.x, this.width < 0 && (this.width = 0), this.x = t.x), this.y < t.y && (this.height += this.y, this.height < 0 && (this.height = 0), this.y = t.y), this.x + this.width > t.x + t.width && (this.width = t.width - this.x, this.width < 0 && (this.width = 0)), this.y + this.height > t.y + t.height && (this.height = t.height - this.y, this.height < 0 && (this.height = 0))
            }, r.prototype.enlarge = function (t) {
                if (t !== r.EMPTY) {
                    var e = Math.min(this.x, t.x), i = Math.max(this.x + this.width, t.x + t.width), s = Math.min(this.y, t.y), n = Math.max(this.y + this.height, t.y + t.height);
                    this.x = e, this.width = i - e, this.y = s, this.height = n - s
                }
            }
        }, {"../../const": 78}],
        107: [function (t, e, i) {
            function r(t, e, i, r, n) {
                this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0, this.radius = n || 20, this.type = s.SHAPES.RREC
            }

            var s = t("../../const");
            r.prototype.constructor = r, e.exports = r, r.prototype.clone = function () {
                return new r(this.x, this.y, this.width, this.height, this.radius)
            }, r.prototype.contains = function (t, e) {
                return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height)
            }
        }, {"../../const": 78}],
        108: [function (t, e, i) {
            function r(t, e, i, r) {
                if (l.call(this), s.sayHello(t), r)for (var n in o.DEFAULT_RENDER_OPTIONS)"undefined" == typeof r[n] && (r[n] = o.DEFAULT_RENDER_OPTIONS[n]); else r = o.DEFAULT_RENDER_OPTIONS;
                this.type = o.RENDERER_TYPE.UNKNOWN, this.width = e || 800, this.height = i || 600, this.view = r.view || document.createElement("canvas"), this.resolution = r.resolution, this.transparent = r.transparent, this.autoResize = r.autoResize || !1, this.blendModes = null, this.preserveDrawingBuffer = r.preserveDrawingBuffer, this.clearBeforeRender = r.clearBeforeRender, this.roundPixels = r.roundPixels, this._backgroundColor = 0, this._backgroundColorRgba = [0, 0, 0, 0], this._backgroundColorString = "#000000", this.backgroundColor = r.backgroundColor || this._backgroundColor, this._tempDisplayObjectParent = new a, this._lastObjectRendered = this._tempDisplayObjectParent
            }

            var s = t("../utils"), n = t("../math"), o = t("../const"), a = t("../display/Container"), h = t("../textures/RenderTexture"), l = t("eventemitter3"), c = new n.Matrix;
            r.prototype = Object.create(l.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                backgroundColor: {
                    get: function () {
                        return this._backgroundColor
                    }, set: function (t) {
                        this._backgroundColor = t, this._backgroundColorString = s.hex2string(t), s.hex2rgb(t, this._backgroundColorRgba)
                    }
                }
            }), r.prototype.resize = function (t, e) {
                this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px")
            }, r.prototype.generateTexture = function (t, e, i) {
                var r = t.getLocalBounds(), s = h.create(0 | r.width, 0 | r.height, e, i);
                return c.tx = -r.x, c.ty = -r.y, this.render(t, s, !1, c, !0), s
            }, r.prototype.destroy = function (t) {
                t && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.type = o.RENDERER_TYPE.UNKNOWN, this.width = 0, this.height = 0, this.view = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this.roundPixels = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this.backgroundColor = 0, this._tempDisplayObjectParent = null, this._lastObjectRendered = null
            }
        }, {
            "../const": 78,
            "../display/Container": 80,
            "../math": 102,
            "../textures/RenderTexture": 143,
            "../utils": 151,
            eventemitter3: 16
        }],
        109: [function (t, e, i) {
            function r(t, e, i) {
                i = i || {}, s.call(this, "Canvas", t, e, i), this.type = l.RENDERER_TYPE.CANVAS, this.rootContext = this.view.getContext("2d", {alpha: this.transparent}), this.rootResolution = this.resolution, this.refresh = !0, this.maskManager = new n(this), this.smoothProperty = "imageSmoothingEnabled", this.rootContext.imageSmoothingEnabled || (this.rootContext.webkitImageSmoothingEnabled ? this.smoothProperty = "webkitImageSmoothingEnabled" : this.rootContext.mozImageSmoothingEnabled ? this.smoothProperty = "mozImageSmoothingEnabled" : this.rootContext.oImageSmoothingEnabled ? this.smoothProperty = "oImageSmoothingEnabled" : this.rootContext.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled")), this.initPlugins(), this.blendModes = a(), this._activeBlendMode = null, this.context = null, this.renderingToScreen = !1, this.resize(t, e)
            }

            var s = t("../SystemRenderer"), n = t("./utils/CanvasMaskManager"), o = t("./utils/CanvasRenderTarget"), a = t("./utils/mapCanvasBlendModesToPixi"), h = t("../../utils"), l = t("../../const");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, h.pluginTarget.mixin(r), r.prototype.render = function (t, e, i, r, s) {
                if (this.view) {
                    this.renderingToScreen = !e, this.emit("prerender"), e ? (e = e.baseTexture || e, e._canvasRenderTarget || (e._canvasRenderTarget = new o(e.width, e.height, e.resolution), e.source = e._canvasRenderTarget.canvas, e.valid = !0), this.context = e._canvasRenderTarget.context, this.resolution = e._canvasRenderTarget.resolution) : (this.context = this.rootContext, this.resolution = this.rootResolution);
                    var n = this.context;
                    if (e || (this._lastObjectRendered = t), !s) {
                        var a = t.parent, h = this._tempDisplayObjectParent.transform.worldTransform;
                        r ? r.copy(h) : h.identity(), t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = a
                    }
                    n.setTransform(1, 0, 0, 1, 0, 0), n.globalAlpha = 1, n.globalCompositeOperation = this.blendModes[l.BLEND_MODES.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (n.fillStyle = "black", n.clear()), (void 0 !== i ? i : this.clearBeforeRender) && this.renderingToScreen && (this.transparent ? n.clearRect(0, 0, this.width, this.height) : (n.fillStyle = this._backgroundColorString, n.fillRect(0, 0, this.width, this.height)));
                    var c = this.context;
                    this.context = n, t.renderCanvas(this), this.context = c, this.emit("postrender")
                }
            }, r.prototype.setBlendMode = function (t) {
                this._activeBlendMode !== t && (this.context.globalCompositeOperation = this.blendModes[t])
            }, r.prototype.destroy = function (t) {
                this.destroyPlugins(), s.prototype.destroy.call(this, t), this.context = null, this.refresh = !0, this.maskManager.destroy(), this.maskManager = null, this.smoothProperty = null
            }, r.prototype.resize = function (t, e) {
                s.prototype.resize.call(this, t, e), this.smoothProperty && (this.rootContext[this.smoothProperty] = l.SCALE_MODES.DEFAULT === l.SCALE_MODES.LINEAR)
            }
        }, {
            "../../const": 78,
            "../../utils": 151,
            "../SystemRenderer": 108,
            "./utils/CanvasMaskManager": 110,
            "./utils/CanvasRenderTarget": 111,
            "./utils/mapCanvasBlendModesToPixi": 113
        }],
        110: [function (t, e, i) {
            function r(t) {
                this.renderer = t
            }

            var s = t("../../../const");
            r.prototype.constructor = r, e.exports = r, r.prototype.pushMask = function (t) {
                var e = this.renderer;
                e.context.save();
                var i = t.alpha, r = t.transform.worldTransform, s = e.resolution;
                e.context.setTransform(r.a * s, r.b * s, r.c * s, r.d * s, r.tx * s, r.ty * s), t._texture || (this.renderGraphicsShape(t), e.context.clip()), t.worldAlpha = i
            }, r.prototype.renderGraphicsShape = function (t) {
                var e = this.renderer.context, i = t.graphicsData.length;
                if (0 !== i) {
                    e.beginPath();
                    for (var r = 0; r < i; r++) {
                        var n = t.graphicsData[r], o = n.shape;
                        if (n.type === s.SHAPES.POLY) {
                            var a = o.points;
                            e.moveTo(a[0], a[1]);
                            for (var h = 1; h < a.length / 2; h++)e.lineTo(a[2 * h], a[2 * h + 1]);
                            a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && e.closePath()
                        } else if (n.type === s.SHAPES.RECT)e.rect(o.x, o.y, o.width, o.height), e.closePath(); else if (n.type === s.SHAPES.CIRC)e.arc(o.x, o.y, o.radius, 0, 2 * Math.PI), e.closePath(); else if (n.type === s.SHAPES.ELIP) {
                            var l = 2 * o.width, c = 2 * o.height, u = o.x - l / 2, d = o.y - c / 2, p = .5522848, f = l / 2 * p, g = c / 2 * p, m = u + l, v = d + c, _ = u + l / 2, y = d + c / 2;
                            e.moveTo(u, y), e.bezierCurveTo(u, y - g, _ - f, d, _, d), e.bezierCurveTo(_ + f, d, m, y - g, m, y), e.bezierCurveTo(m, y + g, _ + f, v, _, v), e.bezierCurveTo(_ - f, v, u, y + g, u, y), e.closePath()
                        } else if (n.type === s.SHAPES.RREC) {
                            var x = o.x, b = o.y, w = o.width, T = o.height, L = o.radius, S = Math.min(w, T) / 2 | 0;
                            L = L > S ? S : L, e.moveTo(x, b + L), e.lineTo(x, b + T - L), e.quadraticCurveTo(x, b + T, x + L, b + T), e.lineTo(x + w - L, b + T), e.quadraticCurveTo(x + w, b + T, x + w, b + T - L), e.lineTo(x + w, b + L), e.quadraticCurveTo(x + w, b, x + w - L, b), e.lineTo(x + L, b), e.quadraticCurveTo(x, b, x, b + L), e.closePath()
                        }
                    }
                }
            }, r.prototype.popMask = function (t) {
                t.context.restore()
            }, r.prototype.destroy = function () {
            }
        }, {"../../../const": 78}],
        111: [function (t, e, i) {
            function r(t, e, i) {
                this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = i || s.RESOLUTION, this.resize(t, e)
            }

            var s = t("../../../const");
            r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                width: {
                    get: function () {
                        return this.canvas.width
                    }, set: function (t) {
                        this.canvas.width = t
                    }
                }, height: {
                    get: function () {
                        return this.canvas.height
                    }, set: function (t) {
                        this.canvas.height = t
                    }
                }
            }), r.prototype.clear = function () {
                this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            }, r.prototype.resize = function (t, e) {
                this.canvas.width = t * this.resolution, this.canvas.height = e * this.resolution
            }, r.prototype.destroy = function () {
                this.context = null, this.canvas = null
            }
        }, {"../../../const": 78}],
        112: [function (t, e, i) {
            var r = function (t) {
                var e = document.createElement("canvas");
                e.width = 6, e.height = 1;
                var i = e.getContext("2d");
                return i.fillStyle = t, i.fillRect(0, 0, 6, 1), e
            }, s = function () {
                if ("undefined" == typeof document)return !1;
                var t = r("#ff00ff"), e = r("#ffff00"), i = document.createElement("canvas");
                i.width = 6, i.height = 1;
                var s = i.getContext("2d");
                s.globalCompositeOperation = "multiply", s.drawImage(t, 0, 0), s.drawImage(e, 2, 0);
                var n = s.getImageData(2, 0, 1, 1);
                if (!n)return !1;
                var o = n.data;
                return 255 === o[0] && 0 === o[1] && 0 === o[2]
            };
            e.exports = s
        }, {}],
        113: [function (t, e, i) {
            function r(t) {
                return t = t || [], n() ? (t[s.BLEND_MODES.NORMAL] = "source-over", t[s.BLEND_MODES.ADD] = "lighter", t[s.BLEND_MODES.MULTIPLY] = "multiply", t[s.BLEND_MODES.SCREEN] = "screen", t[s.BLEND_MODES.OVERLAY] = "overlay", t[s.BLEND_MODES.DARKEN] = "darken", t[s.BLEND_MODES.LIGHTEN] = "lighten", t[s.BLEND_MODES.COLOR_DODGE] = "color-dodge", t[s.BLEND_MODES.COLOR_BURN] = "color-burn", t[s.BLEND_MODES.HARD_LIGHT] = "hard-light", t[s.BLEND_MODES.SOFT_LIGHT] = "soft-light", t[s.BLEND_MODES.DIFFERENCE] = "difference", t[s.BLEND_MODES.EXCLUSION] = "exclusion", t[s.BLEND_MODES.HUE] = "hue", t[s.BLEND_MODES.SATURATION] = "saturate", t[s.BLEND_MODES.COLOR] = "color", t[s.BLEND_MODES.LUMINOSITY] = "luminosity") : (t[s.BLEND_MODES.NORMAL] = "source-over", t[s.BLEND_MODES.ADD] = "lighter", t[s.BLEND_MODES.MULTIPLY] = "source-over", t[s.BLEND_MODES.SCREEN] = "source-over", t[s.BLEND_MODES.OVERLAY] = "source-over", t[s.BLEND_MODES.DARKEN] = "source-over", t[s.BLEND_MODES.LIGHTEN] = "source-over", t[s.BLEND_MODES.COLOR_DODGE] = "source-over", t[s.BLEND_MODES.COLOR_BURN] = "source-over", t[s.BLEND_MODES.HARD_LIGHT] = "source-over", t[s.BLEND_MODES.SOFT_LIGHT] = "source-over", t[s.BLEND_MODES.DIFFERENCE] = "source-over", t[s.BLEND_MODES.EXCLUSION] = "source-over", t[s.BLEND_MODES.HUE] = "source-over", t[s.BLEND_MODES.SATURATION] = "source-over", t[s.BLEND_MODES.COLOR] = "source-over", t[s.BLEND_MODES.LUMINOSITY] = "source-over"), t
            }

            var s = t("../../../const"), n = t("./canUseNewCanvasBlendModes");
            e.exports = r
        }, {"../../../const": 78, "./canUseNewCanvasBlendModes": 112}],
        114: [function (t, e, i) {
            function r(t) {
                this.renderer = t, this.count = 0, this.checkCount = 0, this.maxIdle = 3600, this.checkCountMax = 600, this.mode = s.GC_MODES.DEFAULT
            }

            var s = t("../../const");
            r.prototype.constructor = r, e.exports = r, r.prototype.update = function () {
                this.count++, this.mode !== s.GC_MODES.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run()))
            }, r.prototype.run = function () {
                var t, e, i = this.renderer.textureManager, r = i._managedTextures, s = !1;
                for (t = 0; t < r.length; t++) {
                    var n = r[t];
                    !n._glRenderTargets && this.count - n.touched > this.maxIdle && (i.destroyTexture(n, !0), r[t] = null, s = !0)
                }
                if (s) {
                    for (e = 0, t = 0; t < r.length; t++)null !== r[t] && (r[e++] = r[t]);
                    r.length = e
                }
            }, r.prototype.unload = function (t) {
                var e = this.renderer.textureManager;
                t._texture && e.destroyTexture(t._texture, !0);
                for (var i = t.children.length - 1; i >= 0; i--)this.unload(t.children[i])
            }
        }, {"../../const": 78}],
        115: [function (t, e, i) {
            var r = t("pixi-gl-core").GLTexture, s = t("../../const"), n = t("./utils/RenderTarget"), o = t("../../utils"), a = function (t) {
                this.renderer = t, this.gl = t.gl, this._managedTextures = []
            };
            a.prototype.bindTexture = function () {
            }, a.prototype.getTexture = function () {
            }, a.prototype.updateTexture = function (t) {
                t = t.baseTexture || t;
                var e = !!t._glRenderTargets;
                if (t.hasLoaded) {
                    var i = t._glTextures[this.renderer.CONTEXT_UID];
                    if (i)e ? t._glRenderTargets[this.renderer.CONTEXT_UID].resize(t.width, t.height) : i.upload(t.source); else {
                        if (e) {
                            var o = new n(this.gl, t.width, t.height, t.scaleMode, t.resolution);
                            o.resize(t.width, t.height), t._glRenderTargets[this.renderer.CONTEXT_UID] = o, i = o.texture
                        } else i = new r(this.gl), i.premultiplyAlpha = !0, i.upload(t.source);
                        t._glTextures[this.renderer.CONTEXT_UID] = i, t.on("update", this.updateTexture, this), t.on("dispose", this.destroyTexture, this), this._managedTextures.push(t), t.isPowerOfTwo ? (t.mipmap && i.enableMipmap(), t.wrapMode === s.WRAP_MODES.CLAMP ? i.enableWrapClamp() : t.wrapMode === s.WRAP_MODES.REPEAT ? i.enableWrapRepeat() : i.enableWrapMirrorRepeat()) : i.enableWrapClamp(), t.scaleMode === s.SCALE_MODES.NEAREST ? i.enableNearestScaling() : i.enableLinearScaling()
                    }
                    return i
                }
            }, a.prototype.destroyTexture = function (t, e) {
                if (t = t.baseTexture || t, t.hasLoaded && t._glTextures[this.renderer.CONTEXT_UID] && (t._glTextures[this.renderer.CONTEXT_UID].destroy(), t.off("update", this.updateTexture, this), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.renderer.CONTEXT_UID], !e)) {
                    var i = this._managedTextures.indexOf(t);
                    i !== -1 && o.removeItems(this._managedTextures, i, 1)
                }
            }, a.prototype.removeAll = function () {
                for (var t = 0; t < this._managedTextures.length; ++t) {
                    var e = this._managedTextures[t];
                    e._glTextures[this.renderer.CONTEXT_UID] && delete e._glTextures[this.renderer.CONTEXT_UID]
                }
            }, a.prototype.destroy = function () {
                for (var t = 0; t < this._managedTextures.length; ++t) {
                    var e = this._managedTextures[t];
                    this.destroyTexture(e, !0), e.off("update", this.updateTexture, this), e.off("dispose", this.destroyTexture, this)
                }
                this._managedTextures = null
            }, e.exports = a
        }, {"../../const": 78, "../../utils": 151, "./utils/RenderTarget": 128, "pixi-gl-core": 51}],
        116: [function (t, e, i) {
            function r(t, e, i) {
                i = i || {}, s.call(this, "WebGL", t, e, i), this.type = _.RENDERER_TYPE.WEBGL, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.handleContextLost, !1), this.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1), this._contextOptions = {
                    alpha: this.transparent,
                    antialias: i.antialias,
                    premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                    stencil: !0,
                    preserveDrawingBuffer: i.preserveDrawingBuffer
                }, this._backgroundColorRgba[3] = this.transparent ? 0 : 1, this.maskManager = new n(this), this.stencilManager = new o(this), this.emptyRenderer = new l(this), this.currentRenderer = this.emptyRenderer, this.initPlugins(), i.context && g(i.context), this.gl = i.context || p(this.view, this._contextOptions), this.CONTEXT_UID = y++, this.state = new d(this.gl), this.renderingToScreen = !0, this._initContext(), this.filterManager = new a(this), this.drawModes = f(this.gl), this._activeShader = null, this._activeRenderTarget = null, this._activeTextureLocation = 999, this._activeTexture = null, this.setBlendMode(0)
            }

            var s = t("../SystemRenderer"), n = t("./managers/MaskManager"), o = t("./managers/StencilManager"), a = t("./managers/FilterManager"), h = t("./utils/RenderTarget"), l = t("./utils/ObjectRenderer"), c = t("./TextureManager"), u = t("./TextureGarbageCollector"), d = t("./WebGLState"), p = t("pixi-gl-core").createContext, f = t("./utils/mapWebGLDrawModesToPixi"), g = t("./utils/validateContext"), m = t("../../utils"), v = t("pixi-gl-core"), _ = t("../../const"), y = 0;
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, m.pluginTarget.mixin(r), r.prototype._initContext = function () {
                var t = this.gl;
                this.textureManager = new c(this), this.textureGC = new u(this), this.state.resetToDefault(), this.rootRenderTarget = new h(t, this.width, this.height, null, this.resolution, (!0)), this.rootRenderTarget.clearColor = this._backgroundColorRgba, this.bindRenderTarget(this.rootRenderTarget), this.emit("context", t), this.resize(this.width, this.height)
            }, r.prototype.render = function (t, e, i, r, s) {
                if (this.renderingToScreen = !e, this.emit("prerender"), this.gl && !this.gl.isContextLost()) {
                    if (e || (this._lastObjectRendered = t), !s) {
                        var n = t.parent;
                        t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = n
                    }
                    this.bindRenderTexture(e, r), this.currentRenderer.start(), (void 0 !== i ? i : this.clearBeforeRender) && this._activeRenderTarget.clear(), t.renderWebGL(this), this.currentRenderer.flush(), this.textureGC.update(), this.emit("postrender")
                }
            }, r.prototype.setObjectRenderer = function (t) {
                this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
            }, r.prototype.flush = function () {
                this.setObjectRenderer(this.emptyRenderer)
            }, r.prototype.resize = function (t, e) {
                s.prototype.resize.call(this, t, e), this.rootRenderTarget.resize(t, e), this._activeRenderTarget === this.rootRenderTarget && (this.rootRenderTarget.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(!0)))
            }, r.prototype.setBlendMode = function (t) {
                this.state.setBlendMode(t)
            }, r.prototype.clear = function (t) {
                this._activeRenderTarget.clear(t)
            }, r.prototype.setTransform = function (t) {
                this._activeRenderTarget.transform = t
            }, r.prototype.bindRenderTexture = function (t, e) {
                var i;
                if (t) {
                    var r = t.baseTexture, s = this.gl;
                    r._glRenderTargets[this.CONTEXT_UID] ? (this._activeTextureLocation = r._id, s.activeTexture(s.TEXTURE0 + r._id), s.bindTexture(s.TEXTURE_2D, null)) : (this.textureManager.updateTexture(r), s.bindTexture(s.TEXTURE_2D, null)), i = r._glRenderTargets[this.CONTEXT_UID], i.setFrame(t.frame)
                } else i = this.rootRenderTarget;
                return i.transform = e, this.bindRenderTarget(i), this
            }, r.prototype.bindRenderTarget = function (t) {
                return t !== this._activeRenderTarget && (this._activeRenderTarget = t, t.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = t.projectionMatrix.toArray(!0)), this.stencilManager.setMaskStack(t.stencilMaskStack)), this
            }, r.prototype.bindShader = function (t) {
                return this._activeShader !== t && (this._activeShader = t, t.bind(), t.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(!0)), this
            }, r.prototype.bindTexture = function (t, e) {
                t = t.baseTexture || t;
                var i = this.gl;
                return e = e || 0, this._activeTextureLocation !== e && (this._activeTextureLocation = e, i.activeTexture(i.TEXTURE0 + e)), this._activeTexture = t, t._glTextures[this.CONTEXT_UID] ? (t.touched = this.textureGC.count, t._glTextures[this.CONTEXT_UID].bind()) : this.textureManager.updateTexture(t), this
            }, r.prototype.createVao = function () {
                return new v.VertexArrayObject(this.gl, this.state.attribState)
            }, r.prototype.reset = function () {
                return this.setObjectRenderer(this.emptyRenderer), this._activeShader = null, this._activeRenderTarget = this.rootRenderTarget, this._activeTextureLocation = 999, this._activeTexture = null, this.rootRenderTarget.activate(), this.state.resetToDefault(), this
            }, r.prototype.handleContextLost = function (t) {
                t.preventDefault()
            }, r.prototype.handleContextRestored = function () {
                this._initContext(), this.textureManager.removeAll()
            }, r.prototype.destroy = function (t) {
                this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), this.textureManager.destroy(), s.prototype.destroy.call(this, t), this.uid = 0, this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.maskManager = null, this.filterManager = null, this.textureManager = null, this.currentRenderer = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this.gl.useProgram(null), this.gl.getExtension("WEBGL_lose_context") && this.gl.getExtension("WEBGL_lose_context").loseContext(), this.gl = null
            }
        }, {
            "../../const": 78,
            "../../utils": 151,
            "../SystemRenderer": 108,
            "./TextureGarbageCollector": 114,
            "./TextureManager": 115,
            "./WebGLState": 117,
            "./managers/FilterManager": 122,
            "./managers/MaskManager": 123,
            "./managers/StencilManager": 124,
            "./utils/ObjectRenderer": 126,
            "./utils/RenderTarget": 128,
            "./utils/mapWebGLDrawModesToPixi": 131,
            "./utils/validateContext": 132,
            "pixi-gl-core": 51
        }],
        117: [function (t, e, i) {
            function r(t) {
                this.activeState = new Uint8Array(16), this.defaultState = new Uint8Array(16), this.defaultState[0] = 1, this.stackIndex = 0, this.stack = [], this.gl = t, this.maxAttribs = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.attribState = {
                    tempAttribState: new Array(this.maxAttribs),
                    attribState: new Array(this.maxAttribs)
                }, this.blendModes = s(t), this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")
            }

            var s = t("./utils/mapWebGLBlendModesToPixi");
            r.prototype.push = function () {
                var t = this.stack[++this.stackIndex];
                t || (t = this.stack[this.stackIndex] = new Uint8Array(16));
                for (var e = 0; e < this.activeState.length; e++)this.activeState[e] = t[e]
            };
            var n = 0, o = 1, a = 2, h = 3, l = 4;
            r.prototype.pop = function () {
                var t = this.stack[--this.stackIndex];
                this.setState(t)
            }, r.prototype.setState = function (t) {
                this.setBlend(t[n]), this.setDepthTest(t[o]), this.setFrontFace(t[a]), this.setCullFace(t[h]), this.setBlendMode(t[l])
            }, r.prototype.setBlend = function (t) {
                if (!(this.activeState[n] === t | 0)) {
                    this.activeState[n] = 0 | t;
                    var e = this.gl;
                    t ? e.enable(e.BLEND) : e.disable(e.BLEND)
                }
            }, r.prototype.setBlendMode = function (t) {
                t !== this.activeState[l] && (this.activeState[l] = t, this.gl.blendFunc(this.blendModes[t][0], this.blendModes[t][1]))
            }, r.prototype.setDepthTest = function (t) {
                if (!(this.activeState[o] === t | 0)) {
                    this.activeState[o] = 0 | t;
                    var e = this.gl;
                    t ? e.enable(e.DEPTH_TEST) : e.disable(e.DEPTH_TEST)
                }
            }, r.prototype.setCullFace = function (t) {
                if (!(this.activeState[h] === t | 0)) {
                    this.activeState[h] = 0 | t;
                    var e = this.gl;
                    t ? e.enable(e.CULL_FACE) : e.disable(e.CULL_FACE)
                }
            }, r.prototype.setFrontFace = function (t) {
                if (!(this.activeState[a] === t | 0)) {
                    this.activeState[a] = 0 | t;
                    var e = this.gl;
                    t ? e.frontFace(e.CW) : e.frontFace(e.CCW)
                }
            }, r.prototype.resetAttributes = function () {
                var t;
                for (t = 0; t < this.attribState.tempAttribState.length; t++)this.attribState.tempAttribState[t] = 0;
                for (t = 0; t < this.attribState.attribState.length; t++)this.attribState.attribState[t] = 0;
                var e = this.gl;
                for (t = 1; t < this.maxAttribs; t++)e.disableVertexAttribArray(t)
            }, r.prototype.resetToDefault = function () {
                this.nativeVaoExtension && this.nativeVaoExtension.bindVertexArrayOES(null), this.resetAttributes();
                for (var t = 0; t < this.activeState.length; t++)this.activeState[t] = 32;
                var e = this.gl;
                e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), this.setState(this.defaultState)
            }, e.exports = r
        }, {"./utils/mapWebGLBlendModesToPixi": 130}],
        118: [function (t, e, i) {
            function r(t, e, i) {
                this.vertexSrc = t || r.defaultVertexSrc, this.fragmentSrc = e || r.defaultFragmentSrc, this.blendMode = o.BLEND_MODES.NORMAL, this.uniformData = i || s(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler"), this.uniforms = {};
                for (var h in this.uniformData)this.uniforms[h] = this.uniformData[h].value;
                this.glShaders = [], a[this.vertexSrc + this.fragmentSrc] || (a[this.vertexSrc + this.fragmentSrc] = n.uid()), this.glShaderKey = a[this.vertexSrc + this.fragmentSrc], this.padding = 4, this.resolution = 1, this.enabled = !0
            }

            var s = t("./extractUniformsFromSrc"), n = t("../../../utils"), o = t("../../../const"), a = {};
            e.exports = r, r.prototype.apply = function (t, e, i, r) {
                t.applyFilter(this, e, i, r)
            }, r.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 projectionMatrix;", "uniform mat3 filterMatrix;", "varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;", "   vTextureCoord = aTextureCoord ;", "}"].join("\n"), r.defaultFragmentSrc = ["varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "uniform sampler2D uSampler;", "uniform sampler2D filterSampler;", "void main(void){", "   vec4 masky = texture2D(filterSampler, vFilterCoord);", "   vec4 sample = texture2D(uSampler, vTextureCoord);", "   vec4 color;", "   if(mod(vFilterCoord.x, 1.0) > 0.5)", "   {", "     color = vec4(1.0, 0.0, 0.0, 1.0);", "   }", "   else", "   {", "     color = vec4(0.0, 1.0, 0.0, 1.0);", "   }", "   gl_FragColor = mix(sample, masky, 0.5);", "   gl_FragColor *= sample.a;", "}"].join("\n")
        }, {"../../../const": 78, "../../../utils": 151, "./extractUniformsFromSrc": 119}],
        119: [function (t, e, i) {
            function r(t, e, i) {
                var r = s(t, i), n = s(e, i);
                return Object.assign(r, n)
            }

            function s(t) {
                for (var e, i = new RegExp("^(projectionMatrix|uSampler|filterArea)$"), r = {}, s = t.replace(/\s+/g, " ").split(/\s*;\s*/), o = 0; o < s.length; o++) {
                    var a = s[o].trim();
                    if (a.indexOf("uniform") > -1) {
                        var h = a.split(" "), l = h[1], c = h[2], u = 1;
                        c.indexOf("[") > -1 && (e = c.split(/\[|\]/), c = e[0], u *= Number(e[1])), c.match(i) || (r[c] = {
                            value: n(l, u),
                            name: c,
                            type: l
                        })
                    }
                }
                return r
            }

            var n = t("pixi-gl-core").shader.defaultValue;
            e.exports = r
        }, {"pixi-gl-core": 51}],
        120: [function (t, e, i) {
            var r = t("../../../math"), s = function (t, e, i) {
                var r = t.identity();
                return r.translate(e.x / i.width, e.y / i.height), r.scale(i.width, i.height), r
            }, n = function (t, e, i) {
                var r = t.identity();
                r.translate(e.x / i.width, e.y / i.height);
                var s = i.width / e.width, n = i.height / e.height;
                return r.scale(s, n), r
            }, o = function (t, e, i, s) {
                var n = s.worldTransform.copy(r.Matrix.TEMP_MATRIX), o = s._texture.baseTexture, a = t.identity(), h = i.height / i.width;
                a.translate(e.x / i.width, e.y / i.height), a.scale(1, h);
                var l = i.width / o.width, c = i.height / o.height;
                return n.tx /= o.width * l, n.ty /= o.width * l, n.invert(), a.prepend(n), a.scale(1, 1 / h), a.scale(l, c), a.translate(s.anchor.x, s.anchor.y), a
            };
            e.exports = {
                calculateScreenSpaceMatrix: s,
                calculateNormalizedScreenSpaceMatrix: n,
                calculateSpriteMatrix: o
            }
        }, {"../../../math": 102}],
        121: [function (t, e, i) {
            function r(t) {
                var e = new n.Matrix;
                s.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "#define GLSLIFY 1\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n"), t.renderable = !1, this.maskSprite = t, this.maskMatrix = e
            }

            var s = t("../Filter"), n = t("../../../../math");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.apply = function (t, e, i) {
                var r = this.maskSprite;
                this.uniforms.mask = r._texture, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, r), this.uniforms.alpha = r.worldAlpha, t.applyFilter(this, e, i)
            }
        }, {"../../../../math": 102, "../Filter": 118}],
        122: [function (t, e, i) {
            function r(t) {
                s.call(this, t), this.gl = this.renderer.gl, this.quad = new o(this.gl, t.state.attribState), this.shaderCache = {}, this.pool = {}, this.filterData = null
            }

            var s = t("./WebGLManager"), n = t("../utils/RenderTarget"), o = t("../utils/Quad"), a = t("../../../math"), h = t("../../../Shader"), l = t("../filters/filterTransforms"), c = t("bit-twiddle"), u = function () {
                this.renderTarget = null, this.sourceFrame = new a.Rectangle, this.destinationFrame = new a.Rectangle, this.filters = [], this.target = null, this.resolution = 1
            };
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.pushFilter = function (t, e) {
                var i = this.renderer, r = this.filterData;
                if (!r) {
                    r = this.renderer._activeRenderTarget.filterStack;
                    var s = new u;
                    s.sourceFrame = s.destinationFrame = this.renderer._activeRenderTarget.size, s.renderTarget = i._activeRenderTarget, this.renderer._activeRenderTarget.filterData = r = {
                        index: 0,
                        stack: [s]
                    }, this.filterData = r
                }
                var n = r.stack[++r.index];
                n || (n = r.stack[r.index] = new u);
                var o = e[0].resolution, a = e[0].padding, h = t.filterArea || t.getBounds(!0), l = n.sourceFrame, c = n.destinationFrame;
                l.x = (h.x * o | 0) / o, l.y = (h.y * o | 0) / o, l.width = (h.width * o | 0) / o, l.height = (h.height * o | 0) / o, r.stack[0].renderTarget.transform || l.fit(r.stack[0].destinationFrame), c.width = l.width, c.height = l.height, l.pad(a);
                var d = this.getPotRenderTarget(i.gl, l.width, l.height, o);
                n.target = t, n.filters = e, n.resolution = o, n.renderTarget = d, d.setFrame(c, l), i.bindRenderTarget(d), i.clear()
            }, r.prototype.popFilter = function () {
                var t = this.filterData, e = t.stack[t.index - 1], i = t.stack[t.index];
                this.quad.map(i.renderTarget.size, i.sourceFrame).upload();
                var r = i.filters;
                if (1 === r.length)r[0].apply(this, i.renderTarget, e.renderTarget, !1), this.freePotRenderTarget(i.renderTarget); else {
                    var s = i.renderTarget, n = this.getPotRenderTarget(this.renderer.gl, i.sourceFrame.width, i.sourceFrame.height, 1);
                    n.setFrame(i.destinationFrame, i.sourceFrame);
                    for (var o = 0; o < r.length - 1; o++) {
                        r[o].apply(this, s, n, !0);
                        var a = s;
                        s = n, n = a
                    }
                    r[o].apply(this, s, e.renderTarget, !1), this.freePotRenderTarget(s), this.freePotRenderTarget(n)
                }
                t.index--, 0 === t.index && (this.filterData = null)
            }, r.prototype.applyFilter = function (t, e, i, r) {
                var s = this.renderer, n = t.glShaders[s.CONTEXT_UID];
                if (n || (t.glShaderKey ? (n = this.shaderCache[t.glShaderKey], n || (n = t.glShaders[s.CONTEXT_UID] = this.shaderCache[t.glShaderKey] = new h(this.gl, t.vertexSrc, t.fragmentSrc))) : n = t.glShaders[s.CONTEXT_UID] = new h(this.gl, t.vertexSrc, t.fragmentSrc), this.quad.initVao(n)), s.bindRenderTarget(i), r) {
                    var o = s.gl;
                    o.disable(o.SCISSOR_TEST), s.clear(), o.enable(o.SCISSOR_TEST)
                }
                i === s.maskManager.scissorRenderTarget && s.maskManager.pushScissorMask(null, s.maskManager.scissorData), s.bindShader(n), this.syncUniforms(n, t), e.texture.bind(0), s._activeTextureLocation = 0, s.state.setBlendMode(t.blendMode), this.quad.draw()
            }, r.prototype.syncUniforms = function (t, e) {
                var i, r = e.uniformData, s = e.uniforms, n = 1;
                if (t.uniforms.data.filterArea) {
                    i = this.filterData.stack[this.filterData.index];
                    var o = t.uniforms.filterArea;
                    o[0] = i.renderTarget.size.width, o[1] = i.renderTarget.size.height, o[2] = i.sourceFrame.x, o[3] = i.sourceFrame.y, t.uniforms.filterArea = o
                }
                if (t.uniforms.data.filterClamp) {
                    i = this.filterData.stack[this.filterData.index];
                    var a = t.uniforms.filterClamp;
                    a[0] = .5 / i.renderTarget.size.width, a[1] = .5 / i.renderTarget.size.height, a[2] = (i.sourceFrame.width - .5) / i.renderTarget.size.width, a[3] = (i.sourceFrame.height - .5) / i.renderTarget.size.height, t.uniforms.filterClamp = a
                }
                var h;
                for (var l in r)if ("sampler2D" === r[l].type) {
                    if (t.uniforms[l] = n, s[l].baseTexture)this.renderer.bindTexture(s[l].baseTexture, n); else {
                        var c = this.renderer.gl;
                        this.renderer._activeTextureLocation = c.TEXTURE0 + n, c.activeTexture(c.TEXTURE0 + n), s[l].texture.bind()
                    }
                    n++
                } else"mat3" === r[l].type ? void 0 !== s[l].a ? t.uniforms[l] = s[l].toArray(!0) : t.uniforms[l] = s[l] : "vec2" === r[l].type ? void 0 !== s[l].x ? (h = t.uniforms[l] || new Float32Array(2), h[0] = s[l].x, h[1] = s[l].y, t.uniforms[l] = h) : t.uniforms[l] = s[l] : "float" === r[l].type ? t.uniforms.data[l].value !== r[l] && (t.uniforms[l] = s[l]) : t.uniforms[l] = s[l]
            }, r.prototype.getRenderTarget = function (t, e) {
                var i = this.filterData.stack[this.filterData.index], r = this.getPotRenderTarget(this.renderer.gl, i.sourceFrame.width, i.sourceFrame.height, e || i.resolution);
                return r.setFrame(i.destinationFrame, i.sourceFrame), r
            }, r.prototype.returnRenderTarget = function (t) {
                return this.freePotRenderTarget(t)
            }, r.prototype.calculateScreenSpaceMatrix = function (t) {
                var e = this.filterData.stack[this.filterData.index];
                return l.calculateScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size)
            }, r.prototype.calculateNormalizedScreenSpaceMatrix = function (t) {
                var e = this.filterData.stack[this.filterData.index];
                return l.calculateNormalizedScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size, e.destinationFrame)
            }, r.prototype.calculateSpriteMatrix = function (t, e) {
                var i = this.filterData.stack[this.filterData.index];
                return l.calculateSpriteMatrix(t, i.sourceFrame, i.renderTarget.size, e)
            }, r.prototype.destroy = function () {
                this.shaderCache = [], this.emptyPool()
            }, r.prototype.getPotRenderTarget = function (t, e, i, r) {
                e = c.nextPow2(e * r), i = c.nextPow2(i * r);
                var s = (65535 & e) << 16 | 65535 & i;
                this.pool[s] || (this.pool[s] = []);
                var o = this.pool[s].pop() || new n(t, e, i, null, 1);
                return o.resolution = r, o.defaultFrame.width = o.size.width = e / r, o.defaultFrame.height = o.size.height = i / r, o
            }, r.prototype.emptyPool = function () {
                for (var t in this.pool) {
                    var e = this.pool[t];
                    if (e)for (var i = 0; i < e.length; i++)e[i].destroy(!0)
                }
                this.pool = {}
            }, r.prototype.freePotRenderTarget = function (t) {
                var e = t.size.width * t.resolution, i = t.size.height * t.resolution, r = (65535 & e) << 16 | 65535 & i;
                this.pool[r].push(t)
            }
        }, {
            "../../../Shader": 77,
            "../../../math": 102,
            "../filters/filterTransforms": 120,
            "../utils/Quad": 127,
            "../utils/RenderTarget": 128,
            "./WebGLManager": 125,
            "bit-twiddle": 14
        }],
        123: [function (t, e, i) {
            function r(t) {
                s.call(this, t), this.scissor = !1, this.scissorData = null, this.scissorRenderTarget = null, this.enableScissor = !0, this.alphaMaskPool = [], this.alphaMaskIndex = 0
            }

            var s = t("./WebGLManager"), n = t("../filters/spriteMask/SpriteMaskFilter");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.pushMask = function (t, e) {
                if (e.texture)this.pushSpriteMask(t, e); else if (this.enableScissor && !this.scissor && !this.renderer.stencilManager.stencilMaskStack.length && e.isFastRect()) {
                    var i = e.worldTransform, r = Math.atan2(i.b, i.a);
                    r = Math.round(r * (180 / Math.PI)), r % 90 ? this.pushStencilMask(e) : this.pushScissorMask(t, e)
                } else this.pushStencilMask(e)
            }, r.prototype.popMask = function (t, e) {
                e.texture ? this.popSpriteMask(t, e) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(t, e) : this.popStencilMask(t, e)
            }, r.prototype.pushSpriteMask = function (t, e) {
                var i = this.alphaMaskPool[this.alphaMaskIndex];
                i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new n(e)]), i[0].resolution = this.renderer.resolution, i[0].maskSprite = e, t.filterArea = e.getBounds(!0), this.renderer.filterManager.pushFilter(t, i), this.alphaMaskIndex++
            }, r.prototype.popSpriteMask = function () {
                this.renderer.filterManager.popFilter(), this.alphaMaskIndex--
            }, r.prototype.pushStencilMask = function (t) {
                this.renderer.currentRenderer.stop(), this.renderer.stencilManager.pushStencil(t)
            }, r.prototype.popStencilMask = function () {
                this.renderer.currentRenderer.stop(), this.renderer.stencilManager.popStencil()
            }, r.prototype.pushScissorMask = function (t, e) {
                e.renderable = !0;
                var i = this.renderer._activeRenderTarget, r = e.getBounds();
                r.fit(i.size), e.renderable = !1, this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
                var s = this.renderer.resolution;
                this.renderer.gl.scissor(r.x * s, (i.root ? i.size.height - r.y - r.height : r.y) * s, r.width * s, r.height * s), this.scissorRenderTarget = i, this.scissorData = e, this.scissor = !0
            }, r.prototype.popScissorMask = function () {
                this.scissorRenderTarget = null, this.scissorData = null, this.scissor = !1;
                var t = this.renderer.gl;
                t.disable(t.SCISSOR_TEST)
            }
        }, {"../filters/spriteMask/SpriteMaskFilter": 121, "./WebGLManager": 125}],
        124: [function (t, e, i) {
            function r(t) {
                s.call(this, t), this.stencilMaskStack = null
            }

            var s = t("./WebGLManager");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.setMaskStack = function (t) {
                this.stencilMaskStack = t;
                var e = this.renderer.gl;
                0 === t.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST)
            }, r.prototype.pushStencil = function (t) {
                this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.renderer._activeRenderTarget.attachStencilBuffer();
                var e = this.renderer.gl, i = this.stencilMaskStack;
                0 === i.length && (e.enable(e.STENCIL_TEST), e.clear(e.STENCIL_BUFFER_BIT), e.stencilFunc(e.ALWAYS, 1, 1)), i.push(t), e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.INCR), this.renderer.plugins.graphics.render(t), e.colorMask(!0, !0, !0, !0), e.stencilFunc(e.NOTEQUAL, 0, i.length), e.stencilOp(e.KEEP, e.KEEP, e.KEEP)
            }, r.prototype.popStencil = function () {
                this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
                var t = this.renderer.gl, e = this.stencilMaskStack, i = e.pop();
                0 === e.length ? t.disable(t.STENCIL_TEST) : (t.colorMask(!1, !1, !1, !1), t.stencilOp(t.KEEP, t.KEEP, t.DECR), this.renderer.plugins.graphics.render(i), t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.NOTEQUAL, 0, e.length), t.stencilOp(t.KEEP, t.KEEP, t.KEEP))
            }, r.prototype.destroy = function () {
                s.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null
            }
        }, {"./WebGLManager": 125}],
        125: [function (t, e, i) {
            function r(t) {
                this.renderer = t, this.renderer.on("context", this.onContextChange, this)
            }

            r.prototype.constructor = r, e.exports = r, r.prototype.onContextChange = function () {
            }, r.prototype.destroy = function () {
                this.renderer.off("context", this.onContextChange, this), this.renderer = null
            }
        }, {}],
        126: [function (t, e, i) {
            function r(t) {
                s.call(this, t)
            }

            var s = t("../managers/WebGLManager");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.start = function () {
            }, r.prototype.stop = function () {
                this.flush()
            }, r.prototype.flush = function () {
            }, r.prototype.render = function (t) {
            }
        }, {"../managers/WebGLManager": 125}],
        127: [function (t, e, i) {
            function r(t, e) {
                this.gl = t, this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.interleaved = new Float32Array(16);
                for (var i = 0; i < 4; i++)this.interleaved[4 * i] = this.vertices[2 * i], this.interleaved[4 * i + 1] = this.vertices[2 * i + 1], this.interleaved[4 * i + 2] = this.uvs[2 * i], this.interleaved[4 * i + 3] = this.uvs[2 * i + 1];
                this.indices = n(1), this.vertexBuffer = s.GLBuffer.createVertexBuffer(t, this.interleaved, t.STATIC_DRAW), this.indexBuffer = s.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW), this.vao = new s.VertexArrayObject(t, e)
            }

            var s = t("pixi-gl-core"), n = t("../../../utils/createIndicesForQuads");
            r.prototype.constructor = r, r.prototype.initVao = function (t) {
                this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, t.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, t.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8)
            }, r.prototype.map = function (t, e) {
                var i = 0, r = 0;
                return this.uvs[0] = i, this.uvs[1] = r, this.uvs[2] = i + e.width / t.width, this.uvs[3] = r, this.uvs[4] = i + e.width / t.width, this.uvs[5] = r + e.height / t.height, this.uvs[6] = i, this.uvs[7] = r + e.height / t.height, i = e.x, r = e.y, this.vertices[0] = i, this.vertices[1] = r, this.vertices[2] = i + e.width, this.vertices[3] = r, this.vertices[4] = i + e.width, this.vertices[5] = r + e.height, this.vertices[6] = i, this.vertices[7] = r + e.height, this
            }, r.prototype.draw = function () {
                return this.vao.bind().draw(this.gl.TRIANGLES, 6, 0).unbind(), this
            }, r.prototype.upload = function () {
                for (var t = 0; t < 4; t++)this.interleaved[4 * t] = this.vertices[2 * t], this.interleaved[4 * t + 1] = this.vertices[2 * t + 1], this.interleaved[4 * t + 2] = this.uvs[2 * t], this.interleaved[4 * t + 3] = this.uvs[2 * t + 1];
                return this.vertexBuffer.upload(this.interleaved), this
            }, r.prototype.destroy = function () {
                var t = this.gl;
                t.deleteBuffer(this.vertexBuffer), t.deleteBuffer(this.indexBuffer)
            }, e.exports = r
        }, {"../../../utils/createIndicesForQuads": 149, "pixi-gl-core": 51}],
        128: [function (t, e, i) {
            var r = t("../../../math"), s = t("../../../const"), n = t("pixi-gl-core").GLFramebuffer, o = function (t, e, i, o, a, h) {
                this.gl = t, this.frameBuffer = null, this.texture = null, this.clearColor = [0, 0, 0, 0], this.size = new r.Rectangle(0, 0, 1, 1), this.resolution = a || s.RESOLUTION, this.projectionMatrix = new r.Matrix, this.transform = null, this.frame = null, this.defaultFrame = new r.Rectangle, this.destinationFrame = null, this.sourceFrame = null, this.stencilBuffer = null, this.stencilMaskStack = [], this.filterData = null, this.scaleMode = o || s.SCALE_MODES.DEFAULT, this.root = h, this.root ? (this.frameBuffer = new n(t, 100, 100), this.frameBuffer.framebuffer = null) : (this.frameBuffer = n.createRGBA(t, 100, 100), this.scaleMode === s.SCALE_MODES.NEAREST ? this.frameBuffer.texture.enableNearestScaling() : this.frameBuffer.texture.enableLinearScaling(), this.texture = this.frameBuffer.texture), this.setFrame(), this.resize(e, i)
            };
            o.prototype.constructor = o, e.exports = o, o.prototype.clear = function (t) {
                var e = t || this.clearColor;
                this.frameBuffer.clear(e[0], e[1], e[2], e[3])
            }, o.prototype.attachStencilBuffer = function () {
                this.root || this.frameBuffer.enableStencil()
            }, o.prototype.setFrame = function (t, e) {
                this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t
            }, o.prototype.activate = function () {
                var t = this.gl;
                this.frameBuffer.bind(), this.calculateProjection(this.destinationFrame, this.sourceFrame), this.transform && this.projectionMatrix.append(this.transform), this.destinationFrame !== this.sourceFrame ? (t.enable(t.SCISSOR_TEST), t.scissor(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)) : t.disable(t.SCISSOR_TEST), t.viewport(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)
            }, o.prototype.calculateProjection = function (t, e) {
                var i = this.projectionMatrix;
                e = e || t, i.identity(), this.root ? (i.a = 1 / t.width * 2, i.d = -1 / t.height * 2, i.tx = -1 - e.x * i.a, i.ty = 1 - e.y * i.d) : (i.a = 1 / t.width * 2, i.d = 1 / t.height * 2, i.tx = -1 - e.x * i.a, i.ty = -1 - e.y * i.d)
            }, o.prototype.resize = function (t, e) {
                if (t = 0 | t, e = 0 | e, this.size.width !== t || this.size.height !== e) {
                    this.size.width = t, this.size.height = e, this.defaultFrame.width = t, this.defaultFrame.height = e, this.frameBuffer.resize(t * this.resolution, e * this.resolution);
                    var i = this.frame || this.size;
                    this.calculateProjection(i)
                }
            }, o.prototype.destroy = function () {
                this.frameBuffer.destroy(), this.frameBuffer = null, this.texture = null
            }
        }, {"../../../const": 78, "../../../math": 102, "pixi-gl-core": 51}],
        129: [function (t, e, i) {
            function r(t) {
                for (var e = "", i = 0; i < t; i++)i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(test == " + i + ".0){}");
                return e
            }

            var s = t("pixi-gl-core"), n = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n"), o = function (t, e) {
                var i = !e;
                if (i) {
                    var o = document.createElement("canvas");
                    o.width = 1, o.height = 1, e = s.createContext(o)
                }
                for (var a = e.createShader(e.FRAGMENT_SHADER); ;) {
                    var h = n.replace(/%forloop%/gi, r(t));
                    if (e.shaderSource(a, h), e.compileShader(a), e.getShaderParameter(a, e.COMPILE_STATUS))break;
                    t = t / 2 | 0
                }
                return i && e.getExtension("WEBGL_lose_context") && e.getExtension("WEBGL_lose_context").loseContext(), t
            };
            e.exports = o
        }, {"pixi-gl-core": 51}],
        130: [function (t, e, i) {
            function r(t, e) {
                return e = e || [], e[s.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.ADD] = [t.ONE, t.DST_ALPHA], e[s.BLEND_MODES.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR], e[s.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[s.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e
            }

            var s = t("../../../const");
            e.exports = r
        }, {"../../../const": 78}],
        131: [function (t, e, i) {
            function r(t, e) {
                e = e || {}, e[s.DRAW_MODES.POINTS] = t.POINTS, e[s.DRAW_MODES.LINES] = t.LINES, e[s.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP, e[s.DRAW_MODES.LINE_STRIP] = t.LINE_STRIP, e[s.DRAW_MODES.TRIANGLES] = t.TRIANGLES, e[s.DRAW_MODES.TRIANGLE_STRIP] = t.TRIANGLE_STRIP, e[s.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN
            }

            var s = t("../../../const");
            e.exports = r
        }, {"../../../const": 78}],
        132: [function (t, e, i) {
            function r(t) {
                var e = t.getContextAttributes();
                e.stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
            }

            e.exports = r
        }, {}],
        133: [function (t, e, i) {
            function r(t) {
                o.call(this), this.anchor = new s.ObservablePoint(this.onAnchorUpdate, this), this._texture = null, this._width = 0, this._height = 0, this._tint = null, this._tintRGB = null, this.tint = 16777215, this.blendMode = h.BLEND_MODES.NORMAL, this.shader = null, this.cachedTint = 16777215, this.texture = t || n.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1
            }

            var s = t("../math"), n = t("../textures/Texture"), o = t("../display/Container"), a = t("../utils"), h = t("../const"), l = new s.Point;
            r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                width: {
                    get: function () {
                        return Math.abs(this.scale.x) * this.texture.orig.width
                    }, set: function (t) {
                        var e = a.sign(this.scale.x) || 1;
                        this.scale.x = e * t / this.texture.orig.width, this._width = t
                    }
                }, height: {
                    get: function () {
                        return Math.abs(this.scale.y) * this.texture.orig.height
                    }, set: function (t) {
                        var e = a.sign(this.scale.y) || 1;
                        this.scale.y = e * t / this.texture.orig.height, this._height = t
                    }
                }, tint: {
                    get: function () {
                        return this._tint
                    }, set: function (t) {
                        this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
                    }
                }, texture: {
                    get: function () {
                        return this._texture
                    }, set: function (t) {
                        this._texture !== t && (this._texture = t, this.cachedTint = 16777215, this._textureID = -1, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                    }
                }
            }), r.prototype._onTextureUpdate = function () {
                this._textureID = -1, this._width && (this.scale.x = a.sign(this.scale.x) * this._width / this.texture.orig.width), this._height && (this.scale.y = a.sign(this.scale.y) * this._height / this.texture.orig.height)
            }, r.prototype.onAnchorUpdate = function () {
                this._transformID = -1
            }, r.prototype.calculateVertices = function () {
                if (this._transformID !== this.transform._worldID || this._textureID !== this._texture._updateID) {
                    this._transformID = this.transform._worldID, this._textureID = this._texture._updateID;
                    var t, e, i, r, s = this._texture, n = this.transform.worldTransform, o = n.a, a = n.b, h = n.c, l = n.d, c = n.tx, u = n.ty, d = this.vertexData, p = s.trim, f = s.orig;
                    p ? (e = p.x - this.anchor._x * f.width, t = e + p.width, r = p.y - this.anchor._y * f.height, i = r + p.height) : (t = f.width * (1 - this.anchor._x), e = f.width * -this.anchor._x, i = f.height * (1 - this.anchor._y), r = f.height * -this.anchor._y), d[0] = o * e + h * r + c, d[1] = l * r + a * e + u, d[2] = o * t + h * r + c, d[3] = l * r + a * t + u, d[4] = o * t + h * i + c, d[5] = l * i + a * t + u, d[6] = o * e + h * i + c, d[7] = l * i + a * e + u
                }
            }, r.prototype.calculateTrimmedVertices = function () {
                this.vertexTrimmedData || (this.vertexTrimmedData = new Float32Array(8));
                var t, e, i, r, s = this._texture, n = this.vertexTrimmedData, o = s.orig, a = this.transform.worldTransform, h = a.a, l = a.b, c = a.c, u = a.d, d = a.tx, p = a.ty;
                t = o.width * (1 - this.anchor._x), e = o.width * -this.anchor._x, i = o.height * (1 - this.anchor._y), r = o.height * -this.anchor._y, n[0] = h * e + c * r + d, n[1] = u * r + l * e + p, n[2] = h * t + c * r + d, n[3] = u * r + l * t + p, n[4] = h * t + c * i + d, n[5] = u * i + l * t + p, n[6] = h * e + c * i + d, n[7] = u * i + l * e + p
            }, r.prototype._renderWebGL = function (t) {
                this.calculateVertices(), t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this)
            }, r.prototype._renderCanvas = function (t) {
                t.plugins.sprite.render(this)
            }, r.prototype._calculateBounds = function () {
                var t = this._texture.trim, e = this._texture.orig;
                !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
            }, r.prototype.getLocalBounds = function (t) {
                return 0 === this.children.length ? (this._bounds.minX = -this._texture.orig.width * this.anchor._x, this._bounds.minY = -this._texture.orig.height * this.anchor._y, this._bounds.maxX = this._texture.orig.width, this._bounds.maxY = this._texture.orig.height, t || (this._localBoundsRect || (this._localBoundsRect = new s.Rectangle), t = this._localBoundsRect), this._bounds.getRectangle(t)) : o.prototype.getLocalBounds.call(this, t)
            }, r.prototype.containsPoint = function (t) {
                this.worldTransform.applyInverse(t, l);
                var e, i = this._texture.orig.width, r = this._texture.orig.height, s = -i * this.anchor.x;
                return l.x > s && l.x < s + i && (e = -r * this.anchor.y, l.y > e && l.y < e + r)
            }, r.prototype.destroy = function (t) {
                o.prototype.destroy.call(this, t), this.anchor = null;
                var e = "boolean" == typeof t ? t : t && t.texture;
                if (e) {
                    var i = "boolean" == typeof t ? t : t && t.baseTexture;
                    this._texture.destroy(!!i)
                }
                this._texture = null, this.shader = null
            }, r.from = function (t) {
                return new r(n.from(t))
            }, r.fromFrame = function (t) {
                var e = a.TextureCache[t];
                if (!e)throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                return new r(e)
            }, r.fromImage = function (t, e, i) {
                return new r(n.fromImage(t, e, i))
            }
        }, {"../const": 78, "../display/Container": 80, "../math": 102, "../textures/Texture": 144, "../utils": 151}],
        134: [function (t, e, i) {
            function r(t) {
                this.renderer = t
            }

            var s = t("../../renderers/canvas/CanvasRenderer"), n = t("../../const"), o = t("../../math"), a = new o.Matrix, h = t("./CanvasTinter");
            r.prototype.constructor = r, e.exports = r, s.registerPlugin("sprite", r), r.prototype.render = function (t) {
                var e, i, r = t._texture, s = this.renderer, l = t.transform.worldTransform, c = r._frame.width, u = r._frame.height;
                if (!(r.orig.width <= 0 || r.orig.height <= 0) && r.baseTexture.source && (s.setBlendMode(t.blendMode), r.valid)) {
                    s.context.globalAlpha = t.worldAlpha;
                    var d = r.baseTexture.scaleMode === n.SCALE_MODES.LINEAR;
                    s.smoothProperty && s.context[s.smoothProperty] !== d && (s.context[s.smoothProperty] = d), r.trim ? (e = r.trim.width / 2 + r.trim.x - t.anchor.x * r.orig.width, i = r.trim.height / 2 + r.trim.y - t.anchor.y * r.orig.height) : (e = (.5 - t.anchor.x) * r.orig.width, i = (.5 - t.anchor.y) * r.orig.height), r.rotate && (l.copy(a), l = a, o.GroupD8.matrixAppendRotationInv(l, r.rotate, e, i), e = 0, i = 0), e -= c / 2, i -= u / 2, s.roundPixels ? (s.context.setTransform(l.a, l.b, l.c, l.d, l.tx * s.resolution | 0, l.ty * s.resolution | 0), e = 0 | e, i = 0 | i) : s.context.setTransform(l.a, l.b, l.c, l.d, l.tx * s.resolution, l.ty * s.resolution);
                    var p = r.baseTexture.resolution;
                    16777215 !== t.tint ? (t.cachedTint !== t.tint && (t.cachedTint = t.tint, t.tintedTexture = h.getTintedTexture(t, t.tint)), s.context.drawImage(t.tintedTexture, 0, 0, c * p, u * p, e * s.resolution, i * s.resolution, c * s.resolution, u * s.resolution)) : s.context.drawImage(r.baseTexture.source, r._frame.x * p, r._frame.y * p, c * p, u * p, e * s.resolution, i * s.resolution, c * s.resolution, u * s.resolution)
                }
            }, r.prototype.destroy = function () {
                this.renderer = null
            }
        }, {"../../const": 78, "../../math": 102, "../../renderers/canvas/CanvasRenderer": 109, "./CanvasTinter": 135}],
        135: [function (t, e, i) {
            var r = t("../../utils"), s = t("../../renderers/canvas/utils/canUseNewCanvasBlendModes"), n = e.exports = {
                getTintedTexture: function (t, e) {
                    var i = t.texture;
                    e = n.roundColor(e);
                    var r = "#" + ("00000" + (0 | e).toString(16)).substr(-6);
                    if (i.tintCache = i.tintCache || {}, i.tintCache[r])return i.tintCache[r];
                    var s = n.canvas || document.createElement("canvas");
                    if (n.tintMethod(i, e, s), n.convertTintToImage) {
                        var o = new Image;
                        o.src = s.toDataURL(), i.tintCache[r] = o
                    } else i.tintCache[r] = s, n.canvas = null;
                    return s
                }, tintWithMultiply: function (t, e, i) {
                    var r = i.getContext("2d"), s = t._frame.clone(), n = t.baseTexture.resolution;
                    s.x *= n, s.y *= n, s.width *= n, s.height *= n, i.width = s.width, i.height = s.height, r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), r.fillRect(0, 0, s.width, s.height), r.globalCompositeOperation = "multiply", r.drawImage(t.baseTexture.source, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height), r.globalCompositeOperation = "destination-atop", r.drawImage(t.baseTexture.source, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height)
                }, tintWithOverlay: function (t, e, i) {
                    var r = i.getContext("2d"), s = t._frame.clone(), n = t.baseTexture.resolution;
                    s.x *= n, s.y *= n, s.width *= n, s.height *= n, i.width = s.width, i.height = s.height, r.globalCompositeOperation = "copy", r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), r.fillRect(0, 0, s.width, s.height), r.globalCompositeOperation = "destination-atop", r.drawImage(t.baseTexture.source, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height)
                }, tintWithPerPixel: function (t, e, i) {
                    var s = i.getContext("2d"), n = t._frame.clone(), o = t.baseTexture.resolution;
                    n.x *= o, n.y *= o, n.width *= o, n.height *= o, i.width = n.width, i.height = n.height, s.globalCompositeOperation = "copy", s.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height);
                    for (var a = r.hex2rgb(e), h = a[0], l = a[1], c = a[2], u = s.getImageData(0, 0, n.width, n.height), d = u.data, p = 0; p < d.length; p += 4)d[p + 0] *= h, d[p + 1] *= l, d[p + 2] *= c;
                    s.putImageData(u, 0, 0)
                }, roundColor: function (t) {
                    var e = n.cacheStepsPerColorChannel, i = r.hex2rgb(t);
                    return i[0] = Math.min(255, i[0] / e * e), i[1] = Math.min(255, i[1] / e * e), i[2] = Math.min(255, i[2] / e * e), r.rgb2hex(i)
                }, cacheStepsPerColorChannel: 8, convertTintToImage: !1, canUseMultiply: s(), tintMethod: 0
            };
            n.tintMethod = n.canUseMultiply ? n.tintWithMultiply : n.tintWithPerPixel
        }, {"../../renderers/canvas/utils/canUseNewCanvasBlendModes": 112, "../../utils": 151}],
        136: [function (t, e, i) {
            var r = function (t) {
                this.vertices = new ArrayBuffer(t), this.float32View = new Float32Array(this.vertices), this.uint32View = new Uint32Array(this.vertices)
            };
            e.exports = r, r.prototype.destroy = function () {
                this.vertices = null, this.positions = null, this.uvs = null, this.colors = null
            }
        }, {}],
        137: [function (t, e, i) {
            function r(t) {
                s.call(this, t), this.vertSize = 5, this.vertByteSize = 4 * this.vertSize, this.size = c.SPRITE_BATCH_SIZE, this.buffers = [];
                for (var e = 1; e <= d.nextPow2(this.size); e *= 2) {
                    var i = 4 * e * this.vertByteSize;
                    this.buffers.push(new l(i))
                }
                this.indices = o(this.size), this.shaders = null, this.currentIndex = 0, p = 0, this.groups = [];
                for (var r = 0; r < this.size; r++)this.groups[r] = {
                    textures: [],
                    textureCount: 0,
                    ids: [],
                    size: 0,
                    start: 0,
                    blend: 0
                };
                this.sprites = [], this.vertexBuffers = [], this.vaos = [], this.vaoMax = 2, this.vertexCount = 0, this.renderer.on("prerender", this.onPrerender, this)
            }

            var s = t("../../renderers/webgl/utils/ObjectRenderer"), n = t("../../renderers/webgl/WebGLRenderer"), o = t("../../utils/createIndicesForQuads"), a = t("./generateMultiTextureShader"), h = t("../../renderers/webgl/utils/checkMaxIfStatmentsInShader"), l = t("./BatchBuffer"), c = t("../../const"), u = t("pixi-gl-core"), d = t("bit-twiddle"), p = 0;
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, n.registerPlugin("sprite", r), r.prototype.onContextChange = function () {
                var t = this.renderer.gl;
                this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), c.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = h(this.MAX_TEXTURES, t), this.shaders = new Array(this.MAX_TEXTURES), this.shaders[0] = a(t, 1), this.shaders[1] = a(t, 2), this.indexBuffer = u.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW);
                for (var e = this.shaders[1], i = 0; i < this.vaoMax; i++)this.vertexBuffers[i] = u.GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW), this.vaos[i] = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[i], e.attributes.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(this.vertexBuffers[i], e.attributes.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(this.vertexBuffers[i], e.attributes.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12).addAttribute(this.vertexBuffers[i], e.attributes.aTextureId, t.FLOAT, !1, this.vertByteSize, 16);
                this.vao = this.vaos[0], this.currentBlendMode = 99999
            }, r.prototype.onPrerender = function () {
                this.vertexCount = 0
            }, r.prototype.render = function (t) {
                this.currentIndex >= this.size && this.flush(), t.texture._uvs && (this.sprites[this.currentIndex++] = t)
            }, r.prototype.flush = function () {
                if (0 !== this.currentIndex) {
                    var t, e, i, r, s, n, o, h = this.renderer.gl, l = d.nextPow2(this.currentIndex), c = d.log2(l), f = this.buffers[c], g = this.sprites, m = this.groups, v = f.float32View, _ = f.uint32View, y = 0, x = 1, b = 0, w = m[0], T = g[0].blendMode;
                    w.textureCount = 0, w.start = 0, w.blend = T, p++;
                    for (var L = 0; L < this.currentIndex; L++) {
                        var S = g[L];
                        if (t = S._texture.baseTexture, T !== S.blendMode && (T = S.blendMode, e = null, b = this.MAX_TEXTURES, p++), e !== t && (e = t, t._enabled !== p && (b === this.MAX_TEXTURES && (p++, b = 0, w.size = L - w.start, w = m[x++], w.textureCount = 0, w.blend = T, w.start = L), t._enabled = p, t._id = b, w.textures[w.textureCount++] = t, b++)), i = S.vertexData, r = S._tintRGB + (255 * S.worldAlpha << 24), s = S._texture._uvs.uvsUint32, n = t._id, this.renderer.roundPixels) {
                            var E = this.renderer.resolution;
                            v[y] = (i[0] * E | 0) / E, v[y + 1] = (i[1] * E | 0) / E, v[y + 5] = (i[2] * E | 0) / E, v[y + 6] = (i[3] * E | 0) / E, v[y + 10] = (i[4] * E | 0) / E, v[y + 11] = (i[5] * E | 0) / E, v[y + 15] = (i[6] * E | 0) / E, v[y + 16] = (i[7] * E | 0) / E
                        } else v[y] = i[0], v[y + 1] = i[1], v[y + 5] = i[2], v[y + 6] = i[3], v[y + 10] = i[4], v[y + 11] = i[5], v[y + 15] = i[6], v[y + 16] = i[7];
                        _[y + 2] = s[0], _[y + 7] = s[1], _[y + 12] = s[2], _[y + 17] = s[3], _[y + 3] = _[y + 8] = _[y + 13] = _[y + 18] = r, v[y + 4] = v[y + 9] = v[y + 14] = v[y + 19] = n, y += 20
                    }
                    for (w.size = L - w.start, this.vertexCount++, this.vaoMax <= this.vertexCount && (this.vaoMax++, o = this.shaders[1], this.vertexBuffers[this.vertexCount] = u.GLBuffer.createVertexBuffer(h, null, h.STREAM_DRAW), this.vaos[this.vertexCount] = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[this.vertexCount], o.attributes.aVertexPosition, h.FLOAT, !1, this.vertByteSize, 0).addAttribute(this.vertexBuffers[this.vertexCount], o.attributes.aTextureCoord, h.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(this.vertexBuffers[this.vertexCount], o.attributes.aColor, h.UNSIGNED_BYTE, !0, this.vertByteSize, 12).addAttribute(this.vertexBuffers[this.vertexCount], o.attributes.aTextureId, h.FLOAT, !1, this.vertByteSize, 16)), this.vertexBuffers[this.vertexCount].upload(f.vertices, 0), this.vao = this.vaos[this.vertexCount].bind(), L = 0; L < x; L++) {
                        var P = m[L], A = P.textureCount;
                        o = this.shaders[A - 1], o || (o = this.shaders[A - 1] = a(h, A)), this.renderer.bindShader(o);
                        for (var C = 0; C < A; C++)this.renderer.bindTexture(P.textures[C], C);
                        this.renderer.state.setBlendMode(P.blend), h.drawElements(h.TRIANGLES, 6 * P.size, h.UNSIGNED_SHORT, 6 * P.start * 2)
                    }
                    this.currentIndex = 0
                }
            }, r.prototype.start = function () {
            }, r.prototype.stop = function () {
                this.flush(), this.vao.unbind()
            }, r.prototype.destroy = function () {
                for (var t = 0; t < this.vaoMax; t++)this.vertexBuffers[t].destroy(), this.vaos[t].destroy();
                for (this.indexBuffer.destroy(), this.renderer.off("prerender", this.onPrerender, this), s.prototype.destroy.call(this), t = 0; t < this.shaders.length; t++)this.shaders[t] && this.shaders[t].destroy();
                for (this.vertexBuffers = null, this.vaos = null, this.indexBuffer = null, this.indices = null, this.sprites = null, t = 0; t < this.buffers.length; t++)this.buffers[t].destroy()
            }
        }, {
            "../../const": 78,
            "../../renderers/webgl/WebGLRenderer": 116,
            "../../renderers/webgl/utils/ObjectRenderer": 126,
            "../../renderers/webgl/utils/checkMaxIfStatmentsInShader": 129,
            "../../utils/createIndicesForQuads": 149,
            "./BatchBuffer": 136,
            "./generateMultiTextureShader": 138,
            "bit-twiddle": 14,
            "pixi-gl-core": 51
        }],
        138: [function (t, e, i) {
            function r(t, e) {
                var i = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vTextureId = aTextureId;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", r = o;
                r = r.replace(/%count%/gi, e), r = r.replace(/%forloop%/gi, s(e));
                for (var a = new n(t, i, r), h = [], l = 0; l < e; l++)h[l] = l;
                return a.bind(), a.uniforms.uSamplers = h, a
            }

            function s(t) {
                var e = "";
                e += "\n", e += "\n";
                for (var i = 0; i < t; i++)i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(textureId == " + i + ".0)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + i + "], vTextureCoord);", e += "\n}";
                return e += "\n", e += "\n"
            }

            var n = t("../../Shader"), o = ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers[%count%];", "void main(void){", "vec4 color;", "float textureId = floor(vTextureId+0.5);", "%forloop%", "gl_FragColor = color * vColor;", "}"].join("\n");
            e.exports = r
        }, {"../../Shader": 77}],
        139: [function (t, e, i) {
            function r(t, e) {
                this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = h.RESOLUTION, this._text = null, this._style = null, this._styleListener = null, this._font = "";
                var i = n.fromCanvas(this.canvas);
                i.orig = new o.Rectangle, i.trim = new o.Rectangle, s.call(this, i), this.text = t, this.style = e, this.localStyleID = -1
            }

            var s = t("../sprites/Sprite"), n = t("../textures/Texture"), o = t("../math"), a = t("../utils"), h = t("../const"), l = t("./TextStyle"), c = {
                texture: !0,
                children: !1,
                baseTexture: !0
            };
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.fontPropertiesCache = {}, r.fontPropertiesCanvas = document.createElement("canvas"), r.fontPropertiesContext = r.fontPropertiesCanvas.getContext("2d"), Object.defineProperties(r.prototype, {
                width: {
                    get: function () {
                        return this.updateText(!0), Math.abs(this.scale.x) * this.texture.orig.width
                    }, set: function (t) {
                        this.updateText(!0);
                        var e = a.sign(this.scale.x) || 1;
                        this.scale.x = e * t / this.texture.orig.width, this._width = t
                    }
                }, height: {
                    get: function () {
                        return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
                    }, set: function (t) {
                        this.updateText(!0);
                        var e = a.sign(this.scale.y) || 1;
                        this.scale.y = e * t / this.texture.orig.height, this._height = t
                    }
                }, style: {
                    get: function () {
                        return this._style
                    }, set: function (t) {
                        t = t || {}, t instanceof l ? this._style = t : this._style = new l(t), this.localStyleID = -1, this.dirty = !0
                    }
                }, text: {
                    get: function () {
                        return this._text
                    }, set: function (t) {
                        t = t || " ", t = t.toString(), this._text !== t && (this._text = t, this.dirty = !0)
                    }
                }
            }), r.prototype.updateText = function (t) {
                var e = this._style;
                if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), this.dirty || !t) {
                    var i = "number" == typeof e.fontSize ? e.fontSize + "px" : e.fontSize;
                    this._font = e.fontStyle + " " + e.fontVariant + " " + e.fontWeight + " " + i + " " + e.fontFamily, this.context.font = this._font;
                    var r, s = e.wordWrap ? this.wordWrap(this._text) : this._text, n = s.split(/(?:\r\n|\r|\n)/), o = new Array(n.length), a = 0, h = this.determineFontProperties(this._font);
                    for (r = 0; r < n.length; r++) {
                        var l = this.context.measureText(n[r]).width + (n[r].length - 1) * e.letterSpacing;
                        o[r] = l, a = Math.max(a, l)
                    }
                    var c = a + e.strokeThickness;
                    e.dropShadow && (c += e.dropShadowDistance), c += 2 * e.padding, this.canvas.width = Math.ceil((c + this.context.lineWidth) * this.resolution);
                    var u = this.style.lineHeight || h.fontSize + e.strokeThickness, d = Math.max(u, h.fontSize + e.strokeThickness) + (n.length - 1) * u;
                    e.dropShadow && (d += e.dropShadowDistance), this.canvas.height = Math.ceil((d + 2 * this._style.padding) * this.resolution), this.context.scale(this.resolution, this.resolution), navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = this._font, this.context.strokeStyle = e.stroke, this.context.lineWidth = e.strokeThickness, this.context.textBaseline = e.textBaseline, this.context.lineJoin = e.lineJoin, this.context.miterLimit = e.miterLimit;
                    var p, f;
                    if (e.dropShadow) {
                        e.dropShadowBlur > 0 ? (this.context.shadowColor = e.dropShadowColor, this.context.shadowBlur = e.dropShadowBlur) : this.context.fillStyle = e.dropShadowColor;
                        var g = Math.cos(e.dropShadowAngle) * e.dropShadowDistance, m = Math.sin(e.dropShadowAngle) * e.dropShadowDistance;
                        for (r = 0; r < n.length; r++)p = e.strokeThickness / 2, f = e.strokeThickness / 2 + r * u + h.ascent, "right" === e.align ? p += a - o[r] : "center" === e.align && (p += (a - o[r]) / 2), e.fill && (this.drawLetterSpacing(n[r], p + g + e.padding, f + m + e.padding), e.stroke && e.strokeThickness && (this.context.strokeStyle = e.dropShadowColor, this.drawLetterSpacing(n[r], p + g + e.padding, f + m + e.padding, !0), this.context.strokeStyle = e.stroke))
                    }
                    for (this.context.fillStyle = this._generateFillStyle(e, n), r = 0; r < n.length; r++)p = e.strokeThickness / 2,
                        f = e.strokeThickness / 2 + r * u + h.ascent, "right" === e.align ? p += a - o[r] : "center" === e.align && (p += (a - o[r]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(n[r], p + e.padding, f + e.padding, !0), e.fill && this.drawLetterSpacing(n[r], p + e.padding, f + e.padding);
                    this.updateTexture()
                }
            }, r.prototype.drawLetterSpacing = function (t, e, i, r) {
                var s = this._style, n = s.letterSpacing;
                if (0 === n)return void(r ? this.context.strokeText(t, e, i) : this.context.fillText(t, e, i));
                for (var o, a = String.prototype.split.call(t, ""), h = 0, l = e; h < t.length;)o = a[h++], r ? this.context.strokeText(o, l, i) : this.context.fillText(o, l, i), l += this.context.measureText(o).width + n
            }, r.prototype.updateTexture = function () {
                var t = this._texture, e = this._style;
                t.baseTexture.hasLoaded = !0, t.baseTexture.resolution = this.resolution, t.baseTexture.realWidth = this.canvas.width, t.baseTexture.realHeight = this.canvas.height, t.baseTexture.width = this.canvas.width / this.resolution, t.baseTexture.height = this.canvas.height / this.resolution, t.trim.width = t._frame.width = this.canvas.width / this.resolution, t.trim.height = t._frame.height = this.canvas.height / this.resolution, t.trim.x = -e.padding, t.trim.y = -e.padding, t.orig.width = t._frame.width - 2 * e.padding, t.orig.height = t._frame.height - 2 * e.padding, this._onTextureUpdate(), t.baseTexture.emit("update", t.baseTexture), this.dirty = !1
            }, r.prototype.renderWebGL = function (t) {
                this.resolution !== t.resolution && (this.resolution = t.resolution, this.dirty = !0), this.updateText(!0), s.prototype.renderWebGL.call(this, t)
            }, r.prototype._renderCanvas = function (t) {
                this.resolution !== t.resolution && (this.resolution = t.resolution, this.dirty = !0), this.updateText(!0), s.prototype._renderCanvas.call(this, t)
            }, r.prototype.determineFontProperties = function (t) {
                var e = r.fontPropertiesCache[t];
                if (!e) {
                    e = {};
                    var i = r.fontPropertiesCanvas, s = r.fontPropertiesContext;
                    s.font = t;
                    var n = Math.ceil(s.measureText("|MÉq").width), o = Math.ceil(s.measureText("M").width), a = 2 * o;
                    o = 1.4 * o | 0, i.width = n, i.height = a, s.fillStyle = "#f00", s.fillRect(0, 0, n, a), s.font = t, s.textBaseline = "alphabetic", s.fillStyle = "#000", s.fillText("|MÉq", 0, o);
                    var h, l, c = s.getImageData(0, 0, n, a).data, u = c.length, d = 4 * n, p = 0, f = !1;
                    for (h = 0; h < o; h++) {
                        for (l = 0; l < d; l += 4)if (255 !== c[p + l]) {
                            f = !0;
                            break
                        }
                        if (f)break;
                        p += d
                    }
                    for (e.ascent = o - h, p = u - d, f = !1, h = a; h > o; h--) {
                        for (l = 0; l < d; l += 4)if (255 !== c[p + l]) {
                            f = !0;
                            break
                        }
                        if (f)break;
                        p -= d
                    }
                    e.descent = h - o, e.fontSize = e.ascent + e.descent, r.fontPropertiesCache[t] = e
                }
                return e
            }, r.prototype.wordWrap = function (t) {
                for (var e = "", i = t.split("\n"), r = this._style.wordWrapWidth, s = 0; s < i.length; s++) {
                    for (var n = r, o = i[s].split(" "), a = 0; a < o.length; a++) {
                        var h = this.context.measureText(o[a]).width;
                        if (this._style.breakWords && h > r)for (var l = o[a].split(""), c = 0; c < l.length; c++) {
                            var u = this.context.measureText(l[c]).width;
                            u > n ? (e += "\n" + l[c], n = r - u) : (0 === c && (e += " "), e += l[c], n -= u)
                        } else {
                            var d = h + this.context.measureText(" ").width;
                            0 === a || d > n ? (a > 0 && (e += "\n"), e += o[a], n = r - h) : (n -= d, e += " " + o[a])
                        }
                    }
                    s < i.length - 1 && (e += "\n")
                }
                return e
            }, r.prototype._calculateBounds = function () {
                this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
            }, r.prototype._onStyleChange = function () {
                this.dirty = !0
            }, r.prototype._generateFillStyle = function (t, e) {
                if (Array.isArray(t.fill)) {
                    var i, r, s, n, o, a = this.canvas.width / this.resolution, l = this.canvas.height / this.resolution;
                    if (t.fillGradientType === h.TEXT_GRADIENT.LINEAR_VERTICAL)for (r = this.context.createLinearGradient(a / 2, 0, a / 2, l), s = (t.fill.length + 1) * e.length, n = 0, i = 0; i < e.length; i++) {
                        n += 1;
                        for (var c = 0; c < t.fill.length; c++)o = n / s, r.addColorStop(o, t.fill[c]), n++
                    } else for (r = this.context.createLinearGradient(0, l / 2, a, l / 2), s = t.fill.length + 1, n = 1, i = 0; i < t.fill.length; i++)o = n / s, r.addColorStop(o, t.fill[i]), n++;
                    return r
                }
                return t.fill
            }, r.prototype.destroy = function (t) {
                "boolean" == typeof t && (t = {children: t}), t = Object.assign({}, c, t), s.prototype.destroy.call(this, t), this.context = null, this.canvas = null, this._style = null
            }
        }, {
            "../const": 78,
            "../math": 102,
            "../sprites/Sprite": 133,
            "../textures/Texture": 144,
            "../utils": 151,
            "./TextStyle": 140
        }],
        140: [function (t, e, i) {
            function r(t) {
                this.styleID = 0, Object.assign(this, this._defaults, t)
            }

            function s(t) {
                if ("number" == typeof t)return o.hex2string(t);
                if (Array.isArray(t))for (var e = 0; e < t.length; ++e)"number" == typeof t[e] && (t[e] = o.hex2string(t[e]));
                return t
            }

            var n = t("../const"), o = t("../utils");
            r.prototype.constructor = r, e.exports = r, r.prototype._defaults = {
                align: "left",
                breakWords: !1,
                dropShadow: !1,
                dropShadowAngle: Math.PI / 6,
                dropShadowBlur: 0,
                dropShadowColor: "#000000",
                dropShadowDistance: 5,
                fill: "black",
                fillGradientType: n.TEXT_GRADIENT.LINEAR_VERTICAL,
                fontFamily: "Arial",
                fontSize: 26,
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "normal",
                letterSpacing: 0,
                lineHeight: 0,
                lineJoin: "miter",
                miterLimit: 10,
                padding: 0,
                stroke: "black",
                strokeThickness: 0,
                textBaseline: "alphabetic",
                wordWrap: !1,
                wordWrapWidth: 100
            }, r.prototype.clone = function () {
                var t = {};
                for (var e in this._defaults)t[e] = this[e];
                return new r(t)
            }, r.prototype.reset = function () {
                Object.assign(this, this._defaults)
            }, Object.defineProperties(r.prototype, {
                align: {
                    get: function () {
                        return this._align
                    }, set: function (t) {
                        this._align !== t && (this._align = t, this.styleID++)
                    }
                }, breakWords: {
                    get: function () {
                        return this._breakWords
                    }, set: function (t) {
                        this._breakWords !== t && (this._breakWords = t, this.styleID++)
                    }
                }, dropShadow: {
                    get: function () {
                        return this._dropShadow
                    }, set: function (t) {
                        this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
                    }
                }, dropShadowAngle: {
                    get: function () {
                        return this._dropShadowAngle
                    }, set: function (t) {
                        this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
                    }
                }, dropShadowBlur: {
                    get: function () {
                        return this._dropShadowBlur
                    }, set: function (t) {
                        this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
                    }
                }, dropShadowColor: {
                    get: function () {
                        return this._dropShadowColor
                    }, set: function (t) {
                        var e = s(t);
                        this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
                    }
                }, dropShadowDistance: {
                    get: function () {
                        return this._dropShadowDistance
                    }, set: function (t) {
                        this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
                    }
                }, fill: {
                    get: function () {
                        return this._fill
                    }, set: function (t) {
                        var e = s(t);
                        this._fill !== e && (this._fill = e, this.styleID++)
                    }
                }, fillGradientType: {
                    get: function () {
                        return this._fillGradientType
                    }, set: function (t) {
                        this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
                    }
                }, fontFamily: {
                    get: function () {
                        return this._fontFamily
                    }, set: function (t) {
                        this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
                    }
                }, fontSize: {
                    get: function () {
                        return this._fontSize
                    }, set: function (t) {
                        this._fontSize !== t && (this._fontSize = t, this.styleID++)
                    }
                }, fontStyle: {
                    get: function () {
                        return this._fontStyle
                    }, set: function (t) {
                        this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
                    }
                }, fontVariant: {
                    get: function () {
                        return this._fontVariant
                    }, set: function (t) {
                        this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
                    }
                }, fontWeight: {
                    get: function () {
                        return this._fontWeight
                    }, set: function (t) {
                        this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
                    }
                }, letterSpacing: {
                    get: function () {
                        return this._letterSpacing
                    }, set: function (t) {
                        this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
                    }
                }, lineHeight: {
                    get: function () {
                        return this._lineHeight
                    }, set: function (t) {
                        this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
                    }
                }, lineJoin: {
                    get: function () {
                        return this._lineJoin
                    }, set: function (t) {
                        this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
                    }
                }, miterLimit: {
                    get: function () {
                        return this._miterLimit
                    }, set: function (t) {
                        this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
                    }
                }, padding: {
                    get: function () {
                        return this._padding
                    }, set: function (t) {
                        this._padding !== t && (this._padding = t, this.styleID++)
                    }
                }, stroke: {
                    get: function () {
                        return this._stroke
                    }, set: function (t) {
                        var e = s(t);
                        this._stroke !== e && (this._stroke = e, this.styleID++)
                    }
                }, strokeThickness: {
                    get: function () {
                        return this._strokeThickness
                    }, set: function (t) {
                        this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
                    }
                }, textBaseline: {
                    get: function () {
                        return this._textBaseline
                    }, set: function (t) {
                        this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
                    }
                }, wordWrap: {
                    get: function () {
                        return this._wordWrap
                    }, set: function (t) {
                        this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
                    }
                }, wordWrapWidth: {
                    get: function () {
                        return this._wordWrapWidth
                    }, set: function (t) {
                        this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
                    }
                }
            })
        }, {"../const": 78, "../utils": 151}],
        141: [function (t, e, i) {
            function r(t, e, i, r) {
                s.call(this, null, i), this.resolution = r || n.RESOLUTION, this.width = t || 100, this.height = e || 100, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.scaleMode = i || n.SCALE_MODES.DEFAULT, this.hasLoaded = !0, this._glRenderTargets = [], this._canvasRenderTarget = null, this.valid = !1
            }

            var s = t("./BaseTexture"), n = t("../const");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.resize = function (t, e) {
                t === this.width && e === this.height || (this.valid = t > 0 && e > 0, this.width = t, this.height = e, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.valid && this.emit("update", this))
            }, r.prototype.destroy = function () {
                s.prototype.destroy.call(this, !0), this.renderer = null
            }
        }, {"../const": 78, "./BaseTexture": 142}],
        142: [function (t, e, i) {
            function r(t, e, i) {
                o.call(this), this.uid = s.uid(), this.touched = 0, this.resolution = i || n.RESOLUTION, this.width = 100, this.height = 100, this.realWidth = 100, this.realHeight = 100, this.scaleMode = e || n.SCALE_MODES.DEFAULT, this.hasLoaded = !1, this.isLoading = !1, this.source = null, this.premultipliedAlpha = !0, this.imageUrl = null, this.isPowerOfTwo = !1, this.mipmap = n.MIPMAP_TEXTURES, this.wrapMode = n.WRAP_MODES.DEFAULT, this._glTextures = [], this._enabled = 0, this._id = 0, t && this.loadSource(t)
            }

            var s = t("../utils"), n = t("../const"), o = t("eventemitter3"), a = t("../utils/determineCrossOrigin"), h = t("bit-twiddle");
            r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.update = function () {
                this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height, this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = h.isPow2(this.realWidth) && h.isPow2(this.realHeight), this.emit("update", this)
            }, r.prototype.loadSource = function (t) {
                var e = this.isLoading;
                if (this.hasLoaded = !1, this.isLoading = !1, e && this.source && (this.source.onload = null, this.source.onerror = null), this.source = t, (this.source.complete || this.source.getContext) && this.source.width && this.source.height)this._sourceLoaded(); else if (!t.getContext) {
                    this.isLoading = !0;
                    var i = this;
                    t.onload = function () {
                        t.onload = null, t.onerror = null, i.isLoading && (i.isLoading = !1, i._sourceLoaded(), i.emit("loaded", i))
                    }, t.onerror = function () {
                        t.onload = null, t.onerror = null, i.isLoading && (i.isLoading = !1, i.emit("error", i))
                    }, t.complete && t.src && (this.isLoading = !1, t.onload = null, t.onerror = null, t.width && t.height ? (this._sourceLoaded(), e && this.emit("loaded", this)) : e && this.emit("error", this))
                }
            }, r.prototype._sourceLoaded = function () {
                this.hasLoaded = !0, this.update()
            }, r.prototype.destroy = function () {
                this.imageUrl ? (delete s.BaseTextureCache[this.imageUrl], delete s.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && delete s.BaseTextureCache[this.source._pixiId], this.source = null, this.dispose()
            }, r.prototype.dispose = function () {
                this.emit("dispose", this)
            }, r.prototype.updateSourceImage = function (t) {
                this.source.src = t, this.loadSource(this.source)
            }, r.fromImage = function (t, e, i) {
                var n = s.BaseTextureCache[t];
                if (!n) {
                    var o = new Image;
                    void 0 === e && 0 !== t.indexOf("data:") && (o.crossOrigin = a(t)), n = new r(o, i), n.imageUrl = t, o.src = t, s.BaseTextureCache[t] = n, n.resolution = s.getResolutionOfUrl(t)
                }
                return n
            }, r.fromCanvas = function (t, e) {
                t._pixiId || (t._pixiId = "canvas_" + s.uid());
                var i = s.BaseTextureCache[t._pixiId];
                return i || (i = new r(t, e), s.BaseTextureCache[t._pixiId] = i), i
            }
        }, {
            "../const": 78,
            "../utils": 151,
            "../utils/determineCrossOrigin": 150,
            "bit-twiddle": 14,
            eventemitter3: 16
        }],
        143: [function (t, e, i) {
            function r(t, e) {
                if (this.legacyRenderer = null, !(t instanceof s)) {
                    var i = arguments[1], r = arguments[2], o = arguments[3] || 0, a = arguments[4] || 1;
                    console.warn("v4 RenderTexture now expects a new BaseRenderTexture. Please use RenderTexture.create(" + i + ", " + r + ")"), this.legacyRenderer = arguments[0], e = null, t = new s(i, r, o, a)
                }
                n.call(this, t, e), this.valid = !0, this._updateUvs()
            }

            var s = t("./BaseRenderTexture"), n = t("./Texture");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.resize = function (t, e, i) {
                this.valid = t > 0 && e > 0, this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, i || this.baseTexture.resize(t, e), this._updateUvs()
            }, r.create = function (t, e, i, n) {
                return new r(new s(t, e, i, n))
            }
        }, {"./BaseRenderTexture": 141, "./Texture": 144}],
        144: [function (t, e, i) {
            function r(t, e, i, s, n) {
                if (a.call(this), this.noFrame = !1, e || (this.noFrame = !0, e = new h.Rectangle(0, 0, 1, 1)), t instanceof r && (t = t.baseTexture), this.baseTexture = t, this._frame = e, this.trim = s, this.valid = !1, this.requiresUpdate = !1, this._uvs = null, this.orig = i || e, this._rotate = +(n || 0), n === !0)this._rotate = 2; else if (this._rotate % 2 !== 0)throw"attempt to use diamond-shaped UVs. If you are sure, set rotation manually";
                t.hasLoaded ? (this.noFrame && (e = new h.Rectangle(0, 0, t.width, t.height), t.on("update", this.onBaseTextureUpdated, this)), this.frame = e) : t.once("loaded", this.onBaseTextureLoaded, this), this._updateID = 0
            }

            var s = t("./BaseTexture"), n = t("./VideoBaseTexture"), o = t("./TextureUvs"), a = t("eventemitter3"), h = t("../math"), l = t("../utils");
            r.prototype = Object.create(a.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                frame: {
                    get: function () {
                        return this._frame
                    }, set: function (t) {
                        if (this._frame = t, this.noFrame = !1, t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height)throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
                        this.valid = t && t.width && t.height && this.baseTexture.hasLoaded, this.trim || this.rotate || (this.orig = t), this.valid && this._updateUvs()
                    }
                }, rotate: {
                    get: function () {
                        return this._rotate
                    }, set: function (t) {
                        this._rotate = t, this.valid && this._updateUvs()
                    }
                }, width: {
                    get: function () {
                        return this.orig ? this.orig.width : 0
                    }
                }, height: {
                    get: function () {
                        return this.orig ? this.orig.height : 0
                    }
                }
            }), r.prototype.update = function () {
                this.baseTexture.update()
            }, r.prototype.onBaseTextureLoaded = function (t) {
                this._updateID++, this.noFrame ? this.frame = new h.Rectangle(0, 0, t.width, t.height) : this.frame = this._frame, this.baseTexture.on("update", this.onBaseTextureUpdated, this), this.emit("update", this)
            }, r.prototype.onBaseTextureUpdated = function (t) {
                this._updateID++, this._frame.width = t.width, this._frame.height = t.height, this.emit("update", this)
            }, r.prototype.destroy = function (t) {
                this.baseTexture && (t && (l.TextureCache[this.baseTexture.imageUrl] && delete l.TextureCache[this.baseTexture.imageUrl], this.baseTexture.destroy()), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, this.off("dispose", this.dispose, this), this.off("update", this.update, this)
            }, r.prototype.clone = function () {
                return new r(this.baseTexture, this.frame, this.orig, this.trim, this.rotate)
            }, r.prototype._updateUvs = function () {
                this._uvs || (this._uvs = new o), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
            }, r.fromImage = function (t, e, i) {
                var n = l.TextureCache[t];
                return n || (n = new r(s.fromImage(t, e, i)), l.TextureCache[t] = n), n
            }, r.fromFrame = function (t) {
                var e = l.TextureCache[t];
                if (!e)throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                return e
            }, r.fromCanvas = function (t, e) {
                return new r(s.fromCanvas(t, e))
            }, r.fromVideo = function (t, e) {
                return "string" == typeof t ? r.fromVideoUrl(t, e) : new r(n.fromVideo(t, e))
            }, r.fromVideoUrl = function (t, e) {
                return new r(n.fromUrl(t, e))
            }, r.from = function (t) {
                if ("string" == typeof t) {
                    var e = l.TextureCache[t];
                    if (!e) {
                        var i = null !== t.match(/\.(mp4|webm|ogg|h264|avi|mov)$/);
                        return i ? r.fromVideoUrl(t) : r.fromImage(t)
                    }
                    return e
                }
                return t instanceof HTMLCanvasElement ? r.fromCanvas(t) : t instanceof HTMLVideoElement ? r.fromVideo(t) : t instanceof s ? new r(s) : t
            }, r.addTextureToCache = function (t, e) {
                l.TextureCache[e] = t
            }, r.removeTextureFromCache = function (t) {
                var e = l.TextureCache[t];
                return delete l.TextureCache[t], delete l.BaseTextureCache[t], e
            }, r.EMPTY = new r(new s), r.EMPTY.destroy = function () {
            }, r.EMPTY.on = function () {
            }, r.EMPTY.once = function () {
            }, r.EMPTY.emit = function () {
            }
        }, {
            "../math": 102,
            "../utils": 151,
            "./BaseTexture": 142,
            "./TextureUvs": 145,
            "./VideoBaseTexture": 146,
            eventemitter3: 16
        }],
        145: [function (t, e, i) {
            function r() {
                this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsUint32 = new Uint32Array(4)
            }

            e.exports = r;
            var s = t("../math/GroupD8");
            r.prototype.set = function (t, e, i) {
                var r = e.width, n = e.height;
                if (i) {
                    var o = t.width / 2 / r, a = t.height / 2 / n, h = t.x / r + o, l = t.y / n + a;
                    i = s.add(i, s.NW), this.x0 = h + o * s.uX(i), this.y0 = l + a * s.uY(i), i = s.add(i, 2), this.x1 = h + o * s.uX(i), this.y1 = l + a * s.uY(i), i = s.add(i, 2), this.x2 = h + o * s.uX(i), this.y2 = l + a * s.uY(i), i = s.add(i, 2), this.x3 = h + o * s.uX(i), this.y3 = l + a * s.uY(i)
                } else this.x0 = t.x / r, this.y0 = t.y / n, this.x1 = (t.x + t.width) / r, this.y1 = t.y / n, this.x2 = (t.x + t.width) / r, this.y2 = (t.y + t.height) / n, this.x3 = t.x / r, this.y3 = (t.y + t.height) / n;
                this.uvsUint32[0] = (65535 * this.y0 & 65535) << 16 | 65535 * this.x0 & 65535, this.uvsUint32[1] = (65535 * this.y1 & 65535) << 16 | 65535 * this.x1 & 65535, this.uvsUint32[2] = (65535 * this.y2 & 65535) << 16 | 65535 * this.x2 & 65535, this.uvsUint32[3] = (65535 * this.y3 & 65535) << 16 | 65535 * this.x3 & 65535
            }
        }, {"../math/GroupD8": 98}],
        146: [function (t, e, i) {
            function r(t, e) {
                if (!t)throw new Error("No video source element specified.");
                (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), n.call(this, t, e), this.autoUpdate = !1, this._onUpdate = this._onUpdate.bind(this), this._onCanPlay = this._onCanPlay.bind(this), t.complete || (t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlay), t.addEventListener("play", this._onPlayStart.bind(this)), t.addEventListener("pause", this._onPlayStop.bind(this))), this.__loaded = !1
            }

            function s(t, e) {
                e || (e = "video/" + t.substr(t.lastIndexOf(".") + 1));
                var i = document.createElement("source");
                return i.src = t, i.type = e, i
            }

            var n = t("./BaseTexture"), o = t("../utils");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype._onUpdate = function () {
                this.autoUpdate && (window.requestAnimationFrame(this._onUpdate), this.update())
            }, r.prototype._onPlayStart = function () {
                this.hasLoaded || this._onCanPlay(), this.autoUpdate || (window.requestAnimationFrame(this._onUpdate), this.autoUpdate = !0)
            }, r.prototype._onPlayStop = function () {
                this.autoUpdate = !1
            }, r.prototype._onCanPlay = function () {
                this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.source.play(), this.__loaded || (this.__loaded = !0, this.emit("loaded", this)))
            }, r.prototype.destroy = function () {
                this.source && this.source._pixiId && (delete o.BaseTextureCache[this.source._pixiId], delete this.source._pixiId), n.prototype.destroy.call(this)
            }, r.fromVideo = function (t, e) {
                t._pixiId || (t._pixiId = "video_" + o.uid());
                var i = o.BaseTextureCache[t._pixiId];
                return i || (i = new r(t, e), o.BaseTextureCache[t._pixiId] = i), i
            }, r.fromUrl = function (t, e) {
                var i = document.createElement("video");
                if (Array.isArray(t))for (var n = 0; n < t.length; ++n)i.appendChild(s(t[n].src || t[n], t[n].mime)); else i.appendChild(s(t.src || t, t.mime));
                return i.load(), i.play(), r.fromVideo(i, e)
            }, r.fromUrls = r.fromUrl
        }, {"../utils": 151, "./BaseTexture": 142}],
        147: [function (t, e, i) {
            function r() {
                var t = this;
                this._tick = function (e) {
                    t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._emitter.listeners(o, !0) && (t._requestId = requestAnimationFrame(t._tick)))
                }, this._emitter = new n, this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / s.TARGET_FPMS, this.lastTime = 0, this.speed = 1, this.started = !1
            }

            var s = t("../const"), n = t("eventemitter3"), o = "tick";
            Object.defineProperties(r.prototype, {
                FPS: {
                    get: function () {
                        return 1e3 / this.elapsedMS
                    }
                }, minFPS: {
                    get: function () {
                        return 1e3 / this._maxElapsedMS
                    }, set: function (t) {
                        var e = Math.min(Math.max(0, t) / 1e3, s.TARGET_FPMS);
                        this._maxElapsedMS = 1 / e
                    }
                }
            }), r.prototype._requestIfNeeded = function () {
                null === this._requestId && this._emitter.listeners(o, !0) && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
            }, r.prototype._cancelIfNeeded = function () {
                null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
            }, r.prototype._startIfPossible = function () {
                this.started ? this._requestIfNeeded() : this.autoStart && this.start()
            }, r.prototype.add = function (t, e) {
                return this._emitter.on(o, t, e), this._startIfPossible(), this
            }, r.prototype.addOnce = function (t, e) {
                return this._emitter.once(o, t, e), this._startIfPossible(), this
            }, r.prototype.remove = function (t, e) {
                return this._emitter.off(o, t, e), this._emitter.listeners(o, !0) || this._cancelIfNeeded(), this
            }, r.prototype.start = function () {
                this.started || (this.started = !0, this._requestIfNeeded())
            }, r.prototype.stop = function () {
                this.started && (this.started = !1, this._cancelIfNeeded())
            }, r.prototype.update = function (t) {
                var e;
                t = t || performance.now(), t > this.lastTime ? (e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), this.deltaTime = e * s.TARGET_FPMS * this.speed, this._emitter.emit(o, this.deltaTime)) : this.deltaTime = this.elapsedMS = 0, this.lastTime = t
            }, e.exports = r
        }, {"../const": 78, eventemitter3: 16}],
        148: [function (t, e, i) {
            var r = t("./Ticker"), s = new r;
            s.autoStart = !0, e.exports = {shared: s, Ticker: r}
        }, {"./Ticker": 147}],
        149: [function (t, e, i) {
            var r = function (t) {
                for (var e = 6 * t, i = new Uint16Array(e), r = 0, s = 0; r < e; r += 6, s += 4)i[r + 0] = s + 0, i[r + 1] = s + 1, i[r + 2] = s + 2, i[r + 3] = s + 0, i[r + 4] = s + 2, i[r + 5] = s + 3;
                return i
            };
            e.exports = r
        }, {}],
        150: [function (t, e, i) {
            var r, s = t("url"), n = function (t, e) {
                if (0 === t.indexOf("data:"))return "";
                e = e || window.location, r || (r = document.createElement("a")), r.href = t, t = s.parse(r.href);
                var i = !t.port && "" === e.port || t.port === e.port;
                return t.hostname === e.hostname && i && t.protocol === e.protocol ? "" : "anonymous"
            };
            e.exports = n
        }, {url: 72}],
        151: [function (t, e, i) {
            var r = t("../const"), s = e.exports = {
                _uid: 0,
                _saidHello: !1,
                EventEmitter: t("eventemitter3"),
                pluginTarget: t("./pluginTarget"),
                uid: function () {
                    return ++s._uid
                },
                hex2rgb: function (t, e) {
                    return e = e || [], e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
                },
                hex2string: function (t) {
                    return t = t.toString(16), t = "000000".substr(0, 6 - t.length) + t, "#" + t
                },
                rgb2hex: function (t) {
                    return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
                },
                getResolutionOfUrl: function (t) {
                    var e = r.RETINA_PREFIX.exec(t);
                    return e ? parseFloat(e[1]) : 1
                },
                sayHello: function (t) {
                    if (!s._saidHello) {
                        if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                            var e = ["\n %c %c %c Pixi.js " + r.VERSION + " - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                            window.console.log.apply(console, e)
                        } else window.console && window.console.log("Pixi.js " + r.VERSION + " - " + t + " - http://www.pixijs.com/");
                        s._saidHello = !0
                    }
                },
                isWebGLSupported: function () {
                    var t = {stencil: !0, failIfMajorPerformanceCaveat: !0};
                    try {
                        if (!window.WebGLRenderingContext)return !1;
                        var e = document.createElement("canvas"), i = e.getContext("webgl", t) || e.getContext("experimental-webgl", t), r = !(!i || !i.getContextAttributes().stencil);
                        if (i) {
                            var s = i.getExtension("WEBGL_lose_context");
                            s && s.loseContext()
                        }
                        return i = null, r
                    } catch (n) {
                        return !1
                    }
                },
                sign: function (t) {
                    return t ? t < 0 ? -1 : 1 : 0
                },
                removeItems: function (t, e, i) {
                    var r = t.length;
                    if (!(e >= r || 0 === i)) {
                        i = e + i > r ? r - e : i;
                        for (var s = e, n = r - i; s < n; ++s)t[s] = t[s + i];
                        t.length = n
                    }
                },
                TextureCache: {},
                BaseTextureCache: {}
            }
        }, {"../const": 78, "./pluginTarget": 153, eventemitter3: 16}],
        152: [function (t, e, i) {
            var r = t("ismobilejs"), s = function (t) {
                return r.tablet || r.phone ? 2 : t
            };
            e.exports = s
        }, {ismobilejs: 17}],
        153: [function (t, e, i) {
            function r(t) {
                t.__plugins = {}, t.registerPlugin = function (e, i) {
                    t.__plugins[e] = i
                }, t.prototype.initPlugins = function () {
                    this.plugins = this.plugins || {};
                    for (var e in t.__plugins)this.plugins[e] = new t.__plugins[e](this)
                }, t.prototype.destroyPlugins = function () {
                    for (var t in this.plugins)this.plugins[t].destroy(), this.plugins[t] = null;
                    this.plugins = null
                }
            }

            e.exports = {
                mixin: function (t) {
                    r(t)
                }
            }
        }, {}],
        154: [function (t, e, i) {
            function r(t) {
                var e = (new Error).stack;
                "undefined" == typeof e ? console.warn("Deprecation Warning: ", t) : (e = e.split("\n").splice(3).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cDeprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", t), console.warn(e), console.groupEnd()) : (console.warn("Deprecation Warning: ", t), console.warn(e)))
            }

            var s = t("./core"), n = t("./mesh"), o = t("./particles"), a = t("./extras"), h = t("./filters");
            s.SpriteBatch = function () {
                throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
            }, s.AssetLoader = function () {
                throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.")
            }, Object.defineProperties(s, {
                Stage: {
                    get: function () {
                        return r("You do not need to use a PIXI Stage any more, you can simply render any container."), s.Container
                    }
                }, DisplayObjectContainer: {
                    get: function () {
                        return r("DisplayObjectContainer has been shortened to Container, please use Container from now on."), s.Container
                    }
                }, Strip: {
                    get: function () {
                        return r("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."), n.Mesh
                    }
                }, Rope: {
                    get: function () {
                        return r("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."), n.Rope
                    }
                }, ParticleContainer: {
                    get: function () {
                        return r("The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on."), o.ParticleContainer
                    }
                }, MovieClip: {
                    get: function () {
                        return r("The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on."), a.MovieClip
                    }
                }, TilingSprite: {
                    get: function () {
                        return r("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."), a.TilingSprite
                    }
                }, BitmapText: {
                    get: function () {
                        return r("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."), a.BitmapText
                    }
                }, blendModes: {
                    get: function () {
                        return r("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."), s.BLEND_MODES
                    }
                }, scaleModes: {
                    get: function () {
                        return r("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."), s.SCALE_MODES
                    }
                }, BaseTextureCache: {
                    get: function () {
                        return r("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."), s.utils.BaseTextureCache
                    }
                }, TextureCache: {
                    get: function () {
                        return r("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."), s.utils.TextureCache
                    }
                }, math: {
                    get: function () {
                        return r("The math namespace is deprecated, please access members already accessible on PIXI."), s
                    }
                }, AbstractFilter: {
                    get: function () {
                        return r("AstractFilter has been renamed to Filter, please use PIXI.Filter"), s.Filter
                    }
                }, TransformManual: {
                    get: function () {
                        return r("TransformManual has been renamed to TransformBase, please update your pixi-spine"), s.TransformBase
                    }
                }
            }), s.DisplayObject.prototype.generateTexture = function (t, e, i) {
                return r("generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)"), t.generateTexture(this, e, i)
            }, s.Graphics.prototype.generateTexture = function (t, e) {
                return r("graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture"), this.generateCanvasTexture(t, e)
            }, s.RenderTexture.prototype.render = function (t, e, i, s) {
                this.legacyRenderer.render(t, this, i, e, !s), r("RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)")
            }, s.RenderTexture.prototype.getImage = function (t) {
                return r("RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)"), this.legacyRenderer.extract.image(t)
            }, s.RenderTexture.prototype.getBase64 = function (t) {
                return r("RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)"), this.legacyRenderer.extract.base64(t)
            }, s.RenderTexture.prototype.getCanvas = function (t) {
                return r("RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)"), this.legacyRenderer.extract.canvas(t)
            }, s.RenderTexture.prototype.getPixels = function (t) {
                return r("RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)"), this.legacyRenderer.pixels(t)
            }, s.Sprite.prototype.setTexture = function (t) {
                this.texture = t, r("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")
            }, a.BitmapText.prototype.setText = function (t) {
                this.text = t, r("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")
            }, s.Text.prototype.setText = function (t) {
                this.text = t, r("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")
            }, s.Text.prototype.setStyle = function (t) {
                this.style = t, r("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")
            }, Object.defineProperties(s.TextStyle.prototype, {
                font: {
                    get: function () {
                        r("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on");
                        var t = "number" == typeof this._fontSize ? this._fontSize + "px" : this._fontSize;
                        return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + t + " " + this._fontFamily
                    }, set: function (t) {
                        r("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on"), t.indexOf("italic") > 1 ? this._fontStyle = "italic" : t.indexOf("oblique") > -1 ? this._fontStyle = "oblique" : this._fontStyle = "normal", t.indexOf("small-caps") > -1 ? this._fontVariant = "small-caps" : this._fontVariant = "normal";
                        var e, i = t.split(" "), s = -1;
                        for (this._fontSize = 26, e = 0; e < i.length; ++e)if (i[e].match(/(px|pt|em|%)/)) {
                            s = e, this._fontSize = i[e];
                            break
                        }
                        for (this._fontWeight = "normal", e = 0; e < s; ++e)if (i[e].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
                            this._fontWeight = i[e];
                            break
                        }
                        if (s > -1 && s < i.length - 1) {
                            for (this._fontFamily = "", e = s + 1; e < i.length; ++e)this._fontFamily += i[e] + " ";
                            this._fontFamily = this._fontFamily.slice(0, -1)
                        } else this._fontFamily = "Arial";
                        this.styleID++
                    }
                }
            }), s.Texture.prototype.setFrame = function (t) {
                this.frame = t, r("setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;")
            }, Object.defineProperties(h, {
                AbstractFilter: {
                    get: function () {
                        return r("AstractFilter has been renamed to Filter, please use PIXI.Filter"), s.AbstractFilter
                    }
                }, SpriteMaskFilter: {
                    get: function () {
                        return r("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."), s.SpriteMaskFilter
                    }
                }
            }), s.utils.uuid = function () {
                return r("utils.uuid() is deprecated, please use utils.uid() from now on."), s.utils.uid()
            }, s.utils.canUseNewCanvasBlendModes = function () {
                return r("utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on"), s.CanvasTinter.canUseMultiply
            }
        }, {"./core": 97, "./extras": 164, "./filters": 175, "./mesh": 191, "./particles": 194}],
        155: [function (t, e, i) {
            function r(t) {
                this.renderer = t, t.extract = this
            }

            var s = t("../../core"), n = new s.Rectangle;
            r.prototype.constructor = r, e.exports = r, r.prototype.image = function (t) {
                var e = new Image;
                return e.src = this.base64(t), e
            }, r.prototype.base64 = function (t) {
                return this.canvas(t).toDataURL()
            }, r.prototype.canvas = function (t) {
                var e, i, r, o, a = this.renderer;
                t && (o = t instanceof s.RenderTexture ? t : a.generateTexture(t)), o ? (e = o.baseTexture._canvasRenderTarget.context, i = o.baseTexture._canvasRenderTarget.resolution, r = o.frame) : (e = a.rootContext, i = a.rootResolution, r = n, r.width = this.renderer.width, r.height = this.renderer.height);
                var h = r.width * i, l = r.height * i, c = new s.CanvasRenderTarget(h, l), u = e.getImageData(r.x * i, r.y * i, h, l);
                return c.context.putImageData(u, 0, 0), c.canvas
            }, r.prototype.pixels = function (t) {
                var e, i, r, o, a = this.renderer;
                return t && (o = t instanceof s.RenderTexture ? t : a.generateTexture(t)), o ? (e = o.baseTexture._canvasRenderTarget.context, i = o.baseTexture._canvasRenderTarget.resolution, r = o.frame) : (e = a.rootContext, i = a.rootResolution, r = n, r.width = a.width, r.height = a.height), e.getImageData(0, 0, r.width * i, r.height * i).data
            }, r.prototype.destroy = function () {
                this.renderer.extract = null, this.renderer = null
            }, s.CanvasRenderer.registerPlugin("extract", r)
        }, {"../../core": 97}],
        156: [function (t, e, i) {
            e.exports = {webGL: t("./webgl/WebGLExtract"), canvas: t("./canvas/CanvasExtract")}
        }, {"./canvas/CanvasExtract": 155, "./webgl/WebGLExtract": 157}],
        157: [function (t, e, i) {
            function r(t) {
                this.renderer = t, t.extract = this
            }

            var s = t("../../core"), n = new s.Rectangle;
            r.prototype.constructor = r, e.exports = r, r.prototype.image = function (t) {
                var e = new Image;
                return e.src = this.base64(t), e
            }, r.prototype.base64 = function (t) {
                return this.canvas(t).toDataURL()
            }, r.prototype.canvas = function (t) {
                var e, i, r, o, a = this.renderer, h = !1;
                t && (o = t instanceof s.RenderTexture ? t : this.renderer.generateTexture(t)), o ? (e = o.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], i = e.resolution, r = o.frame, h = !1) : (e = this.renderer.rootRenderTarget, i = e.resolution, h = !0, r = n, r.width = e.size.width, r.height = e.size.height);
                var l = r.width * i, c = r.height * i, u = new s.CanvasRenderTarget(l, c);
                if (e) {
                    a.bindRenderTarget(e);
                    var d = new Uint8Array(4 * l * c), p = a.gl;
                    p.readPixels(r.x * i, r.y * i, l, c, p.RGBA, p.UNSIGNED_BYTE, d);
                    var f = u.context.getImageData(0, 0, l, c);
                    f.data.set(d), u.context.putImageData(f, 0, 0), h && (u.context.scale(1, -1), u.context.drawImage(u.canvas, 0, -c))
                }
                return u.canvas
            }, r.prototype.pixels = function (t) {
                var e, i, r, o, a = this.renderer;
                t && (o = t instanceof s.RenderTexture ? t : this.renderer.generateTexture(t)), o ? (e = o.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], i = e.resolution, r = o.frame) : (e = this.renderer.rootRenderTarget, i = e.resolution, r = n, r.width = e.size.width, r.height = e.size.height);
                var h = r.width * i, l = r.height * i, c = new Uint8Array(4 * h * l);
                if (e) {
                    a.bindRenderTarget(e);
                    var u = a.gl;
                    u.readPixels(r.x * i, r.y * i, h, l, u.RGBA, u.UNSIGNED_BYTE, c)
                }
                return c
            }, r.prototype.destroy = function () {
                this.renderer.extract = null, this.renderer = null
            }, s.WebGLRenderer.registerPlugin("extract", r)
        }, {"../../core": 97}],
        158: [function (t, e, i) {
            function r(t, e) {
                s.Container.call(this), e = e || {}, this.textWidth = 0, this.textHeight = 0, this._glyphs = [], this._font = {
                    tint: void 0 !== e.tint ? e.tint : 16777215,
                    align: e.align || "left",
                    name: null,
                    size: 0
                }, this.font = e.font, this._text = t, this.maxWidth = 0, this.maxLineHeight = 0, this._anchor = new n(this.makeDirty, this, 0, 0), this.dirty = !1, this.updateText()
            }

            var s = t("../core"), n = t("../core/math/ObservablePoint");
            r.prototype = Object.create(s.Container.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                tint: {
                    get: function () {
                        return this._font.tint
                    }, set: function (t) {
                        this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0
                    }
                }, align: {
                    get: function () {
                        return this._font.align
                    }, set: function (t) {
                        this._font.align = t || "left", this.dirty = !0
                    }
                }, anchor: {
                    get: function () {
                        return this._anchor
                    }, set: function (t) {
                        "number" == typeof t ? this._anchor.set(t) : this._anchor.copy(t)
                    }
                }, font: {
                    get: function () {
                        return this._font
                    }, set: function (t) {
                        t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = t.length >= 2 ? parseInt(t[0], 10) : r.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0)
                    }
                }, text: {
                    get: function () {
                        return this._text
                    }, set: function (t) {
                        t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0)
                    }
                }
            }), r.prototype.updateText = function () {
                for (var t = r.fonts[this._font.name], e = new s.Point, i = null, n = [], o = 0, a = 0, h = [], l = 0, c = this._font.size / t.size, u = -1, d = 0, p = 0, f = 0; f < this.text.length; f++) {
                    var g = this.text.charCodeAt(f);
                    if (/(\s)/.test(this.text.charAt(f)) && (u = f, d = o), /(?:\r\n|\r|\n)/.test(this.text.charAt(f)))h.push(o), a = Math.max(a, o), l++, e.x = 0, e.y += t.lineHeight, i = null; else if (u !== -1 && this.maxWidth > 0 && e.x * c > this.maxWidth)s.utils.removeItems(n, u, f - u), f = u, u = -1, h.push(d), a = Math.max(a, d), l++, e.x = 0, e.y += t.lineHeight, i = null; else {
                        var m = t.chars[g];
                        m && (i && m.kerning[i] && (e.x += m.kerning[i]), n.push({
                            texture: m.texture,
                            line: l,
                            charCode: g,
                            position: new s.Point(e.x + m.xOffset, e.y + m.yOffset)
                        }), o = e.x + (m.texture.width + m.xOffset), e.x += m.xAdvance, p = Math.max(p, m.yOffset + m.texture.height), i = g)
                    }
                }
                h.push(o), a = Math.max(a, o);
                var v = [];
                for (f = 0; f <= l; f++) {
                    var _ = 0;
                    "right" === this._font.align ? _ = a - h[f] : "center" === this._font.align && (_ = (a - h[f]) / 2), v.push(_)
                }
                var y = n.length, x = this.tint;
                for (f = 0; f < y; f++) {
                    var b = this._glyphs[f];
                    b ? b.texture = n[f].texture : (b = new s.Sprite(n[f].texture), this._glyphs.push(b)), b.position.x = (n[f].position.x + v[n[f].line]) * c, b.position.y = n[f].position.y * c, b.scale.x = b.scale.y = c, b.tint = x, b.parent || this.addChild(b)
                }
                for (f = y; f < this._glyphs.length; ++f)this.removeChild(this._glyphs[f]);
                if (this.textWidth = a * c, this.textHeight = (e.y + t.lineHeight) * c, 0 !== this.anchor.x || 0 !== this.anchor.y)for (f = 0; f < y; f++)this._glyphs[f].x -= this.textWidth * this.anchor.x, this._glyphs[f].y -= this.textHeight * this.anchor.y;
                this.maxLineHeight = p * c
            }, r.prototype.updateTransform = function () {
                this.validate(), this.containerUpdateTransform()
            }, r.prototype.getLocalBounds = function () {
                return this.validate(), s.Container.prototype.getLocalBounds.call(this)
            }, r.prototype.validate = function () {
                this.dirty && (this.updateText(), this.dirty = !1)
            }, r.prototype.makeDirty = function () {
                this.dirty = !0
            }, r.fonts = {}
        }, {"../core": 97, "../core/math/ObservablePoint": 100}],
        159: [function (t, e, i) {
            function r(t) {
                s.Sprite.call(this, t[0] instanceof s.Texture ? t[0] : t[0].texture), this._textures = null, this._durations = null, this.textures = t, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this._currentTime = 0, this.playing = !1
            }

            var s = t("../core");
            r.prototype = Object.create(s.Sprite.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                totalFrames: {
                    get: function () {
                        return this._textures.length
                    }
                }, textures: {
                    get: function () {
                        return this._textures
                    }, set: function (t) {
                        if (t[0] instanceof s.Texture)this._textures = t, this._durations = null; else {
                            this._textures = [], this._durations = [];
                            for (var e = 0; e < t.length; e++)this._textures.push(t[e].texture), this._durations.push(t[e].time)
                        }
                    }
                }, currentFrame: {
                    get: function () {
                        var t = Math.floor(this._currentTime) % this._textures.length;
                        return t < 0 && (t += this._textures.length), t
                    }
                }
            }), r.prototype.stop = function () {
                this.playing && (this.playing = !1, s.ticker.shared.remove(this.update, this))
            }, r.prototype.play = function () {
                this.playing || (this.playing = !0, s.ticker.shared.add(this.update, this))
            }, r.prototype.gotoAndStop = function (t) {
                this.stop(), this._currentTime = t, this._texture = this._textures[this.currentFrame], this._textureID = -1
            }, r.prototype.gotoAndPlay = function (t) {
                this._currentTime = t, this.play()
            }, r.prototype.update = function (t) {
                var e = this.animationSpeed * t;
                if (null !== this._durations) {
                    var i = this._currentTime % 1 * this._durations[this.currentFrame];
                    for (i += e / 60 * 1e3; i < 0;)this._currentTime--, i += this._durations[this.currentFrame];
                    var r = Math.sign(this.animationSpeed * t);
                    for (this._currentTime = Math.floor(this._currentTime); i >= this._durations[this.currentFrame];)i -= this._durations[this.currentFrame] * r, this._currentTime += r;
                    this._currentTime += i / this._durations[this.currentFrame]
                } else this._currentTime += e;
                this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : (this._texture = this._textures[this.currentFrame], this._textureID = -1)
            }, r.prototype.destroy = function () {
                this.stop(), s.Sprite.prototype.destroy.call(this)
            }, r.fromFrames = function (t) {
                for (var e = [], i = 0; i < t.length; ++i)e.push(s.Texture.fromFrame(t[i]));
                return new r(e)
            }, r.fromImages = function (t) {
                for (var e = [], i = 0; i < t.length; ++i)e.push(s.Texture.fromImage(t[i]));
                return new r(e)
            }
        }, {"../core": 97}],
        160: [function (t, e, i) {
            function r(t, e, i) {
                s.Sprite.call(this, t), this.tileScale = new s.Point(1, 1), this.tilePosition = new s.Point(0, 0), this._width = e || 100, this._height = i || 100, this._uvs = new s.TextureUvs, this._canvasPattern = null, this._glDatas = []
            }

            var s = t("../core"), n = new s.Point, o = t("../core/textures/Texture"), a = t("../core/sprites/canvas/CanvasTinter"), h = t("./webgl/TilingShader"), l = new Float32Array(4);
            r.prototype = Object.create(s.Sprite.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                width: {
                    get: function () {
                        return this._width
                    }, set: function (t) {
                        this._width = t
                    }
                }, height: {
                    get: function () {
                        return this._height
                    }, set: function (t) {
                        this._height = t
                    }
                }
            }), r.prototype._onTextureUpdate = function () {
            }, r.prototype._renderWebGL = function (t) {
                var e = this._texture;
                if (e && e._uvs) {
                    t.flush();
                    var i = t.gl, r = this._glDatas[t.CONTEXT_UID];
                    r || (r = {
                        shader: new h(i),
                        quad: new s.Quad(i)
                    }, this._glDatas[t.CONTEXT_UID] = r, r.quad.initVao(r.shader));
                    var n = r.quad.vertices;
                    n[0] = n[6] = this._width * -this.anchor.x, n[1] = n[3] = this._height * -this.anchor.y, n[2] = n[4] = this._width * (1 - this.anchor.x), n[5] = n[7] = this._height * (1 - this.anchor.y), r.quad.upload(), t.bindShader(r.shader);
                    var o = e._uvs, a = e._frame.width, c = e._frame.height, u = e.baseTexture.width, d = e.baseTexture.height, p = r.shader.uniforms.uPixelSize;
                    p[0] = 1 / u, p[1] = 1 / d, r.shader.uniforms.uPixelSize = p;
                    var f = r.shader.uniforms.uFrame;
                    f[0] = o.x0, f[1] = o.y0, f[2] = o.x1 - o.x0, f[3] = o.y2 - o.y0, r.shader.uniforms.uFrame = f;
                    var g = r.shader.uniforms.uTransform;
                    g[0] = this.tilePosition.x % (a * this.tileScale.x) / this._width, g[1] = this.tilePosition.y % (c * this.tileScale.y) / this._height, g[2] = u / this._width * this.tileScale.x, g[3] = d / this._height * this.tileScale.y, r.shader.uniforms.uTransform = g, r.shader.uniforms.translationMatrix = this.worldTransform.toArray(!0);
                    var m = l;
                    s.utils.hex2rgb(this.tint, m), m[3] = this.worldAlpha, r.shader.uniforms.uColor = m, t.bindTexture(this._texture, 0), t.state.setBlendMode(this.blendMode), r.quad.draw()
                }
            }, r.prototype._renderCanvas = function (t) {
                var e = this._texture;
                if (e.baseTexture.hasLoaded) {
                    var i = t.context, r = this.worldTransform, n = t.resolution, o = e.baseTexture, h = this.tilePosition.x / this.tileScale.x % e._frame.width, l = this.tilePosition.y / this.tileScale.y % e._frame.height;
                    if (!this._canvasPattern) {
                        var c = new s.CanvasRenderTarget(e._frame.width, e._frame.height);
                        16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = a.getTintedTexture(this, this.tint)), c.context.drawImage(this.tintedTexture, 0, 0)) : c.context.drawImage(o.source, -e._frame.x, -e._frame.y), this._canvasPattern = c.context.createPattern(c.canvas, "repeat")
                    }
                    i.globalAlpha = this.worldAlpha, i.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * n, r.ty * n), i.scale(this.tileScale.x, this.tileScale.y), i.translate(h + this.anchor.x * -this._width, l + this.anchor.y * -this._height);
                    var u = t.blendModes[this.blendMode];
                    u !== t.context.globalCompositeOperation && (i.globalCompositeOperation = u), i.fillStyle = this._canvasPattern, i.fillRect(-h, -l, this._width / this.tileScale.x, this._height / this.tileScale.y)
                }
            }, r.prototype.getBounds = function () {
                var t, e, i, r, s = this._width, n = this._height, o = s * (1 - this.anchor.x), a = s * -this.anchor.x, h = n * (1 - this.anchor.y), l = n * -this.anchor.y, c = this.worldTransform, u = c.a, d = c.b, p = c.c, f = c.d, g = c.tx, m = c.ty, v = u * a + p * l + g, _ = f * l + d * a + m, y = u * o + p * l + g, x = f * l + d * o + m, b = u * o + p * h + g, w = f * h + d * o + m, T = u * a + p * h + g, L = f * h + d * a + m;
                t = v, t = y < t ? y : t, t = b < t ? b : t, t = T < t ? T : t, i = _, i = x < i ? x : i, i = w < i ? w : i, i = L < i ? L : i, e = v, e = y > e ? y : e, e = b > e ? b : e, e = T > e ? T : e, r = _, r = x > r ? x : r, r = w > r ? w : r, r = L > r ? L : r;
                var S = this._bounds;
                return S.x = t, S.width = e - t, S.y = i, S.height = r - i, this._currentBounds = S, S
            }, r.prototype.containsPoint = function (t) {
                this.worldTransform.applyInverse(t, n);
                var e, i = this._width, r = this._height, s = -i * this.anchor.x;
                return n.x > s && n.x < s + i && (e = -r * this.anchor.y, n.y > e && n.y < e + r)
            }, r.prototype.destroy = function () {
                s.Sprite.prototype.destroy.call(this), this.tileScale = null, this._tileScaleOffset = null, this.tilePosition = null, this._uvs = null
            }, r.from = function (t, e, i) {
                return new r(o.from(t), e, i)
            }, r.fromFrame = function (t, e, i) {
                var n = s.utils.TextureCache[t];
                if (!n)throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
                return new r(n, e, i)
            }, r.fromImage = function (t, e, i, n, o) {
                return new r(s.Texture.fromImage(t, n, o), e, i)
            }
        }, {
            "../core": 97,
            "../core/sprites/canvas/CanvasTinter": 135,
            "../core/textures/Texture": 144,
            "./webgl/TilingShader": 165
        }],
        161: [function (t, e, i) {
            var r = t("../core"), s = r.DisplayObject, n = new r.Matrix;
            s.prototype._cacheAsBitmap = !1, s.prototype._cacheData = !1;
            var o = function () {
                this.originalRenderWebGL = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null
            };
            Object.defineProperties(s.prototype, {
                cacheAsBitmap: {
                    get: function () {
                        return this._cacheAsBitmap
                    }, set: function (t) {
                        if (this._cacheAsBitmap !== t) {
                            this._cacheAsBitmap = t;
                            var e;
                            t ? (this._cacheData || (this._cacheData = new o), e = this._cacheData, e.originalRenderWebGL = this.renderWebGL, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this._calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (e = this._cacheData, e.sprite && this._destroyCachedDisplayObject(), this.renderWebGL = e.originalRenderWebGL, this.renderCanvas = e.originalRenderCanvas, this._calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea)
                        }
                    }
                }
            }), s.prototype._renderCachedWebGL = function (t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite._transformID = -1, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderWebGL(t))
            }, s.prototype._initCachedDisplayObject = function (t) {
                if (!this._cacheData || !this._cacheData.sprite) {
                    var e = this.alpha;
                    this.alpha = 1, t.currentRenderer.flush();
                    var i = this.getLocalBounds().clone();
                    if (this._filters) {
                        var s = this._filters[0].padding;
                        i.pad(s)
                    }
                    var o = t._activeRenderTarget, a = t.filterManager.filterStack, h = r.RenderTexture.create(0 | i.width, 0 | i.height), l = n;
                    l.tx = -i.x, l.ty = -i.y, this.transform.worldTransform.identity(), this.renderWebGL = this._cacheData.originalRenderWebGL, t.render(this, h, !0, l, !0), t.bindRenderTarget(o), t.filterManager.filterStack = a, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this._mask = null, this.filterArea = null;
                    var c = new r.Sprite(h);
                    c.transform.worldTransform = this.transform.worldTransform, c.anchor.x = -(i.x / i.width), c.anchor.y = -(i.y / i.height), c.alpha = e, c._bounds = this._bounds, this._calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._cacheData.sprite = c, this.transform._parentID = -1, this.updateTransform(), this.containsPoint = c.containsPoint.bind(c)
                }
            }, s.prototype._renderCachedCanvas = function (t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite.renderCanvas(t))
            }, s.prototype._initCachedDisplayObjectCanvas = function (t) {
                if (!this._cacheData || !this._cacheData.sprite) {
                    var e = this.getLocalBounds(), i = this.alpha;
                    this.alpha = 1;
                    var s = t.context, o = new r.RenderTexture.create(0 | e.width, 0 | e.height), a = n;
                    this.transform.worldTransform.copy(a), a.invert(), a.tx -= e.x, a.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, o, !0, a, !1), t.context = s, this.renderCanvas = this._renderCachedCanvas, this._calculateBounds = this._calculateCachedBounds, this._mask = null, this.filterArea = null;
                    var h = new r.Sprite(o);
                    h.transform.worldTransform = this.transform.worldTransform, h.anchor.x = -(e.x / e.width), h.anchor.y = -(e.y / e.height), h._bounds = this._bounds, h.alpha = i, this.updateTransform(), this.updateTransform = this.displayObjectUpdateTransform, this._cacheData.sprite = h, this.containsPoint = h.containsPoint.bind(h)
                }
            }, s.prototype._calculateCachedBounds = function () {
                return this._cacheData.sprite._calculateBounds()
            }, s.prototype._getCachedLocalBounds = function () {
                return this._cacheData.sprite.getLocalBounds()
            }, s.prototype._destroyCachedDisplayObject = function () {
                this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null
            }, s.prototype._cacheAsBitmapDestroy = function () {
                this.cacheAsBitmap = !1, this.destroy()
            }
        }, {"../core": 97}],
        162: [function (t, e, i) {
            var r = t("../core");
            r.DisplayObject.prototype.name = null, r.Container.prototype.getChildByName = function (t) {
                for (var e = 0; e < this.children.length; e++)if (this.children[e].name === t)return this.children[e];
                return null
            }
        }, {"../core": 97}],
        163: [function (t, e, i) {
            var r = t("../core");
            r.DisplayObject.prototype.getGlobalPosition = function (t) {
                return t = t || new r.Point, this.parent ? (this.displayObjectUpdateTransform(), t.x = this.worldTransform.tx, t.y = this.worldTransform.ty) : (t.x = this.position.x, t.y = this.position.y), t
            }
        }, {"../core": 97}],
        164: [function (t, e, i) {
            t("./cacheAsBitmap"), t("./getChildByName"), t("./getGlobalPosition"), e.exports = {
                MovieClip: t("./MovieClip"),
                TilingSprite: t("./TilingSprite"),
                BitmapText: t("./BitmapText")
            }
        }, {
            "./BitmapText": 158,
            "./MovieClip": 159,
            "./TilingSprite": 160,
            "./cacheAsBitmap": 161,
            "./getChildByName": 162,
            "./getGlobalPosition": 163
        }],
        165: [function (t, e, i) {
            function r(t) {
                s.call(this, t, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\n\nuniform vec4 uFrame;\nuniform vec4 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vec2 coord = aTextureCoord;\n    coord -= uTransform.xy;\n    coord /= uTransform.zw;\n    vTextureCoord = coord;\n}\n", "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uFrame;\nuniform vec2 uPixelSize;\n\nvoid main(void)\n{\n\n   \tvec2 coord = mod(vTextureCoord, uFrame.zw);\n   \tcoord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);\n   \tcoord += uFrame.xy;\n\n   \tvec4 sample = texture2D(uSampler, coord);\n  \tvec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n\n   \tgl_FragColor = sample * color ;\n}\n")
            }

            var s = t("../../core/Shader");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r
        }, {"../../core/Shader": 77}],
        166: [function (t, e, i) {
            function r(t, e, i) {
                s.Filter.call(this), this.blurXFilter = new n, this.blurYFilter = new o, this.resolution = 1, this.padding = 0, this.resolution = i || 1, this.quality = e || 4, this.blur = t || 8
            }

            var s = t("../../core"), n = t("./BlurXFilter"), o = t("./BlurYFilter");
            r.prototype = Object.create(s.Filter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.apply = function (t, e, i) {
                var r = t.getRenderTarget(!0);
                this.blurXFilter.apply(t, e, r, !0), this.blurYFilter.apply(t, r, i, !1), t.returnRenderTarget(r)
            }, Object.defineProperties(r.prototype, {
                blur: {
                    get: function () {
                        return this.blurXFilter.blur
                    }, set: function (t) {
                        this.blurXFilter.blur = this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength))
                    }
                }, quality: {
                    get: function () {
                        return this.blurXFilter.quality
                    }, set: function (t) {
                        this.blurXFilter.quality = this.blurYFilter.quality = t
                    }
                }, blurX: {
                    get: function () {
                        return this.blurXFilter.blur
                    }, set: function (t) {
                        this.blurXFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength))
                    }
                }, blurY: {
                    get: function () {
                        return this.blurYFilter.blur
                    }, set: function (t) {
                        this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength))
                    }
                }
            })
        }, {"../../core": 97, "./BlurXFilter": 167, "./BlurYFilter": 168}],
        167: [function (t, e, i) {
            function r(t, e, i) {
                var r = n(5, !0), a = o(5);
                s.Filter.call(this, r, a), this.resolution = i || 1, this._quality = 0, this.quality = e || 4, this.strength = t || 8, this.firstRun = !0
            }

            var s = t("../../core"), n = t("./generateBlurVertSource"), o = t("./generateBlurFragSource"), a = t("./getMaxBlurKernelSize");
            r.prototype = Object.create(s.Filter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.apply = function (t, e, i, r) {
                if (this.firstRun) {
                    var s = t.renderer.gl, h = a(s);
                    this.vertexSrc = n(h, !0), this.fragmentSrc = o(h), this.firstRun = !1
                }
                if (this.uniforms.strength = 1 / i.size.width * (i.size.width / e.size.width), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes)t.applyFilter(this, e, i, r); else {
                    for (var l = t.getRenderTarget(!0), c = e, u = l, d = 0; d < this.passes - 1; d++) {
                        t.applyFilter(this, c, u, !0);
                        var p = u;
                        u = c, c = p
                    }
                    t.applyFilter(this, c, i, r), t.returnRenderTarget(l)
                }
            }, Object.defineProperties(r.prototype, {
                blur: {
                    get: function () {
                        return this.strength
                    }, set: function (t) {
                        this.padding = 2 * Math.abs(t), this.strength = t
                    }
                }, quality: {
                    get: function () {
                        return this._quality
                    }, set: function (t) {
                        this._quality = t, this.passes = t
                    }
                }
            })
        }, {
            "../../core": 97,
            "./generateBlurFragSource": 169,
            "./generateBlurVertSource": 170,
            "./getMaxBlurKernelSize": 171
        }],
        168: [function (t, e, i) {
            function r(t, e, i) {
                var r = n(5, !1), a = o(5);
                s.Filter.call(this, r, a), this.resolution = i || 1, this._quality = 0, this.quality = e || 4, this.strength = t || 8, this.firstRun = !0
            }

            var s = t("../../core"), n = t("./generateBlurVertSource"), o = t("./generateBlurFragSource"), a = t("./getMaxBlurKernelSize");
            r.prototype = Object.create(s.Filter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.apply = function (t, e, i, r) {
                if (this.firstRun) {
                    var s = t.renderer.gl, h = a(s);
                    this.vertexSrc = n(h, !1), this.fragmentSrc = o(h), this.firstRun = !1
                }
                if (this.uniforms.strength = 1 / i.size.height * (i.size.height / e.size.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes)t.applyFilter(this, e, i, r); else {
                    for (var l = t.getRenderTarget(!0), c = e, u = l, d = 0; d < this.passes - 1; d++) {
                        t.applyFilter(this, c, u, !0);
                        var p = u;
                        u = c, c = p
                    }
                    t.applyFilter(this, c, i, r), t.returnRenderTarget(l)
                }
            }, Object.defineProperties(r.prototype, {
                blur: {
                    get: function () {
                        return this.strength
                    }, set: function (t) {
                        this.padding = 2 * Math.abs(t), this.strength = t
                    }
                }, quality: {
                    get: function () {
                        return this._quality
                    }, set: function (t) {
                        this._quality = t, this.passes = t
                    }
                }
            })
        }, {
            "../../core": 97,
            "./generateBlurFragSource": 169,
            "./generateBlurVertSource": 170,
            "./getMaxBlurKernelSize": 171
        }],
        169: [function (t, e, i) {
            var r = {
                5: [.153388, .221461, .250301],
                7: [.071303, .131514, .189879, .214607],
                9: [.028532, .067234, .124009, .179044, .20236],
                11: [.0093, .028002, .065984, .121703, .175713, .198596],
                13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
                15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
            }, s = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "\tgl_FragColor = vec4(0.0);", "\t%blur%", "}"].join("\n"), n = function (t) {
                for (var e, i = r[t], n = i.length, o = s, a = "", h = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;", l = 0; l < t; l++) {
                    var c = h.replace("%index%", l);
                    e = l, l >= n && (e = t - l - 1), c = c.replace("%value%", i[e]), a += c, a += "\n"
                }
                return o = o.replace("%blur%", a), o = o.replace("%size%", t)
            };
            e.exports = n
        }, {}],
        170: [function (t, e, i) {
            var r = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float strength;", "uniform mat3 projectionMatrix;", "varying vec2 vBlurTexCoords[%size%];", "void main(void)", "{", "gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);", "%blur%", "}"].join("\n"), s = function (t, e) {
                var i, s, n = Math.ceil(t / 2), o = r, a = "";
                i = e ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
                for (var h = 0; h < t; h++) {
                    var l = i.replace("%index%", h);
                    s = h, h >= n && (s = t - h - 1), l = l.replace("%sampleIndex%", h - (n - 1) + ".0"), a += l, a += "\n"
                }
                return o = o.replace("%blur%", a), o = o.replace("%size%", t)
            };
            e.exports = s
        }, {}],
        171: [function (t, e, i) {
            var r = function (t) {
                for (var e = t.getParameter(t.MAX_VARYING_VECTORS), i = 15; i > e;)i -= 2;
                return i
            };
            e.exports = r
        }, {}],
        172: [function (t, e, i) {
            function r() {
                s.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4] * c.a;\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9] * c.a;\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14] * c.a;\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19] * c.a;\n\n//    gl_FragColor = vec4(m[0]);\n}\n"), this.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
            }

            var s = t("../../core");
            r.prototype = Object.create(s.Filter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype._loadMatrix = function (t, e) {
                e = !!e;
                var i = t;
                e && (this._multiply(i, this.uniforms.m, t), i = this._colorMatrix(i)), this.uniforms.m = i
            }, r.prototype._multiply = function (t, e, i) {
                return t[0] = e[0] * i[0] + e[1] * i[5] + e[2] * i[10] + e[3] * i[15], t[1] = e[0] * i[1] + e[1] * i[6] + e[2] * i[11] + e[3] * i[16], t[2] = e[0] * i[2] + e[1] * i[7] + e[2] * i[12] + e[3] * i[17], t[3] = e[0] * i[3] + e[1] * i[8] + e[2] * i[13] + e[3] * i[18], t[4] = e[0] * i[4] + e[1] * i[9] + e[2] * i[14] + e[3] * i[19], t[5] = e[5] * i[0] + e[6] * i[5] + e[7] * i[10] + e[8] * i[15], t[6] = e[5] * i[1] + e[6] * i[6] + e[7] * i[11] + e[8] * i[16], t[7] = e[5] * i[2] + e[6] * i[7] + e[7] * i[12] + e[8] * i[17], t[8] = e[5] * i[3] + e[6] * i[8] + e[7] * i[13] + e[8] * i[18], t[9] = e[5] * i[4] + e[6] * i[9] + e[7] * i[14] + e[8] * i[19], t[10] = e[10] * i[0] + e[11] * i[5] + e[12] * i[10] + e[13] * i[15], t[11] = e[10] * i[1] + e[11] * i[6] + e[12] * i[11] + e[13] * i[16], t[12] = e[10] * i[2] + e[11] * i[7] + e[12] * i[12] + e[13] * i[17], t[13] = e[10] * i[3] + e[11] * i[8] + e[12] * i[13] + e[13] * i[18], t[14] = e[10] * i[4] + e[11] * i[9] + e[12] * i[14] + e[13] * i[19], t[15] = e[15] * i[0] + e[16] * i[5] + e[17] * i[10] + e[18] * i[15], t[16] = e[15] * i[1] + e[16] * i[6] + e[17] * i[11] + e[18] * i[16], t[17] = e[15] * i[2] + e[16] * i[7] + e[17] * i[12] + e[18] * i[17], t[18] = e[15] * i[3] + e[16] * i[8] + e[17] * i[13] + e[18] * i[18], t[19] = e[15] * i[4] + e[16] * i[9] + e[17] * i[14] + e[18] * i[19], t
            }, r.prototype._colorMatrix = function (t) {
                var e = new Float32Array(t);
                return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
            }, r.prototype.brightness = function (t, e) {
                var i = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, r.prototype.greyscale = function (t, e) {
                var i = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, r.prototype.grayscale = r.prototype.greyscale, r.prototype.blackAndWhite = function (t) {
                var e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.hue = function (t, e) {
                t = (t || 0) / 180 * Math.PI;
                var i = Math.cos(t), r = Math.sin(t), s = Math.sqrt, n = 1 / 3, o = s(n), a = i + (1 - i) * n, h = n * (1 - i) - o * r, l = n * (1 - i) + o * r, c = n * (1 - i) + o * r, u = i + n * (1 - i), d = n * (1 - i) - o * r, p = n * (1 - i) - o * r, f = n * (1 - i) + o * r, g = i + n * (1 - i), m = [a, h, l, 0, 0, c, u, d, 0, 0, p, f, g, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(m, e)
            }, r.prototype.contrast = function (t, e) {
                var i = (t || 0) + 1, r = -128 * (i - 1), s = [i, 0, 0, 0, r, 0, i, 0, 0, r, 0, 0, i, 0, r, 0, 0, 0, 1, 0];
                this._loadMatrix(s, e)
            }, r.prototype.saturate = function (t, e) {
                var i = 2 * (t || 0) / 3 + 1, r = (i - 1) * -.5, s = [i, r, r, 0, 0, r, i, r, 0, 0, r, r, i, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(s, e)
            }, r.prototype.desaturate = function () {
                this.saturate(-1)
            }, r.prototype.negative = function (t) {
                var e = [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.sepia = function (t) {
                var e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.technicolor = function (t) {
                var e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.polaroid = function (t) {
                var e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.toBGR = function (t) {
                var e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.kodachrome = function (t) {
                var e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.browni = function (t) {
                var e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.vintage = function (t) {
                var e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.colorTone = function (t, e, i, r, s) {
                t = t || .2, e = e || .15, i = i || 16770432, r = r || 3375104;
                var n = (i >> 16 & 255) / 255, o = (i >> 8 & 255) / 255, a = (255 & i) / 255, h = (r >> 16 & 255) / 255, l = (r >> 8 & 255) / 255, c = (255 & r) / 255, u = [.3, .59, .11, 0, 0, n, o, a, t, 0, h, l, c, e, 0, n - h, o - l, a - c, 0, 0];
                this._loadMatrix(u, s)
            }, r.prototype.night = function (t, e) {
                t = t || .1;
                var i = [t * -2, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, r.prototype.predator = function (t, e) {
                var i = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, r.prototype.lsd = function (t) {
                var e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.reset = function () {
                var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(t, !1)
            }, Object.defineProperties(r.prototype, {
                matrix: {
                    get: function () {
                        return this.uniforms.m
                    }, set: function (t) {
                        this.uniforms.m = t
                    }
                }
            })
        }, {"../../core": 97}],
        173: [function (t, e, i) {
            function r(t, e) {
                var i = new s.Matrix;
                t.renderable = !1, s.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}", "#define GLSLIFY 1\nvarying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n"), this.maskSprite = t, this.maskMatrix = i, this.uniforms.mapSampler = t.texture, this.uniforms.filterMatrix = i.toArray(!0), this.uniforms.scale = {
                    x: 1,
                    y: 1
                }, null !== e && void 0 !== e || (e = 20), this.scale = new s.Point(e, e)
            }

            var s = t("../../core");
            r.prototype = Object.create(s.Filter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.apply = function (t, e, i) {
                var r = 1 / i.destinationFrame.width * (i.size.width / e.size.width);
                this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x * r, this.uniforms.scale.y = this.scale.y * r,
                    t.applyFilter(this, e, i)
            }, Object.defineProperties(r.prototype, {
                map: {
                    get: function () {
                        return this.uniforms.mapSampler
                    }, set: function (t) {
                        this.uniforms.mapSampler = t
                    }
                }
            })
        }, {"../../core": 97}],
        174: [function (t, e, i) {
            function r() {
                s.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}", '#define GLSLIFY 1\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n  \tvec2 fragCoord = vTextureCoord * filterArea.xy;\n\n  \tvec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n  \tgl_FragColor = color;\n}\n')
            }

            var s = t("../../core");
            r.prototype = Object.create(s.Filter.prototype), r.prototype.constructor = r, e.exports = r
        }, {"../../core": 97}],
        175: [function (t, e, i) {
            e.exports = {
                FXAAFilter: t("./fxaa/FXAAFilter"),
                NoiseFilter: t("./noise/NoiseFilter"),
                DisplacementFilter: t("./displacement/DisplacementFilter"),
                BlurFilter: t("./blur/BlurFilter"),
                BlurXFilter: t("./blur/BlurXFilter"),
                BlurYFilter: t("./blur/BlurYFilter"),
                ColorMatrixFilter: t("./colormatrix/ColorMatrixFilter"),
                VoidFilter: t("./void/VoidFilter")
            }
        }, {
            "./blur/BlurFilter": 166,
            "./blur/BlurXFilter": 167,
            "./blur/BlurYFilter": 168,
            "./colormatrix/ColorMatrixFilter": 172,
            "./displacement/DisplacementFilter": 173,
            "./fxaa/FXAAFilter": 174,
            "./noise/NoiseFilter": 176,
            "./void/VoidFilter": 177
        }],
        176: [function (t, e, i) {
            function r() {
                s.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(gl_FragCoord.xy) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n"), this.noise = .5
            }

            var s = t("../../core");
            r.prototype = Object.create(s.Filter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                noise: {
                    get: function () {
                        return this.uniforms.noise
                    }, set: function (t) {
                        this.uniforms.noise = t
                    }
                }
            })
        }, {"../../core": 97}],
        177: [function (t, e, i) {
            function r() {
                s.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"), this.glShaderKey = "void"
            }

            var s = t("../../core");
            r.prototype = Object.create(s.Filter.prototype), r.prototype.constructor = r, e.exports = r
        }, {"../../core": 97}],
        178: [function (t, e, i) {
            function r() {
                this.global = new s.Point, this.target = null, this.originalEvent = null
            }

            var s = t("../core");
            r.prototype.constructor = r, e.exports = r, r.prototype.getLocalPosition = function (t, e, i) {
                return t.worldTransform.applyInverse(i || this.global, e)
            }
        }, {"../core": 97}],
        179: [function (t, e, i) {
            function r(t, e) {
                o.call(this), e = e || {}, this.renderer = t, this.autoPreventDefault = void 0 === e.autoPreventDefault || e.autoPreventDefault, this.interactionFrequency = e.interactionFrequency || 10, this.mouse = new n, this.mouse.global.set(-999999), this.eventData = {
                    stopped: !1,
                    target: null,
                    type: null,
                    data: this.mouse,
                    stopPropagation: function () {
                        this.stopped = !0
                    }
                }, this.interactiveDataPool = [], this.interactionDOMElement = null, this.moveWhenInside = !1, this.eventsAdded = !1, this.onMouseUp = this.onMouseUp.bind(this), this.processMouseUp = this.processMouseUp.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.processMouseDown = this.processMouseDown.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.processMouseMove = this.processMouseMove.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.processMouseOverOut = this.processMouseOverOut.bind(this), this.onMouseOver = this.onMouseOver.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.processTouchStart = this.processTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.processTouchEnd = this.processTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.processTouchMove = this.processTouchMove.bind(this), this.defaultCursorStyle = "inherit", this.currentCursorStyle = "inherit", this._tempPoint = new s.Point, this.resolution = 1, this.setTargetElement(this.renderer.view, this.renderer.resolution)
            }

            var s = t("../core"), n = t("./InteractionData"), o = t("eventemitter3");
            Object.assign(s.DisplayObject.prototype, t("./interactiveTarget")), r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.setTargetElement = function (t, e) {
                this.removeEvents(), this.interactionDOMElement = t, this.resolution = e || 1, this.addEvents()
            }, r.prototype.addEvents = function () {
                this.interactionDOMElement && (s.ticker.shared.add(this.update, this), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none"), window.document.addEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onMouseOver, !0), this.interactionDOMElement.addEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.addEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !0)
            }, r.prototype.removeEvents = function () {
                this.interactionDOMElement && (s.ticker.shared.remove(this.update), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = ""), window.document.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onMouseOver, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !1)
            }, r.prototype.update = function (t) {
                if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) {
                    if (this.didMove)return void(this.didMove = !1);
                    this.cursor = this.defaultCursorStyle, this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
                }
            }, r.prototype.dispatchEvent = function (t, e, i) {
                i.stopped || (i.target = t, i.type = e, t.emit(e, i), t[e] && t[e](i))
            }, r.prototype.mapPositionToPoint = function (t, e, i) {
                var r;
                r = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }, t.x = (e - r.left) * (this.interactionDOMElement.width / r.width) / this.resolution, t.y = (i - r.top) * (this.interactionDOMElement.height / r.height) / this.resolution
            }, r.prototype.processInteractive = function (t, e, i, r, s) {
                if (!e || !e.visible)return !1;
                var n = !1, o = s = e.interactive || s;
                if (e.hitArea && (o = !1), r && e._mask && (e._mask.containsPoint(t) || (r = !1)), r && e.filterArea && (e.filterArea.contains(t.x, t.y) || (r = !1)), e.interactiveChildren)for (var a = e.children, h = a.length - 1; h >= 0; h--) {
                    var l = a[h];
                    if (this.processInteractive(t, l, i, r, o)) {
                        if (!l.parent)continue;
                        n = !0, o = !1, r = !1
                    }
                }
                return s && (r && !n && (e.hitArea ? (e.worldTransform.applyInverse(t, this._tempPoint), n = e.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) : e.containsPoint && (n = e.containsPoint(t))), e.interactive && i(e, n)), n
            }, r.prototype.onMouseDown = function (t) {
                this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.autoPreventDefault && this.mouse.originalEvent.preventDefault(), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseDown, !0);
                var e = 2 === t.button || 3 === t.which;
                this.emit(e ? "rightdown" : "mousedown", this.eventData)
            }, r.prototype.processMouseDown = function (t, e) {
                var i = this.mouse.originalEvent, r = 2 === i.button || 3 === i.which;
                e && (t[r ? "_isRightDown" : "_isLeftDown"] = !0, this.dispatchEvent(t, r ? "rightdown" : "mousedown", this.eventData))
            }, r.prototype.onMouseUp = function (t) {
                this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseUp, !0);
                var e = 2 === t.button || 3 === t.which;
                this.emit(e ? "rightup" : "mouseup", this.eventData)
            }, r.prototype.processMouseUp = function (t, e) {
                var i = this.mouse.originalEvent, r = 2 === i.button || 3 === i.which, s = r ? "_isRightDown" : "_isLeftDown";
                e ? (this.dispatchEvent(t, r ? "rightup" : "mouseup", this.eventData), t[s] && (t[s] = !1, this.dispatchEvent(t, r ? "rightclick" : "click", this.eventData))) : t[s] && (t[s] = !1, this.dispatchEvent(t, r ? "rightupoutside" : "mouseupoutside", this.eventData))
            }, r.prototype.onMouseMove = function (t) {
                this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.didMove = !0, this.cursor = this.defaultCursorStyle, this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseMove, !0), this.emit("mousemove", this.eventData), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
            }, r.prototype.processMouseMove = function (t, e) {
                this.processMouseOverOut(t, e), this.moveWhenInside && !e || this.dispatchEvent(t, "mousemove", this.eventData)
            }, r.prototype.onMouseOut = function (t) {
                this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.interactionDOMElement.style.cursor = this.defaultCursorStyle, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !1), this.emit("mouseout", this.eventData)
            }, r.prototype.processMouseOverOut = function (t, e) {
                e ? (t._over || (t._over = !0, this.dispatchEvent(t, "mouseover", this.eventData)), t.buttonMode && (this.cursor = t.defaultCursor)) : t._over && (t._over = !1, this.dispatchEvent(t, "mouseout", this.eventData))
            }, r.prototype.onMouseOver = function (t) {
                this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.emit("mouseover", this.eventData)
            }, r.prototype.onTouchStart = function (t) {
                this.autoPreventDefault && t.preventDefault();
                for (var e = t.changedTouches, i = e.length, r = 0; r < i; r++) {
                    var s = e[r], n = this.getTouchData(s);
                    n.originalEvent = t, this.eventData.data = n, this.eventData.stopped = !1, this.processInteractive(n.global, this.renderer._lastObjectRendered, this.processTouchStart, !0), this.emit("touchstart", this.eventData), this.returnTouchData(n)
                }
            }, r.prototype.processTouchStart = function (t, e) {
                e && (t._touchDown = !0, this.dispatchEvent(t, "touchstart", this.eventData))
            }, r.prototype.onTouchEnd = function (t) {
                this.autoPreventDefault && t.preventDefault();
                for (var e = t.changedTouches, i = e.length, r = 0; r < i; r++) {
                    var s = e[r], n = this.getTouchData(s);
                    n.originalEvent = t, this.eventData.data = n, this.eventData.stopped = !1, this.processInteractive(n.global, this.renderer._lastObjectRendered, this.processTouchEnd, !0), this.emit("touchend", this.eventData), this.returnTouchData(n)
                }
            }, r.prototype.processTouchEnd = function (t, e) {
                e ? (this.dispatchEvent(t, "touchend", this.eventData), t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "tap", this.eventData))) : t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "touchendoutside", this.eventData))
            }, r.prototype.onTouchMove = function (t) {
                this.autoPreventDefault && t.preventDefault();
                for (var e = t.changedTouches, i = e.length, r = 0; r < i; r++) {
                    var s = e[r], n = this.getTouchData(s);
                    n.originalEvent = t, this.eventData.data = n, this.eventData.stopped = !1, this.processInteractive(n.global, this.renderer._lastObjectRendered, this.processTouchMove, this.moveWhenInside), this.emit("touchmove", this.eventData), this.returnTouchData(n)
                }
            }, r.prototype.processTouchMove = function (t, e) {
                this.moveWhenInside && !e || this.dispatchEvent(t, "touchmove", this.eventData)
            }, r.prototype.getTouchData = function (t) {
                var e = this.interactiveDataPool.pop();
                return e || (e = new n), e.identifier = t.identifier, this.mapPositionToPoint(e.global, t.clientX, t.clientY), navigator.isCocoonJS && (e.global.x = e.global.x / this.resolution, e.global.y = e.global.y / this.resolution), t.globalX = e.global.x, t.globalY = e.global.y, e
            }, r.prototype.returnTouchData = function (t) {
                this.interactiveDataPool.push(t)
            }, r.prototype.destroy = function () {
                this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactiveDataPool = null, this.interactionDOMElement = null, this.onMouseUp = null, this.processMouseUp = null, this.onMouseDown = null, this.processMouseDown = null, this.onMouseMove = null, this.processMouseMove = null, this.onMouseOut = null, this.processMouseOverOut = null, this.onMouseOver = null, this.onTouchStart = null, this.processTouchStart = null, this.onTouchEnd = null, this.processTouchEnd = null, this.onTouchMove = null, this.processTouchMove = null, this._tempPoint = null
            }, s.WebGLRenderer.registerPlugin("interaction", r), s.CanvasRenderer.registerPlugin("interaction", r)
        }, {"../core": 97, "./InteractionData": 178, "./interactiveTarget": 181, eventemitter3: 16}],
        180: [function (t, e, i) {
            e.exports = {
                InteractionData: t("./InteractionData"),
                InteractionManager: t("./InteractionManager"),
                interactiveTarget: t("./interactiveTarget")
            }
        }, {"./InteractionData": 178, "./InteractionManager": 179, "./interactiveTarget": 181}],
        181: [function (t, e, i) {
            var r = {
                interactive: !1,
                interactiveChildren: !0,
                hitArea: null,
                buttonMode: !1,
                defaultCursor: "pointer",
                _over: !1,
                _isLeftDown: !1,
                _isRightDown: !1,
                _touchDown: !1
            };
            e.exports = r
        }, {}],
        182: [function (t, e, i) {
            function r(t, e) {
                var i = {}, r = t.data.getElementsByTagName("info")[0], s = t.data.getElementsByTagName("common")[0];
                i.font = r.getAttribute("face"), i.size = parseInt(r.getAttribute("size"), 10), i.lineHeight = parseInt(s.getAttribute("lineHeight"), 10), i.chars = {};
                for (var a = t.data.getElementsByTagName("char"), h = 0; h < a.length; h++) {
                    var l = parseInt(a[h].getAttribute("id"), 10), c = new n.Rectangle(parseInt(a[h].getAttribute("x"), 10) + e.frame.x, parseInt(a[h].getAttribute("y"), 10) + e.frame.y, parseInt(a[h].getAttribute("width"), 10), parseInt(a[h].getAttribute("height"), 10));
                    i.chars[l] = {
                        xOffset: parseInt(a[h].getAttribute("xoffset"), 10),
                        yOffset: parseInt(a[h].getAttribute("yoffset"), 10),
                        xAdvance: parseInt(a[h].getAttribute("xadvance"), 10),
                        kerning: {},
                        texture: new n.Texture(e.baseTexture, c)
                    }
                }
                var u = t.data.getElementsByTagName("kerning");
                for (h = 0; h < u.length; h++) {
                    var d = parseInt(u[h].getAttribute("first"), 10), p = parseInt(u[h].getAttribute("second"), 10), f = parseInt(u[h].getAttribute("amount"), 10);
                    i.chars[p] && (i.chars[p].kerning[d] = f)
                }
                t.bitmapFont = i, o.BitmapText.fonts[i.font] = i
            }

            var s = t("resource-loader").Resource, n = t("../core"), o = t("../extras"), a = t("path");
            e.exports = function () {
                return function (t, e) {
                    if (!t.data || !t.isXml)return e();
                    if (0 === t.data.getElementsByTagName("page").length || 0 === t.data.getElementsByTagName("info").length || null === t.data.getElementsByTagName("info")[0].getAttribute("face"))return e();
                    var i = t.isDataUrl ? "" : a.dirname(t.url);
                    t.isDataUrl && ("." === i && (i = ""), this.baseUrl && i && ("/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (i += "/"), i = i.replace(this.baseUrl, ""))), i && "/" !== i.charAt(i.length - 1) && (i += "/");
                    var o = i + t.data.getElementsByTagName("page")[0].getAttribute("file");
                    if (n.utils.TextureCache[o])r(t, n.utils.TextureCache[o]), e(); else {
                        var h = {
                            crossOrigin: t.crossOrigin,
                            loadType: s.LOAD_TYPE.IMAGE,
                            metadata: t.metadata.imageMetadata
                        };
                        this.add(t.name + "_image", o, h, function (i) {
                            r(t, i.texture), e()
                        })
                    }
                }
            }
        }, {"../core": 97, "../extras": 164, path: 44, "resource-loader": 69}],
        183: [function (t, e, i) {
            e.exports = {
                Loader: t("./loader"),
                bitmapFontParser: t("./bitmapFontParser"),
                spritesheetParser: t("./spritesheetParser"),
                textureParser: t("./textureParser"),
                Resource: t("resource-loader").Resource
            }
        }, {
            "./bitmapFontParser": 182,
            "./loader": 184,
            "./spritesheetParser": 185,
            "./textureParser": 186,
            "resource-loader": 69
        }],
        184: [function (t, e, i) {
            function r(t, e) {
                s.call(this, t, e);
                for (var i = 0; i < r._pixiMiddleware.length; ++i)this.use(r._pixiMiddleware[i]())
            }

            var s = t("resource-loader"), n = t("./textureParser"), o = t("./spritesheetParser"), a = t("./bitmapFontParser");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r._pixiMiddleware = [s.middleware.parsing.blob, n, o, a], r.addPixiMiddleware = function (t) {
                r._pixiMiddleware.push(t)
            };
            var h = s.Resource;
            h.setExtensionXhrType("fnt", h.XHR_RESPONSE_TYPE.DOCUMENT)
        }, {"./bitmapFontParser": 182, "./spritesheetParser": 185, "./textureParser": 186, "resource-loader": 69}],
        185: [function (t, e, i) {
            var r = t("resource-loader").Resource, s = t("path"), n = t("../core"), o = 1e3;
            e.exports = function () {
                return function (t, e) {
                    var i, a = t.name + "_image";
                    if (!t.data || !t.isJson || !t.data.frames || this.resources[a])return e();
                    var h = {
                        crossOrigin: t.crossOrigin,
                        loadType: r.LOAD_TYPE.IMAGE,
                        metadata: t.metadata.imageMetadata
                    };
                    i = t.isDataUrl ? t.data.meta.image : s.dirname(t.url.replace(this.baseUrl, "")) + "/" + t.data.meta.image, this.add(a, i, h, function (i) {
                        function r(e, r) {
                            for (var s = e; s - e < r && s < c.length;) {
                                var o = c[s], a = l[o].frame;
                                if (a) {
                                    var h = null, d = null, p = new n.Rectangle(0, 0, l[o].sourceSize.w / u, l[o].sourceSize.h / u);
                                    h = l[o].rotated ? new n.Rectangle(a.x / u, a.y / u, a.h / u, a.w / u) : new n.Rectangle(a.x / u, a.y / u, a.w / u, a.h / u), l[o].trimmed && (d = new n.Rectangle(l[o].spriteSourceSize.x / u, l[o].spriteSourceSize.y / u, l[o].spriteSourceSize.w / u, l[o].spriteSourceSize.h / u)), t.textures[o] = new n.Texture(i.texture.baseTexture, h, p, d, l[o].rotated ? 2 : 0), n.utils.TextureCache[o] = t.textures[o]
                                }
                                s++
                            }
                        }

                        function s() {
                            return d * o < c.length
                        }

                        function a(t) {
                            r(d * o, o), d++, setTimeout(t, 0)
                        }

                        function h() {
                            a(function () {
                                s() ? h() : e()
                            })
                        }

                        t.textures = {};
                        var l = t.data.frames, c = Object.keys(l), u = n.utils.getResolutionOfUrl(t.url), d = 0;
                        c.length <= o ? (r(0, o), e()) : h()
                    })
                }
            }
        }, {"../core": 97, path: 44, "resource-loader": 69}],
        186: [function (t, e, i) {
            var r = t("../core");
            e.exports = function () {
                return function (t, e) {
                    if (t.data && t.isImage) {
                        var i = new r.BaseTexture(t.data, null, r.utils.getResolutionOfUrl(t.url));
                        i.imageUrl = t.url, t.texture = new r.Texture(i), r.utils.BaseTextureCache[t.url] = i, r.utils.TextureCache[t.url] = t.texture
                    }
                    e()
                }
            }
        }, {"../core": 97}],
        187: [function (t, e, i) {
            function r(t, e, i, n, o) {
                s.Container.call(this), this._texture = null, this.uvs = i || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertices = e || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), this.indices = n || new Uint16Array([0, 1, 3, 2]), this.dirty = 0, this.indexDirty = 0, this.blendMode = s.BLEND_MODES.NORMAL, this.canvasPadding = 0, this.drawMode = o || r.DRAW_MODES.TRIANGLE_MESH, this.texture = t, this.shader = null, this.tintRgb = new Float32Array([1, 1, 1]), this._glDatas = []
            }

            var s = t("../core"), n = t("pixi-gl-core"), o = t("./webgl/MeshShader"), a = new s.Point, h = new s.Polygon;
            r.prototype = Object.create(s.Container.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                texture: {
                    get: function () {
                        return this._texture
                    }, set: function (t) {
                        this._texture !== t && (this._texture = t, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                    }
                }, tint: {
                    get: function () {
                        return s.utils.rgb2hex(this.tintRgb)
                    }, set: function (t) {
                        this.tintRgb = s.utils.hex2rgb(t, this.tintRgb)
                    }
                }
            }), r.prototype._renderWebGL = function (t) {
                t.flush();
                var e = t.gl, i = this._glDatas[t.CONTEXT_UID];
                i || (i = {
                    shader: new o(e),
                    vertexBuffer: n.GLBuffer.createVertexBuffer(e, this.vertices, e.STREAM_DRAW),
                    uvBuffer: n.GLBuffer.createVertexBuffer(e, this.uvs, e.STREAM_DRAW),
                    indexBuffer: n.GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW),
                    vao: new n.VertexArrayObject(e),
                    dirty: this.dirty,
                    indexDirty: this.indexDirty
                }, i.vao = new n.VertexArrayObject(e).addIndex(i.indexBuffer).addAttribute(i.vertexBuffer, i.shader.attributes.aVertexPosition, e.FLOAT, !1, 8, 0).addAttribute(i.uvBuffer, i.shader.attributes.aTextureCoord, e.FLOAT, !1, 8, 0), this._glDatas[t.CONTEXT_UID] = i), this.dirty !== i.dirty && (i.dirty = this.dirty, i.uvBuffer.upload()), this.indexDirty !== i.indexDirty && (i.indexDirty = this.indexDirty, i.indexBuffer.upload()), i.vertexBuffer.upload(), t.bindShader(i.shader), t.bindTexture(this._texture, 0), t.state.setBlendMode(this.blendMode), i.shader.uniforms.translationMatrix = this.worldTransform.toArray(!0), i.shader.uniforms.alpha = this.worldAlpha, i.shader.uniforms.tint = this.tintRgb;
                var s = this.drawMode === r.DRAW_MODES.TRIANGLE_MESH ? e.TRIANGLE_STRIP : e.TRIANGLES;
                i.vao.bind().draw(s, this.indices.length).unbind()
            }, r.prototype._renderCanvas = function (t) {
                var e = t.context, i = this.worldTransform, s = t.resolution;
                t.roundPixels ? e.setTransform(i.a * s, i.b * s, i.c * s, i.d * s, i.tx * s | 0, i.ty * s | 0) : e.setTransform(i.a * s, i.b * s, i.c * s, i.d * s, i.tx * s, i.ty * s), this.drawMode === r.DRAW_MODES.TRIANGLE_MESH ? this._renderCanvasTriangleMesh(e) : this._renderCanvasTriangles(e)
            }, r.prototype._renderCanvasTriangleMesh = function (t) {
                for (var e = this.vertices, i = this.uvs, r = e.length / 2, s = 0; s < r - 2; s++) {
                    var n = 2 * s;
                    this._renderCanvasDrawTriangle(t, e, i, n, n + 2, n + 4)
                }
            }, r.prototype._renderCanvasTriangles = function (t) {
                for (var e = this.vertices, i = this.uvs, r = this.indices, s = r.length, n = 0; n < s; n += 3) {
                    var o = 2 * r[n], a = 2 * r[n + 1], h = 2 * r[n + 2];
                    this._renderCanvasDrawTriangle(t, e, i, o, a, h)
                }
            }, r.prototype._renderCanvasDrawTriangle = function (t, e, i, r, s, n) {
                var o = this._texture.baseTexture, a = o.source, h = o.width, l = o.height, c = e[r], u = e[s], d = e[n], p = e[r + 1], f = e[s + 1], g = e[n + 1], m = i[r] * o.width, v = i[s] * o.width, _ = i[n] * o.width, y = i[r + 1] * o.height, x = i[s + 1] * o.height, b = i[n + 1] * o.height;
                if (this.canvasPadding > 0) {
                    var w = this.canvasPadding / this.worldTransform.a, T = this.canvasPadding / this.worldTransform.d, L = (c + u + d) / 3, S = (p + f + g) / 3, E = c - L, P = p - S, A = Math.sqrt(E * E + P * P);
                    c = L + E / A * (A + w), p = S + P / A * (A + T), E = u - L, P = f - S, A = Math.sqrt(E * E + P * P), u = L + E / A * (A + w), f = S + P / A * (A + T), E = d - L, P = g - S, A = Math.sqrt(E * E + P * P), d = L + E / A * (A + w), g = S + P / A * (A + T)
                }
                t.save(), t.beginPath(), t.moveTo(c, p), t.lineTo(u, f), t.lineTo(d, g), t.closePath(), t.clip();
                var C = m * x + y * _ + v * b - x * _ - y * v - m * b, R = c * x + y * d + u * b - x * d - y * u - c * b, M = m * u + c * _ + v * d - u * _ - c * v - m * d, O = m * x * d + y * u * _ + c * v * b - c * x * _ - y * v * d - m * u * b, I = p * x + y * g + f * b - x * g - y * f - p * b, B = m * f + p * _ + v * g - f * _ - p * v - m * g, D = m * x * g + y * f * _ + p * v * b - p * x * _ - y * v * g - m * f * b;
                t.transform(R / C, I / C, M / C, B / C, O / C, D / C), t.drawImage(a, 0, 0, h * o.resolution, l * o.resolution, 0, 0, h, l), t.restore()
            }, r.prototype.renderMeshFlat = function (t) {
                var e = this.context, i = t.vertices, r = i.length / 2;
                e.beginPath();
                for (var s = 1; s < r - 2; s++) {
                    var n = 2 * s, o = i[n], a = i[n + 2], h = i[n + 4], l = i[n + 1], c = i[n + 3], u = i[n + 5];
                    e.moveTo(o, l), e.lineTo(a, c), e.lineTo(h, u)
                }
                e.fillStyle = "#FF0000", e.fill(), e.closePath()
            }, r.prototype._onTextureUpdate = function () {
            }, r.prototype._calculateBounds = function () {
                this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length)
            }, r.prototype.containsPoint = function (t) {
                if (!this.getBounds().contains(t.x, t.y))return !1;
                this.worldTransform.applyInverse(t, a);
                for (var e = this.vertices, i = h.points, s = this.indices, n = this.indices.length, o = this.drawMode === r.DRAW_MODES.TRIANGLES ? 3 : 1, l = 0; l + 2 < n; l += o) {
                    var c = 2 * s[l], u = 2 * s[l + 1], d = 2 * s[l + 2];
                    if (i[0] = e[c], i[1] = e[c + 1], i[2] = e[u], i[3] = e[u + 1], i[4] = e[d], i[5] = e[d + 1], h.contains(a.x, a.y))return !0
                }
                return !1
            }, r.DRAW_MODES = {TRIANGLE_MESH: 0, TRIANGLES: 1}
        }, {"../core": 97, "./webgl/MeshShader": 192, "pixi-gl-core": 51}],
        188: [function (t, e, i) {
            function r(t, e, i, r, o) {
                n.call(this, t, 4, 4);
                var a = this.uvs;
                a[6] = a[14] = a[22] = a[30] = 1, a[25] = a[27] = a[29] = a[31] = 1, this._origWidth = t.width, this._origHeight = t.height, this._uvw = 1 / this._origWidth, this._uvh = 1 / this._origHeight, this.width = t.width, this.height = t.height, a[2] = a[10] = a[18] = a[26] = this._uvw * e, a[4] = a[12] = a[20] = a[28] = 1 - this._uvw * r, a[9] = a[11] = a[13] = a[15] = this._uvh * i, a[17] = a[19] = a[21] = a[23] = 1 - this._uvh * o, this.leftWidth = "undefined" != typeof e ? e : s, this.rightWidth = "undefined" != typeof r ? r : s, this.topHeight = "undefined" != typeof i ? i : s, this.bottomHeight = "undefined" != typeof o ? o : s
            }

            var s = 10, n = t("./Plane");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                width: {
                    get: function () {
                        return this._width
                    }, set: function (t) {
                        this._width = t, this.updateVerticalVertices()
                    }
                }, height: {
                    get: function () {
                        return this._height
                    }, set: function (t) {
                        this._height = t, this.updateHorizontalVertices()
                    }
                }, leftWidth: {
                    get: function () {
                        return this._leftWidth
                    }, set: function (t) {
                        this._leftWidth = t;
                        var e = this.uvs, i = this.vertices;
                        e[2] = e[10] = e[18] = e[26] = this._uvw * t, i[2] = i[10] = i[18] = i[26] = t, this.dirty = !0
                    }
                }, rightWidth: {
                    get: function () {
                        return this._rightWidth
                    }, set: function (t) {
                        this._rightWidth = t;
                        var e = this.uvs, i = this.vertices;
                        e[4] = e[12] = e[20] = e[28] = 1 - this._uvw * t, i[4] = i[12] = i[20] = i[28] = this._width - t, this.dirty = !0
                    }
                }, topHeight: {
                    get: function () {
                        return this._topHeight
                    }, set: function (t) {
                        this._topHeight = t;
                        var e = this.uvs, i = this.vertices;
                        e[9] = e[11] = e[13] = e[15] = this._uvh * t, i[9] = i[11] = i[13] = i[15] = t, this.dirty = !0
                    }
                }, bottomHeight: {
                    get: function () {
                        return this._bottomHeight
                    }, set: function (t) {
                        this._bottomHeight = t;
                        var e = this.uvs, i = this.vertices;
                        e[17] = e[19] = e[21] = e[23] = 1 - this._uvh * t, i[17] = i[19] = i[21] = i[23] = this._height - t, this.dirty = !0
                    }
                }
            }), r.prototype.updateHorizontalVertices = function () {
                var t = this.vertices;
                t[9] = t[11] = t[13] = t[15] = this._topHeight, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight, t[25] = t[27] = t[29] = t[31] = this._height
            }, r.prototype.updateVerticalVertices = function () {
                var t = this.vertices;
                t[2] = t[10] = t[18] = t[26] = this._leftWidth, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth, t[6] = t[14] = t[22] = t[30] = this._width
            }, r.prototype._renderCanvas = function (t) {
                var e = t.context;
                e.globalAlpha = this.worldAlpha;
                var i = this.worldTransform, r = t.resolution;
                t.roundPixels ? e.setTransform(i.a * r, i.b * r, i.c * r, i.d * r, i.tx * r | 0, i.ty * r | 0) : e.setTransform(i.a * r, i.b * r, i.c * r, i.d * r, i.tx * r, i.ty * r);
                var s = this._texture.baseTexture, n = s.source, o = s.width, a = s.height;
                this.drawSegment(e, n, o, a, 0, 1, 10, 11), this.drawSegment(e, n, o, a, 2, 3, 12, 13), this.drawSegment(e, n, o, a, 4, 5, 14, 15), this.drawSegment(e, n, o, a, 8, 9, 18, 19), this.drawSegment(e, n, o, a, 10, 11, 20, 21), this.drawSegment(e, n, o, a, 12, 13, 22, 23), this.drawSegment(e, n, o, a, 16, 17, 26, 27), this.drawSegment(e, n, o, a, 18, 19, 28, 29),
                    this.drawSegment(e, n, o, a, 20, 21, 30, 31)
            }, r.prototype.drawSegment = function (t, e, i, r, s, n, o, a) {
                var h = this.uvs, l = this.vertices, c = (h[o] - h[s]) * i, u = (h[a] - h[n]) * r, d = l[o] - l[s], p = l[a] - l[n];
                c < 1 && (c = 1), u < 1 && (u = 1), d < 1 && (d = 1), p < 1 && (p = 1), t.drawImage(e, h[s] * i, h[n] * r, c, u, l[s], l[n], d, p)
            }
        }, {"./Plane": 189}],
        189: [function (t, e, i) {
            function r(t, e, i) {
                s.call(this, t), this._ready = !0, this.verticesX = e || 10, this.verticesY = i || 10, this.drawMode = s.DRAW_MODES.TRIANGLES, this.refresh()
            }

            var s = t("./Mesh");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.refresh = function () {
                var t = this.verticesX * this.verticesY, e = [], i = [], r = [], s = [], n = this.texture, o = this.verticesX - 1, a = this.verticesY - 1, h = 0, l = n.width / o, c = n.height / a;
                for (h = 0; h < t; h++) {
                    var u = h % this.verticesX, d = h / this.verticesX | 0;
                    e.push(u * l, d * c), r.push(n._uvs.x0 + (n._uvs.x1 - n._uvs.x0) * (u / (this.verticesX - 1)), n._uvs.y0 + (n._uvs.y3 - n._uvs.y0) * (d / (this.verticesY - 1)))
                }
                var p = o * a;
                for (h = 0; h < p; h++) {
                    var f = h % o, g = h / o | 0, m = g * this.verticesX + f, v = g * this.verticesX + f + 1, _ = (g + 1) * this.verticesX + f, y = (g + 1) * this.verticesX + f + 1;
                    s.push(m, v, _), s.push(v, y, _)
                }
                this.vertices = new Float32Array(e), this.uvs = new Float32Array(r), this.colors = new Float32Array(i), this.indices = new Uint16Array(s), this.indexDirty = !0
            }, r.prototype._onTextureUpdate = function () {
                s.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
            }
        }, {"./Mesh": 187}],
        190: [function (t, e, i) {
            function r(t, e) {
                s.call(this, t), this.points = e, this.vertices = new Float32Array(4 * e.length), this.uvs = new Float32Array(4 * e.length), this.colors = new Float32Array(2 * e.length), this.indices = new Uint16Array(2 * e.length), this._ready = !0, this.refresh()
            }

            var s = t("./Mesh"), n = t("../core");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.refresh = function () {
                var t = this.points;
                if (!(t.length < 1) && this._texture._uvs) {
                    var e = this.uvs, i = this.indices, r = this.colors, s = this._texture._uvs, o = new n.Point(s.x0, s.y0), a = new n.Point(s.x2 - s.x0, s.y2 - s.y0);
                    e[0] = 0 + o.x, e[1] = 0 + o.y, e[2] = 0 + o.x, e[3] = 1 * a.y + o.y, r[0] = 1, r[1] = 1, i[0] = 0, i[1] = 1;
                    for (var h, l, c, u = t.length, d = 1; d < u; d++)h = t[d], l = 4 * d, c = d / (u - 1), e[l] = c * a.x + o.x, e[l + 1] = 0 + o.y, e[l + 2] = c * a.x + o.x, e[l + 3] = 1 * a.y + o.y, l = 2 * d, r[l] = 1, r[l + 1] = 1, l = 2 * d, i[l] = l, i[l + 1] = l + 1;
                    this.dirty = !0, this.indexDirty = !0
                }
            }, r.prototype._onTextureUpdate = function () {
                s.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
            }, r.prototype.updateTransform = function () {
                var t = this.points;
                if (!(t.length < 1)) {
                    for (var e, i, r, s, n, o, a = t[0], h = 0, l = 0, c = this.vertices, u = t.length, d = 0; d < u; d++)i = t[d], r = 4 * d, e = d < t.length - 1 ? t[d + 1] : i, l = -(e.x - a.x), h = e.y - a.y, s = 10 * (1 - d / (u - 1)), s > 1 && (s = 1), n = Math.sqrt(h * h + l * l), o = this._texture.height / 2, h /= n, l /= n, h *= o, l *= o, c[r] = i.x + h, c[r + 1] = i.y + l, c[r + 2] = i.x - h, c[r + 3] = i.y - l, a = i;
                    this.containerUpdateTransform()
                }
            }
        }, {"../core": 97, "./Mesh": 187}],
        191: [function (t, e, i) {
            e.exports = {
                Mesh: t("./Mesh"),
                Plane: t("./Plane"),
                NineSlicePlane: t("./NineSlicePlane"),
                Rope: t("./Rope"),
                MeshShader: t("./webgl/MeshShader")
            }
        }, {"./Mesh": 187, "./NineSlicePlane": 188, "./Plane": 189, "./Rope": 190, "./webgl/MeshShader": 192}],
        192: [function (t, e, i) {
            function r(t) {
                s.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"].join("\n"), ["varying vec2 vTextureCoord;", "uniform float alpha;", "uniform vec3 tint;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);", "}"].join("\n"))
            }

            var s = t("../../core/Shader");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r
        }, {"../../core/Shader": 77}],
        193: [function (t, e, i) {
            function r(t, e, i) {
                s.Container.call(this), i = i || 15e3, t = t || 15e3;
                var r = 16384;
                i > r && (i = r), i > t && (i = t), this._properties = [!1, !0, !1, !1, !1], this._maxSize = t, this._batchSize = i, this._glBuffers = [], this._bufferToUpdate = 0, this.interactiveChildren = !1, this.blendMode = s.BLEND_MODES.NORMAL, this.roundPixels = !0, this.baseTexture = null, this.setProperties(e)
            }

            var s = t("../core");
            r.prototype = Object.create(s.Container.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.setProperties = function (t) {
                t && (this._properties[0] = "scale" in t ? !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "alpha" in t ? !!t.alpha : this._properties[4])
            }, r.prototype.updateTransform = function () {
                this.displayObjectUpdateTransform()
            }, r.prototype.renderWebGL = function (t) {
                this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.hasLoaded || this.baseTexture.once("update", function () {
                    this.onChildrenChange(0)
                }, this)), t.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
            }, r.prototype.onChildrenChange = function (t) {
                var e = Math.floor(t / this._batchSize);
                e < this._bufferToUpdate && (this._bufferToUpdate = e)
            }, r.prototype.renderCanvas = function (t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
                    var e = t.context, i = this.worldTransform, r = !0, s = 0, n = 0, o = 0, a = 0, h = t.blendModes[this.blendMode];
                    h !== e.globalCompositeOperation && (e.globalCompositeOperation = h), e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
                    for (var l = 0; l < this.children.length; ++l) {
                        var c = this.children[l];
                        if (c.visible) {
                            var u = c.texture.frame;
                            if (e.globalAlpha = this.worldAlpha * c.alpha, c.rotation % (2 * Math.PI) === 0)r && (e.setTransform(i.a, i.b, i.c, i.d, i.tx * t.resolution, i.ty * t.resolution), r = !1), s = c.anchor.x * (-u.width * c.scale.x) + c.position.x + .5, n = c.anchor.y * (-u.height * c.scale.y) + c.position.y + .5, o = u.width * c.scale.x, a = u.height * c.scale.y; else {
                                r || (r = !0), c.displayObjectUpdateTransform();
                                var d = c.worldTransform;
                                t.roundPixels ? e.setTransform(d.a, d.b, d.c, d.d, d.tx * t.resolution | 0, d.ty * t.resolution | 0) : e.setTransform(d.a, d.b, d.c, d.d, d.tx * t.resolution, d.ty * t.resolution), s = c.anchor.x * -u.width + .5, n = c.anchor.y * -u.height + .5, o = u.width, a = u.height
                            }
                            var p = c.texture.baseTexture.resolution;
                            e.drawImage(c.texture.baseTexture.source, u.x * p, u.y * p, u.width * p, u.height * p, s * p, n * p, o * p, a * p)
                        }
                    }
                }
            }, r.prototype.destroy = function () {
                if (s.Container.prototype.destroy.apply(this, arguments), this._buffers)for (var t = 0; t < this._buffers.length; ++t)this._buffers[t].destroy();
                this._properties = null, this._buffers = null
            }
        }, {"../core": 97}],
        194: [function (t, e, i) {
            e.exports = {ParticleContainer: t("./ParticleContainer"), ParticleRenderer: t("./webgl/ParticleRenderer")}
        }, {"./ParticleContainer": 193, "./webgl/ParticleRenderer": 196}],
        195: [function (t, e, i) {
            function r(t, e, i, r) {
                this.gl = t, this.vertSize = 2, this.vertByteSize = 4 * this.vertSize, this.size = r, this.dynamicProperties = [], this.staticProperties = [];
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n = {
                        attribute: n.attribute,
                        size: n.size,
                        uploadFunction: n.uploadFunction,
                        offset: n.offset
                    }, i[s] ? this.dynamicProperties.push(n) : this.staticProperties.push(n)
                }
                this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.initBuffers()
            }

            var s = t("pixi-gl-core"), n = t("../../core/utils/createIndicesForQuads");
            r.prototype.constructor = r, e.exports = r, r.prototype.initBuffers = function () {
                var t, e, i = this.gl, r = 0;
                for (this.indices = n(this.size), this.indexBuffer = s.GLBuffer.createIndexBuffer(i, this.indices, i.STATIC_DRAW), this.dynamicStride = 0, t = 0; t < this.dynamicProperties.length; t++)e = this.dynamicProperties[t], e.offset = r, r += e.size, this.dynamicStride += e.size;
                this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4), this.dynamicBuffer = s.GLBuffer.createVertexBuffer(i, this.dynamicData, i.STREAM_DRAW);
                var o = 0;
                for (this.staticStride = 0, t = 0; t < this.staticProperties.length; t++)e = this.staticProperties[t], e.offset = o, o += e.size, this.staticStride += e.size;
                for (this.staticData = new Float32Array(this.size * this.staticStride * 4), this.staticBuffer = s.GLBuffer.createVertexBuffer(i, this.staticData, i.STATIC_DRAW), this.vao = new s.VertexArrayObject(i).addIndex(this.indexBuffer), t = 0; t < this.dynamicProperties.length; t++)e = this.dynamicProperties[t], this.vao.addAttribute(this.dynamicBuffer, e.attribute, i.FLOAT, !1, 4 * this.dynamicStride, 4 * e.offset);
                for (t = 0; t < this.staticProperties.length; t++)e = this.staticProperties[t], this.vao.addAttribute(this.staticBuffer, e.attribute, i.FLOAT, !1, 4 * this.staticStride, 4 * e.offset)
            }, r.prototype.uploadDynamic = function (t, e, i) {
                for (var r = 0; r < this.dynamicProperties.length; r++) {
                    var s = this.dynamicProperties[r];
                    s.uploadFunction(t, e, i, this.dynamicData, this.dynamicStride, s.offset)
                }
                this.dynamicBuffer.upload()
            }, r.prototype.uploadStatic = function (t, e, i) {
                for (var r = 0; r < this.staticProperties.length; r++) {
                    var s = this.staticProperties[r];
                    s.uploadFunction(t, e, i, this.staticData, this.staticStride, s.offset)
                }
                this.staticBuffer.upload()
            }, r.prototype.bind = function () {
                this.vao.bind()
            }, r.prototype.destroy = function () {
                this.dynamicProperties = null, this.dynamicData = null, this.dynamicBuffer.destroy(), this.staticProperties = null, this.staticData = null, this.staticBuffer.destroy()
            }
        }, {"../../core/utils/createIndicesForQuads": 149, "pixi-gl-core": 51}],
        196: [function (t, e, i) {
            function r(t) {
                s.ObjectRenderer.call(this, t), this.shader = null, this.indexBuffer = null, this.properties = null, this.tempMatrix = new s.Matrix, this.CONTEXT_UID = 0
            }

            var s = t("../../core"), n = t("./ParticleShader"), o = t("./ParticleBuffer");
            r.prototype = Object.create(s.ObjectRenderer.prototype), r.prototype.constructor = r, e.exports = r, s.WebGLRenderer.registerPlugin("particle", r), r.prototype.onContextChange = function () {
                var t = this.renderer.gl;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.shader = new n(t), this.properties = [{
                    attribute: this.shader.attributes.aVertexPosition,
                    size: 2,
                    uploadFunction: this.uploadVertices,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aPositionCoord,
                    size: 2,
                    uploadFunction: this.uploadPosition,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aRotation,
                    size: 1,
                    uploadFunction: this.uploadRotation,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aTextureCoord,
                    size: 2,
                    uploadFunction: this.uploadUvs,
                    offset: 0
                }, {attribute: this.shader.attributes.aColor, size: 1, uploadFunction: this.uploadAlpha, offset: 0}]
            }, r.prototype.start = function () {
                this.renderer.bindShader(this.shader)
            }, r.prototype.render = function (t) {
                var e = t.children, i = e.length, r = t._maxSize, s = t._batchSize;
                if (0 !== i) {
                    i > r && (i = r);
                    var n = t._glBuffers[this.renderer.CONTEXT_UID];
                    n || (n = t._glBuffers[this.renderer.CONTEXT_UID] = this.generateBuffers(t)), this.renderer.setBlendMode(t.blendMode);
                    var o = this.renderer.gl, a = t.worldTransform.copy(this.tempMatrix);
                    a.prepend(this.renderer._activeRenderTarget.projectionMatrix), this.shader.uniforms.projectionMatrix = a.toArray(!0), this.shader.uniforms.uAlpha = t.worldAlpha;
                    var h = e[0]._texture.baseTexture;
                    this.renderer.bindTexture(h);
                    for (var l = 0, c = 0; l < i; l += s, c += 1) {
                        var u = i - l;
                        u > s && (u = s);
                        var d = n[c];
                        d.uploadDynamic(e, l, u), t._bufferToUpdate === c && (d.uploadStatic(e, l, u), t._bufferToUpdate = c + 1), d.vao.bind().draw(o.TRIANGLES, 6 * u).unbind()
                    }
                }
            }, r.prototype.generateBuffers = function (t) {
                var e, i = this.renderer.gl, r = [], s = t._maxSize, n = t._batchSize, a = t._properties;
                for (e = 0; e < s; e += n)r.push(new o(i, this.properties, a, n));
                return r
            }, r.prototype.uploadVertices = function (t, e, i, r, s, n) {
                for (var o, a, h, l, c, u, d, p, f, g, m = 0; m < i; m++)o = t[e + m], a = o._texture, c = o.scale.x, u = o.scale.y, h = a.trim, l = a.orig, h ? (p = h.x - o.anchor.x * l.width, d = p + h.width, g = h.y - o.anchor.y * l.height, f = g + h.height) : (d = l.width * (1 - o.anchor.x), p = l.width * -o.anchor.x, f = l.height * (1 - o.anchor.y), g = l.height * -o.anchor.y), r[n] = p * c, r[n + 1] = g * u, r[n + s] = d * c, r[n + s + 1] = g * u, r[n + 2 * s] = d * c, r[n + 2 * s + 1] = f * u, r[n + 3 * s] = p * c, r[n + 3 * s + 1] = f * u, n += 4 * s
            }, r.prototype.uploadPosition = function (t, e, i, r, s, n) {
                for (var o = 0; o < i; o++) {
                    var a = t[e + o].position;
                    r[n] = a.x, r[n + 1] = a.y, r[n + s] = a.x, r[n + s + 1] = a.y, r[n + 2 * s] = a.x, r[n + 2 * s + 1] = a.y, r[n + 3 * s] = a.x, r[n + 3 * s + 1] = a.y, n += 4 * s
                }
            }, r.prototype.uploadRotation = function (t, e, i, r, s, n) {
                for (var o = 0; o < i; o++) {
                    var a = t[e + o].rotation;
                    r[n] = a, r[n + s] = a, r[n + 2 * s] = a, r[n + 3 * s] = a, n += 4 * s
                }
            }, r.prototype.uploadUvs = function (t, e, i, r, s, n) {
                for (var o = 0; o < i; o++) {
                    var a = t[e + o]._texture._uvs;
                    a ? (r[n] = a.x0, r[n + 1] = a.y0, r[n + s] = a.x1, r[n + s + 1] = a.y1, r[n + 2 * s] = a.x2, r[n + 2 * s + 1] = a.y2, r[n + 3 * s] = a.x3, r[n + 3 * s + 1] = a.y3, n += 4 * s) : (r[n] = 0, r[n + 1] = 0, r[n + s] = 0, r[n + s + 1] = 0, r[n + 2 * s] = 0, r[n + 2 * s + 1] = 0, r[n + 3 * s] = 0, r[n + 3 * s + 1] = 0, n += 4 * s)
                }
            }, r.prototype.uploadAlpha = function (t, e, i, r, s, n) {
                for (var o = 0; o < i; o++) {
                    var a = t[e + o].alpha;
                    r[n] = a, r[n + s] = a, r[n + 2 * s] = a, r[n + 3 * s] = a, n += 4 * s
                }
            }, r.prototype.destroy = function () {
                this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), s.ObjectRenderer.prototype.destroy.apply(this, arguments), this.shader.destroy(), this.indices = null, this.tempMatrix = null
            }
        }, {"../../core": 97, "./ParticleBuffer": 195, "./ParticleShader": 197}],
        197: [function (t, e, i) {
            function r(t) {
                s.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void){", "   vec2 v = aVertexPosition;", "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"].join("\n"), ["varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform float uAlpha;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;", "  if (color.a == 0.0) discard;", "  gl_FragColor = color;", "}"].join("\n"))
            }

            var s = t("../../core/Shader");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r
        }, {"../../core/Shader": 77}],
        198: [function (t, e, i) {
            Math.sign || (Math.sign = function (t) {
                return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
            })
        }, {}],
        199: [function (t, e, i) {
            Object.assign || (Object.assign = t("object-assign"))
        }, {"object-assign": 43}],
        200: [function (t, e, i) {
            t("./Object.assign"), t("./requestAnimationFrame"), t("./Math.sign"), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array)
        }, {"./Math.sign": 198, "./Object.assign": 199, "./requestAnimationFrame": 201}],
        201: [function (t, e, i) {
            (function (t) {
                if (Date.now && Date.prototype.getTime || (Date.now = function () {
                        return (new Date).getTime()
                    }), !t.performance || !t.performance.now) {
                    var e = Date.now();
                    t.performance || (t.performance = {}), t.performance.now = function () {
                        return Date.now() - e
                    }
                }
                for (var i = Date.now(), r = ["ms", "moz", "webkit", "o"], s = 0; s < r.length && !t.requestAnimationFrame; ++s)t.requestAnimationFrame = t[r[s] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[r[s] + "CancelAnimationFrame"] || t[r[s] + "CancelRequestAnimationFrame"];
                t.requestAnimationFrame || (t.requestAnimationFrame = function (t) {
                    if ("function" != typeof t)throw new TypeError(t + "is not a function");
                    var e = Date.now(), r = 16 + i - e;
                    return r < 0 && (r = 0), i = e, setTimeout(function () {
                        i = Date.now(), t(performance.now())
                    }, r)
                }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function (t) {
                    clearTimeout(t)
                })
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        202: [function (t, e, i) {
            function r() {
            }

            var s = t("../../core");
            r.prototype.constructor = r, e.exports = r, r.prototype.upload = function (t, e) {
                "function" == typeof t && (e = t, t = null), e()
            }, r.prototype.register = function () {
                return this
            }, r.prototype.add = function () {
                return this
            }, r.prototype.destroy = function () {
            }, s.CanvasRenderer.registerPlugin("prepare", r)
        }, {"../../core": 97}],
        203: [function (t, e, i) {
            e.exports = {webGL: t("./webgl/WebGLPrepare"), canvas: t("./canvas/CanvasPrepare")}
        }, {"./canvas/CanvasPrepare": 202, "./webgl/WebGLPrepare": 204}],
        204: [function (t, e, i) {
            function r(t) {
                this.renderer = t, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.register(o, s).register(a, n)
            }

            function s(t, e) {
                return e instanceof h.BaseTexture && (t.textureManager.updateTexture(e), !0)
            }

            function n(t, e) {
                return e instanceof h.Graphics && (t.plugins.graphics.updateGraphics(e), !0)
            }

            function o(t, e) {
                if (t instanceof h.BaseTexture)return e.indexOf(t) === -1 && e.push(t), !0;
                if (t._texture && t._texture instanceof h.Texture) {
                    var i = t._texture.baseTexture;
                    return e.indexOf(i) === -1 && e.push(i), !0
                }
                return !1
            }

            function a(t, e) {
                return t instanceof h.Graphics && (e.push(t), !0)
            }

            var h = t("../../core"), l = h.ticker.shared;
            r.UPLOADS_PER_FRAME = 4, r.prototype.constructor = r, e.exports = r, r.prototype.upload = function (t, e) {
                "function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (this.numLeft = r.UPLOADS_PER_FRAME, this.completes.push(e), this.ticking || (this.ticking = !0, l.add(this.tick, this))) : e()
            }, r.prototype.tick = function () {
                for (var t, e; this.queue.length && this.numLeft > 0;) {
                    var i = this.queue[0], s = !1;
                    for (t = 0, e = this.uploadHooks.length; t < e; t++)if (this.uploadHooks[t](this.renderer, i)) {
                        this.numLeft--, this.queue.shift(), s = !0;
                        break
                    }
                    s || this.queue.shift()
                }
                if (this.queue.length)this.numLeft = r.UPLOADS_PER_FRAME; else {
                    this.ticking = !1, l.remove(this.tick, this);
                    var n = this.completes.slice(0);
                    for (this.completes.length = 0, t = 0, e = n.length; t < e; t++)n[t]()
                }
            }, r.prototype.register = function (t, e) {
                return t && this.addHooks.push(t), e && this.uploadHooks.push(e), this
            }, r.prototype.add = function (t) {
                var e, i;
                for (e = 0, i = this.addHooks.length; e < i && !this.addHooks[e](t, this.queue); e++);
                if (t instanceof h.Container)for (e = t.children.length - 1; e >= 0; e--)this.add(t.children[e]);
                return this
            }, r.prototype.destroy = function () {
                this.ticking && l.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null
            }, h.WebGLRenderer.registerPlugin("prepare", r)
        }, {"../../core": 97}],
        205: [function (t, e, i) {
            (function (i) {
                t("./polyfill");
                var r = e.exports = t("./core");
                r.extras = t("./extras"), r.filters = t("./filters"), r.interaction = t("./interaction"), r.loaders = t("./loaders"), r.mesh = t("./mesh"), r.particles = t("./particles"), r.accessibility = t("./accessibility"), r.extract = t("./extract"), r.prepare = t("./prepare"), r.loader = new r.loaders.Loader, Object.assign(r, t("./deprecation")), i.PIXI = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./accessibility": 76,
            "./core": 97,
            "./deprecation": 154,
            "./extract": 156,
            "./extras": 164,
            "./filters": 175,
            "./interaction": 180,
            "./loaders": 183,
            "./mesh": 191,
            "./particles": 194,
            "./polyfill": 200,
            "./prepare": 203
        }]
    }, {}, [205])(205)
});
var Stats = function () {
    function t(t) {
        return r.appendChild(t.dom), t
    }

    function e(t) {
        for (var e = 0; e < r.children.length; e++)r.children[e].style.display = e === t ? "block" : "none";
        i = t
    }

    var i = 0, r = document.createElement("div");
    r.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", r.addEventListener("click", function (t) {
        t.preventDefault(), e(++i % r.children.length)
    }, !1);
    var s = (performance || Date).now(), n = s, o = 0, a = t(new Stats.Panel("FPS", "#0ff", "#002")), h = t(new Stats.Panel("MS", "#0f0", "#020"));
    if (self.performance && self.performance.memory)var l = t(new Stats.Panel("MB", "#f08", "#201"));
    return e(0), {
        REVISION: 16, dom: r, addPanel: t, showPanel: e, begin: function () {
            s = (performance || Date).now()
        }, end: function () {
            o++;
            var t = (performance || Date).now();
            if (h.update(t - s, 200), t > n + 1e3 && (a.update(1e3 * o / (t - n), 100), n = t, o = 0, l)) {
                var e = performance.memory;
                l.update(e.usedJSHeapSize / 1048576, e.jsHeapSizeLimit / 1048576)
            }
            return t
        }, update: function () {
            s = this.end()
        }, domElement: r, setMode: e
    }
};
Stats.Panel = function (t, e, i) {
    var r = 1 / 0, s = 0, n = Math.round, o = n(window.devicePixelRatio || 1), a = 80 * o, h = 48 * o, l = 3 * o, c = 2 * o, u = 3 * o, d = 15 * o, p = 74 * o, f = 30 * o, g = document.createElement("canvas");
    g.width = a, g.height = h, g.style.cssText = "width:80px;height:48px";
    var m = g.getContext("2d");
    return m.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif", m.textBaseline = "top", m.fillStyle = i, m.fillRect(0, 0, a, h), m.fillStyle = e, m.fillText(t, l, c), m.fillRect(u, d, p, f), m.fillStyle = i, m.globalAlpha = .9, m.fillRect(u, d, p, f), {
        dom: g,
        update: function (h, v) {
            r = Math.min(r, h), s = Math.max(s, h), m.fillStyle = i, m.globalAlpha = 1, m.fillRect(0, 0, a, d), m.fillStyle = e, m.fillText(n(h) + " " + t + " (" + n(r) + "-" + n(s) + ")", l, c), m.drawImage(g, u + o, d, p - o, f, u, d, p - o, f), m.fillRect(u + p - o, d, o, f), m.fillStyle = i, m.globalAlpha = .9, m.fillRect(u + p - o, d, o, n((1 - h / v) * f))
        }
    }
}, "object" == typeof module && (module.exports = Stats);
var WLB = WLB || {};
WLB.EventDispatcher = function (t) {
    "use strict";
    function e() {
        this.e = {}, this.E = {}
    }

    e.prototype.buildEvt = function (t, e, s) {
        s = r.call(this, t, s), void 0 === this.e[t] && (this.e[t] = new signals.Signal), this.e[t].add(e), i.call(this, this.e[t], s)
    };
    var i = function (t, e) {
        for (var i = 0; i < t._bindings.length; i++)if (void 0 === t._bindings[i].id) {
            t._bindings[0].id = e;
            break
        }
    };
    e.prototype.destroyEvt = function (t, e, i) {
        if (i = r.call(this, t, i), 1 == this.e[t].getNumListeners())this.e[t].remove(e), delete this.e[t]; else for (var s = 0; s < this.e[t]._bindings.length; s++)if (i == this.e[t]._bindings[s].id) {
            this.e[t]._bindings[s].detach();
            break
        }
    }, e.prototype.dispatch = function (t, e) {
        void 0 === e ? this.e[t].dispatch() : this.e[t].dispatch(e)
    };
    var r = function (t, e) {
        return e = e ? e : this.id, e || "prod" == WLB.Config.ENV || console.warn('You must define an id for the "' + t + '" event on your "' + getConstructorName(this) + '" object.'), e
    };
    return e
}(window), WLB.Config = function (t) {
    "use strict";
    function e() {
        WLB.EventDispatcher.call(this), this.ENV = null, this.ENVS = null, this.ROUTES_FILES = null, this.ALL_LANG = null, this.HAS_MOBILE_VERSION = null, this.FORCE_DEVICE = null, this.GA_ID = null, this.CREDITS = null, this.HAS_FPS_STATS = null, this.HAS_MEMORY_STATS = null
    }

    e.prototype = Object.create(WLB.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.init = function () {
        i.call(this), r.call(this)
    };
    var i = function (t) {
        for (var e in STF_Config)this[e] = STF_Config[e]
    }, r = function () {
        console.log("%cmade by %c— " + this.CREDITS.author + " —%c " + this.CREDITS.authorUrl, "padding:8px 5px; color:" + this.CREDITS.color1 + "; line-height:25px;", "padding:8px 15px; color:" + this.CREDITS.color2 + "; background-color:" + this.CREDITS.color3 + "; line-height:25px;", "padding:8px 5px; color:" + this.CREDITS.color3 + "; line-height:25px;")
    };
    return e.prototype.setFPSStats = function (t) {
        this.HAS_FPS_STATS = t
    }, e.prototype.setMemoryStats = function (t) {
        this.HAS_MEMORY_STATS = t
    }, new e
}(window), WLB.Props = function (t) {
    "use strict";
    function e() {
        WLB.EventDispatcher.call(this), this.HAS_PUSHSTATE = null, this.TRANSFORM = null, this.HAS_TRANSFORMS = null, this.HAS_TRANSFORMS_3D = null, this.HAS_TRANSITIONS = null, this.HAS_ANIMATIONS = null
    }

    e.prototype = Object.create(WLB.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.init = function () {
        i.call(this)
    };
    var i = function () {
        this.HAS_PUSHSTATE = Modernizr.history, this.TRANSFORM = Modernizr.prefixed("transform"), this.HAS_TRANSFORMS = Modernizr.csstransforms, this.HAS_TRANSFORMS_3D = Modernizr.csstransforms3d, this.HAS_TRANSITIONS = Modernizr.csstransitions, this.HAS_ANIMATIONS = Modernizr.cssanimations
    };
    return new e
}(window), WLB.Device = function (t) {
    "use strict";
    function e() {
        WLB.EventDispatcher.call(this), this.HAS_MOBILE_VERSION = null, this.FORCE_DEVICE = null, this.DEVICE = null, this.IS_DESKTOP = null, this.IS_TABLET = null, this.IS_MOBILE = null, this.BROWSER = null, this.BROWSER_VERSION = null, this.BROWSER_ENGINE = null, this.IS_IE = null
    }

    e.prototype = Object.create(WLB.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.init = function () {
        i.call(this), r.call(this), s.call(this)
    };
    var i = function () {
        this.HAS_MOBILE_VERSION = WLB.Config.HAS_MOBILE_VERSION, this.FORCE_DEVICE = WLB.Config.FORCE_DEVICE
    }, r = function () {
        this.FORCE_DEVICE ? this.DEVICE = this.FORCE_DEVICE : this.DEVICE = Detectizr.device.type, this.IS_DESKTOP = "desktop" == this.DEVICE, this.IS_TABLET = "tablet" == this.DEVICE, this.IS_MOBILE = "mobile" == this.DEVICE
    }, s = function () {
        this.BROWSER = Detectizr.browser.name, this.BROWSER_VERSION = parseFloat(Detectizr.browser.major + "." + Detectizr.browser.minor), this.BROWSER_ENGINE = Detectizr.browser.engine, this.IS_IE = "ie" == this.BROWSER
    };
    return new e
}(window), WLB.Path = function (t) {
    "use strict";
    function e() {
        this.URL = null
    }

    e.prototype.init = function () {
        i.call(this)
    };
    var i = function () {
        var t = WLB.Config.ENVS.base_url;
        this.URL = {
            base: t,
            assets: t + "assets/",
            css: t + "assets/css/",
            favicons: t + "assets/favicons/",
            files: t + "assets/files/",
            img: t + "assets/img/",
            js: t + "assets/js/",
            json: t + "assets/json/",
            sounds: t + "assets/sounds/",
            svg: t + "assets/svg/",
            videos: t + "assets/videos/",
            routes: t + "configs/routes/",
            server: t + "server/"
        }
    };
    return new e
}(window), WLB.Lang = function (t) {
    "use strict";
    function e() {
    }

    e.prototype.init = function () {
        i.call(this), WLB.Router.setUrl(!0, null), r.call(this), s.call(this), n.call(this)
    };
    var i = function () {
        this.ALL_LANG = WLB.Config.ALL_LANG, this.DEFAULT_LANG = this.ALL_LANG[0], 1 == this.ALL_LANG.length ? this.MULTI_LANG = !1 : this.MULTI_LANG = !0
    }, r = function () {
        this.MULTI_LANG && 0 !== WLB.Router.URL.path.length ? this.LANG = WLB.Router.URL.pathParams[0] : this.LANG = this.DEFAULT_LANG
    }, s = function () {
        this.ALL_LANG.indexOf(this.LANG) < 0 && (this.LANG = this.DEFAULT_LANG)
    }, n = function () {
        this.LANG_LINK_ROOT = this.LANG == this.DEFAULT_LANG ? "" : this.LANG, this.LANG_LINK = this.MULTI_LANG ? this.LANG + "/" : ""
    };
    return new e
}(window), WLB.AbstractAssets = function (t) {
    "use strict";
    function e() {
        this.id = "AbstractAssets", this.aImg = {}, this.aJson = {}, this.jsonData = {}
    }

    e.prototype.init = function () {
    }, e.prototype.getAssetsToLoad = function (t, e, r) {
        var o = i.call(this, t, e, r), a = [];
        return a = s.call(this, "img", a, o), a = s.call(this, "json", a, o), "byPageDynamic" == r && (a = n.call(this, e, a)), a
    };
    var i = function (t, e, i) {
        var s = [];
        return e && "allStatic" == i ? s = r.call(this) : e && "byPageStatic" == i || e && "byPageDynamic" == i ? s = ["global", t] : (!e && "byPageStatic" == i || !e && "byPageDynamic" == i) && (s = [t]), s
    }, r = function () {
        var t = [];
        for (var e in this.aImg)t.push(e);
        for (e in this.aJson)t.indexOf(e) < 0 && t.push(e);
        return t
    }, s = function (t, e, i) {
        for (var r, s = "img" == t ? this.aImg : this.aJson, n = 0; n < i.length; n++) {
            r = s[i[n]];
            var a;
            if (void 0 !== r)for (var h in r)a = "object" === getType(r) ? h : null, o.call(this, e, a, r[h])
        }
        return e
    }, n = function (t, e) {
        for (var i = t ? WLB.MainView.$mainCont.find(WLB.PagesController.DYNAMIC_IMG_TO_LOAD) : WLB.MainView.$pageCont.find(WLB.PagesController.DYNAMIC_IMG_TO_LOAD), r = 0; r < i.length; r++)"true" != i[r].getAttribute("data-lazyload") && o.call(this, e, null, i[r].getAttribute("data-src"));
        return e
    }, o = function (t, e, i) {
        return t.indexOf(i) < 0 && null === e ? t.push(i) : t.indexOf(i) < 0 && null !== e ? t.push({
            id: e,
            src: i
        }) : void("prod" != WLB.Config.ENV && console.warn("AbstractAssets:" + i + " already added to the loading assets list!"))
    };
    return e.prototype.setJsonData = function (t, e) {
        this.jsonData[t] = e
    }, e
}(window), WLB.AbstractView = function (t) {
    "use strict";
    function e() {
        WLB.EventDispatcher.call(this), this.id = "AbstractView", this.E = {
            SHOW: "show",
            SHOWN: "shown",
            HIDE: "hide",
            HIDDEN: "hidden"
        }, this.tw = {}, this.tl = {}, this.isInit = !1
    }

    return e.prototype = Object.create(WLB.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.init = function () {
        this.initDOM(), this.initEl(), this.initTl(), this.bindEvents(), this.resize()
    }, e.prototype.initDOM = function () {
    }, e.prototype.initEl = function () {
    }, e.prototype.initTl = function () {
    }, e.prototype.bindEvents = function () {
        WLB.MainView.buildEvt(WLB.MainView.E.RESIZE, this.resize.bind(this))
    }, e.prototype.unbindEvents = function () {
        WLB.MainView.destroyEvt(WLB.MainView.E.RESIZE, this.resize.bind(this))
    }, e.prototype.initView = function () {
        this.isInit = !0
    }, e.prototype.show = function () {
    }, e.prototype.hide = function () {
    }, e.prototype.resize = function () {
    }, e.prototype.raf = function () {
    }, e.prototype.destroy = function () {
        this.isInit = !1, this.unbindEvents(), this.destroyGSAP()
    }, e.prototype.destroyGSAP = function () {
        for (var t in this.tw)this.killTween(t);
        for (var e in this.tl)this.killTimeline(e);
        this.tl = {}, this.tw = {}
    }, e.prototype.killTween = function (t) {
        this.tw[t] && (this.tw[t].kill(), this.tw[t] = null)
    }, e.prototype.killTimeline = function (t) {
        this.tl[t] && (this.tl[t].stop(), this.tl[t].clear(), this.tl[t].kill(), this.tl[t] = null)
    }, e.prototype.changeUrl = function (t) {
        if (WLB.Props.HAS_PUSHSTATE) {
            var e;
            "object" == typeof t ? (t.preventDefault(), e = t.currentTarget.href) : "string" == typeof t && (e = t), WLB.Router.updateUrl(e)
        }
    }, e.prototype.updateSearch = function () {
        "prod" != WLB.Config.ENV && console.error("You need to override the updateSearch() method from AbstractView in the current page view.")
    }, e.prototype.updateHash = function () {
        "prod" != WLB.Config.ENV && console.error("You need to override the updateHash() method from AbstractView in the current page view.")
    }, e
}(window), WLB.AbstractMainView = function (t) {
    "use strict";
    function e() {
        WLB.AbstractView.call(this), this.id = "AbstractMainView", this.E = {
            RESIZE: "resize",
            RAF: "raf",
            MOUSE_MOVE: "mousemove",
            MOUSE_DOWN: "mousedown",
            MOUSE_UP: "mouseup",
            WINDOW_OUT: "windowout",
            WINDOW_IN: "windowin"
        }, this.bW = null, this.bH = null, this.wW = null, this.wH = null, this.cX = null, this.cY = null, this.sY = null, this.siY = null, this.mX = null, this.mY = null, this.miX = null, this.miY = null, this.SCROLL_INERTIA = .09, this.MOUSE_INERTIA = .03, this.isWindowFocused = !0
    }

    e.prototype = Object.create(WLB.AbstractView.prototype), e.prototype.constructor = e, e.prototype.init = function () {
        WLB.AbstractView.prototype.init.call(this), this.initStaticsViews(), this.resize()
    }, e.prototype.initDOM = function () {
        this.$window = $(t), this.$body = $(document.body), this.$mainCont = $(document.getElementById("main-container")), this.$pageCont = $(document.getElementById("page-container"))
    }, e.prototype.initEl = function () {
        "scrollRestoration" in history && (history.scrollRestoration = "manual")
    }, e.prototype.bindEvents = function () {
        this.$window.on("resize", $.proxy(this.resize, this))
    }, e.prototype.initStaticsViews = function () {
        removeClass(this.$mainCont[0], "preload")
    }, e.prototype.resize = function () {
        i.call(this), void 0 !== this.e.resize && this.dispatch(this.E.RESIZE)
    };
    var i = function () {
        this.bW = this.$body.width(), this.bH = this.$body.height(), this.wW = this.$window.width(), this.wH = this.$window.height(), this.cX = Math.round(this.bW / 2), this.cY = Math.round(this.wH / 2), null === this.mX && null === this.mY && (this.mX = this.cX, this.mY = this.cY, this.miX = this.cX, this.miY = this.cY)
    };
    e.prototype.raf = function () {
        WLB.Config.HAS_FPS_STATS && "preprod" != WLB.Config.ENV && "prod" != WLB.Config.ENV && WLB.Utils.FPSStats.begin(), r.call(this), void 0 !== this.e.raf && this.dispatch(this.E.RAF), WLB.Config.HAS_FPS_STATS && "preprod" != WLB.Config.ENV && "prod" != WLB.Config.ENV && WLB.Utils.FPSStats.end(), WLB.Config.HAS_MEMORY_STATS && "preprod" != WLB.Config.ENV && "prod" != WLB.Config.ENV && WLB.Utils.MemoryStats.update()
    };
    var r = function () {
        WLB.Views.Statics.Header.menuNav.isIntrosShown || (this.sY = null === WLB.Views.Statics.Header.menuNav.savedScrollY ? this.$window[0].scrollY || this.$window[0].pageYOffset : WLB.Views.Statics.Header.menuNav.savedScrollY, this.siY += getInertia(this.sY, this.siY, this.SCROLL_INERTIA)), this.miX += getInertia(this.mX, this.miX, this.MOUSE_INERTIA), this.miY += getInertia(this.mY, this.miY, this.MOUSE_INERTIA)
    };
    return e.prototype.mouseMove = function (t) {
        this.mX = t.clientX, this.mY = t.clientY, void 0 !== this.e.mousemove && this.dispatch(this.E.MOUSE_MOVE)
    }, e.prototype.mouseDown = function () {
        void 0 !== this.e.mousedown && this.dispatch(this.E.MOUSE_DOWN)
    }, e.prototype.mouseUp = function () {
        void 0 !== this.e.mouseup && this.dispatch(this.E.MOUSE_UP)
    }, e.prototype.windowOut = function () {
        this.isWindowFocused = !1, void 0 !== this.e.windowout && this.dispatch(this.E.WINDOW_OUT)
    }, e.prototype.windowIn = function () {
        this.isWindowFocused = !0, void 0 !== this.e.windowin && this.dispatch(this.E.WINDOW_IN)
    }, e.prototype.setScrollY = function (t) {
        WLB.MainView.$window[0].scrollTo(0, t), this.sY = t, this.siY = t
    }, e.prototype.initAfterAssetsLoaded = function () {
    }, e
}(window), WLB.AbstractMainLoader = function (t) {
    "use strict";
    function e() {
        WLB.AbstractView.call(this), this.id = "AbstractMainLoader", this.E = {
            PROGRESS: "progress",
            FILE_LOAD: "fileLoad",
            COMPLETE: "complete",
            SHOWN: "shown",
            HIDDEN: "hidden"
        }
    }

    e.prototype = Object.create(WLB.AbstractView.prototype), e.prototype.constructor = e, e.prototype.init = function () {
        WLB.AbstractView.prototype.init.call(this), i.call(this)
    }, e.prototype.initDOM = function () {
    }, e.prototype.initTl = function () {
    }, e.prototype.resize = function () {
        WLB.AbstractView.prototype.resize.call(this)
    };
    var i = function () {
        this.assetsLoader = new WLB.Loader((!0), (!0)), this.assetsLoader.init(), this.assetsLoader.buildEvt(this.assetsLoader.E.PROGRESS, this.onProgress.bind(this)), this.assetsLoader.buildEvt(this.assetsLoader.E.FILE_LOAD, r.bind(this)), this.assetsLoader.buildEvt(this.assetsLoader.E.COMPLETE, s.bind(this));
    };
    e.prototype.loadAssets = function (t) {
        this.assetsLoader.startLoad(t)
    }, e.prototype.onProgress = function (t) {
    };
    var r = function (t) {
        this.dispatch(this.E.FILE_LOAD, t)
    }, s = function (t) {
        this.dispatch(this.E.COMPLETE, t)
    };
    return e
}(window), WLB.Video = function (t) {
    "use strict";
    function e(t, e, i, r, s, n) {
        WLB.AbstractView.call(this), this.id = "Video", this.E = {
            LOAD_START: "loadStart",
            CAN_PLAY: "canPlay",
            CAN_PLAY_THROUGH: "canPlayThrough",
            LOADING_PROGRESS: "loadingProgress",
            ENDED: "ended"
        }, this.id = t, this.url = e, this.poster = i, this.isFireLoadStart = r, this.isFireCanPlay = s, this.isFireCanPlayThrough = n, this.duration = null, this.isLoadStart = !1, this.isCanPlay = !1, this.isCanPlayThrough = !1
    }

    e.prototype = Object.create(WLB.AbstractView.prototype), e.prototype.constructor = e, e.prototype.initDOM = function () {
        this.$video = $(document.getElementById(this.id))
    }, e.prototype.initEl = function () {
        i.call(this)
    }, e.prototype.bindEvents = function () {
        this.$video.on("loadstart", $.proxy(r, this)), this.$video.on("canplay", $.proxy(s, this)), this.$video.on("canplaythrough", $.proxy(n, this))
    }, e.prototype.unbindEvents = function () {
        this.$video.off("loadstart", $.proxy(r, this)), this.$video.off("canplay", $.proxy(s, this)), this.$video.off("canplaythrough", $.proxy(n, this))
    };
    var i = function () {
        null !== this.poster && this.$video[0].setAttribute("poster", this.poster)
    };
    e.prototype.setUrl = function (t) {
        null !== t && (this.url = t), this.$video[0].src = this.url
    }, e.prototype.load = function () {
        this.$video[0].load(), this.$video[0].setAttribute("preload", "auto")
    }, e.prototype.play = function () {
        this.$video[0].play()
    }, e.prototype.pause = function () {
        this.$video[0].pause()
    }, e.prototype.getDuration = function () {
        return this.duration
    }, e.prototype.getCurrentTime = function () {
        return this.$video[0].currentTime
    }, e.prototype.setCurrentTime = function (t) {
        this.$video[0].currentTime = t
    }, e.prototype.setVolume = function (t) {
        this.$video[0].volume = t
    }, e.prototype.getProgress = function () {
        if (this.duration) {
            var t = Math.round(this.$video[0].currentTime / this.duration * 100);
            return t
        }
    };
    var r = function () {
        this.isFireLoadStart && !this.isLoadStart && WLB.Device.IS_DESKTOP && (this.isLoadStart = !0, this.dispatch(this.E.LOAD_START))
    }, s = function () {
        this.isFireCanPlay && !this.isCanPlay && WLB.Device.IS_DESKTOP && (this.isCanPlay = !0, this.duration = this.$video[0].duration, this.dispatch(this.E.CAN_PLAY))
    }, n = function () {
        this.isFireCanPlayThrough && !this.isCanPlayThrough && (this.isCanPlayThrough = !0, WLB.Device.IS_DESKTOP && this.dispatch(this.E.CAN_PLAY_THROUGH))
    };
    return e
}(window), WLB.Router = function (t) {
    "use strict";
    function e() {
        WLB.EventDispatcher.call(this), this.ROUTES = {}, this.URL = {}, this.ALT_LANG_URL = {}, this.LINK = {}, this.isHomepage = null, this.isPageChange = null, this.isSearchChange = null, this.isHashChange = null, this.pageChangeByNav = null, this.tempData = null, this.tempUrl = null
    }

    e.prototype = Object.create(WLB.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.setUrl = function (t, e) {
        this.URL.full = i.call(this, e), this.URL.path = this.URL.full.STF_getPath(), this.URL.pathParams = this.URL.path.split("/"), this.URL.search = this.URL.full.STF_getSearch(), this.URL.searchParams = this.URL.full.STF_getParams("search"), this.URL.hash = this.URL.full.STF_getHash(), this.URL.hashParams = this.URL.full.STF_getParams("hash"), this.URL.fullGA = r.call(this)
    };
    var i = function (e) {
        var i;
        return i = null === e ? t.location.href : e
    }, r = function () {
        var t = this.URL.full.replace(WLB.Path.URL.base, "");
        return t
    };
    e.prototype.init = function () {
        s.call(this), WLB.PagesController.initFirstPage()
    };
    var s = function () {
        WLB.MainView.$window.on("popstate", $.proxy(n, this)), WLB.MainView.$window.on("hashchange", $.proxy(o, this))
    };
    e.prototype.checkUrlCorrespondence = function () {
        this.pageChangeByNav = null, this.URL.full != i.call(this, null) && n.call(this)
    }, e.prototype.updateUrl = function (t) {
        if (!WLB.PagesController.isPageChange) {
            this.pageChangeByNav = !0, a.call(this, t), this.setUrl(!1, t);
            var e = {
                isPageChange: this.isPageChange,
                isSearchChange: this.isSearchChange,
                isHashChange: this.isHashChange
            };
            (!WLB.Device.IS_DESKTOP || WLB.Device.IS_DESKTOP && "error-404" == WLB.PagesController.pageInfos.id) && history.pushState(e, "", t), this.tempData = e, this.tempUrl = t, this.isPageChange ? WLB.PagesController.changePage(this.URL.full) : this.isSearchChange ? WLB.PagesController.changeSearch() : this.isHashChange && WLB.PagesController.changeHash()
        }
    }, e.prototype.updateHistory = function () {
        history.pushState(this.tempData, "", this.tempUrl)
    };
    var n = function (e) {
        this.pageChangeByNav = !1, WLB.PagesController.isPageChange || (a.call(this, t.location.href), (this.isPageChange || this.isSearchChange) && this.setUrl(!1, null), this.isPageChange ? WLB.PagesController.changePage(this.URL.full) : this.isSearchChange && WLB.PagesController.changeSearch())
    }, o = function (e) {
        WLB.PagesController.isPageChange || (a.call(this, t.location.href), this.setUrl(!1, null), !this.isHashChange || this.isPageChange || this.isSearchChange || WLB.PagesController.changeHash())
    }, a = function (t) {
        h.call(this, t), l.call(this, t), c.call(this, t)
    }, h = function (t) {
        var e = t.STF_getPath();
        this.isPageChange = this.URL.path != e
    }, l = function (t) {
        var e = t.STF_getSearch();
        this.isSearchChange = this.URL.search != e
    }, c = function (t) {
        var e = t.STF_getHash();
        this.isHashChange = this.URL.hash != e
    };
    return e.prototype.setAltLangUrl = function (t) {
        for (var e, i = 0; i < WLB.Lang.ALL_LANG.length; i++)e = WLB.Lang.ALL_LANG[i], e != WLB.Lang.LANG && (this.ALT_LANG_URL[e] = t[0].getAttribute("data-lang-" + e))
    }, e.prototype.updateGA = function () {
        if ("prod" == WLB.Config.ENV && Object.keys(WLB.Config.GA_ID).length > 0)for (var t in WLB.Config.GA_ID)"default" == t ? ga("send", "pageview", "/" + this.URL.fullGA) : ga(t + ".send", "pageview", "/" + this.URL.fullGA)
    }, new e
}(window), WLB.Models = WLB.Models || {}, WLB.Models.Assets = function (t) {
    "use strict";
    function e() {
        WLB.AbstractAssets.call(this), this.id = "Assets"
    }

    return e.prototype = Object.create(WLB.AbstractAssets.prototype), e.prototype.constructor = e, e.prototype.init = function () {
        this.aImg = {
            global: [WLB.Path.URL.img + "bgs/scene.jpg", WLB.Path.URL.img + "icons/grab.ico", WLB.Path.URL.img + "icons/grabbing.ico", WLB.Path.URL.img + "icons/preloader/pine-1.png", WLB.Path.URL.img + "icons/preloader/pine-2.png", WLB.Path.URL.img + "icons/preloader/pine-3.png", WLB.Path.URL.img + "icons/preloader/pine-4.png", WLB.Path.URL.img + "icons/preloader/pine-5.png", WLB.Path.URL.img + "icons/preloader/pine-6.png", WLB.Path.URL.img + "icons/preloader/pine-7.png", WLB.Path.URL.img + "icons/preloader/pine-8.png", WLB.Path.URL.img + "icons/preloader/pine-9.png", WLB.Path.URL.img + "icons/preloader/pine-10.png", WLB.Path.URL.img + "icons/preloader/pine-11.png", WLB.Path.URL.img + "icons/preloader/pine-12.png", WLB.Path.URL.img + "icons/preloader/pine-13.png", WLB.Path.URL.img + "icons/preloader/pine-14.png", WLB.Path.URL.img + "icons/preloader/pine-15.png", WLB.Path.URL.img + "icons/preloader/pine-16.png", WLB.Path.URL.img + "icons/preloader/pine-17.png", WLB.Path.URL.img + "icons/preloader/pine-18.png", WLB.Path.URL.img + "icons/preloader/pine-19.png", WLB.Path.URL.img + "icons/preloader/pine-20.png", WLB.Path.URL.img + "icons/preloader/pine-21.png", WLB.Path.URL.img + "icons/preloader/pine-22.png", WLB.Path.URL.img + "icons/preloader/pine-23.png", WLB.Path.URL.img + "icons/preloader/pine-24.png", WLB.Path.URL.img + "icons/preloader/pine-25.png", WLB.Path.URL.img + "icons/preloader/pine-26.png", WLB.Path.URL.img + "icons/preloader/pine-27.png", WLB.Path.URL.img + "icons/preloader/pine-28.png", WLB.Path.URL.img + "icons/preloader/pine-29.png", WLB.Path.URL.img + "icons/preloader/pine-30.png", WLB.Path.URL.img + "icons/preloader/pine-31.png", WLB.Path.URL.img + "icons/preloader/pine-32.png", WLB.Path.URL.img + "icons/preloader/pine-33.png", WLB.Path.URL.img + "icons/preloader/pine-34.png", WLB.Path.URL.img + "icons/preloader/pine-35.png", WLB.Path.URL.img + "icons/preloader/pine-36.png", WLB.Path.URL.img + "icons/preloader/pine-37.png", WLB.Path.URL.img + "icons/preloader/pine-38.png", WLB.Path.URL.img + "icons/preloader/pine-39.png", WLB.Path.URL.img + "others/intro/intro-1-bw.jpg", WLB.Path.URL.img + "others/intro/intro-1.jpg", WLB.Path.URL.img + "others/intro/intro-2-bw.jpg", WLB.Path.URL.img + "others/intro/intro-2.jpg", WLB.Path.URL.img + "others/intro/intro-3-bw.jpg", WLB.Path.URL.img + "others/intro/intro-3.jpg", WLB.Path.URL.img + "others/intro/intro-4-bw.jpg", WLB.Path.URL.img + "others/intro/intro-4.jpg"],
            "error-404": [WLB.Path.URL.img + "others/404.jpg"],
            "not-available": []
        }, this.aJson = {}
    }, new e
}(window), WLB.Loader = function (t) {
    "use strict";
    function e(t, e) {
        WLB.EventDispatcher.call(this), this.id = "Loader", this.isOnProgress = t, this.isOnFileLoad = e, this.E = {
            STARTED: "started",
            PROGRESS: "progress",
            FILE_LOAD: "fileLoad",
            COMPLETE: "complete",
            ERROR: "error"
        }, this.data = [], this.queue = null, this.init()
    }

    e.prototype = Object.create(WLB.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.init = function () {
        this.queue = new createjs.LoadQueue((!0)), this.bindEvents()
    }, e.prototype.bindEvents = function () {
        this.queue.addEventListener("loadstart", $.proxy(i, this)), this.queue.addEventListener("progress", $.proxy(r, this)), this.queue.addEventListener("fileload", $.proxy(s, this)), this.queue.addEventListener("complete", $.proxy(n, this)), this.queue.addEventListener("error", $.proxy(o, this))
    }, e.prototype.unbindEvents = function () {
        this.queue.removeAllEventListeners()
    }, e.prototype.startLoad = function (t) {
        0 !== t.length ? this.queue.loadManifest(t) : n.call(this, null)
    }, e.prototype.destroy = function () {
        this.unbindEvents(), this.queue.removeAll()
    };
    var i = function (t) {
    }, r = function (t) {
        this.isOnProgress && this.dispatch(this.E.PROGRESS, 100 * t.progress)
    }, s = function (t) {
        this.isOnFileLoad ? this.dispatch(this.E.FILE_LOAD, t) : this.data[t.item.id] = t.result
    }, n = function (t) {
        this.queue.removeAll(), this.dispatch(this.E.COMPLETE, this.data)
    }, o = function (t) {
    };
    return e
}(window), WLB.LazyLoader = function (t) {
    "use strict";
    function e(t, e, i, r) {
        WLB.EventDispatcher.call(this), this.id = "LazyLoader", this.$container = t, this.CLASS_NAME = e, this.STACK_SIZE = i, this.posLoadedImg = 0, this.imgToLazyload = [], this.loaderImg = null, r && this.init()
    }

    return e.prototype = Object.create(WLB.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.init = function () {
        this.initDOM(this), this.initEl(this), this.bindEvents(this), this.startLazyload.call(this)
    }, e.prototype.initDOM = function () {
        this.$imgToLazyload = this.$container.find("img." + this.CLASS_NAME)
    }, e.prototype.initEl = function () {
        this.loaderImg = new WLB.Loader((!1), (!0));
        for (var t, e = 0; e < this.$imgToLazyload.length; e++)t = this.$imgToLazyload[e].getAttribute("data-src"), this.imgToLazyload.indexOf(t) < 0 && this.imgToLazyload.push(t)
    }, e.prototype.bindEvents = function () {
        this.loaderImg.buildEvt(this.loaderImg.E.FILE_LOAD, this.onImgLoad.bind(this)), this.loaderImg.buildEvt(this.loaderImg.E.COMPLETE, this.onImgLoadingComplete.bind(this))
    }, e.prototype.unbindEvents = function () {
        this.loaderImg.destroyEvt(this.loaderImg.E.FILE_LOAD, this.onImgLoad.bind(this)), this.loaderImg.destroyEvt(this.loaderImg.E.COMPLETE, this.onImgLoadingComplete.bind(this))
    }, e.prototype.destroy = function () {
        this.unbindEvents.call(this), this.loaderImg.destroy()
    }, e.prototype.startLazyload = function () {
        if (0 !== this.imgToLazyload.length) {
            var t = this.imgToLazyload.slice(this.posLoadedImg, this.posLoadedImg + this.STACK_SIZE);
            this.loaderImg.startLoad(t)
        }
    }, e.prototype.onImgLoad = function (t) {
        for (var e = this.$imgToLazyload.filter('[ data-src="' + t.item.src + '" ]'), i = 0; i < e.length; i++)e[i].src = t.item.src, e[i].offsetHeight, addClass($(e[i]).parent("div")[0], "loaded")
    }, e.prototype.onImgLoadingComplete = function () {
        this.posLoadedImg += this.STACK_SIZE, this.posLoadedImg < this.imgToLazyload.length ? this.startLazyload.call(this) : this.onLazyloadCompleted.call(this)
    }, e.prototype.onLazyloadCompleted = function () {
    }, e
}(window), WLB.CanvasLazyLoader = function (t) {
    "use strict";
    function e(t, e) {
        WLB.LazyLoader.call(this, null, null, e, !1), this.id = "CanvasLazyLoader", this.E = {
            IMG_LOADED: "imgLoaded",
            LOADED: "loaded"
        }, this.imgToLazyload = t
    }

    return e.prototype = Object.create(WLB.LazyLoader.prototype), e.prototype.constructor = e, e.prototype.init = function () {
        this.initEl.call(this), this.bindEvents.call(this)
    }, e.prototype.initEl = function () {
        this.loaderImg = new WLB.Loader((!1), (!0))
    }, e.prototype.onImgLoad = function (t) {
        this.dispatch(this.E.IMG_LOADED)
    }, e.prototype.onLazyloadCompleted = function () {
        this.dispatch(this.E.LOADED)
    }, e
}(window), WLB.Utils = WLB.Utils || {}, WLB.Utils.Global = function (t) {
    "use strict";
    t.color = {}, t.encryptMailto = function (t, e, i, r, s) {
        var n = t.className, o = "mailto", a = ":", h = "@", l = ".", c = s ? e + h + i + l + r : t.innerHTML, u = o + a + e + h + i + l + r;
        t.outerHTML = '<a href="' + u + '" class="' + n + '">' + c + "</a>"
    }, t.getObjSize = function (t) {
        var e = 0;
        for (var i in t)t.hasOwnProperty(i) && e++;
        return e
    }, t.getType = function (t) {
        return {}.toString.call(t).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
    }, t.getConstructorName = function (t) {
        var e = (t.prototype ? t.prototype.constructor : t.constructor).toString(), i = e.match(/function\s(\w*)/)[1], r = ["", "anonymous", "Anonymous"];
        return r.indexOf(i) > -1 ? "Function" : i
    }
}(window), WLB.Utils = WLB.Utils || {}, WLB.Utils.DOM = function (t) {
    "use strict";
    t.addClass = function (t, e) {
        t.classList ? t.classList.add(e) : hasClass(t, e) || (t.className += " " + e)
    }, t.removeClass = function (t, e) {
        if (t.classList)t.classList.remove(e); else {
            t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), "");
            var i = t.className.length - 1;
            " " == t.className[i] && (t.className = t.className.substring(0, i))
        }
    }, t.resetClass = function (t) {
        t.className = ""
    }, t.hasClass = function (t, e) {
        var i;
        return i = t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
    }, t.resetStyle = function (t) {
        t.style.cssText = ""
    }, t.setTranslate = function (t, e, i) {
        e = null === e ? 0 : e, i = null === i ? 0 : i, WLB.Props.HAS_TRANSFORMS_3D ? t.style[WLB.Props.TRANSFORM] = "translate3d(" + e + "px, " + i + "px, 0px)" : t.style[WLB.Props.TRANSFORM] = "translate(" + e + "px, " + i + "px)"
    }
}(window), WLB.Utils = WLB.Utils || {}, WLB.Utils.Math = function (t) {
    "use strict";
    t.getElPos = function (t, e, i, r) {
        var s = t / e, n = i / r, o = {x: 0, y: 0, w: 0, h: 0};
        return s < n ? (o.w = i, o.h = Math.round(o.w / s), o.y = Math.round(-(o.h - r) / 2)) : (o.h = r, o.w = Math.round(o.h * s), o.x = Math.round(-(o.w - i) / 2)), o
    }, t.getCropPos = function (t, e, i, r) {
        var s = t / e, n = i / r, o = {x: 0, y: 0, w: 0, h: 0};
        return s < n ? (o.w = t, o.h = Math.round(o.w / n), o.y = Math.round(-(o.h - e) / 2)) : (o.h = e, o.w = Math.round(o.h * n), o.x = Math.round(-(o.w - t) / 2)), o
    }, t.degToRad = function (t) {
        return t * Math.PI / 180
    }, t.radToDeg = function (t) {
        return 180 * t / Math.PI
    }, t.getHypotenuse = function (t, e) {
        return Math.sqrt(t * t + e * e)
    }, t.getInertia = function (t, e, i) {
        return Math.abs((t - e) * i) >= .01 ? (t - e) * i : t - e
    }
}(window), WLB.Utils = WLB.Utils || {}, WLB.Utils.Array = function (t) {
    "use strict";
    t.STF_arr_insert = function (t, e, i) {
        return "object" != typeof i ? t.splice(e, 0, i) : i.map(function (i, r) {
            return t.splice(e + r, 0, i)
        }), t
    }
}(window), WLB.Utils = WLB.Utils || {}, WLB.Utils.String = function (t) {
    "use strict";
    String.prototype.STF_removeFirstSpecificChar = function (t) {
        var e = this;
        return e.substr(0, 1) == t && (e = e.substr(1)), e
    }, String.prototype.STF_removeLastSpecificChar = function (t) {
        var e = this;
        return e.substr(e.length - 1, 1) == t && (e = e.substr(0, e.length - 1)), e
    }, String.prototype.STF_convertToUrl = function () {
        var t = this, e = document.createElement("a");
        return e.href = t, e
    }, String.prototype.STF_getPath = function (t) {
        null !== t && void 0 !== t || (t = WLB.Path.URL.base);
        var e = this.replace(t, "");
        return e = e.split("#")[0], e = e.split("?")[0], e = e.STF_removeFirstSpecificChar("/"), e = e.STF_removeLastSpecificChar("/")
    }, String.prototype.STF_getSearch = function () {
        var t = this.STF_convertToUrl(), e = t.search.split("?")[1] || "";
        return e = e.STF_removeFirstSpecificChar("/"), e = e.STF_removeLastSpecificChar("/")
    }, String.prototype.STF_getHash = function () {
        var t = this.STF_convertToUrl(), e = t.hash.split("#")[1] || "";
        return e = e.STF_removeFirstSpecificChar("/"), e = e.STF_removeLastSpecificChar("/")
    }, String.prototype.STF_getParams = function (t) {
        var e, i, r = this.STF_convertToUrl(), s = {};
        if (r[t].length > 1)for (var n, o = 0, a = r[t].substr(1).split("&"); o < a.length; o++)n = a[o].split("="), e = unescape(n[0]), e = e.STF_removeFirstSpecificChar("/"), e = e.STF_removeLastSpecificChar("/"), i = n.length > 1 ? unescape(n[1]) : "", i = i.STF_removeFirstSpecificChar("/"), i = i.STF_removeLastSpecificChar("/"), s[e] = i;
        return s
    }
}(window), WLB.Utils = WLB.Utils || {}, WLB.Utils.FPSStats = function (t) {
    "use strict";
    function e() {
        this.stats = null
    }

    return e.prototype.init = function () {
        this.stats = new Stats, this.stats.setMode(0), this.stats.dom.style.top = "auto", this.stats.dom.style.left = "auto", this.stats.dom.style.right = "0px", this.stats.dom.style.bottom = "0px", this.stats.dom.style.zIndex = 88, document.body.appendChild(this.stats.dom)
    }, e.prototype.begin = function () {
        this.stats.begin()
    }, e.prototype.end = function () {
        this.stats.end()
    }, new e
}(window), WLB.MainView = function (t) {
    "use strict";
    function e() {
        WLB.AbstractMainView.call(this), this.id = "MainView"
    }

    return e.prototype = Object.create(WLB.AbstractMainView.prototype), e.prototype.constructor = e, e.prototype.bindEvents = function () {
        WLB.AbstractMainView.prototype.bindEvents.call(this), TweenLite.ticker.addEventListener("tick", this.raf, this), this.$window.on("mousemove", $.proxy(this.mouseMove, this)), this.$window.on("mouseup", $.proxy(this.mouseUp, this))
    }, e.prototype.initStaticsViews = function () {
        WLB.Views.Statics.Header.init(), WLB.Views.Statics.Footer.init(), WLB.Views.Statics.CanvasController.init(), WLB.Views.Statics.MainLoader.init(), WLB.AbstractMainView.prototype.initStaticsViews.call(this)
    }, e.prototype.initAfterAssetsLoaded = function () {
        WLB.Views.Statics.Header.menuNav.initIntros(), this.resize()
    }, e.prototype.setBodyHeight = function (t) {
        null === t && (t = this.$pageCont.height()), this.$body[0].style.height = t + "px"
    }, new e
}(window), WLB.AbstractPagesController = function (t) {
    "use strict";
    function e() {
        WLB.EventDispatcher.call(this), this.id = "AbstractPagesController", this.LOADING_MODE = "byPageStatic", this.DYNAMIC_IMG_TO_LOAD = "img", this.IS_HIDE_INIT = !0, this.pages = {}, this.page = null, this.prevPageInfos = {}, this.pageInfos = {}, this.isFirstLoad = !0, this.isPageChange = !0, this.isContentLoaded = !1, this.isAssetsLoaded = !1, this.isPageHidden = !1, this.isPageShown = !1, this.isMainLoaderShown = !1, this.isMainLoaderHidden = !1, this.data = null
    }

    e.prototype = Object.create(WLB.EventDispatcher.prototype), e.prototype.constructor = e, e.prototype.init = function () {
        this.initPages(), i.call(this)
    }, e.prototype.initPages = function () {
        this.pages = {
            "error-404": WLB.Views.Pages.Error404,
            home: WLB.Views.Pages.Home,
            piste: WLB.Views.Pages.Piste,
            free: WLB.Views.Pages.Free,
            junior: WLB.Views.Pages.Junior
        }
    };
    var i = function () {
        this.assetsModel = WLB.Models.Assets, this.assetsModel.init(), this.mainLoader = WLB.Views.Statics.MainLoader
    };
    e.prototype.bindEvents = function () {
        this.mainLoader.buildEvt(this.mainLoader.E.FILE_LOAD, o.bind(this)), this.mainLoader.buildEvt(this.mainLoader.E.COMPLETE, h.bind(this))
    }, e.prototype.initFirstPage = function () {
        this.bindEvents(), r.call(this), this.manageMenuLinks(), n.call(this)
    };
    var r = function () {
        var t = $(document.getElementById("page")), e = t[0].getAttribute("data-js-id"), i = t[0].getAttribute("data-title");
        this.prevPageInfos.id = this.pageInfos.id, this.prevPageInfos.title = this.pageInfos.title, this.pageInfos.id = e, this.pageInfos.title = i, s.call(this), WLB.Router.setAltLangUrl(t)
    }, s = function () {
        void 0 === this.pages[this.pageInfos.id] ? ("prod" != WLB.Config.ENV && console.warn('PagesController: no specific page view for the "' + this.pageInfos.id + '" ID. If you need one, create it and then set the view in the PagesController.pages object.'), this.page = new WLB.AbstractPageView) : this.page = new this.pages[this.pageInfos.id]
    };
    e.prototype.initPageChangeValues = function () {
        this.isContentLoaded = !1, this.isAssetsLoaded = !1, this.isPageHidden = !1, this.isPageShown = !1, this.isMainLoaderShown = !1, this.isMainLoaderHidden = !1
    };
    var n = function () {
        var t = this.assetsModel.getAssetsToLoad(this.pageInfos.id, this.isFirstLoad, this.LOADING_MODE);
        this.mainLoader.loadAssets(t)
    }, o = function (t) {
        "image" == t.item.type ? a.call(this, t) : "json" == t.item.type && this.assetsModel.setJsonData(t.item.id, t.result)
    }, a = function (t) {
        for (var e = $("img").filter('[ data-src="' + t.item.src + '" ]'), i = 0; i < e.length; i++)e[i].src = t.item.src, e[i].offsetHeight
    }, h = function () {
        this.isFirstLoad ? (WLB.MainView.initAfterAssetsLoaded(), this.page.init(), this.page.buildEvt(this.page.E.SHOWN, this.onPageShown.bind(this)), this.page.show(), this.mainLoader.buildEvt(this.mainLoader.E.HIDDEN, this.onMainLoaderHidden.bind(this)), this.IS_HIDE_INIT ? this.mainLoader.hideInit() : this.mainLoader.hide()) : this.isFirstLoad || "byPageStatic" != this.LOADING_MODE && "byPageDynamic" != this.LOADING_MODE || (this.isAssetsLoaded = !0, this.checkPageHiding())
    };
    e.prototype.changePage = function (t) {
        WLB.Router.updateGA(), _.call(this), this.initPageChangeValues(), "allStatic" == this.LOADING_MODE && (this.isAssetsLoaded = !0), l.call(this, t), this.managePageHidingTransitions()
    }, e.prototype.changeSearch = function () {
        this.page.updateSearch()
    }, e.prototype.changeHash = function () {
        this.page.updateHash()
    };
    var l = function (t) {
        $.ajax({
            context: this,
            url: t,
            type: "POST",
            data: {ajax: "true", type: "pageChange"},
            dataType: "html",
            success: c.bind(this),
            error: u.bind(this)
        })
    }, c = function (t) {
        this.data = t, this.isContentLoaded = !0, this.checkPageHiding()
    }, u = function (t) {
        console.warn("Ajax loading error", t), 404 == t.status && d.call(this)
    }, d = function () {
        var t = WLB.Lang.MULTI_LANG ? WLB.Lang.LANG + "/" : "", e = WLB.Path.URL.base + t + "404";
        l.call(this, e)
    };
    e.prototype.managePageHidingTransitions = function () {
        this.page.buildEvt(this.page.E.HIDDEN, this.onPageHidden.bind(this)), this.page.hide(), this.mainLoader.buildEvt(this.mainLoader.E.SHOWN, this.onMainLoaderShown.bind(this)), this.mainLoader.show()
    }, e.prototype.onPageHidden = function () {
        this.page.destroyEvt(this.page.E.HIDDEN, this.onPageHidden.bind(this)), p.call(this), this.isPageHidden = !0, this.checkPageHiding()
    };
    var p = function () {
        this.page.destroy(), this.page = null
    };
    e.prototype.onMainLoaderShown = function () {
        this.mainLoader.destroyEvt(this.mainLoader.E.SHOWN, this.onMainLoaderShown.bind(this)), this.isMainLoaderShown = !0, this.checkPageHiding()
    }, e.prototype.checkPageHiding = function () {
        "allStatic" == this.LOADING_MODE && this.isContentLoaded && this.isAssetsLoaded && this.isPageHidden && this.isMainLoaderShown ? (this.setContent(), this.showPage()) : ("byPageStatic" == this.LOADING_MODE || "byPageDynamic" == this.LOADING_MODE) && this.isContentLoaded && !this.isAssetsLoaded && this.isPageHidden && this.isMainLoaderShown ? this.setContent() : ("byPageStatic" == this.LOADING_MODE || "byPageDynamic" == this.LOADING_MODE) && this.isContentLoaded && this.isAssetsLoaded && this.isPageHidden && this.isMainLoaderShown && this.showPage()
    }, e.prototype.setContent = function () {
        WLB.MainView.$pageCont[0].innerHTML = this.data, r.call(this), "allStatic" != this.LOADING_MODE && (f.call(this), setTimeout(function () {
            n.call(this)
        }.bind(this), 0)), this.data = null
    };
    var f = function () {
        for (var t, e, i = WLB.MainView.$pageCont.find("img"), r = 0; r < i.length; r++)t = i[r], e = t.src, t.src = "", t.src = WLB.Path.URL.img + "bgs/pattern-transparent.png", t.setAttribute("data-src", e)
    };
    e.prototype.showPage = function () {
        this.manageMenuLinks(), g.call(this), v.call(this), this.page.init(), this.managePageShowingTransitions()
    }, e.prototype.managePageShowingTransitions = function () {
        this.page.buildEvt(this.page.E.SHOWN, this.onPageShown.bind(this)), this.page.show(), this.mainLoader.buildEvt(this.mainLoader.E.HIDDEN, this.onMainLoaderHidden.bind(this)), this.mainLoader.hide()
    }, e.prototype.onPageShown = function () {
        this.page.destroyEvt(this.page.E.SHOWN, this.onPageShown.bind(this)), this.isPageShown = !0, this.checkPageShowing()
    }, e.prototype.onMainLoaderHidden = function () {
        this.mainLoader.destroyEvt(this.mainLoader.E.HIDDEN, this.onMainLoaderHidden.bind(this)), this.isMainLoaderHidden = !0, this.checkPageShowing()
    }, e.prototype.checkPageShowing = function () {
        this.isPageShown && this.isMainLoaderHidden && this.enablePageChange()
    }, e.prototype.manageMenuLinks = function () {
    }, e.prototype.updateMenuLinks = function (t) {
        var e = t.filter(".active"), i = t.filter('[ data-link-id="' + this.pageInfos.id + '" ]');
        e.length > 0 && removeClass(e[0], "active"), i.length && addClass(i[0], "active")
    };
    var g = function () {
        m.call(this, WLB.Views.Statics.Header.$headerLgLink)
    }, m = function (t) {
        for (var e, i = 0; i < t.length; i++)e = t[i], e.href = WLB.Router.ALT_LANG_URL[e.getAttribute("data-lang")]
    }, v = function () {
        document.title = this.pageInfos.title
    };
    e.prototype.enablePageChange = function () {
        this.isPageChange = !1, this.isFirstLoad && (this.isFirstLoad = !1), WLB.Router.checkUrlCorrespondence()
    };
    var _ = function () {
        this.isPageChange = !0
    };
    return e
}(window), WLB.PagesController = function (t) {
    "use strict";
    function e() {
        WLB.AbstractPagesController.call(this), this.id = "PagesController", this.isMenuNavHidden = !1, this.isMenuNavShown = !1
    }

    e.prototype = Object.create(WLB.AbstractPagesController.prototype), e.prototype.constructor = e, e.prototype.bindEvents = function () {
        WLB.AbstractPagesController.prototype.bindEvents.call(this), WLB.Views.Statics.Header.menuNav.buildEvt(WLB.Views.Statics.Header.menuNav.E.HIDDEN, i.bind(this)), WLB.Views.Statics.Header.menuNav.buildEvt(WLB.Views.Statics.Header.menuNav.E.SHOWN, s.bind(this))
    }, e.prototype.managePageHidingTransitions = function () {
        WLB.AbstractPagesController.prototype.managePageHidingTransitions.call(this), WLB.Router.pageChangeByNav || "error-404" == WLB.PagesController.pageInfos.id || WLB.Views.Statics.Header.menuNav.forceHide(!1), "error-404" == WLB.PagesController.pageInfos.id && WLB.Views.Statics.Header.menuNav.forceHide(!0)
    };
    var i = function () {
        r.call(this), this.isMenuNavHidden = !0, this.checkPageHiding()
    }, r = function () {
        WLB.Views.Statics.CanvasController.setBgStartY(), WLB.MainView.setScrollY(0), WLB.MainView.setBodyHeight(WLB.MainView.wH), WLB.Views.Statics.Header.setPosition(0), WLB.Views.Statics.Footer.setPosition(0)
    };
    e.prototype.checkPageHiding = function () {
        this.isContentLoaded && !this.isAssetsLoaded && this.isPageHidden && this.isMainLoaderShown && this.isMenuNavHidden ? this.setContent() : this.isContentLoaded && this.isAssetsLoaded && this.isPageHidden && this.isMainLoaderShown && this.isMenuNavHidden && this.showPage()
    }, e.prototype.managePageShowingTransitions = function () {
        WLB.AbstractPagesController.prototype.managePageShowingTransitions.call(this), "error-404" == WLB.PagesController.pageInfos.id && WLB.Views.Statics.Header.hideMenu(), WLB.Router.pageChangeByNav && "error-404" == WLB.PagesController.pageInfos.id ? t.location.href = WLB.Router.URL.full : "error-404" == WLB.PagesController.prevPageInfos.id ? WLB.Views.Statics.Header.menuNav.forceShow(!0, !1) : "error-404" == WLB.PagesController.pageInfos.id ? WLB.Views.Statics.Header.menuNav.forceShow(!1, !0) : WLB.Router.pageChangeByNav || WLB.Views.Statics.Header.menuNav.forceShow(!1, !1)
    };
    var s = function () {
        this.isMenuNavShown = !0, this.checkPageShowing()
    };
    return e.prototype.checkPageShowing = function () {
        this.isPageShown && this.isMainLoaderHidden && this.isMenuNavShown && this.enablePageChange()
    }, e.prototype.initPageChangeValues = function () {
        WLB.AbstractPagesController.prototype.initPageChangeValues.call(this), this.isMenuNavHidden = !1, this.isMenuNavShown = !1
    }, e.prototype.enablePageChange = function () {
        this.isPageChange = !1, this.mainLoader.setDisplay("none"), this.isFirstLoad && (this.isFirstLoad = !1), WLB.Router.checkUrlCorrespondence()
    }, new e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Statics = WLB.Views.Statics || {}, WLB.Views.Statics.MainLoader = function (t) {
    "use strict";
    function e() {
        WLB.AbstractMainLoader.call(this), this.id = "MainLoader"
    }

    e.prototype = Object.create(WLB.AbstractMainLoader.prototype), e.prototype.constructor = e, e.prototype.initDOM = function () {
        this.$loader = $(document.getElementById("main-loader")), this.$progressCont = this.$loader.find(".main-loader-progress-container"), this.$progress = this.$loader.find(".main-loader-progress"), this.$loadingCont = this.$loader.find(".main-loader-loading-container"), this.$loading = this.$loader.find(".main-loader-loading"), this.$header = WLB.Views.Statics.Header.$header
    }, e.prototype.initEl = function () {
        this.circleProgress = 0
    }, e.prototype.initTl = function () {
        this.tl.hideInit = new TimelineLite({
            paused: !0, delay: .3, onStart: function () {
                WLB.Views.Statics.Header.menuNav.showIntroInit(), "error-404" == WLB.PagesController.pageInfos.id && WLB.Views.Statics.Header.hideMenu()
            }.bind(this), onUpdate: function () {
                WLB.Views.Statics.Header.menuNav.setCircleProgress(this.circleProgress)
            }.bind(this), onComplete: i.bind(this)
        }), this.tl.hideInit.to(this.$progressCont, 1.5, {
            xPercent: 230,
            ease: Quart.easeIn
        }, 0), this.tl.hideInit.to(this.$progress, 1.5, {
            xPercent: -230,
            ease: Quart.easeIn
        }, 0), this.tl.hideInit.to(this.$loading, 1.3, {
            opacity: 0,
            scale: .7,
            ease: Quart.easeOut
        }, 1.4), this.tl.hideInit.to(this, 1.3, {
            circleProgress: 100,
            ease: Quart.easeOut
        }, 1.4), this.tl.hideInit.call(function () {
            removeClass(this.$header[0], "progress")
        }.bind(this), [], null, 2.2), this.tl.hideInit.call(function () {
            removeClass(this.$header[0], "intro")
        }.bind(this), [], null, 4.2)
    }, e.prototype.onProgress = function (t) {
        this.$loading[0].innerHTML = Math.round(t) + "%", this.tw.progressCont = TweenLite.to(this.$progressCont, .3, {
            xPercent: t,
            ease: Quad.easeOut
        }), this.tw.progress = TweenLite.to(this.$progress, .3, {
            xPercent: -t,
            ease: Quad.easeOut
        }), this.tw.loading = TweenLite.to(this.$loadingCont, .3, {xPercent: t, ease: Quad.easeOut})
    }, e.prototype.hideInit = function () {
        this.tl.hideInit.play()
    }, e.prototype.show = function () {
        this.$loader[0].style.display = "block", this.$loader[0].offsetHeight, this.dispatch(this.E.SHOWN)
    }, e.prototype.hide = function () {
        this.dispatch(this.E.HIDDEN)
    }, e.prototype.setDisplay = function (t) {
        this.$loader[0].style.display = t
    };
    var i = function () {
        this.killTween("progressCont"), this.killTween("progress"), this.killTween("loading"), this.killTimeline("hideInit"), removeClass(this.$loader[0], "init"), this.dispatch(this.E.HIDDEN)
    };
    return new e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Statics = WLB.Views.Statics || {}, WLB.Views.Statics.Header = function (t) {
    "use strict";
    function e() {
        WLB.AbstractView.call(this), this.id = "Header"
    }

    return e.prototype = Object.create(WLB.AbstractView.prototype), e.prototype.constructor = e, e.prototype.initDOM = function () {
        this.$header = $(document.getElementById("header")), this.$logo = $(document.getElementById("header-logo")), this.$menu = $(document.getElementById("menu")), this.$altNav = $(document.getElementById("header-alt-nav-container")), this.$headerLgLink = this.$altNav.find(".header-list-item-lang")
    }, e.prototype.initEl = function () {
        this.menuNav = new WLB.Views.Statics.MenuNav
    }, e.prototype.initMenuNav = function () {
        this.menuNav.init()
    }, e.prototype.setPosition = function (t) {
        setTranslate(this.$logo[0], 0, t)
    }, e.prototype.hideMenu = function () {
        addClass(this.$header[0], "hide")
    }, e.prototype.showMenu = function () {
        removeClass(this.$header[0], "hide")
    }, new e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Statics = WLB.Views.Statics || {}, WLB.Views.Statics.MenuNav = function (t) {
    "use strict";
    function e() {
        WLB.AbstractView.call(this), this.id = "AbstractView", this.introsCont = null, this.INERTIA = .13, this.isNavHovered = !1, this.isMouseDown = !1, this.isMenuMin = !1, this.gap = null, this.navAmp = null, this.navStep = null, this.mouseGapY = null, this.navPos = null, this.navY = 0, this.navTempY = 0, this.introY = 0, this.introTempY = 0, this.refIntroY = 0, this.scaleIntro = .7, this.opacityIntro = 0, this.opacityIntroCoeff = 0, this.txtY = 0, this.txtYCoeff = 1, this.savedScrollY = null, this.opacityBg = 1, this.opacityScene = 1, this.aIntros = [], this.infos = []
    }

    e.prototype = Object.create(WLB.AbstractView.prototype), e.prototype.constructor = e, e.prototype.initDOM = function () {
        this.$header = WLB.Views.Statics.Header.$header, this.$headerLogo = WLB.Views.Statics.Header.$logo, this.$altNav = WLB.Views.Statics.Header.$altNav, this.$footer = WLB.Views.Statics.Footer.$footer, this.$lines = $(document.getElementById("menu-lines")), this.$nav = $(document.getElementById("menu-nav")), this.$svgCircle = $(document.getElementById("menu-nav-circle-svg")).find("circle"), this.$links = $(document.getElementById("menu-links")), this.$link = this.$links.find(".menu-link")
    }, e.prototype.initEl = function () {
        this.loaderCircumference = 2 * Math.PI * this.$svgCircle[0].getAttribute("r"), this.introsCont = new PIXI.Container, WLB.Views.Statics.CanvasController.addChild(this.introsCont), r.call(this, !0)
    }, e.prototype.bindEvents = function () {
        WLB.AbstractView.prototype.bindEvents.call(this), WLB.MainView.buildEvt(WLB.MainView.E.RAF, this.raf.bind(this)), WLB.MainView.buildEvt(WLB.MainView.E.MOUSE_MOVE, u.bind(this)), WLB.MainView.buildEvt(WLB.MainView.E.MOUSE_UP, d.bind(this)), this.$nav.on("mouseenter", $.proxy(o, this)), this.$nav.on("mouseleave", $.proxy(a, this)), this.$nav.on("mousedown", $.proxy(c, this))
    }, e.prototype.resize = function () {
        this.gap = WLB.MainView.wH / 40, this.navAmp = Math.round((WLB.MainView.wH - 100 - 60) / 2), this.navStep = Math.round(this.navAmp / 3), this.introTempY = this.navPos * this.navStep, this.introY = this.introTempY
    }, e.prototype.raf = function () {
        this.isMouseDown && (this.navY += getInertia(this.navTempY, this.navY, this.INERTIA), this.introTempY = this.navY + this.refIntroY,
            this.introY += getInertia(this.introTempY, this.introY, this.INERTIA)), n.call(this), m.call(this), b.call(this), T.call(this), this.introsCont.alpha = this.opacityIntro, WLB.Views.Statics.CanvasController.setBgOpacityCoeff(this.opacityBg), null === WLB.PagesController.page || WLB.PagesController.isPageChange && WLB.Router.pageChangeByNav !== !1 || "home" == WLB.PagesController.pageInfos.id || "error-404" == WLB.PagesController.pageInfos.id || WLB.PagesController.page.setOpacity(this.opacityScene)
    }, e.prototype.setCircleProgress = function (t) {
        var e = t * this.loaderCircumference / 100 + ", " + this.loaderCircumference;
        this.$svgCircle[0].setAttribute("stroke-dasharray", e)
    }, e.prototype.showIntroInit = function () {
        this.opacityIntro = 1e-6, "error-404" != WLB.PagesController.pageInfos.id && this.introsCont.setChildIndex(this.aIntros[this.navPos].intro, 3), this.tl.initIntros = new TimelineLite({
            delay: 2.7,
            onComplete: i.bind(this)
        }), this.tl.initIntros.to(this.$svgCircle, .5, {
            attr: {fill: "rgba(255, 255, 255, 0.5)"},
            ease: Quad.easeInOut
        }), "error-404" != WLB.PagesController.pageInfos.id && (this.tl.initIntros.to(this, 1, {
            opacityIntro: 1,
            ease: Quad.easeOut
        }, 0), this.tl.initIntros.to(this, 1.5, {scaleIntro: 1, ease: Back.easeOut}, 0))
    };
    var i = function () {
        this.killTimeline("initIntros"), this.initView(), this.dispatch(this.E.SHOWN)
    }, r = function (t) {
        for (var e, i = 0; i < this.$link.length; i++)e = this.$link[i], s.call(this, e.href, i), t && (this.infos[i] = {
            link: e.href,
            title: e.getAttribute("data-title"),
            collection: e.getAttribute("data-collection")
        })
    }, s = function (t, e) {
        var i = t.replace(WLB.Path.URL.base, "");
        i == WLB.Router.URL.path && (this.navPos = e)
    };
    e.prototype.initIntros = function () {
        this.home = new WLB.Views.Statics.IntroHome(this.introsCont, "intro-1", this.infos[0].link, this.infos[0].title, this.infos[0].collection), this.intro1 = new WLB.Views.Statics.IntroScene(this.introsCont, "intro-2", this.infos[1].link, this.infos[1].title), this.intro2 = new WLB.Views.Statics.IntroScene(this.introsCont, "intro-3", this.infos[2].link, this.infos[2].title), this.intro3 = new WLB.Views.Statics.IntroScene(this.introsCont, "intro-4", this.infos[3].link, this.infos[3].title), this.aIntros = [this.home, this.intro1, this.intro2, this.intro3];
        for (var t = 0; t < this.aIntros.length; t++)this.aIntros[t].init()
    };
    var n = function () {
        setTranslate(this.$nav[0], 0, this.navY), setTranslate(this.$lines[0], 0, this.navY);
        for (var t, e = 0; e < this.aIntros.length; e++)t = e * WLB.MainView.wH + WLB.MainView.cY - this.introY * WLB.MainView.wH / this.navStep, this.aIntros[e].move(t, this.scaleIntro, this.txtY)
    }, o = function () {
        this.isInit && (this.isNavHovered = !0, this.isMouseDown || h.call(this))
    }, a = function () {
        this.isInit && this.isNavHovered && (this.isNavHovered = !1, this.isMouseDown || l.call(this))
    }, h = function () {
        addClass(this.$nav[0], "hover"), _.call(this), y.call(this)
    }, l = function () {
        removeClass(this.$nav[0], "hover"), v.call(this), x.call(this)
    }, c = function () {
        this.isInit && (this.isMouseDown || (this.isNavHovered || o.call(this), this.isMouseDown = !0, addClass(WLB.MainView.$mainCont[0], "grab"), this.mouseGapY = WLB.MainView.mY - WLB.MainView.cY, this.refIntroY = this.introY, this.tw.scale = TweenLite.to(this, 1.2, {
            scaleIntro: .7,
            ease: Back.easeOut
        })))
    }, u = function () {
        this.isMouseDown && (this.navTempY = WLB.MainView.mY - this.mouseGapY - WLB.MainView.cY, this.navTempY + this.refIntroY < -this.gap ? this.navTempY = -this.gap - this.refIntroY : this.navTempY > this.navAmp - this.refIntroY + this.gap && (this.navTempY = this.navAmp - this.refIntroY + this.gap))
    }, d = function () {
        if (this.isMouseDown) {
            this.isMouseDown = !1;
            var t = Math.round(Math.round(this.navY / this.navStep) * this.navStep + this.refIntroY), e = this.navPos;
            this.navPos = Math.round(t / this.navStep), removeClass(WLB.MainView.$mainCont[0], "grab");
            var i = !1;
            e != this.navPos ? (i = !0, this.savedScrollY = 0, WLB.MainView.setScrollY(this.savedScrollY), this.isNavHovered = !1, this.changeUrl(this.aIntros[this.navPos].link), l.call(this), this.dispatch(this.E.HIDDEN)) : this.isNavHovered || l.call(this), this.introsCont.setChildIndex(this.aIntros[this.navPos].intro, 3), this.killTimeline("resetIntros"), this.tl.resetIntros = new TimelineLite({onComplete: p.bind(this, i)}), this.tl.resetIntros.to(this, 1, {
                scaleIntro: 1,
                ease: Back.easeOut
            }, 0), this.tl.resetIntros.to(this, .8, {
                navY: 0,
                navTempY: 0,
                introY: t,
                introTempY: t,
                ease: Quart.easeOut
            }, 0), this.tl.resetIntros.to(this.$headerLogo, .5, {opacity: 1, ease: Quad.easeInOut}, .5)
        }
    }, p = function (t) {
        t && (WLB.Router.updateHistory(), this.dispatch(this.E.SHOWN))
    };
    e.prototype.forceHide = function (t) {
        this.tl.forceHide = new TimelineLite({onComplete: f.bind(this)}), this.tl.forceHide.to(this.$headerLogo, .8, {
            opacity: 0,
            ease: Quad.easeOut
        }, 0), this.tl.forceHide.to(this.$footer, .8, {
            opacity: 0,
            ease: Quad.easeOut
        }, 0), t || (this.tl.forceHide.to(this, .8, {
            scaleIntro: .7,
            ease: Quart.easeOut
        }, 0), this.tl.forceHide.to(this, .8, {
            opacityIntro: 0,
            ease: Quad.easeOut
        }, 0), this.tl.forceHide.to(this, .8, {
            opacityBg: 0,
            ease: Quad.easeOut
        }, 0), this.tl.forceHide.to(this, .8, {opacityScene: 0, ease: Quad.easeOut}, 0))
    };
    var f = function () {
        r.call(this, !1), this.introTempY = this.navPos * this.navStep, this.introY = this.introTempY, this.dispatch(this.E.HIDDEN)
    };
    e.prototype.forceShow = function (t, e) {
        this.tl.forceShow = new TimelineLite({onComplete: g.bind(this, t)}), this.tl.forceShow.to(this.$headerLogo, 1, {
            opacity: 1,
            ease: Quart.easeOut
        }, 0), e || (this.introsCont.setChildIndex(this.aIntros[this.navPos].intro, 3), this.tl.forceShow.to(this.$footer, 1, {
            opacity: 1,
            ease: Quart.easeOut
        }, 0), this.tl.forceShow.to(this, 1, {
            scaleIntro: 1,
            ease: Back.easeOut
        }, 0), this.tl.forceShow.to(this, 1, {
            opacityIntro: 1,
            ease: Quart.easeOut
        }, 0), this.tl.forceShow.to(this, 1, {
            opacityBg: 1,
            ease: Quart.easeOut
        }, 0), this.tl.forceShow.to(this, 1, {opacityScene: 1, ease: Quart.easeOut}, 0))
    };
    var g = function (t) {
        t && WLB.Views.Statics.Header.showMenu(), this.dispatch(this.E.SHOWN)
    }, m = function () {
        WLB.MainView.siY >= 290 && !this.isMenuMin ? (this.isMenuMin = !0, v.call(this)) : WLB.MainView.siY < 290 && this.isMenuMin && (_.call(this), this.isMenuMin = !1)
    }, v = function () {
        this.isNavHovered || this.isMouseDown || !this.isMenuMin || (addClass(this.$header[0], "minimize"), this.tw.svg = TweenLite.to(this.$svgCircle, .5, {
            attr: {r: 25},
            ease: Quart.easeOut
        }))
    }, _ = function () {
        this.isMenuMin && (removeClass(this.$header[0], "minimize"), this.tw.svg = TweenLite.to(this.$svgCircle, .5, {
            attr: {r: 47},
            ease: Quart.easeOut
        }))
    }, y = function () {
        this.savedScrollY = WLB.MainView.siY, WLB.MainView.setScrollY(this.savedScrollY), addClass(this.$header[0], "menu-nav-over"), this.killTimeline("intros"), this.tl.intros = new TimelineLite, this.tl.intros.to(this, .8, {
            opacityIntroCoeff: 1,
            ease: Quart.easeOut
        }, 0), this.tl.intros.to(this, .8, {
            txtYCoeff: 0,
            ease: Quart.easeOut
        }, 0), this.tl.intros.to(WLB.MainView.$pageCont, .5, {
            opacity: 0,
            ease: Quart.easeOut
        }, 0), this.tl.intros.to(this.$headerLogo, .5, {
            opacity: 0,
            ease: Quart.easeOut
        }, 0), this.tl.intros.to(this.$footer, .5, {
            opacity: 0,
            ease: Quart.easeOut
        }, 0), this.tl.intros.to(this, .5, {
            opacityBg: 0,
            ease: Quart.easeOut
        }, 0), this.tl.intros.to(this, .5, {opacityScene: 0, ease: Quart.easeOut}, 0)
    }, x = function () {
        WLB.MainView.setScrollY(this.savedScrollY), this.savedScrollY = null, removeClass(this.$header[0], "menu-nav-over"), this.killTimeline("intros"), this.tl.intros = new TimelineLite, this.tl.intros.to(this, .5, {
            opacityIntroCoeff: 0,
            ease: Quart.easeOut
        }, 0), this.tl.intros.to(this, .5, {
            txtYCoeff: 1,
            ease: Quart.easeOut
        }, 0), this.tl.intros.to(WLB.MainView.$pageCont, .8, {
            opacity: 1,
            ease: Quart.easeOut
        }, 0), WLB.Router.pageChangeByNav !== !0 && this.tl.intros.to(this.$headerLogo, .8, {
            opacity: 1,
            ease: Quart.easeOut
        }, 0), this.tl.intros.to(this.$footer, .8, {
            opacity: 1,
            ease: Quart.easeOut
        }, 0), this.tl.intros.to(this, .8, {
            opacityBg: 1,
            ease: Quart.easeOut
        }, 0), this.tl.intros.to(this, .8, {opacityScene: 1, ease: Quart.easeOut}, 0)
    }, b = function () {
        if (!WLB.PagesController.isFirstLoad && WLB.Router.pageChangeByNav !== !1 && "error-404" != WLB.PagesController.pageInfos.id && "error-404" != WLB.PagesController.prevPageInfos.id) {
            var t = w.call(this);
            this.opacityIntro = t + (1 - t) * this.opacityIntroCoeff, this.opacityIntro > 1 && (this.opacityIntro = 1)
        }
    }, w = function () {
        var t = 1 - WLB.MainView.siY / (3 * WLB.MainView.wH / 5);
        return t = t > 0 ? t : 0
    }, T = function () {
        this.txtY = -WLB.MainView.siY / 3 > -WLB.MainView.wH / 5 ? -WLB.MainView.siY / 3 : 0, this.txtY = this.txtY * this.txtYCoeff
    };
    return e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Statics = WLB.Views.Statics || {}, WLB.Views.Statics.Footer = function (t) {
    "use strict";
    function e() {
        WLB.AbstractView.call(this), this.id = "Footer"
    }

    return e.prototype = Object.create(WLB.AbstractView.prototype), e.prototype.constructor = e, e.prototype.initDOM = function () {
        this.$footer = $(document.getElementById("footer")), this.$contact = this.$footer.find(".footer-link-contact")
    }, e.prototype.initEl = function () {
        encryptMailto(this.$contact[0], "contact", "wedze", "com", !1)
    }, e.prototype.setPosition = function (t) {
        setTranslate(this.$footer[0], 0, t)
    }, new e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Statics = WLB.Views.Statics || {}, WLB.Views.Statics.CanvasController = function (t) {
    "use strict";
    function e() {
        WLB.AbstractView.call(this), this.id = "CanvasController", this.renderer = null, this.stage = null, this.BG_H = 2200, this.bgStartY = 0
    }

    e.prototype = Object.create(WLB.AbstractView.prototype), e.prototype.constructor = e, e.prototype.init = function () {
        WLB.AbstractView.prototype.init.call(this), i.call(this), r.call(this), s.call(this), WLB.Views.Statics.Header.initMenuNav(), this.initView()
    }, e.prototype.initDOM = function () {
        this.$cv = $(document.getElementById("canvas"))
    }, e.prototype.bindEvents = function () {
        WLB.AbstractView.prototype.bindEvents.call(this), WLB.MainView.buildEvt(WLB.MainView.E.RAF, this.raf.bind(this))
    }, e.prototype.resize = function () {
        this.isInit && (this.renderer.resize(WLB.MainView.bW, WLB.MainView.wH), this.bg.x = -Math.round(1920 - WLB.MainView.bW) / 2)
    }, e.prototype.raf = function () {
        this.renderer.render(this.stage), n.call(this)
    };
    var i = function () {
        var t = {transparent: !0, antialias: !0, resolution: 1};
        this.renderer = PIXI.autoDetectRenderer(WLB.MainView.bW, WLB.MainView.wH, t, !1), this.$cv[0].appendChild(this.renderer.view), this.stage = new PIXI.Container
    }, r = function () {
        this.type = this.renderer.type == PIXI.RENDERER_TYPE.WEBGL ? "webgl" : "canvas"
    }, s = function () {
        this.bg = new PIXI.extras.TilingSprite.fromImage(WLB.Path.URL.img + "bgs/scene.jpg", 1920, 2 * this.BG_H), this.bg.alpha = 0, this.stage.addChild(this.bg), this.setBgStartY()
    }, n = function () {
        this.bg.y = -(.05 * WLB.MainView.siY + this.bgStartY) % this.BG_H;
        var t = o.call(this);
        this.bg.alpha = t * this.opacityCoeffBg
    }, o = function () {
        var t = (WLB.MainView.siY - 200) / (3 * WLB.MainView.wH / 5);
        return t < 0 ? t = 0 : t > 1 && (t = 1), t
    };
    return e.prototype.addChild = function (t) {
        this.stage.addChild(t)
    }, e.prototype.removeChild = function (t) {
        this.stage.removeChild(t)
    }, e.prototype.setBgStartY = function () {
        this.bgStartY = Math.round(Math.random() * this.BG_H)
    }, e.prototype.setBgOpacityCoeff = function (t) {
        this.opacityCoeffBg = t
    }, new e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Statics = WLB.Views.Statics || {}, WLB.Views.Statics.IntroScene = function (t) {
    "use strict";
    function e(t, e, i, r) {
        WLB.AbstractView.call(this), this.id = e, this.cont = t, this.imgName = e, this.link = i, this.titleTxt = r.toUpperCase(), this.GAP_MAX_X = null, this.GAP_MAX_Y = null, this.y = 0, this.sc = 1, this.txtY = 0
    }

    e.prototype = Object.create(WLB.AbstractView.prototype), e.prototype.constructor = e, e.prototype.init = function () {
        WLB.AbstractView.prototype.init.call(this), this.initView()
    }, e.prototype.initEl = function () {
        this.initPixiEls(), "webgl" != WLB.Views.Statics.CanvasController.type && this.setCanvasFallback()
    }, e.prototype.bindEvents = function () {
        WLB.AbstractView.prototype.bindEvents.call(this), WLB.MainView.buildEvt(WLB.MainView.E.RAF, this.raf.bind(this))
    }, e.prototype.resize = function () {
        if (this.isInit) {
            this.GAP_MAX_X = WLB.MainView.bW / 50 < 51.6 ? WLB.MainView.bW / 50 : 51.6, this.GAP_MAX_Y = WLB.MainView.wH / 50 < 28.8 ? WLB.MainView.wH / 50 : 28.8, this.intro.x = WLB.MainView.cX, this.intro.pivot.x = WLB.MainView.cX, this.intro.pivot.y = WLB.MainView.cY;
            var t = getElPos(1920, 1e3, WLB.MainView.bW, WLB.MainView.wH), e = t.h / 1e3;
            this.imgCont.x = t.x, this.imgCont.y = t.y, this.imgCont.scale.x = e, this.imgCont.scale.y = e;
            var r = WLB.MainView.bW / 1280;
            this.txt.scale.x = r, this.txt.scale.y = r, i.call(this)
        }
    }, e.prototype.raf = function () {
        this.intro.y = this.y, this.intro.scale.x = this.sc, this.intro.scale.y = this.sc, this.txt.x = WLB.MainView.cX + this.GAP_MAX_X - 2 * this.GAP_MAX_X * WLB.MainView.miX / WLB.MainView.bW, this.txt.y = WLB.MainView.cY + this.GAP_MAX_Y - 2 * this.GAP_MAX_Y * WLB.MainView.miY / WLB.MainView.wH + this.txtY
    }, e.prototype.initPixiEls = function () {
        this.intro = new PIXI.Container, this.imgCont = new PIXI.Container, this.imgCl = new PIXI.Sprite.fromImage(WLB.Path.URL.img + "others/intro/" + this.imgName + ".jpg"), this.imgBw = new PIXI.Sprite.fromImage(WLB.Path.URL.img + "others/intro/" + this.imgName + "-bw.jpg"), this.imgBw.x = 270, this.imgBw.y = 120;
        var t = {fontFamily: "SB", fontSize: "220px", fill: 16777215, padding: 10};
        this.title = new PIXI.Text(this.titleTxt, t), this.txt = new PIXI.Container, this.mask = new PIXI.Graphics, i.call(this), this.imgBw.mask = this.title, this.intro.mask = this.mask, this.imgCont.addChild(this.imgCl), this.imgCont.addChild(this.imgBw), this.intro.addChild(this.imgCont), this.txt.addChild(this.title), this.intro.addChild(this.txt), this.intro.addChild(this.mask), this.cont.addChild(this.intro), this.txt.pivot.x = this.txt.width / 2, this.txt.pivot.y = this.txt.height / 2
    }, e.prototype.setCanvasFallback = function () {
        this.imgBw.alpha = 0, this.imgBw.mask = null, this.txt.alpha = .7, this.title.style.fill = 0
    };
    var i = function () {
        this.mask.clear(), this.mask.beginFill(16777215), this.mask.drawRect(0, 0, WLB.MainView.bW, WLB.MainView.wH), this.mask.endFill()
    };
    return e.prototype.move = function (t, e, i) {
        this.y = t, this.sc = e, this.txtY = i
    }, e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Statics = WLB.Views.Statics || {}, WLB.Views.Statics.IntroHome = function (t) {
    "use strict";
    function e(t, e, i, r, s) {
        WLB.Views.Statics.IntroScene.call(this, t, e, i, r), this.id = "IntroHome", this.subtitleTxt = s
    }

    e.prototype = Object.create(WLB.Views.Statics.IntroScene.prototype), e.prototype.constructor = e, e.prototype.initPixiEls = function () {
        WLB.Views.Statics.IntroScene.prototype.initPixiEls.call(this), this.imgBw.x = 250, this.imgBw.y = 310, this.intro.removeChild(this.title), this.imgBw.mask = null, this.title.style.fontSize = "155px";
        var t = new PIXI.Container, e = {fontFamily: "CB", fontSize: "50px", fill: 16777215, padding: 10};
        this.subtitle = new PIXI.Text(this.subtitleTxt, e), this.subtitle.x = this.title.width / 2 - this.subtitle.width / 2, this.subtitle.y = 145, t.addChild(this.title), t.addChild(this.subtitle), i.call(this, t), this.imgBw.mask = this.txt, this.intro.addChild(this.txt), this.txt.pivot.x = this.txt.width / 2, this.txt.pivot.y = this.txt.height / 2
    };
    var i = function (t) {
        this.txt = "webgl" == WLB.Views.Statics.CanvasController.type ? new PIXI.Sprite(WLB.Views.Statics.CanvasController.renderer.generateTexture(t)) : t
    };
    return e.prototype.setCanvasFallback = function () {
        WLB.Views.Statics.IntroScene.prototype.setCanvasFallback.call(this), this.subtitle.style.fill = 0
    }, e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Partials = WLB.Views.Partials || {}, WLB.Views.Partials.PinePreloader = function (t) {
    "use strict";
    function e() {
        this.id = "PinePreloader", this.NB_IMG = 39;
        for (var t = [], e = 0; e < this.NB_IMG; e++) {
            var i = PIXI.Texture.fromImage(WLB.Path.URL.img + "icons/preloader/pine-" + (e + 1) + ".png");
            t.push(i)
        }
        var r = new PIXI.extras.MovieClip(t);
        return r.animationSpeed = .5, r.gotoAndPlay(Math.round(Math.random() * this.NB_IMG)), r
    }

    return e
}(window), WLB.AbstractImages = function (t) {
    "use strict";
    function e(t, e, i) {
        WLB.AbstractView.call(this), this.id = "AbstractImages", this.E = {LOADED: "loaded"}, this.sceneCont = t, this.nbWH = e, this.zIndex = i, this.imgsProps = [], this.urls = [], this.lazyLoader = null, this.posImgLoaded = 0
    }

    e.prototype = Object.create(WLB.AbstractView.prototype), e.prototype.constructor = e, e.prototype.initEl = function () {
        WLB.AbstractView.prototype.initEl.call(this), this.lazyLoader = new WLB.CanvasLazyLoader(this.urls, 1), this.lazyLoader.init()
    }, e.prototype.bindEvents = function () {
        WLB.AbstractView.prototype.bindEvents.call(this), WLB.MainView.buildEvt(WLB.MainView.E.RAF, this.raf.bind(this)), this.lazyLoader.buildEvt(this.lazyLoader.E.IMG_LOADED, i.bind(this)), this.lazyLoader.buildEvt(this.lazyLoader.E.LOADED, r.bind(this))
    }, e.prototype.unbindEvents = function () {
        WLB.AbstractView.prototype.unbindEvents.call(this), WLB.MainView.destroyEvt(WLB.MainView.E.RAF, this.raf.bind(this)), this.lazyLoader.destroyEvt(this.lazyLoader.E.IMG_LOADED, i.bind(this)), this.lazyLoader.destroyEvt(this.lazyLoader.E.LOADED, r.bind(this))
    }, e.prototype.destroy = function () {
        WLB.AbstractView.prototype.destroy.call(this), this.lazyLoader.destroy()
    }, e.prototype.setWhY = function () {
        this.whY = Math.round(WLB.MainView.wH * this.nbWH)
    }, e.prototype.setImgMaskGap = function () {
        this.imgMaskGap = 83 * WLB.MainView.bW / 100 < 1440 ? Math.round(17 * WLB.MainView.bW / 100) : WLB.MainView.bW - 1440
    }, e.prototype.load = function () {
        this.lazyLoader.startLazyload()
    };
    var i = function () {
        var t = this.imgsProps[this.posImgLoaded];
        t.img.texture = new PIXI.Texture.fromImage(t.url), this.tw.showImg = TweenLite.to(t, 1, {
            op: 1,
            ease: Quad.easeInOut
        }, 0), this.posImgLoaded++
    }, r = function () {
        this.dispatch(this.E.LOADED)
    };
    return e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Partials = WLB.Views.Partials || {}, WLB.Views.Partials.BwImageAndThumbs = function (t) {
    "use strict";
    function e(t, e, i, r, s, n, o, a, h) {
        WLB.AbstractImages.call(this, t, i, e), this.E = {LOADED: "loaded"}, this.id = r, this.url = r, this.w = s, this.h = n, this.startY = o, this.lengthY = a, this.tbsInfos = h, this.imgMaskGap = null, this.whY = null, this.startStepY = null, this.inertia = {}
    }

    e.prototype = Object.create(WLB.AbstractImages.prototype), e.prototype.constructor = e, e.prototype.initDOM = function () {
    }, e.prototype.initEl = function () {
        this.urls.push(WLB.Path.URL.img + "others/" + this.url + "-bw.jpg"), this.setWhY(), i.call(this), r.call(this), a.call(this), n.call(this), WLB.AbstractImages.prototype.initEl.call(this)
    }, e.prototype.resize = function () {
        this.setImgMaskGap(), this.setWhY(), this.cont.x = Math.round((WLB.MainView.bW - this.w) / 2), this.imgsProps[0].w = WLB.MainView.bW - this.imgMaskGap, this.imgsProps[0].x = Math.round((1440 - this.imgsProps[0].w) / 2), this.startStepY = Math.round(this.startY + this.whY - (WLB.MainView.wH - this.h) / 2)
    }, e.prototype.raf = function () {
        o.call(this), a.call(this)
    };
    var i = function () {
        this.inertia.contY = {v: this.startY + this.whY, c: .07}, this.inertia.imgs = [{v: 0, c: .09}, {
            v: 0,
            c: .09
        }, {v: 0, c: .09}]
    }, r = function () {
        this.cont = new PIXI.Container;
        var t = new PIXI.Graphics, e = new WLB.Views.Partials.PinePreloader, i = new PIXI.Sprite, r = new PIXI.Graphics;
        t.mask = r, e.mask = r, i.mask = r, this.cont.addChild(t), this.cont.addChild(e), this.cont.addChild(i), this.cont.addChild(r), s.call(this, this.urls[0], 0, 0, this.w, this.h, null, i, 0, r, t, e);
        for (var n, o = 0; o < this.tbsInfos.length; o++)n = this.tbsInfos[o], t = new PIXI.Graphics, e = new WLB.Views.Partials.PinePreloader, i = new PIXI.Sprite, r = new PIXI.Graphics, i.x = n[0], i.y = n[1], t.mask = r, e.mask = r, i.mask = r, this.cont.addChild(t), this.cont.addChild(e), this.cont.addChild(i), this.cont.addChild(r), this.urls.push(WLB.Path.URL.img + "others/" + this.url + "-tb-" + (o + 1) + ".jpg"), s.call(this, this.urls[o + 1], n[0], n[1], n[2], n[3], n[4], i, 0, r, t, e);
        this.sceneCont.addChildAt(this.cont, this.sceneCont.children.length + this.zIndex)
    }, s = function (t, e, i, r, s, n, o, a, h, l, c) {
        this.imgsProps.push({url: t, x: e, y: i, w: r, h: s, dir: n, img: o, op: a, mask: h, lzl: l, pld: c})
    }, n = function () {
        for (var t, e = 0; e < this.imgsProps.length; e++)t = this.imgsProps[e], t.lzl.clear(), 0 === e ? t.lzl.beginFill(16119285) : t.lzl.beginFill(14742523), t.lzl.drawRect(t.x, t.y, t.w, t.h), t.lzl.endFill(), t.pld.x = Math.round(t.x + t.w / 2 - 15)
    }, o = function () {
        var t = this.startY + this.whY - WLB.MainView.sY;
        WLB.MainView.sY > this.startStepY + this.lengthY ? t += this.lengthY : WLB.MainView.sY > this.startStepY && (t = Math.round((WLB.MainView.wH - this.h) / 2)), this.inertia.contY.v += getInertia(t, this.inertia.contY.v, this.inertia.contY.c), this.cont.y = Math.round(this.inertia.contY.v)
    }, a = function () {
        for (var t, e, i, r, s = 0; s < this.imgsProps.length; s++)t = this.imgsProps[s], e = this.inertia.imgs[s], 0 === s ? (r = Math.round(this.startStepY + 2 * t.h - 50 - WLB.MainView.sY), r = h.call(this, r, t.h), e.v += getInertia(r, e.v, e.c), r = Math.round(e.v), i = Math.round(t.h / 5 - r / 5)) : (r = Math.round(WLB.MainView.sY - this.startStepY), r = h.call(this, r, t.h), e.v += getInertia(r, e.v, e.c), "bottom" == t.dir ? (r = Math.round(e.v), i = Math.round(t.y + t.h / 5 - r / 5)) : "top" == t.dir && (r = Math.round(e.v), i = Math.round(t.y + t.h - r - t.h / 5 + r / 5))), t.mask.clear(), t.mask.beginFill(16675699, .3), t.mask.drawRect(t.x, i, t.w, r), t.mask.endFill(), t.lzl.alpha = 1 - t.op, t.pld.y = Math.round(i + r / 2) - 12, t.pld.alpha = .6 * (1 - t.op), 0 === r ? t.img.alpha = 0 : t.img.alpha = t.op
    }, h = function (t, e) {
        return t < 0 ? t = 0 : t > e && (t = e), t
    };
    return e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Partials = WLB.Views.Partials || {}, WLB.Views.Partials.SimpleImages = function (t) {
    "use strict";
    function e(t, e, i, r, s) {
        WLB.AbstractImages.call(this, t, i, e), this.id = s[0][0], this.startY = r, this.imgsInfos = s
    }

    e.prototype = Object.create(WLB.AbstractImages.prototype), e.prototype.constructor = e, e.prototype.initEl = function () {
        i.call(this), o.call(this), s.call(this), WLB.AbstractImages.prototype.initEl.call(this)
    }, e.prototype.resize = function () {
        this.setWhY(), this.cont.x = Math.round((WLB.MainView.bW - 960) / 2)
    }, e.prototype.raf = function () {
        n.call(this), o.call(this)
    };
    var i = function () {
        this.cont = new PIXI.Container;
        for (var t, e, i, s, n, o, a = 0; a < this.imgsInfos.length; a++)t = this.imgsInfos[a], e = new PIXI.Container, i = new PIXI.Graphics, s = new WLB.Views.Partials.PinePreloader, n = new PIXI.Sprite, o = WLB.Path.URL.img + "others/" + t[0] + ".jpg", e.x = t[1], e.y = t[2], e.addChild(i), e.addChild(s), e.addChild(n), this.cont.addChild(e), this.urls.push(o), r.call(this, o, t[1], t[2], t[3], t[4], t[5], e, n, 0, i, s);
        this.sceneCont.addChildAt(this.cont, this.sceneCont.children.length + this.zIndex)
    }, r = function (t, e, i, r, s, n, o, a, h, l, c) {
        this.imgsProps.push({
            url: t,
            x: e,
            y: i,
            w: r,
            h: s,
            cY: Math.round(s / 2),
            coeff: n,
            imgCont: o,
            img: a,
            op: h,
            lzl: l,
            pld: c
        })
    }, s = function () {
        for (var t, e = 0; e < this.imgsProps.length; e++)t = this.imgsProps[e], t.lzl.clear(), t.lzl.beginFill(14742523), t.lzl.drawRect(0, 0, t.w, t.h), t.lzl.endFill(), t.pld.x = Math.round(t.w / 2 - 15), t.pld.y = Math.round(t.h / 2 - 12)
    }, n = function () {
        var t = this.startY + this.whY - WLB.MainView.siY;
        this.cont.y = Math.round(t)
    }, o = function () {
        for (var t, e = 0; e < this.imgsProps.length; e++)t = this.imgsProps[e], t.lzl.alpha = 1 - t.op, t.pld.alpha = .6 * (1 - t.op), t.imgCont.y = Math.round(t.y + (WLB.MainView.siY - (this.whY + this.startY + t.y - WLB.MainView.cY + t.cY)) * t.coeff), t.img.alpha = t.op
    };
    return e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Partials = WLB.Views.Partials || {}, WLB.Views.Partials.ProductFocus = function (t) {
    "use strict";
    function e(t, e, i, r, s, n, o, a) {
        WLB.AbstractImages.call(this, e, r, i), this.id = t, this.urls = s, this.startY = n, this.lengthY = o, this.posBigImg = a, this.imgMaskGap = null, this.whY = null, this.gapImgY = null, this.steps = [], this.imgsCoords = [], this.contShown = !1, this.values = {}, this.gridProps = {}, this.inertia = {}, this.bg = null, this.bgImg = null, this.bgInfos = null
    }

    e.prototype = Object.create(WLB.AbstractImages.prototype), e.prototype.constructor = e, e.prototype.initDOM = function () {
        this.$cont = $(document.getElementById(this.id)), this.$infosWrap = this.$cont.find(".sc-prod-focus-infos-wrapper")
    }, e.prototype.initEl = function () {
        n.call(this), o.call(this), a.call(this), h.call(this), d.call(this), WLB.AbstractImages.prototype.initEl.call(this)
    }, e.prototype.resize = function () {
        i.call(this), this.setImgMaskGap(), this.setWhY(), this.gapImgY = Math.round((WLB.MainView.wH - 530) / 2), r.call(this), s.call(this), u.call(this)
    };
    var i = function () {
        this.values.y1 = 0, this.values.h1 = Math.round(WLB.MainView.wH / 2), this.values.y2 = this.values.h1, this.values.h2 = WLB.MainView.wH - this.values.h1, this.values.x1 = 0, this.values.w1 = Math.round(WLB.MainView.bW / 3), this.values.x2 = this.values.w1, this.values.w2 = Math.round(WLB.MainView.bW / 3), this.values.x3 = this.values.w1 + this.values.w2, this.values.w3 = WLB.MainView.bW - this.values.x3
    }, r = function () {
        var t, e;
        t = this.imgsProps[0], e = getElPos(t.w, t.h, this.values.w3, WLB.MainView.wH), t.img.x = e.x, t.img.y = e.y, t.img.width = e.w, t.img.height = e.h, t = this.imgsProps[1], e = getElPos(t.w, t.h, this.values.w1, this.values.h2), t.img.x = e.x, t.img.y = e.y, t.img.width = e.w, t.img.height = e.h, t = this.imgsProps[3], e = getElPos(t.w, t.h, this.values.w2, this.values.h2), t.img.x = this.values.x2, t.img.y = this.values.y2, t.img.width = e.w, t.img.height = e.h
    }, s = function () {
        this.bg.clear(), this.bg.beginFill(2566184), this.bg.drawRect(0, 0, WLB.MainView.bW, WLB.MainView.wH), this.bg.endFill(), this.bgImg.clear(), this.bgImg.beginFill(16777215), this.bgImg.drawRect(0, 0, WLB.MainView.bW, WLB.MainView.wH), this.bgImg.endFill()
    };
    e.prototype.raf = function () {
        p.call(this), f.call(this)
    };
    var n = function () {
        this.steps = [this.startY, this.startY + this.lengthY, this.startY + this.lengthY + 300, this.startY + this.lengthY + 600, this.startY + this.lengthY + 900, this.startY + this.lengthY + 1300]
    }, o = function () {
        this.imgsCoords.push([640, 1e3], [640, 500], [1920, 1e3], [640, 500])
    }, a = function () {
        this.inertia.contY = {v: this.startY + this.whY, c: .09}, this.inertia.elY = {v: -this.lengthY, c: .07}
    }, h = function () {
        this.cont = new PIXI.Container, l.call(this);
        for (var t, e, i, r, s, n, o, a = 0; a < this.urls.length; a++)t = this.imgsCoords[a], e = new PIXI.Container, i = new PIXI.Graphics, r = new WLB.Views.Partials.PinePreloader, s = new PIXI.Sprite, n = new PIXI.Graphics, 2 == a && (this.bgImg.mask = n), a >= 2 && (e.mask = n), e.addChild(i), e.addChild(r), e.addChild(s), e.addChild(n), this.cont.addChild(e), o = WLB.Path.URL.img + "others/" + this.urls[a], this.urls[a] = o, c.call(this, o, 0, 0, t[0], t[1], e, s, 0, n, i, r);
        this.mask = new PIXI.Graphics, this.cont.addChild(this.mask), u.call(this), this.cont.mask = this.mask, this.sceneCont.addChildAt(this.cont, this.sceneCont.children.length + this.zIndex), this.cont.setChildIndex(this.bgImg, 4), this.cont.setChildIndex(this.bgInfos, 4)
    }, l = function () {
        this.bg = new PIXI.Graphics, this.bgImg = new PIXI.Graphics, this.bgInfos = new PIXI.Graphics, this.cont.addChild(this.bg), this.cont.addChild(this.bgImg), this.cont.addChild(this.bgInfos)
    }, c = function (t, e, i, r, s, n, o, a, h, l, c) {
        this.imgsProps.push({url: t, x: e, y: i, w: r, h: s, imgCont: n, img: o, op: a, mask: h, lzl: l, pld: c})
    }, u = function () {
        this.mask.clear(), this.mask.beginFill(16675699, .3), this.mask.drawRect(0, 0, WLB.MainView.bW, WLB.MainView.wH), this.mask.endFill()
    }, d = function () {
        for (var t, e = 0; e < this.imgsProps.length; e++)t = this.imgsProps[e], e >= 2 && (t.lzl.clear(), t.lzl.beginFill(16119285), t.lzl.drawRect(0, 0, WLB.MainView.bW, WLB.MainView.wH), t.lzl.endFill())
    }, p = function () {
        var t = this.steps[0] + this.whY - WLB.MainView.sY - this.gapImgY;
        t < -(this.steps[5] - this.steps[0]) ? t += this.steps[5] - this.steps[0] : t < 0 && (t = 0), this.inertia.contY.v += getInertia(t, this.inertia.contY.v, this.inertia.contY.c), this.cont.y = Math.round(this.inertia.contY.v)
    }, f = function () {
        var t = this.steps[0] + this.whY - this.gapImgY - WLB.MainView.sY;
        t > this.steps[0] - this.steps[1] ? t = this.steps[0] - this.steps[1] : t < this.steps[0] - this.steps[4] && (t = this.steps[0] - this.steps[4]), this.inertia.elY.v += getInertia(t, this.inertia.elY.v, this.inertia.elY.c), t = Math.round(this.inertia.elY.v);
        for (var e = 0, i = this.steps.length - 1; i >= 0; i--)if (t < this.steps[0] - this.steps[i]) {
            e = i + 1;
            break
        }
        var r = (t + this.steps[e - 1] - this.steps[0]) / (this.steps[e - 1] - this.steps[e]);
        g.call(this, e, r), m.call(this, e, r), v.call(this, e, r), _.call(this, e, r), y.call(this, e, t)
    }, g = function (t, e) {
        var i, r, s, n, o, a, h, l = this.imgsProps[2];
        t < 2 ? (s = WLB.MainView.bW - this.imgMaskGap, n = 530, i = Math.round((WLB.MainView.bW - s) / 2), r = Math.round((WLB.MainView.wH - n) / 2), h = 0, a = .4) : 2 == t ? (s = Math.round(WLB.MainView.bW - this.imgMaskGap + this.imgMaskGap * e), n = Math.round(530 + (WLB.MainView.wH - 530) * e), i = Math.round((WLB.MainView.bW - s) / 2), r = Math.round((WLB.MainView.wH - n) / 2), h = 0, a = .4 + .6 * e) : 3 == t ? (s = Math.round(WLB.MainView.bW - this.values.w3 * e), n = WLB.MainView.wH, "right" == this.posBigImg ? i = 0 : "left" == this.posBigImg && (i = WLB.MainView.bW - s), r = 0, h = 1, a = 1) : 4 == t && (s = Math.round(this.values.w1 + this.values.w2 - this.values.w2 * e), n = Math.round(WLB.MainView.wH - this.values.h2 * e), "right" == this.posBigImg ? i = 0 : "left" == this.posBigImg && (i = WLB.MainView.bW - s), r = 0, h = 1, a = 1), l.mask.clear(), l.mask.beginFill(16675699, .3), l.mask.drawRect(i, r, s, n), l.mask.endFill(), l.lzl.alpha = 1 - l.op, l.pld.x = Math.round(i + s / 2) - 15, l.pld.y = Math.round(r + n / 2) - 12, l.pld.alpha = .6 * (1 - l.op), this.bg.alpha = h, o = getElPos(1920, 1e3, s, n), l.img.x = o.x + i, l.img.y = o.y + r, l.img.width = o.w, l.img.height = o.h, l.img.alpha = a * l.op
    }, m = function (t, e) {
        var i, r, s, n, o = this.imgsProps[3];
        t < 4 ? (s = 0, n = 0, i = 0, r = 0) : 4 == t && (s = Math.round(this.values.w2 * e), n = WLB.MainView.wH - Math.round(WLB.MainView.wH - this.values.h2 * e), "right" == this.posBigImg ? i = this.values.x2 + this.values.w2 - s : "left" == this.posBigImg && (i = this.values.x2), r = this.values.y2 + this.values.h2 - n), o.mask.clear(), o.mask.beginFill(16675699, .3), o.mask.drawRect(i, r, s, n), o.mask.endFill(), o.lzl.alpha = 1 - o.op, o.pld.x = Math.round(i + s / 2) - 15, o.pld.y = Math.round(r + n / 2) - 12, o.pld.alpha = .6 * (1 - o.op), o.img.alpha = o.op
    }, v = function (t, e) {
        var i, r, s, n, o, a = this.imgsProps[0], h = this.imgsProps[1];
        t < 3 ? (i = 0, r = 0, s = 0, n = 0, o = 0) : 3 == t ? ("right" == this.posBigImg ? (i = this.values.x3 + Math.round(this.values.w3 / 4 * (1 - e)), s = 0) : "left" == this.posBigImg && (i = -Math.round(this.values.w1 / 4 * (1 - e)), s = this.values.x3), r = 0, n = 0, o = 1) : 4 == t && ("right" == this.posBigImg ? (i = this.values.x3, s = 0) : "left" == this.posBigImg && (i = 0, s = this.values.x3), r = 0, n = this.values.y2 + Math.round(this.values.h2 / 4 * (1 - e)), o = 1), a.lzl.alpha = 1 - a.op, a.pld.x = Math.round(this.values.w3 / 2) - 15, a.pld.y = Math.round(WLB.MainView.wH / 2) - 12, a.pld.alpha = .6 * (1 - a.op), a.imgCont.x = i, a.imgCont.y = r, a.img.alpha = o * a.op, h.lzl.alpha = 1 - h.op, h.pld.x = Math.round(this.values.w1 / 2) - 15, h.pld.y = Math.round(this.values.h2 / 2) - 12, h.pld.alpha = .6 * (1 - h.op), h.imgCont.x = s, h.imgCont.y = n, h.img.alpha = o * h.op
    }, _ = function (t, e) {
        var i, r, s, n;
        t < 4 ? (i = this.values.w1 + this.values.w2, r = 0, s = 0, n = WLB.MainView.wH) : 4 == t && (s = Math.round(this.values.w2 * e), n = WLB.MainView.wH, "right" == this.posBigImg ? i = this.values.x2 + this.values.w2 - s : "left" == this.posBigImg && (i = this.values.x2), r = 0), this.bgInfos.clear(), this.bgInfos.beginFill(2039840), this.bgInfos.drawRect(i, r, s, n), this.bgInfos.endFill()
    }, y = function (t, e) {
        var i, r, s;
        t < 4 ? (r = 0, s = 0) : 4 == t && (e <= this.steps[0] - this.steps[4] + 100 && !this.contShown ? (this.contShown = !0, this.$cont[0].style.display = "block", this.$cont[0].offsetHeight) : e > this.steps[0] - this.steps[4] + 100 && this.contShown && (this.contShown = !1, this.$cont[0].style.display = "none"), i = 1 - (e - (this.steps[0] - this.steps[4])) / 100, i < 0 && (i = 0), "right" == this.posBigImg ? r = Math.round(80 - 80 * i) : "left" == this.posBigImg && (r = -Math.round(80 - 80 * i)), s = i), this.$infosWrap[0].style.opacity = s, setTranslate(this.$infosWrap[0], r, 0), setTranslate(this.$cont[0], 0, this.inertia.contY.v)
    };
    return e.prototype.getContY = function () {
        return this.inertia.contY.v
    }, e
}(window), WLB.AbstractPageView = function (t) {
    "use strict";
    function e() {
        WLB.AbstractView.call(this), this.id = "AbstractPageView"
    }

    return e.prototype = Object.create(WLB.AbstractView.prototype), e.prototype.constructor = e, e.prototype.initDOM = function () {
        this.$page = $(document.getElementById("page"))
    }, e.prototype.initEl = function () {
        this.lazyloader = new WLB.LazyLoader(this.$page, "img-lazyload", 1, (!0))
    }, e.prototype.initTl = function () {
    }, e.prototype.show = function () {
    }, e.prototype.hide = function () {
    }, e.prototype.destroy = function () {
        WLB.AbstractView.prototype.destroy.call(this), void 0 !== this.lazyloader && this.lazyloader.destroy()
    }, e.prototype.onPageShown = function () {
        this.dispatch(this.E.SHOWN)
    }, e.prototype.onPageHidden = function () {
        this.dispatch(this.E.HIDDEN)
    }, e
}(window), WLB.AbstractScene = function (t) {
    "use strict";
    function e() {
        WLB.AbstractPageView.call(this), this.id = "AbstractScene", this.opacity = 1, this.imgInfos = [], this.imgsGroups = [], this.prlxEls = [], this.posGroupLoaded = 0, this.FOOTER_H = 50, this.sceneH = 0
    }

    e.prototype = Object.create(WLB.AbstractPageView.prototype), e.prototype.constructor = e, e.prototype.initDOM = function () {
        WLB.AbstractPageView.prototype.initDOM.call(this), this.$intro = this.$page.find(".sc-intro"), this.$introBtnCont = this.$page.find(".sc-intro-btn-container"), this.$introBtn = this.$introBtnCont.find(".sc-intro-btn"), this.$prodCont = this.$page.find(".sc-prod-container"), this.$txtCont = this.$page.find(".sc-txt-container"), this.$txt = this.$txtCont.find(".sc-txt")
    }, e.prototype.initEl = function () {
        WLB.AbstractPageView.prototype.initEl.call(this), "firefox" == WLB.Device.BROWSER && i.call(this), this.menuNav = WLB.Views.Statics.Header.menuNav, this.sceneCont = new PIXI.Container, WLB.Views.Statics.CanvasController.addChild(this.sceneCont), this.sceneCont.alpha = 0, this.setImagesInfos(), r.call(this), s.call(this), this.lastImgGroup = this.imgsGroups[this.imgsGroups.length - 1], this.loadNext()
    }, e.prototype.initTl = function () {
        var t = WLB.PagesController.isFirstLoad ? 4.2 : .3;
        this.tl.showPage = new TimelineLite({paused: !0}), this.tl.showPage.to(this.$introBtnCont, 2.5, {
            y: -50,
            opacity: 1,
            ease: Expo.easeOut,
            onStart: this.onPageShown.bind(this)
        }, t), this.tl.hidePage = new TimelineLite({
            paused: !0,
            onComplete: this.onPageHidden.bind(this)
        }), this.tl.hidePage.to(this.$page, .8, {
            opacity: 0,
            ease: Quad.easeOut
        })
    }, e.prototype.bindEvents = function () {
        WLB.AbstractPageView.prototype.bindEvents.call(this), WLB.MainView.buildEvt(WLB.MainView.E.RAF, this.raf.bind(this)), this.$introBtn.on("click", $.proxy(c, this));
        for (var t = 0; t < this.imgsGroups.length; t++)this.imgsGroups[t].buildEvt(this.imgsGroups[t].E.LOADED, this.loadNext.bind(this))
    }, e.prototype.unbindEvents = function () {
        WLB.AbstractPageView.prototype.unbindEvents.call(this), WLB.MainView.destroyEvt(WLB.MainView.E.RAF, this.raf.bind(this)), this.$introBtn.off("click", $.proxy(c, this));
        for (var t = 0; t < this.imgsGroups.length; t++)this.imgsGroups[t].destroyEvt(this.imgsGroups[t].E.LOADED, this.loadNext.bind(this))
    };
    var i = function () {
        for (var t, e, i, r, s = 0; s < this.$txt.length; s++) {
            t = $(this.$txt[s]), e = t.find(".sc-txt-word"), r = 0, i = e.length;
            for (var n = 0; n < i; n++)r += e[n].clientWidth;
            1 == i ? r -= 2 : i > 1 && (r += 42), $(this.$txt[s]).find("svg text")[0].setAttribute("textLength", r)
        }
    };
    e.prototype.show = function () {
        this.tl.showPage.play(0)
    }, e.prototype.onPageShown = function () {
        this.initView(), WLB.AbstractPageView.prototype.onPageShown.call(this), this.resize()
    }, e.prototype.hide = function () {
        WLB.Router.pageChangeByNav ? this.tl.hidePage.progress(1) : this.tl.hidePage.play(0)
    }, e.prototype.resize = function () {
        this.$intro[0].style.height = WLB.MainView.wH + "px", this.isInit && (WLB.MainView.setBodyHeight(this.sceneH), n.call(this))
    }, e.prototype.raf = function () {
        l.call(this), o.call(this), a.call(this), h.call(this)
    }, e.prototype.destroy = function () {
        WLB.AbstractPageView.prototype.destroy.call(this);
        for (var t = 0; t < this.imgsGroups.length; t++)this.imgsGroups[t].destroy();
        WLB.Views.Statics.CanvasController.removeChild(this.sceneCont), this.sceneCont.destroy()
    };
    var r = function () {
        var t, e, i;
        for (var r in this.imgInfos)t = this.imgInfos[r].constructor, e = this.imgInfos[r].params, "BwImageAndThumbs" == t ? i = new WLB.Views.Partials.BwImageAndThumbs(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]) : "SimpleImages" == t ? i = new WLB.Views.Partials.SimpleImages(e[0], e[1], e[2], e[3], e[4]) : "ProductFocus" == t && (i = new WLB.Views.Partials.ProductFocus(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7])), this.imgsGroups.push(i), i.init()
    }, s = function () {
        for (var t = 0; t < this.$txtCont.length; t++)this.prlxEls.push([this.$txtCont[t], this.$txt[t], null, .25, "x", null, null])
    }, n = function () {
        for (var t, e, i, r = (WLB.MainView.$body.offset().top, 0); r < this.prlxEls.length; r++)t = this.prlxEls[r], e = t[0], i = e.getBoundingClientRect(), t[2] = WLB.MainView.siY + Math.round(i.top + i.height / 2 - WLB.MainView.wH / 2)
    }, o = function () {
        for (var t = 0; t < this.$prodCont.length; t++)setTranslate(this.$prodCont[t], 0, -WLB.MainView.siY)
    }, a = function () {
        for (var t, e, i, r, s, n, o = 0; o < this.prlxEls.length; o++)t = this.prlxEls[o], e = t[1], i = (WLB.MainView.siY - t[2]) * t[3], r = t[4], s = t[5], n = t[6], null !== s && i < s ? i = s : null !== n && i > n && (i = n), "y" == r ? setTranslate(e, 0, i) : setTranslate(e, i, 0)
    }, h = function () {
        var t = this.lastImgGroup.getContY();
        WLB.Views.Statics.Header.setPosition(-WLB.MainView.siY), WLB.Views.Statics.Footer.setPosition(t)
    };
    e.prototype.setOpacity = function (t) {
        this.isInit && (this.opacity = t, this.sceneCont.alpha = this.opacity)
    };
    var l = function () {
        var t = Math.round(WLB.MainView.siY / 2.5);
        setTranslate(this.$introBtn[0], 0, t)
    }, c = function () {
        var t = 565;
        this.tw.skipIntro = TweenLite.to(WLB.MainView.$window, .8, {
            scrollTo: {y: t, autoKill: !1},
            ease: Quart.easeInOut
        })
    };
    return e.prototype.loadNext = function () {
        this.posGroupLoaded != this.imgsGroups.length && (this.imgsGroups[this.posGroupLoaded].load(), this.posGroupLoaded++)
    }, e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Pages = WLB.Views.Pages || {}, WLB.Views.Pages.Error404 = function (t) {
    "use strict";
    function e() {
        WLB.AbstractPageView.call(this), this.id = "Error404", this.VIDEO_W = 1280, this.VIDEO_H = 720
    }

    e.prototype = Object.create(WLB.AbstractPageView.prototype), e.prototype.constructor = e, e.prototype.initDOM = function () {
        WLB.AbstractPageView.prototype.initDOM.call(this), this.$videoCont = $(document.getElementById("e404-video-container")), this.$video = $(document.getElementById("e404-video")), this.$title = this.$videoCont.find(".e404-title"), this.$contBlock = this.$page.find(".e404-content-block"), this.$btn = this.$page.find(".e404-btn")
    }, e.prototype.initEl = function () {
        this.video404 = new WLB.Video("e404-video", null, WLB.Path.URL.img + "others/404.jpg", (!1), (!0), (!1)), this.video404.buildEvt(this.video404.E.CAN_PLAY, i.bind(this)), this.video404.init(), this.video404.load()
    }, e.prototype.initTl = function () {
        var t = WLB.PagesController.isFirstLoad ? 2 : .3;
        this.tl.showPage = new TimelineLite({paused: !0}), this.tl.showPage.set(this.$videoCont, {scale: .7}, 0), this.tl.showPage.set(this.$contBlock, {y: 20}, 0), this.tl.showPage.to(this.$videoCont, 1, {
            opacity: 1,
            ease: Quad.easeOut
        }, t), this.tl.showPage.to(this.$videoCont, 1.5, {
            scale: 1,
            ease: Back.easeOut,
            onComplete: this.onPageShown.bind(this)
        }, t), this.tl.showPage.staggerTo(this.$contBlock, 1, {
            y: 0,
            opacity: 1,
            ease: Quart.easeOut
        }, .08, t + 1), this.tl.hidePage = new TimelineLite({paused: !0}), this.tl.hidePage.staggerTo(this.$contBlock, 1, {
            y: -20,
            opacity: 0,
            ease: Quart.easeOut
        }, .08, 0), this.tl.hidePage.to(this.$videoCont, 1, {
            opacity: 0,
            ease: Quad.easeIn
        }, 0), this.tl.hidePage.to(this.$videoCont, 1, {
            scale: .5,
            ease: Back.easeIn,
            onComplete: this.onPageHidden.bind(this)
        }, 0)
    }, e.prototype.bindEvents = function () {
        WLB.AbstractPageView.prototype.bindEvents.call(this), this.$btn.on("click", $.proxy(this.changeUrl, this))
    }, e.prototype.unbindEvents = function () {
        WLB.AbstractPageView.prototype.unbindEvents.call(this), this.$btn.off("click", $.proxy(this.changeUrl, this))
    }, e.prototype.show = function () {
        this.tl.showPage.play(0)
    }, e.prototype.hide = function () {
        this.tl.hidePage.play(0)
    }, e.prototype.resize = function () {
        WLB.MainView.setBodyHeight(null);
        var t = getElPos(this.VIDEO_W, this.VIDEO_H, this.$videoCont[0].clientWidth, this.$videoCont[0].clientHeight);
        this.$video[0].style.left = t.x + "px", this.$video[0].style.top = t.y + "px", this.$video[0].style.width = t.w + "px", this.$video[0].style.height = t.h + "px";
        var e = WLB.MainView.bW / 1280;
        this.$title[0].style[WLB.Props.TRANSFORM] = "scale(" + e + ", " + e + ")"
    }, e.prototype.destroy = function () {
        WLB.AbstractPageView.prototype.destroy.call(this), this.video404.destroy()
    };
    var i = function () {
        this.video404.setVolume(0), this.video404.play()
    };
    return e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Pages = WLB.Views.Pages || {}, WLB.Views.Pages.Home = function (t) {
    "use strict";
    function e() {
        WLB.AbstractPageView.call(this), this.id = "Home"
    }

    return e.prototype = Object.create(WLB.AbstractPageView.prototype), e.prototype.constructor = e, e.prototype.show = function () {
        WLB.AbstractPageView.prototype.show.call(this), this.onPageShown()
    }, e.prototype.hide = function () {
        WLB.AbstractPageView.prototype.hide.call(this), this.onPageHidden()
    }, e.prototype.resize = function () {
        WLB.MainView.setBodyHeight(null)
    }, e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Pages = WLB.Views.Pages || {}, WLB.Views.Pages.Piste = function (t) {
    "use strict";
    function e() {
        WLB.AbstractScene.call(this), this.id = "Piste"
    }

    return e.prototype = Object.create(WLB.AbstractScene.prototype), e.prototype.constructor = e, e.prototype.setImagesInfos = function () {
        this.imgInfos = [{
            constructor: "BwImageAndThumbs",
            params: [this.sceneCont, 0, 1, "scene-1/lifestyle-1-1", 1440, 530, 300, 1640, [[480, -60, 320, 650, "bottom"]]]
        }, {
            constructor: "SimpleImages",
            params: [this.sceneCont, 0, 1, 2565, [["scene-1/lifestyle-1-2", 80, 0, 325, 533, -.15]]]
        }, {
            constructor: "BwImageAndThumbs",
            params: [this.sceneCont, -1, 1, "scene-1/lifestyle-1-3", 1440, 530, 2960, 1546, [[600, 90, 160, 590, "bottom"], [800, -30, 240, 590, "top"]]]
        }, {
            constructor: "SimpleImages",
            params: [this.sceneCont, 0, 1, 6020, [["scene-1/lifestyle-1-4", 20, 0, 320, 560, .2], ["scene-1/lifestyle-1-5", 560, 580, 320, 320, -.15]]]
        }, {
            constructor: "ProductFocus",
            params: ["pi-prod-focus-1", this.sceneCont, -1, 1, ["scene-1/product-focus-1-1-big.png", "scene-1/product-focus-1-1-small.png", "scene-1/lifestyle-1-6-bw.jpg", "scene-1/lifestyle-1-7-bw.jpg"], 5274, 1500, "right"]
        }, {
            constructor: "BwImageAndThumbs",
            params: [this.sceneCont, 0, 1.5, "scene-1/lifestyle-1-8", 1440, 530, 8427, 1440, [[400, 20, 240, 590, "top"], [720, 140, 160, 590, "bottom"]]]
        }, {
            constructor: "SimpleImages",
            params: [this.sceneCont, 0, 1.5, 11240, [["scene-1/lifestyle-1-9", 80, 80, 320, 320, -.3], ["scene-1/lifestyle-1-10", 540, 120, 540, 320, .15]]]
        }, {
            constructor: "ProductFocus",
            params: ["pi-prod-focus-2", this.sceneCont, -1, 1.5, ["scene-1/product-focus-1-2-big.png", "scene-1/product-focus-1-2-small.png", "scene-1/lifestyle-1-11-bw.jpg", "scene-1/lifestyle-1-12-bw.jpg"], 10685, 1040, "left"]
        }]
    }, e.prototype.resize = function () {
        this.sceneH = 2 * WLB.MainView.wH + 10685 + 1040 + 1300 + 265 + this.FOOTER_H, WLB.AbstractScene.prototype.resize.call(this)
    }, e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Pages = WLB.Views.Pages || {}, WLB.Views.Pages.Free = function (t) {
    "use strict";
    function e() {
        WLB.AbstractScene.call(this), this.id = "Free"
    }

    return e.prototype = Object.create(WLB.AbstractScene.prototype), e.prototype.constructor = e, e.prototype.initDOM = function () {
        WLB.AbstractScene.prototype.initDOM.call(this)
    }, e.prototype.setImagesInfos = function () {
        this.imgInfos = [{
            constructor: "BwImageAndThumbs",
            params: [this.sceneCont, 0, 1, "scene-2/lifestyle-2-1", 1440, 530, 300, 2600, [[480, 23, 160, 530, "bottom"], [720, -98, 160, 530, "top"]]]
        }, {
            constructor: "SimpleImages",
            params: [this.sceneCont, 0, 1, 4260, [["scene-2/lifestyle-2-2", 639, 0, 240, 408, -.25], ["scene-2/lifestyle-2-3", 80, 50, 321, 561, .2], ["scene-2/lifestyle-2-4", 561, 570, 319, 319, -.1]]]
        }, {
            constructor: "ProductFocus",
            params: ["fr-prod-focus-1", this.sceneCont, -1, 1, ["scene-2/product-focus-2-1-big.png", "scene-2/product-focus-2-1-small.png", "scene-2/lifestyle-2-5-bw.jpg", "scene-2/lifestyle-2-6-bw.jpg"], 3541, 1500, "right"]
        }, {
            constructor: "BwImageAndThumbs",
            params: [this.sceneCont, 0, 1.5, "scene-2/lifestyle-2-7", 1440, 530, 6694, 1502, [[780, 85, 320, 556, "bottom"]]]
        }, {
            constructor: "BwImageAndThumbs",
            params: [this.sceneCont, 0, 1.5, "scene-2/lifestyle-2-8", 1440, 530, 8925, 1445, [[560, 84, 320, 556, "bottom"]]]
        }, {
            constructor: "SimpleImages",
            params: [this.sceneCont, 0, 1.5, 11840, [["scene-2/lifestyle-2-9", 160, 0, 240, 532, .2], ["scene-2/lifestyle-2-10", 640, 480, 321, 340, -.15]]]
        }, {
            constructor: "ProductFocus",
            params: ["fr-prod-focus-2", this.sceneCont, -1, 1.5, ["scene-2/product-focus-2-2-big.png", "scene-2/product-focus-2-2-small.png", "scene-2/lifestyle-2-11-bw.jpg", "scene-2/lifestyle-2-12-bw.jpg"], 11098, 1422, "left"]
        }]
    }, e.prototype.resize = function () {
        this.sceneH = 2 * WLB.MainView.wH + 11098 + 1422 + 1300 + 265 + this.FOOTER_H, WLB.AbstractScene.prototype.resize.call(this)
    }, e
}(window), WLB.Views = WLB.Views || {}, WLB.Views.Pages = WLB.Views.Pages || {}, WLB.Views.Pages.Junior = function (t) {
    "use strict";
    function e() {
        WLB.AbstractScene.call(this), this.id = "Junior"
    }

    return e.prototype = Object.create(WLB.AbstractScene.prototype), e.prototype.constructor = e, e.prototype.setImagesInfos = function () {
        this.imgInfos = [{
            constructor: "BwImageAndThumbs",
            params: [this.sceneCont, 0, 1, "scene-3/lifestyle-3-1", 1440, 530, 300, 2505, [[480, -30, 160, 590, "top"], [720, 50, 160, 590, "bottom"]]]
        }, {
            constructor: "SimpleImages",
            params: [this.sceneCont, 0, 1, 3485, [["scene-3/lifestyle-3-2", 0, 0, 560, 412, -.15]]]
        }, {
            constructor: "BwImageAndThumbs",
            params: [this.sceneCont, -1, 1, "scene-3/lifestyle-3-3", 1440, 530, 3760, 1700, [[800, -40, 240, 650, "bottom"]]]
        }, {
            constructor: "SimpleImages",
            params: [this.sceneCont, 0, 1, 6150, [["scene-3/lifestyle-3-4", 80, 0, 320, 408, -.3]]]
        }, {
            constructor: "ProductFocus",
            params: ["ju-prod-focus-1", this.sceneCont, -1, 1, ["scene-3/product-focus-3-1-big.png", "scene-3/product-focus-3-1-small.png", "scene-3/lifestyle-3-5-bw.jpg", "scene-3/lifestyle-3-6-bw.jpg"], 6158, 180, "right"]
        }]
    }, e.prototype.resize = function () {
        this.sceneH = Math.floor(1.5 * WLB.MainView.wH) + 6158 + 180 + 1300 + 265 + this.FOOTER_H, WLB.AbstractScene.prototype.resize.call(this)
    }, e
}(window), WLB.Main = function (t) {
    "use strict";
    function e() {
    }

    e.prototype.init = function () {
        WLB.Config.init(), WLB.Props.init(), WLB.Device.init(), WLB.Path.init(), WLB.Lang.init(), r.call(this), $(t).on("load", $.proxy(i, this))
    };
    var i = function () {
        WLB.PagesController.init(), WLB.MainView.init(), WLB.Router.init()
    }, r = function () {
        s.call(this, !1), n.call(this, !1), o.call(this, !1)
    }, s = function (t) {
        WLB.Config.setFPSStats(t), t && "preprod" != WLB.Config.ENV && "prod" != WLB.Config.ENV && WLB.Utils.FPSStats.init()
    }, n = function (t) {
        WLB.Config.setMemoryStats(t), t && "preprod" != WLB.Config.ENV && "prod" != WLB.Config.ENV && WLB.Utils.MemoryStats.init()
    }, o = function (t) {
        t && "preprod" != WLB.Config.ENV && "prod" != WLB.Config.ENV && WLB.Utils.DatGUI.init()
    };
    return new e
}(window), $(WLB.Main.init.bind(WLB.Main));
¬