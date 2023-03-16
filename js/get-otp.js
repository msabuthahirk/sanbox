// Get the dropdown items
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Add a click event listener to each dropdown item
dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    const button = item.closest('.input-group').querySelector('.dropdown-toggle');
    const value = item.dataset.value;
    button.innerHTML = item.innerHTML;
    button.dataset.value = value;
  });
});


const digitInputs = document.querySelectorAll('.digit-input');

digitInputs.forEach((input, index) => {
  input.addEventListener('keyup', (e) => {

    const currentValue = e.target.value;
    const isNumber = /^[0-9]$/.test(currentValue);

    const key = e.key || e.keyCode;

    if (currentValue.length === 0 && key == 'Backspace') {
      if (index > 0) {
        digitInputs[index - 1].focus();
      }
    }

    if (!isNumber) {
      e.target.value = '';
      return;
    }

    if (currentValue.length === 1 && index < digitInputs.length - 1) {
      digitInputs[index + 1].focus();
    }

    console.l

    
  });
});

// const inputs = document.querySelectorAll('.digit-input');

// inputs.forEach((input, index) => {
//   input.addEventListener('keyup', function(event) {
//     console.log(index);
//     if (event.key >= 0 && event.key <= 9) {
//       if (index < inputs.length - 1) {
//         inputs[index + 1].focus();
//       }
//     } else if (event.key === 'Backspace') {
//       if (index > 0) {
//         inputs[index - 1].focus();
//       }
//     } else {
//       event.preventDefault();
//     }
//   });
// });

const getOtpBtn = document.getElementById('get-otp-btn');

getOtpBtn.addEventListener('click', () => {
  const resendState = getOtpBtn.getAttribute('resend-state');
  
  if (resendState === '0') {
    getOtpBtn.innerText = 'Resend OTP';
    getOtpBtn.setAttribute('resend-state', '1');
  }
});


getOtpBtn.addEventListener('click', () => {
  getOtpBtn.classList.add('clicked');
  setTimeout(() => {
    getOtpBtn.classList.remove('clicked');
  }, 500);
});

// const digitInputs = document.querySelectorAll('.digit-input');
const submitBtn = document.getElementById('otp-submit-btn');

digitInputs.forEach(input => {
  input.addEventListener('input', () => {
    const isAllFilled = Array.from(digitInputs).every(input => input.value);
    submitBtn.disabled = !isAllFilled;
  });
});
