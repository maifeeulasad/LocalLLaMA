import React, { lazy, Suspense } from 'react';

const Page1lp78v3 = lazy(() => import('./Page'));

const LazyPage1lp78v3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp78v3 />
  </Suspense>
);

export { LazyPage1lp78v3 };
