import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import MyProfile from "./components/MyProfile";
import Friends from "./components/Friends";

class App extends React.Component {
  state = {
    me: [],
    myFriends: [],
  };

  componentDidMount() {
    Axios.get("https://api.github.com/users/mphelps1978")
      .then(res => {
        this.setState({
          me: res.data,
        });
        console.log(`Me: `, res);
      })
      .catch(err => {
        console.log(`Error in First get: `, err);
      });

    Axios.get("https://api.github.com/users/mphelps1978/followers")
      .then(res => {
        this.setState({
          myFriends: res.data,
        });
        console.log(`Followers: `, res);
      })
      .catch(err => {
        console.log(`Error in First get: `, err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Me:</h2>
          <MyProfile
            aviurl={this.state.me.avatar_url}
            bio={this.state.me.bio}
            linkurl={this.state.me.html_url}
            repocount={this.state.me.public_repos}
            followers={this.state.me.followers}
            following={this.state.me.following}
          />
          <h3>My Friends:</h3>
          <Friends
            name={this.state.myFriends.login}
            aviurl={this.state.myFriends.avatar_url}
            linkurl={this.state.myFriends.html_url}
          />
        </header>
      </div>
    );
  }
}

export default App;
