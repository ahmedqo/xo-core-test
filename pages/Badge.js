import { XOView } from "xo-core";
import 'xo-core/Components/Badge';
import BadgePath from '../views/Badge.xov';
import useStyles from '../styles/styles';

export default class Badge extends XOView {
    static get props() {
        return {
            title: 'Badge',
            template: BadgePath
        }
    }

    static get state() {
        return {
            classes: useStyles()
        }
    }
}