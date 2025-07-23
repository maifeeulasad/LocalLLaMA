import React, { lazy, Suspense } from 'react';

const Page1m6mlbk = lazy(() => import('./Page'));

const LazyPage1m6mlbk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6mlbk />
  </Suspense>
);

export { LazyPage1m6mlbk };
