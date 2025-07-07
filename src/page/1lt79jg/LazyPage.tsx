import React, { lazy, Suspense } from 'react';

const Page1lt79jg = lazy(() => import('./Page'));

const LazyPage1lt79jg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lt79jg />
  </Suspense>
);

export { LazyPage1lt79jg };
