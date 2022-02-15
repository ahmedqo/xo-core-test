import { XOView } from "xo-core";
import 'xo-core/Icons/UserCog';
import 'xo-core/Icons/Wrapper';
import 'xo-core/Ui/AppBar'
import HomePath from '../views/Home.xov';
import useStyles from '../styles/styles';
import themes from '../com';

export default XOView('Home', {
    title: 'Home',
    template: HomePath,
    state: {
        classes: useStyles(),
        themes: themes,
        copy: (_, theme) => {
            navigator.clipboard
                .writeText(`<xo-app-bar theme="${theme}">\n\t\n</xo-app-bar>`);
        },
        click: () => {
            document.execCommand("copy");
            store.emit("toast", "Copied!", { theme: 'woods.500', timing: 5000 });
        }
    }
})