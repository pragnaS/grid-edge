import React, { Component } from 'react';
import { useState } from 'react'
import { Storage } from 'aws-amplify';


// export class Predict extends Component {

    //   constructor(){
    //     super();
    //     this.file = null;
    //     this.setFile = null;
    //     this.uploaded = false;
    //     this.setUploaded = null;
    // }

function Predict() {
    const [file, setFile] = useState();
    const [uploaded, setUploaded] = useState(false);
    const [output, setOutput] = useState(false);


    Storage.configure({
        customPrefix: {
            public: 'public/',
        },
        // ...
    })

    // render() {
        return (
            <section class="page-section bg-primary text-white mb-0" id="predict">
            <div>
                <div class="divider-custom divider-light"></div>
            </div>
            <div class="container">
                {/* <!-- About Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-white">Predict</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-bolt"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div class="row">
                    <p class=" text-lg-center lead"> Input your smart meter data to get predicted DPMU voltage measurements </p>
                </div>
                {/* <!-- About Section Button--> */}

                <div class="text-center mt-4">

                    <a class="btn btn-xl btn-outline-light">

                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <i class="fas fa-upload me-2"></i>

                    <a class="btn btn-lg btn-light" onClick={async () => {
                        const storageResult = await Storage.put('uploads/inputs.csv', file, {
                        level: 'public',
                        type: 'text/csv'
                        })
                        setUploaded(true)
                        console.log(storageResult);
                    }}>
                        
                        Upload Smart Meter Data
                        
                    </a>
                
                    </a>

                    <div>
                        {uploaded
                        ? <div>Data successfully uploaded</div>
                        : <div>Upload data to predict</div>}
                    </div>

                </div>



                <div>

                    <div class="divider-custom divider-light">
                    </div>
                    <div class="divider-custom divider-light">
                    </div>

                </div>

            </div>

            <div class="container">
                <h3 class="text-center text-uppercase text-white">Prediction Results</h3>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-bolt"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                

                
                <div class="text-center">
                    {/* {uploaded
                    ?  */}
                    
                
                    <div class="container" >
                        <a class="btn btn-lg btn-light" onClick={async () => {

                           
                            
                            // console.log(result)

                            // result.Body.text().then(string => {
                            //     console.log(string)
                            // })

                        }}>
                            Predict DPMU Data
                        
                            {/* <a href={result} target="_blank">Download</a> */}

                        </a>


                    </div>

                    <div class="container" >
                        <a class="btn btn-lg btn-light" onClick={async () => {

                            const result = await Storage.get('predictions/y.csv',
                            {
                                contentType: 'text/csv',
                                level: 'public/',
                                download: 'true'
                            })
                            .then(setOutput(true))
                            .catch(err => setOutput(false))
                            
                            // console.log(result)

                            // result.Body.text().then(string => {
                            //     console.log(string)
                            // })

                        }}>
                            Predict DPMU Data
                        
                            {/* <a href={result} target="_blank">Download</a> */}

                        </a>


                    </div>

                    <div class="divider-custom divider-light"></div>

                    
                    {output 
                    ? <p></p>
                    : <h5>No predictions yet.</h5>
                    }
                </div>
            </div>
        </section>
        )
    // }
}



export default Predict;