function generatePassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}<>,.?/:;';
    let result = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
        result += charset.charAt(Math.floor(Math.random() * n));
    }
    return result;
}

let generateButton = document.getElementById("generate");
let passwordField = document.getElementById("password");

generateButton.addEventListener("click", function () {
    passwordField.innerHTML = generatePassword(12);
});