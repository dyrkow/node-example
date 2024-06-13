
// Это поток, в котором мы выполняем
// блокирующую операцию сколько хотим времени
//
// Из минусов - данные, передаваемые в поток копируются
//
// потоки потребляют меньше памяти чем форк процесса
// но все же требует дополнительной памяти
//
// и для ее оптимизации скорее всего лучше использовать
// pool потоков, иначе можно всю память сьесть при росте
// количества запросов
const { workerData, parentPort } = require("worker_threads");

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const result = fibonacci(workerData);

parentPort.postMessage(result);
