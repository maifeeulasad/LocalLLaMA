import React, { lazy, Suspense } from 'react';

const Page1m6hqi8 = lazy(() => import('./Page'));

const LazyPage1m6hqi8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6hqi8 />
  </Suspense>
);

export { LazyPage1m6hqi8 };
