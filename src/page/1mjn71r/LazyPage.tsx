import React, { lazy, Suspense } from 'react';

const Page1mjn71r = lazy(() => import('./Page'));

const LazyPage1mjn71r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjn71r />
  </Suspense>
);

export { LazyPage1mjn71r };
