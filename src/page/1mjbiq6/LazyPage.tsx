import React, { lazy, Suspense } from 'react';

const Page1mjbiq6 = lazy(() => import('./Page'));

const LazyPage1mjbiq6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjbiq6 />
  </Suspense>
);

export { LazyPage1mjbiq6 };
