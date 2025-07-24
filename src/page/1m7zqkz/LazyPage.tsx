import React, { lazy, Suspense } from 'react';

const Page1m7zqkz = lazy(() => import('./Page'));

const LazyPage1m7zqkz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7zqkz />
  </Suspense>
);

export { LazyPage1m7zqkz };
