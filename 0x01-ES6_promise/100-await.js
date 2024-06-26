import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { photo, user };
  } catch (e) {
    res = { photo: null, user: null };
  }
  return res;
}
// alternative solution
/*
import { uploadPhoto, createUser } from "./utils.js";

export default async function asyncUploadUser() {
  const results = await Promise.allSettled([uploadPhoto(), createUser()]);

  const response = {
    photo: null,
    user: null
  };

  const anyRejected = results.some(result => result.status === "rejected");

  if (!anyRejected) {
    response.photo = results[0].value;
    response.user = results[1].value;
  }
  return response;
}
*/
