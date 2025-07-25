import React, { lazy, Suspense } from 'react';

const Page1m8i781 = lazy(() => import('./Page'));

const LazyPage1m8i781 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8i781 />
  </Suspense>
);

export { LazyPage1m8i781 };
