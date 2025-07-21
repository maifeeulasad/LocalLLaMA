import React, { lazy, Suspense } from 'react';

const Page1m4qzmt = lazy(() => import('./Page'));

const LazyPage1m4qzmt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4qzmt />
  </Suspense>
);

export { LazyPage1m4qzmt };
