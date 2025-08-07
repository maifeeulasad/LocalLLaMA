import React, { lazy, Suspense } from 'react';

const Page1mjrlr4 = lazy(() => import('./Page'));

const LazyPage1mjrlr4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjrlr4 />
  </Suspense>
);

export { LazyPage1mjrlr4 };
