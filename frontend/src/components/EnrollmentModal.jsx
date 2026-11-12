import React, { useState, useCallback } from 'react';

const API_BASE = 'http://localhost:8001/api';

const CLASS_OPTIONS = [
  'Play Group',
  'Nursery',
  'LKG (Lower Kindergarten)',
  'UKG (Upper Kindergarten)',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
];

export default function EnrollmentModal({ onClose }) {
  const [form, setForm] = useState({
    parent_name: '',
    child_name: '',
    phone: '',
    class_interested: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!form.parent_name || !form.child_name || !form.phone || !form.class_interested) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/enrollment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Server error. Please try again.');
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [form]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  return (
    <div className="enroll-modal-overlay" onClick={handleOverlayClick} data-testid="enrollment-modal">
      <div className="enroll-modal-card">
        <button className="enroll-modal-close" onClick={onClose} aria-label="Close" data-testid="close-enrollment-modal">
          ✕
        </button>

        {success ? (
          <div className="enroll-success">
            <span className="enroll-success-icon">🎉</span>
            <div className="enroll-success-title">Enquiry Submitted!</div>
            <p className="enroll-success-msg">
              Thank you! Our team will contact you shortly to guide you through the admission process for <strong>Springers School</strong>.
            </p>
            <button
              onClick={onClose}
              className="enroll-submit-btn"
              style={{ maxWidth: 220, margin: '24px auto 0' }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="enroll-modal-title">🎒 Admission Enquiry</div>
            <div className="enroll-modal-subtitle">Fill in the details below and we'll reach out to you!</div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="enroll-form-grid">
                {/* Parent Name */}
                <div>
                  <label className="enroll-form-label">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    name="parent_name"
                    className="enroll-form-input"
                    placeholder="Your full name"
                    value={form.parent_name}
                    onChange={handleChange}
                    data-testid="input-parent-name"
                  />
                </div>

                {/* Child Name */}
                <div>
                  <label className="enroll-form-label">Child's Name *</label>
                  <input
                    type="text"
                    name="child_name"
                    className="enroll-form-input"
                    placeholder="Child's full name"
                    value={form.child_name}
                    onChange={handleChange}
                    data-testid="input-child-name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="enroll-form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    className="enroll-form-input"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    data-testid="input-phone"
                  />
                </div>

                {/* Class */}
                <div>
                  <label className="enroll-form-label">Class Interested In *</label>
                  <select
                    name="class_interested"
                    className="enroll-form-select"
                    value={form.class_interested}
                    onChange={handleChange}
                    data-testid="select-class"
                  >
                    <option value="">Select class</option>
                    {CLASS_OPTIONS.map((cls) => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="enroll-form-full">
                  <label className="enroll-form-label">Message / Questions (optional)</label>
                  <textarea
                    name="message"
                    className="enroll-form-textarea"
                    placeholder="Any specific questions or requirements..."
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    data-testid="input-message"
                  />
                </div>
              </div>

              {error && (
                <p style={{ color: '#dc2626', fontSize: '0.85rem', fontFamily: 'Nunito', fontWeight: 700, marginBottom: 10 }}>
                  ⚠️ {error}
                </p>
              )}

              <button
                type="submit"
                className="enroll-submit-btn"
                disabled={loading}
                data-testid="submit-enrollment"
              >
                {loading ? '⏳ Submitting...' : '🚀 Submit Enquiry'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

