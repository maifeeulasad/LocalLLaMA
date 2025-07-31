import React, { lazy, Suspense } from 'react';

const Page1mdpd70 = lazy(() => import('./Page'));

const LazyPage1mdpd70 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdpd70 />
  </Suspense>
);

export { LazyPage1mdpd70 };
