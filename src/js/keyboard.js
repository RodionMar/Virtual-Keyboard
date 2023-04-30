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

    // -----------------------MOUSEDOWN / MOUSEUP-------------------------------
    LOWER_CASES.forEach(element => {
        element.addEventListener('mousedown', (event) => {
            console.log(event);
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('mouseup', (event) => {
            console.log(event);
            element.classList.remove('active-key');
        });
        element.addEventListener('keydown', (event) => {
            console.log(event);
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('keyup', (event) => {
            console.log(event);
            element.classList.remove('active-key');
        });
    });
    UPPER_CASES.forEach(element => {
        element.addEventListener('mousedown', (event) => {
            console.log(event);
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('mouseup', (event) => {
            console.log(event);
            element.classList.remove('active-key');
        });
        element.addEventListener('keydown', (event) => {
            console.log(event);
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('keyup', (event) => {
            console.log(event);
            element.classList.remove('active-key');
        });
    });
    CAPS_LOCK_CASES.forEach(element => {
        element.addEventListener('mousedown', (event) => {
            console.log(event);
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('mouseup', (event) => {
            console.log(event);
            element.classList.remove('active-key');
        });
        element.addEventListener('keydown', (event) => {
            console.log(event);
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('keyup', (event) => {
            console.log(event);
            element.classList.remove('active-key');
        });
    });
    SHIFTED_CAPS_LOCK_CASES.forEach(element => {
        element.addEventListener('mousedown', (event) => {
            console.log(event);
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('mouseup', (event) => {
            console.log(event);
            element.classList.remove('active-key');
        });
        element.addEventListener('keydown', (event) => {
            console.log(event);
            element.classList.add('active-key');
            textarea.value += element.innerText;
        });
        element.addEventListener('keyup', (event) => {
            console.log(event);
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
                function removeHiddenForRus(){
                    document.querySelectorAll('.key__rus').forEach(element => {
                        element.classList.remove('hidden');
                    });
                    document.querySelectorAll('.key__eng').forEach(element => {
                        element.classList.add('hidden');
                    });
                }
                return removeHiddenForRus();
            } else if (language === 'en') {
                function removeHiddenForEng(){
                    document.querySelectorAll('.key__eng').forEach(element => {
                        element.classList.remove('hidden');
                    });
                    document.querySelectorAll('.key__rus').forEach(element => {
                        element.classList.add('hidden');
                    });
                }
                return removeHiddenForEng();
            }
        }
        return changeLang();
    }

    let capsPressed = false;
    window.addEventListener('keydown', (event) => {
        if (event.code === 'ControlLeft' || event.code === 'AltLeft') ControlAlt(event);
        if (event.code === 'CapsLock') {
            capsPressed = !capsPressed;
            console.log(capsPressed);
            CapsLock(capsPressed);
        } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') Shift(capsPressed);
        else if (event.code === 'Backspace') {
            Backspace(event);
        }
        // else if (event.code === "Delete") Delete(event);
    });
    window.addEventListener('keyup', (event) => {
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') unPressedShift(capsPressed);
    });
    document.querySelector('#CapsLock').addEventListener('mousedown', () => {
        capsPressed = !capsPressed;
        console.log(capsPressed);
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
    document.querySelector('#Backspace').addEventListener('click', (event) => {
        Backspace(event);
    });
    document.querySelector('#Space').addEventListener('click', (event) => {
        Space(event);
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
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        event.preventDefault();
    }
    // ---------------- Space --------------------------
    function Space() {
        textarea.value += ' ';
    }
}

init();










