import {Lunicode} from "./lunicode.js";

const textareaSource = document.querySelector('#source');
const textareaDest = document.querySelector('#dest');

const flipBtn = document.querySelector('#flip');
const mirrorBtn = document.querySelector('#mirror');
const creepifyBtn = document.querySelector('#creepify');
const bentBtn = document.querySelector('#bent');
const tinyBtn = document.querySelector('#tiny');

flipBtn.onclick = () => {
    const luni = new Lunicode();
    const encodedText = luni.tools.flip.encode(textareaSource.value);
    textareaDest.value = encodedText;
};

mirrorBtn.onclick = () => {
    const luni = new Lunicode();
    const encodedText = luni.tools.mirror.encode(textareaSource.value);
    textareaDest.value = encodedText;
};

creepifyBtn.onclick = () => {
    const luni = new Lunicode();
    luni.tools.creepify.options.maxHeight = 17;
    const encodedText = luni.tools.creepify.encode(textareaSource.value);
    textareaDest.value = encodedText;
};

bentBtn.onclick = () => {
    const luni = new Lunicode();
    const encodedText = luni.tools.bent.encode(textareaSource.value);
    textareaDest.value = encodedText;
};

tinyBtn.onclick = () => {
    const luni = new Lunicode();
    const encodedText = luni.tools.tiny.encode(textareaSource.value);
    textareaDest.value = encodedText;
};
