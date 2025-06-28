import React, { lazy, Suspense } from 'react';

const Page1ibk9us = lazy(() => import('./Page'));

const LazyPage1ibk9us = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ibk9us />
  </Suspense>
);

export { LazyPage1ibk9us };
