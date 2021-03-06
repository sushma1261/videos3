import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
	state = {videos : [], selectedVideo : null};

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search' , {
			params : {
				q:term
			}
		});
		this.setState({videos : response.data.items});
	}

	onVideoSelect = () => {
		 
	}


	render() {
		return (
			<div className = "ui container">
				<SearchBar onSubmit = {this.onTermSubmit} />
				<VideoList videos = {this.state.videos} onVideoSelect = {this.onVideoSelect} />
			</div>

			);
	}
}

export default App;