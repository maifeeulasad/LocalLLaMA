import React, { lazy, Suspense } from 'react';

const Page1lvun89 = lazy(() => import('./Page'));

const LazyPage1lvun89 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvun89 />
  </Suspense>
);

export { LazyPage1lvun89 };
