const checkIfPangram = function(sentence) {
  const arr = sentence.toLowerCase().split('') 
  if (arr.includes('a' && 'b' && 'c' && 'd' && 'e' && 'f' && 'g' && 'h' && 'i' && 'j' && 'k' && 'l' && 'm' && 'n' && 'o' && 'p' && 'q' && 'r' && 's' && 't' && 'u' && 'v' && 'w' && 'x' && 'y' && 'z')) {
    return true;
  }
  return false;
};