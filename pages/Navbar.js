import { XOView } from "xo-core";
import 'xo-core/Components/NavBar';
import NavbarPath from '../views/Navbar.xov';
import useStyles from '../styles/styles';

export default class Navbar extends XOView {
    static get props() {
        return {
            title: 'Navbar',
            template: NavbarPath
        }
    }

    static get state() {
        return {
            classes: useStyles()
        }
    }
}