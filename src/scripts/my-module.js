// src/scripts/my-module.js
export function greet(name) {
  console.log(`こんにちは、${name}さん！`);
}

export function setupButton(buttonId, message) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', () => alert(message));
    }
}