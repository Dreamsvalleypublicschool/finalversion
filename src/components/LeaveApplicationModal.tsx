import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, MessageCircle, FileText } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import AnimatedContent from './reactbits/AnimatedContent';

interface LeaveApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeaveApplicationModal: React.FC<LeaveApplicationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [formData, setFormData] = useState({
    studentName: '',
    grade: 'Class 6th',
    section: 'A',
    rollNo: '',
    leaveType: 'Medical / Sickness',
    fromDate: '',
    toDate: '',
    reason: '',
    parentName: '',
    parentPhone: ''
  });
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.studentName.trim() || !formData.fromDate || !formData.toDate || !formData.reason.trim()) {
      setError('Please fill in Student Name, Leave Dates, and Reason for leave.');
      return;
    }

    if (!formData.parentPhone.trim() || !/^\d{10}$/.test(formData.parentPhone.replace(/[^0-9]/g, ''))) {
      setError('Please provide a valid 10-digit parent/guardian mobile number.');
      return;
    }

    if (new Date(formData.fromDate) > new Date(formData.toDate)) {
      setError('The "From Date" cannot be after the "To Date".');
      return;
    }

    setError('');
    const generatedId = `DVPS-LV-${Math.floor(10000 + Math.random() * 90000)}`;
    setAppId(generatedId);

    const classSection = `${formData.grade} / Section ${formData.section}`;

    const waMessage = 
`Respected Principal Sir,
I am submitting a leave application. Here are the details:
- **Student Name:** ${formData.studentName.trim()}
- **Class/Section:** ${classSection}
- **Leave From Date:** ${formData.fromDate}
- **Leave To Date:** ${formData.toDate}
- **Reason for Leave:** ${formData.reason.trim()}
Kindly grant the leave. Thank you.`;

    const principalPhone = '918770577137';
    const targetWaUrl = `https://api.whatsapp.com/send?phone=${principalPhone}&text=${encodeURIComponent(waMessage)}`;
    
    setWhatsappUrl(targetWaUrl);
    setSubmitted(true);

    // Direct redirect to Principal Sir's WhatsApp Business
    try {
      window.open(targetWaUrl, '_blank');
    } catch {
      window.location.href = targetWaUrl;
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      grade: 'Class 6th',
      section: 'A',
      rollNo: '',
      leaveType: 'Medical / Sickness',
      fromDate: '',
      toDate: '',
      reason: '',
      parentName: '',
      parentPhone: ''
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="leave-dialog-title"
    >
      <div className="relative bg-[#0d173b]/95 backdrop-blur-2xl border border-white/20 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200 text-white">
        
        {/* Modal Header */}
        <div className="bg-white/5 text-white px-6 py-4 flex items-center justify-between border-b border-white/15 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 shrink-0 border border-white/30 shadow-md">
              <img 
                src={SCHOOL_INFO.logoUrl} 
                alt="School Crest" 
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 id="leave-dialog-title" className="font-bold text-base leading-tight font-heading text-white flex items-center gap-2">
                <span>Apply for Student Leave</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-orange-500/25 text-[#FF7A00] border border-orange-500/35">
                  Direct to Principal
                </span>
              </h2>
              <p className="text-xs text-white/70">
                To Principal Sir (MR. SATYAVRAT SINGH) &middot; Dreams Valley Public School
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close leave application modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          <AnimatedContent key={submitted ? 'success' : 'form'} distance={15} direction="vertical" duration={0.4} trigger="mount">
            <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-[#FF7A00]/20 text-[#FF7A00] rounded-full flex items-center justify-center mx-auto border border-[#FF7A00]/40 shadow-lg shadow-orange-500/10">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-white font-heading">
                Leave Application Formatted!
              </h4>
              <p className="text-sm text-white/80 max-w-md mx-auto">
                Leave application for <strong className="text-[#FF7A00]">{formData.studentName}</strong> ({formData.grade}) has been formatted and redirected to Principal Sir&apos;s WhatsApp.
              </p>

              <div className="bg-white/5 border border-white/15 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2.5">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="font-semibold text-white/70">Leave Application ID:</span>
                  <span className="font-bold text-[#FF7A00] font-mono text-sm bg-white/10 px-2.5 py-0.5 rounded border border-white/20">{appId}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-white/70">Student &amp; Class:</span>
                  <span className="font-semibold text-white">{formData.studentName} &middot; {formData.grade} (Sec {formData.section})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Leave Period:</span>
                  <span className="font-mono font-medium text-white">{formData.fromDate} to {formData.toDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Category:</span>
                  <span className="font-medium text-[#FF7A00]">{formData.leaveType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Principal Desk:</span>
                  <span className="font-semibold text-white">MR. SATYAVRAT SINGH (+91 8770577137)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 rounded-xl shadow-lg shadow-emerald-500/25 inline-flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Open Principal Sir&apos;s WhatsApp</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-admissions px-6 py-2.5 text-xs font-semibold rounded-xl cursor-pointer"
                >
                  Done / Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-500/20 border border-red-500/40 text-red-200 px-3.5 py-2.5 rounded-lg text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              {/* Notice Banner */}
              <div className="p-3 rounded-xl bg-orange-500/15 border border-orange-500/25 text-xs text-white/90 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                <span>
                  Submit this leave letter directly to Principal Sir (MR. SATYAVRAT SINGH). A pre-formatted official leave note will open automatically on WhatsApp.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="leave-student-name" className="block text-xs font-semibold text-white/90 mb-1">
                    Student Full Name <span className="text-[#FF7A00]">*</span>
                  </label>
                  <input
                    id="leave-student-name"
                    name="studentName"
                    autoComplete="name"
                    type="text"
                    required
                    placeholder="e.g. Aditya Singh"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="leave-grade" className="block text-xs font-semibold text-white/90 mb-1">
                      Class <span className="text-[#FF7A00]">*</span>
                    </label>
                    <select
                      id="leave-grade"
                      name="grade"
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-2.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white transition-all [&>option]:bg-[#0d173b] [&>option]:text-white"
                    >
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Class 1st">Class 1st</option>
                      <option value="Class 2nd">Class 2nd</option>
                      <option value="Class 3rd">Class 3rd</option>
                      <option value="Class 4th">Class 4th</option>
                      <option value="Class 5th">Class 5th</option>
                      <option value="Class 6th">Class 6th</option>
                      <option value="Class 7th">Class 7th</option>
                      <option value="Class 8th">Class 8th</option>
                      <option value="Class 9th">Class 9th</option>
                      <option value="Class 10th">Class 10th</option>
                      <option value="Class 11th">Class 11th</option>
                      <option value="Class 12th">Class 12th</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="leave-section" className="block text-xs font-semibold text-white/90 mb-1">
                      Section
                    </label>
                    <select
                      id="leave-section"
                      name="section"
                      value={formData.section}
                      onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                      className="w-full px-2.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white transition-all [&>option]:bg-[#0d173b] [&>option]:text-white"
                    >
                      <option value="A">Section A</option>
                      <option value="B">Section B</option>
                      <option value="C">Section C</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="leave-roll-no" className="block text-xs font-semibold text-white/90 mb-1">
                    Roll Number <span className="text-white/40 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="leave-roll-no"
                    name="rollNo"
                    type="text"
                    placeholder="e.g. 14"
                    value={formData.rollNo}
                    onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="leave-type" className="block text-xs font-semibold text-white/90 mb-1">
                    Leave Category
                  </label>
                  <select
                    id="leave-type"
                    name="leaveType"
                    value={formData.leaveType}
                    onChange={(e) => setFormData({ ...formData, leaveType: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white transition-all [&>option]:bg-[#0d173b] [&>option]:text-white"
                  >
                    <option value="Medical / Sickness">Medical / Sickness</option>
                    <option value="Family Function / Wedding">Family Function / Wedding</option>
                    <option value="Urgent Domestic Work">Urgent Domestic Work</option>
                    <option value="Out of Town Travel">Out of Town Travel</option>
                    <option value="Other">Other Genuine Cause</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="leave-from-date" className="block text-xs font-semibold text-white/90 mb-1">
                    From Date <span className="text-[#FF7A00]">*</span>
                  </label>
                  <input
                    id="leave-from-date"
                    name="fromDate"
                    type="date"
                    required
                    value={formData.fromDate}
                    onChange={(e) => setFormData({ ...formData, fromDate: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white transition-all font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="leave-to-date" className="block text-xs font-semibold text-white/90 mb-1">
                    To Date <span className="text-[#FF7A00]">*</span>
                  </label>
                  <input
                    id="leave-to-date"
                    name="toDate"
                    type="date"
                    required
                    value={formData.toDate}
                    onChange={(e) => setFormData({ ...formData, toDate: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white transition-all font-mono"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="leave-reason" className="block text-xs font-semibold text-white/90 mb-1">
                  Reason / Leave Application Letter <span className="text-[#FF7A00]">*</span>
                </label>
                <textarea
                  id="leave-reason"
                  name="reason"
                  required
                  rows={3}
                  placeholder="Explain why the student is unable to attend classes on the specified dates..."
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="leave-parent-name" className="block text-xs font-semibold text-white/90 mb-1">
                    Parent / Guardian Name
                  </label>
                  <input
                    id="leave-parent-name"
                    name="parentName"
                    autoComplete="name"
                    type="text"
                    placeholder="Father / Mother Name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="leave-parent-phone" className="block text-xs font-semibold text-white/90 mb-1">
                    Parent Contact Mobile <span className="text-[#FF7A00]">*</span>
                  </label>
                  <input
                    id="leave-parent-phone"
                    name="parentPhone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all font-mono"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-admissions px-6 py-2.5 text-xs font-semibold inline-flex items-center gap-2 cursor-pointer shadow-lg rounded-[10px]"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Send on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
            </div>
          </AnimatedContent>
        </div>

      </div>
    </div>
  );
};
