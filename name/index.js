function setName() {
    
        let input = prompt("Введите ФИО");

        if((input == "" || input == 0 || input == null || input == NaN || /\s/.test(input))) {
        }  
        else alert("Введите ФИО с пробелами!");

        let modInput = input.toLocaleLowerCase();
        let inpArray = modInput.split(" ");
        
        for (let i = 0; i < inpArray.length; i++) {
            inpArray[i] = inpArray[i].charAt(0).toUpperCase() + inpArray[i].slice(1); 
        } 

        let surname = inpArray[0];
        let name = inpArray[1];
        let patro = inpArray[2];
      
        document.getElementById("surname").value += surname;
        document.getElementById("name").value += name;        
        document.getElementById("patronymic").value = patro;      

} 
