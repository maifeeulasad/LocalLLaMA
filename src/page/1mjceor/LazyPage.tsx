import React, { lazy, Suspense } from 'react';

const Page1mjceor = lazy(() => import('./Page'));

const LazyPage1mjceor = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjceor />
  </Suspense>
);

export { LazyPage1mjceor };
