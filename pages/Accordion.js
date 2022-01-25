import { XOHtml } from "xo-core";
import 'xo-core/Components/Accordion';
import AccordionPath from '../views/Accordion.xov';
import useStyles from '../styles/styles';

function randemize(length = 40) {
    function rand() {
        var words = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog", "kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed", "beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy", "slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately", "down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];
        for (var i = words.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = words[i];
            words[i] = words[j];
            words[j] = temp;
        }
        return words.join(" ");
    }
    return rand();
}

export default class Accordion {
    constructor(params, queries) {
        this.param = params;
        this.query = queries;
        document.title = "Accordion";
    }

    async render() {
        return await XOHtml({
            classes: useStyles(),
            randemize
        })(`{§include ${AccordionPath}§}`);
    }
}