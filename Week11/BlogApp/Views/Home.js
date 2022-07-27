function init() {
    const user = new User('Andrei', 'Dascal');

    document.getElementById('fullNameID').innerText = user.getFullName();
}