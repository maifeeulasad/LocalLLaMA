import React, { lazy, Suspense } from 'react';

const Page1m5fkts = lazy(() => import('./Page'));

const LazyPage1m5fkts = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5fkts />
  </Suspense>
);

export { LazyPage1m5fkts };
