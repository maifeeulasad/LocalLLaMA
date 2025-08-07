import React, { lazy, Suspense } from 'react';

const Page1mjb07s = lazy(() => import('./Page'));

const LazyPage1mjb07s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjb07s />
  </Suspense>
);

export { LazyPage1mjb07s };
