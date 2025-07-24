import React, { lazy, Suspense } from 'react';

const Page1m7yswh = lazy(() => import('./Page'));

const LazyPage1m7yswh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7yswh />
  </Suspense>
);

export { LazyPage1m7yswh };
