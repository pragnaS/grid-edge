import React from 'react';
import { Storage } from 'aws-amplify';

// Modified code from:
// https://aws.amazon.com/blogs/mobile/use-an-existing-s3-bucket-for-your-amplify-project/
// haven't checked if uploading works cuz it depends on UI, but credentials should be good
class App extends React.Component {
  constructor(){
    super();
    this.file = null;
    this.setFile = null;
    this.uploaded = false;
    this.setUploaded = null;
  }

  render() {
    return (
        <div className="App">
          <input type="file" onChange={(e) => this.setFile(e.target.files[0])} />
          <button onClick={async () => {
            const storageResult = await Storage.put('puppy.png', this.file, {
              level: 'public',
              type: 'image/png'
            })
            this.setUploaded(true)
            console.log(storageResult);
          }}>Upload and check if there's a dog!</button>
    
          <div>
            {this.uploaded
              ? <div>Your image is uploaded!</div>
              : <div>Upload a photo to get started</div>}
          </div>
        </div>
    );
  }
  
}

export default App;
