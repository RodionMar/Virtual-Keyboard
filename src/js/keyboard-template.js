export default function keyboardTemplate() {
    const backQuote = '`';
    return `
    <div class="keyboard">
      <div class="keyboard__first-row">
        <div id="Backquote" class="keyboard__key keyboard__key--back-quote">
          <div class="key__rus">
            <div class="lower-case">ё</div>
            <div class="upper-case hidden">Ё</div>
            <div class="caps hidden">Ё</div>
            <div class="key__shifted-caps hidden">ё</div>
      </div>
      <div class="key__eng">
        <div class="lower-case">${backQuote}</div>
        <div class="upper-case hidden">~</div>
        <div class="caps hidden">${backQuote}</div>
        <div class="key__shifted-caps hidden">~</div>
      </div>
    </div>
    <div id="Digit1" class="keyboard__key keyboard__key--digit-one">
      <div class="key__rus">
        <div class="lower-case">1</div>
        <div class="upper-case hidden">!</div>
        <div class="caps hidden">1</div>
        <div class="key__shifted-caps hidden">!</div>
      </div>
      <div class="key__eng">
        <div class="lower-case">1</div>
        <div class="upper-case hidden">!</div>
        <div class="caps hidden">1</div>
        <div class="key__shifted-caps hidden">!</div>
      </div>
    </div>
    <div id="Digit2" class="keyboard__key keyboard__key--digit-two">
      <div class="key__rus">
        <div class="lower-case">2</div>
        <div class="upper-case hidden">"</div>
        <div class="caps hidden">2</div>
        <div class="key__shifted-caps hidden">"</div>
      </div>
      <div class="key__eng">
        <div class="lower-case">2</div>
        <div class="upper-case hidden">@</div>
        <div class="caps hidden">2</div>
        <div class="key__shifted-caps hidden">@</div>
      </div>
    </div>
    <div id="Digit3" class="keyboard__key keyboard__key--digit-three">
      <div class="key__rus">
        <div class="lower-case">3</div>
        <div class="upper-case hidden">№</div>
        <div class="caps hidden">3</div>
        <div class="key__shifted-caps hidden">№</div>
      </div>
      <div class="key__eng">
        <div class="lower-case">3</div>
        <div class="upper-case hidden">#</div>
        <div class="caps hidden">3</div>
        <div class="key__shifted-caps hidden">#</div>
      </div>
    </div>
    <div id="Digit4" class="keyboard__key keyboard__key--digit-four">
      <div class="key__rus">
        <div class="lower-case">4</div>
        <div class="upper-case hidden">;</div>
        <div class="caps hidden">4</div>
        <div class="key__shifted-caps hidden">;</div>
      </div>
      <div class="key__eng">
        <div class="lower-case">4</div>
        <div class="upper-case hidden">$</div>
        <div class="caps hidden">4</div>
        <div class="key__shifted-caps hidden">$</div>
      </div>
    </div>
    <div id="Digit5" class="keyboard__key keyboard__key--digit-five">
      <div class="key__rus">
        <div class="lower-case">5</div>
        <div class="upper-case hidden">%</div>
        <div class="caps hidden">5</div>
        <div class="key__shifted-caps hidden">%</div>
      </div>
      <div class="key__eng">
        <div class="lower-case">5</div>
        <div class="upper-case hidden">%</div>
        <div class="caps hidden">5</div>
        <div class="key__shifted-caps hidden">%</div>
      </div>
    </div>
    <div id="Digit6" class="keyboard__key keyboard__key--digit-six">
      <div class="key__rus">
        <div class="lower-case">6</div>
        <div class="upper-case hidden">:</div>
        <div class="caps hidden">6</div>
        <div class="key__shifted-caps hidden">:</div>
      </div>
      <div class="key__eng">
        <div class="lower-case">6</div>
        <div class="upper-case hidden">^</div>
        <div class="caps hidden">6</div>
        <div class="key__shifted-caps hidden">^</div>
      </div>
    </div>
    <div id="Digit7" class="keyboard__key keyboard__key--digit-seven">
      <div class="key__rus">
        <div class="lower-case">7</div>
        <div class="upper-case hidden">?</div>
        <div class="caps hidden">7</div>
        <div class="key__shifted-caps hidden">?</div>
      </div>
      <div class="key__eng">
        <div class="lower-case">7</div>
        <div class="upper-case hidden">&</div>
        <div class="caps hidden">7</div>
        <div class="key__shifted-caps hidden">&</div>
      </div>
    </div>
    <div id="Digit8" class="keyboard__key keyboard__key--digit-eight">
      <div class="key__rus">
        <div class="lower-case">8</div>
        <div class="upper-case hidden">*</div>
        <div class="caps hidden">8</div>
        <div class="key__shifted-caps hidden">*</div>
      </div>
      <div class="key__eng">
        <div class="lower-case">8</div>
        <div class="upper-case hidden">*</div>
        <div class="caps hidden">8</div>
        <div class="key__shifted-caps hidden">*</div>
      </div>
    </div>
    <div id="Digit9" class="keyboard__key keyboard__key--digit-nine">
      <div class="key__rus">
        <div class="lower-case">9</div>
        <div class="upper-case hidden">(</div>
        <div class="caps hidden">9</div>
        <div class="key__shifted-caps hidden">(</div>
      </div>
      <div class="key__eng">
        <div class="lower-case">9</div>
        <div class="upper-case hidden">(</div>
        <div class="caps hidden">9</div>
        <div class="key__shifted-caps hidden">(</div>
      </div>
    </div>
    <div id="Digit0" class="keyboard__key keyboard__key--digit-zero">
      <div class="key__rus">
        <div class="lower-case">0</div>
        <div class="upper-case hidden">)</div>
        <div class="caps hidden">0</div>
        <div class="key__shifted-caps hidden">)</div>
      </div>
      <div class="key__eng">
        <div class="lower-case">0</div>
        <div class="upper-case hidden">)</div>
        <div class="caps hidden">0</div>
        <div class="key__shifted-caps hidden">)</div>
      </div>
    </div>
    <div id="Minus" class="keyboard__key keyboard__key--minus">
      <div class="key__rus">
        <div class="lower-case">-</div>
        <div class="upper-case hidden">_</div>
        <div class="caps hidden">-</div>
        <div class="key__shifted-caps hidden">_</div>
      </div>
      <div class="key__eng">
        <div class="lower-case">-</div>
        <div class="upper-case hidden">_</div>
        <div class="caps hidden">-</div>
        <div class="key__shifted-caps hidden">_</div>
      </div>
    </div>
    <div id="Equal" class="keyboard__key keyboard__key--equal">
      <div class="key__rus">
        <div class="lower-case">=</div>
        <div class="upper-case hidden">+</div>
        <div class="caps hidden">=</div>
        <div class="key__shifted-caps hidden">+</div>
      </div>
      <div class="key__eng">
        <div class="lower-case">=</div>
        <div class="upper-case hidden">+</div>
        <div class="caps hidden">=</div>
        <div class="key__shifted-caps hidden">+</div>
      </div>
    </div>
    <div id="Backspace" class="keyboard__key keyboard__key--backspace">Backspace
    </div>
      </div>
      <div class="keyboard__second-row">
        <div id="Tab" class="keyboard__key keyboard__key--tab">Tab</div>
        <div id="KeyQ" class="keyboard__key keyboard__key--keyQ">
          <div class="key__rus">
            <div class="lower-case">й</div>
            <div class="upper-case hidden">Й</div>
            <div class="caps hidden">Й</div>
            <div class="key__shifted-caps hidden">й</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">q</div>
            <div class="upper-case hidden">Q</div>
            <div class="caps hidden">Q</div>
            <div class="key__shifted-caps hidden">q</div>
          </div>
        </div>
        <div id="KeyW" class="keyboard__key keyboard__key--keyW">
          <div class="key__rus">
            <div class="lower-case">ц</div>
            <div class="upper-case hidden">Ц</div>
            <div class="caps hidden">Ц</div>
            <div class="key__shifted-caps hidden">ц</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">w</div>
            <div class="upper-case hidden">W</div>
            <div class="caps hidden">W</div>
            <div class="key__shifted-caps hidden">w</div>
          </div>
        </div>
        <div id="KeyE" class="keyboard__key keyboard__key--keyE">
          <div class="key__rus">
            <div class="lower-case">у</div>
            <div class="upper-case hidden">У</div>
            <div class="caps hidden">У</div>
            <div class="key__shifted-caps hidden">у</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">e</div>
            <div class="upper-case hidden">E</div>
            <div class="caps hidden">E</div>
            <div class="key__shifted-caps hidden">e</div>
          </div>
        </div>
        <div id="KeyR" class="keyboard__key keyboard__key--keyR">
        <div class="key__rus">
            <div class="lower-case">к</div>
            <div class="upper-case hidden">К</div>
            <div class="caps hidden">К</div>
            <div class="key__shifted-caps hidden">к</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">r</div>
            <div class="upper-case hidden">R</div>
            <div class="caps hidden">R</div>
            <div class="key__shifted-caps hidden">r</div>
          </div>
        </div>
        <div id="KeyT" class="keyboard__key keyboard__key--keyT">
          <div class="key__rus">
            <div class="lower-case">е</div>
            <div class="upper-case hidden">Е</div>
            <div class="caps hidden">Е</div>
            <div class="key__shifted-caps hidden">е</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">t</div>
            <div class="upper-case hidden">T</div>
            <div class="caps hidden">T</div>
            <div class="key__shifted-caps hidden">t</div>
          </div>
        </div>
        <div id="KeyY" class="keyboard__key keyboard__key--keyY">
          <div class="key__rus">
            <div class="lower-case">н</div>
            <div class="upper-case hidden">Н</div>
            <div class="caps hidden">Н</div>
            <div class="key__shifted-caps hidden">н</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">y</div>
            <div class="upper-case hidden">Y</div>
            <div class="caps hidden">Y</div>
            <div class="key__shifted-caps hidden">y</div>
          </div>
        </div>
        <div id="KeyU" class="keyboard__key keyboard__key--keyU">
          <div class="key__rus">
            <div class="lower-case">г</div>
            <div class="upper-case hidden">Г</div>
            <div class="caps hidden">Г</div>
            <div class="key__shifted-caps hidden">г</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">u</div>
            <div class="upper-case hidden">U</div>
            <div class="caps hidden">U</div>
            <div class="key__shifted-caps hidden">u</div>
          </div>
        </div>
        <div id="KeyI" class="keyboard__key keyboard__key--keyI">
          <div class="key__rus">
            <div class="lower-case">ш</div>
            <div class="upper-case hidden">Ш</div>
            <div class="caps hidden">Ш</div>
            <div class="key__shifted-caps hidden">ш</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">i</div>
            <div class="upper-case hidden">I</div>
            <div class="caps hidden">I</div>
            <div class="key__shifted-caps hidden">i</div>
          </div>
        </div>
        <div id="KeyO" class="keyboard__key keyboard__key--keyO">
          <div class="key__rus">
            <div class="lower-case">щ</div>
            <div class="upper-case hidden">Щ</div>
            <div class="caps hidden">Щ</div>
            <div class="key__shifted-caps hidden">щ</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">o</div>
            <div class="upper-case hidden">O</div>
            <div class="caps hidden">O</div>
            <div class="key__shifted-caps hidden">o</div>
          </div>
        </div>
        <div id="KeyP" class="keyboard__key keyboard__key--keyP">
        <div class="key__rus">
            <div class="lower-case">з</div>
            <div class="upper-case hidden">З</div>
            <div class="caps hidden">З</div>
            <div class="key__shifted-caps hidden">з</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">p</div>
            <div class="upper-case hidden">P</div>
            <div class="caps hidden">P</div>
            <div class="key__shifted-caps hidden">p</div>
          </div>
        </div>
        <div id="BracketLeft" class="keyboard__key keyboard__key--left-square-bracket">
          <div class="key__rus">
            <div class="lower-case">х</div>
            <div class="upper-case hidden">Х</div>
            <div class="caps hidden">Х</div>
            <div class="key__shifted-caps hidden">х</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">[</div>
            <div class="upper-case hidden">{</div>
            <div class="caps hidden">[</div>
            <div class="key__shifted-caps hidden">{</div>
          </div>
        </div>
        <div id="BracketRight" class="keyboard__key keyboard__key--right-square-bracket">
          <div class="key__rus">
            <div class="lower-case">ъ</div>
            <div class="upper-case hidden">Ъ</div>
            <div class="caps hidden">Ъ</div>
            <div class="key__shifted-caps hidden">ъ</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">]</div>
            <div class="upper-case hidden">}</div>
            <div class="caps hidden">]</div>
            <div class="key__shifted-caps hidden">}</div>
          </div>
        </div>
        <div id="Backslash" class="keyboard__key keyboard__key--backs-lash">
          <div class="key__rus">
            <div class="lower-case">\\</div>
            <div class="upper-case hidden">/</div>
            <div class="caps hidden">\\</div>
            <div class="key__shifted-caps hidden">/</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">\\</div>
            <div class="upper-case hidden">|</div>
            <div class="caps hidden">\\</div>
            <div class="key__shifted-caps hidden">|</div>
          </div>
        </div>
        <div id="Delete" class="keyboard__key keyboard__key--del">Del</div>
      </div>
      <div class="keyboard__third-row">
        <div id="CapsLock" class="keyboard__key keyboard__key--caps-lock">Caps Lock</div>
        <div id="KeyA" class="keyboard__key keyboard__key--keyA">
          <div class="key__rus">
            <div class="lower-case">ф</div>
            <div class="upper-case hidden">Ф</div>
            <div class="caps hidden">Ф</div>
            <div class="key__shifted-caps hidden">ф</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">a</div>
            <div class="upper-case hidden">A</div>
            <div class="caps hidden">A</div>
            <div class="key__shifted-caps hidden">a</div>
          </div>
        </div>
        <div id="KeyS" class="keyboard__key keyboard__key--keyS">
          <div class="key__rus">
            <div class="lower-case">ы</div>
            <div class="upper-case hidden">Ы</div>
            <div class="caps hidden">Ы</div>
            <div class="key__shifted-caps hidden">ы</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">s</div>
            <div class="upper-case hidden">S</div>
            <div class="caps hidden">S</div>
            <div class="key__shifted-caps hidden">s</div>
          </div>
        </div>
        <div id="KeyD" class="keyboard__key keyboard__key--keyD">
          <div class="key__rus">
            <div class="lower-case">в</div>
            <div class="upper-case hidden">В</div>
            <div class="caps hidden">В</div>
            <div class="key__shifted-caps hidden">в</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">d</div>
            <div class="upper-case hidden">D</div>
            <div class="caps hidden">D</div>
            <div class="key__shifted-caps hidden">d</div>
          </div>
        </div>
        <div id="KeyF" class="keyboard__key keyboard__key--keyF">
          <div class="key__rus">
            <div class="lower-case">а</div>
            <div class="upper-case hidden">А</div>
            <div class="caps hidden">А</div>
            <div class="key__shifted-caps hidden">а</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">f</div>
            <div class="upper-case hidden">F</div>
            <div class="caps hidden">F</div>
            <div class="key__shifted-caps hidden">f</div>
          </div>
        </div>
        <div id="KeyG" class="keyboard__key keyboard__key--keyG">
          <div class="key__rus">
            <div class="lower-case">п</div>
            <div class="upper-case hidden">П</div>
            <div class="caps hidden">П</div>
            <div class="key__shifted-caps hidden">п</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">g</div>
            <div class="upper-case hidden">G</div>
            <div class="caps hidden">G</div>
            <div class="key__shifted-caps hidden">g</div>
          </div>
        </div>
        <div id="KeyH" class="keyboard__key keyboard__key--keyH">
          <div class="key__rus">
            <div class="lower-case">р</div>
            <div class="upper-case hidden">Р</div>
            <div class="caps hidden">Р</div>
            <div class="key__shifted-caps hidden">р</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">h</div>
            <div class="upper-case hidden">H</div>
            <div class="caps hidden">H</div>
            <div class="key__shifted-caps hidden">h</div>
          </div>
        </div>
        <div id="KeyJ" class="keyboard__key keyboard__key--keyJ">
          <div class="key__rus">
            <div class="lower-case">о</div>
            <div class="upper-case hidden">О</div>
            <div class="caps hidden">О</div>
            <div class="key__shifted-caps hidden">о</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">j</div>
            <div class="upper-case hidden">J</div>
            <div class="caps hidden">J</div>
            <div class="key__shifted-caps hidden">j</div>
          </div>
        </div>
        <div id="KeyK" class="keyboard__key keyboard__key--keyK">
          <div class="key__rus">
            <div class="lower-case">л</div>
            <div class="upper-case hidden">Л</div>
            <div class="caps hidden">Л</div>
            <div class="key__shifted-caps hidden">л</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">k</div>
            <div class="upper-case hidden">K</div>
            <div class="caps hidden">K</div>
            <div class="key__shifted-caps hidden">k</div>
          </div>
        </div>
        <div id="KeyL" class="keyboard__key keyboard__key--keyL">
          <div class="key__rus">
            <div class="lower-case">д</div>
            <div class="upper-case hidden">Д</div>
            <div class="caps hidden">Д</div>
            <div class="key__shifted-caps hidden">д</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">l</div>
            <div class="upper-case hidden">L</div>
            <div class="caps hidden">L</div>
            <div class="key__shifted-caps hidden">l</div>
          </div>
        </div>
        <div id="Semicolon" class="keyboard__key keyboard__key--semicolon">
          <div class="key__rus">
            <div class="lower-case">ж</div>
            <div class="upper-case hidden">Ж</div>
            <div class="caps hidden">Ж</div>
            <div class="key__shifted-caps hidden">ж</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">;</div>
            <div class="upper-case hidden">:</div>
            <div class="caps hidden">;</div>
            <div class="key__shifted-caps hidden">:</div>
          </div>
        </div>
        <div id="Quote" class="keyboard__key keyboard__key--quote">
          <div class="key__rus">
            <div class="lower-case">э</div>
            <div class="upper-case hidden">Э</div>
            <div class="caps hidden">Э</div>
            <div class="key__shifted-caps hidden">э</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">'</div>
            <div class="upper-case hidden">"</div>
            <div class="caps hidden">'</div>
            <div class="key__shifted-caps hidden">"</div>
          </div>
        </div>
        <div id="Enter" class="keyboard__key keyboard__key--enter">Enter</div>
      </div>
      <div class="keyboard__fourth-row">
        <div id="ShiftLeft" class="keyboard__key keyboard__key--left-shift">Shift</div>
        <div id="KeyZ" class="keyboard__key keyboard__key--keyZ">
          <div class="key__rus">
            <div class="lower-case">я</div>
            <div class="upper-case hidden">Я</div>
            <div class="caps hidden">Я</div>
            <div class="key__shifted-caps hidden">я</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">z</div>
            <div class="upper-case hidden">Z</div>
            <div class="caps hidden">Z</div>
            <div class="key__shifted-caps hidden">z</div>
          </div>
        </div>
        <div id="KeyX" class="keyboard__key keyboard__key--keyX">
          <div class="key__rus">
            <div class="lower-case">ч</div>
            <div class="upper-case hidden">Ч</div>
            <div class="caps hidden">Ч</div>
            <div class="key__shifted-caps hidden">ч</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">x</div>
            <div class="upper-case hidden">X</div>
            <div class="caps hidden">X</div>
            <div class="key__shifted-caps hidden">x</div>
          </div>
        </div>
        <div id="KeyC" class="keyboard__key keyboard__key--keyC">
          <div class="key__rus">
            <div class="lower-case">с</div>
            <div class="upper-case hidden">С</div>
            <div class="caps hidden">С</div>
            <div class="key__shifted-caps hidden">с</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">c</div>
            <div class="upper-case hidden">C</div>
            <div class="caps hidden">C</div>
            <div class="key__shifted-caps hidden">c</div>
          </div>
        </div>
        <div id="KeyV" class="keyboard__key keyboard__key--keyV">
          <div class="key__rus">
            <div class="lower-case">м</div>
            <div class="upper-case hidden">М</div>
            <div class="caps hidden">М</div>
            <div class="key__shifted-caps hidden">м</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">v</div>
            <div class="upper-case hidden">V</div>
            <div class="caps hidden">V</div>
            <div class="key__shifted-caps hidden">v</div>
          </div>
        </div>
        <div id="KeyB" class="keyboard__key keyboard__key--keyB">
          <div class="key__rus">
            <div class="lower-case">и</div>
            <div class="upper-case hidden">И</div>
            <div class="caps hidden">И</div>
            <div class="key__shifted-caps hidden">и</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">b</div>
            <div class="upper-case hidden">B</div>
            <div class="caps hidden">B</div>
            <div class="key__shifted-caps hidden">b</div>
          </div>
        </div>
        <div id="KeyN" class="keyboard__key keyboard__key--keyN">
          <div class="key__rus">
            <div class="lower-case">т</div>
            <div class="upper-case hidden">Т</div>
            <div class="caps hidden">Т</div>
            <div class="key__shifted-caps hidden">т</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">n</div>
            <div class="upper-case hidden">N</div>
            <div class="caps hidden">N</div>
            <div class="key__shifted-caps hidden">n</div>
          </div>
        </div>
        <div id="KeyM" class="keyboard__key keyboard__key--keyM">
          <div class="key__rus">
            <div class="lower-case">ь</div>
            <div class="upper-case hidden">Ь</div>
            <div class="caps hidden">Ь</div>
            <div class="key__shifted-caps hidden">ь</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">m</div>
            <div class="upper-case hidden">M</div>
            <div class="caps hidden">M</div>
            <div class="key__shifted-caps hidden">m</div>
          </div>
        </div>
        <div id="Comma" class="keyboard__key keyboard__key--comma">
          <div class="key__rus">
            <div class="lower-case">б</div>
            <div class="upper-case hidden">Б</div>
            <div class="caps hidden">Б</div>
            <div class="key__shifted-caps hidden">б</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">,</div>
            <div class="upper-case hidden"><</div>
            <div class="caps hidden">,</div>
            <div class="key__shifted-caps hidden"><</div>
          </div>
        </div>
        <div id="Period" class="keyboard__key keyboard__key--dot">
          <div class="key__rus">
            <div class="lower-case">ю</div>
            <div class="upper-case hidden">Ю</div>
            <div class="caps hidden">Ю</div>
            <div class="key__shifted-caps hidden">ю</div>
          </div>
          <div class="key__eng">
            <div class="lower-case">.</div>
            <div class="upper-case hidden">></div>
            <div class="caps hidden">.</div>
            <div class="key__shifted-caps hidden">></div>
          </div>
         </div>
         <div id="Slash" class="keyboard__key keyboard__key--slash">
           <div class="key__rus">
             <div class="lower-case">.</div>
             <div class="upper-case hidden">,</div>
             <div class="caps hidden">.</div>
             <div class="key__shifted-caps hidden">,</div>
           </div>
           <div class="key__eng">
             <div class="lower-case">/</div>
             <div class="upper-case hidden">?</div>
             <div class="caps hidden">/</div>
             <div class="key__shifted-caps hidden">?</div>
           </div>
        </div>
        <div id="ArrowUp" class="keyboard__key keyboard__key--top-arrow">▲</div>
        <div id="ShiftRight" class="keyboard__key keyboard__key--right-shift">Shift</div>
      </div>
      <div class="keyboard__fifth-row">
        <div id="ControlLeft" class="keyboard__key keyboard__key--left-ctrl">Ctrl</div>
        <div id="MetaLeft" class="keyboard__key keyboard__key--win">Win</div>
        <div id="AltLeft" class="keyboard__key keyboard__key--left-alt">Alt</div>
        <div id="Space" class="keyboard__key keyboard__key--space"></div>
        <div id="AltRight" class="keyboard__key keyboard__key--right-alt">Alt</div>
        <div id="MetaRight" class="keyboard__key keyboard__key--win">Win</div>
        <div id="ArrowLeft" class="keyboard__key keyboard__key--left-arrow">◄</div>
        <div id="ArrowDown" class="keyboard__key keyboard__key--bottom-arrow">▼</div>
        <div id="ArrowRight" class="keyboard__key keyboard__key--right-arrow">►</div>
        <div id="ControlRight" class="keyboard__key keyboard__key--right-ctrl">Ctrl</div>
      </div>
</div>
  `;
}