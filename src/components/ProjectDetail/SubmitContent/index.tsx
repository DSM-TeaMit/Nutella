import * as S from "./styles";
import { PlusIcons } from "../../../assets/icons";
import { Project } from "../../../utils/api/ProjectDetails";
import { FC } from "react";
import { useCreatePlanMutation } from "../../../queries/Plan";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ReportCard from "../../Cards/ReportCard";
import { useCreateResultMutation } from "../../../queries/Result";

interface PropsType {
  data: Project;
}

const SubmitContent: FC<PropsType> = ({ data }) => {
  const planMutation = useCreatePlanMutation(data.uuid || "");
  const resultMutation = useCreateResultMutation(data.uuid || "");
  const navigate = useNavigate();

  const onPlanSuccess = () => {
    navigate(`/project/${data.uuid}/plan`);
  };

  const onPlanError = () => {
    toast.error("계획서 이동하려는 도중 오류가 났습니다. 다시 시도해 주세요.");
  };

  const onClickPlan = () => {
    planMutation.mutate(undefined, {
      onSuccess: onPlanSuccess,
      onError: onPlanError,
    });
  };

  const onResultSuccess = () => {
    navigate(`/project/${data.uuid}/result`);
  };

  const onResultError = () => {
    toast.error("보고서 이동하는 도중 오류가 났습니다. 다시 시도해 주세요.");
  };

  const onClickResult = async () => {
    try {
      await resultMutation.mutateAsync();
      onResultSuccess();
    } catch (error) {
      onResultError();
    }
  };

  return (
    <S.SubmitContentContainer>
      <S.SubmitContent>
        <S.ProjectFile>
          <S.SubTitle>{data.projectName} 계획서</S.SubTitle>
          <S.SubmitBox>
            {data.plan ? (
              <ReportCard data={{ ...data.plan, type: "PLAN" }} />
            ) : (
              <>
                <S.SubmitLinkBox onClick={() => onClickPlan()}>
                  <S.PlusBox>
                    <img src={PlusIcons} alt="plus" />
                  </S.PlusBox>
                  <S.Font>{data.projectName} 계획서 작성하기</S.Font>
                </S.SubmitLinkBox>
              </>
            )}
          </S.SubmitBox>
        </S.ProjectFile>
        <S.ProjectFile>
          <S.SubTitle>{data.projectName} 결과 보고서</S.SubTitle>
          <S.SubmitBox>
            {data.projectStatus === "PLANNING" ? (
              <>
                <S.GrayBox check={true}>
                  <S.Font>계획서부터 먼저 작성해 주세요.</S.Font>
                </S.GrayBox>
              </>
            ) : data.report ? (
              <ReportCard data={{ ...data.report, type: "REPORT" }} />
            ) : (
              <>
                <S.SubmitLinkBox onClick={() => onClickResult()}>
                  <S.PlusBox>
                    <img src={PlusIcons} alt="plus" />
                  </S.PlusBox>
                  <S.Font>{data.projectName} 결과 보고서 작성하기</S.Font>
                </S.SubmitLinkBox>
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
