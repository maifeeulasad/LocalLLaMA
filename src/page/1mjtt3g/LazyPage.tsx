import React, { lazy, Suspense } from 'react';

const Page1mjtt3g = lazy(() => import('./Page'));

const LazyPage1mjtt3g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjtt3g />
  </Suspense>
);

export { LazyPage1mjtt3g };
