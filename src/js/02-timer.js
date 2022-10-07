import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const datetimeInput = document.getElementById("datetime-picker");
const startBtn = document.querySelector("[data-start]");
const timerObj = {
  daysSpan: document.querySelector("[data-days]"),
  hoursSpan: document.querySelector("[data-hours]"),
  minutesSpan: document.querySelector("[data-minutes]"),
  secondsSpan: document.querySelector("[data-seconds]"),
};
// =======================================================================
//                        THE METHODS START
// =======================================================================
// -------------------the method to return time object--------------------
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};
// ---------------------------------------------------------------------------

// -------------------the method to toggle disable opt------------------------
function toggleActivityBtn (boolean){
    startBtn.disabled=boolean
};
// ---------------------------------------------------------------------------

// -------------------the method to add zero back to value--------------------
function addLeadingZero(value) {
  const string = String(value);
  return string.padStart(2, '0');  
};
// ---------------------------------------------------------------------------

// -------------------the method to countdown time----------------------------
// function startCountdown(selectedDateInMs){
//   const dateNowInMs = new Date().getTime();
//   const differenceMs = selectedDateInMs - dateNowInMs;
//   timerObj.daysSpan.textContent=addLeadingZero(convertMs(differenceMs).days);
//   timerObj.hoursSpan.textContent=addLeadingZero(convertMs(differenceMs).hours);
//   timerObj.minutesSpan.textContent=addLeadingZero(convertMs(differenceMs).minutes);
//   timerObj.secondsSpan.textContent=addLeadingZero(convertMs(differenceMs).seconds);
//   if (differenceMs<500) {
//         clearInterval(timerId)
//         return
//       }   
// }; 
// ---------------------------------------------------------------------------

// =======================================================================
//                        THE METHODS END
// =======================================================================

toggleActivityBtn(true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDatesArr) {
    console.log(selectedDatesArr[0]);
    const dateNowOfSelectionInMs = new Date().getTime();
    const selectedDateInMs = selectedDatesArr[0].getTime();
   
    console.log(dateNowOfSelectionInMs, selectedDateInMs);

    if (selectedDateInMs<dateNowOfSelectionInMs) {
      Notiflix.Notify.failure('Please choose a date in the future');
      // alert("Please choose a date in the future");
      toggleActivityBtn(true);
      return
    }
    toggleActivityBtn(false);

    startBtn.addEventListener("click", function(){
      const timerId = setInterval(() => {  
        const dateNowInMs = new Date().getTime();
        const differenceMs = selectedDateInMs - dateNowInMs;
        timerObj.daysSpan.textContent=addLeadingZero(convertMs(differenceMs).days);
        timerObj.hoursSpan.textContent=addLeadingZero(convertMs(differenceMs).hours);
        timerObj.minutesSpan.textContent=addLeadingZero(convertMs(differenceMs).minutes);
        timerObj.secondsSpan.textContent=addLeadingZero(convertMs(differenceMs).seconds);
        if (differenceMs<900) {
              clearInterval(timerId)
              return
          }}, 1000);
      
    });
  },
};

flatpickr(datetimeInput, options);