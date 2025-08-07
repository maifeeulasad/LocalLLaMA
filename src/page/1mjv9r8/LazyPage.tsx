import React, { lazy, Suspense } from 'react';

const Page1mjv9r8 = lazy(() => import('./Page'));

const LazyPage1mjv9r8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjv9r8 />
  </Suspense>
);

export { LazyPage1mjv9r8 };
