import React, { lazy, Suspense } from 'react';

const Page1mjyyx3 = lazy(() => import('./Page'));

const LazyPage1mjyyx3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjyyx3 />
  </Suspense>
);

export { LazyPage1mjyyx3 };
