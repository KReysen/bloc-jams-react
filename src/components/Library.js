import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import '../styles/Library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (

      <section className='library'>
        {
          this.state.albums.map( (album, index) =>
          <div className='eachAlbum'>
            <Link to={`/album/${album.slug}`} key={index} >
              <img className="img img-thumbnail" id="albumCover" src={album.albumCover} alt={album.title} />
              <div>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} songs</div>
            </Link>
            </div>
          )

        }
      </section>

    );
  }
}

export default Library;
