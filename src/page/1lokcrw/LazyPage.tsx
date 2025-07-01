import React, { lazy, Suspense } from 'react';

const Page1lokcrw = lazy(() => import('./Page'));

const LazyPage1lokcrw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lokcrw />
  </Suspense>
);

export { LazyPage1lokcrw };
