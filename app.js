const tileDisplay = document.querySelector('.tile-container');
const keyboard = document.querySelector('.key-container');
const messageDisplay = document.querySelector('.message-container');

let wordle;;

const getWordle = () => {
fetch('http://localhost:8000/word')
  .tn((res(ponse) =)> response.json())
    n((js(on) =)> {
   wor = json.toUpperCase();;
   }
   .ch((err() =)> console.log(err));;
};;
getWordle();;

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]