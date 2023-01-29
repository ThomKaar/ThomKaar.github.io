const doorImage = document.getElementById('locked-door');
const highlightDoor = document.getElementById('highlight-door');
const doorContainer = document.getElementsByClassName('rel-container')[0];
const invite = document.getElementsByClassName('invite')[0];
const smashBall = document.getElementsByClassName('forknite')[0];
const diegoHead = document.getElementsByClassName('diego')[0];
let intervalId;

let alternatorPointer = 1;
const alternator = {
    0: doorImage,
    1: highlightDoor
}

function enableOpacityInterval() {
    changeOpacity();
    intervalId = setInterval(changeOpacity, 2000)
};

function removeOpacityAndInterval () {
    doorImage.style.opacity = 1;
    highlightDoor.style.opacity = 0;
    clearInterval(intervalId);
}

doorContainer?.addEventListener('mouseenter', enableOpacityInterval);
doorContainer?.addEventListener('mouseleave', removeOpacityAndInterval);



// changeOpacity
function changeOpacity() {
    console.log('we are running change opacity!');
    if (alternatorPointer == 0) {
        doorImage.style.opacity = 1;
        highlightDoor.style.opacity = 0;
    } else {
        doorImage.style.opacity = 0;
        highlightDoor.style.opacity = 1;
    }
    alternatorPointer = alternatorPointer ? 0 : 1;
}

doorContainer?.addEventListener('mouseenter', enableOpacityInterval);
doorContainer?.addEventListener('mouseleave', removeOpacityAndInterval);
doorContainer?.addEventListener('click', revealInvite);

function revealInvite () {
    doorContainer.removeEventListener('mouseenter', enableOpacityInterval);
    doorContainer.removeEventListener('mouseleave', removeOpacityAndInterval);
    removeOpacityAndInterval(intervalId);
    doorContainer.style.display = 'none';
    invite.style.display = 'block';
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.getElementById('coder-name').onmouseover = event => {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.name[index];
                }


                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        if (iteration >= event.target.dataset.name.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
};