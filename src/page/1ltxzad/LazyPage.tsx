import React, { lazy, Suspense } from 'react';

const Page1ltxzad = lazy(() => import('./Page'));

const LazyPage1ltxzad = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltxzad />
  </Suspense>
);

export { LazyPage1ltxzad };
