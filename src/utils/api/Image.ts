import Uri from "../../constant/Uri";
import request from "../axios";
import { Buffer as BufferLib } from "buffer";

export const postImage = async (file: File, projectUuid: string) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await request.post<string>(Uri.uploadImage.get({ projectUuid }), formData);

  return response;
};

export const getImage = async (src: string) => {
  if (!src || src === "") {
    return;
  }

  const response = await request.get(src, {
    responseType: "arraybuffer",
    baseURL: "",
  });

  const data = `data:${response.headers["content-type"]};base64,${BufferLib.from(
    response.data,
    "binary"
  ).toString("base64")}`;

  return data;
};
