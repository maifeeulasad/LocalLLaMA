import React, { lazy, Suspense } from 'react';

const Page1luy32e = lazy(() => import('./Page'));

const LazyPage1luy32e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luy32e />
  </Suspense>
);

export { LazyPage1luy32e };
