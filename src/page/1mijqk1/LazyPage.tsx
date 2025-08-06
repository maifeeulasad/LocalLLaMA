import React, { lazy, Suspense } from 'react';

const Page1mijqk1 = lazy(() => import('./Page'));

const LazyPage1mijqk1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mijqk1 />
  </Suspense>
);

export { LazyPage1mijqk1 };
