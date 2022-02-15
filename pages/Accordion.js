import { XOView } from "xo-core";
import 'xo-core/Components/AccordionGroup';
import AccordionPath from '../views/Accordion.xov';
import useStyles from '../styles/styles';
import themes from '../com';

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

export default XOView('Accordion', {
    title: 'Accordion',
    template: AccordionPath,
    state: {
        classes: useStyles(),
        themes: themes,
        randemize,
        copy: (_, theme) => {
            navigator.clipboard
                .writeText(`<xo-accordion theme="${theme}" header="">\n\t\n</xo-accordion>`);
        },
        click: () => {
            document.execCommand("copy");
            store.emit("toast", "Copied!", { theme: 'woods.500', timing: 5000 });
        }
    }
})