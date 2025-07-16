import React, { lazy, Suspense } from 'react';

const Page1m19kfw = lazy(() => import('./Page'));

const LazyPage1m19kfw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m19kfw />
  </Suspense>
);

export { LazyPage1m19kfw };
