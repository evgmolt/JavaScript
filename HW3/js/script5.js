const numOfString = 20;
for (var stringNum = 0; stringNum < numOfString; stringNum++) {
    var currentString = "";
    for (var charNum = 0; charNum < stringNum + 1; charNum++) {
        currentString += "x";
    }
    console.log(currentString);
}
