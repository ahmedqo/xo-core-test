import { XOView } from "xo-core";
import _404Path from '../views/404.xov';
import useStyles from '../styles/styles';

export default class _404 extends XOView {
    props() {
        return {
            title: 'Not Found',
            template: _404Path
        }
    }

    state() {
        return {
            classes: useStyles()
        }
    }
}