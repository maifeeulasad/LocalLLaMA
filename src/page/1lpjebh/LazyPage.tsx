import React, { lazy, Suspense } from 'react';

const Page1lpjebh = lazy(() => import('./Page'));

const LazyPage1lpjebh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpjebh />
  </Suspense>
);

export { LazyPage1lpjebh };
