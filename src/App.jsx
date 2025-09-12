import Footer from "./components/Footer";
import AboutUs from "./page/About_us_emp";
import Team from "./page/blur";
import CloudSolutions from "./page/CloudSolutions";
import Consulting from "./page/Consulting";
import ContactUs from "./page/Contact_us";
import Header from "./page/Header";
import Industries from "./page/Industries-Focused";
import Insights from "./page/Insights";
import Modernization from "./page/Modernization";
import MissionSection from "./page/Our_mission";
import WeProvide from "./page/ServicesHeader";
import JoinUs from "./page/testing";
import TimelineSlider from "./page/TimelineSlider";
import Workedwitha from "./page/Workedwitha";
import Workedwithb from "./page/Workedwithb";
import Workedwithc from "./page/Workedwithc";
import Workedwithd from "./page/Workedwithd";
import WorkedWithSection from "./page/Workedwithe";
import WorldMap from "./page/WorldMap";
import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useOutletContext,
} from "react-router-dom";
import HeaderMobile from "./page/HeaderMobile";
import { useState, useEffect } from "react";
import OurTeamMobile from "./components/AboutUs/ourTeamMobile";
import Solution from "./page/Solution";
import Infra from "./page/Infra";
import RisePrivateCloud from "./page/RisePrivateCloud";
import DigitalTransformation from "./page/Digital_trans";
import Sap from "./page/Sap";
import TransformingChemicalIndustry from "./page/Transforming_Chemical_Industry";
import Home from "./page/Home";
import PrivacyPolicy from "./page/PrivacyPolicy";
import BlogDetails from "./page/BlogDetails";
import Loader from "./page/Loader";
import Detailofsap from "./page/detail5";
import ScrollToTop from "./components/ScrollToTop";
import Loaderbounce from "./page/Loading";
import Button from "./page/Backtotop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TermsOfService from "./page/Terms&con";

export function useIsMobile() {
  return useOutletContext().isMobile;
}

function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      <Outlet context={{ isMobile }} />
      <Button />
      <footer id="footer">
      <Footer />
      </footer>
    </>
  );
}

function AboutPage() {
  const isMobile = useIsMobile();
  return (
    <>
      <AboutUs />
      <MissionSection />
      <TimelineSlider />
      {isMobile ? <OurTeamMobile /> : <Team />}
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/industries"
            element={
              <>
                <Industries />
                <Workedwitha />
                <Workedwithb />
                <Workedwithc />
                <Workedwithd />
                <WorkedWithSection />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <WeProvide />
              </>
            }
          />
          <Route path="/infra" element={<Infra />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/modernization" element={<Modernization />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/careers" element={<JoinUs />} />
          <Route path="/map" element={<WorldMap />} />
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
          {/* <Route path="/terms-of-service" element={<TermsOfService />} /> */}
          <Route path="/loading" element={<Loader />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/rise-private-cloud" element={<RisePrivateCloud />} />
          <Route path="/sap-s4" element={<Sap />} />
          <Route path="/loadingg" element={<Loaderbounce />} />
          <Route path="/detail-5" element={<Detailofsap />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/transforming-chemical-industry" element={<TransformingChemicalIndustry />} />
          <Route path="/:type/:id" element={<BlogDetails />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
