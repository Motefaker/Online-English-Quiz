const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    if(obj.fName == '' || obj.lName == '') {
        alert("You have to enter your first name and last name!");
        return;
    };

    const json = JSON.stringify(obj);
    localStorage.setItem('form', json);


    window.location.href = "main.html"; 
});