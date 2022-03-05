import { FC, useMemo } from "react";
import { useImage } from "../queries/Image";
import Twemoji from "react-twemoji";

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
