import React, { lazy, Suspense } from 'react';

const Page1mjgv2m = lazy(() => import('./Page'));

const LazyPage1mjgv2m = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjgv2m />
  </Suspense>
);

export { LazyPage1mjgv2m };
