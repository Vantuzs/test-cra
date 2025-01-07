import React from "react";
import Toggler from "./Toggler";
import "./style.css"
import Indicator from "./Indicator";

class Scene extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isLight: true,
            divasTxt: true
        }
    }

    toggleScene(){
        this.setState({
            isLight: !this.state.isLight
        })
    }

    skoobmTogle(){
        this.setState({
            divasTxt: !this.state.divasTxt
        })
    }


    render(){
        const {isLight,divasTxt} = this.state

        return (
            <div className={isLight ? "scene-on": "scene-off"}>
                <Toggler changeParentState={() => {this.toggleScene()}} buttonText={isLight ? 'Off':'On'} divasToglBtn={()=>{this.skoobmTogle()}}/>
                    <Indicator divasText={divasTxt ? 'SKOOOOOMBIA!!!!': 'Netu skoombrii :( :( :( :('} divasTrFl={divasTxt ? 'divas': 'divasMin'}/>
            </div>
        )
    }
}

export default Scene;