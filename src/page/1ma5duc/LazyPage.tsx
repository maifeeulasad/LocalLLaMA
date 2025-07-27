import React, { lazy, Suspense } from 'react';

const Page1ma5duc = lazy(() => import('./Page'));

const LazyPage1ma5duc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma5duc />
  </Suspense>
);

export { LazyPage1ma5duc };
