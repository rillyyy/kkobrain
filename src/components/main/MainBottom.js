import { useEffect, useState } from "react";
import { CardNews } from "../card/CardNews";

export const MainBottom = () => {
  // News 데이터 관리
  const [newsList, setNewsList] = useState([]);
  // Crew 데이터 관리
  const [crewNewsList, setCrewNewsList] = useState([]);

  const getNewsList = () => {
    // 1. json 호출 하고 성공하면
    const jsonUrl = "./api/news.json";
    fetch(jsonUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setNewsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCrewNewsList = () => {
    // Crew 데이터 출력
    const jsonUrl = "./api/crews.json";
    fetch(jsonUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setCrewNewsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCardList = () => {
    const jsonUrl = "./api/cards.json";
    fetch(jsonUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNewsList();
    getCrewNewsList();
    getCardList();
  }, []);

  return (
    <section className="main-bottom">
      <div className="main-contents">
        <div className="content-wrap">
          <h3>NEW. 따끈따끈 새로 나온 글 🔥</h3>
          <div className="content-list news-list">
            {newsList.map((item) => (
              <CardNews key={item.id} item={item} path={"./images"} />
            ))}
          </div>
        </div>
        <div className="content-ad">
          <a href="#"></a>
        </div>
        <div className="content-wrap">
          <h3>Editor’s Pick. 카카오브레인 크루를 소개합니다! 🏃🏻‍♀️🏃‍♂️🏃🏽</h3>
          <div className="content-list crew-list">
            {crewNewsList.map((item) => (
              <CardNews key={item.id} item={item} path={"./images"} />
            ))}
          </div>
          <div className="bt-wrap">
            <button className="bt">더보기</button>
          </div>
        </div>
      </div>

      <div className="main-cards">
        <div className="main-cards-wrap">
          <h3>폴더 📁</h3>
          <div className="main-cards-slide">
            {/* <!-- Start 카드 슬라이드 --> */}
            <div className="swiper swCards">
              <div className="swiper-wrapper">{/* <!-- JS Json 연동 --> */}</div>
            </div>
            {/* <!-- End 카드 슬라이드 --> */}
          </div>

          <div className="bt-wrap">
            <a href="#" className="bt">
              폴더전체보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};