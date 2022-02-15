import { XOView } from "xo-core";
import 'xo-core/Charts/Pie';
import 'xo-core/Charts/Radar';
import 'xo-core/Charts/Grid';
import ChartPath from '../views/Chart.xov';
import useStyles from '../styles/styles';
import themes from '../com';

export default XOView('Chart', {
    title: 'Chart',
    template: ChartPath,
    state: {
        classes: useStyles(),
        themes: themes,
        radCopy: () => {
            var _this = event.target;
            navigator.clipboard
                .writeText(`<xo-radar-chart theme="${_this.getAttribute("theme")}" header="" area></xo-radar-chart>`);
        },
        griCopy: () => {
            var _this = event.target;
            navigator.clipboard
                .writeText(`<xo-grid-chart theme="${_this.getAttribute("theme")}" header="" axis="[,]" line area dots bars></xo-grid-chart>`);
        },
        click: () => {
            document.execCommand("copy");
            store.emit("toast", "Copied!", { theme: 'woods.500', timing: 5000 });
        }
    }
})