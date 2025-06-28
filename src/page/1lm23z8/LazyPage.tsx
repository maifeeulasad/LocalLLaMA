import React, { lazy, Suspense } from 'react';

const Page1lm23z8 = lazy(() => import('./Page'));

const LazyPage1lm23z8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm23z8 />
  </Suspense>
);

export { LazyPage1lm23z8 };
