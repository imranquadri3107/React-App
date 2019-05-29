import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MyChart.css';
import Design from '../../components/Design/Design'

class MyChart extends Component {

    render() {
        const { data = [] } = this.props;
        console.log(this.props.data, "MyChart");
        return (
            <div className='MyChart'>
                {data && <div>
                    {data && data.map((section, i) => {
                        return (
                            <div className='MyChart__container--fourColumn' key={i}>
                                <Design
                                    mydata={section}
                                    key={i}
                                   />
                            </div>
                        )
                    })
                    }
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.myproject
    }
}

export default connect(mapStateToProps)(MyChart);