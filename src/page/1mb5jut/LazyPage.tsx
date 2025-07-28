import React, { lazy, Suspense } from 'react';

const Page1mb5jut = lazy(() => import('./Page'));

const LazyPage1mb5jut = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb5jut />
  </Suspense>
);

export { LazyPage1mb5jut };
