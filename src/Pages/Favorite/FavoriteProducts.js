import { useDispatch, useSelector } from "react-redux";

import MyTitle from "../../Component/MyTitle";
import MyCard from "../../Component/MyCard";

function Favoritelist() {
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <br></br>
      <MyTitle head="Favorites List" myColor="red" />
      <br></br>
      <div className="container">
        <div className="row gap-3">
          {favorites.map((fav, index) => {
            return (
              <div className=" col-md-4 " key={index}>
                <MyCard
                  width="18rem"
                  image={fav.image}
                  name={fav.title}
                  //   url={`/details/${fav.id}`}
                  btnName="View Details"
                  movie={fav}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Favoritelist;
