import React, { lazy, Suspense } from 'react';

const Page1lwrad1 = lazy(() => import('./Page'));

const LazyPage1lwrad1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwrad1 />
  </Suspense>
);

export { LazyPage1lwrad1 };
