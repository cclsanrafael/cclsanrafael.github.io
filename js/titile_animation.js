const title = document.getElementById('title');

const efecto_typing = (text = "", time, content) => {
    let characters = text.split('');
    content.innerHTML = ""
    let words_visibles = 0;
    let typing = setInterval(() => {
        content.innerHTML += characters[words_visibles];
        words_visibles += 1;
        if(words_visibles === characters.length) clearInterval(typing);
    }, time);
}

efecto_typing("Cursos de Capacitación Laboral.", 120, title);