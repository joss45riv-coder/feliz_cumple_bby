window.onload = () => {
  const envelope = document.getElementById('envelope');
  const letter = document.getElementById('letter');
  const balloons = document.getElementById('balloons');
  const hearts = document.getElementById('hearts');

  envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    letter.style.display = 'grid';
    letter.classList.add('show');
    spawnHearts(8);
  });

  function spawnHearts(count = 6) {
    for (let i = 0; i < count; i++) {
      const h = document.createElement('div');
      const size = Math.floor(Math.random() * 12) + 10;
      const left = Math.random() * 100;
      const duration = Math.random() * 1.2 + 1.2;

      h.className = 'heart';
      h.style.position = 'absolute';
      h.style.left = left + '%';
      h.style.bottom = '20%';
      h.style.width = size + 'px';
      h.style.height = size + 'px';
      h.style.transform = 'rotate(-45deg)';
      h.style.background = '#ff7aa2';
      h.style.borderRadius = '50%';
      h.style.boxShadow = '0 6px 16px rgba(255, 122, 162, 0.5)';
      h.style.animation = `floatUp ${duration}s ease-out`;

      const l1 = document.createElement('span');
      const l2 = document.createElement('span');
      [l1, l2].forEach((l) => {
        l.style.position = 'absolute';
        l.style.background = '#ff7aa2';
        l.style.borderRadius = '50%';
        l.style.width = size + 'px';
        l.style.height = size + 'px';
      });

      l1.style.top = '-50%';
      l1.style.left = '0';
      l2.style.left = '-50%';
      l2.style.top = '0';

      h.appendChild(l1);
      h.appendChild(l2);
      hearts.appendChild(h);

      setTimeout(() => h.remove(), duration * 1000 + 200);
    }
  }

  function startBalloons() {
    const total = 18;
    for (let i = 0; i < total; i++) {
      addBalloon();
    }
    setInterval(addBalloon, 1200);
  }

  function addBalloon() {
    const b = document.createElement('div');
    const size = Math.floor(Math.random() * 28) + 28;
    const left = Math.random() * 100;
    const hue = Math.floor(Math.random() * 30) + 330;
    const fall = Math.random() * 6 + 8;

    b.className = 'balloon';
    b.style.position = 'absolute';
    b.style.left = left + '%';
    b.style.top = '-10%';
    b.style.width = size + 'px';
    b.style.height = size * 1.4 + 'px';
    b.style.background = `hsl(${hue}, 80%, 70%)`;
    b.style.borderRadius = '50%';
    b.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
    b.style.animation = `fall ${fall}s linear forwards`;

    balloons.appendChild(b);
    setTimeout(() => b.remove(), fall * 1000 + 200);
  }

  const style = document.createElement('style');
  style.textContent = `
  @keyframes floatUp {
    0% { transform: translateY(0) rotate(-45deg); opacity: 1; }
    100% { transform: translateY(-200px) rotate(-45deg); opacity: 0; }
  }
  @keyframes fall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(110vh); opacity: 0; }
  }
  `;
  document.head.appendChild(style);

  startBalloons();
};