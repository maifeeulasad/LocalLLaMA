import React, { lazy, Suspense } from 'react';

const Page1lpl3mv = lazy(() => import('./Page'));

const LazyPage1lpl3mv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpl3mv />
  </Suspense>
);

export { LazyPage1lpl3mv };
