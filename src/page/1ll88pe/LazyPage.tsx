import React, { lazy, Suspense } from 'react';

const Page1ll88pe = lazy(() => import('./Page'));

const LazyPage1ll88pe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ll88pe />
  </Suspense>
);

export { LazyPage1ll88pe };
