import { XOHtml } from "xo-core";
import 'xo-core/Components/Alert';
import AlertPath from '../views/Alert.xov';
import useStyles from '../styles/styles';

export default class Alert {
    constructor(params, queries) {
        this.param = params;
        this.query = queries;
        document.title = "Alert";
    }

    async render() {
        return await XOHtml({
            classes: useStyles()
        })(`@{{include ${AlertPath}}}`);
    }
}