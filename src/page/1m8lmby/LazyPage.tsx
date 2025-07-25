import React, { lazy, Suspense } from 'react';

const Page1m8lmby = lazy(() => import('./Page'));

const LazyPage1m8lmby = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8lmby />
  </Suspense>
);

export { LazyPage1m8lmby };
