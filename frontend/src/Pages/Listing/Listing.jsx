import React, { useEffect } from 'react';
import './Listing.css';
import Lisitngcard from '../../Components/Listingcard/Lisitngcard'
import { useNavigate, useParams } from 'react-router-dom';
import Data from '../../Data/Product.json'
import Bottomnav from '../../Components/Bottomnav/Bottomnav';
import Parts from '../../Data/Parts.json';
import { Helmet } from 'react-helmet';

function Listing() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { category } = useParams();
    const navigate = useNavigate();

    const formattedCate = category.replace(/-/g, ' ').replace(' on rent in pune', '');

    function HTMLStringToElement({ htmlString }) {
        return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
    }

    let listData;
    let partdata;
    let extracont;
    let mainfaq;
    const proarr = [];
    if (formattedCate === "View All") {
        for (const prokey in Data) {
            Data[prokey].products.forEach((pro) => {
                proarr.push(pro);
            })
        }
    } else {
        if (formattedCate === 'mist fan parts') {
            partdata = Parts.parts;
        } else {
            listData = Data[formattedCate].products;
            extracont = Data[formattedCate].extracontent;
            mainfaq = Data[formattedCate].mainfaqs;
        }
    }

    if (partdata) {
        const sortProductsByPrice = (arr) => {
            return partdata = arr.slice().sort((a, b) => a.price - b.price)
        };
        sortProductsByPrice(partdata);
    };

    if (listData) {
        const sortProductsByPrice = (arr) => {
            return listData = arr.slice().sort((a, b) => a.price - b.price)
        };
        sortProductsByPrice(listData);
    };

    const schemaMarkup =  {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "Are mist fans suitable for indoor events?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, mist fans are versatile and can be used for both indoor and outdoor events. They provide a refreshing breeze without making the surroundings too damp."
            }
        },{
            "@type": "Question",
            "name": "How do water misting fans work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Water misting fans spray a fine mist into the air. The mist evaporates quickly, creating a cool breeze. It's like having a natural air conditioner for your events."
            }
        },{
            "@type": "Question",
            "name": "Can I find mist fans for rent near me?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! Rentooze makes it easy to locate mist fans for rent near your event location. Enjoy the convenience of a local cooling solution."
            }
        },{
            "@type": "Question",
            "name": "Are water misting fan rentals eco-friendly?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, water misting fan rentals are eco-friendly. They use water as a cooling agent, making them a sustainable choice for your events."
            }
        },{
            "@type": "Question",
            "name": "What sets Rentooze apart from other rental services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Rentooze stands out with high-quality materials, versatile cooling options, and exceptional service. We go beyond expectations to make your event cool and memorable."
            }
        }]
    }

    const pedestalFanSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "Why should I choose Rentooze for pedestal fan rental in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rentooze offers a hassle-free and cost-effective solution for staying cool in Pune. Our pedestal fan rental service provides high-quality fans at competitive prices, ensuring you beat the heat without breaking the bank."
          }
        },{
          "@type": "Question",
          "name": "How do I rent a pedestal fan from Rentooze?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Renting a pedestal fan from Rentooze is easy. Simply browse our collection, select the fan that suits your needs, and follow the straightforward rental process on our website. You can choose your rental period based on your specific requirements."
          }
        },{
          "@type": "Question",
          "name": "Are there any hidden costs in pedestal fan rental from Rentooze?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, there are no hidden costs. Rentooze believes in transparency. The pedestal fan rental prices displayed on our website include all relevant charges. What you see is what you pay."
          }
        },{
          "@type": "Question",
          "name": "Can I return the pedestal fan before the agreed rental period ends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can return the pedestal fan before the agreed-upon rental period ends. However, please note that the rental charges are based on the initially agreed-upon duration."
          }
        },{
          "@type": "Question",
          "name": "Can I rent multiple pedestal fans for events or larger spaces?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Rentooze caters to both individual and bulk orders. Whether you need one fan for personal use or several for events or larger spaces, we can accommodate your requirements. Contact us for special arrangements."
          }
        }]
      }
      

    return (
        <div className='mainListing'>
            {
                formattedCate.toLocaleLowerCase() === 'mist fan' && (
                    <Helmet>
                        <link ref="canonical" url="https://www.rentooze.in/mist-fan-on-rent-in-pune"></link>
                        <title>Rent Mist Fans | Silver, Black & White 41L @499 in Pune - Rentooze</title>
                        <meta name="description" content="Easily rent high-quality mist fans in Pune for ultimate cooling comfort. Beat the heat with Rentooze's affordable and efficient mist fan rentals today!" />
                        <meta name="keywords" content="mist fan on rent, mist fan on rent in Pune, water fan rental, cooling fan rental, misting fan rental near me, misting fans for rent near me, Cool Mist fan rentals near me, mist fan on rent near me, mist fan for rent near me, water misting fan rental, sprinkler fan on rent, Rentooze, Rentooze Event Material on rent" />
                        <script type='application/ld+json'>
                            {JSON.stringify(schemaMarkup)}
                        </script>
                    </Helmet>
                )
            }
            {
                formattedCate.toLocaleLowerCase() === 'portable ac' && (
                    <Helmet>
                        <link ref="canonical" url=""></link>
                        <title>Portable Air Conditioner Rental in Pune, 1 Ton & 1.5 Ton AC - Rentooze</title>
                        <meta name="description" content="Stay cool and comfortable in Pune with portable AC rentals from Rentooze. Beat the heat hassle-free with our affordable and efficient cooling solutions." />
                        <meta name="keywords" content="Portable AC on rent, Portable AC on rent in Pune, portable ac rental, Portable AC on rent near me, portable ac, portable air conditioner, small portable air conditioner, mini air conditioner, small air conditioner, best portable air conditioner, portable ac unit" />
                    </Helmet>
                )
            }
            {
                formattedCate.toLocaleLowerCase() === 'pedestal fan' && (
                    <Helmet>
                        <link ref="canonical" url=""></link>
                        <title>Rent Affordable Standing Pedestal Fan 26 Inch 90 Degrees - Rentooze</title>
                        <meta name="description" content="Get relief from the summer heat in Pune with pedestal fan rentals from Rentooze. Stay cool and comfortable without breaking the bank. Book yours today!" />
                        <meta name="keywords" content="pedestal fan on rent in Pune, pedestal fan on rent, pedestal fan rental, pedestal fan, pedestal fan on rent near me, standing fan, Standing fan on rent in Pune , stand up fan, best pedestal fan, stand fan price, Rentooze, Rentooze Event Material on rent" />
                        <script type='application/ld+json'>
                            {JSON.stringify(pedestalFanSchema)}
                        </script>
                    </Helmet>
                )
            }
            {
                formattedCate.toLocaleLowerCase() === 'air cooler' && (
                    <Helmet>
                        <link ref="canonical" url=""></link>
                        <title> Rent Silent Air Coolers 75L-120L near Pune | Rentooze</title>
                        <meta name="description" content="Stay refreshed and cool in Pune with air cooler rentals from Rentooze. Beat the summer heat affordably and effortlessly. Book yours today!" />
                        <meta name="keywords" content="air cooler on rent, air cooler on rent in pune, cooler on rent pune, rent air cooler near me, rent cooler in pune, air cooler on rent near me, cooler on rent in pune near me" />
                    </Helmet>
                )
            }
            {
                formattedCate.toLocaleLowerCase() === 'electric heater' && (
                    <Helmet>
                        <link ref="canonical" url=""></link>
                        <title>Electric Heaters for Rent in Pune@499 | Rentooze</title>
                        <meta name="description" content="Rent electric heaters in Pune for cozy warmth during chilly days. Stay comfortable indoors with Rentooze's convenient and affordable heating solutions." />
                        <meta name="keywords" content="electric heater on rent, electric heater rental, electric heater rental near me, industrial heaters for rent, space heater hire, portable heater for rent, room heater on rent, commercial portable heater rental, Rentooze, Rentooze Event Material on rent" />
                    </Helmet>
                )
            }
            <div className="mainListingHeader bg-brand-blue w-100 position-fixed top-0 px-3 d-flex align-items-center justify-content-center px-4">
                <i className="fas fa-chevron-left fs-4 text-white" onClick={() => navigate(-1)}></i>
                <h1 className="mb-0 w-100 text-white text-uppercase bricolage-bold fs-5 ps-3">{formattedCate} On Rent</h1>
                <Bottomnav />
            </div>
            <div className="container p-0">
                <div className="cardWraper px-4 mt-5 pt-4 pb-5 mb-5">
                    <div className="cardWrap row p-0 justify-content-start">
                        {
                            formattedCate === 'mist fan parts' ? (
                                partdata.map((part) => (
                                    <Lisitngcard key={part.id} img={part.img} name={part.name} price={part.price} cate={part.cate} />
                                ))
                            ) : (
                                formattedCate === 'View All' ? (
                                    proarr.map((data) => (
                                        <Lisitngcard key={data.id} img={data.img[0]} name={data.name} keyfeat={data.keyfeat} price={data.price} cate={data.cate} />
                                    ))
                                ) : (
                                    listData.map((data) => (
                                        <Lisitngcard key={data.id} img={data.img[0]} name={data.name} keyfeat={data.keyfeat} price={data.price} cate={data.cate} />
                                    ))
                                )
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="container extracont mt-5 pt-5">
                <HTMLStringToElement htmlString={extracont} />
            </div>
            <div className="container mt-4">
                <h2 className="bricolage-bold fs-5">FAQs</h2>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {
                        formattedCate === 'mist fan parts' ? (
                            <div className="empty"></div>
                        ) : (
                            formattedCate === 'View All' ? (
                                <div className="empty"></div>
                            ) : (
                                mainfaq.map((faq, index) => (
                                    <div key={index} className="accordion-item mb-2 border-0">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button border shadow-none rounded-brand collapsed bricolage-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                                                {faq[0]}
                                            </button>
                                        </h2>
                                        <div id={`flush-collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">{faq[1]}</div>
                                        </div>
                                    </div>
                                ))
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Listing