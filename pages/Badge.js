import { XOView } from "xo-core";
import 'xo-core/Components/Badge';
import BadgePath from '../views/Badge.xov';
import useStyles from '../styles/styles';
import themes from '../com';

export default XOView('Badge', {
    title: 'Badge',
    template: BadgePath,
    state: {
        classes: useStyles(),
        themes: themes,
        copy: (_, theme) => {
            navigator.clipboard
                .writeText(`<xo-badge theme="${theme}"></xo-badge>`);
        },
        click: () => {
            document.execCommand("copy");
            store.emit("toast", "Copied!", { theme: 'woods.500', timing: 5000 });
        }
    }
})