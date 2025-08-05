import React, { lazy, Suspense } from 'react';

const Page1mhe2h9 = lazy(() => import('./Page'));

const LazyPage1mhe2h9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhe2h9 />
  </Suspense>
);

export { LazyPage1mhe2h9 };
