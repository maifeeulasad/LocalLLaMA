import React, { lazy, Suspense } from 'react';

const Page1lml6eo = lazy(() => import('./Page'));

const LazyPage1lml6eo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lml6eo />
  </Suspense>
);

export { LazyPage1lml6eo };
