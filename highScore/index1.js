var scores = [60, 50 , 65, 41, 25, 56, 74, 55, 
    78, 96,96,85,12,23,56,54,62,35,33,];
    var highScore = 0;
    var output;

    for (let i = 0; i < scores.length; i++) {
        output = "BUBLE solution#" +i+ " scores: " + scores[i];
        console.log(output);
        if(scores[i]>highScore){
            highScore=scores[i];
        }
        
    }
    console.log(highScore);