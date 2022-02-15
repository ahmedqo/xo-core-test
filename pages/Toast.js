import { XOView } from "xo-core";
import 'xo-core/Components/ToastGroup';
import ToastPath from '../views/Toast.xov';
import useStyles from '../styles/styles';
import themes from '../com';

export default XOView('Toast', {
    title: 'Toast',
    template: ToastPath,
    state: {
        classes: useStyles(),
        themes: themes,
        copy: (_, theme) => {
            navigator.clipboard
                .writeText(`<xo-toast theme="${theme}">\n\t\n</xo-toast>`);
        },
        click: () => {
            document.execCommand("copy");
            store.emit("toast", "Copied!", { theme: 'woods.500', timing: 5000 });
        },
    }
})