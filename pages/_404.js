import { XOHtml } from "xo-core";
import _404Path from '../views/404.xov';
import useStyles from '../styles/styles';

export default class _404 {
    constructor(params, queries) {
        this.param = params;
        this.query = queries;
        document.title = "Not Found";
    }

    async render() {
        return await XOHtml({
            classes: useStyles()
        })(`{*include ${_404Path}*}`);
    }
}