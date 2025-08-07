import React, { lazy, Suspense } from 'react';

const Page1mjhsr7 = lazy(() => import('./Page'));

const LazyPage1mjhsr7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjhsr7 />
  </Suspense>
);

export { LazyPage1mjhsr7 };
