import React, { lazy, Suspense } from 'react';

const Page1lompd5 = lazy(() => import('./Page'));

const LazyPage1lompd5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lompd5 />
  </Suspense>
);

export { LazyPage1lompd5 };
