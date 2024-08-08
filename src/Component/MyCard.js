function MyCard(props) {
  return (
    <div className="card" style={{ width: props.width }}>
      <img src={props.image} className="card-img-top" alt="..." />

      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {props.bio && <p className="card-text"> {props.bio} </p>}
        {props.price && <p className="card-text"> {props.price} </p>}
        {props.rate && (
          <p className="card-text"> vote average : {props.rate} </p>
        )}
        {props.url && (
          <Link to={props.url} className="btn btn-secondary">
            {props.btnName}
          </Link>
        )}
      </div>
    </div>
  );
}

export default MyCard;
