function AutoChangeLogo(Time) {
    let Logo = document.getElementById("logo");
    let i = 0;

    setInterval(function() {
        i++;
        switch (i) {
            case 1: {
                Logo.src = "resources/images/logo/F.png";
                break;
            }
            case 2: {
                Logo.src = "resources/images/logo/A.png";
                break;
            }
            case 3: {
                i = 0;
                Logo.src = "resources/images/logo/FAS.png";
                break;
            }
        }
    }, Time);
}