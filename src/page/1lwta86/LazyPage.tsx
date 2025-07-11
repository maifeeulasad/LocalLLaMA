import React, { lazy, Suspense } from 'react';

const Page1lwta86 = lazy(() => import('./Page'));

const LazyPage1lwta86 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwta86 />
  </Suspense>
);

export { LazyPage1lwta86 };
