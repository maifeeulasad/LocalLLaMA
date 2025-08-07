import React, { lazy, Suspense } from 'react';

const Page1mjuu34 = lazy(() => import('./Page'));

const LazyPage1mjuu34 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjuu34 />
  </Suspense>
);

export { LazyPage1mjuu34 };
