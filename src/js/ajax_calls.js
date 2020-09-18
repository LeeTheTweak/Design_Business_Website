 
/*** Loading the New Arrivals Page ***/
    $("#sub-selection-nav p:nth-child(1)").click( () => {
        console.log("Web Icons page was clicked");
        $("#body-wrapper").load("../../WebIcons.html", (responseTxt, statusTxt, jqXHR) => {
            if(statusTxt == "success") {
                console.log("Web Icons Page loaded successfully");
            }
            if(statusTxt == "error") {
                console.log("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });

    /*** Loading the Apparel Page ***/
    $("#sub-selection-nav p:nth-child(2)").click( () => {
        console.log("Apparel page was clicked.");
        $("#body-wrapper").load("../../apparel.html", (responseTxt, statusTxt, jqXHR) => {
            if(statusTxt == "success") {
                console.log("Apparel content loaded successfully.");
            }
            if(statusTxt == "error") {
                console.log("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });

/*** Loading the Art Page ***/
    $("#visit-art-shop button").click( () => {
        console.log("Explore button was clicked.");
        $("#body-wrapper").load("art.html");
    });
    $("#sub-selection-nav p:nth-child(3)").click( () => {
        console.log("Art page was clicked.");
        $("#body-wrapper").load("../../art.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success") {
                console.log("Art content loaded successfully.");
            }
            if(statusTxt == "error") {
                console.log("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });


/*** Loading the Logos Page ***/
    $("#sub-selection-nav p:nth-child(4)").click( () => {
        console.log("Logos page was clicked.");
        $("#body-wrapper").load("../../logos.html", (responseTxt, statusTxt, jqXHR) => {
            if(statusTxt == "success") {
                console.log("Logos content loaded successfully.");
            }
            if(statusTxt == "error") {
                console.log("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });

    /*** Loading the Album Covers Page ***/
    $("#sub-selection-nav p:nth-child(5)").click( () => {
        console.log("Album cover page was clicked.");
        $("#body-wrapper").load("../../albumcover.html", (responseTxt, statusTxt, jqXHR) => {
            if(statusTxt == "success") {
                console.log("album cover content loaded successfully.");
            }
            if(statusTxt == "error") {
                console.log("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });

    /*** Loading the Illustrations Page ***/
    $("#sub-selection-nav p:nth-child(6)").click( () => {
        console.log("Illustration page was clicked");
        $("#body-wrapper").load("../../illustrations.html", (responseTxt, statusTxt, jqXHR) => {
            if(statusTxt == "success") {
                console.log("illustrations page content loaded successfully.");
            }
            if(statusTxt == "error") {
                console.log("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });