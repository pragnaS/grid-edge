import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <section class="page-section bg-secondary text-white mb-0" id="about">
            <div class="container">
                {/* About Section Heading  */}
                <h2 class="page-section-heading text-center text-uppercase mb-0">Project description</h2>
                {/* Icon Divider */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-bolt"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* About Section Content */}
                <div class="row">
                    <div class="col-lg-4 ms-auto"><p class="lead">Power distribution systems are witnessing a rapid transformation with an increasing deployment 
                        of distributed energy resources (e.g., wind turbines, solar panels) in electrical grids. One key problem experts are facing in the 
                        power industry is determining how to utilize various amounts of data in order to enhance the 
                        modeling and monitoring of these resources. </p></div>
                    <div class="col-lg-4 me-auto"><p class="lead">The goal of this project is to develop a power
                        distribution model based on energy consumption data across an Austin-wide electrical grid system.
                        Our power distribution model takes in smart meter measurements from individual homes and 
                        outputs DPMU data, which are real-time power measurements that describe the full topology of 
                        a power distribution network. </p></div>
                </div>

            </div>
        </section>
        )
    }
}
export default About;