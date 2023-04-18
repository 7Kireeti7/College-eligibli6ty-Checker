function check (){
    var marks=document.getElementById("marksinput").value ;
    console.log(marks)
    if (marks<0 || marks>100){
        document.getElementById("result").innerHTML="Invalid Input"
    }
    else if(marks<60){
        document.getElementById("result").innerHTML="Repeat college"

    }
    else if(marks>=60 && marks<70){
        document.getElementById("result").innerHTML="Local college"

    }
    else if(marks>=70 && marks<80){
        document.getElementById("result").innerHTML="Private state colleges"

    }
    else if(marks>=80 && marks<90){
        document.getElementById("result").innerHTML="state public college"

    }
    else if(marks>=90 && marks<=100){
        document.getElementById("result").innerHTML="Top colleges of the country"

    }
}

// if marks are less than 60  -- repeat college
// if marks are 60-70 -- local colleges
//  if marks are 70-80 -- private State colleges
//  if marks 80-90 -- state coleges public 
//  if marks re 90-100 -- top colleges of country