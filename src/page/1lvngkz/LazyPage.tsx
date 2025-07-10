import React, { lazy, Suspense } from 'react';

const Page1lvngkz = lazy(() => import('./Page'));

const LazyPage1lvngkz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvngkz />
  </Suspense>
);

export { LazyPage1lvngkz };
