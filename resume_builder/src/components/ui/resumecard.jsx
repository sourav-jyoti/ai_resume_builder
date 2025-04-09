import React from 'react';
import { Link } from 'react-router-dom';

function Resumecard({ resume }) {
  return (
    <Link to={`/${resume._id}/EditResume`}>
      <div className="group rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow bg-white h-[280px] w-[200px] flex flex-col justify-between">
        
        {/* Card Image / Header */}
        <div className="h-3/5 bg-gradient-to-br from-indigo-300 to-indigo-500 flex items-center justify-center">
          <span className="text-white text-5xl font-bold">
            {resume?.title?.charAt(0).toUpperCase() || 'R'}
          </span>
        </div>

        {/* Card Footer */}
        <div className="h-2/5 p-4 bg-white">
          <h2 className="text-base font-semibold text-gray-800 truncate">Title: {resume?.title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Resumecard;