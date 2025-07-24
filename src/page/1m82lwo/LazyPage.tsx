import React, { lazy, Suspense } from 'react';

const Page1m82lwo = lazy(() => import('./Page'));

const LazyPage1m82lwo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m82lwo />
  </Suspense>
);

export { LazyPage1m82lwo };
