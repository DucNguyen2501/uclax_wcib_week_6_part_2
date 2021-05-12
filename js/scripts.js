console.log('Hello from js/scripts.js!');

function imagefun() {
            var Image_Id = document.getElementById('getImage');
            if (Image_Id.src.match("../images/popup.png")) {
                Image_Id.src = "../images/popup2.png";
            }
            else {
                Image_Id.src = "../images/popup.png";
            }
        }
