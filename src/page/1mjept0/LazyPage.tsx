import React, { lazy, Suspense } from 'react';

const Page1mjept0 = lazy(() => import('./Page'));

const LazyPage1mjept0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjept0 />
  </Suspense>
);

export { LazyPage1mjept0 };
