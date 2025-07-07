import React, { lazy, Suspense } from 'react';

const Page1lt1z1a = lazy(() => import('./Page'));

const LazyPage1lt1z1a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt1z1a />
  </Suspense>
);

export { LazyPage1lt1z1a };
