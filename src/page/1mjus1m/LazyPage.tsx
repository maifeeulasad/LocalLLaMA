import React, { lazy, Suspense } from 'react';

const Page1mjus1m = lazy(() => import('./Page'));

const LazyPage1mjus1m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjus1m />
  </Suspense>
);

export { LazyPage1mjus1m };
