import React, { lazy, Suspense } from 'react';

const Page1mijdx7 = lazy(() => import('./Page'));

const LazyPage1mijdx7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mijdx7 />
  </Suspense>
);

export { LazyPage1mijdx7 };
