import { XOView } from "xo-core";
import 'xo-core/Charts/Pie';
import 'xo-core/Charts/Radar';
import 'xo-core/Charts/Grid';
import ChartPath from '../views/Chart.xov';
import useStyles from '../styles/styles';

export default class Chart extends XOView {
    props() {
        return {
            title: 'Chart',
            template: ChartPath
        }
    }

    state() {
        return {
            classes: useStyles()
        }
    }
}