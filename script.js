const form = document.querySelector("form");
const array = [];

form.addEventListener("submit", function (event1) {
  event1.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const stay = document.getElementById("stay").value;

    const formData = {
      Name: name,
      email: email,
      Phoneno: number,
      Gender: gender,
      Stay: stay
    };

    const storedData = JSON.parse(localStorage.getItem("formDataArray"));
    if (storedData && storedData.some((v)=> v.email===email)){
      alert("Duplicate data");
      return;

    }
    
    
      array.push(formData);
    
    localStorage.setItem("formDataArray",JSON.stringify(array));

 
    

 

  });