content = '''import { useState } from "react";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";

export function Careers() {
  const [activeForm, setActiveForm] = useState<"general" | "cdl">("general");

  const [generalData, setGeneralData] = useState({
    name: "", email: "", phone: "", position: "", experience: "", availability: "", message: ""
  });
  const [cdlData, setCdlData] = useState({
    name: "", email: "", phone: "", cdl_class: "", cdl_number: "", years_experience: "",
    vehicles_operated: "", dot_number: "", drug_testing_consent: "", mvr_authorization: "",
    availability: "", message: ""
  });

  const [generalSubmitted, setGeneralSubmitted] = useState(false);
  const [cdlSubmitted, setCdlSubmitted] = useState(false);
  const [generalLoading, setGeneralLoading] = useState(false);
  const [cdlLoading, setCdlLoading] = useState(false);

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "fb986043-20d3-4ea7-abee-dd5434cc35ba",
          subject: "New General Job Application - Cincinnati Landworks",
          from_name: generalData.name,
          ...generalData
        })
      });
      const data = await response.json();
      if (data.success) {
        setGeneralSubmitted(true);
        setGeneralData({ name: "", email: "", phone: "", position: "", experience: "", availability: "", message: "" });
      }
    } catch (err) { console.error(err); }
    setGeneralLoading(false);
  };

  const handleCdlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCdlLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "fb986043-20d3-4ea7-abee-dd5434cc35ba",
          subject: "New CDL Driver Application - Cincinnati Landworks",
          from_name: cdlData.name,
          ...cdlData
        })
      });
      const data = await response.json();
      if (data.success) {
        setCdlSubmitted(true);
        setCdlData({ name: "", email: "", phone: "", cdl_class: "", cdl_number: "", years_experience: "", vehicles_operated: "", dot_number: "", drug_testing_consent: "", mvr_authorization: "", availability: "", message: "" });
      }
    } catch (err) { console.error(err); }
    setCdlLoading(false);
  };

  const inputClass = "w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none text-zinc-900";
  const labelClass = "block text-sm font-medium mb-1 text-zinc-700";

  return (
    <div>
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-10" style={{background: "rgba(0,0,0,0.65)"}}></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/Commercial_Crane.png')"}}></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <div className="uppercase tracking-wider text-sm mb-4" style={{color: "#E8510A"}}>Join Our Team</div>
            <h1 className="text-5xl md:text-6xl mb-6" style={{color: "#ffffff"}}>Build a Career in Commercial Concrete</h1>
            <p className="text-xl" style={{color: "#e0e0e0"}}>Cincinnati Landworks is growing. We are looking for hardworking people who take pride in their work across the Cincinnati Tri-State area.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-3xl">

          <div className="flex gap-4 mb-10">
            <button
              onClick={() => setActiveForm("general")}
              className="flex-1 py-4 rounded-lg font-medium text-base transition-colors"
              style={{
                background: activeForm === "general" ? "#E8510A" : "#fff",
                color: activeForm === "general" ? "#fff" : "#1A1A1A",
                border: activeForm === "general" ? "none" : "1px solid #ddd"
              }}
            >
              General Application
            </button>
            <button
              onClick={() => setActiveForm("cdl")}
              className="flex-1 py-4 rounded-lg font-medium text-base transition-colors"
              style={{
                background: activeForm === "cdl" ? "#1A1A1A" : "#fff",
                color: activeForm === "cdl" ? "#fff" : "#1A1A1A",
                border: activeForm === "cdl" ? "none" : "1px solid #ddd"
              }}
            >
              CDL Driver Application
            </button>
          </div>

          {activeForm === "general" && (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2" style={{color: "#1A1A1A"}}>General Application</h2>
              <p className="text-zinc-500 mb-8 text-sm">Concrete finishers, laborers, foremen, and all field positions.</p>
              {generalSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: "#F0FFF4"}}>
                    <CheckCircle2 className="w-10 h-10" style={{color: "#2D7D46"}} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Application Submitted!</h3>
                  <p className="text-zinc-600">Thank you for your interest in Cincinnati Landworks. We will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleGeneralSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input type="text" name="name" required value={generalData.name} onChange={e => setGeneralData({...generalData, name: e.target.value})} className={inputClass} placeholder="John Smith" />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input type="tel" name="phone" required value={generalData.phone} onChange={e => setGeneralData({...generalData, phone: e.target.value})} className={inputClass} placeholder="(513) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input type="email" name="email" required value={generalData.email} onChange={e => setGeneralData({...generalData, email: e.target.value})} className={inputClass} placeholder="john@email.com" />
                  </div>
                  <div>
                    <label className={labelClass}>Position Applying For *</label>
                    <input type="text" name="position" required value={generalData.position} onChange={e => setGeneralData({...generalData, position: e.target.value})} className={inputClass} placeholder="e.g. Concrete Finisher, Laborer, Foreman" />
                  </div>
                  <div>
                    <label className={labelClass}>Work Experience</label>
                    <textarea name="experience" value={generalData.experience} onChange={e => setGeneralData({...generalData, experience: e.target.value})} rows={3} className={inputClass + " resize-none"} placeholder="Describe your relevant work experience..." />
                  </div>
                  <div>
                    <label className={labelClass}>Availability and Desired Start Date *</label>
                    <input type="text" name="availability" required value={generalData.availability} onChange={e => setGeneralData({...generalData, availability: e.target.value})} className={inputClass} placeholder="e.g. Immediately, 2 weeks notice, Part-time" />
                  </div>
                  <div>
                    <label className={labelClass}>Additional Information</label>
                    <textarea name="message" value={generalData.message} onChange={e => setGeneralData({...generalData, message: e.target.value})} rows={3} className={inputClass + " resize-none"} placeholder="Anything else you would like us to know..." />
                  </div>
                  <button type="submit" disabled={generalLoading} className="w-full text-white py-4 rounded-lg text-base font-medium flex items-center justify-center gap-2" style={{background: generalLoading ? "#999" : "#E8510A"}}>
                    <Send className="w-5 h-5" />
                    {generalLoading ? "Submitting..." : "Submit Application"}
                  </button>
                  <p className="text-xs text-zinc-400 text-center">* Required fields. We will review your application and be in touch.</p>
                </form>
              )}
            </div>
          )}

          {activeForm === "cdl" && (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2" style={{color: "#1A1A1A"}}>CDL Driver Application</h2>
              <p className="text-zinc-500 mb-8 text-sm">CDL Class A or B required. DOT compliance fields included below.</p>
              {cdlSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: "#F0FFF4"}}>
                    <CheckCircle2 className="w-10 h-10" style={{color: "#2D7D46"}} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Application Submitted!</h3>
                  <p className="text-zinc-600">Thank you for your interest in Cincinnati Landworks. We will review your CDL application and be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleCdlSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input type="text" required value={cdlData.name} onChange={e => setCdlData({...cdlData, name: e.target.value})} className={inputClass} placeholder="John Smith" />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input type="tel" required value={cdlData.phone} onChange={e => setCdlData({...cdlData, phone: e.target.value})} className={inputClass} placeholder="(513) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input type="email" required value={cdlData.email} onChange={e => setCdlData({...cdlData, email: e.target.value})} className={inputClass} placeholder="john@email.com" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>CDL License Number *</label>
                      <input type="text" required value={cdlData.cdl_number} onChange={e => setCdlData({...cdlData, cdl_number: e.target.value})} className={inputClass} placeholder="License number" />
                    </div>
                    <div>
                      <label className={labelClass}>CDL Class *</label>
                      <select required value={cdlData.cdl_class} onChange={e => setCdlData({...cdlData, cdl_class: e.target.value})} className={inputClass}>
                        <option value="">Select class</option>
                        <option value="Class A">Class A</option>
                        <option value="Class B">Class B</option>
                        <option value="Class C">Class C</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Years of Commercial Driving Experience *</label>
                      <input type="text" required value={cdlData.years_experience} onChange={e => setCdlData({...cdlData, years_experience: e.target.value})} className={inputClass} placeholder="e.g. 5 years" />
                    </div>
                    <div>
                      <label className={labelClass}>DOT Number (if applicable)</label>
                      <input type="text" value={cdlData.dot_number} onChange={e => setCdlData({...cdlData, dot_number: e.target.value})} className={inputClass} placeholder="DOT number" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Types of Vehicles Operated *</label>
                    <input type="text" required value={cdlData.vehicles_operated} onChange={e => setCdlData({...cdlData, vehicles_operated: e.target.value})} className={inputClass} placeholder="e.g. Dump truck, concrete mixer, flatbed" />
                  </div>
                  <div>
                    <label className={labelClass}>Availability and Desired Start Date *</label>
                    <input type="text" required value={cdlData.availability} onChange={e => setCdlData({...cdlData, availability: e.target.value})} className={inputClass} placeholder="e.g. Immediately, 2 weeks notice" />
                  </div>
                  <div>
                    <label className={labelClass}>Additional Information</label>
                    <textarea value={cdlData.message} onChange={e => setCdlData({...cdlData, message: e.target.value})} rows={3} className={inputClass + " resize-none"} placeholder="Any additional information about your driving experience..." />
                  </div>
                  <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-5 space-y-4">
                    <p className="text-sm font-medium text-zinc-700">DOT Compliance Acknowledgements *</p>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" required checked={cdlData.drug_testing_consent === "yes"} onChange={e => setCdlData({...cdlData, drug_testing_consent: e.target.checked ? "yes" : ""})} className="mt-1" />
                      <span className="text-sm text-zinc-600">I consent to pre-employment and random drug and alcohol testing as required by DOT regulations.</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" required checked={cdlData.mvr_authorization === "yes"} onChange={e => setCdlData({...cdlData, mvr_authorization: e.target.checked ? "yes" : ""})} className="mt-1" />
                      <span className="text-sm text-zinc-600">I authorize Cincinnati Landworks to request my Motor Vehicle Record (MVR) as part of the hiring process.</span>
                    </label>
                  </div>
                  <button type="submit" disabled={cdlLoading} className="w-full text-white py-4 rounded-lg text-base font-medium flex items-center justify-center gap-2" style={{background: cdlLoading ? "#999" : "#1A1A1A"}}>
                    <Send className="w-5 h-5" />
                    {cdlLoading ? "Submitting..." : "Submit CDL Application"}
                  </button>
                  <p className="text-xs text-zinc-400 text-center">* Required fields. We will review your application and be in touch.</p>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
'''

with open('src/app/pages/Careers.tsx', 'w') as f:
    f.write(content)
print("Done")
