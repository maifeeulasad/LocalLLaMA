import React, { lazy, Suspense } from 'react';

const Page1mjy8ws = lazy(() => import('./Page'));

const LazyPage1mjy8ws = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjy8ws />
  </Suspense>
);

export { LazyPage1mjy8ws };
