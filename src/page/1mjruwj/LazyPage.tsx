import React, { lazy, Suspense } from 'react';

const Page1mjruwj = lazy(() => import('./Page'));

const LazyPage1mjruwj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjruwj />
  </Suspense>
);

export { LazyPage1mjruwj };
