import React, { lazy, Suspense } from 'react';

const Page1mfc1oj = lazy(() => import('./Page'));

const LazyPage1mfc1oj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfc1oj />
  </Suspense>
);

export { LazyPage1mfc1oj };
