export default function keyboardKeyDown() {
  window.addEventListener('keydown', (event) => {
    const keys = document.querySelectorAll('.keyboard__key');
    const textarea = document.querySelector('textarea');
    keys.forEach((element) => {
      if (event.code === element.id) {
        if (element.id === 'Tab') {
          textarea.value += '    ';
          event.preventDefault();
        } else if (element.id === 'Enter') {
          textarea.value += '\n';
        } else if (element.id === 'Space') {
          textarea.value += ' ';
        } else if (element.id === 'ShiftLeft' || element.id === 'ShiftRight' || element.id === 'Delete' || element.id === 'ControlLeft' || element.id === 'AltLeft' || element.id === 'MetaLeft' || element.id === 'MetaRight' || element.id === 'ControlRight' || element.id === 'CapsLock' || element.id === 'Backspace') {
          event.preventDefault();
        } else if (element.id === 'AltRight') {
          document.querySelector('#ControlLeft').classList.remove('active-key');
        } else {
          textarea.value += element.innerText;
        }
        element.classList.add('active-key');
        event.preventDefault();
      }
    });
  });
}
