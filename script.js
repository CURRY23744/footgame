let currentQuestion = 0;
let score = 0;
const questions = [
  {
    question: "Quel est le nom du joueur sur l'image ?",
    image: "../image/Lionnel Messi.jpg",
    choices: ["Lionel Messi", "Cristiano Ronaldo", "Neymar Jr", "Kylian Mbappé"],
    answer: "Lionel Messi"
  },
  {
    question: "Quel est le nom du stade montré ?",
    image: "../image/Camp Mou.jpg",
    choices: ["Camp Nou", "Old Trafford", "Santiago Bernabéu", "Parc des Princes"],
    answer: "Camp Nou"
  },
  {
    question: "Quel club a remporté la première Ligue des champions de l'histoire en 1956 ?",
    image: "../image/League.jpg",
    choices: ["AC Milan", "Benfica", "Ajax","Real Madrid"],
    answer: "Real Madrid"
},
{
  question: "Quel joueur détient le record du plus grand nombre de buts en une saison de Ligue des champions ?",
  image: "../image/butteur.jpg",
  choices: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Karim Benzema"],
  answer: "Cristiano Ronaldo"
},
{
  question: "Quel gardien a remporté le plus de trophées Yachine ?",
  image: "../image/lev Yachine.jpg",
  choices: [ "Manuel Neuer","Lev Yachine", "Gianluigi Buffon", "Iker Casillas"],
  answer: "Lev Yachine"
},
{
  question: "Quel club a remporté la Coupe du Monde des Clubs 2023 ?",
  image: "../image/world.jpg",
  choices: ["Chelsea", "Real Madrid", "Manchester City", "Palmeiras"],
  answer: "Manchester City"
},
{
  question: "Quel joueur a marqué le but le plus rapide de l'histoire de la Coupe du Monde ?",
  image: "../image/Hakan Şükür.jpg",
  choices: ["Hakan Şükür", "Cristiano Ronaldo", "Pelé", "Kylian Mbappé"],
  answer: "Hakan Şükür"
},
{
  question: "Quel pays a remporté la CAN 2012 ?",
  image: "../image/CAF.webp",
  choices: [ "Côte d'Ivoire", "Zambie", "Ghana", "Égypte"],
  answer: "Zambie"
},
{
  question: "Quel joueur a remporté le plus de Ballons d'Or africains ?",
  image: "../image/Eto'o.jpg",
  choices: [ "Didier Drogba", "Yaya Touré", "George Weah", "Samuel Eto'o"],
  answer: "Samuel Eto'o"
},
{
  question: "Quel club détient le record de titres en Serie A ?",
  image: "../image/Juventus.jpg",
  choices: [ "AC Milan","Juventus", "Inter Milan", "AS Roma"],
  answer: "Juventus"
},
{
  question: "Quel joueur a marqué le plus de buts en sélection nationale ?",
  image: "../image/Ronaldo.webp",
  choices: ["Cristiano Ronaldo", "Ali Daei", "Lionel Messi", "Pelé"],
  answer: "Cristiano Ronaldo"
},
{
  question: "Quel club a remporté la Ligue des champions féminine 2023 ?",
  image: "../image/footballfem.avif",
  choices: [ "Lyon", "Barcelone","Chelsea", "Wolfsburg"],
  answer: "Barcelone"
},
{
  question: "Quel joueur a été le plus jeune buteur en Coupe du Monde ?",
  image: "../image/pélé.jpg",
  choices: [ "Kylian Mbappé", "Pelé", "Samuel Eto'o", "Michael Owen"],
  answer: "Pelé"
},
{
  question: "Quel club a remporté la Copa Libertadores 2023 ?",
  image: "../image/fluminense_2023.jpg",
  choices: ["Fluminense", "Boca Juniors", "Palmeiras", "River Plate"],
  answer: "Fluminense"
},
{
  question: "Quel joueur a marqué le plus de buts en une saison de Premier League ?",
  image: "../image/Manchester City.jpg",
  choices: [ "Alan Shearer", "Mohamed Salah", "Erling Haaland", "Harry Kane"],
  answer: "Erling Haaland"
},
{
  question: "Quel pays a remporté l'Euro 1992 ?",
  image: "../image/danemark_1992.avif",
  choices: ["Danemark", "Allemagne", "Pays-Bas", "France"],
  answer: "Danemark"
},
{
  question: "Quel joueur a remporté le plus de Ligue Europa ?",
  image: "../image/jesus_navas.jpg",
  choices: [ "José Antonio Reyes", "Kevin Gameiro","Jesús Navas", "Unai Emery"],
  answer: "Jesús Navas"
},
{
  question: "Quel club a remporté la Ligue 1 en 2017, brisant la série du PSG ?",
  image: "../image/monaco_2017.jpg",
  choices: [ "PSG", "Lyon", "Marseille", "AS Monaco"],
  answer: "AS Monaco"
},
{
  question: "Quel joueur a été le plus jeune capitaine en finale de Coupe du Monde ?",
  image: "../image/diego_maradona.jpg",
  choices: ["Diego Maradona", "Pelé", "Franz Beckenbauer", "Kylian Mbappé"],
  answer: "Diego Maradona"
},
{
  question: "Quel club a remporté la Bundesliga pour la première fois en 2023/2024 ?",
  image: "../image/leverkusen_2024.jpg",
  choices: [ "Bayern Munich", "Bayer Leverkusen", "Borussia Dortmund", "RB Leipzig"],
  answer: "Bayer Leverkusen"
},
{
  question: "Quel joueur a marqué le but de la victoire en finale de la Coupe du Monde 2010 ?",
  image: "../image/iniesta_2010.jpg",
  choices: [ "David Villa", "Fernando Torres", "Andrés Iniesta","Xavi"],
  answer: "Andrés Iniesta"
},
{
  question: "Quel club a remporté la Ligue des champions asiatique 2023 ?",
  image: "../image/al_hilal_2023.jpg",
  choices: ["Al Hilal", "Urawa Red Diamonds", "Al Nassr", "Jeonbuk Hyundai"],
  answer: "Al Hilal"
}
// ...existing code...
];


function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').textContent = q.question;
  document.getElementById('image').src = q.image;
  const choices = document.getElementById('choices');
  choices.innerHTML = '';
  q.choices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.onclick = function() {
      checkAnswer(choice);
    };
    choices.appendChild(li);
  });
  document.getElementById('feedback').textContent = '';
  updateScore();
}

function checkAnswer(choice) {
  const q = questions[currentQuestion];
  const feedback = document.getElementById('feedback');
  if (choice === q.answer) {
    feedback.textContent = "Bonne réponse !";
    feedback.style.color = "green";
    score++;
    updateScore();
    setTimeout(() => {
      nextQuestion();
    }, 1500);
  } else {
    feedback.textContent = `Mauvaise réponse. La bonne réponse était : ${q.answer}`;
    feedback.style.color = "red";
    setTimeout(() => {
      nextQuestion();
    }, 2500);
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showFinalScore();
  } else {
    loadQuestion();
  }
}

function updateScore() {
  let scoreDiv = document.getElementById('score');
  if (!scoreDiv) {
    scoreDiv = document.createElement('div');
    scoreDiv.id = 'score';
    scoreDiv.style.color = "#fff";
    scoreDiv.style.fontSize = "22px";
    scoreDiv.style.fontWeight = "bold";
    scoreDiv.style.margin = "20px 0";
    scoreDiv.style.textShadow = "1px 1px 4px #222";
    document.body.insertBefore(scoreDiv, document.getElementById('question'));
  }
  scoreDiv.textContent = `Score : ${score} / ${questions.length}`;
}

function showFinalScore() {
  document.getElementById('question').textContent = "Quiz terminé !";
  document.getElementById('image').style.display = "none";
  document.getElementById('choices').innerHTML = '';
  document.getElementById('feedback').innerHTML = `
    <div class="congrats">🎉 Félicitations ! 🎉<br>Votre score final : ${score} / ${questions.length}</div>
  `;
  document.getElementById('feedback').style.color = "#ffd700";

  // Animation confettis
  let confettiDiv = document.createElement('div');
  confettiDiv.className = 'confetti';
  for (let i = 0; i < 60; i++) {
    let piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = `linear-gradient(135deg, hsl(${Math.random()*360},90%,60%), #fff700)`;
    piece.style.animationDelay = (Math.random() * 0.8) + 's';
    confettiDiv.appendChild(piece);
  }
  document.body.appendChild(confettiDiv);
  // Option pour rejouer
  let replayBtn = document.createElement('button');
  replayBtn.textContent = "Rejouer";
  replayBtn.style.marginTop = "30px";
  replayBtn.style.padding = "12px 28px";
  replayBtn.style.fontSize = "18px";
  replayBtn.style.borderRadius = "8px";
  replayBtn.style.border = "none";
  replayBtn.style.background = "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)";
  replayBtn.style.color = "#fff";
  replayBtn.style.cursor = "pointer";
  replayBtn.style.display = "block";
  replayBtn.style.marginLeft = "auto";
  replayBtn.style.marginRight = "auto";
  replayBtn.onclick = function() {
    currentQuestion = 0;
    score = 0; 
    document.getElementById('image').style.display = "";
    loadQuestion();
    document.getElementById('feedback').textContent = '';
    replayBtn.remove();
    confettiDiv.remove();
  };
    document.getElementById('replay-container').appendChild(replayBtn);
}

window.onload = loadQuestion;