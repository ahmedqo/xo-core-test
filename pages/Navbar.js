import { XOView } from "xo-core";
import 'xo-core/Components/NavBar';
import NavbarPath from '../views/Navbar.xov';
import useStyles from '../styles/styles';
import themes from '../com';

export default XOView('Navbar', {
    title: 'Navbar',
    template: NavbarPath,
    state: {
        classes: useStyles(),
        themes: themes,
        copy: (_, theme) => {
            navigator.clipboard
                .writeText(`<xo-navbar theme="${theme}">\n\t<xo-navbar-item slot="brand" to="/">LOGO</xo-navbar-item>\n\t<xo-navbar-item to=""></xo-navbar-item>\n</xo-navbar>`);
        },
        click: () => {
            document.execCommand("copy");
            store.emit("toast", "Copied!", { theme: 'woods.500', timing: 5000 });
        }
    }
})