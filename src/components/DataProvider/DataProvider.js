import React, { Component } from 'react';

/* 

1. Компонента идет за данными
2. Компонента получает данные и кладет их в стейт
3. Компонента делится данными с кем-то другим, кто знает как нужно отобразить эти данные

*/

class DataProvider extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            isLoading: true,
            isError: false,
        }
    }

    componentDidMount(){
        this.load();
    }

    load = ()=>{
        
        this.props.loadData()
        .then(data => {
            this.setState({
                data
            })
        })
        .catch((error)=>{
            this.setState({
                isError: error
            })
        })
        .finally(()=>{
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        return this.props.children(this.state)
    }
}

export default DataProvider;
