import { XOView } from "xo-core";
import 'xo-core/Fields/Text';
import 'xo-core/Fields/Area';
import 'xo-core/Fields/Password';
import 'xo-core/Fields/Number';
import 'xo-core/Fields/Select';
import 'xo-core/Fields/Button';
import 'xo-core/Fields/SwitchGroup';
import 'xo-core/Fields/Date';
import 'xo-core/Fields/Rate';
import 'xo-core/Icons/User';
import FieldPath from '../views/Field.xov';
import useStyles from '../styles/styles';

export default XOView('Field', {
    title: 'Field',
    template: FieldPath,
    state: {
        classes: useStyles(),
        click: (self) => {
            console.log(self);
        }
    }
})