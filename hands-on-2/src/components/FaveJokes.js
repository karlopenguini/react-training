import { useReducer, useState } from "react";
import axios from 'axios';

const url = "https://icanhazdadjoke.com/";

const jokesReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_JOKE':
        return { ...state, jokes: [...state.jokes, action.payload] };
      case 'REMOVE_JOKE':
        return { ...state, jokes: state.jokes.filter(joke => joke !== action.payload) };
      default:
        return state;
    }
  };

const FaveJokes = () => {
    const [state, dispatch] = useReducer(jokesReducer, { jokes: [] });
    const [currentJoke, setCurrentJoke] = useState('');
    const getNewJoke = async () => {
        try {
        const response = await axios.get(url, {
            headers: { Accept: 'application/json' }
        });
        const newJoke = response.data.joke;
        setCurrentJoke(newJoke);
        } catch (error) {
        console.error("Error fetching the joke:", error);
        }
    };

    const likeJoke = () => {
        if (currentJoke && !state.jokes.includes(currentJoke)) {
          dispatch({ type: 'ADD_JOKE', payload: currentJoke });
        }
    };
    const removeJoke = (jokeToRemove) => {
        dispatch({ type: 'REMOVE_JOKE', payload: jokeToRemove });
    };

    return (
        <div>
          <button onClick={getNewJoke}>Get a new joke</button>
    
          {currentJoke && (
            <div>
              <p>{currentJoke}</p>
              <button onClick={likeJoke}>Like this joke</button>
            </div>
          )}
    
          <h2>Favorite Jokes:</h2>
          {state.jokes.length === 0 ? (
            <p>No jokes saved yet. Like a joke to save it!</p>
          ) : (
            <ul>
              {state.jokes.map((joke, index) => (
                <li key={index}>
                  {joke}{' '}
                  <button onClick={() => removeJoke(joke)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
    );
}

export default FaveJokes;