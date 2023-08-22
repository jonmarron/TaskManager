const isDateValid = dateString => {
  let inputDate = new Date(dateString);
  let currentDate = new Date();

  return inputDate > currentDate;
}

export default isDateValid;