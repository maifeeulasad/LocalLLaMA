import React, { lazy, Suspense } from 'react';

const Page1mjm5vm = lazy(() => import('./Page'));

const LazyPage1mjm5vm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjm5vm />
  </Suspense>
);

export { LazyPage1mjm5vm };
