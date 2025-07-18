import React, { lazy, Suspense } from 'react';

const Page1m3643z = lazy(() => import('./Page'));

const LazyPage1m3643z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3643z />
  </Suspense>
);

export { LazyPage1m3643z };
