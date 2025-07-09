import React, { lazy, Suspense } from 'react';

const Page1lv7j1j = lazy(() => import('./Page'));

const LazyPage1lv7j1j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv7j1j />
  </Suspense>
);

export { LazyPage1lv7j1j };
