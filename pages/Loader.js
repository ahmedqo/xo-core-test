import { XOView } from "xo-core";
import 'xo-core/Components/Loader';
import LoaderPath from '../views/Loader.xov';
import useStyles from '../styles/styles';
import themes from '../com';

export default XOView('Loader', {
    title: 'Loader',
    template: LoaderPath,
    state: {
        classes: useStyles(),
        themes: themes,
        copy: (_, theme) => {
            navigator.clipboard
                .writeText(`<xo-loader theme="${theme}"></xo-loader>`);
        },
        click: () => {
            document.execCommand("copy");
            store.emit("toast", "Copied!", { theme: 'woods.500', timing: 5000 });
        }
    }
})