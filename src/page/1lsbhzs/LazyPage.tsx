import React, { lazy, Suspense } from 'react';

const Page1lsbhzs = lazy(() => import('./Page'));

const LazyPage1lsbhzs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsbhzs />
  </Suspense>
);

export { LazyPage1lsbhzs };
