'use client';

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamically import components to avoid SSR issues
const NSELab = dynamic(() => import('@/topic/nse/NSELab'), { 
  ssr: false,
  loading: () => (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
    }}>
      <div>Loading NSE Lab...</div>
    </div>
  )
});

const GSHLab = dynamic(() => import('@/topic/gsh/GSHLab'), { 
  ssr: false,
  loading: () => (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
    }}>
      <div>Loading GSH Lab...</div>
    </div>
  )
});

const MALab = dynamic(() => import('@/topic/ma/MALab'), { 
  ssr: false,
  loading: () => (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white',
      background: 'linear-gradient(135deg, #2c1810 0%, #1a1a1a 100%)'
    }}>
      <div>Loading MA Lab...</div>
    </div>
  )
});

export default function TopicPage() {
  const params = useParams();
  const topic = params?.topic as string;

  // Render the appropriate component based on the topic
  const renderComponent = () => {
    switch (topic) {
      case 'nse':
        return <NSELab />;
      case 'gsh':
        return <GSHLab />;
      case 'ma':
        return <MALab />;
      default:
        return (
          <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            textAlign: 'center',
            padding: '2rem'
          }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              Topic Not Found
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
              The topic "{topic}" is not available
            </p>
          </div>
        );
    }
  };

  return renderComponent();
}