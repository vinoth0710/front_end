import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import "featuredInfo.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

firebase.initializeApp({
  apiKey: "AIzaSyBXpvNkuj20PF-PsRO4Vmz01Qj8fjsV1Uc",
  authDomain: "signin-92c63.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      localStorage.uid = user.uid
      localStorage.email = user.email
      console.log("user", user)
      console.log("user", localStorage.uid)
      console.log("user", localStorage.email)

    })
  }

  render() {
    return (
    <Route path="featuredInfo.jsx">
    </Route>
    )
  }
}

export default App
