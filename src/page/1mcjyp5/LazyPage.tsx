import React, { lazy, Suspense } from 'react';

const Page1mcjyp5 = lazy(() => import('./Page'));

const LazyPage1mcjyp5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcjyp5 />
  </Suspense>
);

export { LazyPage1mcjyp5 };
