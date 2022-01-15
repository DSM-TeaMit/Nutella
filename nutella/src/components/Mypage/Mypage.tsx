import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import * as S from "./styles";

const MyPage = () => {
  return (
    <S.Container>
      <S.Inner>
        <S.SideBarContainer>
          <SideBar />
        </S.SideBarContainer>
        <S.ContentContainer>
          <Routes>
            <Route path="/" element={<div>this is profile</div>} />
            <Route path="/project" element={<div>this is project</div>} />
            <Route path="/report" element={<div>this is report</div>} />
            <Route path="/setting" element={<div>this is setting</div>} />
          </Routes>
        </S.ContentContainer>
      </S.Inner>
    </S.Container>
  );
};

export default MyPage;
