

const oneUsername = "Dineshnagaraj";
  const onePassword = "dineshck";

    function valitate(){
        const username = document.getElementById("one").value;
        const password = document.getElementById("two").value;

        if (username == oneUsername && password == onePassword) {
            return true;
        
        }
        else{
            alert("Incorrect user name or password");
            return false; 
        }
    }