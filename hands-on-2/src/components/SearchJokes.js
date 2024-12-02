import { useState } from "react";

const url = "https://icanhazdadjoke.com/search";

const SearchJokes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [jokes, setJokes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const searchJokes = async () => {
      setIsLoading(true);
      const response = await fetch(`${url}?term=${searchTerm}`, {
        headers: { Accept: 'application/json' }
      });
      const data = await response.json();
      setJokes(data.results);
      setIsLoading(false);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search for jokes..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={searchJokes}>Search</button>
  
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>{jokes.length} joke(s) found</p>
            <ul>
              {jokes.map((joke, index) => (
                <li key={index}>{joke.joke}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

export default SearchJokes;