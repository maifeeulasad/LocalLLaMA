import React, { lazy, Suspense } from 'react';

const Page1mdwm49 = lazy(() => import('./Page'));

const LazyPage1mdwm49 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdwm49 />
  </Suspense>
);

export { LazyPage1mdwm49 };
