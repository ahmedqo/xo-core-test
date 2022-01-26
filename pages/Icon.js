import { XOView } from "xo-core";
import 'xo-core/Icons/AlignCenter';
import 'xo-core/Icons/Apartment';
import 'xo-core/Icons/AreaChart';
import 'xo-core/Icons/ArrowDown';
import 'xo-core/Icons/ArrowLeft';
import 'xo-core/Icons/ArrowRight';
import 'xo-core/Icons/ArrowUp';
import 'xo-core/Icons/At';
import 'xo-core/Icons/Ban';
import 'xo-core/Icons/BarChart';
import 'xo-core/Icons/Bell';
import 'xo-core/Icons/BellOn';
import 'xo-core/Icons/Bold';
import 'xo-core/Icons/BurgerSoda';
import 'xo-core/Icons/Calendar';
import 'xo-core/Icons/CalendarCheck';
import 'xo-core/Icons/CalendarMinus';
import 'xo-core/Icons/CalendarPlus';
import 'xo-core/Icons/CalendarTimes';
import 'xo-core/Icons/Camera';
import 'xo-core/Icons/Cart';
import 'xo-core/Icons/CartPlus';
import 'xo-core/Icons/Chair';
import 'xo-core/Icons/Check';
import 'xo-core/Icons/ChevronDoubleDown';
import 'xo-core/Icons/ChevronDoubleLeft';
import 'xo-core/Icons/ChevronDoubleRight';
import 'xo-core/Icons/ChevronDoubleUp';
import 'xo-core/Icons/ChevronDown';
import 'xo-core/Icons/ChevronLeft';
import 'xo-core/Icons/ChevronRight';
import 'xo-core/Icons/ChevronUp';
import 'xo-core/Icons/City';
import 'xo-core/Icons/Clock';
import 'xo-core/Icons/Delivery';
import 'xo-core/Icons/Download';
import 'xo-core/Icons/Envelope';
import 'xo-core/Icons/External';
import 'xo-core/Icons/Eye';
import 'xo-core/Icons/EyeSlash';
import 'xo-core/Icons/File';
import 'xo-core/Icons/FileAudio';
import 'xo-core/Icons/FileCode';
import 'xo-core/Icons/FileCsv';
import 'xo-core/Icons/FileExcel';
import 'xo-core/Icons/FileImage';
import 'xo-core/Icons/FilePdf';
import 'xo-core/Icons/FilePowerPoint';
import 'xo-core/Icons/FileText';
import 'xo-core/Icons/FileVideo';
import 'xo-core/Icons/FileWord';
import 'xo-core/Icons/FileZip';
import 'xo-core/Icons/Globe';
import 'xo-core/Icons/HandCash';
import 'xo-core/Icons/HandShake';
import 'xo-core/Icons/Home';
import 'xo-core/Icons/IdCard';
import 'xo-core/Icons/Indent';
import 'xo-core/Icons/Italic';
import 'xo-core/Icons/Key';
import 'xo-core/Icons/LineChart';
import 'xo-core/Icons/Link';
import 'xo-core/Icons/List';
import 'xo-core/Icons/Lock';
import 'xo-core/Icons/LockOpen';
import 'xo-core/Icons/Map';
import 'xo-core/Icons/Medal';
import 'xo-core/Icons/AlignJustify';
import 'xo-core/Icons/AlignLeft';
import 'xo-core/Icons/AlignRight';
import 'xo-core/Icons/Minus';
import 'xo-core/Icons/NotFound';
import 'xo-core/Icons/OrdredList';
import 'xo-core/Icons/Oudent';
import 'xo-core/Icons/Palette';
import 'xo-core/Icons/PaperPlane';
import 'xo-core/Icons/Pen';
import 'xo-core/Icons/Phone';
import 'xo-core/Icons/PieChart';
import 'xo-core/Icons/PiggyBank';
import 'xo-core/Icons/Plus';
import 'xo-core/Icons/Redo';
import 'xo-core/Icons/Search';
import 'xo-core/Icons/SignIn';
import 'xo-core/Icons/SignOut';
import 'xo-core/Icons/Smile';
import 'xo-core/Icons/SortDown';
import 'xo-core/Icons/SortLeft';
import 'xo-core/Icons/SortRight';
import 'xo-core/Icons/SortUp';
import 'xo-core/Icons/StrikeThrough';
import 'xo-core/Icons/TextSize';
import 'xo-core/Icons/Times';
import 'xo-core/Icons/Underline';
import 'xo-core/Icons/Undo';
import 'xo-core/Icons/Upload';
import 'xo-core/Icons/User';
import 'xo-core/Icons/UserCheck';
import 'xo-core/Icons/UserClock';
import 'xo-core/Icons/UserCog';
import 'xo-core/Icons/UserEdit';
import 'xo-core/Icons/UserFriends';
import 'xo-core/Icons/UserKey';
import 'xo-core/Icons/UserLock';
import 'xo-core/Icons/UserMinus';
import 'xo-core/Icons/UserPlus';
import 'xo-core/Icons/UserShield';
import 'xo-core/Icons/UserSlash';
import 'xo-core/Icons/UserTag';
import 'xo-core/Icons/UserTimes';
import 'xo-core/Icons/Users';
import 'xo-core/Icons/Utensils';
import 'xo-core/Icons/Wallet';
import 'xo-core/Icons/Weather';
import IconPath from '../views/Icon.xov';
import useStyles from '../styles/styles';

export default class Icon extends XOView {
    static get props() {
        return {
            title: 'Icon',
            template: IconPath
        }
    }

    static get state() {
        return {
            classes: useStyles()
        }
    }
}