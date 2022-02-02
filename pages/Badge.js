import { XOView } from "xo-core";
import 'xo-core/Components/Badge';
import BadgePath from '../views/Badge.xov';
import useStyles from '../styles/styles';

export default XOView('Badge', {
    title: 'Badge',
    template: BadgePath,
    state: {
        classes: useStyles(),
    }
})