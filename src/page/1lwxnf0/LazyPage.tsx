import React, { lazy, Suspense } from 'react';

const Page1lwxnf0 = lazy(() => import('./Page'));

const LazyPage1lwxnf0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwxnf0 />
  </Suspense>
);

export { LazyPage1lwxnf0 };
