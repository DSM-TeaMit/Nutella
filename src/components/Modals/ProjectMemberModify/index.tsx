import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useModifyProjectMember } from "../../../queries/Project";
import { useProjectDetails } from "../../../queries/ProjectDetails";
import { SearchedUser } from "../../../utils/api/User";
import Input from "../../Input";
import MemberInput from "../../MemberInput";
import { UserWithRole } from "../ProejctAdd";
import * as S from "./styles";

const ProjectMemberModifyModal = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const { data } = useProjectDetails(uuid || "");
  const [members, setMembers] = useState<(SearchedUser & UserWithRole)[]>([]);
  const projectMemberMutation = useModifyProjectMember(uuid || "");

  /* const onChangeMember = async () => {
    await toast.promise(
      projectMemberMutation.mutateAsync({
        uuid: string,
        role: string,
      }),
      {
        loading: "멤버 수정 중...",
        error: "멤버 수정 실패",
        success: "멤버 수정 성공",
      }
    );
  }; */

  console.log(data?.data.members);

  return (
    <S.ProjectMemberModifyModalContainer>
      <S.Title>멤버</S.Title>
      <S.ContentBox>
        <S.MemberBox>
          {data?.data.members.map((item, index) => {
            console.log(item);
            return (
              <>
                <S.MemberProfile>
                  <S.User>
                    <img src={item.thumbnailUrl} />
                    <span key={index}>{item.studentNo} </span>
                    <span key={index}>{item.name}</span>
                  </S.User>
                  {Number(data?.data.members.length) < 2 ? null : (
                    <span>삭제</span>
                  )}
                </S.MemberProfile>
                <S.RollBox>
                  <S.TagBox>
                    {item.role.split(",").map((data, index) => {
                      return <S.Tag key={index}>{data}</S.Tag>;
                    })}
                  </S.TagBox>
                  <Input placeholder="역할 입력..." />
                </S.RollBox>
              </>
            );
          })}
        </S.MemberBox>
        {Number(data?.data.members.length) < 2 ? null : (
          <>
            <MemberInput
              onUserClick={(user) =>
                setMembers((prev) => [...prev, { ...user, tags: [] }])
              }
            />
            <S.MemberBox>
              <S.MemberProfile>
                <S.User>
                  <img src=""></img>
                  <span>2107 김해교</span>
                </S.User>
                <span>삭제</span>
              </S.MemberProfile>
              <S.RollBox>
                <S.TagBox>
                  <S.Tag>프론트 엔드</S.Tag>
                </S.TagBox>
                <Input placeholder="역할 입력..." />
              </S.RollBox>
            </S.MemberBox>
          </>
        )}
      </S.ContentBox>
    </S.ProjectMemberModifyModalContainer>
  );
};

export default ProjectMemberModifyModal;
