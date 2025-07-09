import React, { lazy, Suspense } from 'react';

const Page1lvjwoh = lazy(() => import('./Page'));

const LazyPage1lvjwoh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvjwoh />
  </Suspense>
);

export { LazyPage1lvjwoh };
