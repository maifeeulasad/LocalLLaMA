import React, { lazy, Suspense } from 'react';

const Page1gx4asf = lazy(() => import('./Page'));

const LazyPage1gx4asf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1gx4asf />
  </Suspense>
);

export { LazyPage1gx4asf };
