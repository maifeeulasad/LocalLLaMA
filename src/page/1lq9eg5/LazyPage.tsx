import React, { lazy, Suspense } from 'react';

const Page1lq9eg5 = lazy(() => import('./Page'));

const LazyPage1lq9eg5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq9eg5 />
  </Suspense>
);

export { LazyPage1lq9eg5 };
