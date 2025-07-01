import React, { lazy, Suspense } from 'react';

const Page1lop94b = lazy(() => import('./Page'));

const LazyPage1lop94b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lop94b />
  </Suspense>
);

export { LazyPage1lop94b };
