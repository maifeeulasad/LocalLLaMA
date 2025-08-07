import React, { lazy, Suspense } from 'react';

const Page1mjagod = lazy(() => import('./Page'));

const LazyPage1mjagod = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjagod />
  </Suspense>
);

export { LazyPage1mjagod };
