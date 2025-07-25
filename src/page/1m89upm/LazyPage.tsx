import React, { lazy, Suspense } from 'react';

const Page1m89upm = lazy(() => import('./Page'));

const LazyPage1m89upm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m89upm />
  </Suspense>
);

export { LazyPage1m89upm };
