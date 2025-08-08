import React, { lazy, Suspense } from 'react';

const Page1mkp7v4 = lazy(() => import('./Page'));

const LazyPage1mkp7v4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkp7v4 />
  </Suspense>
);

export { LazyPage1mkp7v4 };
