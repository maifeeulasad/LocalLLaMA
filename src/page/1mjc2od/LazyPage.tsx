import React, { lazy, Suspense } from 'react';

const Page1mjc2od = lazy(() => import('./Page'));

const LazyPage1mjc2od = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjc2od />
  </Suspense>
);

export { LazyPage1mjc2od };
