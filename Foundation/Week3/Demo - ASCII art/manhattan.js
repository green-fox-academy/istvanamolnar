'use strict';

const asciiABC = 
[' #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ###',
 '# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   #', 
 '### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ##',
 '# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #      ',
 '# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  # ', ]



const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','?'];

const L = 4;
const H = 5;
const T = 'manhattan'.toUpperCase().split('');
 
for (let i = 0; i < H; i++) {
    let ROW = asciiABC[i];
    let rowOfSolution = "";
    for (let j = 0; j < T.length; j++) {    
        rowOfSolution += (ROW.substr(arr.indexOf(T[j]) * L, L));
    }
    console.log(rowOfSolution);
}