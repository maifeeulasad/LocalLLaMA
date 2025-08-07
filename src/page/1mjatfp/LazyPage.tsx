import React, { lazy, Suspense } from 'react';

const Page1mjatfp = lazy(() => import('./Page'));

const LazyPage1mjatfp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjatfp />
  </Suspense>
);

export { LazyPage1mjatfp };
