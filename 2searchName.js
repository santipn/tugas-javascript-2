const xname = [
  'Abigail', 'Alexandra', 'Alison',
  'Amanda', 'Angela', 'Bella',
  'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth',
  'Ella', 'Faith', 'Olivia', 'Penelope']

function filterXname(huruf, limit, dataXnama) {
  result = dataXnama.filter(function(x) {
    return x.toLowerCase().indexOf(huruf.toLowerCase()) !== -1
  });
  return batas (result, limit)
}

const searchName = (huruf, limit, callback) => {
  return callback (huruf, limit, xname)
}

function batas (batasXnama, limit) {
  if (batasXnama.length > 3) {
    return batasXnama.slice(0, limit)
  } else {
    return batasXnama
  } 
}

console.log(searchName('an', 3, filterXname))
