import React, { lazy, Suspense } from 'react';

const Page1mij7ki = lazy(() => import('./Page'));

const LazyPage1mij7ki = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mij7ki />
  </Suspense>
);

export { LazyPage1mij7ki };
