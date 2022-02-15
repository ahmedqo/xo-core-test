import { XOView } from "xo-core";
import 'xo-core/Components/Button';
import 'xo-core/Fields/SwitchGroup';
import 'xo-core/Fields/Password';
import 'xo-core/Fields/Number';
import 'xo-core/Fields/Select';
import 'xo-core/Fields/Text';
import 'xo-core/Fields/Area';
import 'xo-core/Fields/Date';
import 'xo-core/Fields/Rate';
import 'xo-core/Icons/User';
import FieldPath from '../views/Field.xov';
import useStyles from '../styles/styles';
import themes from '../com';

export default XOView('Field', {
    title: 'Field',
    template: FieldPath,
    state: {
        classes: useStyles(),
        themes: themes,
        calCopy: () => {
            var _this = event.target;
            navigator.clipboard
                .writeText(`<xo-date theme="${_this.getAttribute("theme")}" label=""></xo-date>`);
        },
        selCopy: () => {
            var _this = event.target;
            navigator.clipboard
                .writeText(`<xo-select theme="${_this.getAttribute("theme")}" label="">\n\t<xo-select-item value="">\n\t\t\n\t</xo-select-item>\n</xo-select>`);
        },
        ratCopy: () => {
            var _this = event.target;
            navigator.clipboard
                .writeText(`<xo-rate theme="${_this.getAttribute("theme")}"></xo-rate>`);
        },
        swiCopy: () => {
            var _this = event.target;
            navigator.clipboard
                .writeText(`<xo-switch theme="${_this.getAttribute("theme")}">\n\t\n</xo-switch>`);
        },
        btnCopy: () => {
            var _this = event.target;
            navigator.clipboard
                .writeText(`<xo-button theme="${_this.getAttribute("theme")}"></xo-button>`);
        },
        click: () => {
            document.execCommand("copy");
            store.emit("toast", "Copied!", { theme: 'woods.500', timing: 5000 });
        }
    }
})