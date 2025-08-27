import './styles.css';
import goblinImage from './img/goblin.png';

const gameBoard = document.getElementById('gameBoard');
const boardSize = 4;
let currentPosition = null;

// Создаем игровое поле
function createGameBoard() {
  for (let i = 0; i < boardSize * boardSize; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    gameBoard.appendChild(cell);
  }
}

// Генерация случайной позиции
function getRandomPosition() {
  return Math.floor(Math.random() * (boardSize * boardSize));
}

// Поместить персонажа в заданную позицию
function placeCharacter(position) {
  // Удаляем предыдущего персонажа, если есть
  const existingCharacter = document.querySelector('.character');
  if (existingCharacter) {
    existingCharacter.remove();
  }

  // Создаем img элемент
  const img = document.createElement('img');
  img.src = goblinImage;
  img.classList.add('character');
  // Находим ячейку по позиции и добавляем img
  const cells = document.querySelectorAll('.cell');
  cells[position].appendChild(img);
  currentPosition = position;
}

// Перемещение персонажа
function moveCharacter() {
  let newPosition;
  do {
    newPosition = getRandomPosition();
  } while (newPosition === currentPosition);

  placeCharacter(newPosition);
}

// Инициализация игры
function initGame() {
  createGameBoard();
  const initialPosition = getRandomPosition();
  placeCharacter(initialPosition);
  setInterval(moveCharacter, 1000);
}

initGame();
