import React, {Component} from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

class CarouselComponent extends Component{

    render(){
        const { list } = this.props;
        return (
            <Carousel autoplay dots="false" dots={this.props.dots}>
            {
                list.map(item => {
                    console.log(item);
                    return (
                        <div>
                            <img src={item} width="100%" height={"500px"}/>
                        </div>
                    )
                })
            }
            </Carousel>
        )
    }
}

export default CarouselComponent;