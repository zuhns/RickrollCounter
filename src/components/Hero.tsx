import React from 'react';
import { Award, TrendingUp, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-red-50 to-orange-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            La Sfida <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Rickroll</span> Definitiva
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Due amici, una missione: chi riuscirà a rickrollare l'altro più volte con creatività, astuzia e rispetto per le regole ufficiali?
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Competizione Fair Play</h3>
              <p className="text-gray-600">Regole chiare, creatività infinita e rispetto reciproco</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Creatività Massima</h3>
              <p className="text-gray-600">Ogni rickroll deve essere unico, intelligente e ben camuffato</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Punteggio Live</h3>
              <p className="text-gray-600">Tracciamento in tempo reale dei rickroll validi</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🎯 Obiettivo della Sfida</h3>
            <p className="text-lg leading-relaxed">
              Rickrollare l'avversario con il video originale di <strong>"Never Gonna Give You Up"</strong> di Rick Astley (1987), 
              utilizzando metodi creativi, sicuri e rispettosi delle regole ufficiali.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;