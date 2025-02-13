function openEnvelope() {
    document.querySelector('.flap').style.transform = 'rotateX(-180deg)';
    document.querySelector('.letter').style.top = '0';
    createHearts();
}

function createHearts() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 2 + Math.random() * 3 + 's';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
