import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { 
    Search, 
    MessageCircle, 
    Mail, 
    Phone, 
    ChevronDown, 
    HelpCircle, 
    BookOpen, 
    ShieldCheck, 
    Zap,
    ExternalLink,
    ArrowRight
} from 'lucide-react';

const Help = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaq, setOpenFaq] = useState(null);

    const categories = [
        {
            icon: <Zap className="w-4 h-4 text-[#00ff00]" />,
            title: "Getting Started",
            description: "New to Capital Street FX? Learn the basics of trading and account setup.",
            link: "#"
        },
        {
            icon: <ShieldCheck className="w-4 h-4 text-[#ff00ff]" />,
            title: "Security & Privacy",
            description: "How we protect your funds and personal information with enterprise-grade security.",
            link: "#"
        },
        {
            icon: <BookOpen className="w-4 h-4 text-[#00ff00]" />,
            title: "Platform Guides",
            description: "Detailed walkthroughs for Fortex, Act Trader, and our proprietary dashboard.",
            link: "#"
        }
    ];

    const faqs = [
        {
            question: "HOW DO I RESET MY MT4/MT5 TRADING PASSWORD?",
            answer: "Go to 'Manage Accounts', select your trading account, and click on 'Reset Password'. A temporary password will be sent to your registered email address."
        },
        {
            question: "WHAT ARE THE MINIMUM DEPOSIT REQUIREMENTS?",
            answer: "The minimum deposit varies by account type. Our Micro account starts at just $100, while Standard accounts typically require $1,000."
        },
        {
            question: "HOW LONG DO WITHDRAWALS TAKE TO PROCESS?",
            answer: "Withdrawals are typically processed within 24 hours on business days. Depending on your payment method, funds may take 1-5 business days to reach you."
        },
        {
            question: "IS CAPITAL STREET FX REGULATED?",
            answer: "Yes, Capital Street FX is a fully regulated brokerage. We adhere to strict financial standards to ensure the safety of client funds."
        }
    ];

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade pb-12">
                {/* Search Header Container */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-1 bg-[#00ff00]"></div>
                    <div className="p-8 md:p-12">
                        <div className="max-w-3xl mx-auto space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Support Center</h3>
                                <h1 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">How can we help you?</h1>
                            </div>
                            
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#00ff00] transition-colors" size={18} />
                                <input 
                                    type="text"
                                    placeholder="SEARCH KNOWLEDGE BASE..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:ring-1 focus:ring-[#00ff00] focus:bg-white transition-all placeholder:text-slate-400"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-[#00ff00] text-[10px] font-bold py-2 px-4 rounded hover:bg-slate-800 transition-all uppercase whitespace-nowrap">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-[#00ff00] transition-all group cursor-pointer">
                            <div className="flex items-center gap-2 mb-4">
                                {cat.icon}
                                <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">{cat.title}</h3>
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight leading-relaxed mb-6 h-12 overflow-hidden">
                                {cat.description}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest group-hover:text-[#00ff00] transition-colors">View Articles</span>
                                <ArrowRight size={14} className="text-[#00ff00] group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* FAQ Accordion */}
                    <div className="lg:col-span-8 space-y-4 bg-white rounded-lg border border-slate-200 shadow-sm p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-8">
                            <HelpCircle className="w-4 h-4 text-[#00ff00]" />
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Common Inquiries</h3>
                        </div>
                        
                        <div className="space-y-3">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className={`border rounded-lg transition-all ${openFaq === idx ? 'border-[#00ff00] bg-slate-50/30' : 'border-slate-100'}`}>
                                    <button 
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-4 text-left group"
                                    >
                                        <span className={`text-[10px] font-black uppercase tracking-tight transition-colors ${openFaq === idx ? 'text-[#00ff00]' : 'text-slate-900 group-hover:text-slate-600'}`}>{faq.question}</span>
                                        <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#00ff00]' : ''}`} size={16} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40' : 'max-h-0'}`}>
                                        <div className="p-4 pt-0 text-[10px] font-bold text-slate-400 uppercase leading-relaxed tracking-tight border-t border-slate-50">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Support Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-black rounded-lg p-6 text-white shadow-lg space-y-8 border border-slate-800">
                            <div>
                                <h3 className="text-[10px] font-bold text-[#00ff00] uppercase tracking-widest mb-2">Support 24/5</h3>
                                <h2 className="text-lg font-black uppercase tracking-tighter leading-none">Still need help?</h2>
                            </div>

                            <div className="space-y-2">
                                <button className="w-full flex items-center gap-3 p-3 bg-slate-900 border border-slate-800 rounded hover:border-[#00ff00] transition-all text-left group">
                                    <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center group-hover:bg-[#00ff00] group-hover:text-black transition-colors">
                                        <MessageCircle size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Live Chat</p>
                                        <p className="text-[10px] font-black uppercase tracking-tight text-[#00ff00]">Launch Messenger</p>
                                    </div>
                                </button>

                                <button className="w-full flex items-center gap-3 p-3 bg-slate-900 border border-slate-800 rounded hover:border-[#ff00ff] transition-all text-left group">
                                    <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center group-hover:bg-[#ff00ff] group-hover:text-black transition-colors">
                                        <Mail size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Email Support</p>
                                        <p className="text-[10px] font-black uppercase tracking-tight text-[#ff00ff]">support@csfx.com</p>
                                    </div>
                                </button>

                                <button className="w-full flex items-center gap-3 p-3 bg-slate-900 border border-slate-800 rounded hover:border-[#00ff00] transition-all text-left group">
                                    <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center group-hover:bg-[#00ff00] group-hover:text-black transition-colors">
                                        <Phone size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Call Center</p>
                                        <p className="text-[10px] font-black uppercase tracking-tight text-[#00ff00]">+1 800 123 4567</p>
                                    </div>
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-2 py-2 px-4 bg-[#00ff00]/10 border border-[#00ff00]/20 rounded">
                                <span className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse shadow-[0_0_8px_#00ff00]"></span>
                                <span className="text-[10px] font-black text-[#00ff00] uppercase tracking-widest">Agents Online</span>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-6">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Market Sync</h4>
                            <p className="text-[10px] font-black text-slate-900 uppercase tracking-tight leading-relaxed">
                                TECHNICAL SUPPORT FOLLOWS GLOBAL MARKET HOURS: MON 00:00 - FRI 23:59 (GMT+2).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Help;
