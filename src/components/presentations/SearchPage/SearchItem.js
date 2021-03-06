import React from 'react';
import {Link} from 'react-router-dom'

class SearchItem extends React.Component {

  handleClick() {
    this
      .props
      .actions
      .fetchTheMovie(this.props.movie.id)
    this
      .props
      .actions
      .fetchCast(this.props.movie.id);
  }
  renderTitle(title) {
    if (title.length < 20) {
      return <h5 className="search-tile-title">{title}</h5>
    } else if(title.length <35) {
      return <h5 className="search-tile-title long-title">{title}</h5>
    }
    else{      
      return <h5 className="search-tile-title longer-title">{title}</h5>
    }
  }
  renderDesc(desc) {
    if (desc.length > 150) {
      desc = desc.substring(0, 150);
      return <p className="search-tile-desc">{desc}...</p>
    } else {
      return <p className="search-tile-desc">{desc}</p>
    }

  }

  renderPic(){
    
    if(this.props.movie.backdrop_path !== null ){
      return <img className ="tile-img" src={`http://image.tmdb.org/t/p/w500//${this.props.movie.backdrop_path}`}/>
    }else if(this.props.movie.poster_path !== null ){
      return  <img className ="tile-img " src={`http://image.tmdb.org/t/p/w500//${this.props.movie.poster_path}`}/>
    }else{
      return <img className ="tile-img" src='http://via.placeholder.com/280x160'/>
    }
  }
  render() {

    return (

      <li >

        <Link
          className="search-tile"
          to='/movie'
          onClick={this
          .handleClick
          .bind(this)}>
          <div className="tile-img">
            {this.renderPic()}
          </div>
          <div className=" photo-overlay">

            <div className="tile-text-container">
              <div className="search-playbtn-container">
                <button className="playBtn ">▶</button>
              </div>
              <div>
                {this.renderTitle(this.props.movie.title)}
              </div>
              <div>
                {this.renderDesc(this.props.movie.overview)}
              </div>
            </div>
          </div>
        </Link>

      </li>
    )
  }

}

export default SearchItem;
