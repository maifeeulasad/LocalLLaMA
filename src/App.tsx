// @ts-nocheck
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';

import { CustomLayout } from './layout/CustomLayout';
import { LazyLanding } from './component/landing/LazyLanding';
import RedditPostRenderer from './component/reddit/RedditPostRenderer';

// replace start---mua--localllama

import data18n3ar3 from './dump/18n3ar3/index.json';
import data199y05e from './dump/199y05e/index.json';
import data1bgh9h4 from './dump/1bgh9h4/index.json';
import data1bqmuto from './dump/1bqmuto/index.json';
import data1cf7hg0 from './dump/1cf7hg0/index.json';
import data1cgrz46 from './dump/1cgrz46/index.json';
import data1cr9wvg from './dump/1cr9wvg/index.json';
import data1d3sf1k from './dump/1d3sf1k/index.json';
import data1efya2r from './dump/1efya2r/index.json';
import data1eh9sef from './dump/1eh9sef/index.json';
import data1ffv39d from './dump/1ffv39d/index.json';
import data1fgsrx8 from './dump/1fgsrx8/index.json';
import data1fpmlga from './dump/1fpmlga/index.json';
import data1g4w2vs from './dump/1g4w2vs/index.json';
import data1gjje70 from './dump/1gjje70/index.json';
import data1gt9f5y from './dump/1gt9f5y/index.json';
import data1gvlzug from './dump/1gvlzug/index.json';
import data1gx4asf from './dump/1gx4asf/index.json';
import data1h85tt4 from './dump/1h85tt4/index.json';
import data1haumxe from './dump/1haumxe/index.json';
import data1hhmebr from './dump/1hhmebr/index.json';
import data1ho27fr from './dump/1ho27fr/index.json';
import data1hphlz7 from './dump/1hphlz7/index.json';
import data1hqklqj from './dump/1hqklqj/index.json';
import data1hvj4wn from './dump/1hvj4wn/index.json';
import data1hwwvuz from './dump/1hwwvuz/index.json';
import data1hxm0ep from './dump/1hxm0ep/index.json';
import data1hz28ld from './dump/1hz28ld/index.json';
import data1i5or1y from './dump/1i5or1y/index.json';
import data1i5s5hk from './dump/1i5s5hk/index.json';
import data1i80cwf from './dump/1i80cwf/index.json';
import data1i88g4y from './dump/1i88g4y/index.json';
import data1i8tx5z from './dump/1i8tx5z/index.json';
import data1i8vclf from './dump/1i8vclf/index.json';
import data1i9nqj9 from './dump/1i9nqj9/index.json';
import data1iaebwp from './dump/1iaebwp/index.json';
import data1ibbloy from './dump/1ibbloy/index.json';
import data1ibk9us from './dump/1ibk9us/index.json';
import data1icaq2z from './dump/1icaq2z/index.json';
import data1icwys9 from './dump/1icwys9/index.json';
import data1id2poe from './dump/1id2poe/index.json';
import data1idseqb from './dump/1idseqb/index.json';
import data1idtkll from './dump/1idtkll/index.json';
import data1idz487 from './dump/1idz487/index.json';
import data1iehstw from './dump/1iehstw/index.json';
import data1ig6e6t from './dump/1ig6e6t/index.json';
import data1igc6r0 from './dump/1igc6r0/index.json';
import data1ih3nc6 from './dump/1ih3nc6/index.json';
import data1iiio9u from './dump/1iiio9u/index.json';
import data1ij5yf2 from './dump/1ij5yf2/index.json';
import data1ijab77 from './dump/1ijab77/index.json';
import data1iji47x from './dump/1iji47x/index.json';
import data1ikvo8a from './dump/1ikvo8a/index.json';
import data1imenfa from './dump/1imenfa/index.json';
import data1imyp19 from './dump/1imyp19/index.json';
import data1inch7r from './dump/1inch7r/index.json';
import data1io2ija from './dump/1io2ija/index.json';
import data1ipfv03 from './dump/1ipfv03/index.json';
import data1ipxszq from './dump/1ipxszq/index.json';
import data1iqpzpk from './dump/1iqpzpk/index.json';
import data1is1p2o from './dump/1is1p2o/index.json';
import data1iskklo from './dump/1iskklo/index.json';
import data1isu4un from './dump/1isu4un/index.json';
import data1iu19zy from './dump/1iu19zy/index.json';
import data1iui6nk from './dump/1iui6nk/index.json';
import data1iwb5nu from './dump/1iwb5nu/index.json';
import data1iy2t7c from './dump/1iy2t7c/index.json';
import data1j0n56h from './dump/1j0n56h/index.json';
import data1j67bxt from './dump/1j67bxt/index.json';
import data1jaj6gc from './dump/1jaj6gc/index.json';
import data1jaoy9g from './dump/1jaoy9g/index.json';
import data1je6ns1 from './dump/1je6ns1/index.json';
import data1jgap0q from './dump/1jgap0q/index.json';
import data1jgqmlr from './dump/1jgqmlr/index.json';
import data1jj6i4m from './dump/1jj6i4m/index.json';
import data1jjorwd from './dump/1jjorwd/index.json';
import data1jl5jea from './dump/1jl5jea/index.json';
import data1jsampe from './dump/1jsampe/index.json';
import data1jsshhe from './dump/1jsshhe/index.json';
import data1jt7hlc from './dump/1jt7hlc/index.json';
import data1juni3t from './dump/1juni3t/index.json';
import data1jytw62 from './dump/1jytw62/index.json';
import data1jzocoo from './dump/1jzocoo/index.json';
import data1k1fi5w from './dump/1k1fi5w/index.json';
import data1k9qxbl from './dump/1k9qxbl/index.json';
import data1ka6mic from './dump/1ka6mic/index.json';
import data1ka8r2t from './dump/1ka8r2t/index.json';
import data1kcwx8e from './dump/1kcwx8e/index.json';
import data1klx9q2 from './dump/1klx9q2/index.json';
import data1ksyicp from './dump/1ksyicp/index.json';
import data1ktlz3w from './dump/1ktlz3w/index.json';
import data1ktx15j from './dump/1ktx15j/index.json';
import data1kzsa70 from './dump/1kzsa70/index.json';
import data1l1qqdx from './dump/1l1qqdx/index.json';
import data1l3dhjx from './dump/1l3dhjx/index.json';
import data1l5wxoa from './dump/1l5wxoa/index.json';
import data1l6ibwg from './dump/1l6ibwg/index.json';
import data1laee7q from './dump/1laee7q/index.json';
import data1lbrnod from './dump/1lbrnod/index.json';
import data1lei5mb from './dump/1lei5mb/index.json';
import data1lkz0hg from './dump/1lkz0hg/index.json';
import data1lkzynl from './dump/1lkzynl/index.json';
import data1ll38zu from './dump/1ll38zu/index.json';
import data1ll429p from './dump/1ll429p/index.json';
import data1ll57uz from './dump/1ll57uz/index.json';
import data1ll68iz from './dump/1ll68iz/index.json';
import data1ll6jo5 from './dump/1ll6jo5/index.json';
import data1ll88pe from './dump/1ll88pe/index.json';
import data1lla27f from './dump/1lla27f/index.json';
import data1llb5e9 from './dump/1llb5e9/index.json';
import data1lleks2 from './dump/1lleks2/index.json';
import data1llhdoq from './dump/1llhdoq/index.json';
import data1lljdk8 from './dump/1lljdk8/index.json';
import data1lllry7 from './dump/1lllry7/index.json';
import data1llltv5 from './dump/1llltv5/index.json';
import data1lllxey from './dump/1lllxey/index.json';
import data1llmhof from './dump/1llmhof/index.json';
import data1llms46 from './dump/1llms46/index.json';
import data1lln5uj from './dump/1lln5uj/index.json';
import data1lln6ar from './dump/1lln6ar/index.json';
import data1llndut from './dump/1llndut/index.json';
import data1llnwna from './dump/1llnwna/index.json';
import data1llnwy5 from './dump/1llnwy5/index.json';
import data1llqp0a from './dump/1llqp0a/index.json';
import data1llsztp from './dump/1llsztp/index.json';
import data1lltmig from './dump/1lltmig/index.json';
import data1llty3n from './dump/1llty3n/index.json';
import data1llu89r from './dump/1llu89r/index.json';
import data1lluur5 from './dump/1lluur5/index.json';
import data1lluwee from './dump/1lluwee/index.json';
import data1llv00i from './dump/1llv00i/index.json';
import data1llv59w from './dump/1llv59w/index.json';
import data1llvz0g from './dump/1llvz0g/index.json';
import data1llw6ws from './dump/1llw6ws/index.json';
import data1llwfwv from './dump/1llwfwv/index.json';
import data1llwtcd from './dump/1llwtcd/index.json';
import data1llx4ky from './dump/1llx4ky/index.json';
import data1llx5g1 from './dump/1llx5g1/index.json';
import data1llyosf from './dump/1llyosf/index.json';
import data1llzdi8 from './dump/1llzdi8/index.json';
import data1llzuit from './dump/1llzuit/index.json';
import data1lm04jn from './dump/1lm04jn/index.json';
import data1lm0btg from './dump/1lm0btg/index.json';
import data1lm0m6i from './dump/1lm0m6i/index.json';
import data1lm17p6 from './dump/1lm17p6/index.json';
import data1lm1v2c from './dump/1lm1v2c/index.json';
import data1lm23z8 from './dump/1lm23z8/index.json';
import data1lm24xd from './dump/1lm24xd/index.json';
import data1lm32zh from './dump/1lm32zh/index.json';
import data1lm3jvm from './dump/1lm3jvm/index.json';
import data1lm4tno from './dump/1lm4tno/index.json';
import data1lm58q1 from './dump/1lm58q1/index.json';
import data1lm5muh from './dump/1lm5muh/index.json';
import data1lm66fy from './dump/1lm66fy/index.json';
import data1lm76gk from './dump/1lm76gk/index.json';
import data1lm76yz from './dump/1lm76yz/index.json';
import data1lm7dox from './dump/1lm7dox/index.json';
import data1lm9012 from './dump/1lm9012/index.json';
import data1lm91sr from './dump/1lm91sr/index.json';
import data1lm92se from './dump/1lm92se/index.json';
import data1lm93yi from './dump/1lm93yi/index.json';
import data1lm98z7 from './dump/1lm98z7/index.json';
import data1lm9xlq from './dump/1lm9xlq/index.json';
import data1lmb5s3 from './dump/1lmb5s3/index.json';
import data1lmbt6g from './dump/1lmbt6g/index.json';
import data1lmbtvg from './dump/1lmbtvg/index.json';
import data1lmc6dp from './dump/1lmc6dp/index.json';
import data1lmd6ns from './dump/1lmd6ns/index.json';
import data1lmd8ut from './dump/1lmd8ut/index.json';
import data1lmdkbg from './dump/1lmdkbg/index.json';
import data1lmdmvu from './dump/1lmdmvu/index.json';
import data1lme24s from './dump/1lme24s/index.json';
import data1lmedjx from './dump/1lmedjx/index.json';
import data1lmf3pl from './dump/1lmf3pl/index.json';
import data1lmf42g from './dump/1lmf42g/index.json';
import data1lmfiu9 from './dump/1lmfiu9/index.json';
import data1lmfydd from './dump/1lmfydd/index.json';
import data1lmgdw1 from './dump/1lmgdw1/index.json';
import data1lmggiz from './dump/1lmggiz/index.json';
import data1lmgp62 from './dump/1lmgp62/index.json';
import data1lmia7k from './dump/1lmia7k/index.json';
import data1lmictu from './dump/1lmictu/index.json';
import data1lmix4b from './dump/1lmix4b/index.json';
import data1lmizi2 from './dump/1lmizi2/index.json';
import data1lmjs43 from './dump/1lmjs43/index.json';


const App = () => (
  <ConfigProvider locale={enUS}>
    <BrowserRouter basename="/LocalLLaMA">
      <CustomLayout>
        <Routes>
          <Route path="/landing" element={<LazyLanding />} />
          <Route path="/18n3ar3" element={<RedditPostRenderer data={data18n3ar3} />} />
          <Route path="/199y05e" element={<RedditPostRenderer data={data199y05e} />} />
          <Route path="/1bgh9h4" element={<RedditPostRenderer data={data1bgh9h4} />} />
          <Route path="/1bqmuto" element={<RedditPostRenderer data={data1bqmuto} />} />
          <Route path="/1cf7hg0" element={<RedditPostRenderer data={data1cf7hg0} />} />
          <Route path="/1cgrz46" element={<RedditPostRenderer data={data1cgrz46} />} />
          <Route path="/1cr9wvg" element={<RedditPostRenderer data={data1cr9wvg} />} />
          <Route path="/1d3sf1k" element={<RedditPostRenderer data={data1d3sf1k} />} />
          <Route path="/1efya2r" element={<RedditPostRenderer data={data1efya2r} />} />
          <Route path="/1eh9sef" element={<RedditPostRenderer data={data1eh9sef} />} />
          <Route path="/1ffv39d" element={<RedditPostRenderer data={data1ffv39d} />} />
          <Route path="/1fgsrx8" element={<RedditPostRenderer data={data1fgsrx8} />} />
          <Route path="/1fpmlga" element={<RedditPostRenderer data={data1fpmlga} />} />
          <Route path="/1g4w2vs" element={<RedditPostRenderer data={data1g4w2vs} />} />
          <Route path="/1gjje70" element={<RedditPostRenderer data={data1gjje70} />} />
          <Route path="/1gt9f5y" element={<RedditPostRenderer data={data1gt9f5y} />} />
          <Route path="/1gvlzug" element={<RedditPostRenderer data={data1gvlzug} />} />
          <Route path="/1gx4asf" element={<RedditPostRenderer data={data1gx4asf} />} />
          <Route path="/1h85tt4" element={<RedditPostRenderer data={data1h85tt4} />} />
          <Route path="/1haumxe" element={<RedditPostRenderer data={data1haumxe} />} />
          <Route path="/1hhmebr" element={<RedditPostRenderer data={data1hhmebr} />} />
          <Route path="/1ho27fr" element={<RedditPostRenderer data={data1ho27fr} />} />
          <Route path="/1hphlz7" element={<RedditPostRenderer data={data1hphlz7} />} />
          <Route path="/1hqklqj" element={<RedditPostRenderer data={data1hqklqj} />} />
          <Route path="/1hvj4wn" element={<RedditPostRenderer data={data1hvj4wn} />} />
          <Route path="/1hwwvuz" element={<RedditPostRenderer data={data1hwwvuz} />} />
          <Route path="/1hxm0ep" element={<RedditPostRenderer data={data1hxm0ep} />} />
          <Route path="/1hz28ld" element={<RedditPostRenderer data={data1hz28ld} />} />
          <Route path="/1i5or1y" element={<RedditPostRenderer data={data1i5or1y} />} />
          <Route path="/1i5s5hk" element={<RedditPostRenderer data={data1i5s5hk} />} />
          <Route path="/1i80cwf" element={<RedditPostRenderer data={data1i80cwf} />} />
          <Route path="/1i88g4y" element={<RedditPostRenderer data={data1i88g4y} />} />
          <Route path="/1i8tx5z" element={<RedditPostRenderer data={data1i8tx5z} />} />
          <Route path="/1i8vclf" element={<RedditPostRenderer data={data1i8vclf} />} />
          <Route path="/1i9nqj9" element={<RedditPostRenderer data={data1i9nqj9} />} />
          <Route path="/1iaebwp" element={<RedditPostRenderer data={data1iaebwp} />} />
          <Route path="/1ibbloy" element={<RedditPostRenderer data={data1ibbloy} />} />
          <Route path="/1ibk9us" element={<RedditPostRenderer data={data1ibk9us} />} />
          <Route path="/1icaq2z" element={<RedditPostRenderer data={data1icaq2z} />} />
          <Route path="/1icwys9" element={<RedditPostRenderer data={data1icwys9} />} />
          <Route path="/1id2poe" element={<RedditPostRenderer data={data1id2poe} />} />
          <Route path="/1idseqb" element={<RedditPostRenderer data={data1idseqb} />} />
          <Route path="/1idtkll" element={<RedditPostRenderer data={data1idtkll} />} />
          <Route path="/1idz487" element={<RedditPostRenderer data={data1idz487} />} />
          <Route path="/1iehstw" element={<RedditPostRenderer data={data1iehstw} />} />
          <Route path="/1ig6e6t" element={<RedditPostRenderer data={data1ig6e6t} />} />
          <Route path="/1igc6r0" element={<RedditPostRenderer data={data1igc6r0} />} />
          <Route path="/1ih3nc6" element={<RedditPostRenderer data={data1ih3nc6} />} />
          <Route path="/1iiio9u" element={<RedditPostRenderer data={data1iiio9u} />} />
          <Route path="/1ij5yf2" element={<RedditPostRenderer data={data1ij5yf2} />} />
          <Route path="/1ijab77" element={<RedditPostRenderer data={data1ijab77} />} />
          <Route path="/1iji47x" element={<RedditPostRenderer data={data1iji47x} />} />
          <Route path="/1ikvo8a" element={<RedditPostRenderer data={data1ikvo8a} />} />
          <Route path="/1imenfa" element={<RedditPostRenderer data={data1imenfa} />} />
          <Route path="/1imyp19" element={<RedditPostRenderer data={data1imyp19} />} />
          <Route path="/1inch7r" element={<RedditPostRenderer data={data1inch7r} />} />
          <Route path="/1io2ija" element={<RedditPostRenderer data={data1io2ija} />} />
          <Route path="/1ipfv03" element={<RedditPostRenderer data={data1ipfv03} />} />
          <Route path="/1ipxszq" element={<RedditPostRenderer data={data1ipxszq} />} />
          <Route path="/1iqpzpk" element={<RedditPostRenderer data={data1iqpzpk} />} />
          <Route path="/1is1p2o" element={<RedditPostRenderer data={data1is1p2o} />} />
          <Route path="/1iskklo" element={<RedditPostRenderer data={data1iskklo} />} />
          <Route path="/1isu4un" element={<RedditPostRenderer data={data1isu4un} />} />
          <Route path="/1iu19zy" element={<RedditPostRenderer data={data1iu19zy} />} />
          <Route path="/1iui6nk" element={<RedditPostRenderer data={data1iui6nk} />} />
          <Route path="/1iwb5nu" element={<RedditPostRenderer data={data1iwb5nu} />} />
          <Route path="/1iy2t7c" element={<RedditPostRenderer data={data1iy2t7c} />} />
          <Route path="/1j0n56h" element={<RedditPostRenderer data={data1j0n56h} />} />
          <Route path="/1j67bxt" element={<RedditPostRenderer data={data1j67bxt} />} />
          <Route path="/1jaj6gc" element={<RedditPostRenderer data={data1jaj6gc} />} />
          <Route path="/1jaoy9g" element={<RedditPostRenderer data={data1jaoy9g} />} />
          <Route path="/1je6ns1" element={<RedditPostRenderer data={data1je6ns1} />} />
          <Route path="/1jgap0q" element={<RedditPostRenderer data={data1jgap0q} />} />
          <Route path="/1jgqmlr" element={<RedditPostRenderer data={data1jgqmlr} />} />
          <Route path="/1jj6i4m" element={<RedditPostRenderer data={data1jj6i4m} />} />
          <Route path="/1jjorwd" element={<RedditPostRenderer data={data1jjorwd} />} />
          <Route path="/1jl5jea" element={<RedditPostRenderer data={data1jl5jea} />} />
          <Route path="/1jsampe" element={<RedditPostRenderer data={data1jsampe} />} />
          <Route path="/1jsshhe" element={<RedditPostRenderer data={data1jsshhe} />} />
          <Route path="/1jt7hlc" element={<RedditPostRenderer data={data1jt7hlc} />} />
          <Route path="/1juni3t" element={<RedditPostRenderer data={data1juni3t} />} />
          <Route path="/1jytw62" element={<RedditPostRenderer data={data1jytw62} />} />
          <Route path="/1jzocoo" element={<RedditPostRenderer data={data1jzocoo} />} />
          <Route path="/1k1fi5w" element={<RedditPostRenderer data={data1k1fi5w} />} />
          <Route path="/1k9qxbl" element={<RedditPostRenderer data={data1k9qxbl} />} />
          <Route path="/1ka6mic" element={<RedditPostRenderer data={data1ka6mic} />} />
          <Route path="/1ka8r2t" element={<RedditPostRenderer data={data1ka8r2t} />} />
          <Route path="/1kcwx8e" element={<RedditPostRenderer data={data1kcwx8e} />} />
          <Route path="/1klx9q2" element={<RedditPostRenderer data={data1klx9q2} />} />
          <Route path="/1ksyicp" element={<RedditPostRenderer data={data1ksyicp} />} />
          <Route path="/1ktlz3w" element={<RedditPostRenderer data={data1ktlz3w} />} />
          <Route path="/1ktx15j" element={<RedditPostRenderer data={data1ktx15j} />} />
          <Route path="/1kzsa70" element={<RedditPostRenderer data={data1kzsa70} />} />
          <Route path="/1l1qqdx" element={<RedditPostRenderer data={data1l1qqdx} />} />
          <Route path="/1l3dhjx" element={<RedditPostRenderer data={data1l3dhjx} />} />
          <Route path="/1l5wxoa" element={<RedditPostRenderer data={data1l5wxoa} />} />
          <Route path="/1l6ibwg" element={<RedditPostRenderer data={data1l6ibwg} />} />
          <Route path="/1laee7q" element={<RedditPostRenderer data={data1laee7q} />} />
          <Route path="/1lbrnod" element={<RedditPostRenderer data={data1lbrnod} />} />
          <Route path="/1lei5mb" element={<RedditPostRenderer data={data1lei5mb} />} />
          <Route path="/1lkz0hg" element={<RedditPostRenderer data={data1lkz0hg} />} />
          <Route path="/1lkzynl" element={<RedditPostRenderer data={data1lkzynl} />} />
          <Route path="/1ll38zu" element={<RedditPostRenderer data={data1ll38zu} />} />
          <Route path="/1ll429p" element={<RedditPostRenderer data={data1ll429p} />} />
          <Route path="/1ll57uz" element={<RedditPostRenderer data={data1ll57uz} />} />
          <Route path="/1ll68iz" element={<RedditPostRenderer data={data1ll68iz} />} />
          <Route path="/1ll6jo5" element={<RedditPostRenderer data={data1ll6jo5} />} />
          <Route path="/1ll88pe" element={<RedditPostRenderer data={data1ll88pe} />} />
          <Route path="/1lla27f" element={<RedditPostRenderer data={data1lla27f} />} />
          <Route path="/1llb5e9" element={<RedditPostRenderer data={data1llb5e9} />} />
          <Route path="/1lleks2" element={<RedditPostRenderer data={data1lleks2} />} />
          <Route path="/1llhdoq" element={<RedditPostRenderer data={data1llhdoq} />} />
          <Route path="/1lljdk8" element={<RedditPostRenderer data={data1lljdk8} />} />
          <Route path="/1lllry7" element={<RedditPostRenderer data={data1lllry7} />} />
          <Route path="/1llltv5" element={<RedditPostRenderer data={data1llltv5} />} />
          <Route path="/1lllxey" element={<RedditPostRenderer data={data1lllxey} />} />
          <Route path="/1llmhof" element={<RedditPostRenderer data={data1llmhof} />} />
          <Route path="/1llms46" element={<RedditPostRenderer data={data1llms46} />} />
          <Route path="/1lln5uj" element={<RedditPostRenderer data={data1lln5uj} />} />
          <Route path="/1lln6ar" element={<RedditPostRenderer data={data1lln6ar} />} />
          <Route path="/1llndut" element={<RedditPostRenderer data={data1llndut} />} />
          <Route path="/1llnwna" element={<RedditPostRenderer data={data1llnwna} />} />
          <Route path="/1llnwy5" element={<RedditPostRenderer data={data1llnwy5} />} />
          <Route path="/1llqp0a" element={<RedditPostRenderer data={data1llqp0a} />} />
          <Route path="/1llsztp" element={<RedditPostRenderer data={data1llsztp} />} />
          <Route path="/1lltmig" element={<RedditPostRenderer data={data1lltmig} />} />
          <Route path="/1llty3n" element={<RedditPostRenderer data={data1llty3n} />} />
          <Route path="/1llu89r" element={<RedditPostRenderer data={data1llu89r} />} />
          <Route path="/1lluur5" element={<RedditPostRenderer data={data1lluur5} />} />
          <Route path="/1lluwee" element={<RedditPostRenderer data={data1lluwee} />} />
          <Route path="/1llv00i" element={<RedditPostRenderer data={data1llv00i} />} />
          <Route path="/1llv59w" element={<RedditPostRenderer data={data1llv59w} />} />
          <Route path="/1llvz0g" element={<RedditPostRenderer data={data1llvz0g} />} />
          <Route path="/1llw6ws" element={<RedditPostRenderer data={data1llw6ws} />} />
          <Route path="/1llwfwv" element={<RedditPostRenderer data={data1llwfwv} />} />
          <Route path="/1llwtcd" element={<RedditPostRenderer data={data1llwtcd} />} />
          <Route path="/1llx4ky" element={<RedditPostRenderer data={data1llx4ky} />} />
          <Route path="/1llx5g1" element={<RedditPostRenderer data={data1llx5g1} />} />
          <Route path="/1llyosf" element={<RedditPostRenderer data={data1llyosf} />} />
          <Route path="/1llzdi8" element={<RedditPostRenderer data={data1llzdi8} />} />
          <Route path="/1llzuit" element={<RedditPostRenderer data={data1llzuit} />} />
          <Route path="/1lm04jn" element={<RedditPostRenderer data={data1lm04jn} />} />
          <Route path="/1lm0btg" element={<RedditPostRenderer data={data1lm0btg} />} />
          <Route path="/1lm0m6i" element={<RedditPostRenderer data={data1lm0m6i} />} />
          <Route path="/1lm17p6" element={<RedditPostRenderer data={data1lm17p6} />} />
          <Route path="/1lm1v2c" element={<RedditPostRenderer data={data1lm1v2c} />} />
          <Route path="/1lm23z8" element={<RedditPostRenderer data={data1lm23z8} />} />
          <Route path="/1lm24xd" element={<RedditPostRenderer data={data1lm24xd} />} />
          <Route path="/1lm32zh" element={<RedditPostRenderer data={data1lm32zh} />} />
          <Route path="/1lm3jvm" element={<RedditPostRenderer data={data1lm3jvm} />} />
          <Route path="/1lm4tno" element={<RedditPostRenderer data={data1lm4tno} />} />
          <Route path="/1lm58q1" element={<RedditPostRenderer data={data1lm58q1} />} />
          <Route path="/1lm5muh" element={<RedditPostRenderer data={data1lm5muh} />} />
          <Route path="/1lm66fy" element={<RedditPostRenderer data={data1lm66fy} />} />
          <Route path="/1lm76gk" element={<RedditPostRenderer data={data1lm76gk} />} />
          <Route path="/1lm76yz" element={<RedditPostRenderer data={data1lm76yz} />} />
          <Route path="/1lm7dox" element={<RedditPostRenderer data={data1lm7dox} />} />
          <Route path="/1lm9012" element={<RedditPostRenderer data={data1lm9012} />} />
          <Route path="/1lm91sr" element={<RedditPostRenderer data={data1lm91sr} />} />
          <Route path="/1lm92se" element={<RedditPostRenderer data={data1lm92se} />} />
          <Route path="/1lm93yi" element={<RedditPostRenderer data={data1lm93yi} />} />
          <Route path="/1lm98z7" element={<RedditPostRenderer data={data1lm98z7} />} />
          <Route path="/1lm9xlq" element={<RedditPostRenderer data={data1lm9xlq} />} />
          <Route path="/1lmb5s3" element={<RedditPostRenderer data={data1lmb5s3} />} />
          <Route path="/1lmbt6g" element={<RedditPostRenderer data={data1lmbt6g} />} />
          <Route path="/1lmbtvg" element={<RedditPostRenderer data={data1lmbtvg} />} />
          <Route path="/1lmc6dp" element={<RedditPostRenderer data={data1lmc6dp} />} />
          <Route path="/1lmd6ns" element={<RedditPostRenderer data={data1lmd6ns} />} />
          <Route path="/1lmd8ut" element={<RedditPostRenderer data={data1lmd8ut} />} />
          <Route path="/1lmdkbg" element={<RedditPostRenderer data={data1lmdkbg} />} />
          <Route path="/1lmdmvu" element={<RedditPostRenderer data={data1lmdmvu} />} />
          <Route path="/1lme24s" element={<RedditPostRenderer data={data1lme24s} />} />
          <Route path="/1lmedjx" element={<RedditPostRenderer data={data1lmedjx} />} />
          <Route path="/1lmf3pl" element={<RedditPostRenderer data={data1lmf3pl} />} />
          <Route path="/1lmf42g" element={<RedditPostRenderer data={data1lmf42g} />} />
          <Route path="/1lmfiu9" element={<RedditPostRenderer data={data1lmfiu9} />} />
          <Route path="/1lmfydd" element={<RedditPostRenderer data={data1lmfydd} />} />
          <Route path="/1lmgdw1" element={<RedditPostRenderer data={data1lmgdw1} />} />
          <Route path="/1lmggiz" element={<RedditPostRenderer data={data1lmggiz} />} />
          <Route path="/1lmgp62" element={<RedditPostRenderer data={data1lmgp62} />} />
          <Route path="/1lmia7k" element={<RedditPostRenderer data={data1lmia7k} />} />
          <Route path="/1lmictu" element={<RedditPostRenderer data={data1lmictu} />} />
          <Route path="/1lmix4b" element={<RedditPostRenderer data={data1lmix4b} />} />
          <Route path="/1lmizi2" element={<RedditPostRenderer data={data1lmizi2} />} />
          <Route path="/1lmjs43" element={<RedditPostRenderer data={data1lmjs43} />} />
          <Route path="*" element={<Navigate to="/landing" replace />} />
        </Routes>
      </CustomLayout>
    </BrowserRouter>
  </ConfigProvider>
);

// replace end---mua--localllama

// eslint-disable-next-line import/no-default-export
export default App;
