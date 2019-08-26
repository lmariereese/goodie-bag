import React from 'react'
import {connect} from 'react-redux'
import SingleCandy from './SingleCandy'
import {getAllCandies} from '../reducers'


// we're using a class component because
// need to grab stuff from redux and can use componentDidMount to get data
class AllCandies extends React.Component {
  componentDidMount() {
    this.props.getAllCandies();
  }

  render() {
    return (
      <div>
        <h2 className="section-title">Candies</h2>
        <ul className="candy-container">
          {this.props.candies.map(candy => (
            <div className="single-candy" key={candy.id}>
              <SingleCandy candy={candy} />
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  candies: state.allCandies
})

const mapDispatchToProps = (dispatch) => ({
  getAllCandies: () => dispatch(getAllCandies())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllCandies)
