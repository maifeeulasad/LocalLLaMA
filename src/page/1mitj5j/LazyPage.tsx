import React, { lazy, Suspense } from 'react';

const Page1mitj5j = lazy(() => import('./Page'));

const LazyPage1mitj5j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mitj5j />
  </Suspense>
);

export { LazyPage1mitj5j };
