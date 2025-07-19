import React, { lazy, Suspense } from 'react';

const Page1m3kzg4 = lazy(() => import('./Page'));

const LazyPage1m3kzg4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3kzg4 />
  </Suspense>
);

export { LazyPage1m3kzg4 };
