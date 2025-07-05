function generateId() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  let id = "";

  for (let i = 0; i < 8; i++) {
    if (Math.random() < 0.75) {
      id += letters.charAt(Math.floor(Math.random() * letters.length));
    } else {
      id += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
  }
  return id;
}

export default generateId;
