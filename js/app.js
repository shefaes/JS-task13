
 var hour = new Date().getHours();
 console.log(hour);
 if (hour >= 6 && hour <= 12) {
 alert('Sabahin Xeyir Baki....')
 document.body.style.backgroundColor="yellow"
 }
 else if(hour>12 && hour <=18) {
     alert('Gunortan Xeyir Baki...')
     document.body.style.backgroundColor = "orange"
 }
 else if(hour> 18 && hour <=24) {
     alert('Axsamin Xeyir Baki...')
     document.body.style.backgroundColor = "blue"
 }
 else if(hour> 0 && hour <6) {
     alert('Şirin yuxular Bakı...')
     document.body.style.backgroundColor = "dark"
 }

       
            

  
