// function MyAlert() {
// import { render } from '@testing-library/react';
//   return alert(`message`);
// }

function MyEvent(props) {
    function func(){
        console.log("click");
        alert(props.message);
    }
  return (
      <button onClick={func}>event alert</button>
  )

}

export default MyEvent;
