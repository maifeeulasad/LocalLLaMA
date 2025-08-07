import React, { lazy, Suspense } from 'react';

const Page1mjebkx = lazy(() => import('./Page'));

const LazyPage1mjebkx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjebkx />
  </Suspense>
);

export { LazyPage1mjebkx };
