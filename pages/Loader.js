import { XOView } from "xo-core";
import 'xo-core/Components/Loader';
import LoaderPath from '../views/Loader.xov';
import useStyles from '../styles/styles';

export default XOView('Loader', {
    title: 'Loader',
    template: LoaderPath,
    state: {
        classes: useStyles(),
    }
})