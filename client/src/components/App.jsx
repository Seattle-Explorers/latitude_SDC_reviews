import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import Reviews from './Reviews.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.listing);
    console.log(this.state)


    axios.get(`/api/reviews/${this.props.listing}`)
      .then(({data}) => {
        console.log('This is original data', data)
        let reviews = [];
        for (let i = 0; i < data.length; i++) {
          reviews.push(data[i].reviewbody);
        }
        let listingData = {
          reviews,
          reviewSize: data.length,
          rest: {
            cleanAvg: data[0].cleanavg,
            commAvg: data[0].commavg,
            accuracyAvg: data[0].accuracyavg,
            valueAvg: data[0].valueavg,
            locationAvg: data[0].locationavg,
            checkinAvg: data[0].checkinavg
          }
        };
      console.log('This is listing data', listingData)

        this.setState({listingData});
      })
      .catch((err) => {
        throw new Error(`cannot retrieve: ${err}`);
      });
  }

  render() {
        console.log(this.props.listing);
        console.log(this.state)


    if(this.state){
      return(
        <Switch>
          <Route path='/reviews'>
            <Reviews modalOpen data={this.state.listingData}/>
          </Route>

          <Route path='/'>
            <Reviews data={this.state.listingData}/>
          </Route>
        </Switch>
      )
    }
    return(<div>Error 404</div>)
  }
}

export default App;
