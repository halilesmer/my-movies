import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  //Axios package
   componentDidMount() {
    this.getMovies()
  }
  async getMovies() {
    const response = await axios.get("http://localhost:3002/movies");
    try {
      this.setState({ movies: response.data });
    } catch (error) {
      console.error(error);
    }
  }



  //Delete Movie
  deleteMovie = async (movie) => {
    await axios.delete(`http://localhost:3002/movies/${movie.id}`);

    const deletedMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({ movies: deletedMovieList });
  };
  // Search Movie
  searchMovie = (event) => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };
  // Add Movie
  addMovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie);
    this.setState((state) => ({ movies: state.movies.concat([movie]) }));
  };
  // Edit Movie
  editMovie = async (id, updatedMovie) => {
    await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie);
    this.setState((state) => ({ movies: state.movies.concat([updatedMovie]) }));
    this.getMovies()
  };

  render() {
    const filteredMovies = this.state.movies
      .filter((movie) => {
        return movie.name
          .toLowerCase()
          .includes(this.state.searchQuery.toLowerCase());
      })
      .sort((a, b) => {
        return a.id - b.id;
      })
      .reverse();

    return (
      <Router>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                  </div>

                  <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                  />
                </React.Fragment>
              )}
            ></Route>

            <Route
              path="/add"
              render={({ history }) => (
                <AddMovie
                  onAddMovie={(movie) => {
                    this.addMovie(movie);
                    history.push("/");
                  }}
                />
              )}
            ></Route>

            <Route
              path="/edit/:id"
              render={(props) => (
                <EditMovie
                  {...props}
                  onEditMovie={(id, movie) => {
                    this.editMovie(id, movie);
                  }}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

/* 

import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  //Axios package
  async componentDidMount() {
    const response = await axios.get("http://localhost:3002/movies");
    try {
      this.setState({ movies: response.data });
    } catch (error) {
      console.error(error);
    }
  }
  //Delete Movie
  deleteMovie = async (movie) => {
    await axios.delete(`http://localhost:3002/movies/${movie.id}`);

    const deletedMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({ movies: deletedMovieList });
  };
  // Search Movie
  searchMovie = (event) => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };
  // Add Movie
  addMovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie);
    this.setState((state) => ({ movies: state.movies.concat([movie]) }));
  };
  render() {
    const filteredMovies = this.state.movies
      .filter((movie) => {
       
        return movie.name
          .toLowerCase()
          .includes(this.state.searchQuery.toLowerCase());
      })
      .sort((a, b) => {
        return a.id - b.id;
      }).reverse();
        
    

    return (
      <Router>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                  </div>

                  <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                  />
                </React.Fragment>
              )}
            ></Route>

            <Route
              path="/add"
              render={({history}) => (
                <AddMovie

                  onAddMovie={(movie) => {
                    this.addMovie(movie)
                    history.push("/")
                  }
                  }
                />
              )}
            ></Route>

            <Route path="/edit/:id" component={EditMovie}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
*/
