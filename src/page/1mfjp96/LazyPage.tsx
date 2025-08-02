import React, { lazy, Suspense } from 'react';

const Page1mfjp96 = lazy(() => import('./Page'));

const LazyPage1mfjp96 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfjp96 />
  </Suspense>
);

export { LazyPage1mfjp96 };
