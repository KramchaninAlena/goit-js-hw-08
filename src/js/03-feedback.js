import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
let form = {};

formEl.addEventListener('submit', onSubmitForm);
formEl.addEventListener('input', throttle(onInputForm, 500));

function onSubmitForm(evt) {
    evt.preventDefault();
    const {email, message} = evt.target.elements;
        if(!email.value || !message.value){
     return alert('Всі поля повинні бути заповнені')
    };
    const formData ={
        email: email.value,
        message: message.value,
    }
    formEl.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
};

function onInputForm(evt) {
   form[evt.target.name] = evt.target.value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
};

function getObjValues () {
    let userData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {}
       for(const key in userData){
        formEl[key].value = userData[key]
    };    
    };
getObjValues()

