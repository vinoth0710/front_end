import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


firebase.initializeApp({
  apiKey: "AIzaSyBXpvNkuj20PF-PsRO4Vmz01Qj8fjsV1Uc",
  authDomain: "signin-92c63.firebaseapp.com",
});

class Layout extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      localStorage.uid = user.uid;
      localStorage.email = user.email;
      console.log("user", user);
      console.log("user", localStorage.uid);
      console.log("user", localStorage.email);
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <div className="App">
            {this.state.isSignedIn ? (
              <span>
                <div>Signed In!</div>
                <button onClick={() => firebase.auth().signOut()}>
                  Sign out!
                </button>
                <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                <img
                  alt="profile picture"
                  src={firebase.auth().currentUser.photoURL}
                />

                {this.props.children}
              </span>
            ) : (
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
          </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>

    );
  
  }
}

export default Layout;
