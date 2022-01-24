import { XOHtml } from "xo-core";
import 'xo-core/Components/Badge';
import BadgePath from '../views/Badge.xov';
import useStyles from '../styles/styles';

export default class Badge {
    constructor(params, queries) {
        this.param = params;
        this.query = queries;
        document.title = "Badge";
    }

    async render() {
        return await XOHtml({
            classes: useStyles()
        })(`{*include ${BadgePath}*}`);
    }
}