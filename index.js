const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordButton = document.getElementById("passwordButton");

passwordButton.addEventListener("click", function() {
    let passwordOne = "";
    let passwordTwo = "";

    for (let i = 0; i < 15; i++)
    {
        let randomIndexOne = Math.floor(Math.random() * characters.length);
        let randomIndexTwo = Math.floor(Math.random() * characters.length);
        
        passwordOne += characters[randomIndexOne];
        passwordTwo += characters[randomIndexTwo];
    }

    document.getElementById("newPassword1").value = passwordOne;
    document.getElementById("newPassword2").value = passwordTwo;
})

let resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function() {
    let newPassword1 = document.getElementById("newPassword1");
    let newPassword2 = document.getElementById("newPassword2");
    newPassword1.value = "";
    newPassword2.value = "";
});

