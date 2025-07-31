import React, { lazy, Suspense } from 'react';

const Page1mdwngf = lazy(() => import('./Page'));

const LazyPage1mdwngf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdwngf />
  </Suspense>
);

export { LazyPage1mdwngf };
