import React, { lazy, Suspense } from 'react';

const Page1mjajrl = lazy(() => import('./Page'));

const LazyPage1mjajrl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjajrl />
  </Suspense>
);

export { LazyPage1mjajrl };
