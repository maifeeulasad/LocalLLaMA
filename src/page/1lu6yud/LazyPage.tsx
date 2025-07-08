import React, { lazy, Suspense } from 'react';

const Page1lu6yud = lazy(() => import('./Page'));

const LazyPage1lu6yud = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu6yud />
  </Suspense>
);

export { LazyPage1lu6yud };
