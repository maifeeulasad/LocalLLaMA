import React, { lazy, Suspense } from 'react';

const Page1mj6xif = lazy(() => import('./Page'));

const LazyPage1mj6xif = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj6xif />
  </Suspense>
);

export { LazyPage1mj6xif };
