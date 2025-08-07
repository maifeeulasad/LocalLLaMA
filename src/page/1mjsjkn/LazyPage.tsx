import React, { lazy, Suspense } from 'react';

const Page1mjsjkn = lazy(() => import('./Page'));

const LazyPage1mjsjkn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjsjkn />
  </Suspense>
);

export { LazyPage1mjsjkn };
