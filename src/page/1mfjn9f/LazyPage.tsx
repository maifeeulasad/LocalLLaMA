import React, { lazy, Suspense } from 'react';

const Page1mfjn9f = lazy(() => import('./Page'));

const LazyPage1mfjn9f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfjn9f />
  </Suspense>
);

export { LazyPage1mfjn9f };
