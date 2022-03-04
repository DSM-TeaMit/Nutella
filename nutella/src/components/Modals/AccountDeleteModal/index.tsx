import { AxiosResponse } from "axios";
import { FC, useCallback } from "react";
import { UseQueryResult } from "react-query";
import { useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import useMessageContext from "../../../hooks/useMessageContext";
import useModalContext from "../../../hooks/useModalContext";
import { useDeleteAccount } from "../../../queries/User";
import { MyProfileType } from "../../../utils/api/User";
import BorderButton from "../../Buttons/BorderButton";
import RedButton from "../../Buttons/RedButton";
import Input from "../../Input";
import * as S from "./styles";

interface PropsType {
  data: UseQueryResult<AxiosResponse<MyProfileType, any>, unknown>;
}

const AccountDeleteModal: FC<PropsType> = ({ data }) => {
  const { closeCurrentModal } = useModalContext();
  const { studentNo, name } = data.data!.data;
  const deleteMutation = useDeleteAccount();
  const { showMessage } = useMessageContext();
  const navigate = useNavigate();
  const [inputProps, [value]] = useInput();

  const onDeleteSuccess = useCallback(() => {
    showMessage({
      type: "Positive",
      title: "계정 삭제 성공",
      content: "계정 삭제 요청이 성공적으로 완료되었습니다.",
    });

    navigate("/");
  }, [showMessage, navigate]);

  const onDeleteError = useCallback(() => {
    showMessage({
      type: "Denial",
      title: "계정 삭제 실패",
      content: "계정 삭제 요청을 실패하였습니다. 잠시 후 다시 시도해주세요.",
    });
  }, [showMessage]);

  const onDeleteClick = useCallback(() => {
    deleteMutation.mutate(undefined, {
      onSuccess: onDeleteSuccess,
      onError: onDeleteError,
    });
  }, [deleteMutation, value]);

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
        <Input
          {...inputProps}
          placeholder={`${studentNo} ${name}을(를) 입력해 주세요.`}
        />
      </S.ContentBox>
      <S.BtnBox>
        <RedButton
          onClick={onDeleteClick}
          disabled={value !== `${studentNo} ${name}`}
        >
          삭제
        </RedButton>
        <BorderButton onClick={closeCurrentModal}>취소</BorderButton>
      </S.BtnBox>
    </S.Container>
  );
};

export default AccountDeleteModal;
