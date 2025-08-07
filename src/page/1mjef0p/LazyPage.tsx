import React, { lazy, Suspense } from 'react';

const Page1mjef0p = lazy(() => import('./Page'));

const LazyPage1mjef0p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjef0p />
  </Suspense>
);

export { LazyPage1mjef0p };
