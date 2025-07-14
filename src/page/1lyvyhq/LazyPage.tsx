import React, { lazy, Suspense } from 'react';

const Page1lyvyhq = lazy(() => import('./Page'));

const LazyPage1lyvyhq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyvyhq />
  </Suspense>
);

export { LazyPage1lyvyhq };
