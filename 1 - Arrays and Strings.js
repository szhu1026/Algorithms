//implement an algorithm to determine if a string has all unique characters
//what if you can't use additional data structures

function isUnique(str){
  if (str.length > 128) {
    return false;
  }

  let letters = {};
  for (let i = 0; i < str.length; i++){
    if (!letters[str[i]]){
      letters[str[i]] = true;
    }
    else {
      return false;
    }
  }
  return true;
}

function isUnique2(str){
  let filteredstr = "";
  for (let i = 0; i < str.length; i++){
    let letter = str[i];
    if (filteredstr.indexOf(letter) != -1){
      return false;
    }
    filteredstr += str[i];
  }
  return true;
}

//given two strings, write a method to decide if one is a permutation of another

function isPermutation(str1, str2){
  //whitespace doesn't count, it's case insensitive;
  return sortstr(str1).join("") === sortstr(str2).join("");

  function sortstr(str){
    return str.split("").sort(function(a,b){
      a = a.toLowerCase();
      b = b.toLowerCase();
      if ( a===b ){
        return 0;
      }
      return a < b ? -1 : 1;
    });
  }
}

//write a method to replace all spaces in astring wiht '%20'  you may ussume the strings
//has sufficeint space at he end to hold additional characters, and you are given the true length of the string

function replace(str){
  let spaces = 0;

  for (let i = 0; i < str.length; i++){
    if (str[i] === " "){
      spaces++;
    }
  }

  let new_str_length = str.length + (spaces * 2);

  let newstr = "";

  for (let i = str.length-1; i >= 0 ; i--){
    if (str[i] === " "){
      newstr[new_str_length - 1] = '0';
      newstr[new_str_length - 2] = '2';
      newstr[new_str_length - 3] = '%';
      new_str_length = new_str_length - 3;
    }
    else {
      newstr[new_str_length - 1] = str[i];
      new_str_length--;
    }
  }
}
