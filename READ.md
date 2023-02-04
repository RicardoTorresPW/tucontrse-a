Password Generator

Este es un generador de contraseñas aleatorias escrito en JavaScript. El código genera una contraseña de una longitud especificada, utilizando un juego de caracteres predefinido que incluye letras, números y símbolos.



Código JavaScript
El siguiente es el código JavaScript que realiza la tarea de generar una contraseña aleatoria:
-------------------------------------------------------------------------------------------------------------
function generatePassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}<>,.?/:;';
  let result = '';
  for (let i = 0, n = charset.length; i < length; ++i) {
    result += charset.charAt(Math.floor(Math.random() * n));
  }
  return result;
}
-------------------------------------------------------------------------------------------------------------
La función generatePassword toma un argumento length, que es la longitud deseada de la contraseña generada. Un juego de caracteres se define como una cadena constante y se usa para generar la contraseña. La contraseña se construye mediante el uso de un bucle for que se ejecuta length veces. En cada iteración, se selecciona un carácter aleatorio de charset y se agrega a la cadena result. Finalmente, la función devuelve la cadena result como la contraseña generada.



Integración con HTML
El siguiente es el código HTML que se puede utilizar para integrar el código JavaScript anterior y generar una contraseña aleatoria en una página web:
-------------------------------------------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<head>
  <title>Password Generator</title>
</head>
<body>
  <h1>Password Generator</h1>
  <p id="password"></p>
  <button id="generate">Generate Password</button>

  <script>
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

    generateButton.addEventListener("click", function() {
      passwordField.innerHTML = generatePassword(12);
    });
  </script>
</body>
-------------------------------------------------------------------------------------------------------------
