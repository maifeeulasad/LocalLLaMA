import React, { lazy, Suspense } from 'react';

const Page1lumsd2 = lazy(() => import('./Page'));

const LazyPage1lumsd2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lumsd2 />
  </Suspense>
);

export { LazyPage1lumsd2 };
