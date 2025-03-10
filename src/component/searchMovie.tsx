const SearchMovie = () => {
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
        <form className="flex mb-8 shadow-lg rounded-lg overflow-hidden">
          <input
            className="flex-1 px-6 py-4 text-lg bg-[#fafafa]"
            type="text"
            placeholder="Enter movie title..."
          />
          <button
            type="submit"
            className="px-8 py-4 bg-[#e50914] text-white text-lg font-semibold border-none cursor-pointer hover:bg-[#f40612] transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Search
          </button>
        </form>
      </div>
    )
}

export default SearchMovie;