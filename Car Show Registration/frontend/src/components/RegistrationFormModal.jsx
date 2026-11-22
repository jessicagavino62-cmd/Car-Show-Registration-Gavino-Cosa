import { useState } from 'react';
import { Check, X } from 'lucide-react';

const fieldClass = 'mt-1.5 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-100';
const labelClass = 'block text-sm font-medium text-slate-700';

export default function RegistrationFormModal({ onClose, onSubmit }) {
  const [registrationType, setRegistrationType] = useState('Exhibitor');
  const [step, setStep] = useState('details');
  const [details, setDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [submittedRegistration, setSubmittedRegistration] = useState(null);

  const handleDetailsSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setDetails(Object.fromEntries(formData.entries()));
    setStep('payment');
  };

  const completeRegistration = () => {
    const registration = onSubmit({ ...details, paymentMethod });
    setSubmittedRegistration(registration);
    setStep('submitted');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4"
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <section className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="registration-modal-title">
        <div className="flex items-start justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
          <div>
            <h2 id="registration-modal-title" className="text-lg font-semibold text-slate-900">{step === 'details' ? 'New registration' : step === 'payment' ? 'Choose payment method' : 'Registration submitted'}</h2>
            <p className="mt-1 text-sm text-slate-500">{step === 'details' ? 'Enter the participant and vehicle details below.' : step === 'payment' ? 'Select how this registration will be paid.' : 'Your registration has been successfully submitted.'}</p>
          </div>
          <button className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800" type="button" onClick={onClose} aria-label="Close registration form">
            <X size={19} aria-hidden="true" />
          </button>
        </div>

        {step === 'details' ? <form onSubmit={handleDetailsSubmit}>
          <div className="grid gap-4 px-5 py-5 sm:grid-cols-2 sm:px-6">
            <label className={labelClass}>
              Participant name
              <input className={fieldClass} name="participantName" autoComplete="name" placeholder="Full name" required />
            </label>
            <label className={labelClass}>
              Contact number
              <input className={fieldClass} name="contactNumber" type="tel" autoComplete="tel" placeholder="09XX XXX XXXX" required />
            </label>
            <label className={labelClass}>
              Email address
              <input className={fieldClass} name="email" type="email" autoComplete="email" placeholder="name@example.com" required />
            </label>
            <label className={labelClass}>
              Address
              <input className={fieldClass} name="address" autoComplete="street-address" placeholder="City or municipality" required />
            </label>
            <label className={labelClass}>
              Car make and model
              <input className={fieldClass} name="carMakeModel" placeholder="e.g. Toyota Supra MK4" required />
            </label>
            <label className={labelClass}>
              Plate number
              <input className={fieldClass} name="plateNumber" placeholder="Vehicle plate number" required />
            </label>
            <label className={`${labelClass} sm:col-span-2`}>
              Registration type
              <select className={fieldClass} name="registrationType" value={registrationType} onChange={(event) => setRegistrationType(event.target.value)}>
                <option value="Exhibitor">Exhibitor — ₱1,500</option>
                <option value="Competitor">Competitor — ₱2,500</option>
                <option value="VIP">VIP — ₱3,900</option>
              </select>
            </label>
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-slate-100 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
            <button className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50" type="button" onClick={onClose}>Cancel</button>
            <button className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2" type="submit">Continue to payment</button>
          </div>
        </form> : step === 'payment' ? <div>
          <fieldset className="grid gap-3 px-5 py-5 sm:grid-cols-2 sm:px-6">
            <legend className="sr-only">Payment method</legend>
            {['Cash', 'Online Payment'].map((method) => (
              <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${paymentMethod === method ? 'border-red-500 bg-red-50 ring-1 ring-red-500' : 'border-slate-200 hover:border-slate-300'}`} key={method}>
                <input className="size-4 accent-red-600" type="radio" name="paymentMethod" value={method} checked={paymentMethod === method} onChange={() => setPaymentMethod(method)} />
                <span className="text-sm font-semibold text-slate-800">{method}</span>
              </label>
            ))}
          </fieldset>
          <div className="flex flex-col-reverse gap-2 border-t border-slate-100 px-5 py-4 sm:flex-row sm:justify-between sm:px-6">
            <button className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50" type="button" onClick={() => setStep('details')}>Back</button>
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
              <button className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50" type="button" onClick={onClose}>Cancel</button>
              <button className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2" type="button" onClick={completeRegistration}>Complete registration</button>
            </div>
          </div>
        </div> : <div className="px-5 py-6 sm:px-6">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-red-100 text-red-700">
            <Check aria-hidden="true" size={30} strokeWidth={3} />
          </div>
          <div className="mt-3 text-center">
            <h3 className="text-xl font-bold text-slate-900">Registration Submitted!</h3>
            <p className="mt-1 text-sm text-slate-600">Your registration has been submitted with <strong>{submittedRegistration.paymentMethod} Payment</strong>.</p>
          </div>
          <div className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-slate-700">
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
              <dt>Reference No.:</dt>
              <dd className="font-semibold text-slate-900">{submittedRegistration.registrationNumber}</dd>
              <dt>Payment Method:</dt>
              <dd className="font-semibold text-slate-900">{submittedRegistration.paymentMethod}</dd>
              <dt>Status:</dt>
              <dd><span className="rounded-full bg-amber-200 px-2.5 py-1 text-xs font-semibold text-amber-900">Pending Payment</span></dd>
            </dl>
          </div>
          {submittedRegistration.paymentMethod === 'Cash' ? (
            <div className="mt-4 rounded-xl border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-900">Cash payment instructions</h4>
              <ol className="mt-2 list-inside list-decimal space-y-1.5 text-sm text-slate-600">
                <li>Bring your registration reference to the event booth.</li>
                <li>Pay the registration fee in cash on event day.</li>
                <li>Your registration will be confirmed after payment.</li>
              </ol>
            </div>
          ) : (
            <p className="mt-4 rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Online payment is not configured yet. This registration remains pending payment until payment is recorded.</p>
          )}
          <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50" type="button" onClick={onClose}>Close</button>
            <button className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2" type="button" onClick={onClose}>View Registration</button>
          </div>
        </div>}
      </section>
    </div>
  );
}
