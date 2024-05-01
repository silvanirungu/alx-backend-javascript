import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const obj = {};

  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    obj.photo = { status: photo.status, body: photo.body };
    obj.user = { firstName: user.firstName, lastName: user.lastName };
  } catch (error) {
    obj.photo = null;
    obj.user = null;
  }

  return obj;
}
