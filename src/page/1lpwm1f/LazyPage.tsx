import React, { lazy, Suspense } from 'react';

const Page1lpwm1f = lazy(() => import('./Page'));

const LazyPage1lpwm1f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpwm1f />
  </Suspense>
);

export { LazyPage1lpwm1f };
