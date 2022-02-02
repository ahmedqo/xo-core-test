import { XOView } from "xo-core";
import 'xo-core/Components/Alert';
import AlertPath from '../views/Alert.xov';
import useStyles from '../styles/styles';

export default XOView('Alert', {
    title: 'Alert',
    template: AlertPath,
    state: {
        classes: useStyles(),
    }
})