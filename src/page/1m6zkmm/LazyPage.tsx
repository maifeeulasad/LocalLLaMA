import React, { lazy, Suspense } from 'react';

const Page1m6zkmm = lazy(() => import('./Page'));

const LazyPage1m6zkmm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6zkmm />
  </Suspense>
);

export { LazyPage1m6zkmm };
