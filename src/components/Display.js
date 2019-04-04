import React, { Component } from 'react'
import Previous from "./Previous"
import Next from "./Next"
import Data from "./Data"
import './Display.css'

class Display extends Component {

  constructor() {
    super()
    this.state = {
      data: [...Data],
      indexId: 0
    }
  }

  handleClickNext = () => {
    let index = this.state.indexId

    if (index < this.state.data.length - 1) {
      this.setState({
        indexId: this.state.indexId + 1
      })
    }
  }

  handleClickPrev = () => {
    let index = this.state.indexId

    if (index > 0) {
      this.setState({
        indexId: this.state.indexId - 1
      })
    }
  }



  render() {

    let movieList = this.state.data[this.state.indexId].favoriteMovies

    let movie = movieList.map((movie, i) => {
      return <li key={i}>{movie}</li>
    })

    return (
      <div className="hero">

        <div className="counter">{this.state.data[this.state.indexId].id}/{this.state.data.length}</div>



        <div className="person">
          <div className="person-info name"> {this.state.data[this.state.indexId].name.first} {this.state.data[this.state.indexId].name.last}</div>
          <hr className="hr" />
          <div className="person-info"><strong>From:</strong> {this.state.data[this.state.indexId].city}, {this.state.data[this.state.indexId].country}</div>
          <div className="person-info"><strong>Job Title:</strong> {this.state.data[this.state.indexId].title}</div>
          <div className="person-info"><strong>Employer</strong> {this.state.data[this.state.indexId].employer}</div>
        </div>

        <br />

        <div className="favorite-movies" key={this.state.indexId}><strong>Favorite Movies:</strong>
          <ol>
            {movie}
          </ol>
        </div>

        <div className="navbar">
          <Previous task={this.handleClickPrev} />
          <div>
            <div className="change-button">Edit</div>
            <div className="change-button">Delete</div>
            <div className="change-button">New</div>
          </div>
          <Next task={this.handleClickNext} />
        </div>

      </div >
    )
  }
}

export default Display



