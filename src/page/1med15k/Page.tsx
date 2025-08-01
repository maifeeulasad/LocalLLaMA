// @ts-nocheck
import React from 'react';
import RedditPostRenderer from '../../component/reddit/RedditPostRenderer';
import data1med15k from './index.json';

const Page1med15k = () => (
  <RedditPostRenderer data={data1med15k} />
);

// eslint-disable-next-line import/no-default-export
export default Page1med15k;
