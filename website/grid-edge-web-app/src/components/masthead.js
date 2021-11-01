import React, { Component } from 'react';

export class Masthead extends Component {
    render() {
        return (
            <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                
                <a href='https://pngtree.com/so/Vector'><img class="masthead-avatar mb-20" src="assets/img/panel.png" alt="..." /> </a>
                {/* <!-- Masthead Heading--> */}
                <h1 class="masthead-heading text-uppercase mb-0">Predicting Power Distribution Networks On
                    The Grid Edge
                </h1>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-bolt"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                {/* <p class="masthead-subheading font-weight-light mb-0">Swetha Berana -
                    Anissa Chan - 
                    Simoni Maniar - 
                    Megan Nguyen - 
                    Pragna Subrahmanya - 
                    Lucy Zheng
                    </p> */}
                    <h1 > 

                    2021 Senior Design Project
                    </h1>

                <div>

                    <div class="divider-custom divider-light">
                    </div>

                </div>
            </div>
        </header>

        )
    }
}
export default Masthead;