import React, { lazy, Suspense } from 'react';

const Page1mj6pi9 = lazy(() => import('./Page'));

const LazyPage1mj6pi9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj6pi9 />
  </Suspense>
);

export { LazyPage1mj6pi9 };
