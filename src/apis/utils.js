const WAITING_TIME = 2000;

export const simulateApiCall = responseData =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(responseData);
    }, WAITING_TIME);
  });
