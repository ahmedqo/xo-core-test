import { XOView } from "xo-core";
import _404Path from '../views/404.xov';
import useStyles from '../styles/styles';

export default XOView('_404', {
    title: 'Not Found',
    template: _404Path,
    state: {
        classes: useStyles(),
    }
})