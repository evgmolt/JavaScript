let chessPieces = ["Л", "К", "С", "Ф", "К", "С", "К", "Л"];
let pawn = "п";
tab = document.getElementById("ChessTable");

for (var i = 0; i < 8; i++) {
    tab.rows[1].cells[i + 1].innerHTML = chessPieces[i];
    tab.rows[2].cells[i + 1].innerHTML = pawn;
    tab.rows[7].cells[i + 1].innerHTML = pawn;
    tab.rows[8].cells[i + 1].innerHTML = chessPieces[i];
}