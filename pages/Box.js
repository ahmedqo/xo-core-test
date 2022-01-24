import { XOHtml } from "xo-core";
import 'xo-core/Components/Box';
import BoxPath from '../views/Box.xov';
import useStyles from '../styles/styles';

export default class Box {
    constructor(params, queries) {
        this.param = params;
        this.query = queries;
        document.title = "Box";
    }

    async render() {
        return await XOHtml({
            classes: useStyles()
        })(`{*include ${BoxPath}*}`);
    }
}