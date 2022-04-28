import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import queryKeys from "../../../constant/QueryKeys";
import uniqueId from "../../../constant/UniqueId";
import useModalContext from "../../../hooks/useModalContext";
import useTagInput from "../../../hooks/useTagInput";
import { useModifyProjectMember } from "../../../queries/Project";
import { useProjectDetails } from "../../../queries/ProjectDetails";
import { SearchedUser } from "../../../utils/api/User";
import MemberInput from "../../MemberInput";
import TagInput, { Tag } from "../../TagInput";
import { UserWithRole } from "../ProejctAdd";
import * as S from "./styles";
import ChangeMemberRole from "../../MemberInput/ChangeMemberRole";

const ProjectMemberModifyModal = () => {
  const { closeCurrentModal } = useModalContext();
  const { uuid } = useParams<{ uuid: string }>();
  const { data } = useProjectDetails(uuid || "");
  const projectMemberMutation = useModifyProjectMember(uuid || "");
  const [members, setMembers] = useState<(SearchedUser & UserWithRole)[]>([]);
  const role = data?.data.members.slice(1).map((item) => {
    const r: Tag = {
      id: uniqueId(),
      value: item.role,
    };
    return r;
  });
  const [roleProps, [roleTags]] = useTagInput("", [...(role || [])], true);
  const queryClient = useQueryClient();
  const myRole = data?.data.members.slice(0, 1).map((item) => {
    const m: Tag = {
      id: uniqueId(),
      value: item.role,
    };
    return m;
  });
  const [myRoleProps, [myRoleTags]] = useTagInput(
    "",
    [...(myRole || [])],
    true
  );

  const onRemoveClick = useCallback((uuid: string) => {
    setMembers((prev) => prev.filter((value) => value.uuid !== uuid));
  }, []);

  const onChangeMember = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (myRoleTags.length <= 0) {
        toast.error("역할을 입력해 주세요.");
        e.preventDefault();
      } else if (!e.shiftKey) {
        e.preventDefault();
        await toast.promise(
          projectMemberMutation.mutateAsync({
            role: myRoleTags.map((data) => data.value).join(","),
            members: [],
          }),
          {
            loading: "멤버 수정 중...",
            error: "멤버 수정 실패",
            success: "멤버 수정 성공",
          }
        );
        queryClient.invalidateQueries([queryKeys.projects, uuid || ""]);
        closeCurrentModal();
      }
    }
  };

  console.log(data?.data.members);

  return (
    <S.ProjectMemberModifyModalContainer>
      <S.Title>멤버</S.Title>
      <S.ContentBox>
        <S.MemberBox>
          {data?.data.members.slice(0, 1).map((item, index) => {
            return (
              <>
                <S.MyProfile>
                  <S.User>
                    <img src={item.thumbnailUrl} />
                    <span key={index}>{item.studentNo} </span>
                    <span key={index}>{item.name}</span>
                  </S.User>
                </S.MyProfile>
                <S.RollBox>
                  <div onKeyPress={onChangeMember}>
                    <TagInput
                      placeholder="공백으로 분야를 구분할 수 있습니다..."
                      {...myRoleProps}
                    />
                  </div>
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
          </>
        )}
        <S.MemberContent>
          {data?.data.members.slice(1).map((item, index) => {
            const mRole = data?.data.members.slice(1).map((item) => {
              const r: Tag = {
                id: uniqueId(),
                value: item.role,
              };
              return r;
            });
            return (
              <>
                <ChangeMemberRole
                  tags={roleTags}
                  {...item}
                  key={item.uuid}
                  setTag={(tags: Tag[]) => {
                    const m = [...members];
                    m[index].tags = tags;
                    setMembers(m);
                  }}
                  onRemoveClick={() => onRemoveClick(item.uuid)}
                  thumbnailUrl={item.thumbnailUrl}
                  studentNo={item.studentNo}
                  name={item.name}
                />
              </>
            );
          })}
        </S.MemberContent>
      </S.ContentBox>
    </S.ProjectMemberModifyModalContainer>
  );
};

export default ProjectMemberModifyModal;
