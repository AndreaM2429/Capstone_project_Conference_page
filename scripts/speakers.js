const SpeakerInfo = [
  {
    image: 'Img/Speakers/JamesGun.webp',
    name: 'James Gun',
    job: 'American director, screenwriter and film producer.',
    description: 'He has great successes such as Super (2010), and the film adaptations of the Marvel comic Guardians of the Galaxy (2014), and its sequels.',
  },
  {
    image: 'Img/Speakers/HermanosRusso.jpg',
    name: 'The Russo brothers',
    job: 'Anthony and Joseph V. Russo American directors, producers, screenwriters.',
    description: 'Winners of an Emmy Award for their work on the comedy series Arrested Development and an MTV Movie Award for Best Picture with Avengers: Endgame.',
  },
  {
    image: 'Img/Speakers/RyanReynolds.jpg',
    name: 'Ryan Reynolds',
    job: 'Canadian-American actor, voice actor, comedian, screenwriter, and film producer.',
    description: 'Winner of awards as a male actor of the next generation in 2003 and another for best fight in 2016. Reconoced for his character Deadpool.',
  },
  {
    image: 'Img/Speakers/BenAffleck.jpg',
    name: 'Ben Affleck',
    job: 'American actor, director, producer and screenwriter.',
    description: 'He is known worldwide for his interpretation as Batman, in addition to having won two BAFTAs for best film and best director.',
  },
  {
    image: 'Img/Speakers/CristinaUrrutia.jpg',
    name: 'Cristina Urrutia',
    job: 'Mexican who began her career at the age of 19 writing articles related to video games.',
    description: "Editor and presenter of IGN Latin America, one of the world's largest media specialized in videogames.",
  },
  {
    image: 'Img/Speakers/JessicaNigri.jpg',
    name: 'Jessica Nigri',
    job: 'Cosplayer since 2009',
    description: "She has represented a large number of works, such as Kill3rCombo's video game Elsword, Grimm Fairy Tales comic, and Knightingail.",
  },
];

for (let i = 0; i < SpeakerInfo.length; i += 1) {
  const SectionSpeaker = document.querySelector('#speakers');
  const DivSpeaker = document.createElement('div');
  DivSpeaker.className = 'speaker flexrow';
  DivSpeaker.innerHTML = `
      <div class="photo">
        <img src="${SpeakerInfo[i].image}" alt="${SpeakerInfo[i].name}">
      </div>
      <div>
        <h3 class="name">${SpeakerInfo[i].name}</h3>
        <p class="job">${SpeakerInfo[i].job}</p>
        <div class="linea2"></div>
        <p class="about">${SpeakerInfo[i].description}</p>
      </div>
    `;
  SectionSpeaker.appendChild(DivSpeaker);
}