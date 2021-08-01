let chars = ["A", "B", "C", "D", "E", "F", "G", "H"];

function CreateTable() {
    tab = document.createElement("table");
    tab.setAttribute("id", "ChessTable");
    document.body.append(tab);
    
    tab.border = "2";
    tab.align = "center"

    let whiteCellColor = "LightGray"
    let blackCellColor = "DimGray"
    
    var colorSwitcher = false;
    for (var i = 0; i < 9; i++) {
        var row = tab.insertRow(i);
        colorSwitcher = !colorSwitcher;
        for(var j = 0; j < 9; j++){
            var cell = row.insertCell(j);
            cell.align = "center";
            if (j == 0 & i > 0) {
                cell.innerHTML = i;
                cell.style.backgroundColor = "white";
            }
            else {
                if (i == 0 & j > 0) {
                    cell.innerHTML = chars[j - 1];
                }
                else {
                    if (colorSwitcher) {
                        cell.style.backgroundColor = whiteCellColor;
                    }
                    else {
                        cell.style.backgroundColor = blackCellColor;
                    }
                    colorSwitcher = !colorSwitcher;
                }
            }
            cell.style.color = "black";
            cell.style.height = "50px";
            cell.style.width = "50px";
        };
    };
}

CreateTable();