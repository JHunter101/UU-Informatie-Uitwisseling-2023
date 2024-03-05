"use strict";
function spoiler(element) {
    element.classList.toggle('blur');
}
function toggle_elem(elem) {
    const element = document.getElementById(elem);
    const classesToCheck = ['hidden', 'desktop-only', 'mobile-only'];
    const hasAnyClass = classesToCheck.some((className) => element.classList.contains(className));
    if (hasAnyClass) {
        unhide_elem(elem);
    }
    else {
        hide_elem(elem);
    }
}
function unhide_elem(elem) {
    const element = document.getElementById(elem);
    element.classList.remove('hidden');
    element.classList.remove('desktop-only');
    element.classList.remove('mobile-only');
}
function hide_elem(elem) {
    const element = document.getElementById(elem);
    element.classList.add('hidden');
}
function clearBox(elem) {
    document.getElementById(elem).innerHTML = '';
}
function getInputElementValue(id) {
    const inputElement = document.getElementById(id);
    return inputElement.value;
}
