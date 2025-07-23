import React, { lazy, Suspense } from 'react';

const Page1m6lf9s = lazy(() => import('./Page'));

const LazyPage1m6lf9s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6lf9s />
  </Suspense>
);

export { LazyPage1m6lf9s };
