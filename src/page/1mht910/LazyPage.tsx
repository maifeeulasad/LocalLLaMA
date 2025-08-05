import React, { lazy, Suspense } from 'react';

const Page1mht910 = lazy(() => import('./Page'));

const LazyPage1mht910 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mht910 />
  </Suspense>
);

export { LazyPage1mht910 };
