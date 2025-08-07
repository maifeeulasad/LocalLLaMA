import React, { lazy, Suspense } from 'react';

const Page1mjt5hw = lazy(() => import('./Page'));

const LazyPage1mjt5hw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjt5hw />
  </Suspense>
);

export { LazyPage1mjt5hw };
