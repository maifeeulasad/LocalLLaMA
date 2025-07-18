// @ts-nocheck
import React from 'react';
import RedditPostRenderer from '../../component/reddit/RedditPostRenderer';
import data1m35kib from './index.json';

const Page1m35kib = () => (
  <RedditPostRenderer data={data1m35kib} />
);

// eslint-disable-next-line import/no-default-export
export default Page1m35kib;
