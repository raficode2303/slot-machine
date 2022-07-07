import symbol1 from './images/pngwing.com (1).png'
import symbol2 from './images/pngwing.com (2).png'
import symbol3 from './images/pngwing.com (3).png'
import symbol4 from './images/pngwing.com (4).png'
import symbol5 from './images/pngwing.com (5).png'
import symbol6 from './images/pngwing.com (6).png'
import symbol7 from './images/pngwing.com (7).png'
import symbol8 from './images/pngwing.com (8).png'
import symbol9 from './images/pngwing.com (9).png'
import symbol10 from './images/pngwing.com (10).png'
import symbol11 from './images/pngwing.com (11).png'
import symbol12 from './images/pngwing.com (12).png'
import symbol13 from './images/pngwing.com (13).png'
import symbol14 from './images/pngwing.com (14).png'
import symbol15 from './images/pngwing.com (15).png'

export const Symbols = [
  symbol1,
  symbol2,
  symbol3,
  symbol4,
  symbol5,
  symbol6,
  symbol7,
  symbol8,
  symbol9,
  symbol10,
  symbol11,
  symbol12,
  symbol13,
  symbol14,
  symbol15,
]

export function shuffleArray(array) {
  let newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = temp
  }
  console.log('return new array:', newArray)
  return newArray
}
