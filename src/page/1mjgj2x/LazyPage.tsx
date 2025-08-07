import React, { lazy, Suspense } from 'react';

const Page1mjgj2x = lazy(() => import('./Page'));

const LazyPage1mjgj2x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjgj2x />
  </Suspense>
);

export { LazyPage1mjgj2x };
