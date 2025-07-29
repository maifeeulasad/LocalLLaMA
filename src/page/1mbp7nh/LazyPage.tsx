import React, { lazy, Suspense } from 'react';

const Page1mbp7nh = lazy(() => import('./Page'));

const LazyPage1mbp7nh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbp7nh />
  </Suspense>
);

export { LazyPage1mbp7nh };
