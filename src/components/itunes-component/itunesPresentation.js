import * as React from 'react';

const ItunesPresentation = function (props) {
  if (props.results.length) {
    return (
      <div className="col-lg-10 col-lg-offset-1 presentation-component">
        <h2>Best matches</h2>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Song Name</th>
              <th>Artist</th>
              <th>Album</th>
            </tr>
          </thead>
          <tbody>
            {
              props.results.map((song, idx) => (
                <tr key={idx}>
                  <td><a href={song.previewUrl} target="_blank">Preview</a></td>
                  <td>{song.trackName}</td>
                  <td>{song.artistName}</td>
                  <td>{song.collectionName}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="col-lg-10 col-lg-offset-1 presentation-component">
        <h2>Instructions</h2>
        <p>Enter the name of a song to see a list of the 5 best matches of your search.</p>
      </div>
    )
  }
}

export default ItunesPresentation;
