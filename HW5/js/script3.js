let imageNamesBlack = ["b-lad.jpg", "b-horse.jpg", "b-elef.jpg", "b-ferz.jpg", "b-king.jpg", 
                       "b-elef.jpg", "b-horse.jpg", "b-lad.jpg", ];
let imageNamesWhite = ["w-lad.jpg", "w-horse.jpg", "w-elef.jpg", "w-ferz.jpg", "w-king.jpg",
                       "w-elef.jpg", "w-horse.jpg", "w-lad.jpg", ];
let imageNamePawnWhite = "w-pawn.jpg";
let imageNamePawnBlack = "b-pawn.jpg";
const imageDir = "images";
const imageSize = 30;

function LoadPieces(imageNames) {
    resultArray =[];
    for (var i = 0; i < imageNames.length; i++)
    {
        var img = document.createElement('img');
        img.src = imageDir + "/" + imageNames[i];
        img.height = imageSize;
        img.width = imageSize;
        resultArray.push(img);
    }
    return resultArray;
}

function LoadPawns(pawnName) {
    resultArray =[];
    for (var i = 0; i < 8; i++)
    {
        var img = document.createElement('img');
        img.src = imageDir + "/" + pawnName;
        img.height = imageSize;
        img.width = imageSize;
        resultArray.push(img);
    }
    return resultArray;
}

tab = document.getElementById("ChessTable");
//let img = new Image();
var blackPieces = LoadPieces(imageNamesBlack);
var whitePieces = LoadPieces(imageNamesWhite);
var blackPawns = LoadPawns(imageNamePawnBlack);
var whitePawns = LoadPawns(imageNamePawnWhite);

for (var i = 0; i < 8; i++)
{
    var cell = tab.rows[1].cells[i + 1];
    cell.innerHTML="";  
    cell.appendChild(blackPieces[i]);
    
    cell = tab.rows[2].cells[i + 1];
    cell.innerHTML="";  
    cell.appendChild(blackPawns[i]);    
    
    cell = tab.rows[7].cells[i + 1];
    cell.innerHTML="";  
    cell.appendChild(whitePawns[i]);    

    cell = tab.rows[8].cells[i + 1];
    cell.innerHTML="";  
    cell.appendChild(whitePieces[i]);
}



//cell.backgroundImage = img;
