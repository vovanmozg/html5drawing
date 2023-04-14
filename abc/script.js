function fill(codes) {
  return freq.replace(/ /g, '').split('').reduce((memo, char, i) => {
    memo[char] = codes[i];
    return memo;
  }, {});
}

function randStickChar() {
  const dictionary = '01234567abcd';
  const shuffled = dictionary.split('').sort(() => 0.5 - Math.random()).join('');
  return  shuffled.slice(0, Math.ceil(Math.random() * shuffled.length) );
}
function generate() {


  const abcLocal = {};
  const chars = freq.replace(/ /g, '').split('');
  const codes = ['0', '1', '2', '3', '4', '5', '6', '7', '01', '02', '03', '04', '05', '06', '07', '12', '13', '14', '15', '16', '17', '23', '24', '25', '26', '27', '34', '35', '36', '37', '45', '46', '47'];
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    abcLocal[char] = randStickChar();
  }
  return abcLocal;
}

// https://ru.wikipedia.org/wiki/%D0%A7%D0%B0%D1%81%D1%82%D0%BE%D1%82%D0%BD%D0%BE%D1%81%D1%82%D1%8C
const freq =                    'о       е     а     и     н     т     с     р     в      л      к       м       д       п       у       я       ы       ь       г       з       б       ч       й         х         ж       ш       ю       ц       щ       э       ф           ъ       ё'
const optimalWithoutBorders = ['26',   '04', '15', '37', '17', '35', '57', '13', '024', '046', '026',  '246',  '0246', '1357', '06',   '02',   '24',   '46',   '157',  '137',  '135',  '157',  '013457', '123567', '067',  '012',  '234',  '456',  '0147', '0345', '01234567', '1236', '2567']
const withBorders =           ['26cd', '04cd', '15', '37', 'cd', '35cd', '57ab', '13', '17', '13ab', '035cd', '246', '35', '147cd', 'ab', '15cd', '37cd', '1357', '035', '57', '147', '234', '37abcd', '257', '137', '137cd', 'abcd', '046', '137ab', '04', '17cd', '0246', '26cd']
const optimalWithBorders =    ['26',   '04', '15', '37', '17', '13', '35', '57', 'ab',  'cd',  'abcd', '57ab', '35cd', '26cd', '04cd', '15cd', '37cd', '17cd', '13cd', '35cd', '57cd', '35ab', '26ab',   '04ab',   '15ab', '37ab', '17ab', '13ab', '35ab', '57ab', '1357',     '0246', '01234567', '123567']
const predator =              ['0',    '1', '2', '3', '4', '5', '6', '7', '01', '02', '03', '04', '05', '06', '07', '12', '13', '14', '15', '16', '17', '23', '24', '25', '26', '27', '34', '35', '36', '37', '45', '46', '47']
const perpendicular =         ['02', '04', '06', '026', '24', '26', '246', '46', '046', '026', '02ab', '04ab', '06ab', '026ab', '24ab', '26ab', '246ab', '46ab', '046ab', '026ab', '02cd', '04cd', '06cd', '026cd', '24cd', '26cd', '246cd', '46cd', '046cd', '026cd', 'ab', 'cd', '0246']

const abc = {
  '1': fill(optimalWithoutBorders),
  '2': fill(withBorders),
  'predator': fill(predator),
  'perpendicular': fill(perpendicular),
  '5': fill(optimalWithBorders),
  'random': generate,
}

function langId() {
  const langId = document.getElementById('langId').value;
  return langId;
}

function getCurrentAbc() {
  const abcLocal= {};
  document.getElementById('abcSource').value.split('\n').map((line) => {
    const [char, code] = line.split(': ');
    abcLocal[char] = code;
  });
  return abcLocal;
}

function genChar(code) {
  const char = getCurrentAbc()[code];
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '20');
  svg.setAttribute('width', '20');

  for (let i = 0; i < char.length; i++) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const sticks = {
      '0': ['10', '10', '10', '0'],
      '1': ['10', '10', '20', '0'],
      '2': ['10', '10', '20', '10'],
      '3': ['10', '10', '20', '20'],
      '4': ['10', '10', '10', '20'],
      '5': ['10', '10', '0', '20'],
      '6': ['10', '10', '0', '10'],
      '7': ['10', '10', '0', '0'],
      'a': ['1', '0', '1', '10'],
      'b': ['1', '10', '1', '20'],
      'c': ['0', '19', '10', '19'],
      'd': ['10', '19', '20', '19'],
    }

    line.setAttribute('x1', sticks[char[i]][0]);
    line.setAttribute('y1', sticks[char[i]][1]);
    line.setAttribute('x2', sticks[char[i]][2]);
    line.setAttribute('y2', sticks[char[i]][3]);

    svg.appendChild(line);
  }
  return svg;
}

function wordTags(word) {
  const tags = [];
  for (let i = 0; i < word.length; i++) {
    tags.push(genChar(word[i]));
  }
  return tags;
}

function convertText(text) {
  const textLines = text.toLowerCase().replace(/[^а-яё\n ]/ig, '').split('\n');
  const words = [];

  return textLines.map((textLine) => {
    return textLine.trim().split(' ').map((word) => {
      return wordTags(word);
    });
  })
}

function render() {
  const poem = document.getElementById('textSource').value;
  const tags = convertText(poem);

  const container = document.getElementById('container');
  container.innerHTML = ''
  tags.forEach((line) => {
    const lineElement = document.createElement('div');
    lineElement.className = 'row';
    container.append(lineElement);
    line.forEach((word) => {
      const wordElement = document.createElement('div');
      wordElement.className = 'word';
      wordElement.style.width = 20 * Math.ceil(word.length / 2) + 'px';
      lineElement.append(wordElement);
      word.forEach((char) => {
        wordElement.append(char);
      })
    })
  })
}

function fillAbcSource() {
  const abcSource = document.getElementById('abcSource');

  const abcLocal = langId() === 'random' ? abc[langId()]() : abc[langId()];
  abcSource.value = Object.keys(abcLocal).map((key) => {
    return key + ': ' + abcLocal[key];
  }).join('\n');
}

function documentLoaded() {
  fillAbcSource();
  render();
}

function textSourceChanged() {
  render();
}

function abcChanged() {
  render();
}

function langSelected(object) {
  fillAbcSource();
  render();
}
