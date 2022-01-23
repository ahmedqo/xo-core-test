import { XOHtml } from "xo-core";
import 'xo-core/Components/Loader';
import LoaderPath from '../views/Loader.xov';
import useStyles from '../styles/styles';

export default class Loader {
    constructor(params, queries) {
        this.param = params;
        this.query = queries;
        document.title = "Loader";
    }

    async render() {
        return await XOHtml({
            classes: useStyles()
        })(`@{{include ${LoaderPath}}}`);
    }
}