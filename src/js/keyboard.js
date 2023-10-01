// eslint-disable-next-line no-unused-vars
import keyboardTemplate from './keyboard-template.js';
import keyboardKeyDown from './keyboard-key-down.js';
import keyboardKeyUp from './keyboard-key-up.js';

const keyBoard = keyboardTemplate();

document.body.innerHTML = `<div class="container"><h1>RSS Virtual Keyboard</h1><textarea class="keyboard-field" name="" id="" cols="60" rows="10"></textarea>${keyBoard}<p>Виртуальная клавиатура создана в операционной системе Windows</p><p>Для переключения языка зажмите комбинацию клавишь: левые Ctrl + Alt</p></div>`;

const keys = document.querySelectorAll('.keyboard__key');

function init() {
  // ---------------------------------- mouse down

  keyboardKeyDown();
  keyboardKeyUp();

  // ------------------------------

  const textarea = document.querySelector('textarea');
  setInterval(() => {
    textarea.focus();
  }, 0);

  let activeLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ru';
  localStorage.setItem('lang', activeLang);

  function changeCurrentKeyboard(language) {
    function changeLang() {
      if (language === 'ru') {
        const removeHiddenForRus = () => {
          document.querySelectorAll('.key__rus').forEach((element) => {
            element.classList.remove('hidden');
          });
          document.querySelectorAll('.key__eng').forEach((element) => {
            element.classList.add('hidden');
          });
        };
        return removeHiddenForRus();
      } if (language === 'en') {
        const removeHiddenForEng = () => {
          document.querySelectorAll('.key__eng').forEach((element) => {
            element.classList.remove('hidden');
          });
          document.querySelectorAll('.key__rus').forEach((element) => {
            element.classList.add('hidden');
          });
        };
        return removeHiddenForEng();
      }
      return false;
    }
    return changeLang();
  }

  function fIrstControlAlt() {
    changeCurrentKeyboard(activeLang);
  }
  fIrstControlAlt();

  function ControlAlt(event) {
    if (event.ctrlKey && event.altKey) {
      localStorage.clear();
      activeLang = (activeLang === 'ru' ? 'en' : 'ru');
      localStorage.setItem('lang', activeLang);
      changeCurrentKeyboard(activeLang);
    }
    event.preventDefault();
  }

  const capsLock = document.querySelectorAll('.caps');
  function CapsLock(caps) {
    capsLock.forEach((element) => {
      if (caps) {
        element.classList.remove('hidden');
        document.querySelectorAll('.lower-case').forEach((elementLower) => {
          elementLower.classList.add('hidden');
        });
      } else if (!caps) {
        capsLock.forEach((elementCaps) => {
          elementCaps.classList.add('hidden');
        });
        document.querySelectorAll('.lower-case').forEach((elementRemoveLower) => {
          elementRemoveLower.classList.remove('hidden');
        });
      }
    });
  }
  // ------------------ Shift --------------------------------
  const shiftedElements = document.querySelectorAll('.upper-case');
  function Shift(caps) {
    if (caps) {
      document.querySelectorAll('.key__shifted-caps').forEach((element) => {
        element.classList.remove('hidden');
      });
      capsLock.forEach((element) => {
        element.classList.add('hidden');
      });
    } else if (!caps) {
      document.querySelectorAll('.lower-case').forEach((element) => {
        element.classList.add('hidden');
      });
      shiftedElements.forEach((element) => {
        element.classList.remove('hidden');
      });
    }
  }

  function unPressedShift(caps) {
    if (caps) {
      document.querySelectorAll('.key__shifted-caps').forEach((element) => {
        element.classList.add('hidden');
      });
      capsLock.forEach((element) => {
        element.classList.remove('hidden');
      });
    } else if (!caps) {
      document.querySelectorAll('.lower-case').forEach((element) => {
        element.classList.remove('hidden');
      });
      shiftedElements.forEach((element) => {
        element.classList.add('hidden');
      });
    }
  }
  // --------------- Backspace --------------------------------
  const Backspace = () => {
    const startValue = textarea.selectionStart;
    const endValue = textarea.selectionEnd;
    const oldValue = textarea.value;
    // eslint-disable-next-line max-len
    const newValue = oldValue.slice(0, startValue === endValue ? startValue - 1 : startValue) + oldValue.slice(endValue);
    textarea.value = newValue;
    textarea.selectionStart = startValue === endValue ? startValue - 1 : startValue;
    textarea.selectionEnd = textarea.selectionStart;
  };
    // -------------------- Enter ---------------------
  const Enter = () => {
    textarea.value += '\n';
  };
    //  ------------------------ Delete -------------------
  const Delete = () => {
    const startValue = textarea.selectionStart;
    const endValue = textarea.selectionEnd;
    const oldValue = textarea.value;
    if (!(oldValue.length > endValue)) return false;
    const newValue = oldValue.slice(0, startValue) + oldValue.slice(endValue + 1);
    textarea.value = newValue;
    textarea.selectionStart = startValue;
    textarea.selectionEnd = textarea.selectionStart;
    return false;
  };

  // -----------------------MOUSEDOWN / MOUSEUP-------------------------------
  keys.forEach((element) => {
    element.addEventListener('mousedown', (event) => {
      if (element.id === 'Tab') {
        textarea.value += '   ';
        // event.preventDefault();
      } else if (element.id === 'Enter') {
        Enter();
      } else if (element.id === 'Space') {
        textarea.value += ' ';
      } else if (element.id === 'ShiftLeft' || element.id === 'ShiftRight' || element.id === 'ControlLeft' || element.id === 'AltLeft' || element.id === 'AltRight' || element.id === 'MetaLeft' || element.id === 'MetaRight' || element.id === 'ControlRight' || element.id === 'CapsLock') {
        event.preventDefault();
      } else if (element.id === 'Backspace') {
        Backspace();
      } else if (element.id === 'Delete') {
        Delete();
      } else {
        textarea.value += element.innerText;
      }
      element.classList.add('active-key');
      event.preventDefault();
    });
    element.addEventListener('mouseup', () => {
      element.classList.remove('active-key');
    });
  });
  // ------------------------- Change Language block -------------------------------

  let capsPressed = false;
  textarea.addEventListener('keydown', (event) => {
    if (event.code === 'ControlLeft' || event.code === 'AltLeft') ControlAlt(event);
    if (event.code === 'CapsLock') {
      capsPressed = !capsPressed;
      CapsLock(capsPressed);
    } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') Shift(capsPressed);
    else if (event.code === 'Backspace') {
      Backspace(event);
    } else if (event.code === 'Delete') {
      Delete(event);
    }
  });
  textarea.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') unPressedShift(capsPressed);
  });
  document.querySelector('#CapsLock').addEventListener('mousedown', () => {
    capsPressed = !capsPressed;
    CapsLock(capsPressed);
  });
  document.querySelector('#ShiftRight').addEventListener('mousedown', () => {
    Shift(capsPressed);
  });
  document.querySelector('#ShiftLeft').addEventListener('mousedown', () => {
    Shift(capsPressed);
  });
  document.querySelector('#ShiftRight').addEventListener('mouseup', () => {
    unPressedShift(capsPressed);
  });
  document.querySelector('#ShiftLeft').addEventListener('mouseup', () => {
    unPressedShift(capsPressed);
  });
}

init();
