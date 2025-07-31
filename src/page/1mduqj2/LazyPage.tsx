import React, { lazy, Suspense } from 'react';

const Page1mduqj2 = lazy(() => import('./Page'));

const LazyPage1mduqj2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mduqj2 />
  </Suspense>
);

export { LazyPage1mduqj2 };
