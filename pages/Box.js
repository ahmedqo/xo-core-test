import { XOView } from "xo-core";
import 'xo-core/Components/Box';
import BoxPath from '../views/Box.xov';
import useStyles from '../styles/styles';

export default class Box extends XOView {
    props() {
        return {
            title: 'Box',
            template: BoxPath
        }
    }

    state() {
        return {
            classes: useStyles()
        }
    }
}