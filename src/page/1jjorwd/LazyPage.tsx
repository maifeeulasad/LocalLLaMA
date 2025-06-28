import React, { lazy, Suspense } from 'react';

const Page1jjorwd = lazy(() => import('./Page'));

const LazyPage1jjorwd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1jjorwd />
  </Suspense>
);

export { LazyPage1jjorwd };
