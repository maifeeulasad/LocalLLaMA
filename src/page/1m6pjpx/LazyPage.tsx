import React, { lazy, Suspense } from 'react';

const Page1m6pjpx = lazy(() => import('./Page'));

const LazyPage1m6pjpx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6pjpx />
  </Suspense>
);

export { LazyPage1m6pjpx };
