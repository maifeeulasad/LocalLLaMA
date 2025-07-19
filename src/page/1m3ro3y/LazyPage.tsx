import React, { lazy, Suspense } from 'react';

const Page1m3ro3y = lazy(() => import('./Page'));

const LazyPage1m3ro3y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3ro3y />
  </Suspense>
);

export { LazyPage1m3ro3y };
