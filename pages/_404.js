import { XOView } from "xo-core";
import _404Path from '../views/404.xov';
import useStyles from '../styles/styles';

export default class _404 extends XOView {
    static get props() {
        return {
            title: 'Not Found',
            template: _404Path
        }
    }

    static get state() {
        return {
            classes: useStyles()
        }
    }
}