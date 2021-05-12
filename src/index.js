import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

export default class Index extends React.Component {
  state = {
    memes: []
  }

  componentDidMount() {
    axios.get(`https://api.imgflip.com/get_memes`)
      .then(res => {
        const memes = res.data.data.memes;
        this.setState({ memes });
      })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Popular Memes</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Meme</th>
          </tr>
          {this.state.memes.map(memes =>
            <React.Fragment>
              <tr>
                <td>{memes.name}</td>
                <td><img src={memes.url} width="30%" alt={memes.name}></img></td>
              </tr>
            </React.Fragment>
          )}
        </table>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Index></Index>, document.getElementById('root'));