import styled from "@emotion/styled";
import { FC, useCallback, useMemo } from "react";
import { useQuery } from "react-query";
import request from "../utils/axios";
import { Buffer } from "buffer";

type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Img: FC<ImageProps> = (props) => {
  const propsWithoutSomething: Omit<ImageProps, "src"> = useMemo(
    () => ({
      ...props,
    }),
    [props]
  );

  const { src } = props;

  const { data } = useQuery<string | undefined>([src], async () => {
    const response = await request.get(src || "", {
      responseType: "arraybuffer",
    });

    const data = `data:${response.headers["content-type"]};base64,${Buffer.from(
      response.data,
      "binary"
    ).toString("base64")}`;

    return data;
  });

  return <img {...propsWithoutSomething} src={data} />;
};

export default Img;
