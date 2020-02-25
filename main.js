/******************
 * YOUR CODE HERE *
 ******************/
onlyOdds = (x) => {
const array = []
for (let i = 0 ; x.length > i ; i++){
if (x[i]%2 !== 0 )
array.push(x[i])
}return array
}

onlyEvens = (x) => {
  const array = []
for (let i = 0 ; x.length > i ; i++){
 if (x[i]%2 === 0)
 array.push(x[i])

} return array
}

shortNamesOnly = (x) => {
  const array = []
  for (let i = 0 ; x.length > i ; i++){
if (x[i].length < 7)
array.push(x[i])
  }return array
}

dNames = (x) => {
  const array = []
for (let i = 0 ; x.length > i ; i++){
if (x[i].startsWith('D'))
array.push(x[i])
}return array

}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
