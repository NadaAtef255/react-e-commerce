import { useDispatch, useSelector } from "react-redux";

import MyTitle from "../../Component/MyTitle";
import MyCard from "../../Component/Cart/MyCard";

function Favoritelist() {
  const favorites = useSelector((state) => state.favorite.favorites);
  console.log(favorites);

  const dispatch = useDispatch();

  return (
    <div>
      {favorites && (
        <>
          <br></br>
          <MyTitle head="Favorites List" myColor="red" />
          <br></br>
          <div className="container">
            <div className="row">
              {favorites.map((fav, index) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                    <MyCard
                      width="18rem"
                      image={fav.image}
                      name={fav.title}
                      movie={fav}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Favoritelist;
