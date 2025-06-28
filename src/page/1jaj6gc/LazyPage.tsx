import React, { lazy, Suspense } from 'react';

const Page1jaj6gc = lazy(() => import('./Page'));

const LazyPage1jaj6gc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1jaj6gc />
  </Suspense>
);

export { LazyPage1jaj6gc };
