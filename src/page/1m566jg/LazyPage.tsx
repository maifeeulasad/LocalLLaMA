import React, { lazy, Suspense } from 'react';

const Page1m566jg = lazy(() => import('./Page'));

const LazyPage1m566jg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m566jg />
  </Suspense>
);

export { LazyPage1m566jg };
