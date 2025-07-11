import React, { lazy, Suspense } from 'react';

const Page1lwvci3 = lazy(() => import('./Page'));

const LazyPage1lwvci3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwvci3 />
  </Suspense>
);

export { LazyPage1lwvci3 };
