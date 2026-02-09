const textElement = document.querySelector(".typing-text");
const texts = ["Software Engineer", "Data Engineer", "Tech Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;
    
    if (letter.length === currentText.length) {
        setTimeout(() => {
            // Wait a bit before deleting (simple reset for loop effect)
            count++;
            index = 0; 
        }, 2000); 
    }
    
    setTimeout(type, 200);
})();