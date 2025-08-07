import React, { lazy, Suspense } from 'react';

const Page1mjf5ol = lazy(() => import('./Page'));

const LazyPage1mjf5ol = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjf5ol />
  </Suspense>
);

export { LazyPage1mjf5ol };
