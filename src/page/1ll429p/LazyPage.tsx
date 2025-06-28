import React, { lazy, Suspense } from 'react';

const Page1ll429p = lazy(() => import('./Page'));

const LazyPage1ll429p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ll429p />
  </Suspense>
);

export { LazyPage1ll429p };
