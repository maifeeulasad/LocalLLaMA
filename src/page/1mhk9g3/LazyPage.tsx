import React, { lazy, Suspense } from 'react';

const Page1mhk9g3 = lazy(() => import('./Page'));

const LazyPage1mhk9g3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhk9g3 />
  </Suspense>
);

export { LazyPage1mhk9g3 };
