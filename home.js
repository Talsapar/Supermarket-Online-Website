	
$("#insert").click(function(){
alert(" המוצר התווסף לסל הקניות")
       })

$("#insert").click(function(){
alert(" המוצר התווסף לסל הקניות")
 })
             
 function GoToHomePage()
 {
 window.location = '../HTML/Payment.html';   
}
if(typeof jQuery=="undefined"){
alert("JWuerly is undefined");
}
            
function validate(){
var name=document.getElementById("name").value;
if (name=="")
{
    alert("עליך להזין את שמך הפרטי");
        return;
}
                 
var family=document.getElementById("family").value;
if (family=="")
{
alert("עליך להזין את שם משפחתך");
return;
}
var cardit=document.getElementById("cardit").value;
if (cardit=="")
{
    alert("כדי שהתשלום יתבצע עליך להכניס מספר כרטיס תקין");
    return;
}
var date=document.getElementById("date").value;
if (date=="")
{
alert("כדי שהתשלום יתבצע עליך להכניס את תוקף הכרטיס");
return;
}                 
 var pay=document.getElementById("paym").value; 
if (pay==""){
    alert("כדי להמשיך בתשלום אנא הזן סכום לתשלום ");
return;

}          
 var cvv=document.getElementById("cvv").value; 
if (cvv==""){
    document.getElementById("info").innerHTML="כדי להמשיך בתשלום אנא הזן מספר cvv";
    document.getElementById("info").style.color="red";
    }             
else
 {document.getElementById("info").innerHTML="התשלום בוצע";
document.getElementById("info").style.color="red";}
}
sum=0;
$(".insert").click(function(){
var mony ;  
mony = parseInt(window.prompt( "רשום את מחיר המוצר המבוקש"));
if(mony)
{
    if(mony==0)
        alert("לא הוספת את המוצר לסל הקניות");
    else
    {
        sum+=mony;
        alert(" המוצר הוסף לסל הקניות");
    
    }
   
}
  else
{
    alert("לא הוספת את המוצר לסל הקניות");
    sum+=0; 
}
document.getElementById("cart").innerHTML = sum+"₪";

})
              