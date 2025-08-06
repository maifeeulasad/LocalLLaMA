import React, { lazy, Suspense } from 'react';

const Page1mixw99 = lazy(() => import('./Page'));

const LazyPage1mixw99 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mixw99 />
  </Suspense>
);

export { LazyPage1mixw99 };
