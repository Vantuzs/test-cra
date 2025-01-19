import React, { Component } from 'react';

class DataTv extends Component {
    constructor(props){
        super(props);

        this.state = {
            tv: [],
            isLoading: true,
            isError: false,
        }
    }

    componentDidMount(){
        this.load();
    }

    load = ()=>{
       this.props.loadData()
        .then(tv => {
            this.setState({
                tv
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
        // const {tv,isLoading,isError} = this.state

        return this.props.children(this.state)
    }
}

export default DataTv;
