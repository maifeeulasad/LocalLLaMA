import React, { lazy, Suspense } from 'react';

const Page1lv1fpo = lazy(() => import('./Page'));

const LazyPage1lv1fpo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv1fpo />
  </Suspense>
);

export { LazyPage1lv1fpo };
