import React, { lazy, Suspense } from 'react';

const Page1ltm49x = lazy(() => import('./Page'));

const LazyPage1ltm49x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltm49x />
  </Suspense>
);

export { LazyPage1ltm49x };
