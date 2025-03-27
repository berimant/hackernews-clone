import React from 'react';
import NewsList from '../components/NewsList';

const Past = () => <NewsList endpoint="/api/top-stories" />;
export default Past;