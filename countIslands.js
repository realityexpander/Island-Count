

function countIslands (mapStr) {
  console.log(mapStr);

  // find the x size
  let xSize = mapStr.split('\n')[0].length;

  //find the y size
  let ySize = mapStr.split('\n').length;

  // copy the string into a matrix
  let matrix = [];
  for(let y=0; y<ySize; y++) {
    matrix[y] = [];
    for(let x=0; x<xSize; x++) {
      matrix[y][x] = mapStr.split('\n')[y][x];
    }
  }

  console.log(matrix);

  let cnt = 0;
  for(let y=0; y<ySize; y++)
    for(let x=0; x<xSize; x++)
      count(x, y, '0');

  console.log(matrix);

  function count(x, y, color) {
    if(matrix[y] && matrix[y][x]) {
      if(matrix[y][x] !== color || matrix[y][x] === 'X')
        return;

      matrix[y][x] = 'X';
      count(x, y+1, color);
      count(x, y-1, color);
      count(x-1, y, color);
      count(x+1, y, color);
    }
  }
  
}



// start x=0, y=0

// if (x,y)==0, flood fill

// flood fill & mark islands


// Flood-fill (node, target-color, replacement-color):
// 1. If target-color is equal to replacement-color, return.
// 2. If the color of node is not equal to target-color, return.
// 3. Set the color of node to replacement-color.
// 4. Perform Flood-fill (one step to the south of node, target-color, replacement-color).
//     Perform Flood-fill (one step to the north of node, target-color, replacement-color).
//     Perform Flood-fill (one step to the west of node, target-color, replacement-color).
//     Perform Flood-fill (one step to the east of node, target-color, replacement-color).
// 5. Return.



var string = ('..000.\n'+
'..0...\n'+
'..0.0.\n'+
'..0...\n'+
'..000.');

console.log(countIslands(string));
