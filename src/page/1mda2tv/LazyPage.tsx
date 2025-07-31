import React, { lazy, Suspense } from 'react';

const Page1mda2tv = lazy(() => import('./Page'));

const LazyPage1mda2tv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mda2tv />
  </Suspense>
);

export { LazyPage1mda2tv };
