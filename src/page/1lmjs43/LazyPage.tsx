import React, { lazy, Suspense } from 'react';

const Page1lmjs43 = lazy(() => import('./Page'));

const LazyPage1lmjs43 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmjs43 />
  </Suspense>
);

export { LazyPage1lmjs43 };
