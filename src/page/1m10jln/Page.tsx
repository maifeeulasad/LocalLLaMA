// @ts-nocheck
import React from 'react';
import RedditPostRenderer from '../../component/reddit/RedditPostRenderer';
import data1m10jln from './index.json';

const Page1m10jln = () => (
  <RedditPostRenderer data={data1m10jln} />
);

// eslint-disable-next-line import/no-default-export
export default Page1m10jln;
