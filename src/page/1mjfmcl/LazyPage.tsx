import React, { lazy, Suspense } from 'react';

const Page1mjfmcl = lazy(() => import('./Page'));

const LazyPage1mjfmcl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjfmcl />
  </Suspense>
);

export { LazyPage1mjfmcl };
