import React, { lazy, Suspense } from 'react';

const Page1mcz4jq = lazy(() => import('./Page'));

const LazyPage1mcz4jq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcz4jq />
  </Suspense>
);

export { LazyPage1mcz4jq };
