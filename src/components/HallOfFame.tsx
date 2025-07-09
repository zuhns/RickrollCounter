import React from 'react';
import { Trophy, Calendar, User, Lightbulb, Star } from 'lucide-react';
import { hallOfFameEntries } from '../data/rickrolls';

const HallOfFame: React.FC = () => {
  const sortedEntries = [...hallOfFameEntries].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  const getCreativityStars = (creativity: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < creativity ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getPerpetratorColor = (perpetrator: string) => {
    return perpetrator === 'Zuhns' 
      ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
      : 'bg-gradient-to-r from-red-500 to-pink-600';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            🏛️ Hall of Fame
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La cronologia completa dei rickroll più creativi e memorabili della sfida. 
            Ogni entry rappresenta un momento di pura genialità rickrolliana.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 to-orange-400 hidden md:block"></div>
            
            <div className="space-y-8">
              {sortedEntries.map((entry, index) => (
                <div key={entry.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                  
                  <div className="md:ml-20 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${getPerpetratorColor(entry.perpetrator)}`}>
                            {entry.perpetrator.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">{entry.perpetrator}</h3>
                            <p className="text-gray-600">rickrollò {entry.victim}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-2">
                            {getCreativityStars(entry.creativity)}
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(entry.date).toLocaleDateString('it-IT')}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-6 mb-6">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center space-x-2">
                          <Lightbulb className="h-5 w-5 text-yellow-500" />
                          <span>Descrizione del Rickroll</span>
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{entry.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Metodo: {entry.method}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Trophy className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium text-gray-700">
                            Creatività: {entry.creativity}/5
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-red-600 text-white p-8 rounded-2xl shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">🎊 Statistiche Hall of Fame</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">{hallOfFameEntries.length}</div>
                  <div className="text-sm opacity-80">Rickroll Totali</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">
                    {(hallOfFameEntries.reduce((acc, entry) => acc + entry.creativity, 0) / hallOfFameEntries.length).toFixed(1)}
                  </div>
                  <div className="text-sm opacity-80">Media Creatività</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">
                    {hallOfFameEntries.filter(e => e.perpetrator === 'Zuhns').length}
                  </div>
                  <div className="text-sm opacity-80">Rickroll Zuhns</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">
                    {hallOfFameEntries.filter(e => e.perpetrator === 'John').length}
                  </div>
                  <div className="text-sm opacity-80">Rickroll John</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;