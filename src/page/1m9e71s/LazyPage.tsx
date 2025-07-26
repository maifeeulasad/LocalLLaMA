import React, { lazy, Suspense } from 'react';

const Page1m9e71s = lazy(() => import('./Page'));

const LazyPage1m9e71s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9e71s />
  </Suspense>
);

export { LazyPage1m9e71s };
