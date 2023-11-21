document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('phraseForm');
    const gallery = document.querySelector('.gallery');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phrase = document.getElementById('phrase').value.trim();

        if (phrase) {
            addPhraseToGallery(name, phrase);
            form.reset();
        } else {
            alert('Por favor, escribe una frase.');
        }
    });

    function addPhraseToGallery(name, phrase) {
        const card = document.createElement('div');
        card.className = 'card';

        const phraseText = document.createElement('p');
        phraseText.textContent = `"${phrase}"`;

        const authorText = document.createElement('p');
        authorText.textContent = name ? `- ${name}` : '- Anónimo';
        authorText.style.fontStyle = 'italic';

        card.appendChild(phraseText);
        card.appendChild(authorText);

        gallery.appendChild(card);
    }
});
