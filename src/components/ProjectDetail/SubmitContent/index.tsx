import * as S from "./styles";
import { PlusIcons } from "../../../assets/icons";
import { Project } from "../../../utils/api/ProjectDetails";
import { FC, useEffect } from "react";
import { useCreatePlanMutation } from "../../../queries/Plan";
import toast from "react-hot-toast";

interface PropsType {
  data: Project | undefined;
}

const SubmitContent: FC<PropsType> = ({ data }) => {
  useEffect(() => {}, []);
  const planMutation = useCreatePlanMutation(data?.uuid || "");
  const resultMutation = useCreatePlanMutation(data?.uuid || "");

  return (
    <S.SubmitContentContainer>
      <S.SubmitContent>
        <S.ProjectFile>
          <S.SubTitle>{data?.projectName} 계획서</S.SubTitle>
          <S.SubmitBox>
            <S.SubmitLinkBox
              to={`/project/${data?.uuid}/plan`}
              onClick={() => {
                planMutation.mutate();
              }}
            >
              <S.PlusBox>
                <img src={PlusIcons} alt="plus" />
              </S.PlusBox>
              <S.Font>{data?.projectName} 계획서 작성하기</S.Font>
            </S.SubmitLinkBox>
          </S.SubmitBox>
        </S.ProjectFile>
        <S.ProjectFile>
          <S.SubTitle>{data?.projectName} 결과 보고서</S.SubTitle>
          <S.SubmitBox>
            {data?.projectStatus === "REPORTING" ? (
              <>
                <S.GrayBox
                  onClick={() => {
                    resultMutation.mutate();
                  }}
                  to={`/project/${data?.uuid}/result`}
                  check={false}
                />
                <div>
                  <S.PlusBox>
                    <img src={PlusIcons} alt="plus" />
                  </S.PlusBox>
                  <S.Font>{data?.projectName} 결과 보고서 작성하기</S.Font>
                </div>
              </>
            ) : (
              <>
                <S.GrayBox
                  onClick={() => toast.error("계획서부터!")}
                  to=""
                  check={true}
                >
                  <S.Font>계획서를 먼저 작성해 주세요.</S.Font>
                </S.GrayBox>
              </>
            )}
          </S.SubmitBox>
        </S.ProjectFile>
      </S.SubmitContent>
      <S.ResultContent>
        <div>
          <S.SubTitle>프로젝트 결과</S.SubTitle>
          <S.Box>
            <S.ResFont>프로젝트를 완료하고 작성할 수 있습니다.</S.ResFont>
          </S.Box>
        </div>
      </S.ResultContent>
    </S.SubmitContentContainer>
  );
};

export default SubmitContent;
