import { XOView } from "xo-core";
import 'xo-core/Components/Box';
import BoxPath from '../views/Box.xov';
import useStyles from '../styles/styles';
import themes from '../com';

export default XOView('Box', {
    title: 'Box',
    template: BoxPath,
    state: {
        classes: useStyles(),
        themes: themes,
        copy: (_, theme) => {
            navigator.clipboard
                .writeText(`<xo-box theme="${theme}" header="">\n\t\n</xo-box>`);
        },
        click: () => {
            document.execCommand("copy");
            store.emit("toast", "Copied!", { theme: 'woods.500', timing: 5000 });
        }
    }
})