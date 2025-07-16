import React, { lazy, Suspense } from 'react';

const Page1m0k27c = lazy(() => import('./Page'));

const LazyPage1m0k27c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0k27c />
  </Suspense>
);

export { LazyPage1m0k27c };
