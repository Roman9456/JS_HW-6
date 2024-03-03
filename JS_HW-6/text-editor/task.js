const editor = document.getElementById('editor');

window.addEventListener('load', () => {
    const savedValue = localStorage.getItem('editorValue');
    editor.value = savedValue;
});

editor.addEventListener('input', () => {
    const editorValue = editor.value;
    localStorage.setItem('editorValue', editorValue);
});

const clearEditor = () => {
    editor.value = '';
    localStorage.removeItem('editorValue');
};

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', clearEditor);
