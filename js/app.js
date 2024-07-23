document.addEventListener('DOMContentLoaded', () => {
    // Selecionando elementos do DOM
    let nomeAmigoInput = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    let listaSorteio = document.getElementById('lista-sorteio');

    // Array para armazenar os amigos
    let amigos = [];

    // Função para adicionar amigos
    function adicionar() {
        let nomeAmigo = nomeAmigoInput.value.trim();
        if (nomeAmigo && !amigos.includes(nomeAmigo)) {
            amigos.push(nomeAmigo);
            atualizarListaAmigos();
            nomeAmigoInput.value = '';
        } else if (amigos.includes(nomeAmigo)) {
            alert('Este amigo já foi adicionado.');
        } else {
            alert('Por favor, insira um nome válido.');
        }
    }

    // Função para atualizar a lista de amigos no DOM
    function atualizarListaAmigos() {
        listaAmigos.textContent = amigos.join(', ');
    }

    // Função para embaralhar a lista de amigos
    function embaralhar(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Função para sortear os amigos
    function sortear() {
        if (amigos.length < 4) {
            alert('Adicione pelo menos 4 amigos!');
            return;
        }

        embaralhar(amigos);

        listaSorteio.innerHTML = ''; // Limpar resultados anteriores
        for (let i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1) {
                listaSorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br/>';
            } else {
                listaSorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
            }
        }
    }

    // Função para reiniciar o processo
    function reiniciar() {
        amigos = [];
        atualizarListaAmigos();
        listaSorteio.innerHTML = '';
    }

    // Adicionando eventos aos botões
    document.querySelector('.button.primary').addEventListener('click', adicionar);
    document.querySelector('.button.secondary').addEventListener('click', sortear);
    document.querySelector('.form__link').addEventListener('click', e => {
        e.preventDefault(); // Previne o comportamento padrão do link
        reiniciar();
    });
});