import keyboardTemplate from './keyboard-template.js';

import keyboardKeyDown from './keyboard-key-down.js';
import keyboardKeyUp from './keyboard-key-up.js';

let keyBoard = keyboardTemplate();

document.body.innerHTML = '<div class="container"><h1>RSS Virtual Keyboard</h1><textarea class="keyboard-field" name="" id="" cols="60" rows="10"></textarea>'+ keyBoard +'<p>Виртуальная клавиатура создана в операционной системе Windows</p><p>Для переключения языка зажмите комбинацию клавишь: левые Ctrl + Alt</p></div>';

const LOWER_CASES = document.querySelectorAll('.lower-case');
const UPPER_CASES = document.querySelectorAll('.upper-case');
const CAPS_LOCK_CASES = document.querySelectorAll('.caps');
const SHIFTED_CAPS_LOCK_CASES = document.querySelectorAll('.key__shifted-caps');

function init() {

    // ---------------------------------- mouse down

    keyboardKeyDown();
    keyboardKeyUp();

    // ------------------------------

    const textarea = document.querySelector('textarea');
    setInterval(() => {
        textarea.focus();
    }, 0);

    // -----------------------MOUSEDOWN / MOUSEUP-------------------------------
    LOWER_CASES.forEach(element => {
        element.addEventListener('mousedown', () => {
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('mouseup', () => {
            element.classList.remove('active-key');
        });
        element.addEventListener('keydown', () => {
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('keyup', () => {
            element.classList.remove('active-key');
        });
    });
    UPPER_CASES.forEach(element => {
        element.addEventListener('mousedown', () => {
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('mouseup', () => {
            element.classList.remove('active-key');
        });
        element.addEventListener('keydown', () => {
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('keyup', () => {
            element.classList.remove('active-key');
        });
    });
    CAPS_LOCK_CASES.forEach(element => {
        element.addEventListener('mousedown', () => {
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('mouseup', () => {
            element.classList.remove('active-key');
        });
        element.addEventListener('keydown', () => {
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('keyup', () => {
            element.classList.remove('active-key');
        });
    });
    SHIFTED_CAPS_LOCK_CASES.forEach(element => {
        element.addEventListener('mousedown', () => {
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('mouseup', () => {
            element.classList.remove('active-key');
        });
        element.addEventListener('keydown', () => {
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('keyup', () => {
            element.classList.remove('active-key');
        });
    });
    document.querySelector('#Tab').addEventListener('mousedown', () => {
        textarea.value += '\t';
    });


    // ------------------------- Change Language block -------------------------------
    let activeLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ru';
    localStorage.setItem('lang', activeLang);

    function changeCurrentKeyboard(language) {
        function changeLang() {
            if (language === 'ru') {
                const removeHiddenForRus = () => {
                    document.querySelectorAll('.key__rus').forEach(element => {
                        element.classList.remove('hidden');
                    });
                    document.querySelectorAll('.key__eng').forEach(element => {
                        element.classList.add('hidden');
                    });
                };
                return removeHiddenForRus();
            } else if (language === 'en') {
                const removeHiddenForEng = () => {
                    document.querySelectorAll('.key__eng').forEach(element => {
                        element.classList.remove('hidden');
                    });
                    document.querySelectorAll('.key__rus').forEach(element => {
                        element.classList.add('hidden');
                    });
                };
                return removeHiddenForEng();
            }
        }
        return changeLang();
    }

    let capsPressed = false;
    textarea.addEventListener('keydown', (event) => {
        if (event.code === 'ControlLeft' || event.code === 'AltLeft') ControlAlt(event);
        if (event.code === 'CapsLock') {
            capsPressed = !capsPressed;
            CapsLock(capsPressed);
        } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') Shift(capsPressed);
        else if (event.code === 'Backspace') {
            Backspace(event);
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
    document.querySelector('#Backspace').addEventListener('click', () => {
        textarea.dispatchEvent(new KeyboardEvent('keydown', { code: 'Backspace' }));
    });
    document.querySelector('#Space').addEventListener('click', (event) => {
        Space(event);
    });
    document.querySelector('#Enter').addEventListener('click', () => {
        Enter();
    });
    document.querySelector('#ArrowUp').addEventListener('click', () => {
        textarea.value += '▲';
    });
    document.querySelector('#ArrowLeft').addEventListener('click', () => {
        textarea.value += '◄';
    });
    document.querySelector('#ArrowDown').addEventListener('click', () => {
        textarea.value += '▼';
    });
    document.querySelector('#ArrowRight').addEventListener('click', () => {
        textarea.value += '►';
    });

    // ---------------------- Ctrl Alt -------------------------------------
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
        capsLock.forEach(element => {
            if (caps) {
                element.classList.remove('hidden');
                document.querySelectorAll('.lower-case').forEach(element => {
                    element.classList.add('hidden');
                });
            } else if (!caps) {
                capsLock.forEach(element => {
                    element.classList.add('hidden');
                });
                document.querySelectorAll('.lower-case').forEach(element => {
                    element.classList.remove('hidden');
                });
            }
        });
    }
    // ------------------ Shift --------------------------------
    const shiftedElements = document.querySelectorAll('.upper-case');
    function Shift (caps) {
        if (caps) {
            document.querySelectorAll('.key__shifted-caps').forEach(element => {
                element.classList.remove('hidden');
            });
            capsLock.forEach(element => {
                element.classList.add('hidden');
            });
        } else if (!caps) {
            document.querySelectorAll('.lower-case').forEach(element => {
                element.classList.add('hidden');
            });
            shiftedElements.forEach(element => {
                element.classList.remove('hidden');
            });
        }
    }

    function unPressedShift(caps) {
        if (caps) {
            document.querySelectorAll('.key__shifted-caps').forEach(element => {
                element.classList.add('hidden');
            });
            capsLock.forEach(element => {
                element.classList.remove('hidden');
            });
        } else if (!caps) {
            document.querySelectorAll('.lower-case').forEach(element => {
                element.classList.remove('hidden');
            });
            shiftedElements.forEach(element => {
                element.classList.add('hidden');
            });
        }
    }
    // --------------- Backspace --------------------------------
    function Backspace(event) {
        const start = event.target.selectionStart;
        const end = event.target.selectionEnd;
        const oldValue = event.target.value;

        const newValue = oldValue.slice(0, start === end ? start - 1 : start) + oldValue.slice(end);
        event.target.value = newValue;
        event.target.selectionStart = start === end ? start - 1 : start;
        event.target.selectionEnd = event.target.selectionStart;

        event.preventDefault();
    }
    // ---------------- Space --------------------------
    function Space(event) {
        textarea.value += ' ';
        event.preventDefault();
    }
    // -------------------- Enter ---------------------
    const Enter = () => {
        textarea.value += '\n';
    };
}

init();










