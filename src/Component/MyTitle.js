function MyTitle(props) {
  return (
    
      <h1 style={{ textAlign: "center", color: props.myColor,marginTop: '60px' }}>
        {props.head}
      </h1>
   
  );
}
export default MyTitle;
