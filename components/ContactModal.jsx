'use client';

import React, { useState, useEffect } from 'react';

const SERVICES = [
  'Custom AI Agents',
  'LLM Integration & Fine-tuning',
  'Full-Stack AI Application',
  'AI Automation & Workflows',
  'AI Strategy & MVP Sprint'
];

export default function ContactModal({ isOpen, onClose }) {
  const [selectedService, setSelectedService] = useState('Custom AI Agents');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$15k - $30k',
    details: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div 
      className="modal-backdrop" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-card">
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Close dialog"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {!isSubmitted ? (
          <div>
            <div className="modal-header">
              <span className="modal-tag">Webnox AI Studio</span>
              <h2 id="modal-title">Build Your AI Solution</h2>
              <p>
                Share your requirements with us. Our AI engineering team will review your proposal and get back within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Target AI Capability</label>
                <div className="service-pills">
                  {SERVICES.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      className={`service-pill ${selectedService === srv ? 'active' : ''}`}
                      onClick={() => setSelectedService(srv)}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="modal-name">Your Name</label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-email">Work Email</label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-budget">Anticipated Scope / Investment</label>
                <select
                  id="modal-budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  <option value="$10k - $25k">$10,000 - $25,000 (Rapid MVP)</option>
                  <option value="$25k - $50k">$25,000 - $50,000 (Production System)</option>
                  <option value="$50k+">$50,000+ (Enterprise Autonomous Systems)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="modal-details">Project Overview & Objectives</label>
                <textarea
                  id="modal-details"
                  rows={3}
                  placeholder="Describe the workflow, data sources, or user experience you are looking to build..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>

              <button type="submit" className="modal-submit-btn">
                <span>Submit AI Solution Request</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-success">
            <div className="success-icon-badge">✓</div>
            <h3>Request Received</h3>
            <p>
              Thank you, <strong>{formData.name || 'there'}</strong>. An AI solutions architect from Webnox will reach out to <strong>{formData.email}</strong> shortly.
            </p>
            <button 
              type="button" 
              className="modal-submit-btn" 
              style={{ marginTop: '20px' }}
              onClick={onClose}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
