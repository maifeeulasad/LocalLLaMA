import React, { lazy, Suspense } from 'react';

const Page1me88j7 = lazy(() => import('./Page'));

const LazyPage1me88j7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me88j7 />
  </Suspense>
);

export { LazyPage1me88j7 };
