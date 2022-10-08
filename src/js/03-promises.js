import Notiflix from 'notiflix';

const form = document.querySelector(".form");

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    },delay)
  });
  promise
    .then(value=>Notiflix.Notify.success(value))
    .catch(err=>Notiflix.Notify.failure(err))
};

function operatePromises(evt){
  evt.preventDefault();
  let delay=Number(form.delay.value);
  for (let position = 1; position <= form.amount.value; position++) {
    createPromise(position,delay);
    delay+=Number(form.step.value);
  }
};

form.addEventListener("submit", operatePromises)