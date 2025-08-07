import React, { lazy, Suspense } from 'react';

const Page1mjdqqm = lazy(() => import('./Page'));

const LazyPage1mjdqqm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjdqqm />
  </Suspense>
);

export { LazyPage1mjdqqm };
