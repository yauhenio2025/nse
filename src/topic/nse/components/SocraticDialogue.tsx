import React, { useState, useRef, useEffect } from 'react';
import { 
  getResponse, 
  conversationStarters,
  dialoguePatterns 
} from '../../../data/nse/socraticData';
import './SocraticDialogue.css';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'tutor';
  concept?: string;
}

const SocraticDialogue: React.FC = () => {
  const [currentStarter, setCurrentStarter] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: conversationStarters[0].text,
      sender: 'tutor',
      concept: 'Introduction'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [relatedConcepts, setRelatedConcepts] = useState<string[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
    // Extract concepts from the last tutor message
    const lastTutorMessage = messages.filter(m => m.sender === 'tutor').pop();
    if (lastTutorMessage && lastTutorMessage.concept) {
      const concepts = dialoguePatterns
        .filter(p => p.concept.includes(lastTutorMessage.concept))
        .map(p => p.concept)
        .slice(0, 3);
      setRelatedConcepts(concepts);
    }
  }, [messages]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isThinking) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsThinking(true);
    setShowHint(false);

    // Simulate thinking and respond
    setTimeout(() => {
      const response = getResponse(inputValue);
      
      // Find which concept this response relates to
      const matchedPattern = dialoguePatterns.find(pattern => 
        pattern.response === response
      );
      
      const tutorMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: 'tutor',
        concept: matchedPattern?.concept || 'General'
      };
      setMessages(prev => [...prev, tutorMessage]);
      setIsThinking(false);
    }, 1500);
  };



  const switchScenario = () => {
    const nextStarter = (currentStarter + 1) % conversationStarters.length;
    setCurrentStarter(nextStarter);
    setMessages([{
      id: 1,
      text: conversationStarters[nextStarter].text,
      sender: 'tutor',
      concept: 'Introduction'
    }]);
    setShowHint(false);
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="socratic-dialogue">
      <h2 className="module-title">💭 Learn Through Guided Discovery</h2>
      
      <div className="dialogue-controls">
        <button onClick={switchScenario} className="scenario-btn">
          🔄 Try Different Scenario
        </button>
        <button onClick={toggleHint} className="hint-btn">
          💡 {showHint ? 'Hide' : 'Show'} Hint
        </button>
      </div>

      {showHint && (
        <div className="hint-box">
          <strong>💡 Hint:</strong> {conversationStarters[currentStarter].hint}
        </div>
      )}
      
      <div className="chat-container">
        <div className="messages-list">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <strong>{message.sender === 'tutor' ? 'NSE Tutor' : 'You'}</strong>
              {message.concept && message.sender === 'tutor' && (
                <span className="concept-tag">{message.concept}</span>
              )}
              <p>{message.text}</p>
            </div>
          ))}
          
          {isThinking && (
            <div className="message tutor thinking">
              <strong>NSE Tutor</strong>
              <div className="thinking-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          
          <div ref={chatEndRef} />
        </div>
        
        {relatedConcepts.length > 0 && (
          <div className="concepts-sidebar">
            <h4>🎯 Key Concepts:</h4>
            <ul>
              {relatedConcepts.map((concept, index) => (
                <li key={index}>{concept}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="input-area">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your answer or ask a question..."
          disabled={isThinking}
        />
        <button type="submit" disabled={isThinking || !inputValue.trim()}>
          Send →
        </button>
      </form>
      
      <div className="learning-tracker">
        <h4>📚 Your Learning Journey:</h4>
        <div className="concepts-covered">
          {Array.from(new Set(messages.filter(m => m.concept && m.sender === 'tutor').map(m => m.concept))).map((concept, index) => (
            <span key={index} className="concept-badge">{concept}</span>
          ))}
        </div>
      </div>
      
      <div className="nse-quick-reference">
        <h4>🔑 NSE Quick Reference:</h4>
        <div className="reference-grid">
          <div className="reference-item">
            <strong>Comparative Advantage:</strong>
            <p>Countries should produce what their factor endowments make cheapest</p>
          </div>
          <div className="reference-item">
            <strong>Factor Endowments:</strong>
            <p>Labor, capital, and natural resources determine optimal industries</p>
          </div>
          <div className="reference-item">
            <strong>Structural Change:</strong>
            <p>Economies naturally upgrade as capital accumulates and wages rise</p>
          </div>
          <div className="reference-item">
            <strong>Government Role:</strong>
            <p>Facilitate viable industries, don't protect non-viable ones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocraticDialogue;