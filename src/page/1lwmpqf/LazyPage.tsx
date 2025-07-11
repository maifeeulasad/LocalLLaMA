import React, { lazy, Suspense } from 'react';

const Page1lwmpqf = lazy(() => import('./Page'));

const LazyPage1lwmpqf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwmpqf />
  </Suspense>
);

export { LazyPage1lwmpqf };
