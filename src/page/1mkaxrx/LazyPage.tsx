import React, { lazy, Suspense } from 'react';

const Page1mkaxrx = lazy(() => import('./Page'));

const LazyPage1mkaxrx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkaxrx />
  </Suspense>
);

export { LazyPage1mkaxrx };
