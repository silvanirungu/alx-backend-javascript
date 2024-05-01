export default function signUpUser(firstName, lastName) {
  const response = new Promise((resolve) => {
    resolve({
      firstName,
      lastName,
    });
  });

  return response;
}
