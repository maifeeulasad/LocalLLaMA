import React, { lazy, Suspense } from 'react';

const Page1m0fp0r = lazy(() => import('./Page'));

const LazyPage1m0fp0r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0fp0r />
  </Suspense>
);

export { LazyPage1m0fp0r };
