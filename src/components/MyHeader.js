const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const MyHeader = ({ headText, leftChild, rightChild }) => {
  const heartImg = process.env.PUBLIC_URL + `/assets/heartImg.png`;

  return (
    <header>
      {/* <div className="heartImgContainer">
        <div className="heartImg">
          <img src={heartImg} />
        </div>
        <div className="rak">락윤이와 윤주의 사랑 일기</div>
        <div className="heartImg">
          <img src={heartImg} />
        </div>
      </div> */}
      <div className="headerContent">
        <div className="head_btn_left">{leftChild}</div>
        <div className="head_text">{headText}</div>
        <div className="head_btn_right">{rightChild}</div>
      </div>
    </header>
  );
};
export default MyHeader;
