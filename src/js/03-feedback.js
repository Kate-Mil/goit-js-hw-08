import { throttle } from "lodash";

const refs = {
    input: document.querySelector('input[name="email"]'),
    textarea : document.querySelector('textarea[name="message"]'),
    form : document.querySelector('.feedback-form'),
};
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

refs.form.addEventListener('input',throttle(onInputChange, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateMessageOutput();

function onInputChange(evt){
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt){
    evt.preventDefault();

    if (evt.currentTarget.email.value === '' || evt.currentTarget.message.value === ''){
        alert('всі поля повинні бути заповнені');   
    } else { 
        const formData = new FormData(evt.currentTarget);
        const objectData = {};
        formData.forEach((value, name) => {
          objectData[name] = value;
        });

        console.log(objectData);
        evt.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
}
}


function populateMessageOutput () {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedMessage = JSON.parse(savedMessage);
 if(savedMessage){
    for (const key in parsedMessage) {
            refs.form.querySelector(`[name=${key}]`).value = parsedMessage[key];
            formData[`${key}`] = refs.form.querySelector(`[name=${key}]`).value;
        };
  };
}
