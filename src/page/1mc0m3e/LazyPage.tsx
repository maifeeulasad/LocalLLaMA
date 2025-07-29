import React, { lazy, Suspense } from 'react';

const Page1mc0m3e = lazy(() => import('./Page'));

const LazyPage1mc0m3e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc0m3e />
  </Suspense>
);

export { LazyPage1mc0m3e };
