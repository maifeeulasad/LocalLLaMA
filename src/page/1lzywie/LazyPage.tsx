import React, { lazy, Suspense } from 'react';

const Page1lzywie = lazy(() => import('./Page'));

const LazyPage1lzywie = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzywie />
  </Suspense>
);

export { LazyPage1lzywie };
