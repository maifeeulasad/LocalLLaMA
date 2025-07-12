import React, { lazy, Suspense } from 'react';

const Page1ly0oln = lazy(() => import('./Page'));

const LazyPage1ly0oln = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly0oln />
  </Suspense>
);

export { LazyPage1ly0oln };
