import { FC, useEffect, useMemo } from "react";
import { useImage } from "../../queries/Image";
import * as S from "./styles";

type PropsType = ImageProps & {
  emoji?: string;
  displayLoading?: boolean;
  isProfile?: boolean;
};

type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

function emojiUnicode(input: string) {
  return emojiUnicode
    .raw(input)
    .split(" ")
    .map((val) => parseInt(val).toString(16))
    .join(" ");
}

emojiUnicode.raw = function (input: string) {
  if (input.length === 1) {
    return input.charCodeAt(0).toString();
  } else if (input.length > 1) {
    const pairs = [];
    for (let i = 0; i < input.length; i++) {
      if (
        // high surrogate
        input.charCodeAt(i) >= 0xd800 &&
        input.charCodeAt(i) <= 0xdbff
      ) {
        if (
          input.charCodeAt(i + 1) >= 0xdc00 &&
          input.charCodeAt(i + 1) <= 0xdfff
        ) {
          // low surrogate
          pairs.push(
            (input.charCodeAt(i) - 0xd800) * 0x400 +
              (input.charCodeAt(i + 1) - 0xdc00) +
              0x10000
          );
        }
      } else if (input.charCodeAt(i) < 0xd800 || input.charCodeAt(i) > 0xdfff) {
        // modifiers and joiners
        pairs.push(input.charCodeAt(i));
      }
    }
    return pairs.join(" ");
  }

  return "";
};

const Img: FC<PropsType> = (props) => {
  const { src, emoji, displayLoading, isProfile, ...rest } = props;

  const { data, isError, isLoading } = useImage(src || "");
  const unicode = useMemo(
    () =>
      emojiUnicode(emoji || "")
        .split(" ")
        .join("-"),
    [emoji]
  );

  useEffect(() => {
    console.log(src);
  }, [src]);

  if (isLoading) {
    if (displayLoading) {
      return <S.Loading />;
    }

    return <img {...rest} alt={undefined} />;
  }

  if (emoji) {
    return (
      <img
        {...rest}
        alt={undefined}
        src={`https://twitter.github.io/twemoji/v/13.1.0/svg/${unicode}.svg`}
      />
    );
  }

  if (isProfile) {
    return <img {...rest} src={src} alt={undefined} />;
  }

  if (isError) {
    return <img {...rest} alt={undefined} />;
  }

  return <img {...rest} src={data} />;
};

export default Img;
