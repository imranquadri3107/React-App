import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Icon} from 'semantic-ui-react'
import './Design.css';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class Design extends Component {

    
    getPercentage = () => {
        let calculatePercentage;
        this.props.mydata.summary.map((summarySection) => {
            if (summarySection.title === 'Completed') {
                calculatePercentage = (summarySection.value/this.props.mydata.total)*100;
            }
        });
        return parseInt(calculatePercentage);
    }

    render() {
        const { mydata } = this.props;
        return (
            <div className='Design'>
                <Card>
                    <Card.Header>{mydata.title}</Card.Header>
                    <Card.Content>
                    <div className="test">
                        <CircularProgressbar percentage={this.getPercentage()} text={`${this.getPercentage()}%`}/>
                       {/*} <Line percentage={this.getPercentage()} text={`${this.getPercentage()}%`}/>*/}
                       </div>
                    </Card.Content>
                    {
                        mydata.summary.map((summarySection, i) => {
                            if(summarySection.title === 'Completed'){
                                // this.getPercentage(summarySection.value);
                            }
                            return(
                                <Card.Content extra key={i}>
                                    <div className='footer'>
                                        <div className='footerTitle'>
                                          
                                            { summarySection.title}
                                                                                                            
                                        <div className='footerValue'>
                                            { summarySection.value }
                                        </div>
                                        </div>
                                </div>
                                </Card.Content>

                            )
                        })
                    }
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.myproject
    }
}

export default connect(mapStateToProps)(Design);