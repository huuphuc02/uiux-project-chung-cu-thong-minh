export function compareDates(date1, date2) {
  const timestamp1 = new Date(date1).getTime();
  const timestamp2 = new Date(date2).getTime();

  if (timestamp1 < timestamp2) {
    return -1;
  } else if (timestamp1 > timestamp2) {
    return 1;
  } else {
    return 0;
  }
}

export function getCurrentDateTime() {
  const currentDate = new Date();

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const formattedDateTime = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;

  return formattedDateTime;
}

export function generateRandomString(length) {
  const characters = "ABCDEF123456";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

export function convertDateFormat(inputDate) {
  const dateObject = new Date(inputDate);

  const day = String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const year = dateObject.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

export function convertDateFormat2(inputDate) {
  const dateObject = new Date(inputDate);

  const day = String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const year = dateObject.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
