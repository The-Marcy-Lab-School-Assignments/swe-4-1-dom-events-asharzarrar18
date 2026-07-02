const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];

const playlistsGrid = document.getElementById('playlists-grid')
const nowPlayingTitle = document.getElementById('now-playing-title')

playlists.forEach((playlist) => {
  const li = document.createElement('li')
    li.className = 'playlist-card'
    li.dataset.title = playlist.title

    const img = document.createElement('img')
    img.src = playlist.image
    img.alt = `${playlist.title} playlist cover`

    const p = document.createElement('p')
    p.textContent = playlist.title

    li.append(img, p)
    playlistsGrid.appendChild(li)
})

playlistsGrid.addEventListener('click', (event) => {
  const clickedCard = event.target.closest('.playlist-card')
  if (!clickedCard) return
  
  const previousSelected = document.querySelector('.playlist-card.selected')
  if (previousSelected) {
    previousSelected.classList.remove('selected')
  }
  clickedCard.classList.add('selected')
  nowPlayingTitle.textContent = clickedCard.dataset.title
})
