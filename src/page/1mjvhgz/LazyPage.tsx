import React, { lazy, Suspense } from 'react';

const Page1mjvhgz = lazy(() => import('./Page'));

const LazyPage1mjvhgz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjvhgz />
  </Suspense>
);

export { LazyPage1mjvhgz };
