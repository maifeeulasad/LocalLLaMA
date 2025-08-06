import React, { lazy, Suspense } from 'react';

const Page1minasr = lazy(() => import('./Page'));

const LazyPage1minasr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1minasr />
  </Suspense>
);

export { LazyPage1minasr };
