import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import MovieBox from "./movieBox";
import Loading from "./shared/loading";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface movie {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

const SearchMovie = () => {
  const [searchterm, setSearchTerm] = useState("");

  const { data, isError, error, isLoading } = useQuery<movie>({
    queryKey: ["movies", searchterm],
    queryFn: async () => {
      const { data } = await axios.get<movie>(
        `https://www.omdbapi.com/?s=${searchterm}&apikey=${"d92470ab"}`
      );
      return data;
    },
  });


  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = (
      e.currentTarget.elements.namedItem("search") as HTMLInputElement
    ).value;
    setSearchTerm(searchValue);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Movie Search
        </h1>
        <p className="text-gray-600 text-center">
          Search for your favorite movies and rate them
        </p>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex mb-8 shadow-lg rounded-lg overflow-hidden"
      >
        <input
          className="flex-1 px-6 py-4 text-lg bg-[#fafafa]"
          type="text"
          placeholder="Enter movie title..."
          name="search"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-[#e50914] text-white text-lg font-semibold border-none cursor-pointer hover:bg-[#f40612] transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>

      {isLoading ? (
        <Loading />
      ) : (
        data?.Search && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.Search.map((movie) => (
              <MovieBox key={movie.imdbID} {...movie} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default SearchMovie;
