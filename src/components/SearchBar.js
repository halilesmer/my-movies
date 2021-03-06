import React from "react";
import { Link } from "react-router-dom";


class SearchBar extends React.Component {
  /*  state = {
    searchText: "",
  }; */

  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5">
          <div className="col-10">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Seach a movie"
            />
          </div>
          <div className="col-2">
            <Link
              type="button"
              className="btn btn-md btn-danger"
              style={{ float: "right" }}
              to="/add"
            >
              Add New Movie
            </Link>
          </div>
        </div>
      </form>
    );
  }
}
export default SearchBar;
/*  <div className="col-2">
   <button
     type="button"
     className="btn btn-md btn-danger"
     style={{ float: "right" }}
   >
     Add Movie
   </button>
 </div>; */
/* <Link
              to="/add"
              type="button"
              className="btn btn-md btn-danger"
              style={{ float: "right" }}
            >
              Add Movie
            </Link>
             */
