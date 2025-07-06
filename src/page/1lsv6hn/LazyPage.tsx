import React, { lazy, Suspense } from 'react';

const Page1lsv6hn = lazy(() => import('./Page'));

const LazyPage1lsv6hn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsv6hn />
  </Suspense>
);

export { LazyPage1lsv6hn };
