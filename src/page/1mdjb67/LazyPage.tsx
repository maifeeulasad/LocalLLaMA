import React, { lazy, Suspense } from 'react';

const Page1mdjb67 = lazy(() => import('./Page'));

const LazyPage1mdjb67 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdjb67 />
  </Suspense>
);

export { LazyPage1mdjb67 };
