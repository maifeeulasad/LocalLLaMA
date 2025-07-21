import React, { lazy, Suspense } from 'react';

const Page1m5eulr = lazy(() => import('./Page'));

const LazyPage1m5eulr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5eulr />
  </Suspense>
);

export { LazyPage1m5eulr };
