import { FC, useEffect, useMemo } from "react";
import { useImage } from "../queries/Image";
import Twemoji from "react-twemoji";
import toast from "react-hot-toast";

type PropsType = ImageProps & { emoji?: string };

type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Img: FC<PropsType> = (props) => {
  const propsWithoutSomething: Omit<PropsType, "src" | "emoji"> = useMemo(
    () => ({
      ...props,
    }),
    [props]
  );

  const { src, emoji } = props;

  const { data, isError, isLoading } = useImage(src || "");

  useEffect(() => {
    if (isError && !emoji) {
      toast.error("이미지를 가져올 수 없습니다.");
    }
  }, [emoji, isError]);

  if (isLoading) {
    return <img {...propsWithoutSomething} />;
  }

  if (emoji) {
    return (
      <Twemoji
        options={{
          folder: "svg",
          ext: ".svg",
          className: `${props.className} default-emoji`,
        }}
      >
        {emoji}
      </Twemoji>
    );
  }

  if (isError) {
    return <img {...propsWithoutSomething} />;
  }

  return <img {...propsWithoutSomething} src={data} />;
};

export default Img;
