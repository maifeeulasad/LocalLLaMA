import React, { lazy, Suspense } from 'react';

const Page1mgi7v8 = lazy(() => import('./Page'));

const LazyPage1mgi7v8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgi7v8 />
  </Suspense>
);

export { LazyPage1mgi7v8 };
