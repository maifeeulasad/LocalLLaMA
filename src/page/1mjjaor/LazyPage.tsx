import React, { lazy, Suspense } from 'react';

const Page1mjjaor = lazy(() => import('./Page'));

const LazyPage1mjjaor = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjjaor />
  </Suspense>
);

export { LazyPage1mjjaor };
