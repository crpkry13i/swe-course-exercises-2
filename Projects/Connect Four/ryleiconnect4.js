const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1;
let board = []; // "In Memory" board. This is what your JS script will be using to keep track of the state of play. It is a matrix (an array of arrays). It is only nested one level deep. We have one array with (7) indices as the x-axis and at each of those indices there is another array with (6) indices, the y-axis. 

function makeBoard() {
    for (let y = 0; y < HEIGHT; y++) {
        board.push(Array.from({length: WIDTH}));
        console.log(board);
    }
};

// Every time a piece gets played, we will update this board by placing some kind of data (like a p1 or p2 string) to indicate who put a piece there and to make it possible to search for empty "squares". That's what the function makeBoard() is doing. It's going to replace the empty [] of board with a complete HEIGHT by WIDTH set of nested arrays.

// The function basically says: WIDTH (7) times, push an array that is HEIGHT (6) long, into the array "board". Now you have an in memory board capable of housing x-y coordinate squares.

// Each loop of height is going to be another level of height on the y axis. All the nested arrays of length 7 are contribute to the 7 space width of the board.

function makeHtmlBoard() {
    const board = document.getElementById('board');
    const top = document.createElement("tr");
    top.setAttribute("id", "column-top");
    top.addEventListener("click", handleClick);

    for (let x = 0; x < WIDTH; x++) {
        const headCell = document.createElement("td");
        headCell.setAttribute("id", x);
        top.append(headCell);
    }
    

    board.append(top);
}


