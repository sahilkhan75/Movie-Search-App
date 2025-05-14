import React from 'react';

export default function Card({ moviedata }) {
  return (
    <div className="max-w-xs mx-auto mt-10 transition-transform transform hover:scale-105 duration-300">
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden group">
        <img
          src={`https://image.tmdb.org/t/p/w1280${moviedata.poster_path}`}
          alt={moviedata.title}
          className="w-full h-45 object-cover group-hover:opacity-80 transition duration-300"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition duration-300" />
        
        <div className="absolute bottom-0 w-full px-4 py-4 bg-gradient-to-t from-black to-transparent">
          <h2 className="text-xl font-bold text-white truncate">{moviedata.title}</h2>
          <p className="text-sm text-gray-200 mt-1">⭐ {moviedata.vote_average}/10</p>
        </div>
      </div>

      <div className="mt-4 px-2">
        <p
          className="text-gray-700 text-sm line-clamp-3"
          title={moviedata.overview}
        >
          {moviedata.overview}
        </p>
      </div>
    </div>
  );
}
