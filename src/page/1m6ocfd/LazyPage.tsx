import React, { lazy, Suspense } from 'react';

const Page1m6ocfd = lazy(() => import('./Page'));

const LazyPage1m6ocfd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6ocfd />
  </Suspense>
);

export { LazyPage1m6ocfd };
