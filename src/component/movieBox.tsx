const MovieBox = (movie) => {
  const { Poster, Title, Year } = movie;
  return (
    <div>
      <div className="rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:-translate-y-1">
        <div className="h-[400px] overflow-hidden relative">
          <img src={Poster} alt="" />
        </div>
        <div className="p-4">
          <h3 className="m-0 mb-2.5 text-lg text-gray-800">{Title}</h3>
          <p className="text-gray-600 mb-2.5">{Year}</p>
          <div className="mb-2.5">
            <span className="font-bold mr-1">IMDb Rating:</span>
            <span></span>
          </div>
          <div className="mb-2.5">
            <span className="font-bold mr-1">Your Rating:</span>
            <div className="inline-flex text-xl">
              <span className="cursor-pointer text-gray-300 hover:text-yellow-500">
                ★
              </span>
              <span className="cursor-pointer text-gray-300 hover:text-yellow-500">
                ★
              </span>
              <span className="cursor-pointer text-gray-300 hover:text-yellow-500">
                ★
              </span>
              <span className="cursor-pointer text-gray-300 hover:text-yellow-500">
                ★
              </span>
              <span className="cursor-pointer text-gray-300 hover:text-yellow-500">
                ★
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
