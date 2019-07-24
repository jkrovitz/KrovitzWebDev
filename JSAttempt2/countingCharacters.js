function countingCharacters(stringToCount){
  console.log(stringToCount + " has " + stringToCount.length + " characters.");
}
function countingCharacters2(stringToCount,characterToFind){
  var characterCount = 0;
  for(var characterPosition = 0;
  characterPosition < stringToCount.length;
  characterPosition++){
    if(stringToCount[characterPosition] == characterToFind){
      characterCount++;
    }

  }
  console.log("String to search in " + stringToCount);
  console.log("Character to find");
  console.log("Number of times character appears: " + characterCount);
}
function countingCharacters3(str, search){
  var count=0; //number found
  var numChars = search.length;

  var lastIndex = str.length - numChars;
  for(var index=0; index <=lastIndex; index++){
    var current = str.substring(index, index+numChars);
    if (current == search){
      count++;
    }
  }
  console.log("string to search in " + str);
  console.log("character to find: " + search);
  console.log("Number of times character appears: " + count);
}

function countingCharacters3JustCount(str, search){
  var count = 0;
  console.log("The number found is: " + count);
  var numChars = search.length;
  console.log("The number of characters searching for: " + numChars );
  console.log("This is the string length: " + str.length);
  var lastIndex = str.length - numChars;
  console.log("Figuring out length of the last index, which is the length of the entire string minus the number of characters you are looking for: (" + str.length + " - " + numChars + " = " + lastIndex + ") " + lastIndex);
  for(var index = 0; index <=lastIndex; index++){
    var current = str.substring(index, index+numChars);
    console.log("trying to find every substring " + current);
    if(current == search){
      count++;
      console.log("increment count if what you are searching for matches the substring compared: " + count);
    }
  }
  return count;
}
