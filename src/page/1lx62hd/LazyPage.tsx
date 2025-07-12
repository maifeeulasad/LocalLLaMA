import React, { lazy, Suspense } from 'react';

const Page1lx62hd = lazy(() => import('./Page'));

const LazyPage1lx62hd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx62hd />
  </Suspense>
);

export { LazyPage1lx62hd };
