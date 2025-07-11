'use client';

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamically import components to avoid SSR issues
const NSELab = dynamic(() => import('@/topic/nse/NSELab'), { 
  ssr: false,
  loading: () => <div>Loading NSE Lab...</div>
});

const GSHLab = dynamic(() => import('@/topic/gsh/GSHLab'), { 
  ssr: false,
  loading: () => <div>Loading GSH Lab...</div>
});

const MALab = dynamic(() => import('@/topic/ma/MALab'), { 
  ssr: false,
  loading: () => <div>Loading MA Lab...</div>
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
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white',
            background: '#1a1a2e'
          }}>
            <h1>Topic not found: {topic}</h1>
          </div>
        );
    }
  };

  return renderComponent();
}