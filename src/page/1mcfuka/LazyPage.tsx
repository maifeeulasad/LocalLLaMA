import React, { lazy, Suspense } from 'react';

const Page1mcfuka = lazy(() => import('./Page'));

const LazyPage1mcfuka = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcfuka />
  </Suspense>
);

export { LazyPage1mcfuka };
