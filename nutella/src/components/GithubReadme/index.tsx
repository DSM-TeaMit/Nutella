import { FC, useEffect } from "react";
import { useGithubReadme } from "../../queries/User";
import MarkdownRender from "../MarkdownRender";
import * as S from "./styles";

interface PropsType {
  githubId?: string;
}

const GithubReadme: FC<PropsType> = ({ githubId }) => {
  const { data, isError, isLoading } = useGithubReadme(githubId || "");

  if (!githubId) {
    return <></>;
  }

  if (isError || isLoading) {
    return <></>;
  }

  return (
    <>
      <S.Description>Github 에서 가져온 README</S.Description>
      <S.ReadMe>
        <MarkdownRender>{data!.data}</MarkdownRender>
      </S.ReadMe>
    </>
  );
};

export default GithubReadme;
