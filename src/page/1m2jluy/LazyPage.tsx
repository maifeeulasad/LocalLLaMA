import React, { lazy, Suspense } from 'react';

const Page1m2jluy = lazy(() => import('./Page'));

const LazyPage1m2jluy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2jluy />
  </Suspense>
);

export { LazyPage1m2jluy };
