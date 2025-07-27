import React, { lazy, Suspense } from 'react';

const Page1m9wxow = lazy(() => import('./Page'));

const LazyPage1m9wxow = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9wxow />
  </Suspense>
);

export { LazyPage1m9wxow };
