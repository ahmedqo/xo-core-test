import { XOView } from "xo-core";
import 'xo-core/Components/Box';
import BoxPath from '../views/Box.xov';
import useStyles from '../styles/styles';

export default XOView('Box', {
    title: 'Box',
    template: BoxPath,
    state: {
        classes: useStyles(),
    }
})