import React, { lazy, Suspense } from 'react';

const Page1m2mdc8 = lazy(() => import('./Page'));

const LazyPage1m2mdc8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2mdc8 />
  </Suspense>
);

export { LazyPage1m2mdc8 };
