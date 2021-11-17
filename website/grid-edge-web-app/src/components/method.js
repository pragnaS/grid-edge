import React, { Component } from 'react';

export class Method extends Component {
    render() {
        return (
            <section class="page-section bg-white text-secondary mb-0" id="method">
            <div class="container">
                {/* About Section Heading  */}
                <h2 class="page-section-heading text-center text-uppercase mb-0">Method</h2>
                {/* Icon Divider */}
                <div class="divider-custom divider-black">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-bolt"></i></div>
                    <div class="divider-custom-line"></div>
                   

                </div>

                {/* About Section Content */}
                {/* <div class="row">
                    <div class="col-lg-4 ms-auto"><p class="lead">... </p></div>
                    <div class="col-lg-4 me-auto"><p class="lead">... 
                        </p></div>
                </div> */}

                {/* <div class="container"> */}
                    {/* <h3 class="text-center text-uppercase text-secondary">Power Network Topology and GridLAB-D</h3> */}
                    {/* <h4 class="text-center text-uppercase text-secondary lead">Using GridLAB-D to simulate power network</h4> */}

                    {/* <div class="divider-custom "></div> */}
                {/* </div> */}


                <div class="container">
                    <h3 class="text-center text-uppercase text-secondary">Power Network Topology and GridLAB-D</h3>
                    <br/>
                    <h6 class="lead">We used <a href="https://www.gridlabd.org/"> GridLAB-D</a> to produce DPMU data that helped train our models.
                    </h6>
                    <br/>
                    <h6 class="lead"> GridLAB-D is a simulation tool that is able to 
                    take in: 
                    </h6>

                    <h6 class="lead">1) time-series SmartMeter power inputs (<a href="https://www.pecanstreet.org/dataport/">provided by Pecan Street</a>) where each SmartMeter
                      represents a house</h6>
                    

                    <h6 class="lead">
                    2) a network topology that contains the distribution of the houses
                    and DPMU meters</h6>
                    <br></br>
       
                    {/* <h6 class="lead">The network topology used in our model is shown in diagram below. 
                    </h6> */}

                    <img class="center" src="assets/img/glm.png" alt="..." />
                    <h6 class="fst-italic text-center text-secondary lead">Network topology used to produce DPMU data for the models</h6>
                    <br/> 
                    
                    <h6 class="lead">As 
                    shown in the diagram, each load has three phases, where each phase represents a house.
                     Each house has a DPMU meter. There are 5 additional meters in our system. 
                    </h6>

                    <br/>
                     <h6 class="lead">During simulation, GridLAB-D will then input the time-series SmartMeter 
                     data into the network topology as houses in order to calculate what the DPMU meters would
                      measure. Thus, the outputs of GridLAB-D are a time-series estimation of voltage data for
                       each of the meters based on the network topology and SmartMeter inputs.  

                    </h6>
                    <img class="center" src="assets/img/gridlab.png" alt="..." />
 
                    <div class="divider-custom "></div>
                    <div class="divider-custom divider-black">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-bolt"></i></div>
                        <div class="divider-custom-line"></div>           
                    </div> 

                    {/* Regular Model  */}

                    <h3 class="text-center text-uppercase text-secondary">SmartMeter → DPMU Model</h3>
                    <br/>
                    {/* <h4 class="text-center text-uppercase text-secondary fst-italic">Data Preprocessing</h4> */}

                     <h6 class="lead">Our goal was to train a machine learning model to do the work that GridLAB-D does. 
                     Specifically, the model was to accurately predict what DPMU meters would measure (target) given 
                     SmartMeter data (input). These DPMU measurements correspond to voltage at distribution tranformers in 
                     an overhead power line. 
                    </h6>
                    <br/>

                    <h4 class="text-center text-uppercase text-secondary fst-italic">Input Data</h4>

                    <h6 class="lead">The input data (X) of the model was the same time series SmartMeter inputs provided 
                    to GridLAB-D.
                    </h6>

                    <h6 class="lead">The input data contains real (p) and reactive (q) power components for each of the 24 houses for the topology 
                    shown previously, collected over t timestamps spaced at 1-minute intervals from June to September 2018.
  
                    </h6>

                    <img class="center" src="assets/img/inputs.png" alt="..." />
                    <h6 class="fst-italic text-center text-secondary lead">t x 48 input matrix of SmartMeter data</h6>

                    <br/><br/>

                    <h4 class="text-center text-uppercase text-secondary fst-italic">Target Data</h4>

                    <h6 class="lead">The target data (Y) of the model was the voltage data obtained from running 
                    GridLAB-D with the aforementioned topology and SmartMeter data, collected over the same t 
                    timestamps spaced at 1-minute intervals.
                    </h6>

                    <h6 class="lead">GridLAB-D also outputs voltage data for 12 meters in addition to the 24 houses, 
                        resulting in a target matrix of size t x 36. 
                    </h6>


                    <img class="center" src="assets/img/targets.png" alt="..." />
                    <h6 class="fst-italic text-center text-secondary lead">t x 36 target matrix of DPMU data</h6>

                    <br/><br/>
                    <h4 class="text-center text-uppercase text-secondary fst-italic">Model Architecture</h4>

                    <img class="center" src="assets/img/model1.png" alt="..." />


                    <div class="divider-custom divider-black">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-bolt"></i></div>
                        <div class="divider-custom-line"></div>           
                    </div> 

                    {/* Inverse Model  */}
                    <h3 class="text-center text-uppercase text-secondary">Inverse Model (DPMU → SmartMeter)</h3>
                    <br/>
                    <h6 class="lead">The overall goal of the inverse model was to accurately predict 
                    SmartMeter power data (target) given DPMU voltage data (input).
                    </h6>
                    <h6 class="lead">X and Y from the original model were simply reversed.

                    </h6> 

                    <h6 class="lead"> However, it is important to be able to obtain accurate SmartMeter data given limited DPMU data.
                                DPMU meters are sparse (each home doesn’t have access to DPMU meters in the real world).
                    </h6>  
                    <h6 class="lead"> Thus, it was important to 
                                find different ways to group homes together (clustering) and
                                use additional features of time-series data (time of day, day of week, holidays) 
                                to enable the model to make accurate predictions with limited inputs.
                    </h6>  


                    <h4 class="text-center text-uppercase text-secondary fst-italic">Input Data</h4>

                    <img class="center" src="assets/img/inverse_input.png" alt="..." />
                    <h6 class="fst-italic text-center text-secondary lead">Input matrix (DPMU data with k-means 
                    clustering, weekdays, time, and weekend/holiday flags as features)
                    </h6>

                    <br/><br/>

                    <h4 class="text-center text-uppercase text-secondary fst-italic">Target Data</h4>

                    <img class="center" src="assets/img/inverse_target.png" alt="..." />
                    <h6 class="fst-italic text-center text-secondary lead">t x 48 target matrix of SmartMeter data
                    </h6>

                    <br/><br/>
                    <h4 class="text-center text-uppercase text-secondary fst-italic">Preprocessing techniques</h4>
                    <br/>


                    <div class="row">
                         <div class="col-lg-4 ms-auto">  
                             <h4 class="text-center text-uppercase text-secondary fst-italic lead">pca</h4>
                            <p class="lead">PCA, or principal components analysis, is used to determine
                             the principal components of a model. For our purposes, we wanted to 
                             reduce the number of houses (Pecan Street SmartMeters) that are necessary 
                             to generate accurate DPMU outputs, so a house will serve as a component. 
                             Additionally, during preprocessing, we created columns for important time stamps 
                             (weekends, holidays, etc.), so those are considered components as well.  
                            </p>
                            <p class="lead">We have 37 possible components, so in order to decide what
                             number of components was optimal, it was possible to test from a range of 1:37. 
                             For each possible number of components, we fit PCA to it and calculated the 
                             cumulative sum of the variance ratios for each dimension of data. Once this value
                              starts to converge, we have reached an optimum number of components. In our situation, 
                              this was 10 components.
  
                            </p>
                        </div>

                        <div class="col-lg-4 me-auto">
                            <h4 class="text-center text-uppercase text-secondary fst-italic lead">k-means</h4>
                            <p class="lead">K-means is a preprocessing algorithm that is used to group
                             similar data points together. Each group is considered a cluster.
                              K-means was beneficial to our inverse model as some houses had similar values.
                            </p>
                            <p class="lead">Similar to PCA, we were able to test the optimal number of clusters 
                            from 1:37. For each possible number of components, we fit KMeans to it and calculated
                             the inertia (which is the squared distance of a data point to the closest cluster).
                              Once this inertia value starts to converge, we have reached an optimum number of 
                              clusters. In our situation, this was 6 clusters. 
                            </p>
                        </div>
                    </div>
                                           
                    <br/>
                    <h4 class="text-center text-uppercase text-secondary fst-italic">Inverse Model Architecture</h4>

                    <img class="center" src="assets/img/inverse.png" alt="..." />

                    <div class="divider-custom divider-black">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-bolt"></i></div>
                        <div class="divider-custom-line"></div>           
                    </div> 

                    {/* MSE  */}
                    <h3 class="text-center text-uppercase text-secondary">Mean squared error</h3>
                    <br/>
                    <h6 class="lead">We used Mean Squared Error (MSE) to evaluate our models as we trained them. 
                    MSE takes the average squared difference between the estimated values and the actual value to 
                    measure the quality of the estimator.
                    </h6>
                    <img class="center" src="assets/img/mse.png" alt="..." />

                    <br/>
                    <h6 class="lead"> In order to implement a comparable MSE across multiple
                     datasets and models we had to create a unified method:
                    </h6>
                    <br/>

                    <h6 class="lead">1) Find the L2 norms of the test set target values.</h6>
                    <h6 class="lead">2) Divide the predicted values by the L2 norms.</h6>
                    <h6 class="lead">3) Divide the test set target values by the L2 norms.</h6>
                    <h6 class="lead">4) Utilize sklearn to run the MSE Metric.</h6>
                    
                    <br/>

                    <h6 class="lead">
                    The closer the MSE is to zero shows how well the model was at predicting values 
                    that were close to the actual values. 
                    </h6>


                </div>
                <br/><br/>
                <div class="divider-custom ">
                        <div class="divider-custom-line"></div>
                </div>
            </div>
            
                   

        </section>
        )
    }
}
export default Method;