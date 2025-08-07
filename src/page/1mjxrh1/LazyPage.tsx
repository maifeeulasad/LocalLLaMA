import React, { lazy, Suspense } from 'react';

const Page1mjxrh1 = lazy(() => import('./Page'));

const LazyPage1mjxrh1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjxrh1 />
  </Suspense>
);

export { LazyPage1mjxrh1 };
