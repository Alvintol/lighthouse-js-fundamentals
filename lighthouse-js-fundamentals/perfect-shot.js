// ** conditions
/*  Implement a function called finalPosition(moves),
which will calculate the position of the parade 
based on an array of directional moves. The parade 
will move on an X-Y grid.
*Your function will receive an array of moves, 
which are strings that say either north, south, 
west, or east, these represent the parade moving in
a particular direction by a single space on the 
grid. By looking at the path that the parade moves
in, your function should calculate and then return 
an array representing the position of the parade 
after completing all of the moves. The first 
element of the array should be the X position, and 
the second element of the array should be the Y 
position. The parade begins at [0,0].*/



const finalPosition = function(moves){
  let position = [0,0];
  for (let dir = 0; dir < moves.length; dir++){
  // console.log(moves[dir]);
    if (moves[dir] == 'north'){
      position[1] += 1;
    }else if (moves[dir] == 'south'){
      position[1] -= 1;
    }else if (moves[dir] == 'east'){
      position[0] += 1;
    }else {
      position[0] -= 1;
    }
  // console.log(position);
  }console.log(position);
}

finalPosition(['north', 'north', 'west', 'west', 
'north', 'east','north']),
finalPosition( ['east', 'east', 'east', 'east',
'west', 'west', 'south']),
finalPosition(['south', 'south', 'south', 'south',
'south', 'north', 'south']);
