import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../../css/Explore.scss";

export default function Explore() {
  const ExploreItems = useSelector((data) => data.explore.items);
  console.log(ExploreItems);
  return (
    <>
      <div className="explore">
        <div className="explore-title">
          <h3>Explore collections</h3>
        </div>
        <div className="explore-items">
          <div className="explore-items-title">
            <a className="active-explore-items-title" href="#">
              Trending
            </a>
            <a href="#">Top</a>
            <a href="#">Art</a>
            <a href="#">Collectibles</a>
            <a href="#">Domain Names</a>
            <a href="#">Music</a>
            <a href="#">Photography</a>
            <a href="#">Sports</a>
            <a href="#">Trading Cards</a>
            <a href="#">Utility</a>
            <a href="#">Virtual Worlds</a>
          </div>
          <div className="explore-items-container">
            {ExploreItems.map((item, index) => {
              return (
                <div key={item.id} className="explore-item">
                  <div className="item-top">
                    <div className="explore-item-bg">
                      <img src={item.background}></img>
                    </div>
                  </div>
                  <div className="item-bot">
                    <div className="explore-item-img">
                      <img src={item.image}></img>
                    </div>
                    <div className="explore-item-title">
                      <span>{item.name}</span>
                      {item.isVerified ? (
                        <i className="fa-solid fa-check"></i>
                      ) : null}
                      {console.log(item)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
