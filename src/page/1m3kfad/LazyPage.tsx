import React, { lazy, Suspense } from 'react';

const Page1m3kfad = lazy(() => import('./Page'));

const LazyPage1m3kfad = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3kfad />
  </Suspense>
);

export { LazyPage1m3kfad };
