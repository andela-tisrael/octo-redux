const validateInput = (request) => {
  var errors = {};
  let isValid = true;
  const mailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/i;
  if (request.username === '') {
    isValid = false;
    errors.username = 'This field is required';
  }
  if (request.email === '') {
    isValid = false;
    errors.email = 'This field is required';
  } else if (!mailRegex.test(request.email)) {
    errors.email = 'Valid email required';
  }
  if (request.password === '') {
    isValid = false;
    errors.password = 'This field is required';
  }
  if (request.passwordConfirmation === '') {
    isValid = false;
    errors.passwordConfirmation = 'This field is required';
  }
  if (request.password !== request.passwordConfirmation) {
    isValid = false;
    errors.matchPassword= 'Password does not match';
  }
  if (request.timezone === '') {
    isValid = false;
    errors.timezone = 'This field is required';
  }
  return {
    errors,
    isValid
  }
}
export default validateInput;
