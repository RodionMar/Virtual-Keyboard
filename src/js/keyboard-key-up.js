export default function keyboardKeyUp() {
  window.addEventListener('keyup', (event) => {
    const keys = document.querySelectorAll('.keyboard__key');
    keys.forEach((element) => {
      if (event.code === element.id) {
        element.classList.remove('active-key');
      }
    });
  });
}
