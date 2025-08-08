import React, { lazy, Suspense } from 'react';

const Page1mkp72g = lazy(() => import('./Page'));

const LazyPage1mkp72g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkp72g />
  </Suspense>
);

export { LazyPage1mkp72g };
