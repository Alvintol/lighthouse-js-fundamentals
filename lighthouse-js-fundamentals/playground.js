        //conditions
/* NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)*/

let count = 60;

while (count >= 0){
  switch (count){
    case 50: console.log(`Orbiter transfers from ground to internal power (T-${count} seconds)`);
    break;
    case 31: console.log(`Ground launch sequencer is go for auto sequence start (T-${count} seconds)`);
    break;
    case 16: console.log(`Activate launch pad sound suppression system (T-${count} seconds)`);
    break;
    case 10: console.log(`Activate main engine hydrogen burnoff system (T-${count} seconds)`);
    break;
    case 6: console.log(`Main engine start (T-${count} seconds)`);
    break;
    case 0: console.log(`Solid rocket booster ignition and liftoff! (T-${count} seconds)`);
    break;
    default: console.log(`T-${count} seconds`);
    break;
  }count -= 1;
}