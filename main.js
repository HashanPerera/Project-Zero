//conditions and return parameters
function sayhello(name, age){
                
    //window.alert('Hello')
   // document.getElementById('Para1').innerHTML('Hello')
    //document.write('Hello');
    if(name=='' || age==''){
        return window.alert('Fill the all fields.')
    }else{
        document.write(name +' is '+ age +' years old.')
    }

}

//Objects and variables
function printObject(){
    //object
    var obj1 = {
        'Name' : 'Hashan',
        'Age':'18',
        'Course': 'JSP'
    }

    let txt = 'Data of obj1: '
    for(i in obj1){
        txt += obj1[i] + '; '
    }

    window.alert(txt)
    
}

//Loops
function LoopFor(){
    product = 1;
    var num = parseInt(window.prompt('Enter a value '))
    
    for(i=1; i <= num ; i++ ){
        product *= i; 
    }

    document.write('Factorial ' + num + ' is ' + product +'. Math.trunc is remove the decimals:' + Math.trunc(num/2))
}
            
function PinCheck(){
    var realPin = 4523
    var pin
    var count = 0;
    do{
        count += 1;
        var pin = parseInt(window.prompt('Enter the Pin'))
    }while(pin != realPin && count < 3)
        if(pin != realPin && count == 3){
            window.alert('Your account is locked')
        }else{
            document.write('Welcome back')
        }

}      

//Events
function EventCheckLoad(){
    document.images["img1"].src = 'images/HTML.png'
}

function EventCheckMouse(){
    document.images["img1"].src = 'images/JS.png'
}

// break and continue
function ControlLoop(){
    for(i=1; i< 10; i++){
        if(i==5 || i > 7)
            //break // stop all
            continue; // forget the rest and check again the loop
        document.write(i +"</br>")
        
    }
}

// else if

function MoreConditions(){
    var valarr = [];
    var tot = 0;

    for(i = 1; i <4; i++){
        valarr[i] = parseInt(prompt("Enter marks " + i));
        tot += valarr[i];
    }
    
    Average_Marks = tot / 3;
    alert(tot)
    if(Average_Marks > 75){
        alert('A');
    }
    else if( Average_Marks > 65){
        alert('B')
    }
    else if(Average_Marks > 55){
        alert('C')
    }
    else if(Average_Marks > 35){
        alert('Common Pass')
    }
    else{
        alert('Failed')
    }
}

//switch

function SwitchCase(){

    var i = prompt('Enter a character');

    switch (i) {
        case 'a' :
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            alert(i + ' is a vowel.')
            break;
        
        default:
            alert(i + ' any other character.')
            break;   

    }

}

function ErrorHandling(){
    var a = 'A';

    try {
        s = parseFloat(A);
        //s= a.toLowerCase();
        alert('Value of a is '+a)
    } catch(e) {
        alert('Error')
    } finally {
        alert('Finally block will always run.')
    }

}

function RedirectPage(a, b){
    window.location = 'https://www.google.com/';
    // shortcut for comment ctrl+/
    // window.location = 'https://www.google.com/'; 
}

function DataGather(a,b){
    //window.alert("Username:"+a+", Password:"+b)
    
    for(i=0;i<10;i++){

        var element1 = document.getElementById("col1");
        var element2 = document.getElementById("col2");
        element1.innerText = a;
        element2.innerHTML = b;

    }

    
function ClearAll(a,b){
    document.getElementsByName("val1").innerHTML = "Clear ";
    document.getElementsByName("val2").innerHTML = " Clear";
}
    
    

}