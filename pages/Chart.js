import { XOView } from "xo-core";
import 'xo-core/Charts/Pie';
import 'xo-core/Charts/Radar';
import 'xo-core/Charts/Grid';
import ChartPath from '../views/Chart.xov';
import useStyles from '../styles/styles';

export default XOView('Chart', {
    title: 'Chart',
    template: ChartPath,
    state: {
        classes: useStyles(),
    }
})