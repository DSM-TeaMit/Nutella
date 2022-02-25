import styled from "@emotion/styled";
import { FC, useCallback, useMemo } from "react";
import { useQuery } from "react-query";
import request from "../utils/axios";
import { Buffer } from "buffer";
import { useImage } from "../queries/Image";

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

  const { data } = useImage(src || "");

  return <img {...propsWithoutSomething} src={data} />;
};

export default Img;
