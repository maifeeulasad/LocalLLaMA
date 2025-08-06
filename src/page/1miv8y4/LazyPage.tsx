import React, { lazy, Suspense } from 'react';

const Page1miv8y4 = lazy(() => import('./Page'));

const LazyPage1miv8y4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miv8y4 />
  </Suspense>
);

export { LazyPage1miv8y4 };
