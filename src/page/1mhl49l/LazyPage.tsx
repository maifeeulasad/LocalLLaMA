import React, { lazy, Suspense } from 'react';

const Page1mhl49l = lazy(() => import('./Page'));

const LazyPage1mhl49l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhl49l />
  </Suspense>
);

export { LazyPage1mhl49l };
