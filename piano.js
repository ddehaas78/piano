const soundMap = {
    'do': 'sounds/do.wav',
    're': 'sounds/re.wav',
    'mi': 'sounds/mi.wav',
    'fa': 'sounds/fa.wav',
    'sol': 'sounds/sol.wav',
    'la': 'sounds/la.wav',
    'si': 'sounds/si.wav',
    'do-diese': 'sounds/dos.wav',
    're-diese': 'sounds/res.wav',
    'fa-diese': 'sounds/fas.wav',
    'sol-diese': 'sounds/sols.wav',
    'la-diese': 'sounds/las.wav',
};

function playSound(key) {
    const audio = new Audio(soundMap[key]);
    audio.play();
}

function handleKeyPressAnimation(keyElement) {
    keyElement.classList.add('pressed');
    setTimeout(() => {
        keyElement.classList.remove('pressed');
    }, 150);
}

document.querySelectorAll('.becarre').forEach(key => {
    key.addEventListener('click', () => {
        playSound(key.id);
        handleKeyPressAnimation(key);
    });
});

document.querySelectorAll('.diese').forEach(key => {
    key.addEventListener('click', () => {
        playSound(key.id);
        handleKeyPressAnimation(key);
    });
});

document.addEventListener('keydown', (event) => {
    let keyPressed;
    switch (event.key) {
        case 'q': keyPressed = 'do'; break;
        case 'z': keyPressed = 'do-diese'; break;
        case 's': keyPressed = 're'; break;
        case 'e': keyPressed = 're-diese'; break;
        case 'd': keyPressed = 'mi'; break;
        case 'f': keyPressed = 'fa'; break;
        case 't': keyPressed = 'fa-diese'; break;
        case 'g': keyPressed = 'sol'; break;
        case 'y': keyPressed = 'sol-diese'; break;
        case 'h': keyPressed = 'la'; break;
        case 'u': keyPressed = 'la-diese'; break;
        case 'j': keyPressed = 'si'; break;
        default: return;
    }

    const keyElement = document.getElementById(keyPressed);
    if (keyElement) {
        playSound(keyPressed);
        handleKeyPressAnimation(keyElement);
    }
});
