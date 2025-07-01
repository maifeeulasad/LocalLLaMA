import React, { lazy, Suspense } from 'react';

const Page1loo2u3 = lazy(() => import('./Page'));

const LazyPage1loo2u3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loo2u3 />
  </Suspense>
);

export { LazyPage1loo2u3 };
