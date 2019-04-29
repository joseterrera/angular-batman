import { Movie } from '../movie'
import { environment } from './../../environments/environment';
import 'es6-promise/auto';
import 'isomorphic-fetch';

export const responseToJSON = (x: any) => x.json();
export function toYear(year: string): number {
  return Number(year.match(/\d+/)[0] || 0);
}

const website = 'http://www.omdbapi.com/'
const key = environment.apiKey;
const movie = 'batman';
/**
 * tie together 3 params domain + apikey + searchquery (which is our movie)
 */
function configureSearchUri( domain, api, searchQuery ) {
  return domain + `?s=${ searchQuery }&apikey=${ api }`;
  }

/**
 * Tie together the domain, the api, and,
 * the specific movie id. The id will be used to extract all of the movie details, for each movie.
 */
function configureDetailUri( domain, api, id ) {
  return domain + `?i=${ id }&apikey=${ api }`;
  }
/**
 * This function will set an object in local storage.
 * The purpose is to store the values from the api, so
 * that we only make the call once.
 */
function setObjLS(objKey: string, value: object) {
  localStorage.setItem(objKey, JSON.stringify( value) )
}
/**
 * Retrieve object from local storage and parse it
 * into json (Local storage does not store)
 * @example
 * setObjLS('josefina', {id: 'walks'})
 * console.log('getObj', getObjLS('josefina'));
 * // getObj {id: "walks"}
 */
function getObjLS(item: string) {
  const itemFromLS = localStorage.getItem(item);
  if ( itemFromLS === undefined ||  itemFromLS === null ) {
    return undefined;
  } else {
    try {
      return JSON.parse(itemFromLS);
    } catch(e) {
      localStorage.removeItem(key);
      return undefined;
    }
  }
  }

/**
 * First param is this or null
 * Any other parameter will go to original function.
 * Partial application: In this case, we only add 2 of the 3
 * parameters to the original functions.
 */
const getSearchUri = configureSearchUri.bind( null, website, key );
const getDetailUri = configureDetailUri.bind( null, website, key );

/**
 * Will make api call if there is no movieOBjLS.
 * If it is already stored, it will retrieve it.
 * This function will return some of the details.
 * We need to extract the id, and get all details.
 * using getAllMoviesWithDetails.
 */
async function getMovieDetails( id: string ) {
  const movieObj = getObjLS( id )
  if (!movieObj) {
    // this will run if local storage is clear
    // localStorage.clear()
    console.log('Api will be called on first load, and then data is saved to local storage')
    // console.log( getDetailUri(id))
    const response = await fetch(getDetailUri(id))
      .then(responseToJSON)
      .catch(error => console.log(error));
    setObjLS( id, response );
    // console.log({response});
    return response;
  } else {
    return movieObj;
  }
}
export async function getAllMoviesWithDetails( query: string ): Promise<Movie[]> {
  // get api and convert it to json
  const response = await fetch(getSearchUri( query ))
    .then( responseToJSON )
  // console.log(response);
  const movieList = response.Search;
  // console.log(movieList)

  const movieDetailListPromises = movieList
    .map( mov => getMovieDetails( mov.imdbID ) )

  const movieDetailList = await Promise.all<Movie>( movieDetailListPromises );
  // console.log(movieDetailList)
  return movieDetailList;
}



