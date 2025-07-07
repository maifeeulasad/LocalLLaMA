import React, { lazy, Suspense } from 'react';

const Page1lsz4hk = lazy(() => import('./Page'));

const LazyPage1lsz4hk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsz4hk />
  </Suspense>
);

export { LazyPage1lsz4hk };
