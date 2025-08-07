import React, { lazy, Suspense } from 'react';

const Page1mjwyfj = lazy(() => import('./Page'));

const LazyPage1mjwyfj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjwyfj />
  </Suspense>
);

export { LazyPage1mjwyfj };
