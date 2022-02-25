import { FC, useMemo } from "react";
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
