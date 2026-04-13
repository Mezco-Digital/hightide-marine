import React from 'react';

const AnalyticsDashboard = ({ onBack }) => {
  const stats = [
    { label: 'Total Visitors', value: '1,284', trend: '+12%' },
    { label: 'Form Submissions', value: '42', trend: '+8%' },
    { label: 'Call Now Clicks', value: '67', trend: '+15%' },
    { label: 'Conversion Rate', value: '8.5%', trend: '+2%' },
  ];

  const channels = [
    { name: 'Organic Search', visitors: 450, conversions: 35, effectiveness: 'High' },
    { name: 'Google Ads', visitors: 320, conversions: 28, effectiveness: 'High' },
    { name: 'Facebook', visitors: 280, conversions: 12, effectiveness: 'Medium' },
    { name: 'Instagram', visitors: 150, conversions: 8, effectiveness: 'Medium' },
    { name: 'Direct', visitors: 84, conversions: 6, effectiveness: 'Low' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-black uppercase tracking-widest text-teal-400">
            Hightide Marine <span className="text-white">Growth Dashboard</span>
          </h1>
          <button 
            onClick={onBack}
            className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded font-bold transition"
          >
            ← Back to Site
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
              <div className="text-slate-400 text-sm font-bold uppercase mb-2">{stat.label}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black">{stat.value}</span>
                <span className="text-teal-400 text-sm font-bold">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Channels Table */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-xl font-bold uppercase tracking-tight">Acquisition Channels</h2>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-400 text-xs uppercase font-black">
                <th className="p-6">Channel</th>
                <th className="p-6 text-center">Visitors</th>
                <th className="p-6 text-center">Conversions</th>
                <th className="p-6 text-center">CR %</th>
                <th className="p-6 text-right">ROI Rank</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {channels.map((channel, i) => (
                <tr key={i} className="hover:bg-slate-700/50 transition">
                  <td className="p-6 font-bold">{channel.name}</td>
                  <td className="p-6 text-center font-mono">{channel.visitors}</td>
                  <td className="p-6 text-center font-mono">{channel.conversions}</td>
                  <td className="p-6 text-center font-mono text-teal-400">
                    {((channel.conversions / channel.visitors) * 100).toFixed(1)}%
                  </td>
                  <td className="p-6 text-right">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      channel.effectiveness === 'High' ? 'bg-teal-500/20 text-teal-400' :
                      channel.effectiveness === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-slate-600/20 text-slate-400'
                    }`}>
                      {channel.effectiveness}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <h3 className="text-lg font-bold mb-4 uppercase text-teal-400">Growth Insight</h3>
            <p className="text-slate-300 leading-relaxed">
              Organic search traffic is showing high intent. Consider increasing content production around 
              <span className="text-white font-bold"> "Gelcoat repairs"</span> and <span className="text-white font-bold"> "Bow thruster installation"</span> 
              to capture more local market share.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <h3 className="text-lg font-bold mb-4 uppercase text-orange-400">Next Action</h3>
            <p className="text-slate-300 leading-relaxed">
              Facebook conversion rate is lower than search. Recommend A/B testing ad creatives with 
              more "Before & After" high-fidelity imagery to build trust faster in the social feed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
