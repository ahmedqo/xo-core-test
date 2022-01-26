import { XOView } from "xo-core";
import 'xo-core/Components/Loader';
import LoaderPath from '../views/Loader.xov';
import useStyles from '../styles/styles';

export default class Loader extends XOView {
    props() {
        return {
            title: 'Loader',
            template: LoaderPath
        }
    }

    state() {
        return {
            classes: useStyles()
        }
    }
}