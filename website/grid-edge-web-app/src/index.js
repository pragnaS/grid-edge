import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './app'
import './css/styles.css';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)
ReactDOM.render(<App />, document.getElementById('root'))
// import React from 'react';
// import { Storage } from 'aws-amplify';

// Modified code from:
// https://aws.amazon.com/blogs/mobile/use-an-existing-s3-bucket-for-your-amplify-project/
// haven't checked if uploading works cuz it depends on UI, but credentials should be good
// class App extends React.Component {
//   constructor(){
//     super();
//     this.file = null;
//     this.setFile = null;
//     this.uploaded = false;
//     this.setUploaded = null;
//   }

//   render() {
//     return (
//         <div className="App">
//           <input type="file" onChange={(e) => this.setFile(e.target.files[0])} />
//           <button onClick={async () => {
//             const storageResult = await Storage.put('puppy.png', this.file, {
//               level: 'public',
//               type: 'image/png'
//             })
//             this.setUploaded(true)
//             console.log(storageResult);
//           }}>Upload and check if there's a dog!</button>
    
//           <div>
//             {this.uploaded
//               ? <div>Your image is uploaded!</div>
//               : <div>Upload a photo to get started</div>}
//           </div>
//         </div>
//     );
//   }
  
// }

// export default App;

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {/* TODO */}
//       </button>
//     );
//   }
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square />;
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// ========================================

// ReactDOM.render(
  // <Game />,
  // document.getElementById('root')
// );

