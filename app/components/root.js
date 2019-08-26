import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import AllCandies from './AllCandies'

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
        <Link to="/candies" />
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
        <Switch>
          <Route exact path="/candies" component={AllCandies} />
        </Switch>
    </div>
  )
}

export default Root
