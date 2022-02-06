import { XODom, XOView } from "xo-core";
import 'xo-core/Fields/Number';
import 'xo-core/Fields/Button';
import 'xo-core/Icons/Plus';
import 'xo-core/Icons/Minus';
import testPath from '../views/test.xov';
import useStyles from '../styles/styles';
import store from '../store'

var $NUM = 0;
store.on('plus', function() {
    $NUM += 1;
    XODom("xo-number").val($NUM);
});
store.on('minus', function() {
    $NUM -= 1;
    XODom("xo-number").val($NUM);
});
store.on('show', function() {
    $NUM = XODom("xo-number").val();
    XODom("h1").htm($NUM);
})

export default XOView('test', {
    title: 'test',
    template: testPath,
    state: {
        $NUM: $NUM,
        classes: useStyles(),
        plus: () => {
            window.store.emit('plus');
        },
        minus: () => {
            window.store.emit("minus");
        },
        change: () => {
            window.store.emit('show');
        }
    }
});