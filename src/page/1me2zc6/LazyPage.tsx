import React, { lazy, Suspense } from 'react';

const Page1me2zc6 = lazy(() => import('./Page'));

const LazyPage1me2zc6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me2zc6 />
  </Suspense>
);

export { LazyPage1me2zc6 };
