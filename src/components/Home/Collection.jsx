import { useSelector } from "react-redux";

export default function Collection() {
  const { collections } = useSelector((state) => state.collection);
  return (
    <>
      <div className="collection">
        <div className="collection-headers">
          <div className="collection-header">
            <div className="collection-header-left">
              <span className="collection-title">COLLECTION</span>
            </div>
            <div className="collection-header-right">
              <span className="collection-title-price">FLOOR PRICE </span>
              <span className="collection-title-volume">VOLUME </span>
            </div>
          </div>
          <div className="collection-header">
            <div className="collection-header-left">
              <span className="collection-title">COLLECTION</span>
            </div>
            <div className="collection-header-right">
              <span className="collection-title-price">FLOOR PRICE </span>
              <span className="collection-title-volume">VOLUME </span>
            </div>
          </div>
        </div>
        <div className="collection-bars">
          <div className="collection-container">
            {collections.map((collection, index) => {
              if (collection.id <= 5) {
                return (
                  <div key={collection.id} className="collection-card">
                    <div className="collection-card-left">
                      <span className="collection-card-rank">
                        {collection.id}
                      </span>
                      <img
                        className="collection-card-img"
                        src={collection.imgSrc}
                      ></img>
                      <span className="collection-card-name">
                        {collection.name}
                        {collection.isVerified ? (
                          <i className="fa-regular fa-circle-check verified"></i>
                        ) : null}
                      </span>
                    </div>
                    <div className="collection-card-right">
                      <span className="collection-card-floor-price">
                        {collection.floorPrice} {collection.valueBy}
                      </span>
                      <span className="collection-card-volume">
                        {collection.volume} {collection.valueBy}
                      </span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="collection-container">
            {collections.map((collection, index) => {
              if (collection.id >= 6) {
                return (
                  <div key={collection.id} className="collection-card">
                    <div className="collection-card-left">
                      <span className="collection-card-rank">
                        {collection.id}
                      </span>
                      <img
                        className="collection-card-img"
                        src={collection.imgSrc}
                      ></img>
                      <span className="collection-card-name">
                        {collection.name}
                        {collection.isVerified ? (
                          <i className="fa-regular fa-circle-check verified"></i>
                        ) : null}
                      </span>
                    </div>
                    <div className="collection-card-right">
                      <span className="collection-card-floor-price">
                        {collection.floorPrice} {collection.valueBy}
                      </span>
                      <span className="collection-card-volume">
                        {collection.volume} {collection.valueBy}
                      </span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
