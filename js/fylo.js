let emailEnquire = document.querySelector('#enquire');
let emailAdd = document.querySelector('#email');
let form = document.querySelector('form')

function evaluate(){
    if(emailAdd.value.trim()===''){
        let form = emailEnquire.parentElement;
        let emailField = form.querySelector('small');
        emailField.style.display = 'block'
        emailField.textContent = 'Please enter a valid email address'
    }else{
        let form = emailEnquire.parentElement;
        let emailField = form.querySelector('small');
        emailField.style.display = 'none'
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    evaluate()
    console.dir(form)
})