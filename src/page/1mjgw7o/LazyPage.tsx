import React, { lazy, Suspense } from 'react';

const Page1mjgw7o = lazy(() => import('./Page'));

const LazyPage1mjgw7o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjgw7o />
  </Suspense>
);

export { LazyPage1mjgw7o };
