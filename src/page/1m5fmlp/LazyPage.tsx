import React, { lazy, Suspense } from 'react';

const Page1m5fmlp = lazy(() => import('./Page'));

const LazyPage1m5fmlp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5fmlp />
  </Suspense>
);

export { LazyPage1m5fmlp };
