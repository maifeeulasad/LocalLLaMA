import React, { lazy, Suspense } from 'react';

const Page1mjxcwp = lazy(() => import('./Page'));

const LazyPage1mjxcwp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjxcwp />
  </Suspense>
);

export { LazyPage1mjxcwp };
