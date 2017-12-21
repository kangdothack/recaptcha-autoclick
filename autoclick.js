let isRecaptchaFrame = () => {
  return /https:\/\/www.google.com\/recaptcha\/api2\/anchor/.test(window.location.href);
};

let captchaInterval = setInterval(() => {
  if (isRecaptchaFrame()) {
    document.getElementsByClassName('recaptcha-checkbox-checkmark')[0].click();
    clearInterval(captchaInterval);
  }  
}, 500);
