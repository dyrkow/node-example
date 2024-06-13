const express = require("express");

const { Worker } = require("worker_threads");

const app = express();

// Функция, которая вычисляте фибоначи в отдельном потоке
const process = (workerData) =>
  new Promise((res, rej) => {
    const worker = new Worker("./worker", { workerData });

    worker.on("message", res);
    worker.on("error", rej);
    worker.on("exit", rej);
  });

app.post("/", async (req, res) => {
  console.log("received");
  // Приняли запрос и выполняет всю работу в отедльном потоке,
  // не блокируя основной
  const data = await process(45);
  console.log("finish");
  res.json(data);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
