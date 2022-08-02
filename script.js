const button = document.getElementById('submitButton')

button.addEventListener('click',
  function(e){
    const pwd = document.getElementsByName('password')
    const cnfmPwd = document.getElementsByName('confirm-password')
    const pwdErrMsg = document.getElementById('passwordError')
    if (pwd == cnfmPwd) {
      window.alert('Login confirmed! loading homepage')
      return
    }
    else {
      pwdErrMsg.textContent = '*Error - Invalid Password'
      e.preventDefault()
      pwd[0].setAttribute('aria-invalid', true)
      cnfmPwd[0].setAttribute('aria-invalid', true)
    }
  });