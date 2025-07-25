import React, { lazy, Suspense } from 'react';

const Page1m8peos = lazy(() => import('./Page'));

const LazyPage1m8peos = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8peos />
  </Suspense>
);

export { LazyPage1m8peos };
