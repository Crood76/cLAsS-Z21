function touching(dogg, catt){
    if(dogg.x - catt.x < catt.width/2 + dogg.width/2
      && catt.x - dogg.x < catt.width/2 + dogg.width/2 
      && dogg.y - catt.y < catt.height/2 + dogg.height/2
      && catt.y - dogg.y < catt.height/2 + dogg.height/2 
      ){
       return true; 
     }
     else{
      return false;
     }
  }
  