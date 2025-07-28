import React, { lazy, Suspense } from 'react';

const Page1mbbphk = lazy(() => import('./Page'));

const LazyPage1mbbphk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbbphk />
  </Suspense>
);

export { LazyPage1mbbphk };
