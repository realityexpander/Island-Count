function countIslands (mapStr) {
  console.log(mapStr);
  
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
