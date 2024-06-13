
// Клиент, который обращается к серверу
fetch("http://localhost:3000/", { method: "POST" })
  .then((response) => response.json())
  .then(console.log)
  .catch(console.error);
