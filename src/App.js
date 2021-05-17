import React from 'react';
import './App.css';



const FlexboxPage = () => (
  <>

      {/* <input className='input-with-hint'
        // value={text}
        // onChange={e => setText(e.target.value)} 
      /> */}

      <form className="formCenter">
        <input
          type="text"
        />
      </form>

    <div class="container">

    <div className="d-flex justify-content-start">
      <div button onClick={() => {'1'}}>1</div>
      <div button onClick={() => {'2'}}>2</div>
      <div button onClick={() => {'3'}}>3</div>
      <div button onClick={() => {'4'}}>4</div>
      <div button onClick={() => {'5'}}>5</div>
    </div>

    <div className="d-flex justify-content-center1">
      <div button onClick={() => {'6'}}>6</div>
      <div button onClick={() => {'7'}}>7</div>
      <div button onClick={() => {'8'}}>8</div>
      <div button onClick={() => {'9'}}>9</div>
      <div button onClick={() => {'0'}}>0</div>
    </div>

    <div className="d-flex justify-content-center2">
      <div button onClick={() => {'+'}}>+</div>
      <div button onClick={() => {'-'}}>-</div>
      <div button onClick={() => {'*'}}>*</div>
      <div button onClick={() => {'/'}}>/</div>
    </div>

    <div className="d-flex justify-content-end1">
      <div button onClick={() => {'='}}>=</div>
    </div>

    <div className="d-flex justify-content-end2">
      <div button onClick={() => {''}}>Clear</div>
    </div>
    </div>


  </>
);



export default FlexboxPage;




// function App() {
// import React from 'react';

// export default function App() {
//   return (
//     <>
//       <div className="align-self-start">Aligned flex item</div>
//       <div className="align-self-end">Aligned flex item</div>
//       <div className="align-self-center">Aligned flex item</div>
//       <div className="align-self-baseline">Aligned flex item</div>
//       <div className="align-self-stretch">Aligned flex item</div>
//     </>
//   );
// }



//   // return (
//   //   <div className="App">
//   //     <div className="app-title">
//   //       <h1> My Calculator</h1>
//   //     </div>
//   //     <form>
//   //           {/* <input type="text" id="result" value={currentSum}  readOnly />   
//   //           <input type="text" id="num" placeholder="enter a number" /> */}
//   //           <button onClick={Add}>Add</button>
//   //           <button onClick={Clear}>Clear</button>
//   //     </form>
//   //   </div>
//   // );
// }

// export default App;
