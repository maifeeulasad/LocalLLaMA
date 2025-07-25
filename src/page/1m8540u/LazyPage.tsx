import React, { lazy, Suspense } from 'react';

const Page1m8540u = lazy(() => import('./Page'));

const LazyPage1m8540u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8540u />
  </Suspense>
);

export { LazyPage1m8540u };
