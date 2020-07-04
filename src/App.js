import React, { Component } from 'react'
import ReactGA from 'react-ga'
import $ from 'jquery'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Resume from './Components/Resume'
//import Contact from './Components/Contact'
import Recommendations from './Components/Recommendations'
import Portfolio from './Components/Portfolio'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      function: 'constructor', //BW > not sure what this does
      resumeData: {}
    }

    ReactGA.initialize('UA-110570651-1')
    ReactGA.pageview(window.location.pathname)
  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data })
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err)
        alert(err)
      }
    })
  }

  componentDidMount() {
    this.getResumeData()
  }
  // BW > FUTURE NOTE, REMOVED Contact widget replaced with 3rd party chat widget, code is preserved below to be placed in return()
  // <Contact data={this.state.resumeData.main} />
  render() {
    return (
      <div className='App'>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Recommendations data={this.state.resumeData.recommendations} />
        <Footer data={this.state.resumeData.main} />
        {/*<Contact data={this.state.resumeData.main} />*/}
      </div>
    )
  }
}

export default App
