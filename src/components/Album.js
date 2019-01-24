import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: '',
      isPlaying: false,
      isHovered: false,
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

    play() {
      this.audioElement.play();
      this.setState({ isPlaying: true });
    }

    pause() {
      this.audioElement.pause();
      this.setState({
        isPlaying: false,
        // currentSong: '',
      });
    }

    setSong(song) {
      this.audioElement.src = song.audioSrc;
      this.setState({ currentSong: song });
    }

    handleSongClick(song) {
      const isSameSong = this.state.currentSong === song;
      if (this.state.isPlaying && isSameSong) {
        this.pause();
      } else {
        if (!isSameSong) { this.setSong(song); }
        this.play();
      }
    }

  getIconClassName(song, index) {
    if ((this.state.isPlaying && this.state.currentSong.title === song.title)) {
      return  "ion-md-pause"
    }

    return "ion-md-play"
  }

  getPlayButton(song, index) {
    if (this.state.isHovered === index+1) {
      return <span className={`icon ${this.getIconClassName(song, index)}`}></span>
    }

    if (this.state.currentSong.title === song.title) {
      return <span className={`icon ${this.getIconClassName(song, index)}`}></span>
    }

    return  <span className="song-number">{index+1}</span>;
  }

  render() {
    const songs = this.state.album.songs.map( (song, index) =>
      <tr className="song"
          key={`${song.title.toLowerCase()}-${index}`}
          onClick={() => this.handleSongClick(song)}
          onMouseEnter={() => {this.setState({isHovered: index+1})}}
          onMouseLeave={() => {this.setState({isHovered: false})}}
          >
       <td className="numberOrButton">
       <button>
       { this.getPlayButton(song, index) }

      </button>
       </td>
       <td>{song.title},</td>
       <td>{song.duration} seconds</td>
      </tr>
    );
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            {songs}

          </tbody>
        </table>
        </section>
    );
  }
}

export default Album;
