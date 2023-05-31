const humburger = document.querySelector('.humburger');
const mainMenu = document.querySelector('.main-menu');
const speakerContent = document.querySelector('.featured-speakers');
const showButton = document.querySelector('.more');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  mainMenu.classList.toggle('active');
});

fetch('speakers.json').then((response) => response.json()).then((speakers) => {
  let placeholder = '';
  speakers.forEach((speaker) => {
    placeholder += `
        <div class="speaker ${speaker.show}">
        <img src="${speaker.speaker_image}"/>
        <div class="speaker-text">
            <h3>${speaker.name}</h3>
            <div class="red-tex"><p>${speaker.position}</p></div>
            <p>${speaker.about_speaker}</p>
        </div>
    </div>
        `;
  });
  speakerContent.innerHTML = placeholder;
});

// eslint-disable-next-line no-unused-vars
function showSpeakers() {
  document.querySelectorAll('.speaker').forEach((element) => {
    element.classList.add('show');
  });
  showButton.classList.add('showbtn');
}
