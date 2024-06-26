import { createUser, uploadPhoto } from './utils';

const asyncUploadUser = async () => {
  try {
    return { photo: await uploadPhoto(), user: await createUser() };
  } catch (err) {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
