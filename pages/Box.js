import { XOView } from "xo-core";
import 'xo-core/Components/Box';
import BoxPath from '../views/Box.xov';
import useStyles from '../styles/styles';

export default class Box extends XOView {
    static get props() {
        return {
            title: 'Box',
            template: BoxPath
        }
    }

    static get state() {
        return {
            classes: useStyles()
        }
    }
}