import { XOBuild, XOView } from "xo-core";
import 'xo-core/Fields/Number';
import 'xo-core/Components/Button';
import 'xo-core/Components/Await';
import 'xo-core/Components/Badge';
import 'xo-core/Ui/Grid';
import 'xo-core/Icons/Plus';
import 'xo-core/Icons/Minus';
import 'xo-core/Icons/Times';
import testPath from '../views/test.xov';
import useStyles from '../styles/styles';
import '../store';

export default XOView('test', {
    title: 'test',
    template: testPath,
    state: {
        classes: useStyles(),
        data: async function() {
            return await new Promise(res => {
                setTimeout(() => {
                    var arr = Array.from({ length: 10 }).map((_, i) => "<xo-badge theme=\'300\' style=\"width: calc((100% / 5) - ((1rem * (5 - 1)) / 5))\">User " + (i + 1) + "</xo-badge>");
                    res(arr.join(""));
                }, 5000);
            })
        },
        plus: function() {
            store.emit('plus');
        },
        minus: function() {
            store.emit("minus");
        },
        change: function() {
            store.emit('change');
        },
        clear: function() {
            store.emit('clear');
        },
        click_plus: function() {
            store.emit('click_plus');
        },
        click_minus: function() {
            store.emit('click_minus');
        }
    }
});