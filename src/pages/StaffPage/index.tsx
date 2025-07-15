import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  GraduationCap,
  Loader2,
  AlertCircle,
  Home,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import StaffModal from '../../components/StaffModal';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../../components/ui/breadcrumb';

interface Doctor {
  id: string;
  name: string;
  job_title: string;
  job_title_en: string | null;
  img_src: string;
  further_data: string | null;
  further_data_en: string | null;
  created_at: string;
  updated_at: string;
}

interface StaffMember {
  id: string;
  name: string;
  job_title: string;
  img_src: string;
  created_at: string;
  updated_at: string;
}

const StaffCard: React.FC<{ doctor: Doctor; index: number; onSeeMore: () => void }> = ({ 
  doctor, 
  index, 
  onSeeMore 
}) => {
  const { t } = useLanguage();
  const { language } = useLanguage();

  // Get localized job title based on selected language
  const getLocalizedJobTitle = () => {
    if (language === 'en' && doctor.job_title_en) {
      return doctor.job_title_en;
    }
    return doctor.job_title;
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative h-80"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Background Image */}
      <div className="relative h-full overflow-hidden">
        <img
          src={doctor.img_src}
          alt={doctor.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{doctor.name}</h3>
          <p className="text-blue-200 text-sm font-medium mb-4">{getLocalizedJobTitle()}</p>

          {/* See More Button */}
          <button
            onClick={onSeeMore}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>{t.aboutUsPage.ourTeam.seeMoreButton}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const SimpleStaffCard: React.FC<{ staff: StaffMember; index: number }> = ({ 
  staff, 
  index 
}) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative h-80"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Background Image */}
      <div className="relative h-full overflow-hidden">
        <img
          src={staff.img_src}
          alt={staff.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{staff.name}</h3>
          <p className="text-blue-200 text-sm font-medium">{staff.job_title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const StaffPage: React.FC = () => {
  const { t } = useLanguage();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleSeeMore = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch both doctors and staff concurrently
        const [doctorsResponse, staffResponse] = await Promise.all([
          supabase
            .from('doctors')
            .select('id, name, job_title, job_title_en, img_src, further_data, further_data_en, created_at, updated_at')
            .order('created_at', { ascending: true }),
          supabase
            .from('staff')
            .select('*')
            .order('created_at', { ascending: true })
        ]);

        // Handle doctors data
        if (doctorsResponse.error) {
          throw new Error(`Failed to fetch doctors: ${doctorsResponse.error.message}`);
        }
        if (!doctorsResponse.data) {
          throw new Error('No doctors data received from database');
        }
        setDoctors(doctorsResponse.data);

        // Handle staff data
        if (staffResponse.error) {
          throw new Error(`Failed to fetch staff: ${staffResponse.error.message}`);
        }
        if (!staffResponse.data) {
          throw new Error('No staff data received from database');
        }
        setStaffMembers(staffResponse.data);

        // Check expected counts
        if (doctorsResponse.data.length !== 12) {
          console.warn(`Expected 12 doctor records, but found ${doctorsResponse.data.length}`);
        }
        if (staffResponse.data.length !== 16) {
          console.warn(`Expected 16 staff records, but found ${staffResponse.data.length}`);
        }

      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'An unexpected error occurred';
        setError(errorMessage);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="mb-4"
            >
              <Loader2 className="h-12 w-12 text-blue-600" />
            </motion.div>
            <p className="text-xl text-gray-600">Hleð starfsfólki...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 pt-8">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <Breadcrumb>
            <BreadcrumbList className="text-sm text-gray-500">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" aria-label="Heim">
                    <Home className="h-4 w-4 text-gray-500 hover:text-gray-700" />
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/um-sjonlag">Um Sjónlag</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Okkar starfsfólk</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.aboutUsPage.ourTeam.staffPageTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.aboutUsPage.ourTeam.staffPageSubtitle}
            </p>
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.div
              className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3 max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
              <div>
                <p className="text-red-800 font-medium">Villa kom upp</p>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </motion.div>
          )}

          {/* Doctors Section */}
          {doctors.length > 0 && (
            <>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t.aboutUsPage.ourTeam.doctorsSectionTitle}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
                {doctors.map((doctor, index) => (
                  <StaffCard 
                    key={doctor.id} 
                    doctor={doctor} 
                    index={index}
                    onSeeMore={() => handleSeeMore(doctor)}
                  />
                ))}
              </div>
            </>
          )}

          {/* Staff Section */}
          {staffMembers.length > 0 && (
            <>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t.aboutUsPage.ourTeam.otherStaffSectionTitle}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {staffMembers.map((staff, index) => (
                  <SimpleStaffCard 
                    key={staff.id} 
                    staff={staff} 
                    index={index}
                  />
                ))}
              </div>
            </>
          )}

          {/* No Data Message */}
          {!loading && doctors.length === 0 && staffMembers.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Engar upplýsingar fundust
              </h3>
              <p className="text-gray-600">
                Ekki tókst að sækja upplýsingar um starfsfólk. Vinsamlegast reyndu
                aftur síðar.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Staff Modal */}
      {selectedDoctor && (
        <StaffModal 
          doctor={selectedDoctor} 
          onClose={handleCloseModal} 
        />
      )}
    </>
  );
};

export default StaffPage;