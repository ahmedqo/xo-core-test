import { XOHtml } from "xo-core";
import 'xo-core/Components/NavBar';
import NavbarPath from '../views/Navbar.xov';
import LoaderPath from '../views/Loader.xov';
import useStyles from '../styles/styles';

export default class Navbar {
    constructor(params, queries) {
        this.param = params;
        this.query = queries;
        document.title = "Navbar";
    }

    async render() {
        return await XOHtml({
            classes: useStyles(),
            LoaderPath
        })(`{§include ${NavbarPath}§}`);
    }
}