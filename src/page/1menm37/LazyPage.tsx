import React, { lazy, Suspense } from 'react';

const Page1menm37 = lazy(() => import('./Page'));

const LazyPage1menm37 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1menm37 />
  </Suspense>
);

export { LazyPage1menm37 };
