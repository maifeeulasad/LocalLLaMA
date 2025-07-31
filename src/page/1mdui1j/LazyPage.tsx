import React, { lazy, Suspense } from 'react';

const Page1mdui1j = lazy(() => import('./Page'));

const LazyPage1mdui1j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdui1j />
  </Suspense>
);

export { LazyPage1mdui1j };
