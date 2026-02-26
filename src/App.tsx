import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Splash from './components/Splash';
import Landing from './components/Landing';
import PhoneEntry from './components/PhoneEntry';
import OTPVerification from './components/OTPVerification';
import Dashboard from './components/Dashboard';
import RequestForm from './components/RequestForm';
import Searching from './components/Searching';
import LiveTracking from './components/LiveTracking';
import ProviderDashboard from './components/ProviderDashboard';
import DispatchOverlay from './components/DispatchOverlay';
import ProviderJobNavigation from './components/ProviderJobNavigation';
import ProviderJobService from './components/ProviderJobService';
import ProviderJobSummary from './components/ProviderJobSummary';
import ServiceInProgress from './components/ServiceInProgress';
import ServiceCompletion from './components/ServiceCompletion';
import Payment from './components/Payment';
import RatingFeedback from './components/RatingFeedback';
import OfflineState from './components/OfflineState';
import Profile from './components/Profile';
import Support from './components/Support';
import ManageVehicles from './components/ManageVehicles';
import AddPaymentMethod from './components/AddPaymentMethod';
import BottomNav from './components/BottomNav';
import Wallet from './components/Wallet';
import History from './components/History';
import ProviderEarnings from './components/ProviderEarnings';
import ProviderProfile from './components/ProviderProfile';
import ProviderBottomNav from './components/ProviderBottomNav';
import ProviderArriving from './components/ProviderArriving';
import ProviderLogin from './components/ProviderLogin';
import ProviderOTP from './components/ProviderOTP';
import ProviderHistory from './components/ProviderHistory';
import ProviderSupport from './components/ProviderSupport';

type Screen = 
  | 'splash' 
  | 'landing'
  | 'phone' 
  | 'otp'
  | 'dashboard' 
  | 'request_form' 
  | 'searching' 
  | 'live_tracking'
  | 'provider_arriving'
  | 'service_in_progress'
  | 'service_completion'
  | 'payment'
  | 'rating_feedback'
  | 'offline_state'
  | 'profile'
  | 'support'
  | 'manage_vehicles'
  | 'add_payment_method'
  | 'wallet'
  | 'history'
  | 'provider_login'
  | 'provider_otp'
  | 'provider_dashboard'
  | 'provider_dispatch'
  | 'provider_navigation'
  | 'provider_service'
  | 'provider_summary'
  | 'provider_earnings'
  | 'provider_profile'
  | 'provider_history'
  | 'provider_support';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedService, setSelectedService] = useState<string>('');
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup');

  const handleDispatch = (service: string) => {
    setSelectedService(service);
    setCurrentScreen('request_form');
  };

  const handleProfileNavigate = (screenId: string) => {
    if (screenId === 'vehicles') setCurrentScreen('manage_vehicles');
    if (screenId === 'payment') setCurrentScreen('add_payment_method');
  };

  const showBottomNav = ['dashboard', 'history', 'wallet', 'profile'].includes(currentScreen);
  const showProviderBottomNav = ['provider_dashboard', 'provider_earnings', 'provider_history', 'provider_profile'].includes(currentScreen);

  return (
    <div className="w-full h-screen bg-base overflow-hidden text-white font-sans relative">
      <AnimatePresence mode="wait">
        {currentScreen === 'splash' && (
          <Splash onComplete={() => setCurrentScreen('landing')} />
        )}
        {currentScreen === 'landing' && (
          <Landing 
            onGetStarted={() => { setAuthMode('signup'); setCurrentScreen('phone'); }}
            onSignIn={() => { setAuthMode('signin'); setCurrentScreen('phone'); }}
            onProviderLogin={() => setCurrentScreen('provider_login')}
          />
        )}
        {currentScreen === 'phone' && (
          <PhoneEntry 
            mode={authMode}
            onBack={() => setCurrentScreen('landing')}
            onComplete={() => setCurrentScreen('otp')} 
            onSwitchMode={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
          />
        )}
        {currentScreen === 'otp' && (
          <OTPVerification 
            onBack={() => setCurrentScreen('phone')}
            onComplete={() => setCurrentScreen('dashboard')} 
          />
        )}
        {currentScreen === 'dashboard' && (
          <Dashboard 
            onDispatch={handleDispatch} 
            onSwitchToProvider={() => setCurrentScreen('provider_dashboard')} 
            onOpenSupport={() => setCurrentScreen('support')}
          />
        )}
        {currentScreen === 'request_form' && (
          <RequestForm 
            service={selectedService}
            onConfirm={() => setCurrentScreen('searching')}
            onCancel={() => setCurrentScreen('dashboard')}
          />
        )}
        {currentScreen === 'searching' && (
          <Searching 
            service={selectedService}
            onFound={() => setCurrentScreen('live_tracking')}
          />
        )}
        {currentScreen === 'live_tracking' && (
          <LiveTracking 
            onArrived={() => setCurrentScreen('provider_arriving')}
          />
        )}
        {currentScreen === 'provider_arriving' && (
          <ProviderArriving 
            onNext={() => setCurrentScreen('service_in_progress')}
          />
        )}
        {currentScreen === 'service_in_progress' && (
          <ServiceInProgress 
            onComplete={() => setCurrentScreen('service_completion')}
          />
        )}
        {currentScreen === 'service_completion' && (
          <ServiceCompletion 
            onNext={() => setCurrentScreen('payment')}
          />
        )}
        {currentScreen === 'payment' && (
          <Payment 
            onComplete={() => setCurrentScreen('rating_feedback')}
          />
        )}
        {currentScreen === 'rating_feedback' && (
          <RatingFeedback 
            onComplete={() => setCurrentScreen('dashboard')}
          />
        )}
        {currentScreen === 'offline_state' && (
          <OfflineState 
            onRetry={() => setCurrentScreen('dashboard')}
          />
        )}
        {currentScreen === 'profile' && (
          <Profile 
            onBack={() => setCurrentScreen('dashboard')}
            onNavigate={handleProfileNavigate}
          />
        )}
        {currentScreen === 'support' && (
          <Support 
            onBack={() => setCurrentScreen('dashboard')}
          />
        )}
        {currentScreen === 'manage_vehicles' && (
          <ManageVehicles 
            onBack={() => setCurrentScreen('profile')}
          />
        )}
        {currentScreen === 'add_payment_method' && (
          <AddPaymentMethod 
            onBack={() => setCurrentScreen('profile')}
          />
        )}
        {currentScreen === 'wallet' && (
          <Wallet />
        )}
        {currentScreen === 'history' && (
          <History />
        )}
        
        {/* Provider Flow */}
        {currentScreen === 'provider_login' && (
          <ProviderLogin 
            onBack={() => setCurrentScreen('landing')}
            onNext={() => setCurrentScreen('provider_otp')}
          />
        )}
        {currentScreen === 'provider_otp' && (
          <ProviderOTP 
            onBack={() => setCurrentScreen('provider_login')}
            onVerify={() => setCurrentScreen('provider_dashboard')}
          />
        )}
        {currentScreen === 'provider_dashboard' && (
          <ProviderDashboard 
            onIncomingJob={() => setCurrentScreen('provider_dispatch')}
            onNavigate={(screen) => setCurrentScreen(screen as Screen)}
          />
        )}
        {currentScreen === 'provider_dispatch' && (
          <div className="h-full w-full relative">
            <ProviderDashboard onIncomingJob={() => {}} onNavigate={() => {}} />
            <DispatchOverlay 
              onAccept={() => setCurrentScreen('provider_navigation')}
              onDecline={() => setCurrentScreen('provider_dashboard')}
            />
          </div>
        )}
        {currentScreen === 'provider_navigation' && (
          <ProviderJobNavigation 
            onArrive={() => setCurrentScreen('provider_service')}
          />
        )}
        {currentScreen === 'provider_service' && (
          <ProviderJobService 
            onComplete={() => setCurrentScreen('provider_summary')}
          />
        )}
        {currentScreen === 'provider_summary' && (
          <ProviderJobSummary 
            onFinish={() => setCurrentScreen('provider_dashboard')}
          />
        )}
        {currentScreen === 'provider_earnings' && (
          <ProviderEarnings />
        )}
        {currentScreen === 'provider_profile' && (
          <ProviderProfile 
            onNavigate={(screen) => setCurrentScreen(screen as Screen)}
          />
        )}
        {currentScreen === 'provider_history' && (
          <ProviderHistory 
            onBack={() => setCurrentScreen('provider_dashboard')}
          />
        )}
        {currentScreen === 'provider_support' && (
          <ProviderSupport 
            onBack={() => setCurrentScreen('provider_profile')}
          />
        )}
      </AnimatePresence>

      {showBottomNav && (
        <BottomNav 
          currentTab={currentScreen as 'dashboard' | 'history' | 'wallet' | 'profile'} 
          onNavigate={(tab) => setCurrentScreen(tab)} 
        />
      )}
      
      {showProviderBottomNav && (
        <ProviderBottomNav 
          currentTab={currentScreen as 'provider_dashboard' | 'provider_earnings' | 'provider_history' | 'provider_profile'} 
          onNavigate={(tab) => setCurrentScreen(tab)} 
        />
      )}
    </div>
  );
}
