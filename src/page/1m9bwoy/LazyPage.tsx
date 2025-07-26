import React, { lazy, Suspense } from 'react';

const Page1m9bwoy = lazy(() => import('./Page'));

const LazyPage1m9bwoy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9bwoy />
  </Suspense>
);

export { LazyPage1m9bwoy };
