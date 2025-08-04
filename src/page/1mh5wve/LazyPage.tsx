import React, { lazy, Suspense } from 'react';

const Page1mh5wve = lazy(() => import('./Page'));

const LazyPage1mh5wve = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh5wve />
  </Suspense>
);

export { LazyPage1mh5wve };
