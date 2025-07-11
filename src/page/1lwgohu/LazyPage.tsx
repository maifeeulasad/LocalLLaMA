import React, { lazy, Suspense } from 'react';

const Page1lwgohu = lazy(() => import('./Page'));

const LazyPage1lwgohu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwgohu />
  </Suspense>
);

export { LazyPage1lwgohu };
