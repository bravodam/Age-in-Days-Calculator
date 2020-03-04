function ageInDays(){
    let birthYear = prompt('Welcome... Please Enter your birth Year');
    let theResult = (2019 - birthYear) *356;
    let h1 = document.createElement('h1');
    let textResult = document.createTextNode('You are '+ theResult+ ' Days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textResult);
    document.getElementById('flex-box-result').appendChild(h1);

    
}

function reset(){
    document.getElementById('ageInDays').remove();
}