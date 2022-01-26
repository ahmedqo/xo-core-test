import { XOView } from "xo-core";
import 'xo-core/Icons/UserCog';
import 'xo-core/Icons/Wrapper';
import 'xo-core/Ui/AppBar'
import HomePath from '../views/Home.xov';
import useStyles from '../styles/styles';

export default class Home extends XOView {
    props() {
        return {
            title: 'Home',
            template: HomePath
        }
    }

    state() {
        return {
            classes: useStyles()
        }
    }
}