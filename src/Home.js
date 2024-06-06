import './Home.css';
import TextBlock from './TextBlock';
import Card from './Card';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
            <header className="Web-header">
                <div className='Web-header-background'>
                    <img src={require('./Designer.jpeg')} className='CompanyLogo' alt="logo" />
                </div>
                <div className="Web-header-text">
                    <h1>Urban <span className="green-text">Green</span></h1>
                    <p>Farm to table? More like roof to table.</p>
                    <Link to="/contact" className="Contact-link">
                        Visit our Contact Page
                    </Link>
                </div>
            </header>
            <body className="Web-body">
                <TextBlock
                    className="BodyText3"
                    title="What is Urban Green?"
                    text="Urban Green is a forward-thinking startup dedicated to transforming underutilized urban spaces into vibrant, sustainable green areas. Our mission is to combat the Urban Heat Island effect by converting barren rooftops into lush, productive gardens. By doing so, we aim to enhance urban living conditions, promote environmental sustainability, and provide fresh, locally-grown produce directly from rooftops to tables."
                />
                <div className='Card-container'>
                    <Card
                        className="DispCard"
                        title="Urban Heat Island Effect"
                        text="Urban areas often suffer from the 'heat island' effect where temperatures are significantly higher than surrounding rural areas due to human activities and dense structures. Our green rooftops mitigate this effect by cooling the environment."
                        imageUrl={require('./sunset.png')}
                    />
                    <Card
                        className="DispCard"
                        title="Wasted Urban Spaces"
                        text="Many urban rooftops are underused, contributing neither to the economy nor the environment. We transform these neglected spaces into productive green areas that benefit both the community and the environment."
                        imageUrl={require('./building.png')}
                    />
                    <Card
                        className="DispCard"
                        title="Building Energy Consumption"
                        text="Buildings consume a significant amount of energy for heating and cooling. Our green roofs act as natural insulators, significantly reducing the need for artificial heating and cooling, thereby lowering energy costs."
                        imageUrl={require('./high-temperature.png')}
                    />
                </div>
                <TextBlock
                    className="BodyText1"
                    title="Our Vision"
                    text="Urban Green envisions a future where every urban rooftop is a thriving green space, contributing to a healthier, more sustainable urban environment. We believe in the power of green infrastructure to transform cities, improve air quality, and provide fresh, local food sources."
                />

                <TextBlock
                    className="BodyText3"
                    title="Our Impact"
                    text="In just ONE month in ONE college at the University of California, San Diego...."
                />

                <TextBlock
                    className="BodyText4"
                    title="5000 km"
                    text="Food Miles Mitigated"
                />
                <TextBlock
                    className="BodyText4"
                    title="10°C"
                    text=" Cooling Achieved"
                />
                <TextBlock
                    className="BodyText4"
                    title="3000 m²"
                    text="Space Utilized"
                />
                <TextBlock
                    className="BodyText4"
                    title="2000"
                    text=" Heads of Lettuce Grown"
                />

                <TextBlock
                    className="BodyText3"
                    title="How It Works"
                    text="Urban Green transforms urban rooftops into green spaces by installing sustainable gardens that utilize advanced hydroponic systems. These systems require minimal soil and water, making them ideal for city environments. Our process involves assessing suitable rooftops, designing custom green spaces, and maintaining them with the help of local communities. This initiative not only beautifies the city but also contributes to biodiversity and reduces urban heat."
                />
                <TextBlock
                    className="BodyText1"
                    title="Leasing Space Benefits"
                    text="By leasing your unused rooftop spaces to Urban Green, you contribute to the environment while also benefiting financially. Our partnership models are designed to ensure property owners gain competitive returns, enhancing the value of their property through sustainable upgrades."
                />
                <TextBlock
                    className="BodyText1"
                    title="Space Maintenance"
                    text="Urban Green takes full responsibility for the maintenance of the green spaces we install. Our team of experts ensures that all installations are kept in optimal condition, using eco-friendly methods and materials that require minimal intervention from the property owners."
                />
                <TextBlock
                    className="BodyText1"
                    title="Fresh Local Produce"
                    text="Our rooftop gardens don't just beautify urban spaces; they also provide fresh, organic produce that can be supplied directly to your establishment or local markets. This initiative supports local agriculture and reduces the carbon footprint associated with transporting food."
                />

                <TextBlock
                    className="BodyText3"
                    title="Community Engagement"
                    text="We engage local communities in the creation and maintenance of green rooftops, fostering a sense of ownership and environmental stewardship."
                />
            </body>
            <footer>
                <div className="Web-footer">
                    <h2>Urban <span className="green-text">Green</span></h2>
                </div>
                <div className='Contact'>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </footer>
        </div>
    );
}

export default Home;