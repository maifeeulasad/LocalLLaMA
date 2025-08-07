import React, { lazy, Suspense } from 'react';

const Page1mjwp99 = lazy(() => import('./Page'));

const LazyPage1mjwp99 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjwp99 />
  </Suspense>
);

export { LazyPage1mjwp99 };
