import React, { lazy, Suspense } from 'react';

const Page1lmtlgp = lazy(() => import('./Page'));

const LazyPage1lmtlgp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmtlgp />
  </Suspense>
);

export { LazyPage1lmtlgp };
