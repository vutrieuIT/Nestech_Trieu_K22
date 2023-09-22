function MyCondition(props){
    return (
    <>
      <h1>Garage</h1>
      {
          props.check 
          && 
        <h2>
          You have check {props.check} cars in your garage.
        </h2> 
      }
    </>
  );
}

export default MyCondition;

