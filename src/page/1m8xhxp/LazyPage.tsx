import React, { lazy, Suspense } from 'react';

const Page1m8xhxp = lazy(() => import('./Page'));

const LazyPage1m8xhxp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8xhxp />
  </Suspense>
);

export { LazyPage1m8xhxp };
