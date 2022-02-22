import Uri from "../../constant/Uri";
import request from "../axios";

export const postImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await request.post<string>(
      Uri.uploadImage.get({
        projectUuid: "a08c9142-2e64-4702-891e-8561933fdc96",
      }),
      formData
    );

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
