import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './Root.css';
import '../src/SCSS/Root.scss';
import ReaderZone from "./Components/ReaderZone/ReaderZone";
import Reader from "./Components/ReadDocs/Reader";
import MyRoutes from "./Routers/MyRoutes";

class Root extends React.Component {

	state = {
        files: []
    };

	fileChangedHandler = (event) => {
		let getFiles = [...this.state.files]
		getFiles.push(event.target.files[0]);
		this.setState({files: getFiles});
    }

	render(){
		let Layout = this.props.match ? null : <Reader />;
		return (
			<BrowserRouter>
				<aside className="leftBar">
					<ReaderZone fileChangedHandler={this.fileChangedHandler} files={this.state.files}/>
				</aside>
				<section className="rightSide">
					<MyRoutes />
				</section>
			</BrowserRouter>
  	);
	}
}

export default Root;
