import React, { lazy, Suspense } from 'react';

const Page1lpwj5j = lazy(() => import('./Page'));

const LazyPage1lpwj5j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpwj5j />
  </Suspense>
);

export { LazyPage1lpwj5j };
