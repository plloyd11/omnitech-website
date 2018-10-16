! function (t, s) {
    "use strict";
    var o = {
        defaults: {
            isAutoSlide: !0,
            isHoverStop: !0,
            isBlurStop: !0,
            isShowDots: !0,
            isShowArrow: !0,
            isHoverShowArrow: !0,
            isLoadAllImgs: !1,
            slideSpeed: 1e4,
            switchSpeed: 500,
            dotsClass: "dots",
            dotActiveClass: "active",
            dotsEvent: "click",
            arrowClass: "arrow",
            arrowLeftClass: "arrow-left",
            arrowRightClass: "arrow-right"
        },
        options: null,
        curIndex: 0,
        timer: null,
        dotsList: [],
        init: function (o, i) {
            var e, n = t(o),
                r = n.find("ul li"),
                c = this;
            if ((e = this.options = t.extend({}, this.defaults, i)).isShowDots && this._createDots(o, r), e.isShowArrow && this._createArrow(o, r), e.isLoadAllImgs && r.each(function () {
                    t(this).css({
                        background: "url(" + t(this).attr("data-bg") + ")",
                        opacity: "0",
                        "z-index": "0",
                        "background-position": "50% 50%",
                        "background-size": "cover"
                    }), t(this).attr("data-bg", "")
                }), this._showBlock(r[this.curIndex]), e.isAutoSlide) {
                if (this._defaultSlide(r), e.isHoverStop) {
                    n.attr("class");
                    n.on("mouseenter", function (t) {
                        clearInterval(c.timer)
                    }).on("mouseleave", function () {
                        clearInterval(c.timer), c._defaultSlide(r)
                    })
                }
                e.isBlurStop && t(s).on("blur", function () {
                    clearInterval(c.timer)
                }).on("focus", function () {
                    clearInterval(c.timer), c._defaultSlide(r)
                })
            }
        },
        _defaultSlide: function (t) {
            var s = this;
            this.timer = setInterval(function () {
                s._hideBlock(t[s.curIndex]), s.curIndex = (s.curIndex + 1) % t.length, s._showBlock(t[s.curIndex])
            }, this.options.slideSpeed)
        },
        _showBlock: function (s) {
            var o = this.options,
                i = t(s),
                e = t(s).attr("data-bg");
            e && (i.css({
                background: "url(" + e + ")",
                opacity: "0",
                "z-index": "0",
                "background-position": "50% 50%",
                "background-size": "cover"
            }), i.attr("data-bg", "")), i.stop().animate({
                opacity: "1",
                "z-index": "1"
            }, o.switchSpeed), o.isShowDots && t(this.dotsList[this.curIndex]).addClass(o.dotActiveClass)
        },
        _hideBlock: function (s) {
            var o = this.options;
            t(s).stop().animate({
                opacity: "0",
                "z-index": "0"
            }, o.switchSpeed), o.isShowDots && t(this.dotsList[this.curIndex]).removeClass(o.dotActiveClass)
        },
        _createDots: function (s, o) {
            for (var i = this, e = this.options.dotsEvent, n = t("<ol/>", {
                    class: this.options.dotsClass
                }), r = [], c = 0; c < o.length; c++) r[c] = t("<li/>"), n.append(r[c]);
            t(s).append(n), this.dotsList = r, "click" !== e && "mouseover" !== e && "mouseenter" !== e || n.find("li").on(e, function () {
                i._hideBlock(o[i.curIndex]), i.curIndex = t(this).index(), i._showBlock(o[i.curIndex])
            })
        },
        _createArrow: function (s, o) {
            var i = this,
                e = t("<div/>", {
                    class: this.options.arrowClass
                }),
                n = t("<a/>", {
                    class: this.options.arrowLeftClass
                }),
                r = t("<a/>", {
                    class: this.options.arrowRightClass
                });
            e.append(n).append(r), t(s).append(e), this.options.isHoverShowArrow && (e.css("opacity", 0), t(s).on("mouseenter", function () {
                e.css("opacity", 1)
            }).on("mouseleave", function () {
                e.css("opacity", 0)
            })), n.on("click", function () {
                i._hideBlock(o[i.curIndex]), i.curIndex = (o.length + (i.curIndex - 1)) % o.length, i._showBlock(o[i.curIndex])
            }), r.on("click", function () {
                i._hideBlock(o[i.curIndex]), i.curIndex = (i.curIndex + 1) % o.length, i._showBlock(o[i.curIndex])
            })
        }
    };
    t.fn.slide = function (t) {
        return o.init(this, t), this
    }
}(jQuery, window);
