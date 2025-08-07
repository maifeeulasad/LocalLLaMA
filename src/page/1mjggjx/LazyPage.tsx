import React, { lazy, Suspense } from 'react';

const Page1mjggjx = lazy(() => import('./Page'));

const LazyPage1mjggjx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjggjx />
  </Suspense>
);

export { LazyPage1mjggjx };
