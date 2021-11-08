import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <section class="page-section bg-secondary text-white mb-0" id="about">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase mb-0">The team</h2>
                {/* Icon Divider */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-bolt"></i></div>
                    <div class="divider-custom-line"></div>
                </div>           


                <div class="row justify-content-center">

                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="img-with-text" class="text-center">
                            <img class="circle" src="assets/img/faces/swetha.jpeg" alt="swetha" />
                            <br/> <br/>
                            <h6 class="lead">Swetha Berana</h6>
                            <h6 class="lead" class="fst-italic">ML Team</h6>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="img-with-text" class="text-center">
                            <img class="circle" src="assets/img/faces/anissa.jpeg" alt="anissa" />
                            <br/> <br/>
                            <h6 class="lead">Anissa Chan</h6>
                            <h6 class="lead" class="fst-italic">ML Team</h6>
                        </div>
                    </div>



                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="img-with-text" class="text-center">
                            <img class="circle" src="assets/img/faces/simoni.jpg" alt="simoni" />
                            <br/> <br/>
                            <h6 class="lead">Simoni Maniar</h6>
                            <h6 class="lead" class="fst-italic"> ML Team</h6>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="img-with-text" class="text-center">
                            <img class="circle" src="assets/img/faces/megan.jpg" alt="megan" />
                            <br/> <br/>
                            <h6 class="lead" > Megan Nguyen</h6>
                            <h6 class="lead" class="fst-italic"> Website Team</h6>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="img-with-text" class="text-center">
                            <img class="circle" src="assets/img/faces/pragna.jpeg" alt="pragna" />
                            <br/> <br/>
                            <h6 class="lead">Pragna Subrahmanya</h6>
                            <h6 class="lead" class="fst-italic">ML Team</h6>
                        </div>
                    </div>


                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="img-with-text" class="text-center">
                            <img class="circle" src="assets/img/faces/lucy.jpg" alt="lucy" />
                            <br/> <br/>
                            <h6 class="lead" > Lucy Zheng</h6>
                            <h6 class="lead" class="fst-italic"> Website Team</h6>
                        </div>
                    </div>

                </div>

                <div class="text-center">
                    {/* <h6 class="lead"> 
                        The project was developed and overseen by <a href="https://sites.utexas.edu/haozhu/"> Dr. Hao Zhu</a>.
                    </h6> */}

                    <div class="img-with-text" class="text-center">
                            <img class="circle" src="assets/img/faces/zhu.jpg" alt="zhu" />
                            <br/> <br/>
                            <h6 class="lead"> 
                                The project was developed and overseen by <a href="https://sites.utexas.edu/haozhu/"> Dr. Hao Zhu</a>.
                            </h6>
                            {/* <h6 class="lead" > Dr. Hao Zhu</h6> */}
                            {/* <h6 class="lead" class="fst-italic"> Website Team</h6> */}
                    </div>

                </div>

                <br/> <br/>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    {/* <div class="divider-custom-icon"><i class="fas fa-bolt"></i></div> */}
                    {/* <div class="divider-custom-line"></div> */}
                </div>           


                <br/><br/>

                <br/>
                {/* About Section Heading]  */}
                <h2 class="page-section-heading text-center text-uppercase mb-0">Project description</h2>
                {/* Icon Divider */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-bolt"></i></div>
                    <div class="divider-custom-line"></div>
                </div>

                {/* About Section Content */}

                <br/>

                <div class="row">

                    <br/>
                    <div class="col-lg-4 ms-auto"><p class="lead">Power distribution systems are witnessing a rapid transformation with an increasing deployment 
                        of distributed energy resources (e.g., wind turbines, solar panels) in electrical grids. One key problem experts are facing in the 
                        power industry is determining how to utilize various amounts of data in order to enhance the 
                        modeling and monitoring of these resources. </p></div>
                    <div class="col-lg-4 me-auto"><p class="lead">The goal of this project is to develop power
                        distribution models based on energy consumption data across an Austin-wide electrical grid system.
                        Our power distribution models take in smart meter measurements from individual homes and 
                        predict DPMU data, which are real-time power measurements that describe the full topology of 
                        a power distribution network. 
                        </p></div>
                </div>





            </div>
        </section>
        )
    }
}
export default About;