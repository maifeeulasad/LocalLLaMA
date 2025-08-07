import React, { lazy, Suspense } from 'react';

const Page1mjvezz = lazy(() => import('./Page'));

const LazyPage1mjvezz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjvezz />
  </Suspense>
);

export { LazyPage1mjvezz };
