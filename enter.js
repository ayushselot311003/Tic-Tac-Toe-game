let n1=0;
let n2=0;
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("play").style.visibility="hidden";

    

    


});


function change()
{
    var t1=document.getElementById("a").value;
    var t2=document.getElementById("b").value;
    n1=document.getElementById("a").value;
     n2=document.getElementById("b").value;
     sessionStorage.setItem('userName', n1); 
     sessionStorage.setItem('userName1', n2); 

    if(t1.length != 0 && t2.length!=0)
        {
           
                document.getElementById("play").style.visibility="visible";

            
            
        }
        else{
            document.getElementById("play").style.visibility="hidden";

        }
    }
    

    document.addEventListener("DOMContentLoaded",function(n1,n2){
        const name = sessionStorage.getItem('userName'); 
        const name2=sessionStorage.getItem('userName1');
      
        document.getElementById("name1").innerHTML=name;
        document.getElementById("name2").innerHTML=name2;

    });




