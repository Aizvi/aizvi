// //#region Global Imports
 import React from 'react';
import { NextPage } from 'next';
// import AOS from 'aos';
// //#endregion Global Imports
//
// //#region Local imports
// import { IndustryData, IndustryItem } from '@data/industry';
// import { ServiceData, ServiceItem } from '@data/service';
// import { ProcessData } from '@data/process';
// import {
//   Hero,
//   Section1,
//   SectionProcess,
//   SectionBanner,
//   SectionPortfolio,
//   SectionTeam,
//   Card1,
//   Card2
// } from '@components';
// import { Main } from '@layouts';
// //#endregion Local imports

//#region Component

// const HomePage: NextPage = () => {
//   const title = 'Software Development Company';
//
//   useEffect(() => {
//     // Animate on Scroll init
//     AOS.init();
//   }, []);
//
//   return (
//     <Main title={title}>
//       {/* Hero */}
//       <Hero />
//
//       {/* Section => Industry */}
//       <Section1
//         className="industry"
//         subHeading="Industries We Serve"
//         heading={{ label1: 'Prominent', label2: 'IT Solution' }}
//       >
//         <div className="row">
//           <div className="col-12">
//             <div className="feature-l">
//               <div className="row">
//                 {/* Render cards */}
//                 {IndustryData.map((card: IndustryItem) => {
//                   return (
//                     <div className="col-lg-4 col-md-6 u-s-mb-30" key={card.id}>
//                       <div
//                         className="h-100"
//                         data-aos="fade-up"
//                         data-aos-duration={800}
//                         data-aos-once="true"
//                       >
//                         <Card1
//                           title={card.title}
//                           description={card.description}
//                           icon={card.icon}
//                         />
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Section1>
//
//       {/*<div className="line-break">*/}
//       {/*	<SvgCurve />*/}
//       {/*</div>*/}
//
//       {/* Section => Service */}
//       <Section1
//         className="service"
//         subHeading="Services We Provide"
//         heading={{ label1: 'Optimal', label2: 'Technology Services' }}
//       >
//         <div className="row">
//           <div className="col-12">
//             <div className="services">
//               <div className="row">
//                 {/* Render cards */}
//                 {ServiceData.map((card: ServiceItem, index: number) => {
//                   return (
//                     <div className="col-lg-4 col-md-6 u-s-mb-30" key={index}>
//                       {/*<div className="h-100" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">*/}
//                       <div className="h-100">
//                         <Card2
//                           title={card.title}
//                           description={card.description}
//                           icon={card.icon}
//                           iconClass={`card-2__icon--scheme-${index + 1}`}
//                         >
//                           <div className="card-2__count">
//                             {('0' + (index + 1)).slice(-2)}
//                           </div>
//                         </Card2>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Section1>
//
//       {/* Section => Work Process */}
//       <SectionProcess
//         processItems={ProcessData}
//         className="work-process"
//         subHeading="How we works"
//         heading={{ label1: 'Assist', label2: 'Your Business' }}
//       />
//
//       {/* Section => Banner */}
//
//       <SectionBanner />
//
//       {/*	Section => Portfolio */}
//       <SectionPortfolio
//         className="portfolio"
//         subHeading="Our Portfolio"
//         heading={{ label1: 'Proud projects', label2: 'make us excel' }}
//       />
//
//       {/* Section => Team */}
//
//       <SectionTeam
//         className="team"
//         description="Aizvi specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network etc."
//         heading={{ label1: 'Our enthusiastic', label2: 'Team members' }}
//       />
//     </Main>
//   );
// };

const HomePage: NextPage = () => {
  return <h1>Site under construction!</h1>;
};

export default HomePage;
//#endregion Component
