import React, { lazy, Suspense } from 'react';

const Page1lo3548 = lazy(() => import('./Page'));

const LazyPage1lo3548 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo3548 />
  </Suspense>
);

export { LazyPage1lo3548 };
