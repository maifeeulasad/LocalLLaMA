import React, { lazy, Suspense } from 'react';

const Page1mjwyhl = lazy(() => import('./Page'));

const LazyPage1mjwyhl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjwyhl />
  </Suspense>
);

export { LazyPage1mjwyhl };
