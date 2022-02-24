import Uri from "../../constant/Uri";
import request from "../axios";

export const postImage = async (file: File, projectUuid: string) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await request.post<string>(
      Uri.uploadImage.get({ projectUuid }),
      formData
    );

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
