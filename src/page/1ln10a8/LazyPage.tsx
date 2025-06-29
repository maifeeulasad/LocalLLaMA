import React, { lazy, Suspense } from 'react';

const Page1ln10a8 = lazy(() => import('./Page'));

const LazyPage1ln10a8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln10a8 />
  </Suspense>
);

export { LazyPage1ln10a8 };
