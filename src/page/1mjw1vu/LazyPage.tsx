import React, { lazy, Suspense } from 'react';

const Page1mjw1vu = lazy(() => import('./Page'));

const LazyPage1mjw1vu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjw1vu />
  </Suspense>
);

export { LazyPage1mjw1vu };
