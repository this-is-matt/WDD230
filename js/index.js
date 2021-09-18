var newDate = new Date();

        // year
        var year = newDate.getFullYear();
        console.log(year);
        document.getElementById("year").innerHTML = year;

        // get last modified
        document.getElementById("lastModified").innerHTML = "Last Updated: " + new Date(document.lastModified);