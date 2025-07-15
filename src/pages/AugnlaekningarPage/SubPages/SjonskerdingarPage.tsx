import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '../../../components/ui/breadcrumb';
import HeroSection from './SjonskerdingarPage/HeroSection';
import IntroExplainer from './SjonskerdingarPage/IntroExplainer';
import MyopiaSection from './SjonskerdingarPage/MyopiaSection';
import ComparisonTable from './SjonskerdingarPage/ComparisonTable';
import TreatmentOverview from './SjonskerdingarPage/TreatmentOverview';
import FAQSection from './SjonskerdingarPage/FAQSection';
import CTASection from './SjonskerdingarPage/CTASection';

const SjonskerdingarPage: React.FC = () => (
  <div className="min-h-screen bg-white">
    <div className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb>
          <BreadcrumbList className="text-sm text-gray-500">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" aria-label="Heim">
                  <Home className="h-4 w-4 hover:text-gray-700" />
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/augnlaekningar">Augnlækningar</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Sjónskerðingar og sjónleiðréttingar</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
    <HeroSection />
    <IntroExplainer />
    <MyopiaSection />
    <ComparisonTable />
    <TreatmentOverview />
    <FAQSection />
    <CTASection />
  </div>
);

export default SjonskerdingarPage;
