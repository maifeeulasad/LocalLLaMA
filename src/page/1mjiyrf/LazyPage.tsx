import React, { lazy, Suspense } from 'react';

const Page1mjiyrf = lazy(() => import('./Page'));

const LazyPage1mjiyrf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjiyrf />
  </Suspense>
);

export { LazyPage1mjiyrf };
