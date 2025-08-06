import React, { lazy, Suspense } from 'react';

const Page1milfjl = lazy(() => import('./Page'));

const LazyPage1milfjl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1milfjl />
  </Suspense>
);

export { LazyPage1milfjl };
