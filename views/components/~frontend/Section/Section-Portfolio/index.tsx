//#region Global imports
import React,{ useState } from 'react';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import { Nav,NavItem,NavLink,TabContent,TabPane } from 'reactstrap';
//#endregion Global imports


//#region Local imports
import { TabData, Tab, TabType } from '@data/tab';
import { PortfolioData, PortfolioItem } from '@data/portfolio';
import { SvgWave } from '@components';
import { CardPortfolio } from '@components';
//#endregion Local imports

//#region Types
type Props = {
    heading: {
        label1: string;
        label2: string;
    };
    subHeading?: string;
    className?: string;
};
//#endregion Types


//#region Component



export const SectionPortfolio = (props: Props) => {

    const { heading: {label1, label2}, subHeading,  className } = props;


    const [activeTab, setActiveTab] = useState(1);



    const SliderRendered = dynamic(import('react-slick'), {
        ssr: false
    });



    const toggle = (tab: number) => {

        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };


    const sliderSettings = {

        slidesToShow: 3,
        dots: true,
        slidesToScroll: 3,
        arrows: false,
        speed: 1300,
        autoplay: false,
        centerMode: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]
    };

    // Simple Tab Items
    const renderTabItems = (items: PortfolioItem[]) => {

        return (
            <SliderRendered {...sliderSettings}>
                {
                    items.map( (item: PortfolioItem) => <CardPortfolio key={item.id} title={item.title} category={item.category} slug={item.slug} permalink={item.permalink} description={item.description} image={item.image}/>)
                }
            </SliderRendered>
        );

    };

    // Filter Tab Items
    const renderFilterTabItems = (type: string) => {
        const filterItems = PortfolioData.filter((item: PortfolioItem) => item.tabType.includes(type as TabType));
        return renderTabItems(filterItems);
    };








    return (
        <section className={ classNames(className,'section-1')}>
            {/* Container */}
            <div className="container">

                {/* First Row */}
                <div className="row">
                    <div className="col-lg-12">
                            <div className="section-1__content u-s-mb-48">
                                {/* Svg */}
                                <span className="section-1__wave">
										<SvgWave />
									</span>
                                {/*	 Sub Heading */}
                                { subHeading && <h6 className="section-1__subtitle">{ subHeading }</h6>}

                                {/*	Heading */}
                                <h3 className="section-1__description">{ label1 }{' '}<span>{ label2 }</span></h3>
                            </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className="row">

                    <div className="col-lg-12">
                            {
                                TabData.length > 0 &&  <div className="section-tab">
                                    {/* Tabs */}
                                    <div className="nav-wrapper">
                                        <Nav tabs>
                                            { TabData.map((tab: Tab) => {
                                                return (
                                                    <NavItem key={tab.id}>
                                                        <NavLink className={ classNames({ active: activeTab === tab.id })}
                                                                 onClick={ () => { toggle(tab.id) }}>
                                                            { tab.title }
                                                        </NavLink>
                                                    </NavItem>
                                                );
                                            })}
                                        </Nav>
                                    </div>

                                    {/* Tab Content */}
                                    <TabContent activeTab={activeTab}>

                                        {
                                            TabData.map((tab: Tab) => {
                                                return (
                                                    <TabPane key={tab.id} tabId={tab.id}>
                                                        <div className={classNames('tab-pane__content', {'m-h-460': activeTab === tab.id})}>
                                                            { (tab.id === 1 && tab.tabType === 'all')
                                                                ? renderTabItems(PortfolioData)
                                                                : renderFilterTabItems(tab.tabType)
                                                            }
                                                        </div>
                                                    </TabPane>

                                                );
                                            })
                                        }
                                    </TabContent>

                                </div>
                            }
                            <div className="portfolio__under-text">Challenges are just opportunities in disguise. <a href="#">Take the challenge!</a></div>
                        </div>






                </div>

            </div>

        </section>

    );
};
//#endregion Component
