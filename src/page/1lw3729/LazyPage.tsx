import React, { lazy, Suspense } from 'react';

const Page1lw3729 = lazy(() => import('./Page'));

const LazyPage1lw3729 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw3729 />
  </Suspense>
);

export { LazyPage1lw3729 };
