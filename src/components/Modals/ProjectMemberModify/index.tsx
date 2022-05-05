import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import uniqueId from "../../../constant/UniqueId";
import { useModifyProjectMember } from "../../../queries/Project";
import { useProjectDetails } from "../../../queries/ProjectDetails";
import { SearchedUser } from "../../../utils/api/User";
import MemberInput from "../../MemberInput";
import { UserWithRole } from "../ProejctAdd";
import MemberWithRole from "./Member";
import * as S from "./styles";

const ProjectMemberModifyModal = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const { data } = useProjectDetails(uuid || "");
  const m = useMemo<(SearchedUser & UserWithRole)[]>(
    () =>
      data?.data.members.map((value) => ({
        ...value,
        tags: value.role.split(",").map((value) => ({ id: uniqueId(), value })),
      })) || [],
    [data]
  );
  const [members, setMembers] = useState<(SearchedUser & UserWithRole)[]>(m);
  const projectMemberMutation = useModifyProjectMember(uuid || "");
  const [my, ...others] = members;

  return (
    <S.ProjectMemberModifyModalContainer>
      <S.Title>멤버</S.Title>
      <S.ContentBox>
        <S.MemberBox>
          <MemberWithRole data={my} />
        </S.MemberBox>
        {data?.data.projectType !== "PERS" && (
          <MemberInput onUserClick={(user) => setMembers((prev) => [...prev, { ...user, tags: [] }])} />
        )}
        <S.MemberContent>
          {others.map((value) => (
            <MemberWithRole data={value} key={value.uuid} />
          ))}
        </S.MemberContent>
      </S.ContentBox>
    </S.ProjectMemberModifyModalContainer>
  );
};

export default ProjectMemberModifyModal;
