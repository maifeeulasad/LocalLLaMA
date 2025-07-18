import React, { lazy, Suspense } from 'react';

const Page1m2u9n3 = lazy(() => import('./Page'));

const LazyPage1m2u9n3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2u9n3 />
  </Suspense>
);

export { LazyPage1m2u9n3 };
