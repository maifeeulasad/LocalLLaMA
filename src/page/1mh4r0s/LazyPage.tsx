import React, { lazy, Suspense } from 'react';

const Page1mh4r0s = lazy(() => import('./Page'));

const LazyPage1mh4r0s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh4r0s />
  </Suspense>
);

export { LazyPage1mh4r0s };
