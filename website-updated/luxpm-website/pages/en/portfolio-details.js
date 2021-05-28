import React from 'react';
import Navbar from '/component/layout/en/Navbar';
import PageBanner from '/component/en/PageBanner';
import Footer from '/component/layout/en/Footer';
import { useRouter } from 'next/router'
const PortfolioDetails = ( ) => {
    const info = [
        {clientName:'Bitrix',title:'Collaborative Sales Platform',introMain:'Bitrix is a business software that combines various services for optimal communication and task management.'
            ,introSub:'Clients can overview their businesses with convenience implementing Bitrix24. Communication and project management has never been easier. '
            ,prodPeriod:'4',scale:'1',devType:'Website',devUtil:'HTML, Javascript, PHP, React JS, MySQL'
            ,role:'Our company was responsible for the modification and expansion of BItrix24’s website. By implementing various tools such as HTML and Javascript, we have created impressive modifications to the frontend and backend of the website.'
            ,info:'With modifications implemented on the dashboard and user charts, the website now has heightened visual effects and a seamless interface. We also worked on improving Bitrix24’s database schema, creating an API for optimal data collection. Bitrix24 now provides clients with an effortless platform for sales management and team collaboration.'
            ,result:'By modifying and expanding the frontend and backend, we were able to create a user-friendly website. As a result, over 8,000,000 organizations have integrated BItrix24 into their businesses.'
            ,images:['BItrix24_2.jpg','BItrix24_3.jpg','BItrix24_4.jpg','BItrix24_5.jpg']}
            ,{clientName:'Free Stuff Finders',title:'Product Information Platform',introMain:'Free Stuff Finder is a platform which allows viewers to search for the best deals on a variety of products through blogs, videos and news.'
            ,introSub:'With a vast amount of information at the click of a link, shopping for stuff has never been easier. Users can easily find the cheapest and best quality products.'
            ,prodPeriod:'4~5',scale:'3',devType:'iOS and Android',devUtil:'HTML, Javascript, PHP, React JS, MySQL'
            ,role:'Commissioned to create a mobile app, our company delivered a user-friendly mobile app using various programs such as Node JS and MySQL. With our help in creating a completely new mobile app platform, it has allowed users to easily search for the best deals on products on their phones. '
            ,info:'By implementing the existing website, we were able to create a mobile app compatible on the iOS and Android. Through several programming tools, new features were added to the app for convenience. Now, a variety of marketing contents for products and services are readily available on mobile, without the trouble of having to view the platform on web browsers.'
            ,result:'After a successful kickoff to the website, the platform has received an excellent review rating of 4.4 from over 2000 people. Through our solution, users have been steadily increasing, with more users implementing the mobile app.'
            ,images:['Freestufffinder_2.jpg','Freestufffinder_3.jpg','Freestufffinder_4.jpg','Freestufffinder_5.jpg']}
            ,{
            clientName:'Good Doctors',title:'Telemedicine Application'
            ,introMain:'As a telemedicine application, Good Doctors is a virtual interface that helps people in remote areas communicate directly with medical staff.'
            ,introSub:'As one of the largest telemedical company in Ontario, Canada, Good Doctors is a video consulting service that connects patients to over 100,000 medical agencies.'
            ,prodPeriod:'12',scale:'5',devType:'CMS, Website, Web App, iOS, Android',devUtil:'Reach JS, Node JS, Swift, Java, HTML, CSS, JavaScript'
            ,role:'"LuxPM was responsible for the modification of the website, building the entire CMS as well as creating a mobile consultation app which is now available on Android and iOS. Now, Good Doctors is connected to over 100,000 medical agencies.\n' +
                'Convenient and timesaving: Good Doctors is an impressive telemedicine application that we developed with the utmost care."'
            ,info:'The project was largely composed of building the entire CMS and a mobile consultation application compatible with iOS and Android. Modifications were implemented to provide our client with a secure cloud system for prevention of the leaking of personal information. We also automated the process of transferring patients to the relevant health departments. '
            ,result:'As one of the largest telemedicine companies currently operating in Ontario, the service helps deliver accessible healthcare to community members with a click of a button. Now, patients can schedule for in-person or virtual medical consultations with health practitioners, anywhere and anytime.'
            ,images:['Gooddoctors_2.jpg','Gooddoctors_3.jpg','Gooddoctors_4.jpg','Gooddoctors_5.jpg']},
        {
            clientName:' LG CNS',title:'Sales and Finance Company Software'
            ,introMain:'One of the leading IT consulting companies in Korea, our client is dedicated to implement technology through innovative and successful planning.'
            ,introSub:'Providing IT solutions for a technology-driven world, our client is steadily leading Korea and the world through the Fourth Industrial Revolution. '
            ,prodPeriod:'4',scale:'4',devType:'Software',devUtil:'React JS, Node JS, MySQL'
            ,role:'Our main role was to build the entire platform, mainly working closely on the automation and platform building. With the help of MySQL, Node JS, and React JS, we were able to come up with a solution that was able to satisfy our client’s needs.'
            ,info:'With our company’s help, our client was able to create a smooth platform that is easy to use; with the automation of cost estimates for sales, our solution has allowed our client to submit, upload, and send invoices to their venders with ease. '
            ,result:'We were able to help our client come up with the best solutions for automating the calculating of cost estimates for their sales.'
            ,images:['LGCNS_2.jpg','LGCNS_3.jpg','LGCNS_4.jpg','LGCNS_5.jpg']},
        {
            clientName:' Ziktalk',title:'Language Exchange Platform'
            ,introMain:'With a social media atmosphere, Ziktalk is a knowledge exchanging platform which implements Blockchain.'
            ,introSub:'By implementing crypto-currency, users can collect a currency called by sharing entertaining content and convert it to real money.'
            ,prodPeriod:'3',scale:'3',devType:'iOS and Android',devUtil:'Swift, Java, C#'
            ,role:'Our role was to create a mobile application that would be compatible on both Android and iOS. Using tools such as Swift and Java, we were successfully in integrating Blockchain technology for the platform. We delivered our client with a simple but brilliantly designed social media platform which allows users to give and receive rewards for enjoyable content. '
            ,info:'As a worldwide social media platform that implements Blockchain developed by Dunamu, Ziktalk allows for users to mine for cryptocurrencies through various activities and implement the currency into the user’s local currency. '
            ,result:'Through our services, our client was able to find the best solution for implementing reliable exchange of currencies, mainly the cryptocurrency of Zik and the local currency of users. Additionally, the mobile app has be become globally acknowledged, being implemented by thousands of people from around the world. '
            ,images:['Ziktalk_2.jpg','Ziktalk_3.jpg','Ziktalk_4.jpg','Ziktalk_5.jpg']
        },{
            clientName:'The Selenium Group',title:'Data Collection and Analysis '
            ,introMain:'The Selenium Group is the largest IT company in Canada, which provides the best IT services.'
            ,introSub:'With over 20 years of experience as IT experts, the service provides personalized services for any business, big or small.'
            ,prodPeriod:'4',scale:'1',devType:'Robot Script (crawler)',devUtil:'Python, Bash'
            ,role:'By implementing tools such as Python (Beautiful Soup, Selenium) and Bash, our role was to build an entirely new automation system to scrape data from websites available on Google. To do this, we created a robot that would automatically scrape the data and convert it to Excel sheets.'
            ,info:'Through the automated process of data scraping of company websites, our client was able to collect a wide variety of data such as contact details, social media presence, security levels, and IP addresses. All of this was then converted into Excel files for convenience. '
            ,result:'With the automation of data scraping, the results were impressive. Not only was there a decrease in manual labor, our client was also able to collect data from over 300,000 company websites, which was then sold to law firms.'
            ,images:['Selenium_2.jpg','Selenium_3.jpg','Selenium_4.jpg','Selenium_5.jpg']}];
    const router = useRouter();
    let {index} = router.query;
    index = index === undefined ? 0 : index;

    return (
        <>
			<Navbar />

			<PageBanner
                pageTitle={info[index].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText="Portfolio Details"
                BGImage={"portfolio-detail-bg".concat(index)}
            />

            <div className="portfolio-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-details-image">
                                <img src={"/images/portfolio/" + info[index].images[0]} alt="portfolio" />
                            </div>

                            <div className="portfolio-details-desc">
                                <h3>Overview</h3>
                                <p>{info[index].introMain}<br/>
                                    {info[index].introSub}
                                </p>




                                <h3>Role of our company</h3>
                                <p>{info[index].role}
                                </p>

                                <h3>About the project</h3>
                                <p>{info[index].info}
                                </p>

                                <h4>Outcomes</h4>
                                <p>{info[index].result}
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="portfolio-details-information ml-10">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-user'></i>
                                        </div>
                                        <span>Client:</span>
                                        {info[index].clientName}
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bxs-map'></i>
                                        </div>
                                        <span>Duration:</span>
                                        {info[index].prodPeriod} months
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-purchase-tag'></i>
                                        </div>
                                        <span>Tools:</span>
                                        {info[index].scale}
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-check'></i>
                                        </div>
                                        <span>Scope:</span>
                                        {info[index].devType}
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-globe'></i>
                                        </div>
                                        <span>Tools:</span>
                                        {info[index].devUtil}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</>
    )
}

export default PortfolioDetails;
