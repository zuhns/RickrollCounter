import React from 'react';
import { 
  Volume2, Play, Ban, Shield, MousePointer, 
  Zap, Brain, Clock, Target, Heart, 
  CheckCircle, XCircle, Info
} from 'lucide-react';
import { officialRules } from '../data/rules';

const iconMap = {
  Volume2, Play, Ban, Shield, MousePointer, 
  Zap, Brain, Clock, Target, Heart
};

const Rules: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            📜 Regole Ufficiali del Rickroll Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Regole chiare e definitive per garantire una competizione equa, creativa e rispettosa. 
            Ogni rickroll deve rispettare tutti i seguenti requisiti per essere considerato valido.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {officialRules.map((rule, index) => {
              const IconComponent = iconMap[rule.icon as keyof typeof iconMap];
              
              return (
                <div
                  key={rule.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-r from-red-500 to-orange-500 w-14 h-14 rounded-full flex items-center justify-center">
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="bg-gradient-to-r from-purple-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            Regola {rule.id}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-800">{rule.title}</h3>
                        </div>
                        
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                          {rule.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {rule.examples && rule.examples.length > 0 && (
                            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                              <div className="flex items-center space-x-2 mb-3">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <h4 className="font-bold text-green-800">✅ Esempi Validi</h4>
                              </div>
                              <ul className="space-y-2">
                                {rule.examples.map((example, idx) => (
                                  <li key={idx} className="text-green-700 flex items-start space-x-2">
                                    <span className="text-green-600 mt-1">•</span>
                                    <span>{example}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {rule.forbidden && rule.forbidden.length > 0 && (
                            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                              <div className="flex items-center space-x-2 mb-3">
                                <XCircle className="h-5 w-5 text-red-600" />
                                <h4 className="font-bold text-red-800">❌ Vietato</h4>
                              </div>
                              <ul className="space-y-2">
                                {rule.forbidden.map((forbidden, idx) => (
                                  <li key={idx} className="text-red-700 flex items-start space-x-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>{forbidden}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <div className="flex items-start space-x-4">
              <Info className="h-8 w-8 text-blue-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4">🎯 Ricorda: L'Essenza del Rickroll</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Un rickroll perfetto è un'opera d'arte che combina <strong>creatività</strong>, 
                  <strong>intelligenza</strong> e <strong>tempismo</strong>. L'obiettivo non è solo 
                  ingannare, ma creare un momento memorabile e divertente per tutti.
                </p>
                <p className="text-blue-200">
                  Che vinca il migliore! 🏆
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;