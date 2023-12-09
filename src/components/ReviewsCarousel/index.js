import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  changeImgRight = () => {
    const {count} = this.state

    if (count <= 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  changeImgLeft = () => {
    const {count} = this.state
    if (count >= 1) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const image = reviewsList[count].imgUrl
    const name = reviewsList[count].username
    const companyNameOf = reviewsList[count].companyName
    const para = reviewsList[count].description
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="carouselOf">
          <button
            type="button"
            className="btn-size"
            onClick={this.changeImgLeft}
          >
            <img
              className="arrowSize"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="leftArrow"
            />
          </button>
          <img src={image} className="img-size" alt={name} />
          <button
            type="button"
            className="btn-size"
            onClick={this.changeImgRight}
          >
            <img
              className="arrowSize"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="rightArrow"
            />
          </button>
        </div>
        <h1>{name}</h1>
        <p>{companyNameOf}</p>
        <p>{para}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
