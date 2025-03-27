import React from 'react';
import NewsList from '../components/NewsList';

const Jobs = () => <NewsList endpoint="/api/job-stories" />;
export default Jobs;