import React, { lazy, Suspense } from 'react';

const Page1lm4tno = lazy(() => import('./Page'));

const LazyPage1lm4tno = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm4tno />
  </Suspense>
);

export { LazyPage1lm4tno };
