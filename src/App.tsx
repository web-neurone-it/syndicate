import { useRef } from "react";
import Layout from "./hoc/Layout/Layout";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Reviews from "./components/Reviews/Reviews";
import Information from "./components/Information/Information";
import Contacts from "./components/Contacts/Contacts";
import Services from "./components/Services/Services";
import PortfolioMenu from "./components/Portfolio/PortfolioMenu";
import Space from "./components/Space/Space";
import Action from "./components/Action/Action";
import Modals from "./components/Modals/Modals";
import UINotification from "./UIKit/UINotification";
import Object from "./components/Object/Object";
import { Client, HydrationProvider } from "react-hydration-provider";

const App = () => {
    const IntroRef = useRef<any>(null);
    const ContactsRef = useRef<any>(null);
    const ServicesRef = useRef<any>(null);
    const PortfolioRef = useRef<any>(null);
    const InformationRef = useRef<any>(null);
    const ReviewsRef = useRef<any>(null);

    const IntroScroll = () => IntroRef.current.scrollIntoView({ block: "start" });
    const ContactsScroll = () => ContactsRef.current.scrollIntoView(true);
    const ServicesScroll = () => ServicesRef.current.scrollIntoView(true);
    const PortfolioScroll = () => PortfolioRef.current.scrollIntoView(true);
    const InformationScroll = () => InformationRef.current.scrollIntoView(true);
    const ReviewsScroll = () => ReviewsRef.current.scrollIntoView(true);
    return (
        <HydrationProvider>
            <Header
                IntroScroll={IntroScroll}
                ContactsScroll={ContactsScroll}
                ServicesScroll={ServicesScroll}
                PortfolioScroll={PortfolioScroll}
                InformationScroll={InformationScroll}
                ReviewsScroll={ReviewsScroll}
            />
            <Space />

            <Client>
                <Intro refProp={IntroRef} />
            </Client>

            <Layout>
                <Services refProp={ServicesRef} />
                <Object />
                <PortfolioMenu refProp={PortfolioRef} />
                <Reviews refProp={ReviewsRef} />

                <Information refProp={InformationRef} />

                <Action />
                <Contacts refProp={ContactsRef} />
            </Layout>
            <Modals />
            <UINotification />
        </HydrationProvider>
    );
};

export default App;
