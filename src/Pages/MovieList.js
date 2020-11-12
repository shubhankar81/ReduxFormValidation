import React from 'react';
import { connect } from 'react-redux';
import { setSearch, submitSearch } from '../Action/userActions';
const MovieList = ({userDetail, setSearch,submitSearch }) => {

        return (
            <div className="movieList">
                
                <input style={{"width" : "50%"}} type="text" placeholder="search by title" name="search" onChange={(e) => setSearch(e.target.value)} /> 
                <button className="submit" title="Click to Default Search..." onClick={(e) => submitSearch(userDetail.movieTitle)}>Search</button>
                
                 <div>
                  <h3 className="moviename"> Movie Name : {userDetail.movieTitle}</h3><br/>
                                <table className="table">
                                    <thead><tr><td>Image </td><td>Title</td><td>Director</td><td>Language</td><td>Runtime</td><td>IMDBRating</td></tr></thead>
                                    <tbody>
                                    {Object.keys(userDetail.movieList).length ? 
                                   <React.Fragment>    
                                            <tr><td><img height="200" width="200" src={userDetail.movieList.Poster} /></td><td>{userDetail.movieList.Title}</td><td>{userDetail.movieList.Director}</td><td>{userDetail.movieList.Language}</td><td>{userDetail.movieList.Runtime}</td><td>{userDetail.movieList.imdbRating}</td></tr>
                                    </React.Fragment>
                                 : <tr>Nothing to Show, Make another Search ...</tr> }
                                    </tbody>
                                </table>
                            </div>
                
            </div>
          );
        
    
} 

const mapStateToProps = state => ({
    userDetail : state.userReducer,

})
export default connect(mapStateToProps, { setSearch, submitSearch })(MovieList);
