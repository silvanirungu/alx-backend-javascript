export default function uploadPhoto(filename) {
  const response = new Promise((resolve, reject) => {
    reject(Error(`${filename} cannot be processed`));
  });

  return response;
}
