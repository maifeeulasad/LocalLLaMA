import React, { lazy, Suspense } from 'react';

const Page1lpoju6 = lazy(() => import('./Page'));

const LazyPage1lpoju6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpoju6 />
  </Suspense>
);

export { LazyPage1lpoju6 };
