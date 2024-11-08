import "./App.css";
import { useEffect } from "react";
import { setColorsToCSSVariables } from "./styles/themes/colors";
import { setRadiusToCSSVariables } from "./styles/themes/radius";
import Badge from "./components/badge/Badge";
import Modal from "./components/modal/Modal";
import Responsive from "./pages/Responsive";
import KakaoMap from "./pages/KakaoMap";

function App() {
  useEffect(() => {
    setColorsToCSSVariables();
    setRadiusToCSSVariables();
  }, []);

  return (
    <>
      {/* <div>
        <h1>뱃지 테스트</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <h2>color : </h2>
          <Badge>test</Badge>
          <Badge backgroundColor="blue">test</Badge>
          <Badge backgroundColor="green">test</Badge>
          <Badge backgroundColor="pink">test</Badge>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <h2>radius : </h2>
          <Badge>test</Badge>
          <Badge backgroundColor="blue" borderRadius="small">
            test
          </Badge>
          <Badge backgroundColor="green" borderRadius="large">
            test
          </Badge>
          <Badge backgroundColor="pink" borderRadius="xlarge">
            test
          </Badge>
        </div>
      </div>
      <div>
        <h1>모달 테스트</h1>
        <Modal title="여기는 제목이 들어갈 구역입니다">
          <div>본문</div>
        </Modal>
      </div> */}
      {/* <Responsive /> */}
      <KakaoMap />
    </>
  );
}

export default App;
