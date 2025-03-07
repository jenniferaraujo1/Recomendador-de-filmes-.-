let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h1", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(184,105,105));
  textAlign(CENTER, CENTER);
  textSize(40);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O Senhor dos Anéis: A Sociedade do Anel";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "As Crônicas de Nárnia";          
        } else{
         return "Avatar";
        }
      } else {
        if (gostaDeFantasia) {
          return "Harry Potter e a Pedra Filosofal";
        } else {
          return "Coraline e o Mundo Secreto";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Shrek para Sempre";
    } else {
      return "Procurando Nemo";
    }
  }
}

