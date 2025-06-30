import React, { lazy, Suspense } from 'react';

const Page1lnyfu0 = lazy(() => import('./Page'));

const LazyPage1lnyfu0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnyfu0 />
  </Suspense>
);

export { LazyPage1lnyfu0 };
