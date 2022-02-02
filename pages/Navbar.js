import { XOView } from "xo-core";
import 'xo-core/Components/NavBar';
import NavbarPath from '../views/Navbar.xov';
import useStyles from '../styles/styles';

export default XOView('Navbar', {
    title: 'Navbar',
    template: NavbarPath,
    state: {
        classes: useStyles(),
    }
})