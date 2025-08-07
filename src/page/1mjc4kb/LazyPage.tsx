import React, { lazy, Suspense } from 'react';

const Page1mjc4kb = lazy(() => import('./Page'));

const LazyPage1mjc4kb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjc4kb />
  </Suspense>
);

export { LazyPage1mjc4kb };
