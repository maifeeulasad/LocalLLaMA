import React, { lazy, Suspense } from 'react';

const Page1mcnq7r = lazy(() => import('./Page'));

const LazyPage1mcnq7r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcnq7r />
  </Suspense>
);

export { LazyPage1mcnq7r };
