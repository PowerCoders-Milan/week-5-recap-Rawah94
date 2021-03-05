
var array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary']
var array2 = [21, 19, 12, 'sebastian', 'will', 23, 20]


 array = array1.concat(array2)

function score()
var values = array.filter(Number)
var keys  = array.filter(String)

score =  keys.values


//score = {'marco':21, 'antonio':19, 'luca':12, 'sebastian':13, 'will':18, 'leo':23, 'mary':20}

console.log(score)

