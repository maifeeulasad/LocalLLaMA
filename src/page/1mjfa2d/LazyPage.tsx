import React, { lazy, Suspense } from 'react';

const Page1mjfa2d = lazy(() => import('./Page'));

const LazyPage1mjfa2d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjfa2d />
  </Suspense>
);

export { LazyPage1mjfa2d };
