import { XOStore, XODom } from "xo-core";

export default (function() {
    var $NUM = 0;
    var store = new XOStore({
        'plus': [function() {
            XODom("xo-number").val($NUM + 1);
        }],
        'minus': [function() {
            XODom("xo-number").val($NUM - 1);
        }],
        'change': [function() {
            $NUM = +XODom("xo-number").val();
        }],
        'clear': [function() {
            $NUM = 0;
            XODom("h1").htm(0);
            XODom("xo-number").val(0);
        }],
        'click_plus': [function() {
            XODom("h1").htm(+XODom("h1").htm() + $NUM);
            XODom("xo-number").val(0);
        }],
        'click_minus': [function() {
            XODom("h1").htm(+XODom("h1").htm() - $NUM);
            XODom("xo-number").val(0);
        }],
        'toast': [function(message, { theme, animation, timing }) {
            var toaster = document.querySelector("#toaster");
            toaster.appendChild(XOToastElement.Create(message, {
                theme: theme || "water.500",
                animation: animation || "right-left",
                auto: timing || 9000,
            }))
        }]
    });
    return store;
})();