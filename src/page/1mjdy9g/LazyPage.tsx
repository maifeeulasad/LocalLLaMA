import React, { lazy, Suspense } from 'react';

const Page1mjdy9g = lazy(() => import('./Page'));

const LazyPage1mjdy9g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjdy9g />
  </Suspense>
);

export { LazyPage1mjdy9g };
