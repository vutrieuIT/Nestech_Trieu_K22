function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function MyList(props) {
  const cars = props.list;
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

export default MyList;
