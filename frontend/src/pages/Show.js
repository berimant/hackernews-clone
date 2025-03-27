import React from 'react';
import NewsList from '../components/NewsList';

const Show = () => <NewsList endpoint="/api/show-stories" />;
export default Show;