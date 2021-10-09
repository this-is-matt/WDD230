        const year = document.getElementById("year").textContent = new Date().getFullYear();
 

        //current date
        const date = document.getElementById("date").textContent = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
