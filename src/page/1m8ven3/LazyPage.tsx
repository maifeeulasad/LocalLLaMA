import React, { lazy, Suspense } from 'react';

const Page1m8ven3 = lazy(() => import('./Page'));

const LazyPage1m8ven3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8ven3 />
  </Suspense>
);

export { LazyPage1m8ven3 };
