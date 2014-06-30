'use strict';

var peoplecoChallengeNodejs = require('../lib/peopleco-challenge-nodejs.js'),
    _und = require("../node_modules/underscore/underscore-min");

var baseUrl = "student.people.co",
    yourUserHash = "51c1db4066b6",
    yourBaseUrl = "/api/challenge/battleship/"+yourUserHash+"/boards",
    topAxis = ["A","B","C","D","E","F","G","H","I","J"],
    leftAxis = ["1", "2","3","4","5","6","7","8","9","10"];

peoplecoChallengeNodejs.retrieveBoards(baseUrl, yourBaseUrl, function( boards ){

    var boardsObjects = JSON.parse(boards);
    peoplecoChallengeNodejs.retrieveBoard(boardsObjects[4], baseUrl, yourBaseUrl, function( boardResult ) {

        console.log("Board is: ", boardResult);
var coordinate = 'E5';
var count = 0;

var shots = [coordinate];
while(!boardResult.is_finished && count < 5){

peoplecoChallengeNodejs.makeMove(boardResult, coordinate, baseUrl, yourBaseUrl, function( moveResult ) {
//console.log(moveR);
console.log(count);
count++;
                        if(moveResult.is_hit){
                            justHit();
                            coordinate = 'A6'
                        }
                        else {
                            selectRand();
                            coordinate = 'A7'
                        }
                    });

//console.log(boardResult.shots);
}
var justHit = function(){
    coordinate = 'E6';
    shots.push(coordinate);
console.log(shots.length);
}
var selectRand = function(){
coordinate = 'C6';
    //coordNum = Math.round(Math.random()*10)+1;
    //coordinate = 'A' + coordNum;
shots.push(coordinate);
console.log(shots.length);
}
/*
        for(var topAxi in topAxis)
        {

            for ( var leftAxi in leftAxis )
            {

                var coordinate = topAxis[topAxi] + leftAxis[leftAxi];
                console.log("Coord: " + coordinate);

                    peoplecoChallengeNodejs.makeMove(boardResult, coordinate, baseUrl, yourBaseUrl, function( moveResult ) {
                        //handle result of move!
                    });*/


                    /*
                    peoplecoChallengeNodejs.makeMove(boardResult, coordinate, baseUrl, yourBaseUrl, function( moveResult ) {
                        //handle result of move!
                    });


            }


        }*/

    });

});