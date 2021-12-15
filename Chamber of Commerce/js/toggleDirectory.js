 function toggle(n){
     let grid = "directory";
     let list = "directoryToggleList";
     if(n == 1){
        document.querySelector("#dir").classList.add(grid);
        document.querySelector("#dir").classList.remove(list);
        
        console.log("grid");
     }
     else{
        document.querySelector("#dir").classList.add(list);
        document.querySelector("#dir").classList.remove(grid);
     }
 }