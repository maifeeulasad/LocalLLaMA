import React, { lazy, Suspense } from 'react';

const Page1mhlkyx = lazy(() => import('./Page'));

const LazyPage1mhlkyx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhlkyx />
  </Suspense>
);

export { LazyPage1mhlkyx };
