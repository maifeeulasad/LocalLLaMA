import React, { lazy, Suspense } from 'react';

const Page1mjv9l1 = lazy(() => import('./Page'));

const LazyPage1mjv9l1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjv9l1 />
  </Suspense>
);

export { LazyPage1mjv9l1 };
