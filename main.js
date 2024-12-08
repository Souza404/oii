const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
let letter = document.getElementById('letter');

noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('click', moveButton);
yesButton.addEventListener('click', showLetter);

function moveButton() {
  noButton.classList.add('moving');
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

function showLetter() {
  if (!letter) {
    letter = document.createElement('div');
    letter.setAttribute('id', 'letter');
    letter.classList.add('hidden');
    letter.innerHTML = `
      <br><br><br><br><br><br><br><br>
      <p>POLIANAAAAAAAAAAAAAA,</p>
      <p>Eu te amo muito e quero passar o resto da minha vida com você.</p>
      <p>Tô bem ansioso pra gente morar juntinhos e ter nossos 99 filhos, 17 cachorros, 24 gatos e 1 papagaio.</p>
      <p>Apesar de ser só uma forma idiota de te escrever uma carta, as minhas palavras são das mais sinceras e boiolas verdades, tô com muita saudade de você, saudade do jeitinho que vc me olha quando a gente gruda o rosto parecendo dois retardados, saudade de dormir abracadinho com vc (mesmo com a senhorita roubando meu cobertor e o travesseiro de mim)</p>
      <p>Queria aproveitar pra agradecer por tudo o que tem feito por mim, desde o primeiro dia que começamos a nos falar com aquele papo idiota sobre batata vc já me tratou super bem e bem rapidinho vc me conquistou e quando fui perceber eu já tava pelado te pedindo em namoro, sou muito grato por ter você na minha vida, por ser amado por alguém como você e por ter o privilégio de te ter ao meu lado, eu amo você, gostosaaaaaaaaaaaaa. Sou muito grato por todo esforço que você faz pra vir me ver e principalmente por tudo o que vc tem me ensinado até aqui.</p>
      <p>Tô pensando em tanta coisa pra te falar que simplesmente n tá saindo</p>
      <p>eu te amo muitoooo</p>
      <p>Desculpa pelas vezes que discutimos por coisas idiotas</p>
      <p>Reconheço que tenho muito a amadurecer e agradeço por ser paciente cmg nesse sentido</p>
      <p>Com amor, seu marido</p>
    `;
    document.body.appendChild(letter);
  }
  letter.classList.remove('hidden');
}