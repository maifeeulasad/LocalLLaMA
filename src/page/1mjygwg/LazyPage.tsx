import React, { lazy, Suspense } from 'react';

const Page1mjygwg = lazy(() => import('./Page'));

const LazyPage1mjygwg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjygwg />
  </Suspense>
);

export { LazyPage1mjygwg };
