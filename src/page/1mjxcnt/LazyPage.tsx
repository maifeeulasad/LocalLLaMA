import React, { lazy, Suspense } from 'react';

const Page1mjxcnt = lazy(() => import('./Page'));

const LazyPage1mjxcnt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjxcnt />
  </Suspense>
);

export { LazyPage1mjxcnt };
