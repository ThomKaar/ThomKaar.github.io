const subtitle = document.getElementsByClassName('card-subtitle')[0];

const createWord = (text, index) => {
    const word = document.createElement('span');

    word.innerHTML = `${text}`;

    word.classList.add('card-subtitle-word');

    word.style.transitionDelay = `${index * 40}ms`;

    return word;
};

const createCard = (parent, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(`card-${index}`);
    parent.appendChild(card);
    return card;
};

const renderCardContent = (card, content) => {
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    renderCardTitle(cardContent, content?.title);
    renderCardSubTitle(cardContent, content?.subtitle);
    card.appendChild(cardContent);
};

const renderCardTitle = (parent, titleText) => {
    const title = document.createElement('h3');
    title.classList.add('card-title');
    title.innerText = `${titleText}`;
    parent.appendChild(title);
};

const renderCardSubTitle = (parent, subTitleText) => {
    const subtitle = document.createElement('h4');
    subtitle.classList.add('card-subtitle');

    subTitleText.split(' ').map((e, index) => {
        newAddWord(subtitle, e, index);
    });

    parent.appendChild(subtitle);
};

const newAddWord = (parent, text, index) => parent.appendChild(createWord(text, index));
const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split(' ').map(addWord);

// createSubtitle('i never just shut up and think');
const cardContent = {
    title: 'Easy Does it',
    subtitle: 'figma collage poem of lyrics from my favorite artists...'
};

const tableContent = [
    cardContent
];
const cardSection = document.getElementById('card-section');
const cardsGrid = document.createElement('div');
cardsGrid.classList.add('grid');

cardSection.appendChild(cardsGrid);

const cards = tableContent.map((_c, idx) => createCard(cardsGrid, idx));

cards.map((card, idx) => {
    renderCardContent(card, tableContent[idx]);
});

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max-min) + min);
};

const programmerName = document.getElementsByClassName('name-title')[0];
const cheekyText = document.getElementsByClassName('no-catch')[0];

programmerName.addEventListener('mouseover', (event) => {
    const lastTop = programmerName.style.top;
    const lastLeft = programmerName.style.left;

    console.group('lastTop: ', lastTop, 'lastLeft: ', lastLeft);

    const top = getRandomInt(0, window.innerHeight - event.target.offsetHeight);
    const left = getRandomInt(0, window.innerWidth - event.target.offsetWidth);
    programmerName.style.top = `${top}px`;
    programmerName.style.left = `${left}px`;

    if (cheekyText.style !== 'inline-block') {
        cheekyText.style.display = 'inline-block';
    }

    cheekyText.style.top = lastTop || 0;
    cheekyText.style.left = lastLeft || 0;
});