import React, { lazy, Suspense } from 'react';

const Page1lo5uz6 = lazy(() => import('./Page'));

const LazyPage1lo5uz6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo5uz6 />
  </Suspense>
);

export { LazyPage1lo5uz6 };
