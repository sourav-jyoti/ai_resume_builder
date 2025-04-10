const REACT_APP_API_URL = 'https://ai-resume-builder-back-bewo.onrender.com'//backened render url
const NODE_ENV = 'local'

export const API_URL = NODE_ENV === 'production'
  ? REACT_APP_API_URL
  : 'http://localhost:3000';
