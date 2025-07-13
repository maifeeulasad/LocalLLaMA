import React, { lazy, Suspense } from 'react';

const Page1lyb8tz = lazy(() => import('./Page'));

const LazyPage1lyb8tz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyb8tz />
  </Suspense>
);

export { LazyPage1lyb8tz };
