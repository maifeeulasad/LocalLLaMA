import React, { lazy, Suspense } from 'react';

const Page1m9rcg2 = lazy(() => import('./Page'));

const LazyPage1m9rcg2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9rcg2 />
  </Suspense>
);

export { LazyPage1m9rcg2 };
