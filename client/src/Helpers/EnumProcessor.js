const processEnum = word => {
  let array =  word.replace('_', ' ').toLowerCase().split('');
  array[0] = array[0].toUpperCase();
  return array.join('');
}

export default processEnum;