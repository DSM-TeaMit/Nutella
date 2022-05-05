import { AxiosResponse } from "axios";
import { FC, useCallback } from "react";
import { UseQueryResult } from "react-query";
import { useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import useModalContext from "../../../hooks/useModalContext";
import { useDeleteAccount } from "../../../queries/User";
import { MyProfileType } from "../../../utils/api/User";
import { RedButton, BorderButton } from "../../Buttons";
import Input from "../../Input";
import * as S from "./styles";
import toast from "react-hot-toast";

interface PropsType {
  data: UseQueryResult<AxiosResponse<MyProfileType, unknown>, unknown>;
}

const AccountDeleteModal: FC<PropsType> = ({ data }) => {
  const { closeCurrentModal } = useModalContext();
  const { studentNo, name } = data.data!.data;
  const deleteMutation = useDeleteAccount();
  const navigate = useNavigate();
  const [inputProps, [value]] = useInput();

  const onDeleteSuccess = useCallback(() => {
    toast.success("게정 삭제 성공");
    navigate("/");
  }, [navigate]);

  const onDeleteError = useCallback(() => {
    toast.success("계정 삭제 요청이 실패되었습니다.");
  }, []);

  const onDeleteClick = useCallback(() => {
    deleteMutation.mutate(undefined, {
      onSuccess: onDeleteSuccess,
      onError: onDeleteError,
    });
  }, [deleteMutation, onDeleteError, onDeleteSuccess]);

  return (
    <S.Container>
      <S.Title>계정 삭제</S.Title>
      <S.ContentBox>
        <S.ContentText>
          <div>계정을 삭제하시겠습니까?</div>
          <div>
            삭제한 계정은 <span>복구 할 수 없습니다.</span>
          </div>
          <br />
          <div>
            삭제를 진행하시려면{" "}
            <span>
              {studentNo} {name}
            </span>
            을 입력해 주세요.
          </div>
        </S.ContentText>
        <Input {...inputProps} placeholder={`${studentNo} ${name}을(를) 입력해 주세요.`} />
      </S.ContentBox>
      <S.BtnBox>
        <RedButton onClick={onDeleteClick} disabled={value !== `${studentNo} ${name}`}>
          삭제
        </RedButton>
        <BorderButton onClick={closeCurrentModal}>취소</BorderButton>
      </S.BtnBox>
    </S.Container>
  );
};

export default AccountDeleteModal;
