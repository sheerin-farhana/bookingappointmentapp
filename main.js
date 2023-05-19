const btn = document.querySelector('.btn');

btn.addEventListener('mouseover',(e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name');
    console.log(nameInput.value);
    const emailInput = document.querySelector('#email');
    console.log(emailInput.value);
});

btn.addEventListener('mouseout',(e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name');
    console.log(nameInput.value);
    const emailInput = document.querySelector('#email');
    console.log(emailInput.value);
});

//starts here 

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit' , onsubmit);

function onsubmit(e){
    e.preventDefault();

    if(nameInput.value ==' '|| emailInput.value==' '){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        nameInput.value='';
        emailInput='';
    }
    console.log(myForm);

}