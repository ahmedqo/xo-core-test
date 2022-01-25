import { XOHtml } from "xo-core";
import 'xo-core/Charts/Pie';
import 'xo-core/Charts/Radar';
import 'xo-core/Charts/Grid';
import ChartPath from '../views/Chart.xov';
import useStyles from '../styles/styles';

export default class Chart {
    constructor(params, queries) {
        this.param = params;
        this.query = queries;
        document.title = "chart";
    }

    async render() {
        return await XOHtml({
            classes: useStyles()
        })(`{§include ${ChartPath}§}`);
    }
}