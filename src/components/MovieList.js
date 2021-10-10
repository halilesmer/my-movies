import React from "react";

class MovieList extends React.Component {

  trancateOverview = ((string, maxLength) => {
    if (!string) return null
    if(string.length <= maxLength) return string
    if (string.length >= maxLength) {
      return `${string.substring(0, 100)} ...`;
    };


})

  render() {
    return (
      <div className="row">
        {this.props.movies.map((movie, index) => {
          return (
            <div className="col-lg-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <img
                  src={movie.imageURL}
                  alt="action"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <p className="card-text">
                    {this.trancateOverview(movie.overview, 100)}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      type="button"
                      className="btn btn-md btn-outline-danger"
                      onClick={(event) => {
                        this.props.deleteMovieProp(movie);
                      }}
                    >
                      Delete
                    </button>

                    <h2>
                      <span className="badge bg-info dark">{movie.rating}</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default MovieList;

/*   <Link type="button" className="btn btn-md btn-outline-primary">
                  Edit
                </Link> */

/* 
<button
      type="button"
      className="btn btn-md btn-outline-danger"
      onClick={(event) => {
        this.props.deleteMovieProp(movie);
      }}
    >
      Delete
    </button>
                     */


    /* <p className="card-text text-truncate">{movie.overview}</p> */