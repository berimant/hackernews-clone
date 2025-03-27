import React from 'react';
import NewsList from '../components/NewsList';

const New = () => <NewsList endpoint="/api/new-stories" />;
export default New;