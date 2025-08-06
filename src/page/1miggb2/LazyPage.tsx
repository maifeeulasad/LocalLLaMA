import React, { lazy, Suspense } from 'react';

const Page1miggb2 = lazy(() => import('./Page'));

const LazyPage1miggb2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miggb2 />
  </Suspense>
);

export { LazyPage1miggb2 };
