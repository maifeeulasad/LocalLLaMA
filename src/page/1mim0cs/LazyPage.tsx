import React, { lazy, Suspense } from 'react';

const Page1mim0cs = lazy(() => import('./Page'));

const LazyPage1mim0cs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mim0cs />
  </Suspense>
);

export { LazyPage1mim0cs };
