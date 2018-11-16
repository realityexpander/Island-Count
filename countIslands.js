function countIslands (mapStr) {

  // find the x & y size
  let xSize = mapStr.split('\n')[0].length;
  let ySize = mapStr.split('\n').length;

  // copy the string into a matrix
  let matrix = [];
  for(let y=0; y<ySize; y++) {
    matrix[y] = [];
    for(let x=0; x<xSize; x++) {
      matrix[y][x] = mapStr.split('\n')[y][x];
    }
  }

  let islandCount = 0;
  for(let y=0; y<ySize; y++) {
    for(let x=0; x<xSize; x++) {
      if(matrix[y][x] === '0') {
        islandCount++;
        sinkIsland(x, y);
      }
    }
  }

  return islandCount;

  function sinkIsland(x, y) {
    if (x<0 || x>=xSize || y<0 || y>=ySize) 
      return;

    if (matrix[y][x] === '0') {
      matrix[y][x] = '.';
      sinkIsland(x  , y-1);
      sinkIsland(x+1, y);
      sinkIsland(x  , y+1);
      sinkIsland(x-1, y);
    }
  }
  
}

          //            _
          //           /_'. _
          //         _   \ / '-.
          //        < ``-.;),--'`
          //        '--.</()`--.
          //          / |/-/`'._\
          //          |/ |=|
          //             |_|
          //        ~`   |-| ~~      ~
          //    ~~  ~~ __|=|__   ~~
          //  ~~   .-'`  |_|  ``""-._   ~~
          //   ~~.'      |=|    O    '-.  ~
          //     |      `"""`  <|\      \   ~
          //  ~  \              |\      | ~~
          //      '-.__.--._    |/   .-'
          //           ~~   `--...-'`    ~~
          //   ~~         ~          ~
          //         ~~         ~~     ~

// start x=0, y=0
// if (x,y)==0, flood fill
//    flood fill & mark islands

// Flood-fill (node, target-color, replacement-color):
// 1. If target-color is equal to replacement-color, return.
// 2. If the color of node is not equal to target-color, return.
// 3. Set the color of node to replacement-color.
// 4. Perform Flood-fill (one step to the south of node, target-color, replacement-color).
//     Perform Flood-fill (one step to the north of node, target-color, replacement-color).
//     Perform Flood-fill (one step to the west of node, target-color, replacement-color).
//     Perform Flood-fill (one step to the east of node, target-color, replacement-color).
// 5. Return.
