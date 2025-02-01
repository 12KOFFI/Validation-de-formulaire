const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const affiche1 = document.querySelector(".affiche1");
const affiche2 = document.querySelector(".affiche2");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");

form.addEventListener("submit" , (e) => {
let verify = true
const emailVal = email.value
const passVal = password.value
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // format de donnee pour l'email

    if (emailVal === "") {
        affiche1.textContent = "Veuillez remplir tous les champs !";
        icon1.style.visibility = "visible";
        email.classList.add("colored")
        email.classList.remove("colorgreen")
        verify = false
        } else {
            affiche1.textContent = "";
            icon1.style.visibility = "hidden"
            }


            // verifie le format de donnes concernant l'email
            if (emailRegex.test(email.value)) {
                console.log("Email valide !");
                email.classList.add("colorgreen")
            } else {
               affiche1.textContent = "email invalide!"
               icon1.style.visibility = "visible";
               email.classList.add("colored")
               email.classList.remove("colorgreen")
               verify = false;
            }

            if ( passVal === "") {
                affiche2.textContent = "Veuillez remplir tous les champs !";
                icon2.style.visibility = "visible";
                password.classList.add("colored")
                verify = false
                } else {
                    affiche2.textContent = "";
                    icon2.style.visibility = "hidden"
                    password.classList.remove("colored")
                }

                if (passVal.length<8) {
                    verify = false
                    affiche2.textContent = "le mot de pass doit depasser 8 caractere"
                }
                else{
                   password.classList.add("colorgreen") 
                }

          

                
                
                if (!verify) {
                   e.preventDefault()
                    }

        
    
})