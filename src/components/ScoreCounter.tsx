import React from 'react';
import { Trophy, Target, Crown, Star } from 'lucide-react';
import { Participant } from '../types/types';

interface ScoreCounterProps {
  participants: Participant[];
}

const ScoreCounter: React.FC<ScoreCounterProps> = ({ participants }) => {
  const [zuhns, john] = participants;
  const totalRickrolls = zuhns.score + john.score;
  const leader = zuhns.score > john.score ? zuhns : john.score > zuhns.score ? john : null;

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            🏆 Classifica Ufficiale
          </h2>
          <p className="text-xl text-gray-600">
            Punteggio aggiornato in tempo reale • Totale rickroll: {totalRickrolls}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {leader && (
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
                <Crown className="h-5 w-5" />
                <span className="font-bold">Attuale Leader: {leader.name}</span>
                <Crown className="h-5 w-5" />
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {participants.map((participant, index) => {
              const isLeader = leader && participant.name === leader.name;
              const position = index + 1;
              
              return (
                <div
                  key={participant.name}
                  className={`relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl ${
                    isLeader ? 'ring-4 ring-yellow-400 scale-105' : ''
                  }`}
                >
                  {isLeader && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>Leader</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl ${
                      participant.name === 'Zuhns' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                        : 'bg-gradient-to-r from-red-500 to-pink-600'
                    }`}>
                      {participant.name.charAt(0)}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{participant.name}</h3>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Trophy className={`h-8 w-8 ${isLeader ? 'text-yellow-500' : 'text-gray-400'}`} />
                      <span className="text-4xl font-bold text-gray-800">{participant.score}</span>
                      <span className="text-lg text-gray-500">rickroll</span>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Target className="h-4 w-4" />
                        <span>Posizione #{position}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>{Math.round((participant.score / totalRickrolls) * 100) || 0}% successo</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${
                          participant.name === 'Zuhns' 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                            : 'bg-gradient-to-r from-red-500 to-pink-600'
                        }`}
                        style={{ width: `${(participant.score / Math.max(5, totalRickrolls)) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-600 to-red-600 text-white p-8 rounded-2xl shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">📈 Statistiche della Sfida</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">{totalRickrolls}</div>
                  <div className="text-sm opacity-80">Rickroll Totali</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">{Math.abs(zuhns.score - john.score)}</div>
                  <div className="text-sm opacity-80">Differenza</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">{leader ? leader.score : '0'}</div>
                  <div className="text-sm opacity-80">Record Leader</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Fair Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoreCounter;