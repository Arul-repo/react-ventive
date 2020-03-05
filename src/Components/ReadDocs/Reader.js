import React, { Component } from "react";
import Aux from "../HOC/Auxiliary";
import "./Reader.scss";


class Reader extends Component {

    render(){
        let keyID = this.props.match.params.id;
        let readDOCS =<div>
                    <h2 className="docTitle">{"props.title"}</h2>
                    <div className="layoutPdf">
                        <h2 className="placeholderPDF">Display PDF Here</h2>
                    </div>
                </div>;

                if(keyID){
                readDOCS = <h1 style={{color:"#000"}}>{keyID}</h1>
                }
        /* if(this.props.match.params.id){
            readPDF = <Document
            file="somefile.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess} 
          >
            <Page  />
          </Document>
        } */
        return(
            <Aux>
                
                {readDOCS}
            </Aux>
        );
    }

}

export default Reader;