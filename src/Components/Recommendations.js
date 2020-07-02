import React, { Component } from 'react'

class Recommendations extends Component {
  render () {
    if (this.props.data) {
      var recommendations = this.props.data.recommendations.map(function (
        recommendations
      ) {
        return (
          <li key={recommendations.user}>
            <blockquote>
              <p>{recommendations.text}</p>
              <cite>{recommendations.user}</cite>
            </blockquote>
          </li>
        )
      })
    }

    return (
      <section id='testimonials'>
        <div className='text-container'>
          <div className='row'>
            <div className='two columns header-col'>
              <h1>
                <span>Recommendations</span>
              </h1>
            </div>

            <div className='ten columns flex-container'>
              <ul className='slides'>{recommendations}</ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Recommendations
