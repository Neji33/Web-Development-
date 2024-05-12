const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const error =  document.getElementById('error');

form.addEventListener('submit', (e) =>{
    let messages =[]
    if(name.value==''||name.value==null){
        messages.push('Name is required')

    }
    if(password.value.length <=6){
        messages.push('Password must be longer than 6 character ')
    }
    if(password.value.length >20){
        messages.push('password must be shorter than 20 character ')
    }
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }  
})