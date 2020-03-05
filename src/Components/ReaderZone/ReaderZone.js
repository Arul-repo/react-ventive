import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Aux from "../HOC/Auxiliary";
import axios from "../../Axios/Axios";
import * as action from "../../Store/Actions/ActionTypes";
import logoWhite from "../../Assets/logo_sm_white.png";
import "./Readerzone.scss";


class ReaderZone extends React.Component {

    componentDidMount(){
        axios.get("/documents.json")
            .then( response => {
                console.log(response.data);
            }).catch( error => {
                console.log(error.message);
        });
    }
        
    render(){
        let items = <h4>Upload Images to Read</h4>;

        if (this.props.files !== undefined && this.props.files.length > 0){
            items = this.props.files.map((item, index) =>{
                return <li key ={item.lastModified}>
                    <NavLink to={"/Reader/"+item.lastModified}>
                        <h5>{item.name}</h5>
                        <p>Nam vel porta velit</p>
                    </NavLink>
                </li>
            });
        }

        return(
            <Aux>
                <div className="logoRoot">
                    <Link to="/"><img src={logoWhite} alt="logo"/></Link>
                </div>
                <div className="docLinks">
                    <p className="filesTxt">FILES</p>
                    <ul className="docList">
                        {items}
                        {/* <li>
                            <NavLink to="/Reader">
                                <h4>Document 01</h4>
                                <p>Nam vel porta velit</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Reader">
                                <h4>Document 02</h4>
                                <p>Nam vel porta velit</p>
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
                <div className="uploadBtn">                   
                    <button onClick={(e) => this.upload.click(e)}>
                        <input type="file" ref={(ref) => this.upload = ref} onChange={this.props.documents} style={{visibility: 'hidden'}} />
                        Upload Files
                    </button>
                </div>
            </Aux>
        );
    }
}


const getStatesToProps = (state) => {
    return {
        files: state.docState
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        documents: (event) => dispatch(action.ATTACHMENT(event.target.value))
    }

}

export default connect(getStatesToProps, mapDispatchToProps)(ReaderZone);