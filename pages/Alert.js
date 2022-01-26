import { XOView } from "xo-core";
import 'xo-core/Components/Alert';
import AlertPath from '../views/Alert.xov';
import useStyles from '../styles/styles';

export default class Alert extends XOView {
    props() {
        return {
            title: 'Alert',
            template: AlertPath
        }
    }

    state() {
        return {
            classes: useStyles()
        }
    }
}