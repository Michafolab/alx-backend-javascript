export function getFullResponseFromAPI(success) {
  if (success) return Promise.reslove({
    status: 200,
    body: 'Success'
  });
  return Promise.reject(new Error('The fake API is not working currently'));
}
