import React, { Component } from 'react';

export class Results extends Component {
    render() {
        return(
            <section class="page-section portfolio" id="results">
                 
            <div class="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Results</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-bolt"></i></div>
                    <div class="divider-custom-line"></div>
                </div>

                {/* <div class="container">
                    <div class="ms-auto"><h6 class="lead">This project successfully answered 2 questions: </h6></div>
                    <br></br>

                        <div class="ms-auto"><h6 class="lead">1) Given power consumption measurements from any number of homes, 
                    what does the power distribution network look like?</h6></div>
                        <br></br>

                        <div class="ms-auto"><h6 class="lead">
                    2) Given a power distribution network, what is the power consumption for each node in the network?</h6></div>
                        <br></br>

                        
                </div> */}
                

                {/* <div class="divider-custom ">
                        <div class="divider-custom-line"></div>
                        <br></br>
                </div> */}



                <div class="container">
                        <h6 class="lead">Our team created 3 final models. The linear and neural network models both
                        predict DPMU data given SmartMeter power measurements from homes. The inverse neural network predicts household power consumption 
                        given DPMU data. </h6>
                        <br></br>
                    <h3 class="text-center text-uppercase text-secondary">Mean Squared Error</h3>
                    <div class="divider-custom "></div>
                </div>

                <h6 class="lead center">These were the MSE values for the final models: </h6>
                <div class="divider-custom "></div>

                <div class="row"> 
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase text-center fst-italic mb-4">Linear Model</h4>
                        <h3 class="text-primary text-center">
                            1.24e-6
                        </h3>
                    </div> 
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase text-center fst-italic mb-4">Neural Network</h4>
                        <h3 class="text-primary text-center ">
                            4.72e-7
                        </h3>
                    </div>  
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase text-center fst-italic mb-4">Inverse Neural Net</h4>
                        <h3 class="text-primary text-center ">
                            5.73e-7
                        </h3>
                    </div> 
                </div>

                <div class="divider-custom ">
                        <div class="divider-custom-line"></div>
                        <br></br>
                </div>

                <h3 class="text-center text-uppercase text-secondary">Predictions Visualized</h3>
                <div class="divider-custom "></div>

                <h6 class="lead">These charts show the neural network's DPMU predictions vs actual DPMU voltage values 
                in a 4 month time span for 9 houses in a power network. </h6>
                <div class="divider-custom "></div>

                {/* <!-- Portfolio Grid Items--> */}
                <div class="row justify-content-center">
                    {/* <!-- Portfolio Item 1--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="mx-auto">
                            <div class="align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img class="img-fluid" src="assets/img/visuals/nn/house3.jpeg" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 2--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="mx-auto">
                            <div class="align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img class="img-fluid" src="assets/img/visuals/nn/house4.jpeg" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 3--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="mx-auto">
                            <div class="align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img class="img-fluid" src="assets/img/visuals/nn/house8.jpeg" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 4--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="mx-auto">
                            <div class="align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img class="img-fluid" src="assets/img/visuals/nn/house9.jpeg" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 5--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="mx-auto">
                            <div class="align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img class="img-fluid" src="assets/img/visuals/nn/house13.jpeg" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 6--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="mx-auto">
                            <div class="align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img class="img-fluid" src="assets/img/visuals/nn/house14.jpeg" alt="..." />
                        </div>
                    </div>
                   {/* <!-- Portfolio Item 1--> */}
                   <div class="col-md-6 col-lg-4 mb-5">
                        <div class="mx-auto">
                            <div class="align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img class="img-fluid" src="assets/img/visuals/nn/house15.jpeg" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 2--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="mx-auto">
                            <div class="align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img class="img-fluid" src="assets/img/visuals/nn/house17.jpeg" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 3--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="mx-auto">
                            <div class="align-items-center justify-content-center h-100 w-100">
                            </div>
                            <img class="img-fluid" src="assets/img/visuals/nn/house18.jpeg" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
        )
        
    }
}
export default Results;