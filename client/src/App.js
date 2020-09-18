import React, { useState, useEffect } from 'react';
import { listLogEntrys } from './API';
import './index.scss';


class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title"> ⭐ {this.props.rating}</h4>
      </header>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">{this.props.date}</p>
        
        <h2>{this.props.title}</h2>
        
        <p className="body-content">{this.props.text}</p>
        
        <Button />
      </div>
    )
  }
}





const App = () =>{

  const [logEntrys, setLogEntrys] = useState([]);

  useEffect(() => {
    (async () => {
      const logEntrys = await listLogEntrys();
      setLogEntrys(logEntrys);
      console.log(logEntrys);
    })();
  }, []);

  return(
    <article className="card">
      {
        logEntrys.map(entry => (
          <CardHeader 
          key = {entry._id}
          image = {entry.image}
          rating = {entry.rating} />
        ))
      }

      {
        logEntrys.map(entry => (
          <CardBody 
          key = {entry._id}
          date = {entry.createdAt} 
          title = {entry.title} 
          text = {entry.comments}/>
        ))
      }

    </article>
  );
}

export default App;
