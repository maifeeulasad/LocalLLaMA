import React, { lazy, Suspense } from 'react';

const Page1mjaiax = lazy(() => import('./Page'));

const LazyPage1mjaiax = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjaiax />
  </Suspense>
);

export { LazyPage1mjaiax };
