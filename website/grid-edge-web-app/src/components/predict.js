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
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose File')
    const [uploaded, setUploaded] = useState(false);
    const [output, setOutput] = useState(null);

    const delay = ms => new Promise(res => setTimeout(res, ms));

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
    const handleFileChange = e => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }

    const getLinearOutput = async() => {
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

        const result = await Storage.get('predictions/' + fileName.slice(0,-4) + '_predictions.csv',
        {
            contentType: 'text/csv',
            level: 'public/',
            download: 'true'
        })
        var linebreak = document.createElement("br");
    
        // document.getElementById("linear").appendChild(linebreak)
        // document.getElementById("predict").appendChild(linebreak)
 
        var a = document.createElement('a') 
        a.id = "linear_btn"
        // var a = document.createElement('a')
        a.classList.add("btn")
        a.classList.add("btn-xl")
        a.classList.add("btn-outline-light")
        a.classList.add("text-center")
        a.classList.add("my-auto")
    
        var link_text = document.createTextNode('Download Predictions for ' + fileName)
        a.appendChild(link_text)
        a.title = 'Download'
        a.href = result
        // div.appendChild(a)
        var linear_btn = document.getElementById("linear_btn");
        
        if(linear_btn) {
            linear_btn.parentNode.replaceChild(a, linear_btn)
        } else {
        //use when changing to download button when results are ready
            document.getElementById("linear").appendChild(a)
        }
    } 
    
    const getNNOutput = async() => {
        const result = await Storage.get('predictions/' + fileName.slice(0,-4) + '_predictions.csv',
        {
            contentType: 'text/csv',
            level: 'public/',
            download: 'true'
        })
        var linebreak = document.createElement("br");
    
        // document.getElementById("nn").appendChild(linebreak)
        // document.getElementById("predict").appendChild(linebreak)
 
        var a = document.createElement('a') 
        a.id = "nn_btn"
        // var a = document.createElement('a')
        a.classList.add("btn")
        a.classList.add("btn-xl")
        a.classList.add("btn-outline-light")
        a.classList.add("text-center")
        a.classList.add("my-auto")
    
        var link_text = document.createTextNode('Download Predictions for ' + fileName)
        a.appendChild(link_text)
        a.title = 'Download'
        a.href = result
        // div.appendChild(a)
        var nn_btn = document.getElementById("nn_btn");
        
        if(nn_btn) {
            nn_btn.parentNode.replaceChild(a, nn_btn)
        } else {
        //use when changing to download button when results are ready
            document.getElementById("nn").appendChild(a)
        }
    } 
    const getInverseOutput = async() => {
        const result = await Storage.get('predictions/' + fileName.slice(0,-4) + '_predictions.csv',
        {
            contentType: 'text/csv',
            level: 'public/',
            download: 'true'
        })
        var linebreak = document.createElement("br");
    
        // document.getElementById("inverse").appendChild(linebreak)
        // document.getElementById("predict").appendChild(linebreak)
 
        var a = document.createElement('a') 
        a.id = "inverse_btn"
        // var a = document.createElement('a')
        a.classList.add("btn")
        a.classList.add("btn-xl")
        a.classList.add("btn-outline-light")
        a.classList.add("text-center")
        a.classList.add("my-auto")
    
        var link_text = document.createTextNode('Download Predictions for ' + fileName)
        a.appendChild(link_text)
        a.title = 'Download'
        a.href = result
        // div.appendChild(a)
        var inverse_btn = document.getElementById("inverse_btn");
        
        if(inverse_btn) {
            inverse_btn.parentNode.replaceChild(a, inverse_btn)
        } else {
        //use when changing to download button when results are ready
            document.getElementById("inverse").appendChild(a)
        }
    }  


    // render() {
        return (
        <section class="text-center page-section bg-primary text-white mb-0" id="predict">
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
                <h3 class="text-uppercase text-center mb-4">Predict DPMU Data</h3>
                <div class="row">
                    <p class=" text-lg-center lead"> Input your smart meter data to get predicted DPMU voltage measurements </p>
                    {/* <div class="divider-custom divider-light"> */}
                        {/* <div class="divider-custom-line"></div> */}
                    {/* </div> */}
                </div>

                <p class=" text-lg-center lead"> The input data should match the following format in a csv file: </p>

                <p class=" text-lg-center lead"> P = real power; Q = reactive power</p>

                <img src="assets/img/input_format.png"/> 
                {/* <img class="img-fluid" src="assets/img/visuals/nn/house15.jpeg" alt="..." /> */}
                <div>
                    <div class="divider-custom divider-light"></div>
                </div>

                <h4 class="text-uppercase text-center fst-italic mb-4">Linear Model</h4>



                <div id="linear" class="text-center mt-4">
                    <div id="block1" class="container">
                        <a class="btn btn-outline-light">

                            <input type="file" onChange={(e) => {
                                handleFileChange(e)}} />
                            <i class="fas fa-bolt me-2"></i>

                            <a id="btn1" class="btn btn-lg btn-light" onClick={async () => {
                                const storageResult = await Storage.put('uploads/' + fileName, file, {
                                level: 'public',
                                type: 'text/csv',
                                tagging: 'linear=true&Neural=false'
                                })
                                setUploaded(true)
                                console.log(storageResult)
                                console.log(fileName)
                                // console.log("linear model check is: " + option1)
                                var linebreak = document.createElement("br");
                                
                                var p = document.createElement("p")
                                var t = document.createTextNode("Predicting DPMU data for " + fileName + "...")
                                p.classList.add('text-center')
                                p.classList.add('text-white')
                                p.classList.add('lead')
                                p.appendChild(t)
                                
                                // document.getElementById("block1").appendChild(linebreak)
                                document.getElementById("block1").appendChild(p)

                                await delay(20000);

                                document.getElementById("block1").removeChild(p)
                                // document.getElementById("block1").removeChild(linebreak)

                                getLinearOutput()

                            }}>
                                Predict 
                            </a>
                    
                        </a>
                    </div>
                    <div class="divider-custom divider-light"></div>
        
                    

                    {/* <div>
                        {uploaded
                        ? <div>Data successfully uploaded</div>
                        : <div></div>}
                    </div> */}

                    {/* <div>
                        {output 
                        // ? <h5>Predictions ready.</h5>
                        ?<a class="btn btn-xl btn-outline-light" href={output}>Download Predictions</a>
                        : <h5>No predictions yet.</h5>
                        } 
                    </div> */}

                    {/* <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label class="form-check-label" for="inlineCheckbox1">Linear Model</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                        <label class="form-check-label" for="inlineCheckbox2">Neural Network</label>
                    </div> */}
                </div>

                {/* <Form>
                {['checkbox', 'radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    <Form.Check
                        inline
                        disabled
                        label="3 (disabled)"
                        type={type}
                        id={`inline-${type}-3`}
                    />
                    </div>
                ))}
                </Form> */}


                <div id="nn" class="text-center mt-4">
                    <h4 class="text-uppercase text-center fst-italic mb-4">Neural Network</h4>

                    <div id="block2" class="container">
                        <a class="btn btn-outline-light">

                            <input type="file" onChange={(e) => {
                                handleFileChange(e)}} />
                            <i class="fas fa-bolt me-2"></i>

                            <a id="btn1" class="btn btn-lg btn-light" onClick={async () => {
                                const storageResult = await Storage.put('uploads/' + fileName, file, {
                                level: 'public',
                                type: 'text/csv',
                                tagging: 'linear=true&Neural=false'
                                })
                                setUploaded(true)
                                console.log(storageResult)
                                console.log(fileName)

                                var linebreak = document.createElement("br");
                                
                                var p = document.createElement("p")
                                var t = document.createTextNode("Predicting DPMU data for " + fileName + "...")
                                p.classList.add('text-center')
                                p.classList.add('text-white')
                                p.classList.add('lead')
                                p.appendChild(t)
                                
                                // document.getElementById("block2").appendChild(linebreak)
                                document.getElementById("block2").appendChild(p)

                                await delay(20000);

                                document.getElementById("block2").removeChild(p)
                                // document.getElementById("block2").removeChild(linebreak)

                                getNNOutput()

                            }}>
                                Predict 
                            </a>
                    
                        </a>
                    </div>
                    <div class="divider-custom divider-light"></div>

                </div>


                {/* Space between forward and inverse  */}
                <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                </div>
                <div class="divider-custom divider-light"></div> 

                <h3 class="text-uppercase text-center mb-4">Predict Household Power Consumption</h3>
                <div class="row">
                    <p class=" text-lg-center lead"> Input DPMU data to get predicted power measurements for homes</p>
                    {/* <div class="divider-custom divider-light">
                    </div> */}
                </div>

                <p class=" text-lg-center lead"> The input data should match the following format in a csv file: </p>
                <img src="assets/img/input_format.png"/>  
                <br/><br/>

                <div id="inverse" class="text-center mt-4">

                    <h4 class="text-uppercase text-center fst-italic mb-4">Inverse Neural Net</h4>

                    <div id="block3" class="container">
                        <a class="btn btn-outline-light">

                            <input type="file" onChange={(e) => {
                                handleFileChange(e)}} />
                            <i class="fas fa-bolt me-2"></i>

                            <a id="btn1" class="btn btn-lg btn-light" onClick={async () => {
                                const storageResult = await Storage.put('uploads/' + fileName, file, {
                                level: 'public',
                                type: 'text/csv',
                                tagging: 'linear=true&Neural=false'
                                })
                                setUploaded(true)
                                console.log(storageResult)
                                console.log(fileName)

                                var linebreak = document.createElement("br");
                                
                                var p = document.createElement("p")
                                var t = document.createTextNode("Predicting household power consumption for " + fileName + "...")
                                p.classList.add('text-center')
                                p.classList.add('text-white')
                                p.classList.add('lead')
                                p.appendChild(t)
                                
                                // document.getElementById("block2").appendChild(linebreak)
                                document.getElementById("block3").appendChild(p)

                                await delay(20000);

                                document.getElementById("block3").removeChild(p)
                                // document.getElementById("block2").removeChild(linebreak)

                                getInverseOutput()

                            }}>
                                Predict 
                            </a>
                    
                        </a>
                    </div>
                    <div class="divider-custom divider-light"></div>
                    
                </div>

                {/* Space at end */}
                <div>

                    <div class="divider-custom divider-light"></div>
                    {/* <div class="divider-custom divider-light"></div> */}

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