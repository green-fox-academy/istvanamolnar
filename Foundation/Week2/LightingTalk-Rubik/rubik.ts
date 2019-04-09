'use strict'

function solveTheCube(size: string) {
    solveTheCross(white);
    solveTheTopCorners(white);
    solveTheMiddleLayer();
    solveTheBottom(yellow);
}

function solveTheCross(color: string): any {
    putFirstPieceToPlace();
    putSecondPieceToPlace();
    putThirdPieceToPlace();
    putFourthPieceToPlace();
}

function solveTheTopCorners(color: string) {
    putThePieceToTheRightPlace();
    if ("white is on the left") {
        perform("D  L  D'  L'");
    } else if ("white is on the right") {
        perform("D'  L'  D  L");
    } else /* white is facing to the bottom*/ {
        turnTheCubeUpsideDown();
        perform("sexy move".repeat(3));
    }
}

function solveTheMiddleLayer() {
    putThePieceToTheRightPlace();
    if ("if the block goes to the right") {
        perform("D'  R'  D  R'  D  F  D'  F'");
    } else { // if the block goes to the left
        perform("D  L  D'  L'  D'  F'  D  F");
    }
}

function solveTheBottom() {
    turnTheCubeUpsideDown();

    function flipTheEdgePieces() {
        perform("U  R'  U'  R  U  R  U'  R'");
    }
    function flipCornerPieces() {
        perform("R' B' R B") && turnTop();
    }
    function rotateEdgePieces() {
        perform("R  U'  L'  U  R'  2U  L  U'  L'  2U  L")
    }
    function rotateCornerPieces() {
        perform("2R  2F'  R'  B'  R  2F  R'  B  R'");
    }
}

solveTheCube('3x3x3');

https://ruwix.com/the-rubiks-cube/advanced-cfop-fridrich/orient-the-last-layer-oll/

muscle memory