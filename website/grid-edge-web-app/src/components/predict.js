import React, { Component } from 'react';
import { useEffect, useState } from 'react'
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
    const [output, setOutput] = useState(null);


    // Storage.configure({
    //     customPrefix: {
    //         public: 'public/',
    //     },
    //     // ...
    // })

    // useEffect(()=> {
    //     if (!output) {
    //         getOutput()
    //     }
    // }, [])

    // useEffect(()=> {
    //     async function getResults(){
    //         const result = await Storage.get('predictions/inputs6_predictions.csv', 
    //         {
    //             contentType: 'text/csv',
    //             level: 'public/',
    //             download: 'true' 
    //         })
    //         setOutput(result)
    //     }
    //     getResults()
    // }, [])

    const getOutput = async() => {
        // const files = await Storage.list('predictions/')
        // console.log(files)
        // console.log(typeof(files))
        // // if("predictions/inputs6_predictions.csv" in files) {
        // if(files.hasOwnProperty('predictions/inputs6_predictions.csv')) {
        //     const result = await Storage.get('predictions/inputs6_predictions.csv',
        //     {
        //         contentType: 'text/csv',
        //         level: 'public/',
        //         download: 'true'
        //     })
        //     setOutput(result)
        //     console.log('true')
        // }else {
        //     console.log('file does not exist')
        // }
        // setOutput(result)

        const result = await Storage.get('predictions/inputs6_predictions.csv',
        {
            contentType: 'text/csv',
            level: 'public/',
            download: 'true'
        })
        var linebreak = document.createElement("br");
    
        document.getElementById("upload").appendChild(linebreak)
        document.getElementById("upload").appendChild(linebreak)
 
        var a = document.createElement('a') 
        a.id = "firstbtn"
        // var a = document.createElement('a')
        a.classList.add("btn")
        a.classList.add("btn-xl")
        a.classList.add("btn-outline-light")
        a.classList.add("text-center")
        a.classList.add("my-auto")
    
        var link_text = document.createTextNode('Download Results')
        a.appendChild(link_text)
        a.title = 'Download'
        a.href = result
        // div.appendChild(a)
        var firstbtn = document.getElementById("firstbtn");
        
        if(firstbtn) {
            firstbtn.parentNode.replaceChild(a, firstbtn)
        } else {
        //use when changing to download button when results are ready
            document.getElementById("upload").appendChild(a)
        }
    } 
    

    
    // render() {
        return (
        <section class="text-center page-section bg-primary text-white mb-0" id="upload">
            <div>
                <div class="divider-custom divider-light"></div>
            </div>
            <div  class="container">
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
                            const storageResult = await Storage.put('uploads/inputs6.csv', file, {
                            level: 'public',
                            type: 'text/csv'
                            })
                            setUploaded(true)
                            console.log(storageResult)
                            getOutput()

                        }}>
                            
                            Upload Smart Meter Data
                            
                        </a>
                
                    </a>
                    

                    <div>
                        {uploaded
                        ? <div>Data successfully uploaded</div>
                        : <div></div>}
                    </div>

                    {/* <div>
                        {output 
                        // ? <h5>Predictions ready.</h5>
                        ?<a class="btn btn-xl btn-outline-light" href={output}>Download Predictions</a>
                        : <h5>No predictions yet.</h5>
                        } 
                    </div> */}

                </div>


                <div>

                    <div class="divider-custom divider-light">
                    </div>
                    <div class="divider-custom divider-light">
                    </div>

                </div>

            </div>

            {/* <div class="container">
                <h3 class="text-center text-uppercase text-white">Prediction Results</h3>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-bolt"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="text-center">
                    <div class="container"  id="predict">
                        <a id ="download" class="btn btn-xl btn-outline-light" onClick={async () => {

                            
                            const result = await Storage.get('predictions/inputs1_predictions.csv',
                            {
                                contentType: 'text/csv',
                                level: 'public/',
                                download: 'true'
                            })
                            .then(setOutput(true))
                            .catch(err => {
                                console.log(err)
                                setOutput(false)
                            })

                            var a = document.createElement('a')
                            a.classList.add("btn")
                            a.classList.add("btn-xl")
                            a.classList.add("btn-outline-light")
                            a.classList.add("text-center")
                            a.classList.add("my-auto")

          
                            var link_text = document.createTextNode('Download Results')
                            a.appendChild(link_text)
                            a.title = 'Download'
                            a.href = result
                            var firstbtn = document.getElementById("download");
                            
                            firstbtn.parentNode.replaceChild(a, firstbtn)

                            //use when changing to download button when results are ready
                            // document.getElementById("download").appendChild(a)
                            
                        }}>
                            Download Results
                        </a>
                    </div>
                    <div class="divider-custom divider-light"></div>
                </div>
            </div> */}
        </section>
        )
    // }
}


export default Predict;