function MyTitle(props) {
  return (
    <>
      <h1 style={{ textAlign: "center", color: props.myColor }}>
        {props.head}
      </h1>
    </>
  );
}
export default MyTitle;
