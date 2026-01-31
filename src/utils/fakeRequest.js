let requestCount = 0;

export function fakeRequest(data) {
  requestCount++;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (requestCount % 2 === 0) {
        resolve({
          status: 200,
          data,
        });
      } else {
        reject({
          status: 500,
          message: 'Ocorreu um erro!',
        });
      }
    }, 1200);
  });
}
