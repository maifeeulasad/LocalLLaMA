import React, { lazy, Suspense } from 'react';

const Page1m7ne51 = lazy(() => import('./Page'));

const LazyPage1m7ne51 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7ne51 />
  </Suspense>
);

export { LazyPage1m7ne51 };
