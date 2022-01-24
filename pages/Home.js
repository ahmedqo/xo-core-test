import { XOHtml } from "xo-core";
import 'xo-core/Icons/UserCog';
import 'xo-core/Icons/Wrapper';
import 'xo-core/Ui/AppBar'
import HomePath from '../views/Home.xov';
import useStyles from '../styles/styles';

export default class Home {
    constructor(params, queries) {
        this.param = params;
        this.query = queries;
        document.title = "Home";
    }

    async render() {
        return await XOHtml({
            classes: useStyles(),
        })(`{*include ${HomePath}*}`);
    }
}