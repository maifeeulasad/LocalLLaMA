import React, { lazy, Suspense } from 'react';

const Page1mjhu5o = lazy(() => import('./Page'));

const LazyPage1mjhu5o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjhu5o />
  </Suspense>
);

export { LazyPage1mjhu5o };
