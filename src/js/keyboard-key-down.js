export default function keyboardKeyDown() {
   window.addEventListener("keydown", (event) => {
      console.log(event)
      const keys = document.querySelectorAll(".keyboard__key");
      const textarea = document.querySelector("textarea");
      

      keys.forEach(element => {
         if (event.code === element.id) {
            if (element.id === "Backspace") {
               // textarea.value += "\b";
            } else if (element.id === "Tab") {
               textarea.value += "\t";
               event.preventDefault()
            } else if (element.id === "Enter") {
               textarea.value += "\n";
               console.log("enter")
            } else if (element.id === "ShiftLeft") {

            } else if (element.id === "ShiftRight") {

            } else if (element.id === "Delete") {

            } else if (element.id === "ControlLeft") {

            } else if (element.id === "AltLeft") {

            } else if (element.id === "Space") {
               textarea.innerText += '  ';
            } else if (element.id === "AltRight") {

            } else if (element.id === "MetaLeft" || element.id === "MetaRight") {

            } else if(element.id === "ControlRight") {

            } else if(element.id === "CapsLock") {

            } else {
               textarea.value += element.innerText;
            }
            element.classList.add("active-key")
            
         };
      });
  });
}