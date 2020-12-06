const FormatDate = (date, type) => {
  //Get date and time
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes() == '0' ? '00' : date.getMinutes();
  let time = `${hours}:${minutes}`;
  //Calculate 24 Hour Format
  let [sHours, mins] = time.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
  let period = +sHours < 12 ? 'AM' : 'PM';
  let hrs = +sHours % 12 || 12;

  let formattedtime = () => {
    return `${hrs}:${mins} ${period}`;
  };

  if (type === 'getDate') {
    let formattedDate = `${day}/${month}/${year} ${formattedtime()}`;
    return formattedDate;
  } else {
    return formattedtime();
  }
};

export default FormatDate;
