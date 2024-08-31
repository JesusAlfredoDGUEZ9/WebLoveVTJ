document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value.toLowerCase();
    const password = document.getElementById("password").value;
    
    const validCredentials = [
        { username: "vane", password: "JyV" },
        
    ];
    
    const isValid = validCredentials.some(cred => cred.username === username && cred.password === password);
    
    if (isValid) {
        window.location.href = "Bienvenida.html";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
});
