import React, { lazy, Suspense } from 'react';

const Page1hz28ld = lazy(() => import('./Page'));

const LazyPage1hz28ld = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1hz28ld />
  </Suspense>
);

export { LazyPage1hz28ld };
