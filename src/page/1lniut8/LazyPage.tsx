import React, { lazy, Suspense } from 'react';

const Page1lniut8 = lazy(() => import('./Page'));

const LazyPage1lniut8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lniut8 />
  </Suspense>
);

export { LazyPage1lniut8 };
