document.getElementById('toggleSenha').addEventListener('click', function(){
    let senhaInput = document.getElementById('senha');
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        this.src = 'img/olho.png';
    } else {
        senhaInput.type = 'password';
        this.src = 'img/olho-fechado.png';
    }
});