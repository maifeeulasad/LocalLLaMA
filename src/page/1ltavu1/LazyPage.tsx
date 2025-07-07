import React, { lazy, Suspense } from 'react';

const Page1ltavu1 = lazy(() => import('./Page'));

const LazyPage1ltavu1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltavu1 />
  </Suspense>
);

export { LazyPage1ltavu1 };
