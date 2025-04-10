const REACT_APP_API_URL = 'https://ai-resume-builder-jscy.onrender.com'
const NODE_ENV = 'production'

export const API_URL = NODE_ENV === 'production'
  ? REACT_APP_API_URL
  : 'http://localhost:3000';
