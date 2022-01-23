import { XOHtml } from "xo-core";
import 'xo-core/Fields/Text';
import 'xo-core/Fields/Area';
import 'xo-core/Fields/Password';
import 'xo-core/Fields/Number';
import 'xo-core/Fields/Button';
import 'xo-core/Fields/SwitchGroup';
import 'xo-core/Fields/Rate';
import 'xo-core/Icons/User';
import FieldPath from '../views/Field.xov';
import useStyles from '../styles/styles';

export default class Field {
    constructor(params, queries) {
        this.param = params;
        this.query = queries;
        document.title = "Field";
    }

    async render() {
        return await XOHtml({
            classes: useStyles(),
            click(e) { console.log(e) }
        })(`@{{include ${FieldPath}}}`);
    }
}